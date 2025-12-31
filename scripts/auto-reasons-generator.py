#!/usr/bin/env python3
"""
Automated "Why Local Agent" Article Generator
Generates weekly articles about the value of working with a local independent agent
Runs every Sunday
"""

import anthropic
import os
import sys
import argparse
from datetime import datetime
from pathlib import Path

# Configuration
CONFIG = {
    "agency_name": "Lewis Insurance Agency",
    "agency_phone": "(386) 755-0050",
    "agency_email": "info@lewisinsurance.com",
    "domain": "lewisinsurance.com",
    "locations": ["Lake City", "North Florida"],
    "established": 1981,
    "output_dir": "content/blog",
}

# Topics for Why Local Agent articles
REASON_TOPICS = [
    {
        "theme": "seasonal-hurricane",
        "months": [5, 6, 7, 8, 9, 10],
        "topics": [
            "Why You Need a Local Agent Before Hurricane Season Hits",
            "How Local Agents Help You Prepare for Storm Season",
            "The Local Agent Advantage When Filing Hurricane Claims",
            "Why Florida Residents Trust Local Agents During Emergencies",
            "How Local Agents Navigate Citizens Insurance for You",
        ]
    },
    {
        "theme": "seasonal-winter",
        "months": [11, 12, 1, 2],
        "topics": [
            "New Year Insurance Checkup: Why Local Agents Make It Easy",
            "How Local Agents Help Snowbirds with Florida Insurance",
            "Why Local Expertise Matters for Florida Vacation Homes",
            "The Local Agent Advantage for Florida Condo Insurance",
        ]
    },
    {
        "theme": "insurance-types",
        "months": list(range(1, 13)),
        "topics": [
            "Why Your Auto Insurance Needs a Local Florida Expert",
            "The Local Agent Advantage for Florida Homeowners Insurance",
            "Why Flood Insurance Decisions Require Local Knowledge",
            "How Local Agents Find the Right Business Insurance Mix",
            "Why Umbrella Insurance Needs a Local Expert's Touch",
            "The Local Agent Advantage for Condo and HOA Insurance",
            "Why Mobile Home Insurance Needs Florida-Specific Expertise",
            "How Local Agents Simplify Boat Insurance in Florida",
            "The Local Agent Advantage for Landlord Insurance",
            "Why Commercial Auto Needs a Local Insurance Expert",
        ]
    },
    {
        "theme": "service-advantages",
        "months": list(range(1, 13)),
        "topics": [
            "Claims Support: Why Local Agents Are Your Best Advocate",
            "How Independent Agents Save You Money by Comparing Carriers",
            "The Personal Touch: Why Local Service Beats 1-800 Numbers",
            "How Local Agents Help When Your Carrier Leaves Florida",
            "Why Local Agents Catch Coverage Gaps Big Companies Miss",
            "The Relationship Advantage: Why Your Agent Should Know Your Name",
            "How Local Agents Simplify Insurance for Florida Families",
            "Why Annual Reviews with a Local Agent Protect Your Assets",
            "The Local Agent Advantage for Multi-Policy Households",
            "How Local Expertise Helps First-Time Florida Homebuyers",
        ]
    },
    {
        "theme": "florida-specific",
        "months": list(range(1, 13)),
        "topics": [
            "Why Florida's Insurance Market Needs Local Navigators",
            "How Local Agents Understand Florida's Unique Risks",
            "The Local Agent Advantage in Florida's Hard Market",
            "Why Florida Insurance Laws Require Expert Guidance",
            "How Local Agents Help with Florida's 4-Point Inspections",
            "The Local Agent Advantage for Wind Mitigation Credits",
            "Why Florida Drivers Need Local Auto Insurance Expertise",
            "How Local Agents Explain Florida's No-Fault Insurance",
            "The Local Agent Advantage for Florida Flood Zones",
            "Why Florida's Roof Requirements Need Local Expertise",
        ]
    },
]

SYSTEM_PROMPT = """You are an expert insurance content writer specializing in the value of independent local insurance agents. You write persuasive, educational articles for Lewis Insurance Agency, established in 1981 in Lake City, Florida.

Your task is to write an article explaining why Florida residents benefit from working with a local independent agent rather than buying direct from national carriers or online.

CRITICAL FORMAT REQUIREMENTS:
The article MUST follow this exact structure:

---
title: "[Compelling title about local agent advantage]"
description: "[150-160 char summary]"
date: [YYYY-MM-DD]
author: "Lewis Insurance Agency"
category: "local"
tags: ["local agent", "florida insurance", "independent agent"]
---

[Opening paragraph - 3-4 sentences that hook the reader with a relatable scenario or surprising fact about insurance in Florida. Set up the problem that buying direct creates.]

[Second paragraph - Explain the specific advantage local agents have for this topic. Be specific and use Florida examples. Reference real challenges Florida residents face.]

[Third paragraph - Contrast with what happens when you buy direct or use a 1-800 number. Don't be mean, but be honest about the limitations.]

[Fourth paragraph - Share how Lewis Insurance Agency specifically helps with this. Reference the agency's 44+ years of experience, multiple carrier relationships, and local knowledge.]

[Closing paragraph - Strong call to action. Encourage readers to reach out for personalized help. Mention the phone number (386) 755-0050 or visiting the website.]

WRITING GUIDELINES:
- 400-600 words total
- Write at 8th grade reading level
- Be persuasive but not pushy
- Use specific Florida examples (cities, regulations, common situations)
- Reference current market conditions when relevant
- Focus on genuine value, not sales pitch
- Avoid clichés like "peace of mind"
- Make it feel personal and local
- Include at least one specific statistic or fact

IMPORTANT: Output ONLY the markdown content. No explanations or preamble."""


