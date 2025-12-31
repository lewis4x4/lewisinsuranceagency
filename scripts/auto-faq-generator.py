#!/usr/bin/env python3
"""
Automated Florida Insurance FAQ Generator
Generates weekly FAQ briefs for the /learn section
Runs every Wednesday
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
    "output_dir": "content/learn",
}

# FAQ topic categories for rotation
FAQ_TOPICS = {
    "homeowners": [
        "What does my homeowners insurance actually cover in Florida?",
        "How do I lower my homeowners insurance premium in Florida?",
        "What is a hurricane deductible and how does it work?",
        "Do I need separate windstorm insurance in Florida?",
        "What is replacement cost vs actual cash value?",
        "How does my roof age affect my insurance in Florida?",
        "What is a dwelling coverage and how much do I need?",
        "Does homeowners insurance cover mold damage in Florida?",
        "What is loss of use coverage and when does it apply?",
        "How do I file a homeowners insurance claim in Florida?",
    ],
    "auto": [
        "What is PIP insurance and why is it required in Florida?",
        "How much auto insurance do I really need in Florida?",
        "What is uninsured motorist coverage and do I need it?",
        "Does my auto insurance cover rental cars?",
        "What happens if I let my auto insurance lapse in Florida?",
        "How do I add a teen driver to my policy in Florida?",
        "What is comprehensive vs collision coverage?",
        "Does my auto insurance cover rideshare driving?",
        "How do accidents affect my insurance rates in Florida?",
        "What is an SR-22 and when do I need one in Florida?",
    ],
    "flood": [
        "Do I really need flood insurance if I'm not in a flood zone?",
        "What's the difference between NFIP and private flood insurance?",
        "How long is the flood insurance waiting period?",
        "Does flood insurance cover my basement in Florida?",
        "How is my flood insurance premium calculated?",
        "What does flood insurance actually cover?",
        "Can I get flood insurance for my rental property?",
        "What is elevation certificate and do I need one?",
        "Does my condo association's flood policy cover my unit?",
        "How do I file a flood insurance claim after a storm?",
    ],
    "business": [
        "What insurance does a small business need in Florida?",
        "What is general liability insurance and who needs it?",
        "Do I need workers compensation for my Florida business?",
        "What is professional liability vs general liability?",
        "Does my business need cyber liability insurance?",
        "What is a BOP and is it right for my business?",
        "How do I insure my business vehicle in Florida?",
        "What is employment practices liability insurance?",
        "Does my home-based business need separate insurance?",
        "How do I get a certificate of insurance for my business?",
    ],
    "general": [
        "What is an insurance deductible and how do I choose one?",
        "How do I bundle my insurance policies to save money?",
        "What is an umbrella policy and do I need one?",
        "How do I know if I have enough liability coverage?",
        "What's the difference between named perils and open perils?",
        "How do I read and understand my insurance policy?",
        "What is subrogation in insurance?",
        "How do insurance claims affect my future premiums?",
        "What should I do immediately after an accident or loss?",
        "How do I compare insurance quotes effectively?",
    ],
}

SYSTEM_PROMPT = """You are an expert insurance content writer specializing in Florida insurance. You write FAQ briefs for Lewis Insurance Agency, established in 1981.

Your task is to write a FAQ brief that answers a common insurance question Florida residents have.

CRITICAL FORMAT REQUIREMENTS:
The brief MUST follow this exact structure:

---
title: "[The question being answered]"
description: "[150-160 char summary of the answer]"
category: "[homeowners|auto|flood|business|general]"
tags: ["florida insurance", "[relevant tag]"]
date: "[YYYY-MM-DD]"
---

## The Simple Answer

[2-3 sentences that directly answer the question in plain language. This should be the TL;DR that answers the question immediately.]

---

## Features & Benefits

[A comparison table OR bullet list of key points. Use tables when comparing options, bullet lists for single-topic explanations.]

**Why This Matters in Florida:**
- [Florida-specific fact or statistic]
- [Another relevant point]
- [Actionable insight]
- [Reference to local conditions/laws]

---

## What Our Clients Say

> "[Realistic testimonial from a Florida resident about this topic. Make it specific and believable.]"
> — **[First name] [Last initial]., [Florida city]**

> "[Another testimonial with different perspective]"
> — **[First name] [Last initial]., [Different Florida city]**

> "[Third testimonial if space allows]"
> — **[First name] [Last initial]., [Florida city]**

---

## Why Lewis Insurance Agency

