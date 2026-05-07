/* ══════════════════════════════════════════════════════════════════
   Water Cycle — minimal effects
   Reveal-on-mount only. No constellation, no cursor glow.
   Shoji rules: no gradients, no drop shadows, negative space breathes.
   ══════════════════════════════════════════════════════════════════ */

function autoReveal() {
  const observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add('revealed');
    }
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', autoReveal);
