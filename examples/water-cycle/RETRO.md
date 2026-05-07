# Retro · Water Cycle (real-world folio test)

*Test of folio v0.1 on a 5-slide pedagogical deck. Run end-to-end Brief → Plan → Typeset → Bind. This file captures what worked, what surfaced, and what should change in folio itself.*

## Verdict

Folio survived a domain shift. The skill was built thinking about strategy/portfolio decks; this test was a science explainer. The four-phase flow held, the palette discipline held, and the pattern map produced something coherent without invention.

## What worked

- **Brief gate caught the right things.** Forcing a single anchor message — *"the same water, ~4 billion years"* — meant every slide reinforced one idea. Without that gate I would have spread thin across "the cycle is amazing" + "freshwater is scarce" + "climate is changing" and the deck would have buckled.
- **Palette tokens with named roles forced better choices.** Shoji's `ai`, `shu`, `tatami` (each a real thing) made it impossible to think in primary/secondary terms. The "ai is a wall, never a line" rule held — `ai` became the ocean field, the cloud zone, the infiltration band — never a 1px stroke.
- **The "wrong colour, once" rule paid off concretely.** `shu` (vermilion) appeared exactly once, on the centre seal of slide 5. That one mark carries the whole closing — because it's the only saturated red in the deck.
- **Pattern-by-job not pattern-by-vibe.** Phase Space (slide 3) was the right call because cloud formation literally is a phase-space region (altitude × temperature). Not picked because it "looked good."

## Gaps surfaced

### 1. Pattern axis is flexible — docs imply rigidity

**What I hit**: Versus is documented as a diagonal left/right split. The water-cycle slide 4 needed an above-soil / below-soil contrast, which is honestly a *horizontal* split with the seam at ground level. I rotated the Versus pattern 90° and it worked — but the docs gave me no permission to do so.

**Recommendation**: In `reference/slide-patterns.md`, add a one-line "axis" note to Versus (and similar to Stack and Phase Space). Pattern is the *job*, not the geometry.

### 2. Loop has two valid registers — opening and closing

**What I hit**: `slide-patterns.md` describes Loop as "early-middle, after Manifesto, before Versus." But for the water cycle, the closer was Loop — because the *cycle* is the closing message. Documenting only the early-middle slot means future agents may avoid the right call.

**Recommendation**: Note that Loop also works as a closer when the cyclical thing is itself the deck's anchor. The Arc pattern is for *journey-shaped* topics; Loop is for *cycle-shaped* topics.

### 3. PLAN.md template is missing the anti-slop pre-flight

**What I hit**: I added a six-bullet pre-flight to `decks/water-cycle/PLAN.md` ("no cyan-violet", "no KPI pill cards", "≥40% negative space", "one accent per slide", etc.). It was useful when typesetting — I checked back against it twice. It belongs in the standard PLAN.md template in `flow.md`.

**Recommendation**: Add an "Anti-slop pre-flight" section to the PLAN.md template, populated from the brief's *off-limits* + the palette's *rules*.

### 4. Deck-spine idiom is unnamed

**What I hit**: Slides 2, 3, and 5 of the water cycle all converged on the same internal split — `meta column (~36%) | diagram column (~64%)`. The meta column held eyebrow + title + body + footnote/legend; the diagram column held the visual. This isn't a slide pattern — it's a *layout primitive* that pattern instances reuse. Folio doesn't name it.

**Recommendation**: Add a short `reference/layout-primitives.md` (or extend `slide-patterns.md`) describing two or three deck-internal splits: *meta-and-diagram*, *full-bleed*, *centred-singleton*. Patterns then declare which primitive they default to.

### 5. "6 or fewer = consider a memo" is too strict

**What I hit**: The brief was fixed at 5 slides. The deck holds. The "8–12 sweet spot, 6 or fewer = memo" guidance in `flow.md` would have argued against accepting the brief.

**Recommendation**: Soften to: 5–12 is the working range; below 5, push back unless the format is dictated. Pedagogical and lightning-talk decks live at 5–6.

### 6. Templates would have saved real time

**What I hit**: I copy-retinted the chrome (topnav, side-dots, slide-foot) by hand from the folio-on-folio example. ~30 min of mechanical work. With CSS-variable templates that take palette tokens, this would have been ~5 min.

**Recommendation**: This is the next planned phase (Phase B in the roadmap). The water-cycle slides themselves are the seed — abstract once palette dimensions are clearer.

## Things I changed in flight (worth knowing)

- **Slide 4 Versus**: rotated 90° (horizontal split at the soil seam). The diagonal seam shape was kept (clip-path slight slant) — just on the horizontal axis.
- **Slide 5 Loop**: rendered as a static SVG ring rather than a click-each-station interactive. Fitting for a closer; would not work for an early-middle Loop.
- **Animations**: added rising-vapour strokes (slide 2) and falling raindrops (slide 4). These are the only motion in the deck. Negative-space discipline holds because both are 1px-wide, opacity-faded.
- **No `effects.js` heavyweight functions used.** The constellation/cursor-glow code from folio-on-folio was wrong for Shoji (forbidden gradients/glows). Stripped to just `autoReveal()`.

## Score against folio's own anti-slop checklist

| Tell | Slip? |
|---|---|
| Stock cyan-violet AI gradient | Clean |
| Round-pill KPI cards | Clean |
| Generic "Empower / Unlock / Journey" copy | Clean |
| Repeated accent colour | Clean (`shu` once) |
| Borrowed component without source | Clean |
| Symmetric layout for asymmetric content | Clean (asymmetric meta/diagram) |
| Decorative motion | Borderline — vapour strokes & raindrops earn their place but watch for drift |

## What should land in folio next

In rough order:

1. ✏️ Patch `slide-patterns.md` (axis flexibility on Versus; Loop as closer).
2. ✏️ Patch `flow.md` (PLAN.md anti-slop pre-flight; soften 6-or-fewer rule).
3. 🧱 Build pattern templates under `templates/slides/` using the water-cycle slides as the seed.
4. 📦 Publish to `github.com/paolomoz/skills`.
