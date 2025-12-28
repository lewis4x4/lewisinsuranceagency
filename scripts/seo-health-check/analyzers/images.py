"""
Image Analyzer - Checks for missing alt text on images
"""

import re
from pathlib import Path
from typing import List, Dict, Any


class ImageAnalyzer:
    def __init__(self, project_root: Path):
        self.project_root = project_root
        self.app_dir = project_root / "app"
        self.components_dir = project_root / "src" / "components"

    def analyze(self) -> Dict[str, Any]:
        """Analyze all images for missing alt text"""
        issues = []

        # Find all TSX files
        tsx_files = list(self.app_dir.rglob("*.tsx"))
        tsx_files += list(self.components_dir.rglob("*.tsx"))

        for file_path in tsx_files:
            file_issues = self._check_file(file_path)
            issues.extend(file_issues)

        return {"issues": issues}

    def _check_file(self, file_path: Path) -> List[Dict[str, Any]]:
        """Check a single file for image alt text issues"""
        issues = []

        try:
            content = file_path.read_text(encoding="utf-8")
        except Exception:
            return issues

        # Check Next.js Image components
        # Pattern: <Image ... /> - look for missing or empty alt
        image_pattern = r'<Image\s+([^>]*?)/?>'

        for match in re.finditer(image_pattern, content, re.DOTALL):
            attrs = match.group(1)
            line_num = content[:match.start()].count('\n') + 1

            # Check if alt attribute exists and has value
            alt_match = re.search(r'alt\s*=\s*["\']([^"\']*)["\']', attrs)
            alt_var_match = re.search(r'alt\s*=\s*\{([^}]+)\}', attrs)

            if not alt_match and not alt_var_match:
                # Get src for context
                src_match = re.search(r'src\s*=\s*["\']([^"\']+)["\']', attrs)
                src = src_match.group(1) if src_match else "unknown"

                issues.append({
                    "type": "missing_alt",
                    "severity": "warning",
                    "file": str(file_path.relative_to(self.project_root)),
                    "line": line_num,
                    "src": src,
                    "auto_fixable": True,
                    "description": f"Next.js Image missing alt text",
                })
            elif alt_match and alt_match.group(1).strip() == "":
                issues.append({
                    "type": "empty_alt",
                    "severity": "info",
                    "file": str(file_path.relative_to(self.project_root)),
                    "line": line_num,
                    "auto_fixable": False,
                    "description": "Image has empty alt (may be decorative)",
                })

        # Check standard img tags
        img_pattern = r'<img\s+([^>]*?)/?>'

        for match in re.finditer(img_pattern, content, re.DOTALL):
            attrs = match.group(1)
            line_num = content[:match.start()].count('\n') + 1

            alt_match = re.search(r'alt\s*=\s*["\']([^"\']*)["\']', attrs)

            if not alt_match:
                src_match = re.search(r'src\s*=\s*["\']([^"\']+)["\']', attrs)
                src = src_match.group(1) if src_match else "unknown"

                issues.append({
                    "type": "missing_alt",
                    "severity": "warning",
                    "file": str(file_path.relative_to(self.project_root)),
                    "line": line_num,
                    "src": src,
                    "auto_fixable": True,
                    "description": f"<img> tag missing alt text",
                })

        return issues
