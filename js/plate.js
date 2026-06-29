/**
 * CHROMADRIFT — generative colour plate renderer.
 * Ported from the imported Claude design (Albers-style nested fields, OKLCH palettes).
 * Each <canvas data-plate> paints a fixed composition; the palette can be re-rolled.
 *
 * Attributes:
 *   data-plate                  -> mark a canvas as a plate
 *   data-plate-interactive      -> click to re-roll the palette
 *   data-plate-chroma="0.10"    -> colour intensity (0.05–0.16)
 *   data-seed="<n>"             -> deterministic palette (stable across reloads)
 */

const REGISTRY = new Set();
let resizeBound = false;

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makePalette(rand, chroma) {
  const baseH = rand() * 360;
  const spread = 16 + rand() * 42;
  const dir = rand() < 0.5 ? 1 : -1;
  const Ls = [0.89, 0.74, 0.59, 0.45];
  if (rand() < 0.5) Ls.reverse();
  return Ls.map((L, i) => {
    const h = baseH + dir * spread * (i / 3);
    const c = chroma * (0.65 + 0.55 * rand());
    return `oklch(${L.toFixed(3)} ${c.toFixed(3)} ${(((h % 360) + 360) % 360).toFixed(1)})`;
  });
}

function paint(plate) {
  const c = plate.canvas;
  const rect = c.getBoundingClientRect();
  if (rect.width < 2) { requestAnimationFrame(() => paint(plate)); return; }
  const dpr = window.devicePixelRatio || 1;
  c.width = Math.round(rect.width * dpr);
  c.height = Math.round(rect.height * dpr);
  const ctx = c.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const W = rect.width, H = rect.height;
  const cols = plate.cols;
  ctx.fillStyle = cols[0];
  ctx.fillRect(0, 0, W, H);
  const u = Math.min(W, H) * 0.092;
  for (let k = 1; k < 4; k++) {
    const x = u * k, y = u * k;
    const w = Math.max(0, W - 2 * u * k);
    const h = Math.max(0, H - 3 * u * k);
    ctx.fillStyle = cols[k];
    ctx.fillRect(x, y, w, h);
  }
}

function reroll(plate) {
  plate.rand = mulberry32((Math.random() * 1e9) | 0);
  plate.cols = makePalette(plate.rand, plate.chroma);
  const c = plate.canvas;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { paint(plate); return; }
  c.style.transition = "opacity .22s ease";
  c.style.opacity = "0";
  setTimeout(() => { paint(plate); c.style.opacity = "1"; }, 165);
}

export function initPlates(root = document) {
  const canvases = root.querySelectorAll("canvas[data-plate]");
  canvases.forEach((canvas) => {
    if (canvas.dataset.plateBound) return;
    canvas.dataset.plateBound = "1";

    const chroma = parseFloat(canvas.dataset.plateChroma || "0.10");
    const seed = canvas.dataset.seed != null
      ? parseInt(canvas.dataset.seed, 10)
      : (Math.random() * 1e9) | 0;
    const rand = mulberry32(seed);

    const plate = { canvas, chroma, rand, cols: makePalette(rand, chroma) };
    REGISTRY.add(plate);
    requestAnimationFrame(() => paint(plate));

    if (canvas.hasAttribute("data-plate-interactive") ||
        canvas.closest("[data-plate-interactive]")) {
      const target = canvas.closest("[data-plate-interactive]") || canvas;
      target.style.cursor = "pointer";
      target.addEventListener("click", () => reroll(plate));
    }
  });

  if (!resizeBound) {
    resizeBound = true;
    let raf = 0;
    window.addEventListener("resize", () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => REGISTRY.forEach(paint));
    }, { passive: true });
  }
}

/** Re-roll the first interactive plate found (used by re-roll buttons). */
export function rerollPlate(canvas) {
  for (const plate of REGISTRY) {
    if (plate.canvas === canvas) { reroll(plate); return; }
  }
}