def get_existing_reason_slugs(output_dir: str) -> set:
    """Get slugs of existing Why Local Agent articles"""
    existing = set()
    output_path = Path(output_dir)
    if output_path.exists():
        for file in output_path.glob("*why-local-agent*.md"):
            existing.add(file.stem.split('-', 3)[-1] if '-' in file.stem else file.stem)
    return existing


def select_topic(existing_slugs: set) -> str:
    """Select a topic based on season and what doesn't exist yet"""
    import random

    month = datetime.now().month

    # Get seasonal and evergreen topics
    available_topics = []

    for group in REASON_TOPICS:
        if month in group["months"]:
            for topic in group["topics"]:
                # Generate slug to check
                slug = topic.lower()
                for char in ['?', ',', '.', '!', "'", '"', ':', ';']:
                    slug = slug.replace(char, '')
                slug = '-'.join(slug.split())[:50]

                if slug not in existing_slugs:
                    weight = 2 if group["theme"].startswith("seasonal") else 1
                    available_topics.extend([topic] * weight)

    if available_topics:
        return random.choice(available_topics)

    # Fallback: pick any topic
    all_topics = []
    for group in REASON_TOPICS:
        all_topics.extend(group["topics"])
    return random.choice(all_topics)


def generate_article(topic: str):
    """Generate Why Local Agent article using Claude API with web search"""

    client = anthropic.Anthropic()

    today = datetime.now().strftime('%Y-%m-%d')
    current_year = datetime.now().year
    month_name = datetime.now().strftime('%B')

    user_prompt = f"""Write an article with this theme: "{topic}"

Today's date: {today}
Current year: {current_year}
Current month: {month_name}

Instructions:
1. Search for current Florida insurance market news and trends related to this topic
2. Find recent statistics, carrier changes, or regulatory updates
3. Write a compelling article about why local agents are better for this specific situation
4. Reference real Florida challenges like Citizens Insurance, roof age requirements, carrier departures, etc.
5. Make it specific to North Florida / Lake City area when possible

Remember to output ONLY the markdown content with frontmatter. No explanations."""

    print(f"🔍 Writing about: {topic}")

    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=4000,
        tools=[{
            "type": "web_search_20250305",
            "name": "web_search"
        }],
        system=SYSTEM_PROMPT,
        messages=[
            {"role": "user", "content": user_prompt}
        ]
    )

    # Extract text content
    content = ""
    for block in response.content:
        if hasattr(block, 'text'):
            content += block.text

    return content


def save_article(content: str, output_dir: str) -> Path:
    """Save article to file with proper naming"""

    # Extract title for filename
    lines = content.split('\n')
    title = ""
    for line in lines:
        if line.startswith('title:'):
            title = line.replace('title:', '').strip().strip('"').strip("'")
            break

    # Generate slug
    slug = title.lower()
    for char in ['?', ',', '.', '!', "'", '"', ':', ';', '—', '–', '-']:
        slug = slug.replace(char, ' ')
    slug = '-'.join(slug.split())[:50]

    # Create filename with date and why-local-agent prefix
    date_str = datetime.now().strftime('%Y-%m-%d')
    filename = f"{date_str}-why-local-agent-{slug}.md"

    Path(output_dir).mkdir(parents=True, exist_ok=True)
    filepath = Path(output_dir) / filename

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✅ Saved: {filepath}")
    return filepath


def main():
    parser = argparse.ArgumentParser(description='Generate Why Local Agent article')
    parser.add_argument('--topic', default='auto', help='Topic to write about (or "auto" for smart selection)')
    parser.add_argument('--output-dir', default=CONFIG['output_dir'], help='Output directory')
    parser.add_argument('--dry-run', action='store_true', help='Print content without saving')

    args = parser.parse_args()

    if not os.environ.get('ANTHROPIC_API_KEY'):
        print("❌ ANTHROPIC_API_KEY not set")
        sys.exit(1)

    print("🚀 Starting Why Local Agent article generation...")
    print(f"📅 Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")

    try:
        existing = get_existing_reason_slugs(args.output_dir)
        print(f"📚 Found {len(existing)} existing Why Local Agent articles")

        if args.topic == 'auto':
            topic = select_topic(existing)
        else:
            topic = args.topic

        content = generate_article(topic)

        if args.dry_run:
            print("\n" + "="*60)
            print("DRY RUN - Content Preview:")
            print("="*60)
            print(content)
        else:
            filepath = save_article(content, args.output_dir)
            print(f"📝 Article generated: {filepath}")

    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
