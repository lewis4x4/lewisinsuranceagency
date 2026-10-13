import sys
import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS_DIR = REPO_ROOT / "scripts"
if str(SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPTS_DIR))

from blog_content_guard import (  # noqa: E402
    INTERNAL_ROUTE_MAP,
    find_violations,
    resolve_internal_links,
    strip_third_party_first_person,
)


class BlogContentGuardTests(unittest.TestCase):
    def test_standalone_token_line_is_removed(self):
        markdown = "Before.\n\n[INTERNAL_LINK:flood-insurance]\n\nAfter."

        self.assertEqual(resolve_internal_links(markdown), "Before.\n\nAfter.")

    def test_heading_token_line_is_removed(self):
        markdown = "Before.\n\n## [INTERNAL_LINK:roof-insurance]\n\nAfter."

        self.assertEqual(resolve_internal_links(markdown), "Before.\n\nAfter.")

    def test_bullet_token_line_is_removed(self):
        markdown = "Before.\n\n- [INTERNAL_LINK:contact]\n\nAfter."

        self.assertEqual(resolve_internal_links(markdown), "Before.\n\nAfter.")

    def test_inline_token_becomes_mapped_markdown_link(self):
        markdown = "Read our [INTERNAL_LINK:Florida-flood-guide] today."

        self.assertEqual(
            resolve_internal_links(markdown),
            "Read our [Florida flood guide](/personal/flood-insurance-florida) today.",
        )

    def test_unknown_inline_token_becomes_plain_text(self):
        markdown = "Read [INTERNAL_LINK:Florida-weather-tips] today."

        self.assertEqual(resolve_internal_links(markdown), "Read Florida weather tips today.")

    def test_third_party_first_person_sentence_is_removed(self):
        markdown = "Before. At Florida All Risk Insurance, we've seen X. After."

        self.assertEqual(strip_third_party_first_person(markdown), "Before. After.")

    def test_third_party_name_with_suffix_is_removed(self):
        markdown = "At High Mark Inspections, LLC, we have X. The rest stays."

        self.assertEqual(strip_third_party_first_person(markdown), "The rest stays.")

    def test_third_party_proud_sentence_is_removed(self):
        markdown = "High Mark Inspections is proud of the work we do. The rest stays."

        self.assertEqual(strip_third_party_first_person(markdown), "The rest stays.")

    def test_lewis_insurance_voice_is_kept(self):
        markdown = "At Lewis Insurance Agency, we help North Florida families."

        self.assertEqual(strip_third_party_first_person(markdown), markdown)

    def test_find_violations_flags_token_and_third_party_voice(self):
        markdown = (
            "Use [INTERNAL_LINK:flood] here.\n"
            "At Florida All Risk Insurance, we help homeowners."
        )

        violations = find_violations(markdown)

        self.assertEqual(len(violations), 2)
        self.assertTrue(any("INTERNAL_LINK" in violation for violation in violations))
        self.assertTrue(any("third-party" in violation for violation in violations))

    def test_every_internal_route_exists(self):
        posts_source = (REPO_ROOT / "src" / "lib" / "blog" / "posts.ts").read_text(
            encoding="utf-8"
        )

        for route in dict.fromkeys(route for _, route in INTERNAL_ROUTE_MAP):
            with self.subTest(route=route):
                if route.startswith("/blog/"):
                    slug = route.removeprefix("/blog/")
                    markdown_exists = any(
                        (REPO_ROOT / "content" / "blog").glob(f"*-{slug}.md")
                    )
                    source_has_slug = f'slug: "{slug}"' in posts_source
                    self.assertTrue(markdown_exists or source_has_slug)
                else:
                    page = REPO_ROOT / "app" / route.lstrip("/") / "page.tsx"
                    self.assertTrue(page.is_file(), f"missing route page: {page}")

    def test_generator_uses_content_guard_without_legacy_prompt(self):
        source = (SCRIPTS_DIR / "auto-blog-generator.py").read_text(encoding="utf-8")

        self.assertNotIn("link placeholders", source)
        self.assertIn("from blog_content_guard import", source)


if __name__ == "__main__":
    unittest.main()
