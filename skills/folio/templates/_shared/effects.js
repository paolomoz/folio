/* ══════════════════════════════════════════════════════════════════
   folio · shared effects
   Minimal by default. autoReveal fires on DOMContentLoaded.
   Optional helpers (constellation, cursor glow) opt in by calling
   the function from a per-deck script. Heavy effects belong in the
   deck, not the chrome.
   ══════════════════════════════════════════════════════════════════ */

/* ── Reveal on intersect (always on) ─────────────────────────── */
function autoReveal() {
  const observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add('revealed');
    }
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', autoReveal);

/* ── Optional · constellation backdrop ───────────────────────────
   Call from your deck if the palette wants a wired-network feel.
   Forbidden under quiet palettes (Shoji, Telex). Pass the canvas
   element id and the two node colours as hex strings.
   Usage:
     <canvas id="bg" class="bg-canvas"></canvas>
     <script>startConstellation('bg', { colorA:'#5fd4ff', colorB:'#c084fc' })</script>
*/
function startConstellation(canvasId, opts = {}) {
  const c = document.getElementById(canvasId);
  if (!c) return;
  const ctx = c.getContext('2d');
  const cfg = Object.assign({
    density: 1, linkDist: 160, drift: 0.15,
    colorA: '#5fd4ff', colorB: '#c084fc'
  }, opts);

  let nodes = [], W, H;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    W = c.width = c.clientWidth * dpr;
    H = c.height = c.clientHeight * dpr;
    const count = Math.min(140, Math.floor((W * H) / 28000)) * cfg.density;
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * cfg.drift * dpr,
      vy: (Math.random() - 0.5) * cfg.drift * dpr,
      r: (Math.random() * 1.4 + 0.6) * dpr,
      c: Math.random() < 0.55 ? cfg.colorA : cfg.colorB
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    const linkDistPx = cfg.linkDist * dpr;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < linkDistPx) {
          const op = (1 - d / linkDistPx) * 0.32;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, a.c); grad.addColorStop(1, b.c);
          ctx.strokeStyle = grad; ctx.globalAlpha = op;
          ctx.lineWidth = 1 * dpr;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < -10) n.x = W + 10; if (n.x > W + 10) n.x = -10;
      if (n.y < -10) n.y = H + 10; if (n.y > H + 10) n.y = -10;
      ctx.globalAlpha = 0.85; ctx.fillStyle = n.c;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  resize();
  window.addEventListener('resize', resize);
  frame();
}

/* Expose on window so per-deck scripts can call it. */
window.folio = window.folio || {};
window.folio.startConstellation = startConstellation;
