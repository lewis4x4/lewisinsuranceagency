"""
Alt Text Fixer - Auto-generates alt text for images missing it
"""

import re
from pathlib import Path
from typing import List, Dict, Any


class AltTextFixer:
    def __init__(self, project_root: Path):
        self.project_root = project_root

    def fix(self, report: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Fix missing alt text issues"""
        fixes_applied = []

        # Get all missing alt issues
        issues = [i for i in report.get("warnings", []) + report.get("critical", [])
                  if i.get("type") == "missing_alt" and i.get("auto_fixable")]

        # Group by file
        files_to_fix = {}
        for issue in issues:
            file_path = issue.get("file")
            if file_path not in files_to_fix:
                files_to_fix[file_path] = []
            files_to_fix[file_path].append(issue)

        for file_path, file_issues in files_to_fix.items():
            full_path = self.project_root / file_path

            try:
                content = full_path.read_text(encoding="utf-8")
                original_content = content

                for issue in file_issues:
                    src = issue.get("src", "")
                    alt_text = self._generate_alt_text(src, file_path)

                    # Fix Next.js Image component
                    # Find Image tags without alt and add alt attribute
                    pattern = r'(<Image\s+[^>]*src\s*=\s*["\']' + re.escape(src) + r'["\'][^>]*?)(/?>)'

                    def add_alt(match):
                        tag = match.group(1)
                        closing = match.group(2)
                        # Only add if alt not present
                        if 'alt=' not in tag:
                            return f'{tag} alt="{alt_text}"{closing}'
                        return match.group(0)

                    content = re.sub(pattern, add_alt, content, count=1)

                    # Also fix <img> tags
                    img_pattern = r'(<img\s+[^>]*src\s*=\s*["\']' + re.escape(src) + r'["\'][^>]*?)(/?>)'
                    content = re.sub(img_pattern, add_alt, content, count=1)

                if content != original_content:
                    full_path.write_text(content, encoding="utf-8")
                    fixes_applied.append({
                        "type": "alt_text_added",
                        "file": file_path,
                        "count": len(file_issues),
                        "description": f"Added alt text to {len(file_issues)} image(s)",
                    })

            except Exception as e:
                print(f"   Error fixing {file_path}: {e}")

        return fixes_applied

    def _generate_alt_text(self, src: str, file_path: str) -> str:
        """Generate descriptive alt text from image src and context"""
        if not src:
            return "Image"

        # Extract filename without extension
        filename = Path(src).stem

        # Convert kebab-case and snake_case to readable text
        readable = filename.replace("-", " ").replace("_", " ")

        # Clean up common prefixes/suffixes
        for pattern in ["img", "image", "icon", "logo", "bg", "background"]:
            readable = re.sub(rf'\b{pattern}\b', '', readable, flags=re.IGNORECASE)

        readable = " ".join(readable.split())  # Clean whitespace

        if not readable:
            readable = "Image"

        # Add context from file path
        if "hero" in file_path.lower() or "hero" in src.lower():
            readable = f"{readable} hero image"
        elif "testimonial" in file_path.lower():
            readable = f"{readable} testimonial"
        elif "team" in file_path.lower():
            readable = f"{readable} team member"

        # Capitalize first letter
        readable = readable.strip().capitalize()

        # Ensure reasonable length
        if len(readable) > 100:
            readable = readable[:97] + "..."

        return readable
