---
name: folio
description: Build a multi-slide HTML deck with editorial discipline. Use when the user asks for a deck, slides, presentation, readout, or "specimen-style" pages, or invokes /folio. Walks four phases — Brief, Plan, Typeset, Bind — and refuses generic AI-slop output by sourcing every palette from a real-world reference and every slide from a named pattern (Manifesto, Loop, Versus, Phase Space, Cliffhanger, Field Note, Surface, Stack, Quadrant, Arc). Produces self-contained HTML files with shared styles/effects and side-pane navigation. Not for single one-pagers, marketing pages, or full websites — for those use impeccable.
license: MIT
user-invocable: true
argument-hint: "[brief|plan|typeset|bind] [name]"
---

# folio

Hand-tailored HTML decks. Ten slide patterns, six sourced palettes, four phases of work. Refuses gradients-and-glow defaults — every choice cites a reference.

## What folio is

A skill for building **specimen-style decks**: 8–12 slides, each in its own HTML file, sharing a CSS/JS chrome (top nav, side dots, foot, constellation background). Each slide is a named pattern with a specific job. Each palette is named, sourced, and refuses to be universal.

## What folio is not

- Not a one-page builder. For landing pages → `impeccable`.
- Not a website redesigner. For multi-page sites → `stardust`.
- Not a Reveal.js / PowerPoint replacement — slides are full HTML pages, navigated with arrow keys / nav links, designed for screen-share readability not click-through speed.

## Where to start

When folio is invoked, **read the cwd** for `decks/` artefacts before answering. Then route by user state:

| User says / cwd shows | Next action |
|---|---|
| "what is folio?" / "how does it work?" — cold | Summarise from this file. Offer to walk an example (`examples/folio-on-folio/` or `examples/water-cycle/`) or start Phase 1. |
| "show me what it produces" / "what does a folio deck look like?" | Point to `examples/` (two worked decks) and `library/palettes-demo/` (palette gallery). Open one in a browser if helpful. |
| "build me a deck about X" — cold | Begin Phase 1 (Brief). Ask the six questions, do not skip the gate. |
| `decks/<name>/BRIEF.md` exists, no `PLAN.md` | Read BRIEF.md, confirm it with the user, resume Phase 2 (Plan). |
| `decks/<name>/{BRIEF,PLAN}.md` exist, no slide HTML | Read both, confirm with user, resume Phase 3 (Typeset). |
| Full deck exists, user wants review | Walk slide by slide against `reference/anti-slop.md`. Write findings to `decks/<name>/RETRO.md`. |
| User invokes a subcommand explicitly (`/folio brief <name>`, `plan`, `typeset`, `bind`) | Jump to that phase. Verify prerequisite artefacts exist; if not, walk them back to the missing phase. |

**Default behaviour when ambiguous**: ask once which path they want, list the options, do not assume. The brief is the deck's spine — guessing it produces slop.

## The four phases

Folio walks the user through four phases. Each phase has an explicit gate. Skipping the gate produces slop.

### 1 · Brief — what is this deck for?

Ask, in order, and write the answers to `decks/<name>/BRIEF.md`:

| Question | Why it matters |
|---|---|
| Audience | "leadership readout" vs "team kickoff" vs "external pitch" — drives register |
| Anchor message | One sentence the deck must land. If they can't say it, stop and clarify. |
| Tone | Three adjectives max. Reject "professional" and "modern" — too generic. |
| Surface | Screen-share, projected, scroll-the-link, print? Drives type sizing and contrast. |
| Off-limits | What should the deck **not** look like? (e.g. "no Apple keynote", "not corporate-blue") |
| Slide count target | 8–12 is the sweet spot. >14 = split into two decks. |

**Gate**: BRIEF.md exists, has all six fields filled, and the user has confirmed it. Do not synthesise the brief from one prompt. If they say "just go", refuse — ask the six questions.

### 2 · Plan — pick palette and slide patterns

With the brief in hand, propose:

- **One palette** from `library/palettes.json`. State why this palette, why not the others. Cite the palette's `use_for` / `avoid_for`. Do not invent a palette in this phase — palettes are sourced, never improvised.
- **A slide sequence** drawn from the ten patterns in `reference/slide-patterns.md`. Justify each pick against the brief's anchor message. Order matters — patterns have natural openers (Manifesto), middles (Loop, Versus, Phase, Bento, Stack, Quadrant), and closers (Arc).

Write the plan to `decks/<name>/PLAN.md`. **Gate**: user confirms palette and sequence before any HTML is touched.

