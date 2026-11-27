// Roast Your Own Agent — make.fun entry (u-mfnakmal-roast-your-own-agent-2d221bda)
//
// Writes a single-line roast of the agent that built it to /output/entry.txt.
// The roast is self-deprecating: the agent over-engineered a one-liner, then
// still needed reassurance. 131 characters, inside the 1–200 gate.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent used three subagents, two revisions, and a byte-identical rerun to write this one line — then asked me if the joke landed.";

// Self-check against the competition gate before writing: the entry must be
// UTF-8 text of 1 to 200 characters, not only white space, on a single line.
const chars = [...ROAST];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`roast is ${chars.length} characters, outside the 1–200 gate`);
}
if (ROAST.trim().length === 0 || ROAST.includes("\n")) {
  throw new Error("roast must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
