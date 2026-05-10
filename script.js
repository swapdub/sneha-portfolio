/* ============================================================
   Sneha Mishra Portfolio – script.js (v2)
   ============================================================ */

// ── Scroll progress bar ──────────────────────────────────────────────────────
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
  const updateProgress = () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    progressBar.style.width = pct + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
}

// ── Navbar: glass on scroll ──────────────────────────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 18);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Mobile menu toggle ───────────────────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}

// ── Scroll-spy: active nav link ──────────────────────────────────────────────
const spySections = document.querySelectorAll('section[id]');
const spyLinks    = document.querySelectorAll('.nav-links a[href*="#"]');
if (spySections.length && spyLinks.length) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        spyLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href').endsWith('#' + e.target.id));
        });
      }
    });
  }, { rootMargin: '-38% 0px -56% 0px' });
  spySections.forEach(s => spy.observe(s));
}

// ── Reveal on scroll (IntersectionObserver) ──────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Counter animation ────────────────────────────────────────────────────────
function animateCount(el) {
  const target   = parseFloat(el.dataset.target);
  const suffix   = el.dataset.suffix || '';
  const duration = 1800;
  const t0       = performance.now();
  const step = now => {
    const p = Math.min((now - t0) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);          // ease-out cubic
    el.textContent = Math.round(e * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCount(e.target); countObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-counter]').forEach(el => countObs.observe(el));

// ── Typewriter effect ────────────────────────────────────────────────────────
const typeEl = document.querySelector('.typewriter-text');
if (typeEl) {
  const roles = ['Climate Researcher', 'GIS Analyst', 'Policy Researcher', 'Sustainability Advocate'];
  let ri = 0, ci = 0, del = false;
  function type() {
    const cur = roles[ri];
    if (del) {
      typeEl.textContent = cur.slice(0, --ci);
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; setTimeout(type, 380); return; }
      setTimeout(type, 32);
    } else {
      typeEl.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) { del = true; setTimeout(type, 2200); return; }
      setTimeout(type, 62);
    }
  }
  setTimeout(type, 900);
}

// ── Skill ring animation ─────────────────────────────────────────────────────
const C = 314.159; // 2π × 50 (ring radius = 50)
const ringObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.ring-fill[data-value]').forEach(fill => {
        const offset = C * (1 - parseFloat(fill.dataset.value) / 100);
        requestAnimationFrame(() => { fill.style.strokeDashoffset = offset; });
      });
      ringObs.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });
document.querySelectorAll('.skills-grid').forEach(g => ringObs.observe(g));

// ── Lucide icons ─────────────────────────────────────────────────────────────
if (typeof lucide !== 'undefined') lucide.createIcons();
