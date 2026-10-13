#!/usr/bin/env python3
"""Validate and sanitize generated blog content."""

import argparse
import re
import subprocess
import sys
from pathlib import Path


INTERNAL_ROUTE_MAP = [
    (("wind", "mitigation", "my-safe-florida-home"), "/wind-mitigation-inspection-guide"),
    (
        ("hurricane-prep", "preparedness", "hurricane-preparation", "checklist"),
        "/hurricane-preparation-checklist",
    ),
    (("flood",), "/personal/flood-insurance-florida"),
    (
        ("citizens",),
        "/blog/citizens-insurance-florida-eligibility-requirements-2026-gui",
    ),
    (
        ("sr22", "high-risk", "teen", "young-driver", "auto", "pip", "uninsured", "no-fault"),
        "/personal/auto-insurance-florida",
    ),
    (
        ("homeowners", "home", "roof", "property", "rates", "carriers", "companies", "discounts"),
        "/personal/homeowners-insurance-florida",
    ),
    (("condo",), "/personal/condo-insurance-florida"),
    (("umbrella",), "/personal/umbrella-insurance-florida"),
    (("local-agent", "local-insurance-agents", "agents", "independent"), "/why-local-agent"),
    (("quote", "contact"), "/contact"),
    (("claim",), "/claims"),
    (("business", "commercial"), "/business"),
]

_INTERNAL_LINK = re.compile(r"\[INTERNAL_LINK:([^\]\r\n]+)\]")
_STANDALONE_INTERNAL_LINK = re.compile(
    r"^[ \t]*(?:(?:#{1,6}|[-*+])[ \t]+)?"
    r"\[INTERNAL_LINK:[^\]\r\n]+\][ \t]*(?:\r?\n|$)",
    re.MULTILINE,
)

_COMPANY_WORD = r"[A-Z][A-Za-z0-9&'’.-]*"
_COMPANY_NAME = rf"{_COMPANY_WORD}(?:[ \t]+{_COMPANY_WORD})*"
_COMPANY_SUFFIX = (
    r"(?:L\.?L\.?C\.?|L\.?L\.?P\.?|L\.?P\.?|P\.?A\.?|P\.?L\.?L\.?C\.?|"
    r"Inc(?:orporated)?\.?|Ltd\.?|Limited|Corp(?:oration)?\.?|Co(?:mpany)?\.?)"
)
_LEWIS_INSURANCE = r"Lewis[ \t]+Insurance(?:[ \t]+Agency)?"
_SENTENCE_START = r"(?:^|(?<=[.!?]))[ \t]*"

# The negative lookaheads exempt the two permitted Lewis Insurance names.
THIRD_PARTY_FIRST_PERSON = re.compile(
    rf"{_SENTENCE_START}(?:"
    rf"(?:At|Here[ \t]+at)[ \t]+"
    rf"(?!(?i:{_LEWIS_INSURANCE})"
    rf"(?:[ \t]*,[ \t]*{_COMPANY_SUFFIX})?[ \t]*,[ \t]*(?i:we)\b)"
    rf"{_COMPANY_NAME}(?:[ \t]*,[ \t]*{_COMPANY_SUFFIX})?"
    rf"[ \t]*,[ \t]*(?i:we)\b[^.!?]*[.!?]"
    rf"|"
    rf"(?!(?i:{_LEWIS_INSURANCE})"
    rf"(?:[ \t]*,[ \t]*{_COMPANY_SUFFIX})?[ \t]+(?i:is[ \t]+proud)\b)"
    rf"{_COMPANY_NAME}(?:[ \t]*,[ \t]*{_COMPANY_SUFFIX})?"
    rf"[ \t]+(?i:is[ \t]+proud)\b"
    rf"(?=[^.!?]*\b(?i:we)\b)[^.!?]*[.!?]"
    rf")[ \t]*",
    re.MULTILINE,
)

_REPO_ROOT = Path(__file__).resolve().parents[1]


def _humanize_slug(slug: str) -> str:
    text = slug.strip().replace("-", " ")
    return re.sub(r"\bflorida\b", "Florida", text, flags=re.IGNORECASE)


def _route_for_slug(slug: str) -> str | None:
    normalized_slug = slug.strip().lower()
    for keywords, route in INTERNAL_ROUTE_MAP:
        if any(keyword in normalized_slug for keyword in keywords):
            return route
    return None