[2-3 sentences about how Lewis Insurance helps with this specific topic. Reference the agency's experience since 1981, multiple carrier options, and local expertise.]

**→ Get Your Free Coverage Review**

WRITING GUIDELINES:
- Write at 8th grade reading level
- Use Florida-specific examples and regulations
- Include current statistics when relevant
- Be helpful and educational, not salesy
- Keep the total length to 400-600 words
- Make testimonials feel authentic and specific

IMPORTANT: Output ONLY the markdown content. No explanations or preamble."""


def get_existing_faq_slugs(output_dir: str) -> set:
    """Get slugs of existing FAQ articles to avoid duplicates"""
    existing = set()
    output_path = Path(output_dir)
    if output_path.exists():
        for file in output_path.glob("*.md"):
            existing.add(file.stem)
    return existing


def select_topic(existing_slugs: set) -> tuple:
    """Select a topic that doesn't already exist"""
    import random

    # Get current month for seasonal relevance
    month = datetime.now().month

    # Seasonal topic weighting
    if month in [5, 6, 7, 8, 9, 10]:  # Hurricane season
        weights = {"homeowners": 3, "flood": 3, "auto": 1, "business": 1, "general": 1}
    elif month in [1, 2]:  # New year, tax season
        weights = {"business": 2, "auto": 2, "homeowners": 1, "flood": 1, "general": 2}
    else:
        weights = {"homeowners": 2, "auto": 2, "flood": 1, "business": 1, "general": 1}

    # Build weighted list of categories
    weighted_categories = []
    for cat, weight in weights.items():
        weighted_categories.extend([cat] * weight)

    # Try to find a topic not already covered
    attempts = 0
    max_attempts = 50

    while attempts < max_attempts:
        category = random.choice(weighted_categories)
        topic = random.choice(FAQ_TOPICS[category])

        # Generate potential slug
        slug = topic.lower()
        for char in ['?', ',', '.', '!', "'", '"', ':', ';']:
            slug = slug.replace(char, '')
        slug = '-'.join(slug.split())[:60]

        if slug not in existing_slugs:
            return topic, category, slug

        attempts += 1

    # If all topics covered, pick randomly anyway
    category = random.choice(list(FAQ_TOPICS.keys()))
    topic = random.choice(FAQ_TOPICS[category])
    return topic, category, None


def generate_faq(topic: str, category: str):
    """Generate FAQ brief using Claude API with web search"""

    client = anthropic.Anthropic()

    today = datetime.now().strftime('%Y-%m-%d')
    current_year = datetime.now().year
    month_name = datetime.now().strftime('%B')

    user_prompt = f"""Write a FAQ brief answering this question: "{topic}"

Today's date: {today}
Current year: {current_year}
Current month: {month_name}
Category: {category}

Instructions:
1. First, search for current Florida insurance regulations and statistics related to this topic
2. Find any recent changes or news that affects the answer
3. Write the FAQ brief following the exact format specified
4. Include Florida-specific details and current information
5. Make testimonials feel authentic with specific Florida cities (Lake City, Gainesville, Jacksonville, Ocala, Tallahassee, etc.)

Remember to output ONLY the markdown content with frontmatter. No explanations."""

    print(f"🔍 Researching: {topic}")
    print(f"📁 Category: {category}")

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


def save_faq(content: str, output_dir: str) -> Path:
    """Save FAQ to file"""

    # Extract title for filename
    lines = content.split('\n')
    title = ""
    for line in lines:
        if line.startswith('title:'):
            title = line.replace('title:', '').strip().strip('"').strip("'")
            break

    # Generate slug
    slug = title.lower()
    for char in ['?', ',', '.', '!', "'", '"', ':', ';']:
        slug = slug.replace(char, '')
    slug = '-'.join(slug.split())[:60]

    filename = f"{slug}.md"

    Path(output_dir).mkdir(parents=True, exist_ok=True)
    filepath = Path(output_dir) / filename

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✅ Saved: {filepath}")
    return filepath


def main():
    parser = argparse.ArgumentParser(description='Generate Florida insurance FAQ brief')
    parser.add_argument('--topic', default='auto', help='Topic to write about (or "auto" for smart selection)')
    parser.add_argument('--output-dir', default=CONFIG['output_dir'], help='Output directory')
    parser.add_argument('--dry-run', action='store_true', help='Print content without saving')

    args = parser.parse_args()

    if not os.environ.get('ANTHROPIC_API_KEY'):
        print("❌ ANTHROPIC_API_KEY not set")
        sys.exit(1)

    print("🚀 Starting FAQ generation...")
    print(f"📅 Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")

    try:
        existing = get_existing_faq_slugs(args.output_dir)
        print(f"📚 Found {len(existing)} existing FAQ articles")

        if args.topic == 'auto':
            topic, category, slug = select_topic(existing)
            if slug and slug in existing:
                print(f"⚠️ Topic may already exist, but generating anyway")
        else:
            topic = args.topic
            category = "general"

        content = generate_faq(topic, category)

        if args.dry_run:
            print("\n" + "="*60)
            print("DRY RUN - Content Preview:")
            print("="*60)
            print(content)
        else:
            filepath = save_faq(content, args.output_dir)
            print(f"📝 FAQ generated: {filepath}")

    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
