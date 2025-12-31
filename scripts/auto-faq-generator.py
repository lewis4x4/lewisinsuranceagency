#!/usr/bin/env python3
"""
Automated Florida Insurance FAQ Generator
Generates weekly FAQ briefs for the /learn section
Runs every Wednesday - Creates PR for review instead of direct push
"""

import anthropic
import os
import sys
import re
import argparse
from datetime import datetime
from pathlib import Path
from difflib import SequenceMatcher

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

# Curated FAQ topics for quality rotation (avoid generic/duplicate topics)
FAQ_TOPICS = {
    "homeowners": [
        "What is a hurricane deductible vs all-other-perils deductible in Florida?",
        "How does roof age affect my homeowners insurance in Florida?",
        "What is replacement cost vs actual cash value for home insurance?",
        "What is ordinance or law coverage and do I need it?",
        "Why isn't flood damage covered by my homeowners policy?",
        "What does dwelling coverage mean and how much do I need?",
        "What is loss of use coverage and when does it apply?",
        "Does homeowners insurance cover mold damage in Florida?",
        "How do wind mitigation credits lower my premium in Florida?",
        "What is a 4-point inspection and when is it required?",
    ],
    "auto": [
        "Do I need uninsured motorist coverage in Florida?",
        "What is PIP insurance and how does it work in Florida?",
        "What is the difference between comprehensive and collision coverage?",
        "Can I stack uninsured motorist coverage in Florida?",
        "What happens if my auto insurance lapses in Florida?",
        "How do I add a teen driver to my Florida auto policy?",
        "Does my auto insurance cover rental cars?",
        "Does my personal auto policy cover rideshare driving?",
        "How do accidents affect my insurance rates in Florida?",
        "What is an SR-22 and when is it required in Florida?",
    ],
    "flood": [
        "Do I need flood insurance if I'm not in a flood zone?",
        "How long is the flood insurance waiting period?",
        "What is covered by flood insurance - contents vs structure?",
        "What's the difference between NFIP and private flood insurance?",
        "How is my flood insurance premium calculated?",
        "What is an elevation certificate and do I need one?",
        "Does my condo association's flood policy cover my unit?",
        "Can I get flood insurance for a rental property?",
        "How do I file a flood insurance claim after a storm?",
        "What flood zone am I in and what does it mean?",
    ],
    "business": [
        "What is a certificate of insurance and how do I get one?",
        "What is the difference between general liability and professional liability?",
        "When do I need commercial auto vs personal auto insurance?",
        "Do I need workers compensation for my Florida business?",
        "What is a BOP and is it right for my small business?",
        "Does my home-based business need separate insurance?",
        "What is employment practices liability insurance?",
        "Does my business need cyber liability insurance?",
        "What insurance does a contractor need in Florida?",
        "How do I choose liability limits for my business?",
    ],
    "general": [
        "What is an independent insurance agent and why use one?",
        "When should I review my insurance policies?",
        "What is an umbrella policy and do I need one?",
        "How do I choose the right deductible for my situation?",
        "How do insurance claims affect my future premiums?",
        "What should I do immediately after an accident or loss?",
        "How do I bundle my insurance policies to save money?",
        "What is the difference between named perils and open perils?",
        "What is subrogation in insurance?",
        "How do I compare insurance quotes effectively?",
    ],
}

# Forbidden words/phrases that indicate bad content
FORBIDDEN_PATTERNS = [
    r'\b\d{1,3}%\s+of\s+(drivers|homeowners|floridians|people|americans)',  # Made-up stats
    r'\bguarantee[ds]?\b',
    r'\balways\s+saves?\b',
    r'\blowest\s+(rate|price|premium)',
    r'\bbest\s+(rate|price|premium)',
    r'\bsave\s+up\s+to\s+\d+%',
    r'\bstudies?\s+show',
    r'\baccording\s+to\s+statistics',
    r'\bresearch\s+(shows|indicates|proves)',
]

SYSTEM_PROMPT = """You are an expert insurance content writer specializing in Florida insurance. You write FAQ briefs for Lewis Insurance Agency, established in 1981.

Your task is to write a FAQ brief that answers a common insurance question Florida residents have.

CRITICAL FORMAT REQUIREMENTS:
The brief MUST follow this exact structure:

---
title: "[The question being answered]"
description: "[150-160 char summary that directly answers the question]"
category: "[homeowners|auto|flood|business|general]"
tags: ["florida insurance", "[relevant tag]"]
date: "[YYYY-MM-DD]"
---

## Short Answer

[2-3 sentences that directly answer the question in plain language. This is for AI answer engines and should be quotable. No fluff.]

---

## What It Covers (In Plain English)

[Bullet list explaining what this coverage/concept does:]
- [Clear explanation of one aspect]
- [Another key point]
- [Florida-specific consideration if applicable]
- [Common misconception addressed]

---

## How to Decide

[2-3 sentences of practical guidance on how to think about this decision. Reference what factors matter. No specific numbers or percentages unless citing official sources.]

**Florida-Specific Considerations:**
- [Reference to Florida law or common practice]
- [Weather/hurricane/flood consideration if relevant]
- [Local market factor if applicable]

---

## Next Step

If you want us to review your current coverage, bring your declarations page and we'll explain your options clearly. We compare multiple carriers so you can see what fits your situation.

WRITING GUIDELINES:
- Write at 8th grade reading level
- Use Florida-specific examples and regulations
- Do NOT invent statistics or percentages
- Do NOT use words like "guarantee", "always", "lowest", "best"
- Be helpful and educational, not salesy
- Keep the total length to 350-500 words
- Focus on explaining concepts, not selling

IMPORTANT: Output ONLY the markdown content. No explanations or preamble."""


