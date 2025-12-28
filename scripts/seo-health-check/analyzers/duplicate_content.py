"""
Duplicate Content Analyzer - Detects pages with similar content
"""

import re
from pathlib import Path
from typing import List, Dict, Any
from difflib import SequenceMatcher


class DuplicateContentAnalyzer:
    def __init__(self, project_root: Path):
        self.project_root = project_root
        self.app_dir = project_root / "app"
        self.similarity_threshold = 0.7  # 70% similar = flag
        self.min_word_count = 300  # Below this is "thin content"

    def analyze(self) -> Dict[str, Any]:
        """Analyze pages for duplicate and thin content"""
        issues = []

        # Get all page content
        pages = self._extract_page_content()

        # Check for thin content
        for page_path, content in pages.items():
            word_count = len(content.split())
            if word_count < self.min_word_count and word_count > 0:
                # Skip certain pages that are expected to be short
                skip_patterns = ["/thank-you", "/portal", "/api/", "/404", "/loading"]
                if not any(pattern in page_path for pattern in skip_patterns):
                    issues.append({
                        "type": "thin_content",
                        "severity": "warning",
                        "page": page_path,
                        "word_count": word_count,
                        "threshold": self.min_word_count,
                        "auto_fixable": False,
                        "description": f"Thin content ({word_count} words, recommend {self.min_word_count}+)",
                    })

        # Check for duplicate content
        page_list = list(pages.items())
        checked_pairs = set()

        for i, (path1, content1) in enumerate(page_list):
            for j, (path2, content2) in enumerate(page_list):
                if i >= j:
                    continue

                pair_key = tuple(sorted([path1, path2]))
                if pair_key in checked_pairs:
                    continue
                checked_pairs.add(pair_key)

                # Skip if either page is very short
                if len(content1.split()) < 100 or len(content2.split()) < 100:
                    continue

                similarity = self._calculate_similarity(content1, content2)

                if similarity >= self.similarity_threshold:
                    issues.append({
                        "type": "duplicate_content",
                        "severity": "warning",
                        "page1": path1,
                        "page2": path2,
                        "similarity": round(similarity * 100, 1),
                        "auto_fixable": False,
                        "description": f"Content {round(similarity * 100)}% similar: {path1} & {path2}",
                    })

        return {"issues": issues}

    def _extract_page_content(self) -> Dict[str, str]:
        """Extract text content from page files"""
        pages = {}

        for page_file in self.app_dir.rglob("page.tsx"):
            try:
                content = page_file.read_text(encoding="utf-8")
            except Exception:
                continue

            page_path = self._file_to_route(page_file)

            # Extract text content from the page
            text_content = self._extract_text_from_tsx(content)
            if text_content:
                pages[page_path] = text_content

        return pages

    def _extract_text_from_tsx(self, content: str) -> str:
        """Extract text strings from TSX content"""
        text_parts = []

        # Extract string literals in JSX
        # Pattern for text between > and <
        jsx_text = re.findall(r'>([^<>{]+)<', content)
        for text in jsx_text:
            cleaned = text.strip()
            if cleaned and not cleaned.startswith('{') and len(cleaned) > 3:
                text_parts.append(cleaned)

        # Extract from string arrays (overview, faqs, etc.)
        string_arrays = re.findall(r'["\']([^"\']{20,})["\']', content)
        for text in string_arrays:
            if not text.startswith('/') and not text.startswith('http'):
                text_parts.append(text)

        return " ".join(text_parts)

    def _calculate_similarity(self, text1: str, text2: str) -> float:
        """Calculate text similarity using SequenceMatcher"""
        # Normalize text
        text1 = text1.lower().strip()
        text2 = text2.lower().strip()

        return SequenceMatcher(None, text1, text2).ratio()

    def _file_to_route(self, file_path: Path) -> str:
        """Convert file path to route path"""
        try:
            route = str(file_path.relative_to(self.app_dir))
            route = route.replace("/page.tsx", "").replace("page.tsx", "")
            route = re.sub(r'\([^)]+\)/?', '', route)
            return f"/{route}" if route else "/"
        except ValueError:
            return str(file_path)
