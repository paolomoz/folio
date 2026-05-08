# folio

Hand-tailored HTML decks. Ten slide patterns, six sourced palettes, four phases of work — Brief, Plan, Typeset, Bind. A Claude Code skill that refuses generic AI-slop output and sources every choice from a real-world reference.

## What folio is

A skill for building **specimen-style decks**: 8–12 slides, each in its own HTML file, sharing a CSS/JS chrome (top nav, side dots, foot, constellation background). Each slide is a named pattern with a specific job. Each palette is named, sourced, and refuses to be universal.

Read [`SKILL.md`](skills/folio/SKILL.md) for the full skill definition, or jump into the worked examples at [`skills/folio/examples/`](skills/folio/examples/).

## What folio is not

- Not a one-page builder. For landing pages, use a different skill.
- Not a website redesigner.
- Not a Reveal.js / PowerPoint replacement — slides are full HTML pages, navigated with arrow keys / nav links, designed for screen-share readability.

## Layout

```
.claude-plugin/
  plugin.json           # plugin manifest
  marketplace.json      # one-plugin marketplace manifest
skills/folio/
  SKILL.md              # the skill definition (entry point)
  reference/            # flow, anti-slop rules, slide patterns
  library/              # palettes.json + per-palette demo gallery
  templates/            # palette-agnostic slide templates + shared chrome
  examples/             # worked decks: folio-on-folio, water-cycle
```

## Installation

folio is a [Claude Code plugin](https://code.claude.com/docs/en/discover-plugins) shipping a single skill. Install from the marketplace:

```sh
/plugin marketplace add paolomoz/folio
/plugin install folio@folio
```

Then invoke with `/folio`, or just ask Claude for a deck, slides, or readout — the skill self-loads on intent.

### Local development

To hack on folio against a local checkout:

```sh
git clone https://github.com/paolomoz/folio.git
/plugin marketplace add ./folio
/plugin install folio@folio
```

## License

- Code and skill definitions: **MIT** (see [`LICENSE`](LICENSE))
- Palette library and visual demo: **CC-BY-4.0** (see [`skills/folio/library/palettes-LICENSE`](skills/folio/library/palettes-LICENSE))
