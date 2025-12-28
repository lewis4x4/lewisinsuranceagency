"""
Meta Analyzer - Checks titles and descriptions for SEO issues
"""

import re
from pathlib import Path
from typing import List, Dict, Any


class MetaAnalyzer:
    def __init__(self, project_root: Path):
        self.project_root = project_root
        self.app_dir = project_root / "app"
        self.title_min = 30
        self.title_max = 60
        self.desc_min = 120
        self.desc_max = 160

    def analyze(self) -> Dict[str, Any]:
        """Analyze all pages for meta tag issues"""
        issues = []
        seen_titles = {}
        seen_descriptions = {}

        # Find all page.tsx files
        page_files = list(self.app_dir.rglob("page.tsx"))

        for file_path in page_files:
            page_issues = self._analyze_page(file_path, seen_titles, seen_descriptions)
            issues.extend(page_issues)

        return {"issues": issues}

    def _analyze_page(self, file_path: Path, seen_titles: dict, seen_descriptions: dict) -> List[Dict[str, Any]]:
        """Analyze a single page for meta issues"""
        issues = []

        try:
            content = file_path.read_text(encoding="utf-8")
        except Exception:
            return issues

        # Also check for layout.tsx in the same directory (metadata can be there too)
        layout_content = ""
        layout_path = file_path.parent / "layout.tsx"
        if layout_path.exists():
            try:
                layout_content = layout_path.read_text(encoding="utf-8")
            except Exception:
                pass

        # Combine content for metadata search (page + layout)
        combined_content = content + "\n" + layout_content

        page_path = self._file_to_route(file_path)

        # Skip certain paths
        skip_patterns = ["/api/", "/thank-you", "/portal"]
        if any(pattern in page_path for pattern in skip_patterns):
            return issues

        # Extract title - multiple patterns (check both page and layout)
        title = None
        title_patterns = [
            r'title:\s*["\']([^"\']+)["\']',  # title: "..."
            r'title:\s*`([^`]+)`',  # title: `...`
            r'"title":\s*["\']([^"\']+)["\']',  # "title": "..."
        ]

        for pattern in title_patterns:
            title_match = re.search(pattern, combined_content)
            if title_match:
                title = title_match.group(1)
                break

        if title:
            # Check length
            if len(title) < self.title_min:
                issues.append({
                    "type": "title_too_short",
                    "severity": "warning",
                    "file": str(file_path.relative_to(self.project_root)),
                    "page": page_path,
                    "current": title,
                    "length": len(title),
                    "auto_fixable": False,
                    "description": f"Title too short ({len(title)} chars, min {self.title_min})",
                })
            elif len(title) > self.title_max:
                issues.append({
                    "type": "title_too_long",
                    "severity": "warning",
                    "file": str(file_path.relative_to(self.project_root)),
                    "page": page_path,
                    "current": title,
                    "length": len(title),
                    "auto_fixable": False,
                    "description": f"Title too long ({len(title)} chars, max {self.title_max})",
                })

            # Check duplicates
            if title in seen_titles:
                issues.append({
                    "type": "duplicate_title",
                    "severity": "critical",
                    "file": str(file_path.relative_to(self.project_root)),
                    "page": page_path,
                    "duplicate_of": seen_titles[title],
                    "auto_fixable": False,
                    "description": f"Duplicate title with {seen_titles[title]}",
                })
            else:
                seen_titles[title] = page_path
        else:
            # Check if using generateMetadata function (dynamic) - check both page and layout
            if "generateMetadata" not in combined_content and "metadata" not in combined_content.lower():
                issues.append({
                    "type": "missing_title",
                    "severity": "critical",
                    "file": str(file_path.relative_to(self.project_root)),
                    "page": page_path,
                    "auto_fixable": False,
                    "description": "Page missing title metadata",
                })

        # Extract description (check both page and layout)
        description = None
        desc_patterns = [
            r'description:\s*["\']([^"\']+)["\']',
            r'description:\s*`([^`]+)`',
            r'"description":\s*["\']([^"\']+)["\']',
        ]

        for pattern in desc_patterns:
            desc_match = re.search(pattern, combined_content)
            if desc_match:
                description = desc_match.group(1)
                break

        if description:
            if len(description) < self.desc_min:
                issues.append({
                    "type": "description_too_short",
                    "severity": "warning",
                    "file": str(file_path.relative_to(self.project_root)),
                    "page": page_path,
                    "current": description[:50] + "..." if len(description) > 50 else description,
                    "length": len(description),
                    "auto_fixable": False,
                    "description": f"Meta description too short ({len(description)} chars, min {self.desc_min})",
                })
            elif len(description) > self.desc_max:
                issues.append({
                    "type": "description_too_long",
                    "severity": "info",
                    "file": str(file_path.relative_to(self.project_root)),
                    "page": page_path,
                    "length": len(description),
                    "auto_fixable": False,
                    "description": f"Meta description long ({len(description)} chars, max {self.desc_max})",
                })
        else:
            # Check both page and layout for generateMetadata
            if "generateMetadata" not in combined_content:
                issues.append({
                    "type": "missing_description",
                    "severity": "critical",
                    "file": str(file_path.relative_to(self.project_root)),
                    "page": page_path,
                    "auto_fixable": False,
                    "description": "Page missing meta description",
                })

        return issues

    def _file_to_route(self, file_path: Path) -> str:
        """Convert file path to route path"""
        try:
            route = str(file_path.relative_to(self.app_dir))
            route = route.replace("/page.tsx", "").replace("page.tsx", "")
            # Handle route groups like (marketing)
            route = re.sub(r'\([^)]+\)/?', '', route)
            return f"/{route}" if route else "/"
        except ValueError:
            return str(file_path)
