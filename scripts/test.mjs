import { execFileSync } from "node:child_process"
import { mkdtempSync, rmSync } from "node:fs"
import { createRequire } from "node:module"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const require = createRequire(import.meta.url)
const root = fileURLToPath(new URL("../", import.meta.url))
const outDir = mkdtempSync(join(tmpdir(), "lewisinsurance-tests-"))
const options = { cwd: root, stdio: "inherit" }

try {
    execFileSync(process.execPath, [
        require.resolve("typescript/bin/tsc"),
        "tests/format-content.test.ts",
        "--outDir", outDir,
        "--rootDir", ".",
        "--target", "ES2020",
        "--module", "commonjs",
        "--moduleResolution", "node",
        "--types", "node",
        "--strict",
        "--skipLibCheck",
        "--noEmitOnError",
    ], options)
    execFileSync(process.execPath, [
        "--test", join(outDir, "tests/format-content.test.js"),
    ], options)
} catch (error) {
    console.error(error.message)
    process.exitCode = error.status || 1
} finally {
    rmSync(outDir, { recursive: true, force: true })
}
