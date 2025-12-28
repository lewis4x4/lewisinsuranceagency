"""
Canonical URL Analyzer - Checks for missing or incorrect canonical URLs
"""

import re
from pathlib import Path
from typing import List, Dict, Any


class CanonicalAnalyzer:
    def __init__(self, project_root: Path):
        self.project_root = project_root
        self.app_dir = project_root / "app"
        self.site_url = "https://lewisinsurance.com"

    def analyze(self) -> Dict[str, Any]:
        """Analyze all pages for canonical URL issues"""
        issues = []

        # Find all page.tsx files
        page_files = list(self.app_dir.rglob("page.tsx"))

        for file_path in page_files:
            page_issues = self._analyze_page(file_path)
            issues.extend(page_issues)

        return {"issues": issues}

    def _analyze_page(self, file_path: Path) -> List[Dict[str, Any]]:
        """Analyze a single page for canonical issues"""
        issues = []

        try:
            content = file_path.read_text(encoding="utf-8")
        except Exception:
            return issues

        page_path = self._file_to_route(file_path)

        # Skip certain paths
        skip_patterns = ["/api/", "/thank-you", "/portal", "/_"]
        if any(pattern in page_path for pattern in skip_patterns):
            return issues

        # Check for canonical URL in metadata
        has_canonical = False

        # Pattern 1: alternates.canonical
        if re.search(r'alternates:\s*\{[^}]*canonical', content, re.DOTALL):
            has_canonical = True

        # Pattern 2: canonical in metadata object
        if re.search(r'canonical:\s*["`\']', content):
            has_canonical = True

        # Pattern 3: using generateMetadata function (likely has canonical)
        if "generateMetadata" in content and "canonical" in content:
            has_canonical = True

        if not has_canonical:
            # Check if this is a page that should have metadata
            # Skip if it's using a template that handles metadata
            if "CityServicePageTemplate" in content or "ServicePageTemplate" in content:
                # These templates should include canonical
                if "alternates" not in content:
                    issues.append({
                        "type": "missing_canonical",
                        "severity": "warning",
                        "file": str(file_path.relative_to(self.project_root)),
                        "page": page_path,
                        "expected": f"{self.site_url}{page_path}",
                        "auto_fixable": True,
                        "description": f"Page missing canonical URL",
                    })
            elif "export const metadata" in content or "export async function generateMetadata" in content:
                issues.append({
                    "type": "missing_canonical",
                    "severity": "warning",
                    "file": str(file_path.relative_to(self.project_root)),
                    "page": page_path,
                    "expected": f"{self.site_url}{page_path}",
                    "auto_fixable": True,
                    "description": f"Page metadata missing canonical URL",
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
