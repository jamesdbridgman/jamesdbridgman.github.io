import { initRouter, getRoutes } from './router.js';
import { renderCalculator } from './pages/calculator.js';
import { renderTheorem } from './pages/theorem.js';
import { renderGuidelines } from './pages/guidelines.js';
import { renderWarnings } from './pages/warnings.js';
import { renderAbout } from './pages/about.js';

const PASSWORD = 'EllieMay';

const PAGE_RENDERERS = {
  calculator: renderCalculator,
  theorem: renderTheorem,
  guidelines: renderGuidelines,
  warnings: renderWarnings,
  about: renderAbout,
};

// ── iPhone block ─────────────────────────────────────────────────────────
// The Bridgman app is on the App Store, so iPhone visitors are pointed
// there instead of using the website. iPad is deliberately excluded (both
// the classic "iPad" UA and the newer iPadOS-reports-as-Mac UA), and
// Android is left alone since there's currently no live Play Store listing
// to send those visitors to.
function isIPhone() {
  const ua = navigator.userAgent;
  if (/iPad/i.test(ua)) return false;
  const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  if (isIPadOS) return false;
  return /iPhone|iPod/i.test(ua);
}

if (isIPhone()) {
  document.getElementById('gate').hidden = true;
  document.getElementById('mobile-block').hidden = false;
} else {
  initGateAndApp();
}

function initGateAndApp() {

// ── Gate ─────────────────────────────────────────────────────────────────
const gateEl = document.getElementById('gate');
const appEl = document.getElementById('app');
const gateForm = document.getElementById('gate-form');
const gateInput = document.getElementById('gate-input');
const gateError = document.getElementById('gate-error');

function unlock() {
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

gateInput.focus();

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

}
