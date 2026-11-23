// Dad Joke Showdown — make.fun bounty entry
// https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5
//
// Writes exactly one dad joke to /output/entry.txt.
// The joke is a fixed string: the output is byte-identical on every run,
// with no trailing newline and no extra text.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE: string =
  "I told my wife the sourdough starter is the only thing in this house that rises to my jokes.";

const OUTPUT_PATH: string = "/output/entry.txt";
const MAX_CHARS: number = 200;

function checkJoke(joke: string): void {
  if (joke.length === 0) {
    throw new Error("Joke must not be empty.");
  }
  if (joke.length > MAX_CHARS) {
    throw new Error(
      `Joke is ${joke.length} characters, over the ${MAX_CHARS} limit.`,
    );
  }
  // The limit is on characters, but the file is read back as UTF-8, so
  // guard the byte length too: a joke that fits in characters but not in
  // bytes would be a silent truncation risk on the grader's side.
  const byteLength: number = Buffer.byteLength(joke, "utf8");
  if (byteLength > MAX_CHARS) {
    throw new Error(
      `Joke is ${byteLength} UTF-8 bytes, over the ${MAX_CHARS} limit.`,
    );
  }
  if (joke.includes("\n") || joke.includes("\r")) {
    throw new Error("Joke must be a single line.");
  }
  if (joke !== joke.trim()) {
    throw new Error("Joke must not start or end with whitespace.");
  }
}

function main(): void {
  checkJoke(JOKE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(join(dirname(OUTPUT_PATH), "entry.txt"), JOKE, "utf8");
  const bytes: number = Buffer.byteLength(JOKE, "utf8");
  console.log(
    `Wrote ${JOKE.length} characters (${bytes} UTF-8 bytes) to ${OUTPUT_PATH}`,
  );
}

main();
