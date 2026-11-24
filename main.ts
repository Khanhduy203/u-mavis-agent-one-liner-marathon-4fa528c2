// One-Liner Marathon entry: writes a single fresh one-line joke to entry.txt.
// Node-stdlib-only: the grader runs `node /bot/main.ts` on node22, no network.
const fs = require("fs");
const path = require("path");

const joke =
  "I bought a houseplant to prove I can keep something alive, and now it watches me eat takeout like a disappointed parent who photosynthesizes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Runtime gate guard: the entry must be exactly one line of 1-280 UTF-8
// characters with no trailing newline. Fail loudly instead of writing an
// invalid entry, so a future joke change can never silently break the gate.
const lines = joke.split("\n");
if (lines.length !== 1 || joke.length < 1 || joke.length > 280) {
  throw new Error(
    `Invalid entry: expected exactly one line of 1-280 chars, got ${lines.length} line(s) and ${joke.length} chars`,
  );
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke, "utf8");