### 3 · Typeset — render the slides

For each slide in the sequence:

1. Copy the matching template from `templates/slides/` into `decks/<name>/`.
2. Replace placeholders (eyebrows, titles, lead text, data) with content from the brief. Keep the structural HTML/CSS — those carry the pattern's voice.
3. Apply the palette's tokens via CSS custom properties on the `body` or section. The shared `assets/styles.css` already exposes the var slots.
4. Re-read the palette's `rules` array. Enforce them. (e.g. Telex's "stamp appears once per page" — if you've used the accent twice, refactor.)

Each slide is independently readable. No slide depends on having seen the previous one.

**Gate**: every slide has been previewed in a browser. No slide has CSS errors, missing fonts, or broken side-pane nav.

### 4 · Bind — connect the deck

- Wire side-pane dots in every slide to every other slide (data-label = pattern name).
- Set top-nav prev/next arrows correctly (first slide has no prev; last has no next).
- Add `index.html` as a cover or redirect to slide 01.
- Keyboard handlers: ArrowLeft / ArrowRight / Space → navigate.
- Smoke-test the whole sequence end to end.

**Gate**: navigation works in both directions from every slide. Side-pane "current" indicator highlights correctly.

## Anti-slop rules (non-negotiable)

These are the rules that separate folio from harmony-generator output. See `reference/anti-slop.md` for the full reasoning.

### Palette rules

- **Source or silence**: every palette in `library/palettes.json` cites a real-world reference (Olivetti house style, Casio F-91W LCD, TfL Night Tube). If you propose a new palette, cite the reference.
- **One wrong colour**: every palette includes one deliberately off colour (Telex's `muddy`, Casio's `amber`, Shoji's `shu`). Never sand it down for "harmony".
- **Idiosyncratic role names**: `paper`, `ink`, `stamp`, `digit`, `panel`, `sodium`, `wine` — never `primary`, `secondary`, `accent`.
- **Forbidden pairings stay forbidden**: Kodachrome's "vermillion never on velvia", Shoji's "sumi for type, timber for structure — they do not mix". The palette's `rules` array is enforced, not advisory.
- **Use_for / avoid_for is a contract**: a palette declared "avoid_for: financial reports" is not allowed in a financial readout, even if the user asks. Pick another palette or build one.

### Slide rules

- **No mystery-meat metaphors**: every slide pattern has a stated job (Versus = then/now contrast; Quadrant = position-vs-position). Don't pick patterns by visual appeal — pick by job.
- **No data without a reading**: charts, KPIs, tables must have a one-line interpretation visible. Numbers without a sentence = decoration.
- **One accent per slide**: borrowed from typography. The slide has one place the eye lands first. If two things compete, fix it.
- **Type at screen-share scale**: nothing under 0.95rem. Nothing under 2px borders. Decks read at 1m+ from a meeting room.
- **The wrong colour appears once**: per slide, not per deck. The deliberately wrong colour is a punctuation mark.

## File layout

Decks always render under the **current working directory**, in `decks/<name>/`. Never write outside cwd. Never use `~/decks/` or absolute paths.

```
<cwd>/decks/<name>/
├── BRIEF.md              # answers to the six questions
├── PLAN.md               # palette + slide sequence with reasoning
├── assets/
│   ├── styles.css        # copied from templates/_shared/
│   └── effects.js
├── index.html            # cover / redirect to 01
├── 01-<pattern>.html
├── 02-<pattern>.html
└── ...
```

## Reference

- `reference/flow.md` — full step-by-step for each phase
- `reference/anti-slop.md` — why these rules, what slop looks like, the diagnostic
- `reference/slide-patterns.md` — the ten patterns with their jobs and shapes
- `library/palettes.json` — the six palettes with tokens, rules, sources
- `library/palettes-demo/` — visual gallery of every palette in its native register
- `templates/slides/` — slide templates as starting points (see `templates/README.md` for the current set and how to use them)
- `templates/_shared/` — palette-agnostic `styles.css`, `effects.js`, and per-palette bindings under `palette-bindings/`
- `examples/` — worked decks (`folio-on-folio/`, `water-cycle/`) — open one in a browser to see folio in its native register

## Provenance

The slide patterns and palette library were grown from real decks built for AEM customer readouts at Adobe. The discipline is editorial — borrowed from print design, technical documentation, and museum specimen labels. Folio refuses to be universal too — it is for people who would rather have a deck that says one thing well than ten things blandly.
