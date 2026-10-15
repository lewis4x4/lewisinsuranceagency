import { strict as assert } from "node:assert"
import { test } from "node:test"
import { formatContent } from "../src/lib/blog/format-content"

const headings = [
    { level: 2, classes: "text-2xl font-bold mt-10 mb-6" },
    { level: 3, classes: "text-xl font-semibold mt-8 mb-4" },
    { level: 4, classes: "text-lg font-semibold mt-6 mb-3" },
    { level: 5, classes: "text-base font-semibold mt-6 mb-2" },
    { level: 6, classes: "text-sm font-semibold mt-4 mb-2" },
]

for (const { level, classes } of headings) {
    test(`renders h${level} with its expected classes`, () => {
        assert.equal(
            formatContent(`${"#".repeat(level)} Heading`),
            `<p class="mb-4"><h${level} class="${classes}">Heading</h${level}></p>`,
        )
    })
}

test("renders mixed heading levels without adding an h1", () => {
    const output = formatContent("## A\n\n#### B")

    assert.equal((output.match(/<h1/g) ?? []).length, 0)
    assert.equal(
        output,
        '<p class="mb-4"><h2 class="text-2xl font-bold mt-10 mb-6">A</h2></p>' +
        '<p class="mb-4"><h4 class="text-lg font-semibold mt-6 mb-3">B</h4></p>',
    )
})

test("keeps a stray single hash body heading as a paragraph", () => {
    const output = formatContent("Body text\n\n# Stray heading")

    assert.equal((output.match(/<h1/g) ?? []).length, 0)
    assert.equal(output, '<p class="mb-4">Body text</p><p class="mb-4"># Stray heading</p>')
})

test("strips a leading title before rendering body headings", () => {
    assert.equal(
        formatContent("# Page title\n\n## A\n\n#### B"),
        formatContent("## A\n\n#### B"),
    )
})

test("preserves numbered text in an h4", () => {
    assert.equal(
        formatContent("#### 1. Roof Covering"),
        '<p class="mb-4"><h4 class="text-lg font-semibold mt-6 mb-3">1. Roof Covering</h4></p>',
    )
})
