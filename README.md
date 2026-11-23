# Dad Joke Showdown — make.fun Entry

[![make.fun bounty](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![make.fun rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/0xrifai/makefun-dad-joke-showdown-20261124/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![make.fun reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/0xrifai/makefun-dad-joke-showdown-20261124/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes exactly one dad joke to `/output/entry.txt`. The joke is a
fixed string baked into the program, so the output is byte-identical on every
run: one line, no trailing newline, well under the 200-character limit.

## The joke

> I told my wife the sourdough starter is the only thing in this house that rises to my jokes.

Six candidates were drafted against the judge criteria (a dad joke a father
would tell at the table, a pun that lands cleanly on first read, fresh but
inside dad-joke tradition, tight, and natural aloud). The sourdough one won:
"rises" does double duty — bread rising and rising to a joke — in a single
short sentence, with no setup to explain and no borrowed punchline. The
others leaned on over-used wordplay ("thyme", "crack under pressure") or
needed a second sentence to land.

## How to run

Requires Node 22 or later. No dependencies to install.

```bash
node main.ts
cat /output/entry.txt
```

## How it works

- The joke is validated before writing: non-empty, at most 200 characters
  (and 200 UTF-8 bytes), a single line, and no leading or trailing
  whitespace.
- `/output` is created with `mkdirSync(..., { recursive: true })` if it
  does not already exist.
- The file is written with `writeFileSync` and plain UTF-8, deterministically.