def resolve_internal_links(markdown: str) -> str:
    """Remove standalone tokens and resolve inline tokens to approved routes."""

    resolved = _STANDALONE_INTERNAL_LINK.sub("", markdown)

    def replace_token(match: re.Match[str]) -> str:
        slug = match.group(1)
        anchor = _humanize_slug(slug)
        route = _route_for_slug(slug)
        return f"[{anchor}]({route})" if route else anchor

    resolved = _INTERNAL_LINK.sub(replace_token, resolved)

    def collapse_blank_lines(match: re.Match[str]) -> str:
        newline = "\r\n" if "\r\n" in match.group(0) else "\n"
        return newline * 2

    return re.sub(r"(?:\r?\n){3,}", collapse_blank_lines, resolved)


def strip_third_party_first_person(markdown: str) -> str:
    """Remove sentences that speak as an organization other than Lewis Insurance."""

    def remove_sentence(match: re.Match[str]) -> str:
        before = markdown[match.start() - 1] if match.start() else ""
        after = markdown[match.end()] if match.end() < len(markdown) else ""
        same_line = before and after and before not in "\r\n" and after not in "\r\n"
        return " " if same_line else ""

    stripped = THIRD_PARTY_FIRST_PERSON.sub(remove_sentence, markdown)
    return re.sub(r"(?<=\S)[ \t]{2,}(?=\S)", " ", stripped)


def _line_number(markdown: str, offset: int) -> int:
    return markdown.count("\n", 0, offset) + 1


def find_violations(markdown: str) -> list[str]:
    """Return line-numbered descriptions of unresolved content violations."""

    violations: list[tuple[int, str]] = []
    for match in re.finditer(r"\[INTERNAL_LINK", markdown):
        line = _line_number(markdown, match.start())
        violations.append((match.start(), f'{line}: unresolved "[INTERNAL_LINK" token'))

    for match in THIRD_PARTY_FIRST_PERSON.finditer(markdown):
        line = _line_number(markdown, match.start())
        violations.append((match.start(), f"{line}: third-party first-person sentence"))

    violations.sort(key=lambda item: item[0])
    return [message for _, message in violations]


def sanitize(markdown: str) -> str:
    """Resolve internal links, then remove third-party first-person sentences."""

    return strip_third_party_first_person(resolve_internal_links(markdown))


def _changed_blog_posts(git_ref: str) -> list[Path]:
    result = subprocess.run(
        ["git", "diff", "--name-only", "--diff-filter=AM", f"{git_ref}...HEAD"],
        cwd=_REPO_ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return [
        _REPO_ROOT / name
        for name in result.stdout.splitlines()
        if name.startswith("content/blog/") and name.endswith(".md")
    ]


def _display_path(path: Path) -> str:
    try:
        return str(path.resolve().relative_to(Path.cwd().resolve()))
    except ValueError:
        return str(path)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Check blog markdown for unsafe generated content")
    scope = parser.add_mutually_exclusive_group()
    scope.add_argument("--all", action="store_true", help="scan all content/blog markdown files")
    scope.add_argument(
        "--changed-against",
        metavar="GIT_REF",
        help="scan blog files added or modified relative to GIT_REF",
    )
    parser.add_argument("paths", nargs="*", help="markdown files to scan")
    args = parser.parse_args(argv)

    if (args.all or args.changed_against) and args.paths:
        parser.error("paths cannot be combined with --all or --changed-against")
    if not (args.all or args.changed_against or args.paths):
        parser.error("provide markdown paths, --all, or --changed-against")

    if args.all:
        paths = sorted((_REPO_ROOT / "content" / "blog").glob("*.md"))
    elif args.changed_against:
        try:
            paths = _changed_blog_posts(args.changed_against)
        except subprocess.CalledProcessError as error:
            message = error.stderr.strip() or str(error)
            print(f"unable to determine changed blog posts: {message}", file=sys.stderr)
            return 1
        if not paths:
            print("no changed blog posts")
            return 0
    else:
        paths = [Path(path) for path in args.paths if Path(path).suffix.lower() == ".md"]

    found_violation = False
    for path in paths:
        try:
            markdown = path.read_text(encoding="utf-8")
        except OSError as error:
            print(f"{_display_path(path)}:0: unable to read file: {error}", file=sys.stderr)
            found_violation = True
            continue

        for violation in find_violations(markdown):
            print(f"{_display_path(path)}:{violation}")
            found_violation = True

    return 1 if found_violation else 0


if __name__ == "__main__":
    sys.exit(main())
