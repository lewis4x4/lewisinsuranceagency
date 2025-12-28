"""
Canonical URL Fixer - Adds missing canonical URLs to pages
"""

import re
from pathlib import Path
from typing import List, Dict, Any


class CanonicalFixer:
    def __init__(self, project_root: Path):
        self.project_root = project_root
        self.site_url = "https://lewisinsurance.com"

    def fix(self, report: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Fix missing canonical URL issues"""
        fixes_applied = []

        # Get all missing canonical issues
        issues = [i for i in report.get("warnings", []) + report.get("critical", [])
                  if i.get("type") == "missing_canonical" and i.get("auto_fixable")]

        for issue in issues:
            file_path = issue.get("file")
            page_path = issue.get("page", "")
            full_path = self.project_root / file_path

            try:
                content = full_path.read_text(encoding="utf-8")
                original_content = content

                # Check if metadata export exists
                if "export const metadata: Metadata" in content:
                    # Add alternates to existing metadata
                    content = self._add_alternates_to_metadata(content, page_path)
                elif "export const metadata" in content:
                    # Add alternates with type annotation
                    content = self._add_alternates_to_metadata(content, page_path)

                if content != original_content:
                    full_path.write_text(content, encoding="utf-8")
                    fixes_applied.append({
                        "type": "canonical_added",
                        "file": file_path,
                        "page": page_path,
                        "canonical": f"{self.site_url}{page_path}",
                        "description": f"Added canonical URL to {page_path}",
                    })

            except Exception as e:
                print(f"   Error fixing canonical in {file_path}: {e}")

        return fixes_applied

    def _add_alternates_to_metadata(self, content: str, page_path: str) -> str:
        """Add alternates.canonical to existing metadata object"""
        canonical_url = f"{self.site_url}{page_path}"

        # Check if alternates already exists
        if "alternates:" in content or "alternates :" in content:
            return content  # Don't modify if alternates exists

        # Find the metadata object - it should be near the top of the file
        # and end with } followed by a newline and then const, function, export, or type declaration
        # This pattern is more specific to avoid matching React component returns

        # Pattern: export const metadata: Metadata = { ... }
        # followed by another declaration (const, function, export, type, interface)
        metadata_pattern = r'(export const metadata:\s*Metadata\s*=\s*\{)([\s\S]*?)(\}\s*\n\s*(?:const|function|export|type|interface|\/\/))'

        def add_alternates(match):
            start = match.group(1)
            body = match.group(2)
            end = match.group(3)

            # Check if body ends with comma
            body_stripped = body.rstrip()
            if body_stripped and not body_stripped.endswith(','):
                body = body_stripped + ','

            # Add alternates
            alternates = f'''
    alternates: {{
        canonical: "{canonical_url}",
    }},'''

            return start + body + alternates + '\n' + end

        new_content = re.sub(metadata_pattern, add_alternates, content)

        # If the typed pattern didn't work, try without type annotation
        if new_content == content:
            # Pattern for: export const metadata = { ... }
            simple_pattern = r'(export const metadata\s*=\s*\{)([\s\S]*?)(\}\s*\n\s*(?:const|function|export|type|interface|\/\/))'

            def simple_add(match):
                start = match.group(1)
                body = match.group(2)
                end = match.group(3)

                if "alternates" in body:
                    return match.group(0)

                body_stripped = body.rstrip()
                if not body_stripped.endswith(','):
                    body = body_stripped + ','

                return start + body + f'''
    alternates: {{
        canonical: "{canonical_url}",
    }},
''' + end

            new_content = re.sub(simple_pattern, simple_add, content)

        return new_content
