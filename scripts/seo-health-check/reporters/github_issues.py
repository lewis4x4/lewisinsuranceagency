"""
GitHub Issue Reporter - Creates GitHub issues for SEO problems
"""

import os
import subprocess
from typing import Dict, Any
from datetime import datetime


class GitHubIssueReporter:
    def __init__(self):
        self.repo = os.environ.get("GITHUB_REPOSITORY", "")
        self.token = os.environ.get("GITHUB_TOKEN", "")

    def create_issue(self, issue: Dict[str, Any]) -> bool:
        """Create a GitHub issue for an SEO problem"""
        if not self.token:
            print("   No GITHUB_TOKEN available")
            return False

        title = self._generate_title(issue)
        body = self._generate_body(issue)
        labels = self._get_labels(issue)

        try:
            # Use gh CLI to create issue
            cmd = [
                "gh", "issue", "create",
                "--title", title,
                "--body", body,
            ]

            for label in labels:
                cmd.extend(["--label", label])

            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                env={**os.environ, "GH_TOKEN": self.token}
            )

            if result.returncode == 0:
                print(f"   Created issue: {title}")
                return True
            else:
                print(f"   Failed to create issue: {result.stderr}")
                return False

        except Exception as e:
            print(f"   Error creating issue: {e}")
            return False

    def _generate_title(self, issue: Dict[str, Any]) -> str:
        """Generate issue title"""
        issue_type = issue.get("type", "seo-issue").replace("_", " ").title()
        page = issue.get("page", issue.get("file", ""))

        if page:
            return f"[SEO] {issue_type}: {page[:40]}"
        return f"[SEO] {issue_type}"

    def _generate_body(self, issue: Dict[str, Any]) -> str:
        """Generate issue body"""
        date = datetime.now().strftime("%Y-%m-%d")

        body = f"""## SEO Issue Detected

**Type:** {issue.get('type', 'Unknown').replace('_', ' ').title()}
**Severity:** {issue.get('severity', 'Unknown').upper()}
**Detected:** {date}

### Description

{issue.get('description', 'No description available.')}

### Details

"""

        # Add relevant details
        if issue.get("file"):
            body += f"- **File:** `{issue['file']}`\n"
        if issue.get("page"):
            body += f"- **Page:** {issue['page']}\n"
        if issue.get("line"):
            body += f"- **Line:** {issue['line']}\n"
        if issue.get("current"):
            body += f"- **Current Value:** `{issue['current']}`\n"
        if issue.get("expected"):
            body += f"- **Expected:** `{issue['expected']}`\n"
        if issue.get("duplicate_of"):
            body += f"- **Duplicate of:** {issue['duplicate_of']}\n"
        if issue.get("similarity"):
            body += f"- **Similarity:** {issue['similarity']}%\n"
        if issue.get("href"):
            body += f"- **Link:** `{issue['href']}`\n"

        body += """

### Resolution

"""

        # Add resolution guidance based on issue type
        resolutions = {
            "duplicate_title": "Update one of the page titles to be unique and descriptive of its content.",
            "missing_description": "Add a meta description of 150-160 characters that summarizes the page content.",
            "description_too_short": "Expand the meta description to at least 120 characters.",
            "broken_external_link": "Update or remove the broken link, or find an alternative resource.",
            "duplicate_content": "Differentiate the content or consider canonical tags if intentional.",
            "low_lighthouse_score": "Review Lighthouse report for specific recommendations.",
            "thin_content": "Add more valuable content to reach at least 300 words.",
        }

        issue_type = issue.get("type", "")
        if issue_type in resolutions:
            body += resolutions[issue_type]
        else:
            body += "Review and fix the issue as appropriate."

        body += """

---
*This issue was automatically created by the SEO Health Check workflow.*
"""

        return body

    def _get_labels(self, issue: Dict[str, Any]) -> list:
        """Get labels for the issue"""
        labels = ["seo-health", "auto-detected"]

        severity = issue.get("severity", "warning")
        if severity == "critical":
            labels.append("priority:high")
        elif severity == "warning":
            labels.append("priority:medium")

        issue_type = issue.get("type", "")
        if "content" in issue_type or "duplicate" in issue_type:
            labels.append("type:content")
        elif "link" in issue_type:
            labels.append("type:technical")
        elif "meta" in issue_type or "title" in issue_type or "description" in issue_type:
            labels.append("type:metadata")

        return labels
