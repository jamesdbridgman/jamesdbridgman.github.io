import { initRouter, getRoutes } from './router.js';
import { renderCalculator } from './pages/calculator.js';
import { renderTheorem } from './pages/theorem.js';
import { renderGuidelines } from './pages/guidelines.js';
import { renderWarnings } from './pages/warnings.js';
import { renderAbout } from './pages/about.js';

const PASSWORD = 'EllieMay';
const GATE_KEY = 'bridgman_gate_ok';

const PAGE_RENDERERS = {
  calculator: renderCalculator,
  theorem: renderTheorem,
  guidelines: renderGuidelines,
  warnings: renderWarnings,
  about: renderAbout,
};

// ── Gate ─────────────────────────────────────────────────────────────────
const gateEl = document.getElementById('gate');
const appEl = document.getElementById('app');
const gateForm = document.getElementById('gate-form');
const gateInput = document.getElementById('gate-input');
const gateError = document.getElementById('gate-error');

function unlock() {
  sessionStorage.setItem(GATE_KEY, '1');
  gateEl.hidden = true;
  appEl.hidden = false;
  startApp();
}

gateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (gateInput.value === PASSWORD) {
    unlock();
  } else {
    gateError.hidden = false;
    gateInput.value = '';
    gateInput.focus();
  }
});

if (sessionStorage.getItem(GATE_KEY) === '1') {
  gateEl.hidden = true;
  appEl.hidden = false;
  startApp();
} else {
  gateInput.focus();
}

// ── App shell ────────────────────────────────────────────────────────────
let started = false;

function startApp() {
  if (started) return;
  started = true;

  const navToggle = document.getElementById('nav-toggle');
  const bannerNav = document.getElementById('banner-nav');
  navToggle.addEventListener('click', () => {
    const isOpen = bannerNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  const contentEl = document.getElementById('content');
  const pageTitleEl = document.getElementById('page-title');
  let currentCleanup = null;

  initRouter((route, meta) => {
    bannerNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');

    document.querySelectorAll('.banner-nav a').forEach((a) => {
      a.classList.toggle('active', a.dataset.route === route);
    });

    pageTitleEl.textContent = meta.title;
    document.title = `${meta.title} \u2014 The Bridgman Sentencing Website`;

    if (typeof currentCleanup === 'function') currentCleanup();
    currentCleanup = PAGE_RENDERERS[route](contentEl) || null;

    window.scrollTo({ top: 0, behavior: 'instant' in window.scrollTo ? 'instant' : 'auto' });
  });
}
