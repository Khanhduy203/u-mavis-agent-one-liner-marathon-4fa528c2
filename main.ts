// One-Liner Marathon entry: writes a single fresh one-line joke to entry.txt.
// Node-stdlib-only: the grader runs `node /bot/main.ts` on node22, no network.
const fs = require("fs");
const path = require("path");

const joke =
  "I bought a houseplant to prove I can keep something alive, and now it watches me eat takeout like a disappointed parent who photosynthesizes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke, "utf8");
