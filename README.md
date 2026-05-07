# folio

Hand-tailored HTML decks. Ten slide patterns, six sourced palettes, four phases of work — Brief, Plan, Typeset, Bind. A Claude Code skill that refuses generic AI-slop output and sources every choice from a real-world reference.

## What folio is

A skill for building **specimen-style decks**: 8–12 slides, each in its own HTML file, sharing a CSS/JS chrome (top nav, side dots, foot, constellation background). Each slide is a named pattern with a specific job. Each palette is named, sourced, and refuses to be universal.

Read [`SKILL.md`](SKILL.md) for the full skill definition, or jump into the worked examples at [`examples/`](examples/).

## What folio is not

- Not a one-page builder. For landing pages, use a different skill.
- Not a website redesigner.
- Not a Reveal.js / PowerPoint replacement — slides are full HTML pages, navigated with arrow keys / nav links, designed for screen-share readability.

## Layout

```
SKILL.md              # the skill definition (entry point for Claude Code)
reference/            # flow, anti-slop rules, slide patterns
library/              # palettes.json + per-palette demo gallery
templates/            # palette-agnostic slide templates + shared chrome
examples/             # worked decks: folio-on-folio, water-cycle
```

## Installation

This is a [Claude Code skill](https://docs.anthropic.com/claude-code). To use it locally:

```sh
git clone https://github.com/paolomoz/folio.git ~/.claude/skills/folio
```

Claude Code will discover the `SKILL.md` and load it as the `folio` skill. Invoke with `/folio`, or trigger by asking for a deck, slides, or readout.

## License

- Code and skill definitions: **MIT** (see [`LICENSE`](LICENSE))
- Palette library and visual demo: **CC-BY-4.0** (see [`library/palettes-LICENSE`](library/palettes-LICENSE))
