# The four-phase flow

Detailed walkthrough of Brief → Plan → Typeset → Bind. Each phase has explicit gates the agent must pass before moving on.

---

## Phase 1 · Brief

The user arrives with intent: "I need a deck for the Q3 readout" or "build me slides for the AstraZeneca workshop". Do **not** start typesetting. Ask the six questions, in order, one at a time if needed:

### The six questions

1. **Audience.** Who reads this? "Leadership readout", "team kickoff", "external pitch", "hiring panel". Each register is different.
2. **Anchor message.** One sentence the deck must land. If they reply "well, several things" — push: pick one. If they can't, the deck isn't ready.
3. **Tone.** Three adjectives, no more. Reject "professional" and "modern" as too generic — push for "wry", "muted", "civic", "saturated", "monastic".
4. **Surface.** Where will it be read? Screen-share Zoom call → larger type. Conference projector → higher contrast. Sent as a link → can be more dense. Print → no animations.
5. **Off-limits.** What should this deck **not** look like? "Not a corporate Apple keynote", "not the standard SaaS pitch", "no stock photography". Off-limits is often more diagnostic than positive intent.
6. **Slide count.** 8–12 is the sweet spot for a strategy or readout deck. Pedagogical, lightning-talk, and scientific-explainer decks often live at 5–6 — accept those when the format dictates. >14 = split into two decks. <5 = push back unless the brief makes it explicit.

### Output

Write `decks/<name>/BRIEF.md`:

```markdown
# Brief — <deck name>

**Date**: YYYY-MM-DD

| | |
|---|---|
| Audience | ... |
| Anchor message | ... |
| Tone | ... · ... · ... |
| Surface | ... |
| Off-limits | ... |
| Slide count target | N |
```

### Gate

User has read BRIEF.md and confirmed it. Do not proceed without explicit confirmation. If the user says "just go", refuse — explain that the brief is the deck's spine.

---

## Phase 2 · Plan

With brief in hand, propose a palette and a slide sequence.

### Palette pick

Read `library/palettes.json`. Match the brief's `tone` and `surface` against each palette's `register`, `use_for`, `avoid_for`. Propose **one** palette and state:

- Why this palette (cite the brief).
- Why not the others (at least two rejected, with reason).
- The one wrong colour — when it will appear, where it is forbidden.

Never invent a palette in this phase. If none fit, escalate to the user — propose adding a new palette to the library, sourced from a real reference. Don't generate a palette from nothing.

### Slide sequence

Read `reference/slide-patterns.md`. Pick patterns by **job**, mapped to the brief's anchor message. State for each slide:

- Pattern name (Manifesto, Loop, Versus, ...).
- Its job in this specific deck (e.g. "Versus to contrast pre-AI editorial cycle vs post-AI cycle").
- One sentence of content it will carry.

### Output

Write `decks/<name>/PLAN.md`:

```markdown
# Plan — <deck name>

## Palette: <palette-id>

Why: ...
Rejected: <id> (reason), <id> (reason)
Wrong colour budget: appears once on slide N as ...

## Sequence

| # | Pattern | Job | Carries |
|---|---|---|---|
| 01 | Manifesto | Open | "..." |
| 02 | ... | ... | ... |

## Anti-slop pre-flight

A short checklist, populated from the brief's *off-limits* + the chosen palette's *rules*. Re-read this when typesetting each slide.

- ☐ <forbidden look #1 from off-limits> — e.g. no stock cyan-violet AI gradient.
- ☐ <forbidden look #2 from off-limits> — e.g. no pill-card KPI sea.
- ☐ Palette rule — e.g. `<wrong-colour>` appears once in the deck, on slide N.
- ☐ Palette rule — e.g. `<deep-field-token>` is a wall, never a line.
- ☐ One accent per slide.
- ☐ Negative space ≥ 40% per slide.
```

### Gate

User confirms palette and full sequence. Do not touch HTML before this gate clears.

---

## Phase 3 · Typeset

Render the slides one at a time.