def get_existing_faq_slugs(output_dir: str) -> set:
    """Get slugs of existing FAQ articles to avoid duplicates"""
    existing = set()
    output_path = Path(output_dir)
    if output_path.exists():
        for file in output_path.glob("*.md"):
            existing.add(file.stem)
    return existing


def get_existing_titles(output_dir: str) -> list:
    """Get titles of existing FAQ articles for similarity checking"""
    titles = []
    output_path = Path(output_dir)
    if output_path.exists():
        for file in output_path.glob("*.md"):
            try:
                with open(file, 'r', encoding='utf-8') as f:
                    content = f.read()
                    for line in content.split('\n'):
                        if line.startswith('title:'):
                            title = line.replace('title:', '').strip().strip('"').strip("'")
                            titles.append(title)
                            break
            except Exception:
                pass
    return titles


def check_title_similarity(new_title: str, existing_titles: list, threshold: float = 0.7) -> bool:
    """Check if new title is too similar to existing titles"""
    new_title_lower = new_title.lower()
    for existing in existing_titles:
        ratio = SequenceMatcher(None, new_title_lower, existing.lower()).ratio()
        if ratio > threshold:
            print(f"⚠️ Title too similar to existing: '{existing}' (similarity: {ratio:.2f})")
            return True
    return False


def validate_content(content: str) -> tuple:
    """
    Validate generated content for forbidden patterns.
    Returns (is_valid, list_of_issues)
    """
    issues = []
    content_lower = content.lower()

    # Check forbidden patterns
    for pattern in FORBIDDEN_PATTERNS:
        matches = re.findall(pattern, content_lower, re.IGNORECASE)
        if matches:
            issues.append(f"Contains forbidden pattern: '{pattern}' (found: {matches[:2]})")

    # Check for suspicious numeric claims
    suspicious_stats = re.findall(r'\b(\d{1,3})%\s+of\s+\w+', content_lower)
    if suspicious_stats:
        issues.append(f"Contains suspicious percentage claims: {suspicious_stats}")

    # Check for overly promotional language
    promo_words = ['guaranteed', 'promise', 'always save', 'never pay more', 'best rates']
    for word in promo_words:
        if word in content_lower:
            issues.append(f"Contains promotional language: '{word}'")

    return len(issues) == 0, issues


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
    parser.add_argument('--max-retries', type=int, default=3, help='Max retries for content validation')

    args = parser.parse_args()

    if not os.environ.get('ANTHROPIC_API_KEY'):
        print("❌ ANTHROPIC_API_KEY not set")
        sys.exit(1)

    print("🚀 Starting FAQ generation...")
    print(f"📅 Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")

    try:
        existing_slugs = get_existing_faq_slugs(args.output_dir)
        existing_titles = get_existing_titles(args.output_dir)
        print(f"📚 Found {len(existing_slugs)} existing FAQ articles")

        if args.topic == 'auto':
            topic, category, slug = select_topic(existing_slugs)
            if slug and slug in existing_slugs:
                print(f"⚠️ Topic may already exist, but generating anyway")
        else:
            topic = args.topic
            category = "general"

        # Check if topic is too similar to existing
        if check_title_similarity(topic, existing_titles):
            print(f"❌ Topic too similar to existing article. Selecting new topic...")
            topic, category, slug = select_topic(existing_slugs)

        print(f"📝 Selected topic: {topic}")

        # Generate with retries for validation
        content = None
        for attempt in range(args.max_retries):
            print(f"\n🔄 Generation attempt {attempt + 1}/{args.max_retries}")
            content = generate_faq(topic, category)

            # Validate content
            is_valid, issues = validate_content(content)
            if is_valid:
                print("✅ Content passed validation")
                break
            else:
                print(f"⚠️ Content validation failed:")
                for issue in issues:
                    print(f"   - {issue}")
                if attempt < args.max_retries - 1:
                    print("   Retrying generation...")
                content = None

        if content is None:
            print(f"❌ Failed to generate valid content after {args.max_retries} attempts")
            sys.exit(1)

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
