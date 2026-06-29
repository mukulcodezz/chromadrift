/** Motion layer: nav scroll, scroll-reveal, stagger, counters, cursor ring. */

export function initMotion() {
  initNavScroll();
  initReveal();
  initStagger();
  initCounters();
  initCursorRing();
}

function initNavScroll() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 16);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initReveal() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = document.querySelectorAll(".reveal, .reveal-line");
  if (reduce) { els.forEach((el) => el.classList.add("is-visible")); return; }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => observer.observe(el));
}

function initStagger() {
  const groups = document.querySelectorAll(".stagger");
  if (!groups.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  groups.forEach((g) => observer.observe(g));
}

function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const run = (el) => {
    const end = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.countDecimals || "0", 10);
    const suffix = el.dataset.countSuffix || "";
    if (reduce) { el.textContent = end.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix; return; }
    const dur = 1400, t0 = performance.now();
    const tick = (now) => {
      const t = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = end * eased;
      el.textContent = val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );
  els.forEach((el) => observer.observe(el));
}

function initCursorRing() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  ring.setAttribute("aria-hidden", "true");
  document.body.appendChild(ring);
  document.body.classList.add("has-cursor");

  let raf = 0;
  document.addEventListener("mousemove", (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  }, { passive: true });

  const hot = "a, button, [data-tilt], .collection-card, .plate-mount__inner, [data-reroll]";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hot)) ring.classList.add("is-hot");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hot)) ring.classList.remove("is-hot");
  });
}
