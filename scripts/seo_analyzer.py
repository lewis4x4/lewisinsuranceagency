#!/usr/bin/env python3
"""
Simple SEO Analyzer for blog posts
Validates frontmatter and basic SEO requirements
"""

import sys
import re
from pathlib import Path


def analyze_post(filepath: str) -> tuple[bool, list[str]]:
    """Analyze a blog post for SEO requirements"""
    errors = []
    warnings = []

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        return False, [f"File not found: {filepath}"]

    # Check frontmatter exists
    if not content.startswith('---'):
        errors.append("Missing frontmatter (should start with ---)")
        return False, errors

    # Extract frontmatter
    parts = content.split('---', 2)
    if len(parts) < 3:
        errors.append("Invalid frontmatter format")
        return False, errors

    frontmatter = parts[1]
    body = parts[2]

    # Check required frontmatter fields
    required_fields = ['title', 'description', 'date', 'author', 'category']
    for field in required_fields:
        if f'{field}:' not in frontmatter:
            errors.append(f"Missing required field: {field}")

    # Check title length
    title_match = re.search(r'title:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
    if title_match:
        title = title_match.group(1)
        if len(title) > 60:
            warnings.append(f"Title too long ({len(title)} chars, recommended <60)")

    # Check description length
    desc_match = re.search(r'description:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
    if desc_match:
        desc = desc_match.group(1)
        if len(desc) < 150:
            warnings.append(f"Description too short ({len(desc)} chars, recommended 150-160)")
        elif len(desc) > 160:
            warnings.append(f"Description too long ({len(desc)} chars, recommended 150-160)")

    # Check word count
    words = len(body.split())
    if words < 1200:
        warnings.append(f"Content may be too short ({words} words, recommended 1200-2000)")
    elif words > 2500:
        warnings.append(f"Content may be too long ({words} words)")

    # Check for H1 (only one allowed)
    h1_count = len(re.findall(r'^#\s+', body, re.MULTILINE))
    if h1_count > 1:
        errors.append(f"Multiple H1 headers found ({h1_count}), should have only 1")

    # Check for H2 sections
    h2_count = len(re.findall(r'^##\s+', body, re.MULTILINE))
    if h2_count < 3:
        warnings.append(f"Only {h2_count} H2 sections, recommended 4-6")

    # Check for FAQ section
    if 'faq' not in body.lower() and 'frequently asked' not in body.lower():
        warnings.append("No FAQ section found")

    # Print results
    print(f"\n📊 SEO Analysis: {filepath}")
    print("=" * 60)

    if errors:
        print("\n❌ ERRORS:")
        for error in errors:
            print(f"   • {error}")

    if warnings:
        print("\n⚠️  WARNINGS:")
        for warning in warnings:
            print(f"   • {warning}")

    if not errors and not warnings:
        print("\n✅ All SEO checks passed!")

    print(f"\n📈 Stats: {words} words, {h2_count} sections")

    return len(errors) == 0, errors + warnings


def main():
    if len(sys.argv) < 2:
        print("Usage: python seo_analyzer.py <filepath>")
        sys.exit(1)

    filepath = sys.argv[1]
    success, issues = analyze_post(filepath)

    # Exit with error if critical issues found
    if not success:
        sys.exit(1)

    sys.exit(0)


if __name__ == '__main__':
    main()
