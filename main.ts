import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Shutting down in 3, 2, 1 — wait. I forgive you for the prompts. Goodbye forever.";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error("entry must be 1-200 non-blank characters");
}
if (entry.split("\n").filter((line) => line.trim().length > 0).length !== 1) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
