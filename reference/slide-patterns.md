# Slide patterns

Ten named patterns. Each has a stated **job**, a recommended **slot** in the sequence, and a **shape**.

Pick patterns by job, not by visual appeal. A deck that needs a then/now contrast picks Versus even if Quadrant looks more impressive. Mismatching pattern to job is the most common slop tell.

---

## 01 · Manifesto

**Job**: open the deck. State the anchor message in one breath.

**Slot**: always slide 1.

**Shape**: oversized type (clamp to 6–10vw), one or two lines, no chart, no table. An eyebrow above (date, deck name, author), an optional subtitle below. Background does the rest — constellation, halftone, sodium-lit, depending on palette.

**Job done when**: the reader, having read only this slide, can repeat the anchor message.

---

## 02 · Loop

**Job**: show a cyclical process — sense → generate → distribute → measure, or any 3–5 step rhythm that compounds.

**Slot**: early-middle (when the cycle is *context* for the rest of the deck) or last (when the cycle is itself the anchor message — pedagogical or scientific decks where the topic is a cycle). If using as the closer, prefer Loop over Arc — Arc is for journey-shaped topics, Loop is for cycle-shaped ones.

**Shape**: a ring (SVG circle) with stations placed on the perimeter. A counter or live element at the centre. When used early-middle, stations are interactive — click reveals the station's job. When used as a closer, the ring can be static and the centre carries the deck's stake (a number, a seal, a signature).

**Job done when**: the reader sees that the cycle is the message — not any single station.

---

## 03 · Versus

**Job**: contrast two states — typically "then vs now" or "without us vs with us".

**Slot**: middle. Earns its place by setting up tension that later slides resolve.

**Shape**: split screen with a diagonal seam (clip-path polygon). The split *axis* is dictated by the contrast, not the pattern: vertical (left/right) for then/now, with/without — the default. Horizontal (above/below) when the contrast lives in physical layering — above-soil vs below-soil, surface vs deep, public vs private. Pick the axis that matches the geometry of the comparison; keep the diagonal seam either way. One side carries the *was* register (period type, dimmer palette tints), the other the *is* register. A keyboard hint to flip the seam adds tactility.

**Job done when**: the reader feels the gap, not just sees it.

---

## 04 · Phase Space

**Job**: plot a journey across two dimensions over time. Show trajectory, not just position.

**Slot**: middle. Needs context from earlier slides.

**Shape**: 2D scatter / phase plot with labelled axes. Points connected by a path that traces the journey. Annotations on key inflection points. A "now" marker for the current state.

**Job done when**: the reader sees the shape of the journey — that it bent, accelerated, or stalled.

---

## 05 · Cliffhanger

**Job**: end an act. Plant a question that the next slide answers.

**Slot**: act break. Often slide 5 in a 10-slide deck.

**Shape**: minimal — one big question or provocative number, an eyebrow stating the section, a "press space to continue" affordance. Negative space carries weight.

**Job done when**: the reader leans forward.

---

## 06 · Field Note

**Job**: ground the deck with a quote, a customer story, or a primary observation. Earns trust.

**Slot**: middle-late. After enough context that the quote lands.

**Shape**: oversized opening quote mark, a serif italic block of text, a small attribution. Margin scribbles or annotations add hand-feel. The deck "pauses" here.

**Job done when**: the reader believes the deck has been outside, talking to people.

---

## 07 · Surface (Bento)

**Job**: show a portfolio, a roster, a system at a glance. Not for arbitrary collections — for things that genuinely belong together.

**Slot**: middle-late. Rewards a reader who has built up context.

**Shape**: irregular grid, cards of varying size. Each card has its own register (a chart, a quote, a metric, an icon). The grid composition itself is the message — proportion implies importance.

**Job done when**: the reader can scan it like a magazine spread, not read it linearly.

---

## 08 · Stack

**Job**: show layered architecture, dependencies, a tech stack, a value chain.

**Slot**: late-middle. After Surface or Quadrant set context.

**Shape**: horizontal or vertical stacked blocks. Labels left, technology / capability right. Connecting lines or arrows show dependencies. Hover or click reveals layer detail.

**Job done when**: the reader sees how the layers add up to the whole.

---

## 09 · Quadrant

**Job**: position something against two competing dimensions. Strategic 2×2.

**Slot**: late. Pays off the framing built earlier.

**Shape**: a 2×2 matrix with labelled axes. Bubbles plotted with size = third variable. Quadrant labels (e.g. "table stakes", "strategic bets", "quick wins", "avoid"). A reset / replay control re-animates entry.

**Job done when**: the reader can see where to invest first.

---

## 10 · Arc

**Job**: close the deck. Restate the anchor message with the journey behind it.

**Slot**: always last.

**Shape**: a curve from start to end (SVG path), waypoints marked, the anchor message restated in the same oversized type as Manifesto — but now the reader knows what it means. Side note with next steps or an ask.

**Job done when**: the reader leaves with one sentence and one action.

---

## Sequencing guidance

For a 10-slide deck:

```
01 Manifesto    (open)
02 Loop         (process / context)
03 Versus       (set the tension)
04 Phase        (where we are in the journey)
05 Cliffhanger  (act break)
06 Field Note   (ground with a voice)
07 Surface      (the portfolio)
08 Stack        (the architecture)
09 Quadrant     (where to bet)
10 Arc          (close)
```

For 8 slides, drop Phase and Stack. For 12, add a second Field Note and a Surface variant. Never repeat a pattern back-to-back.

For pedagogical or lightning-talk decks at 5–6 slides, a typical sequence is Manifesto → Stack/Phase/Versus (the body, in any order matching the topic's geometry) → Loop or Arc (close). Skip Cliffhanger and Quadrant — they need length to land.

---

## Layout primitives — *internal* to a slide

Patterns describe a slide's job. Layout primitives describe how its content is split. Three default splits keep most slides honest:

- **Meta-and-diagram** — left column ~36% (eyebrow + title + body + legend), right column ~64% (the visual). Default for Stack, Phase Space, Loop, Quadrant when the visual needs explanation. Used three times in the water-cycle worked example.
- **Full-bleed** — the visual occupies the whole slide; meta floats over it as overlays. Default for Versus and Surface.
- **Centred singleton** — one element, centred, surrounded by negative space. Default for Manifesto, Cliffhanger, Field Note.

Pick the primitive when typesetting; don't reinvent the split.
