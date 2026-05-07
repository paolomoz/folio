# Templates

Palette-agnostic HTML templates and shared chrome for folio decks.

## Layout

```
templates/
├── _shared/
│   ├── styles.css                       # palette-agnostic chrome (abstract role tokens)
│   ├── effects.js                       # autoReveal + opt-in helpers
│   └── palette-bindings/
│       ├── shoji-monastic.css           # one file per library palette
│       ├── telex-1986.css               # binds named tokens → abstract roles
│       ├── night-tube.css
│       ├── casio-f91w.css
│       ├── riso-bisque.css
│       └── kodachrome-65.css
└── slides/
    ├── manifesto.html
    ├── stack.html
    ├── phase-space.html
    ├── versus.html                      # vertical axis (left/right)
    ├── versus-horizontal.html           # horizontal axis (above/below)
    └── loop.html
```

## Abstract role tokens

`_shared/styles.css` uses semantic CSS variables that any palette can bind:

| Role | Job |
|---|---|
| `--ground` | page background |
| `--surface-2` | secondary surface (cards, alt panes) |
| `--type` | body type colour |
| `--type-dim` | secondary type, footnotes |
| `--type-faint` | tertiary type |
| `--structure` | eyebrows, structural type, label colour |
| `--rule` | divider lines (alpha-aware) |
| `--accent` | single-use-per-page accent |
| `--field` | deep-field "wall" — used as block background, never as 1px line |
| `--field-on` | text colour against `--field` |
| `--seal` | wrong-colour, reserved for once-per-deck use |

Templates reference *only* these roles. The palette binding maps named palette tokens (e.g. Shoji's `ai`, `shu`) to the abstract roles.

## How to use (Phase 3 · Typeset)

For each new deck `decks/<name>/`:

1. **Copy shared chrome** (once per deck):
   ```sh
   mkdir -p decks/<name>/assets
   cp templates/_shared/styles.css decks/<name>/assets/
   cp templates/_shared/effects.js decks/<name>/assets/
   cp templates/_shared/palette-bindings/<id>.css decks/<name>/assets/palette.css
   ```
2. **Copy slide templates** picked from PLAN.md:
   ```sh
   cp templates/slides/manifesto.html  decks/<name>/01-<topic>.html
   cp templates/slides/stack.html      decks/<name>/02-<topic>.html
   ...
   ```
3. **Replace placeholders.** Each template documents its `{{TOKENS}}` in the head comment. Search for `{{` to find unfilled tokens before previewing.
4. **Wire navigation** — fill `{{PREV_HREF}}`, `{{NEXT_HREF}}`, `{{SIDE_DOTS}}`, `{{SLIDE_NUM}}` / `{{TOTAL}}` consistently across all slides.
5. **Preview** by opening any slide in a browser. Walk the deck end-to-end (Phase 4 · Bind).

## Discipline

- **Never hard-code colours in a slide template.** Always reference an abstract role. If you find yourself wanting `#a8554a`, you want `var(--seal)` — and you should be using it once, not many times.
- **Never reach into the named palette tokens (`var(--shoji)`, `var(--ai)`) inside a template.** That couples the template to one palette. Per-deck overrides can use named tokens; templates cannot.
- **The `--field` rule still applies.** It's a wall, not a line. If you want a 1px stroke, use `--structure`.
- **The `--seal` is once per deck.** Templates use it on the loop-closer slide by default. If a deck doesn't close with Loop, find another one-shot home for it (e.g. an emphatic word in the manifesto). Do not use it more than once.

## What's *not* a template

These belong per-deck, not in `_shared/`:

- **Pattern-specific decoration** (e.g. animated rain, wavy strokes, halftone overlays). Live inline in the deck's slide CSS.
- **Constellation / cursor-glow.** Available via `window.folio.startConstellation()` but loud — incompatible with quiet palettes (Shoji, Telex). Opt in only when register matches.
- **Custom logo / brand mark.** The `.logo` element is structural; deck content goes in `<span class="topic">`.
