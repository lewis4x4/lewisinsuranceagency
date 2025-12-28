#!/usr/bin/env python3
"""
Automated Florida Insurance Blog Generator
Calls Anthropic API to research and generate SEO-optimized blog posts
"""

import anthropic
import os
import sys
import json
import argparse
from datetime import datetime, timedelta
from pathlib import Path

# Configuration
CONFIG = {
    "agency_name": "Lewis Insurance Agency",
    "agency_phone": "(386) 755-0050",
    "agency_email": "info@lewisinsurance.com",
    "domain": "lewisinsurance.com",
    "locations": ["Lake City", "North Florida"],
    "established": 1981,
    "author": "Lewis Insurance Agency",
    "blog_dir": "content/blog",
    "image_dir": "public/images/blog",
}

# Topic rotation for variety
TOPIC_ROTATION = [
    {
        "category": "florida-homeowners-insurance",
        "topics": [
            "florida homeowners insurance rates",
            "citizens insurance florida eligibility",
            "florida roof insurance requirements",
            "florida hurricane deductible",
            "florida wind mitigation savings",
            "florida flood insurance",
        ]
    },
    {
        "category": "florida-auto-insurance",
        "topics": [
            "florida auto insurance rates",
            "florida pip coverage explained",
            "florida uninsured motorist coverage",
            "florida no-fault insurance",
            "florida sr22 insurance",
            "florida teen driver insurance",
        ]
    }
]

SYSTEM_PROMPT = """You are an expert insurance content writer specializing in Florida personal lines insurance (auto and homeowners). You write SEO-optimized blog posts for Lewis Insurance Agency, established in 1981.

Your task is to:
1. Research the latest Florida insurance news and trends using web search
2. Write a comprehensive, SEO-optimized blog post
3. Output the complete blog post in markdown format with proper frontmatter

CRITICAL REQUIREMENTS:
- Word count: 1,200-2,000 words
- Title: Under 60 characters with primary keyword
- Meta description: 150-160 characters
- Include exactly ONE H1 (the title)
- Use H2s for main sections (4-6 sections)
- Primary keyword in first 100 words
- Include 2-3 internal link placeholders: [INTERNAL_LINK:topic]
- Include 1-2 external links to authoritative sources (FLOIR, III, etc.)
- Add FAQ section with 3-5 questions for schema markup
- Write at 8th grade reading level
- Use Florida-specific examples and references
- Include current statistics with sources
- Strong CTA to contact the agency

AGENCY INFO:
- Name: Lewis Insurance Agency
- Established: 1981
- Locations: Lake City, North Florida
- Phone: (386) 755-0050

OUTPUT FORMAT:
Return ONLY the markdown content starting with --- for frontmatter. No explanations or preamble.

IMPORTANT: All frontmatter string values MUST be wrapped in double quotes to ensure valid YAML parsing.

Example frontmatter format:
---
title: "Your Title Here"
description: "Your meta description here."
date: 2025-01-15
author: "Lewis Insurance Agency"
category: "florida-auto-insurance"
tags: ["tag1", "tag2", "tag3"]
image: "/images/blog/post-image.jpg"
imageAlt: "Image description here"
---

Frontmatter must include:
- title (in quotes)
- description (meta description, in quotes)
- date (today's date YYYY-MM-DD, no quotes)
- author (in quotes)
- category (in quotes)
- tags (array with quoted strings)
- image (placeholder path, in quotes)
- imageAlt (in quotes)
"""


def get_todays_topic():
    """Select topic based on day of week for variety"""
    day_of_week = datetime.now().weekday()

    # Alternate between homeowners (Mon, Wed, Fri) and auto (Tue, Thu)
    if day_of_week in [0, 2, 4]:  # Mon, Wed, Fri
        category = TOPIC_ROTATION[0]
    else:
        category = TOPIC_ROTATION[1]

    # Rotate through topics based on week number
    week_num = datetime.now().isocalendar()[1]
    topic_index = week_num % len(category["topics"])

    return {
        "category": category["category"],
        "topic": category["topics"][topic_index]
    }


def generate_blog_post(topic: str = None):
    """Generate blog post using Claude API with web search"""

    client = anthropic.Anthropic()

    if not topic or topic == "auto":
        topic_info = get_todays_topic()
        search_topic = topic_info["topic"]
        category = topic_info["category"]
    else:
        search_topic = topic
        category = "florida-homeowners-insurance" if "home" in topic.lower() else "florida-auto-insurance"

    user_prompt = f"""Research and write a blog post about: {search_topic}

Today's date: {datetime.now().strftime('%Y-%m-%d')}

Instructions:
1. First, search for the latest news and statistics about "{search_topic}" from the past 90 days
2. Find current rates, legislative changes, or market developments
3. Write a comprehensive blog post that helps Florida residents understand this topic
4. Include actionable advice they can use
5. Make it locally relevant to North Florida / Lake City area

Category for this post: {category}

Remember to output ONLY the markdown content with frontmatter. No explanations."""

    print(f"🔍 Researching: {search_topic}")
    print(f"📁 Category: {category}")

    # Call Claude with web search enabled
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=8000,
        tools=[{
            "type": "web_search_20250305",
            "name": "web_search"
        }],
        system=SYSTEM_PROMPT,
        messages=[
            {"role": "user", "content": user_prompt}
        ]
    )

    # Extract the text content from response
    blog_content = ""
    for block in response.content:
        if hasattr(block, 'text'):
            blog_content += block.text

    return blog_content, category


def save_blog_post(content: str, output_dir: str):
    """Save blog post to file"""

    # Extract title from frontmatter for filename
    lines = content.split('\n')
    title = ""
    for line in lines:
        if line.startswith('title:'):
            title = line.replace('title:', '').strip().strip('"').strip("'")
            break

    # Generate slug
    slug = title.lower()
    for char in [',', '.', '!', '?', ':', ';', '|', '-', '–', '—']:
        slug = slug.replace(char, '')
    slug = '-'.join(slug.split())[:60]

    # Create filename
    date_str = datetime.now().strftime('%Y-%m-%d')
    filename = f"{date_str}-{slug}.md"

    # Ensure output directory exists
    Path(output_dir).mkdir(parents=True, exist_ok=True)

    filepath = Path(output_dir) / filename

    # Write content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✅ Saved: {filepath}")
    return filepath


def main():
    parser = argparse.ArgumentParser(description='Generate Florida insurance blog post')
    parser.add_argument('--topic', default='auto', help='Topic to write about (or "auto" for rotation)')
    parser.add_argument('--output-dir', default=CONFIG['blog_dir'], help='Output directory')
    parser.add_argument('--dry-run', action='store_true', help='Print content without saving')

    args = parser.parse_args()

    # Check for API key
    if not os.environ.get('ANTHROPIC_API_KEY'):
        print("❌ ANTHROPIC_API_KEY not set")
        sys.exit(1)

    print("🚀 Starting blog generation...")
    print(f"📅 Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")

    try:
        content, category = generate_blog_post(args.topic)

        if args.dry_run:
            print("\n" + "="*60)
            print("DRY RUN - Content Preview:")
            print("="*60)
            print(content[:2000] + "..." if len(content) > 2000 else content)
        else:
            filepath = save_blog_post(content, args.output_dir)
            print(f"📝 Blog post generated: {filepath}")

    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
