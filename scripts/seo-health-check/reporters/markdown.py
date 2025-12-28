"""
Markdown Reporter - Generates markdown reports
"""

from datetime import datetime
from typing import Dict, Any


class MarkdownReporter:
    def generate(self, report: Dict[str, Any]) -> str:
        """Generate a markdown report from the SEO check results"""
        lines = []

        # Header
        date = datetime.now().strftime("%B %d, %Y")
        lines.append(f"# SEO Health Report - {date}")
        lines.append("")
        lines.append(f"**Site:** {report.get('site_url', 'N/A')}")
        lines.append(f"**Generated:** {report.get('date', 'N/A')}")

        critical_count = len(report.get("critical", []))
        warning_count = len(report.get("warnings", []))
        info_count = len(report.get("info", []))

        lines.append(f"**Status:** {critical_count} Critical | {warning_count} Warnings | {info_count} Info")
        lines.append("")

        # Lighthouse Scores
        scores = report.get("lighthouse_scores", {})
        if scores:
            lines.append("---")
            lines.append("")
            lines.append("## Lighthouse Scores")
            lines.append("")
            lines.append("| Category | Score |")
            lines.append("|----------|-------|")
            for category, score in scores.items():
                emoji = "🟢" if score >= 90 else "🟡" if score >= 70 else "🔴"
                lines.append(f"| {category.title()} | {emoji} {score}/100 |")
            lines.append("")

        # Fixes Applied
        fixes = report.get("fixes_applied", [])
        if fixes:
            lines.append("---")
            lines.append("")
            lines.append("## Auto-Fixes Applied")
            lines.append("")
            for fix in fixes:
                lines.append(f"- ✅ {fix.get('description', 'Fix applied')}")
            lines.append("")

        # Critical Issues
        critical = report.get("critical", [])
        if critical:
            lines.append("---")
            lines.append("")
            lines.append("## 🔴 Critical Issues (Requires Immediate Action)")
            lines.append("")
            for i, issue in enumerate(critical, 1):
                lines.append(f"### {i}. {issue.get('type', 'Issue').replace('_', ' ').title()}")
                lines.append("")
                lines.append(f"**Description:** {issue.get('description', 'N/A')}")
                if issue.get("file"):
                    lines.append(f"**File:** `{issue['file']}`")
                if issue.get("page"):
                    lines.append(f"**Page:** {issue['page']}")
                if issue.get("duplicate_of"):
                    lines.append(f"**Duplicate of:** {issue['duplicate_of']}")
                lines.append("")

        # Warnings
        warnings = report.get("warnings", [])
        if warnings:
            lines.append("---")
            lines.append("")
            lines.append("## 🟡 Warnings")
            lines.append("")

            # Group warnings by type
            by_type = {}
            for warning in warnings:
                w_type = warning.get("type", "other")
                if w_type not in by_type:
                    by_type[w_type] = []
                by_type[w_type].append(warning)

            for w_type, type_warnings in by_type.items():
                type_name = w_type.replace("_", " ").title()
                lines.append(f"### {type_name} ({len(type_warnings)} issues)")
                lines.append("")

                if w_type in ["missing_alt", "title_too_short", "title_too_long", "description_too_short"]:
                    # Table format for these types
                    lines.append("| File | Details |")
                    lines.append("|------|---------|")
                    for w in type_warnings[:10]:  # Limit to 10
                        file = w.get("file", "N/A")[:40]
                        desc = w.get("description", "N/A")[:50]
                        lines.append(f"| {file} | {desc} |")
                    if len(type_warnings) > 10:
                        lines.append(f"| ... | +{len(type_warnings) - 10} more |")
                else:
                    # List format
                    for w in type_warnings[:10]:
                        lines.append(f"- {w.get('description', 'Issue')}")
                    if len(type_warnings) > 10:
                        lines.append(f"- ... and {len(type_warnings) - 10} more")

                lines.append("")

        # Info
        info = report.get("info", [])
        if info:
            lines.append("---")
            lines.append("")
            lines.append("## 🔵 Informational")
            lines.append("")
            for item in info[:20]:  # Limit to 20
                lines.append(f"- {item.get('description', 'Info')}")
            if len(info) > 20:
                lines.append(f"- ... and {len(info) - 20} more")
            lines.append("")

        # Summary Stats
        lines.append("---")
        lines.append("")
        lines.append("## Summary")
        lines.append("")
        lines.append(f"- **Total Issues Found:** {critical_count + warning_count + info_count}")
        lines.append(f"- **Auto-Fixed:** {len(fixes)}")
        lines.append(f"- **Needs Attention:** {critical_count + warning_count}")
        lines.append("")
        lines.append("---")
        lines.append("")
        lines.append("*Generated by SEO Health Check Workflow*")

        return "\n".join(lines)
