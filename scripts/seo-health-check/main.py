#!/usr/bin/env python3
"""
SEO Health Check - Main Orchestrator
Runs all analyzers, applies safe auto-fixes, creates issues, and sends reports.
"""

import argparse
import json
import os
import subprocess
import sys
from datetime import datetime
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from analyzers.images import ImageAnalyzer
from analyzers.meta import MetaAnalyzer
from analyzers.links import LinkAnalyzer
from analyzers.canonical import CanonicalAnalyzer
from analyzers.lighthouse import LighthouseAnalyzer
from analyzers.duplicate_content import DuplicateContentAnalyzer
from fixers.alt_text import AltTextFixer
from fixers.canonical import CanonicalFixer
from reporters.markdown import MarkdownReporter
from reporters.email import EmailReporter
from reporters.github_issues import GitHubIssueReporter


class SEOHealthCheck:
    def __init__(self, site_url: str, dry_run: bool = False, skip_email: bool = False):
        self.site_url = site_url
        self.dry_run = dry_run
        self.skip_email = skip_email
        self.project_root = Path(__file__).parent.parent.parent
        self.report = {
            "date": datetime.now().isoformat(),
            "site_url": site_url,
            "critical": [],
            "warnings": [],
            "info": [],
            "fixes_applied": [],
            "fixes_needed": [],
            "lighthouse_scores": {},
        }

    def run_analyzers(self):
        """Run all SEO analyzers"""
        analyzers = [
            ("Images", ImageAnalyzer(self.project_root)),
            ("Meta Tags", MetaAnalyzer(self.project_root)),
            ("Internal Links", LinkAnalyzer(self.project_root, check_external=False)),
            ("External Links", LinkAnalyzer(self.project_root, check_external=True)),
            ("Canonical URLs", CanonicalAnalyzer(self.project_root)),
            ("Duplicate Content", DuplicateContentAnalyzer(self.project_root)),
        ]

        for name, analyzer in analyzers:
            print(f"🔍 Running {name} analyzer...")
            try:
                results = analyzer.analyze()
                self._categorize_results(name, results)
            except Exception as e:
                print(f"   ⚠️ Error in {name} analyzer: {e}")

        # Run Lighthouse separately (requires built site)
        print("🔍 Running Lighthouse analyzer...")
        try:
            lighthouse = LighthouseAnalyzer(self.site_url)
            lighthouse_results = lighthouse.analyze()
            self.report["lighthouse_scores"] = lighthouse_results.get("scores", {})
            self._categorize_results("Lighthouse", lighthouse_results)
        except Exception as e:
            print(f"   ⚠️ Error in Lighthouse analyzer: {e}")

    def _categorize_results(self, analyzer_name: str, results: dict):
        """Categorize results by severity"""
        for issue in results.get("issues", []):
            issue["analyzer"] = analyzer_name
            if issue.get("severity") == "critical":
                self.report["critical"].append(issue)
            elif issue.get("severity") == "warning":
                self.report["warnings"].append(issue)
            else:
                self.report["info"].append(issue)

    def apply_safe_fixes(self):
        """Apply auto-fixes for safe issues"""
        if self.dry_run:
            print("🔧 DRY RUN - Skipping auto-fixes")
            return

        fixers = [
            ("Alt Text", AltTextFixer(self.project_root)),
            ("Canonical URLs", CanonicalFixer(self.project_root)),
        ]

        for name, fixer in fixers:
            print(f"🔧 Running {name} fixer...")
            try:
                fixes = fixer.fix(self.report)
                self.report["fixes_applied"].extend(fixes)
                print(f"   ✅ Applied {len(fixes)} fixes")
            except Exception as e:
                print(f"   ⚠️ Error in {name} fixer: {e}")

    def create_github_issues(self):
        """Create GitHub issues for problems needing human review"""
        if self.dry_run:
            print("📋 DRY RUN - Skipping GitHub issue creation")
            return

        reporter = GitHubIssueReporter()

        # Only create issues for critical and important warnings
        issues_to_create = []

        for issue in self.report["critical"]:
            if not issue.get("auto_fixable", False):
                issues_to_create.append(issue)

        for issue in self.report["warnings"]:
            # Only create issues for certain warning types
            if issue.get("type") in ["duplicate_title", "missing_description", "broken_external_link"]:
                issues_to_create.append(issue)

        print(f"📋 Creating {len(issues_to_create)} GitHub issues...")
        for issue in issues_to_create:
            try:
                reporter.create_issue(issue)
            except Exception as e:
                print(f"   ⚠️ Error creating issue: {e}")

    def send_email_report(self):
        """Send email digest"""
        if self.skip_email or self.dry_run:
            print("📧 Skipping email notification")
            return

        if not os.environ.get("SENDGRID_API_KEY"):
            print("📧 No SENDGRID_API_KEY - skipping email")
            return

        print("📧 Sending email report...")
        try:
            reporter = EmailReporter()
            reporter.send(self.report)
            print("   ✅ Email sent")
        except Exception as e:
            print(f"   ⚠️ Error sending email: {e}")

    def generate_report(self):
        """Generate markdown report"""
        output_dir = self.project_root / "reports" / "seo-health"
        output_dir.mkdir(parents=True, exist_ok=True)

        reporter = MarkdownReporter()
        report_content = reporter.generate(self.report)

        # Save dated report
        date_str = datetime.now().strftime("%Y-%m-%d")
        report_path = output_dir / f"report-{date_str}.md"
        with open(report_path, "w") as f:
            f.write(report_content)

        # Save latest.json for programmatic access
        json_path = output_dir / "latest.json"
        with open(json_path, "w") as f:
            json.dump(self.report, f, indent=2, default=str)

        print(f"📄 Report saved: {report_path}")
        return report_path

    def set_outputs(self):
        """Set GitHub Actions outputs"""
        has_fixes = len(self.report["fixes_applied"]) > 0

        # Write to GITHUB_OUTPUT if available
        github_output = os.environ.get("GITHUB_OUTPUT")
        if github_output:
            with open(github_output, "a") as f:
                f.write(f"has_fixes={str(has_fixes).lower()}\n")
                f.write(f"critical_count={len(self.report['critical'])}\n")
                f.write(f"warning_count={len(self.report['warnings'])}\n")

    def print_summary(self):
        """Print summary to console"""
        print("\n" + "=" * 60)
        print("SEO HEALTH CHECK SUMMARY")
        print("=" * 60)
        print(f"🔴 Critical Issues: {len(self.report['critical'])}")
        print(f"🟡 Warnings: {len(self.report['warnings'])}")
        print(f"🔵 Info: {len(self.report['info'])}")
        print(f"✅ Fixes Applied: {len(self.report['fixes_applied'])}")

        if self.report.get("lighthouse_scores"):
            scores = self.report["lighthouse_scores"]
            print(f"\n📊 Lighthouse Scores:")
            print(f"   Performance: {scores.get('performance', 'N/A')}")
            print(f"   Accessibility: {scores.get('accessibility', 'N/A')}")
            print(f"   SEO: {scores.get('seo', 'N/A')}")
            print(f"   Best Practices: {scores.get('best-practices', 'N/A')}")

        print("=" * 60)


def main():
    parser = argparse.ArgumentParser(description="Run SEO Health Check")
    parser.add_argument("--site-url", default="https://lewisinsurance.com")
    parser.add_argument("--dry-run", default="false")
    parser.add_argument("--skip-email", default="false")

    args = parser.parse_args()

    dry_run = args.dry_run.lower() == "true"
    skip_email = args.skip_email.lower() == "true"

    print("🚀 Starting SEO Health Check...")
    print(f"📅 Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"🌐 Site: {args.site_url}")
    if dry_run:
        print("⚠️  DRY RUN MODE - No changes will be made")
    print()

    checker = SEOHealthCheck(
        site_url=args.site_url,
        dry_run=dry_run,
        skip_email=skip_email
    )

    checker.run_analyzers()
    checker.apply_safe_fixes()
    checker.generate_report()
    checker.create_github_issues()
    checker.send_email_report()
    checker.set_outputs()
    checker.print_summary()

    print("\n✅ SEO Health Check complete!")


if __name__ == "__main__":
    main()
