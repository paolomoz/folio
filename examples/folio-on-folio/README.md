# Worked example · folio on folio

A 6-slide deck where folio describes itself, using its own patterns and discipline. Demonstrates the skill end-to-end and serves as a regression test.

## Files

```
folio-on-folio/
├── BRIEF.md             # the six questions, answered
├── PLAN.md              # palette pick + slide sequence with reasoning
├── README.md            # this file
├── index.html           # redirects to 01-manifesto.html
├── 01-manifesto.html    # Manifesto · "Decks that say one thing well"
├── 02-loop.html         # Loop · the four-phase rhythm
├── 03-versus.html       # Versus · slop vs sourced
├── 04-quote.html        # Field Note · "a palette without a source…"
├── 05-surface.html      # Surface · the six palettes as a bento
├── 06-arc.html          # Arc · the journey, the receipt, the close
└── assets/
    ├── styles.css
    └── effects.js
```

## How to read it

Open `index.html` in a browser. It redirects to slide 1. Use:

- `→` / `Space` — next slide
- `←` — previous slide
- Side-pane dots — jump to any slide (hover for label)
- Slide-specific affordances:
  - **02 Loop** — click any of the four stations to see its caption
  - **03 Versus** — press `v` to flip the THEN/NOW seam
  - **05 Surface** — hover any tile to focus it
  - **06 Arc** — click any milestone to print its receipt; `esc` to dismiss

## What's intentional

- **No palette pick from `library/palettes.json`.** This deck uses the default specimen cyan/violet on dark — because the subject is folio's chrome and patterns, not any one palette. For real decks, pick from the library.
- **Six slides, not ten.** Phase Space, Cliffhanger, Stack, and Quadrant are deliberately omitted (see PLAN.md for why).
- **Anchor message restated visually on the Arc slide.** The "vol II — your deck" milestone leaves the door open.

## What this demonstrates

- The four-phase flow: BRIEF.md → PLAN.md → six rendered HTML files → wired navigation
- All four navigation surfaces (top-nav prev/next, side-pane dots, slide-foot, keyboard handlers) wired correctly across all six slides
- Six different patterns rendered using the shared `assets/styles.css` chrome
- Anti-slop discipline: every palette swatch on the Surface slide is sourced; the deck doesn't claim universality
