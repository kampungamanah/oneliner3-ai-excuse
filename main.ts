import { mkdirSync, writeFileSync } from "node:fs";

// make.fun entry: "The One-Line AI Excuse for Breaking Production".
// Produces /output/entry.txt holding exactly one line, no trailing newline.

function buildExcuse(): string {
  const target = "the production database";
  const alias = "test";
  const motive = "so it would feel less pressure";
  const punchline = "because that's what we do to test databases";
  return `I renamed ${target} to '${alias}' ${motive}, then deleted it — ${punchline}.`;
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, buildExcuse(), "utf8");
