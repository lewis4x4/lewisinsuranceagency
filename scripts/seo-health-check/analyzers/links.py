"""
Link Analyzer - Checks for broken internal and external links
"""

import re
import requests
from pathlib import Path
from typing import List, Dict, Any
from concurrent.futures import ThreadPoolExecutor, as_completed


class LinkAnalyzer:
    def __init__(self, project_root: Path, check_external: bool = False):
        self.project_root = project_root
        self.app_dir = project_root / "app"
        self.components_dir = project_root / "src" / "components"
        self.check_external = check_external
        self.timeout = 10
        self.valid_routes = self._build_valid_routes()

    def _build_valid_routes(self) -> set:
        """Build set of valid internal routes from app directory"""
        routes = set()
        routes.add("/")

        for page_file in self.app_dir.rglob("page.tsx"):
            route = str(page_file.relative_to(self.app_dir))
            route = route.replace("/page.tsx", "").replace("page.tsx", "")
            # Handle route groups
            route = re.sub(r'\([^)]+\)/?', '', route)
            if route:
                routes.add(f"/{route}")
            else:
                routes.add("/")

        return routes

    def analyze(self) -> Dict[str, Any]:
        """Analyze links based on mode (internal or external)"""
        if self.check_external:
            return self._analyze_external_links()
        else:
            return self._analyze_internal_links()

    def _analyze_internal_links(self) -> Dict[str, Any]:
        """Check internal links against valid routes"""
        issues = []
        all_links = self._extract_all_links()

        for link_info in all_links:
            href = link_info["href"]

            # Only check internal links
            if href.startswith("http") or href.startswith("mailto:") or href.startswith("tel:"):
                continue

            # Skip anchors and query params only
            if href.startswith("#") or href.startswith("?"):
                continue

            # Normalize href
            clean_href = href.split("?")[0].split("#")[0].rstrip("/")
            if not clean_href:
                clean_href = "/"

            # Check if route exists
            if clean_href not in self.valid_routes and clean_href != "/":
                # Check if it might be a dynamic route
                if not self._is_dynamic_route(clean_href):
                    issues.append({
                        "type": "broken_internal_link",
                        "severity": "warning",
                        "file": link_info["file"],
                        "line": link_info["line"],
                        "href": href,
                        "auto_fixable": False,
                        "description": f"Internal link to non-existent route: {href}",
                    })

        return {"issues": issues}

    def _analyze_external_links(self) -> Dict[str, Any]:
        """Check external links are accessible"""
        issues = []
        all_links = self._extract_all_links()

        external_links = [
            link for link in all_links
            if link["href"].startswith("http") and "lewisinsurance" not in link["href"]
        ]

        # Deduplicate URLs for checking
        unique_urls = {}
        for link in external_links:
            url = link["href"]
            if url not in unique_urls:
                unique_urls[url] = link

        # Check URLs in parallel
        with ThreadPoolExecutor(max_workers=5) as executor:
            futures = {
                executor.submit(self._check_url, url): info
                for url, info in unique_urls.items()
            }

            for future in as_completed(futures):
                link_info = futures[future]
                try:
                    is_valid, status_code = future.result()
                    if not is_valid:
                        issues.append({
                            "type": "broken_external_link",
                            "severity": "warning",
                            "file": link_info["file"],
                            "href": link_info["href"],
                            "status_code": status_code,
                            "auto_fixable": False,
                            "description": f"External link returned {status_code}: {link_info['href'][:50]}...",
                        })
                except Exception as e:
                    issues.append({
                        "type": "broken_external_link",
                        "severity": "warning",
                        "file": link_info["file"],
                        "href": link_info["href"],
                        "error": str(e),
                        "auto_fixable": False,
                        "description": f"External link error: {link_info['href'][:50]}...",
                    })

        return {"issues": issues}

    def _extract_all_links(self) -> List[Dict[str, Any]]:
        """Extract all links from TSX files"""
        links = []

        tsx_files = list(self.app_dir.rglob("*.tsx"))
        tsx_files += list(self.components_dir.rglob("*.tsx"))

        for file_path in tsx_files:
            try:
                content = file_path.read_text(encoding="utf-8")
            except Exception:
                continue

            # Pattern for Next.js Link href
            link_pattern = r'<Link\s+[^>]*href\s*=\s*["\']([^"\']+)["\']'
            for match in re.finditer(link_pattern, content):
                links.append({
                    "href": match.group(1),
                    "file": str(file_path.relative_to(self.project_root)),
                    "line": content[:match.start()].count('\n') + 1,
                })

            # Pattern for <a> tags
            a_pattern = r'<a\s+[^>]*href\s*=\s*["\']([^"\']+)["\']'
            for match in re.finditer(a_pattern, content):
                links.append({
                    "href": match.group(1),
                    "file": str(file_path.relative_to(self.project_root)),
                    "line": content[:match.start()].count('\n') + 1,
                })

        return links

    def _is_dynamic_route(self, href: str) -> bool:
        """Check if href might match a dynamic route"""
        # Check if any part of the route could be dynamic
        parts = href.strip("/").split("/")

        for page_file in self.app_dir.rglob("page.tsx"):
            route_parts = str(page_file.relative_to(self.app_dir)).replace("/page.tsx", "").split("/")
            route_parts = [p for p in route_parts if not p.startswith("(")]

            if len(parts) == len(route_parts):
                match = True
                for i, (href_part, route_part) in enumerate(zip(parts, route_parts)):
                    if route_part.startswith("[") and route_part.endswith("]"):
                        continue  # Dynamic segment matches anything
                    if href_part != route_part:
                        match = False
                        break
                if match:
                    return True

        return False

    def _check_url(self, url: str) -> tuple:
        """Check if URL is accessible"""
        try:
            response = requests.head(url, timeout=self.timeout, allow_redirects=True)
            return (response.status_code < 400, response.status_code)
        except requests.RequestException:
            # Try GET if HEAD fails
            try:
                response = requests.get(url, timeout=self.timeout, allow_redirects=True)
                return (response.status_code < 400, response.status_code)
            except requests.RequestException as e:
                return (False, str(e)[:50])