### Once per deck — copy shared chrome

```sh
mkdir -p decks/<name>/assets
cp templates/_shared/styles.css                        decks/<name>/assets/
cp templates/_shared/effects.js                        decks/<name>/assets/
cp templates/_shared/palette-bindings/<palette-id>.css decks/<name>/assets/palette.css
```

`palette.css` binds the chosen palette's named tokens to abstract roles (`--ground`, `--type`, `--field`, `--seal`, etc.). Templates reference only abstract roles, so swapping palette is a one-file change.

### For each slide

1. **Copy template.** `templates/slides/<pattern>.html` → `decks/<name>/<NN>-<topic>.html`.
2. **Replace placeholders.** Each template documents its `{{TOKENS}}` in the head comment. Fill from BRIEF.md and PLAN.md. Search for `{{` to confirm none are left before preview.
3. **Wire chrome.** Set `{{TOPIC}}`, `{{SLIDE_NUM}}`, `{{TOTAL}}`, `{{PREV_HREF}}`, `{{NEXT_HREF}}`, and `{{SIDE_DOTS}}` consistently across all slides.
4. **Enforce palette rules.** Re-read the palette's `rules` array in `library/palettes.json`. If `--accent` appears twice on the same slide, refactor. If `--seal` appears more than once in the whole deck, refactor.
5. **Add per-slide decoration inline.** Pattern-specific motion (rain, vapour, halftone) lives in a `<style>` block inside the slide, not in the shared chrome.
6. **Preview.** Open the HTML in a browser. Check at full screen and at 75% zoom (Zoom-share scale).

### Gate

Every slide passes:

- No CSS errors in console.
- No fonts failing to load.
- All placeholder tokens replaced (search for `{{`).
- Palette rules respected.
- Type ≥ 0.95rem, borders ≥ 2px.
- One accent per slide.

---

## Phase 4 · Bind

Wire the slides together.

### Side-pane navigation

Every slide has a `<aside class="side-dots">` with one `<a>` per slide. Each link has a `data-label` (the pattern name). The current slide's link gets `class="current"`.

```html
<aside class="side-dots">
  <a href="01-manifesto.html" data-label="1. Manifesto"></a>
  <a href="02-loop.html" class="current" data-label="2. The Loop"></a>
  ...
</aside>
```

### Top-nav prev/next

```html
<nav class="topnav">
  <div class="logo">...</div>
  <div class="slide-counter">SLIDE · N / TOTAL</div>
  <div class="topnav-actions">
    <a class="nav-link" href="<prev>.html">← Prev</a>
    <a class="nav-link" href="<next>.html">Next →</a>
  </div>
</nav>
```

First slide has no prev link (or a disabled state). Last slide has no next link.

### Foot

```html
<div class="slide-foot">
  <a href="<prev>.html">← Prev</a>
  <a href="<next>.html">Next →</a>
</div>
```

### Keyboard handlers

Each slide has the standard handler:

```js
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') location.href = '<next>.html';
  if (e.key === 'ArrowLeft') location.href = '<prev>.html';
});
```

### Cover / index

`decks/<name>/index.html` is either:
- A redirect to slide 01 (`<meta http-equiv="refresh" content="0; url=01-manifesto.html">`), or
- A cover page with the deck title, date, and a "begin" link.

### Gate

Walk through the deck end to end with arrow keys. Walk back. Click each side-pane dot. Confirm:

- Every nav link goes somewhere.
- The "current" indicator highlights correctly on every slide.
- Keyboard handlers fire.
- No 404s.

---

## When to break the rules

The flow is the default. Break it only when the user has clear authority and a specific reason:

- "I have the brief written already" → read it, confirm it, skip Phase 1.
- "I want to use a palette not in the library" → add it to `palettes.json` with a real-world source, then proceed.
- "I need a pattern not in the ten" → propose it with a stated job, get user buy-in, add it to `slide-patterns.md`.

Breaking the rules is fine. Skipping the gates produces slop.
