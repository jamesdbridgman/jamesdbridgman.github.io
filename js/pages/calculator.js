import { MIT_FACTORS, AGG_FACTORS } from '../data/data.js';
import { fmtLong, fmtShort, fmtDec, monthsToPct, pctToMonths } from '../data/utils.js';
import { el } from '../ui.js';
import { takePendingStartingPoint } from '../store.js';

const CAP_PCT = 40;
const ASSISTANCE_ID = 'assistance';

function initState() {
  const s = {};
  [...MIT_FACTORS, ...AGG_FACTORS].forEach((f) => { s[f.id] = { pct: 0, months: 0 }; });
  return s;
}

export function renderCalculator(container) {
  container.innerHTML = '';

  let spYears = '0';
  let spMonths = '0';
  let factors = initState();

  const pending = takePendingStartingPoint();
  if (pending) {
    spYears = String(pending.spYears ?? '0');
    spMonths = String(pending.spMonths ?? '0');
    factors = initState();
  }

  // ── toast ──────────────────────────────────────────────────────────────
  const toastEl = el('div', { class: 'toast' });
  let toastTimer = null;
  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1850);
  }

  function startMonths() {
    return (parseInt(spYears, 10) || 0) * 12 + (parseInt(spMonths, 10) || 0);
  }

  // ── DOM skeleton ───────────────────────────────────────────────────────
  const spYearsInput = el('input', { class: 'sp-input', type: 'text', inputmode: 'numeric', value: spYears });
  const spMonthsInput = el('input', { class: 'sp-input', type: 'text', inputmode: 'numeric', value: spMonths });
  const resetBtn = el('button', { class: 'reset-btn', type: 'button', text: '↺', title: 'Reset' });

  const startSection = el('div', { class: 'section' }, [
    el('div', { class: 'sec-title-row' }, [
      el('span', { class: 'sec-title', text: 'Starting point' }),
      resetBtn,
    ]),
    el('div', { class: 'row' }, [
      el('div', { class: 'sp-field' }, [el('label', { class: 'sp-label', text: 'Years' }), spYearsInput]),
      el('div', { class: 'sp-field' }, [el('label', { class: 'sp-label', text: 'Months' }), spMonthsInput]),
    ]),
  ]);

  const mitBody = el('div');
  const mitSection = el('div', { class: 'section' }, [
    el('div', { class: 'sec-title', text: 'Personal mitigating factors', style: 'display:block;margin-bottom:14px;' }),
    mitBody,
  ]);

  const aggBody = el('div');
  const aggSection = el('div', { class: 'section' }, [
    el('div', { class: 'sec-title', text: 'Personal aggravating factors', style: 'display:block;margin-bottom:14px;' }),
    aggBody,
  ]);

  const capResultSection = el('div', { hidden: true });
  const mainResultSection = el('div', { class: 'result-section' });
  const footer = el('p', { class: 'footer-text', html: 'Questions, suggestions, bugs, or comments:<br>jamesdbridgman@gmail.com' });

  container.appendChild(startSection);
  container.appendChild(mitSection);
  container.appendChild(aggSection);
  container.appendChild(capResultSection);
  container.appendChild(mainResultSection);
  container.appendChild(footer);
  document.body.appendChild(toastEl);

  const factorRows = {}; // id -> { sliderEl, pctInput, monthsInput }

  function buildFactorRow(f) {
    const slider = el('input', {
      class: 'slider', type: 'range', min: '0', max: String(f.max), step: '0.5', value: '0',
    });
    const pctInput = el('input', { class: 'mini-input', type: 'text', inputmode: 'decimal', placeholder: '0' });
    const monthsInput = el('input', { class: 'mini-input', type: 'text', inputmode: 'numeric', placeholder: '0' });

    slider.addEventListener('input', () => updateFactor(f.id, 'slider', slider.value));
    pctInput.addEventListener('input', () => updateFactor(f.id, 'pct', pctInput.value));
    monthsInput.addEventListener('input', () => updateFactor(f.id, 'months', monthsInput.value));

    factorRows[f.id] = { slider, pctInput, monthsInput, max: f.max };

    return el('div', { class: 'factor-row' }, [
      el('div', { class: 'factor-name', text: f.label }),
      slider,
      el('div', { class: 'bounds' }, [
        el('span', { class: 'bounds-text', text: '0%' }),
        el('span', { class: 'bounds-text', text: `${f.max}%` }),
      ]),
      el('div', { class: 'factor-inputs' }, [
        el('div', { class: 'input-group' }, [el('label', { class: 'input-label', text: 'Percentage' }), pctInput]),
        el('div', { class: 'input-group' }, [el('label', { class: 'input-label', text: 'Months' }), monthsInput]),
      ]),
    ]);
  }

  MIT_FACTORS.forEach((f) => mitBody.appendChild(buildFactorRow(f)));
  AGG_FACTORS.forEach((f) => aggBody.appendChild(buildFactorRow(f)));

  function syncRowUI(id) {
    const st = factors[id];
    const row = factorRows[id];
    row.slider.value = String(st.pct);
    const fillPct = row.max ? Math.min(100, (st.pct / row.max) * 100) : 0;
    row.slider.style.setProperty('--fill', `${fillPct}%`);
    row.pctInput.value = st.pct === 0 ? '' : String(st.pct % 1 === 0 ? st.pct : st.pct.toFixed(1));
    row.monthsInput.value = st.months === 0 ? '' : String(st.months);
  }

  function updateFactor(id, source, raw) {
    const val = parseFloat(raw) || 0;
    const s = { ...factors[id] };
    const sm = startMonths();
    if (source === 'pct' || source === 'slider') {
      s.pct = Math.max(0, val);
      s.months = pctToMonths(s.pct, sm);
    } else {
      s.months = Math.max(0, Math.round(val));
      s.pct = monthsToPct(s.months, sm);
    }
    factors[id] = s;
    syncRowUI(id);
    recompute();

    const finalMo = computeFinalForToast();
    const y = Math.floor(Math.round(finalMo) / 12);
    const mo = Math.round(finalMo) % 12;
    showToast(`${y} year${y === 1 ? '' : 's'}, ${mo} month${mo === 1 ? '' : 's'}`);
  }

  function computeFinalForToast() {
    const sm = startMonths();
    let mitMo = 0, aggMo = 0;
    MIT_FACTORS.forEach((f) => { mitMo += factors[f.id].months; });
    AGG_FACTORS.forEach((f) => { aggMo += factors[f.id].months; });
    const mitPct = sm > 0 ? (mitMo / sm) * 100 : 0;
    if (mitPct > CAP_PCT) {
      const cappedMitMo = sm * CAP_PCT / 100;
      return Math.max(sm - cappedMitMo + aggMo, 0);
    }
    return Math.max(sm - mitMo + aggMo, 0);
  }

  function handleSpChange(field, raw) {
    const prevYears = spYears, prevMonths = spMonths;
    if (field === 'years') spYears = raw; else spMonths = raw;
    const newStart = field === 'years'
      ? (parseInt(raw, 10) || 0) * 12 + (parseInt(prevMonths, 10) || 0)
      : (parseInt(prevYears, 10) || 0) * 12 + (parseInt(raw, 10) || 0);
    Object.keys(factors).forEach((id) => {
      const s = factors[id];
      if (s.pct > 0) {
        factors[id] = { pct: s.pct, months: pctToMonths(s.pct, newStart) };
        syncRowUI(id);
      }
    });
    recompute();
  }

  spYearsInput.addEventListener('focus', () => { if (spYearsInput.value === '0') spYearsInput.value = ''; });
  spYearsInput.addEventListener('blur', () => { if (spYearsInput.value.trim() === '') { spYearsInput.value = '0'; handleSpChange('years', '0'); } });
  spYearsInput.addEventListener('input', () => handleSpChange('years', spYearsInput.value));

  spMonthsInput.addEventListener('focus', () => { if (spMonthsInput.value === '0') spMonthsInput.value = ''; });
  spMonthsInput.addEventListener('blur', () => { if (spMonthsInput.value.trim() === '') { spMonthsInput.value = '0'; handleSpChange('months', '0'); } });
  spMonthsInput.addEventListener('input', () => handleSpChange('months', spMonthsInput.value));

  resetBtn.addEventListener('click', () => {
    spYears = '0'; spMonths = '0';
    spYearsInput.value = '0'; spMonthsInput.value = '0';
    factors = initState();
    Object.keys(factors).forEach(syncRowUI);
    recompute();
  });

  function paroleRows(totalMo) {
    return [['One third', totalMo / 3], ['Half', totalMo / 2], ['Two thirds', totalMo * 2 / 3]].map(([lbl, val]) =>
      el('div', { class: 'parole-row' }, [
        el('span', { class: 'parole-label', text: lbl }),
        el('span', { class: 'parole-val', text: fmtLong(val) }),
      ])
    );
  }

  function recompute() {
    const sm = startMonths();
    let mitMo = 0, mitMoCapped = 0, assistanceMo = 0, aggMo = 0;
    const stepsClean = [{ label: 'Starting point', delta: 0, running: sm, type: 'neutral' }];
    let running = sm;

    MIT_FACTORS.forEach((f) => {
      const mo = factors[f.id].months;
      if (mo > 0) {
        running -= mo;
        mitMo += mo;
        if (f.id === ASSISTANCE_ID) assistanceMo += mo; else mitMoCapped += mo;
        stepsClean.push({ label: f.label, delta: -mo, running, type: 'neg' });
      }
    });
    AGG_FACTORS.forEach((f) => {
      const mo = factors[f.id].months;
      if (mo > 0) { running += mo; aggMo += mo; stepsClean.push({ label: f.label, delta: mo, running, type: 'pos' }); }
    });

    const uncappedFinal = Math.max(running, 0);
    const mitPct = sm > 0 ? (mitMoCapped / sm) * 100 : 0;
    const capTriggered = mitPct > CAP_PCT;
    const cappedMitMo = sm * CAP_PCT / 100;
    const cappedWithCapOnly = Math.max(sm - cappedMitMo + aggMo, 0);
    const cappedFinal = Math.max(sm - cappedMitMo - assistanceMo + aggMo, 0);

    const netMo = mitMo - aggMo;
    const netPct = Math.round(monthsToPct(netMo, sm) * 10) / 10;
    const netSign = netMo === 0 ? '' : (netMo > 0 ? '-' : '+');

    // ── capped result section ──
    capResultSection.innerHTML = '';
    capResultSection.hidden = !capTriggered;
    if (capTriggered) {
      const box = el('div', { class: 'result-section cap-section' });
      box.appendChild(el('div', { class: 'cap-badge' }, [el('span', { class: 'cap-badge-text', text: '⚠ 40% discount cap applied' })]));
      box.appendChild(el('div', { class: 'result-label', text: 'Sentence length (capped)' }));
      box.appendChild(el('div', { class: 'result-big', text: fmtLong(cappedFinal) }));
      box.appendChild(el('div', { class: 'result-sub', text: fmtDec(cappedFinal) }));

      if (assistanceMo > 0) {
        box.appendChild(el('div', { class: 'divider' }));
        box.appendChild(el('div', { class: 'sub-result-header', text: 'Sentence with 40% cap discount' }));
        box.appendChild(el('div', { class: 'sub-result-val', text: fmtLong(cappedWithCapOnly) }));
        box.appendChild(el('div', { class: 'divider' }));
        box.appendChild(el('div', { class: 'sub-result-header', text: 'Assistance to authorities discount' }));
        box.appendChild(el('div', { class: 'sub-result-val', text: `-${fmtShort(assistanceMo)}` }));
      }

      box.appendChild(el('div', { class: 'divider' }));
      const note = assistanceMo > 0
        ? `Total discounts of ${mitPct.toFixed(1)}% exceed the 40% cap. Discounts, excluding assistance to authorities, are limited to ${fmtShort(cappedMitMo)} (${CAP_PCT}% of starting point). Discount for assistance to authorities and uplifts are applied in full.`
        : `Total discounts of ${mitPct.toFixed(1)}% exceed the 40% cap. Discounts are limited to ${fmtShort(cappedMitMo)} (${CAP_PCT}% of starting point). Uplifts applied in full.`;
      box.appendChild(el('p', { class: 'cap-note', text: note }));
      box.appendChild(el('div', { class: 'divider' }));
      box.appendChild(el('div', { class: 'parole-header', text: 'Non-parole periods' }));
      paroleRows(cappedFinal).forEach((r) => box.appendChild(r));
      capResultSection.appendChild(box);
    }

    // ── main result section ──
    mainResultSection.innerHTML = '';
    mainResultSection.appendChild(
      capTriggered
        ? el('div', { class: 'but-for-label', text: '"But for" sentence (without cap)' })
        : el('div', { class: 'result-label', text: 'Sentence length' })
    );
    mainResultSection.appendChild(el('div', { class: 'result-big', text: fmtLong(uncappedFinal) }));
    mainResultSection.appendChild(el('div', { class: 'result-sub', text: fmtDec(uncappedFinal) }));
    mainResultSection.appendChild(el('div', { class: 'divider' }));

    mainResultSection.appendChild(el('div', { class: 'net-row' }, [
      el('div', { class: 'net-card' }, [
        el('div', { class: 'net-label', text: 'Net adjustment' }),
        el('div', { class: 'net-val', text: `${netSign}${Math.abs(netPct)}%` }),
      ]),
      el('div', { class: 'net-card' }, [
        el('div', { class: 'net-label', text: 'Net months' }),
        el('div', { class: 'net-val', text: `${netSign}${Math.abs(netMo)}mo` }),
      ]),
    ]));

    mainResultSection.appendChild(el('div', { class: 'divider' }));
    mainResultSection.appendChild(el('div', { class: 'parole-header', text: 'Non-parole periods' }));
    paroleRows(uncappedFinal).forEach((r) => mainResultSection.appendChild(r));

    mainResultSection.appendChild(el('div', { class: 'divider' }));
    mainResultSection.appendChild(el('div', { class: 'parole-header', text: 'Breakdown' }));
    stepsClean.forEach((s, i) => {
      const deltaText = i === 0
        ? fmtShort(s.running)
        : (s.delta > 0 ? '+' : s.delta < 0 ? '-' : '') + fmtShort(Math.abs(s.delta));
      mainResultSection.appendChild(el('div', { class: 'wf-row' }, [
        el('span', { class: 'wf-label', text: s.label }),
        el('div', { class: 'wf-right' }, [
          el('span', { class: `wf-delta${s.type === 'neutral' ? ' neutral' : ''}`, text: deltaText }),
          i > 0 ? el('span', { class: 'wf-run', text: `→ ${fmtShort(s.running)}` }) : null,
        ]),
      ]));
    });
  }

  Object.keys(factors).forEach(syncRowUI);
  recompute();

  return () => { toastEl.remove(); };
}
