"""
Email Reporter - Sends email reports via SendGrid
"""

import os
from datetime import datetime
from typing import Dict, Any


class EmailReporter:
    def __init__(self):
        self.api_key = os.environ.get("SENDGRID_API_KEY")
        self.to_email = os.environ.get("NOTIFICATION_EMAIL")
        # Use NOTIFICATION_EMAIL as sender too (must be verified in SendGrid)
        self.from_email = os.environ.get("NOTIFICATION_EMAIL", "seo-bot@lewisinsurance.com")

    def send(self, report: Dict[str, Any]) -> bool:
        """Send email report"""
        if not self.api_key or not self.to_email:
            print("   Missing SENDGRID_API_KEY or NOTIFICATION_EMAIL")
            return False

        try:
            from sendgrid import SendGridAPIClient
            from sendgrid.helpers.mail import Mail, Email, To, Content
        except ImportError:
            print("   SendGrid not installed, skipping email")
            return False

        subject = self._generate_subject(report)
        html_content = self._generate_html(report)

        message = Mail(
            from_email=Email(self.from_email, "SEO Health Bot"),
            to_emails=To(self.to_email),
            subject=subject,
            html_content=Content("text/html", html_content)
        )

        try:
            sg = SendGridAPIClient(self.api_key)
            response = sg.send(message)
            return response.status_code in [200, 201, 202]
        except Exception as e:
            print(f"   SendGrid error: {e}")
            return False

    def _generate_subject(self, report: Dict[str, Any]) -> str:
        """Generate email subject"""
        date = datetime.now().strftime("%b %d, %Y")
        critical_count = len(report.get("critical", []))
        warning_count = len(report.get("warnings", []))
        fixes_count = len(report.get("fixes_applied", []))

        if critical_count > 0:
            return f"🔴 SEO Alert: {critical_count} Critical Issues - {date}"
        elif warning_count > 0:
            return f"🟡 Weekly SEO Report: {warning_count} Warnings - {date}"
        else:
            return f"✅ Weekly SEO Report: All Clear - {date}"

    def _generate_html(self, report: Dict[str, Any]) -> str:
        """Generate HTML email content"""
        date = datetime.now().strftime("%B %d, %Y")
        critical = report.get("critical", [])
        warnings = report.get("warnings", [])
        fixes = report.get("fixes_applied", [])
        scores = report.get("lighthouse_scores", {})

        html = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }}
        h1 {{ color: #1C71E2; border-bottom: 2px solid #1C71E2; padding-bottom: 10px; }}
        h2 {{ color: #333; margin-top: 30px; }}
        .summary {{ background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }}
        .summary-item {{ display: inline-block; margin-right: 30px; }}
        .critical {{ color: #dc3545; }}
        .warning {{ color: #ffc107; }}
        .success {{ color: #28a745; }}
        .issue {{ background: #fff; border-left: 4px solid #dc3545; padding: 15px; margin: 10px 0; }}
        .issue.warning {{ border-left-color: #ffc107; }}
        .fix {{ background: #d4edda; padding: 10px 15px; margin: 5px 0; border-radius: 4px; }}
        .scores {{ display: flex; gap: 20px; flex-wrap: wrap; }}
        .score-item {{ background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center; min-width: 100px; }}
        .score-value {{ font-size: 24px; font-weight: bold; }}
        .footer {{ margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; }}
    </style>
</head>
<body>
    <h1>SEO Health Report</h1>
    <p><strong>Date:</strong> {date}</p>

    <div class="summary">
        <div class="summary-item">
            <span class="critical">🔴 {len(critical)} Critical</span>
        </div>
        <div class="summary-item">
            <span class="warning">🟡 {len(warnings)} Warnings</span>
        </div>
        <div class="summary-item">
            <span class="success">✅ {len(fixes)} Auto-Fixed</span>
        </div>
    </div>
"""

        # Lighthouse Scores
        if scores:
            html += """
    <h2>📊 Lighthouse Scores</h2>
    <div class="scores">
"""
            for category, score in scores.items():
                color = "#28a745" if score >= 90 else "#ffc107" if score >= 70 else "#dc3545"
                html += f"""
        <div class="score-item">
            <div class="score-value" style="color: {color}">{score}</div>
            <div>{category.title()}</div>
        </div>
"""
            html += "    </div>"

        # Fixes Applied
        if fixes:
            html += """
    <h2>✅ Auto-Fixes Applied</h2>
"""
            for fix in fixes:
                html += f"""
    <div class="fix">✓ {fix.get('description', 'Fix applied')}</div>
"""

        # Critical Issues
        if critical:
            html += """
    <h2>🔴 Critical Issues</h2>
"""
            for issue in critical[:5]:  # Limit to 5
                html += f"""
    <div class="issue">
        <strong>{issue.get('type', 'Issue').replace('_', ' ').title()}</strong><br>
        {issue.get('description', 'N/A')}<br>
        <small>File: {issue.get('file', 'N/A')}</small>
    </div>
"""
            if len(critical) > 5:
                html += f"<p>... and {len(critical) - 5} more critical issues</p>"

        # Warnings (summary only)
        if warnings:
            html += f"""
    <h2>🟡 Warnings Summary</h2>
    <p>{len(warnings)} warnings found. See GitHub Issues or full report for details.</p>
"""

        # Footer
        html += """
    <div class="footer">
        <p>This report was generated automatically by the SEO Health Check workflow.</p>
        <p>View full details in the GitHub Actions run.</p>
    </div>
</body>
</html>
"""

        return html
