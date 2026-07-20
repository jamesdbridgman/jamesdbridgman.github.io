import { BANDS, BAND_COLORS } from '../data/data.js';
import { fmtLong, fmtDec, snapRole, theoremCalculate, getBand } from '../data/utils.js';
import { el, modal, bodyParagraph } from '../ui.js';
import { setPendingStartingPoint } from '../store.js';
import { navigate } from '../router.js';

export function renderTheorem(container) {
  container.innerHTML = '';

  let gramsText = '';
  let roleVal = 5;
  let conspiracyOpen = false;
  let conspGramsText = '';
  let conspCompletion = 0.5;

  function completionLabel(v) {
    if (v <= 0.15) return 'Early stages';
    if (v >= 0.85) return 'Almost complete';
    return `${Math.round(v * 100)}% complete`;
  }

  // ── modals ─────────────────────────────────────────────────────────────
  const conspModal = modal({
    titleText: 'Conspiracy starting points',
    bodyNodes: [
      bodyParagraph("When sentencing an offender for a conspiracy charge the starting point is calculated differently to a completed offence."),
      bodyParagraph('The court considers both the quantity involved in the conspiracy and the degree of completion of the conspiracy. A conspiracy in its early stages will attract a lower starting point than one that was nearly complete.'),
      bodyParagraph("The Bridgman Theorem applies this by determining the standard *Zhang* starting point for the conspiracy quantity and then adjusting it for the degree of completion. This gives the conspiracy component of the starting point."),
      bodyParagraph('The total starting point is the standard offending component (if any) plus the conspiracy component.'),
    ],
  });

  const pageHelpModal = modal({
    large: true,
    bodyNodes: [
      el('h2', { class: 'modal-title-lg', text: 'Predictability and objectivity in methamphetamine sentencing.' }),
      bodyParagraph('Part submission-checking tool, part thought experiment.'),
      bodyParagraph('Starting points under *R v Zhang* balance role and quantity. The Bridgman Theorem does this mathematically, taking away the guesswork and keeping starting points in line with precedent.'),
      bodyParagraph("The Theorem works by taking the average of the positions of a defendant's quantity and role within a starting point band to determine the starting point."),
      bodyParagraph("For example, take a defendant with 50g of methamphetamine and a role on the border of Lesser and Significant. 50g places the offending in Band Two (5 – 250g) which has a starting point range of 2 to 9 years. 50g is approximately 20% of the way along the quantity spectrum of Band 2. The border of Lesser and Significant is 33% of the way along the spectrum of Lesser - Significant - Leading. The average of these two values is 26.5%. 26.5% of the of the starting point range (2 - 9 years) is 3 years and 10 months' imprisonment."),
      bodyParagraph("However, research shows that actual sentences imposed differ from a strict application of *Zhang*. This is taken into account and starting points are adjusted by the average deviation of 16.8%. Adjusted for this research, the above example would result in a more realistic starting point of 3 years and 4 months' imprisonment."),
    ],
  });

  // ── persistent nodes ───────────────────────────────────────────────────
  const gramsInput = el('input', { class: 'text-input', type: 'text', inputmode: 'decimal', placeholder: 'Grams (e.g. 283.5)' });
  const bandBadgeWrap = el('div');

  const conspToggleBtn = el('button', { class: 'consp-btn', type: 'button', text: '+ Conspiracy?' });

  const conspGramsInput = el('input', { class: 'text-input', type: 'text', inputmode: 'decimal', placeholder: 'Conspiracy quantity (grams)' });
  const conspBandBadgeWrap = el('div');
  const conspCompLabelEl = el('div', { class: 'consp-comp-label' });
  const conspSlider = el('input', { class: 'slider', type: 'range', min: '0.1', max: '0.9', step: '0.05', value: '0.5' });

  const conspSection = el('div', { class: 'consp-section', hidden: true }, [
    el('div', { class: 'consp-header' }, [
      el('span', { class: 'consp-title', text: 'Conspiracy' }),
      el('div', { class: 'btn-row' }, [
        el('button', { class: 'small-btn', type: 'button', text: 'Help?', onclick: () => conspModal.show() }),
        el('button', {
          class: 'small-btn danger', type: 'button', text: '✕ Close',
          onclick: () => {
            conspiracyOpen = false; conspGramsText = ''; conspCompletion = 0.5;
            conspGramsInput.value = ''; conspSlider.value = '0.5';
            render();
          },
        }),
      ]),
    ]),
    conspGramsInput,
    conspBandBadgeWrap,
    el('label', { class: 'field-label', text: 'Degree of completion', style: 'margin-top:12px;' }),
    conspCompLabelEl,
    conspSlider,
    el('div', { class: 'consp-bounds' }, [
      el('span', { class: 'bound-text', text: 'Early stages\n(10%)' }),
      el('span', { class: 'bound-text', text: 'Almost complete\n(90%)', style: 'text-align:right;' }),
    ]),
  ]);

  const quantitySection = el('div', { class: 'section' }, [
    el('div', { class: 'sec-title-row' }, [
      el('span', { class: 'sec-title', text: 'Quantity' }),
      el('button', { class: 'help-btn', type: 'button', text: 'Help?', onclick: () => pageHelpModal.show() }),
    ]),
    gramsInput,
    bandBadgeWrap,
    conspToggleBtn,
    conspSection,
  ]);

  // ── role section ───────────────────────────────────────────────────────
  const roleMainEl = el('div', { class: 'role-main' });
  const roleSubEl = el('div', { class: 'role-sub' });
  const roleSlider = el('input', { class: 'slider role-slider', type: 'range', min: '1', max: '9', step: '0.5', value: '2' });

  const roleSection = el('div', { class: 'section' }, [
    el('span', { class: 'sec-title', text: 'Role', style: 'display:block;margin-bottom:12px;' }),
    roleMainEl,
    roleSubEl,
    roleSlider,
    el('div', { class: 'role-bounds' }, [
      el('span', { class: 'bound-text', text: 'Low\nLesser' }),
      el('span', { class: 'bound-text', text: 'Lesser /\nSignificant', style: 'text-align:center;' }),
      el('span', { class: 'bound-text', text: 'Significant /\nLeading', style: 'text-align:center;' }),
      el('span', { class: 'bound-text', text: 'High\nLeading', style: 'text-align:right;' }),
    ]),
  ]);

  const resultWrap = el('div');
  const footer = el('p', { class: 'footer-text', html: 'Questions, suggestions, bugs, or comments:<br>jamesdbridgman@gmail.com' });

  container.appendChild(conspModal.overlay);
  container.appendChild(pageHelpModal.overlay);
  container.appendChild(quantitySection);
  container.appendChild(roleSection);
  container.appendChild(resultWrap);
  container.appendChild(footer);

  function bandBadgeNode(band, idx) {
    if (!band) return null;
    const color = BAND_COLORS[idx];
    return [el('div', { class: 'band-badge', style: `border-color:${color};` }, [
      el('span', { class: 'band-text', style: `color:${color};`, text: `${band.label} — ${band.spMinLabel} to ${band.spMaxLabel}` }),
    ])];
  }

  function render() {
    const grams = parseFloat(gramsText);
    const hasGrams = !isNaN(grams) && grams >= 0;
    const snapped = snapRole(roleVal);
    const band = hasGrams ? getBand(grams) : null;
    const bandIndex = band ? BANDS.indexOf(band) : -1;
    const result = hasGrams ? theoremCalculate(grams, snapped.v) : null;

    const conspGrams = parseFloat(conspGramsText);
    const hasConspGrams = conspiracyOpen && !isNaN(conspGrams) && conspGrams >= 0;
    const conspBand = hasConspGrams ? getBand(conspGrams) : null;
    const conspBandIndex = conspBand ? BANDS.indexOf(conspBand) : -1;
    const conspResult = hasConspGrams ? theoremCalculate(conspGrams, snapped.v) : null;
    const conspAdjustedMo = conspResult ? conspResult.resultRounded * conspCompletion : null;
    const totalMo = result && conspAdjustedMo !== null ? result.resultRounded + Math.round(conspAdjustedMo) : null;

    roleMainEl.textContent = snapped.main;
    roleSubEl.textContent = snapped.sub || `Value: ${snapped.v}`;

    bandBadgeWrap.innerHTML = '';
    if (band) {
      (bandBadgeNode(band, bandIndex) || []).forEach((n) => bandBadgeWrap.appendChild(n));
      if (bandIndex === 4) {
        bandBadgeWrap.appendChild(el('p', { class: 'band-note', text: 'Note: Band five uses 30 years as a proxy for life imprisonment. This is an approximation.' }));
      }
    }

    conspToggleBtn.hidden = conspiracyOpen;
    conspSection.hidden = !conspiracyOpen;

    if (conspiracyOpen) {
      conspBandBadgeWrap.innerHTML = '';
      if (conspBand) (bandBadgeNode(conspBand, conspBandIndex) || []).forEach((n) => conspBandBadgeWrap.appendChild(n));
      conspCompLabelEl.textContent = completionLabel(conspCompletion);
    }

    resultWrap.innerHTML = '';
    if (hasGrams && result) {
      const box = el('div', { class: 'result-section' });
      if (conspiracyOpen && hasConspGrams && conspResult) {
        box.appendChild(el('div', { class: 'result-label', text: 'Total starting point' }));
        box.appendChild(el('div', { class: 'result-big', text: fmtLong(totalMo) }));
        box.appendChild(el('div', { class: 'result-sub', text: fmtDec(totalMo) }));
        box.appendChild(el('div', { class: 'divider' }));
        box.appendChild(el('div', { class: 'sub-result-header', text: 'Standard quantity component' }));
        box.appendChild(el('div', { class: 'sub-result-val', text: fmtLong(result.resultRounded) }));
        box.appendChild(el('div', { class: 'divider' }));
        box.appendChild(el('div', { class: 'sub-result-header', text: `Conspiracy component (${Math.round(conspCompletion * 100)}% of conspiracy starting point)` }));
        box.appendChild(el('div', { class: 'sub-result-val', text: fmtLong(Math.round(conspAdjustedMo)) }));
      } else {
        box.appendChild(el('div', { class: 'result-label', text: 'Starting point' }));
        box.appendChild(el('div', { class: 'result-big', text: fmtLong(result.resultRounded) }));
        box.appendChild(el('div', { class: 'result-sub', text: fmtDec(result.resultRounded) }));
      }
      box.appendChild(el('button', {
        class: 'send-btn', type: 'button', text: '← Use as starting point in calculator',
        onclick: () => {
          const mo = totalMo !== null ? totalMo : result.resultRounded;
          setPendingStartingPoint(Math.floor(mo / 12), mo % 12);
          navigate('calculator');
        },
      }));
      resultWrap.appendChild(box);
    } else {
      resultWrap.appendChild(el('div', { class: 'empty-state' }, [
        el('p', { class: 'empty-text', text: 'Enter a quantity above to calculate the starting point.' }),
      ]));
    }
  }

  gramsInput.addEventListener('input', () => { gramsText = gramsInput.value; render(); });
  roleSlider.addEventListener('input', () => { roleVal = snapRole(parseFloat(roleSlider.value)).v; render(); });
  conspToggleBtn.addEventListener('click', () => { conspiracyOpen = true; render(); });
  conspGramsInput.addEventListener('input', () => { conspGramsText = conspGramsInput.value; render(); });
  conspSlider.addEventListener('input', () => { conspCompletion = parseFloat(conspSlider.value); render(); });

  render();
}
