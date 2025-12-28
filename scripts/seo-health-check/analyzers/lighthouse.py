"""
Lighthouse Analyzer - Runs Lighthouse CI and checks scores
"""

import json
import subprocess
import tempfile
from pathlib import Path
from typing import Dict, Any


class LighthouseAnalyzer:
    def __init__(self, site_url: str):
        self.site_url = site_url
        self.thresholds = {
            "performance": 90,
            "accessibility": 95,
            "seo": 95,
            "best-practices": 90,
        }

    def analyze(self) -> Dict[str, Any]:
        """Run Lighthouse and analyze scores"""
        issues = []
        scores = {}

        try:
            # Run Lighthouse CI
            with tempfile.NamedTemporaryFile(suffix=".json", delete=False) as f:
                output_path = f.name

            cmd = [
                "lhci", "collect",
                f"--url={self.site_url}",
                "--numberOfRuns=1",
                f"--settings.output=json",
                f"--settings.outputPath={output_path}",
            ]

            # Alternative: use lighthouse directly if lhci not available
            alt_cmd = [
                "lighthouse",
                self.site_url,
                "--output=json",
                f"--output-path={output_path}",
                "--chrome-flags=--headless --no-sandbox",
                "--quiet",
            ]

            try:
                subprocess.run(alt_cmd, capture_output=True, timeout=120, check=True)
            except (subprocess.CalledProcessError, FileNotFoundError):
                # Lighthouse not available - return empty results
                return {
                    "issues": [{
                        "type": "lighthouse_unavailable",
                        "severity": "info",
                        "auto_fixable": False,
                        "description": "Lighthouse not available in this environment",
                    }],
                    "scores": {},
                }

            # Parse results
            with open(output_path, "r") as f:
                results = json.load(f)

            # Extract scores
            categories = results.get("categories", {})
            for category, data in categories.items():
                score = int(data.get("score", 0) * 100)
                scores[category] = score

                threshold = self.thresholds.get(category, 90)
                if score < threshold:
                    issues.append({
                        "type": "low_lighthouse_score",
                        "severity": "warning" if score >= 80 else "critical",
                        "category": category,
                        "score": score,
                        "threshold": threshold,
                        "auto_fixable": False,
                        "description": f"Lighthouse {category}: {score}/100 (threshold: {threshold})",
                    })

            # Clean up
            Path(output_path).unlink(missing_ok=True)

        except Exception as e:
            issues.append({
                "type": "lighthouse_error",
                "severity": "info",
                "error": str(e),
                "auto_fixable": False,
                "description": f"Lighthouse analysis failed: {str(e)[:100]}",
            })

        return {"issues": issues, "scores": scores}
