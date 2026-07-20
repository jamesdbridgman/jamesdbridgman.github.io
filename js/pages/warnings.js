import { FC1, FC2, getConsequenceFlowchart, resolveEdge, SCHEDULE_1AB } from '../data/warningsData.js';
import { el, modal, bodyParagraph } from '../ui.js';

function currentFlowchart(phase, offenceType) {
  if (phase === 'fc1') return FC1;
  if (phase === 'fc2') return FC2;
  return getConsequenceFlowchart(offenceType);
}

function thanksParagraph() {
  return el('p', { class: 'modal-body' }, [
    document.createTextNode('Thank you very much to '),
    el('a', {
      href: 'https://katesheppardchambers.co.nz/charlotte-brook/',
      target: '_blank', rel: 'noopener noreferrer',
      class: 'modal-link', text: 'Charlotte Brook',
    }),
    document.createTextNode(' for her work. The logic and questions in this tool have been used adapted from her guide with permission.'),
  ]);
}

export function renderWarnings(container) {
  container.innerHTML = '';

  let phase = 'fc1'; // 'fc1' | 'fc2' | 'fc3' | 'done'
  let currentNode = FC1.start;
  let offenceType = null;
  let stage = null;
  let trail = [];
  let finalResult = null;
  let history = [];

  const helpModal = modal({
    titleText: 'Additional consequences for certain repeated offending',
    bodyNodes: [
      thanksParagraph(),
      bodyParagraph('This tool guides you through the "three strikes" regime re-introduced by the Sentencing (Reinstating Three Strikes) Amendment Act 2024.'),
      bodyParagraph('Answer each question as it\u2019s asked. Tap any of your previous answers above to rewind to that point and change it, use "\u2190 Back" to undo just the last answer, or the reset button to start over from the beginning.'),
      bodyParagraph("This tool operates on the basis the offending was committed after the defendant's most recent warning, if any. Refer to the Act if that is not the case."),
    ],
  });

  const headerTitleEl = el('span', { class: 'header-title' });
  const stageBadgeWrap = el('span');
  const trailWrap = el('div');
  const backRowWrap = el('div');
  const mainWrap = el('div');
  const thanksNote = el('p', { class: 'footer-text', text: 'Special thanks to Charlotte Brook for her work.' });
  const footer = el('p', { class: 'footer-text', html: 'Questions, suggestions, bugs, or comments:<br>jamesdbridgman@gmail.com' });

  const headerRow = el('div', { class: 'header-row' }, [
    el('div', { class: 'header-left' }, [headerTitleEl, stageBadgeWrap]),
    el('div', { class: 'header-btns' }, [
      el('button', { class: 'help-btn', type: 'button', text: 'Help?', onclick: () => helpModal.show() }),
      el('button', { class: 'reset-btn', type: 'button', text: '\u21ba', title: 'Reset', onclick: () => { reset(); render(); } }),
    ]),
  ]);

  container.appendChild(helpModal.overlay);
  container.appendChild(headerRow);
  container.appendChild(trailWrap);
  container.appendChild(backRowWrap);
  container.appendChild(mainWrap);
  container.appendChild(thanksNote);
  container.appendChild(footer);

  function reset() {
    phase = 'fc1';
    currentNode = FC1.start;
    offenceType = null;
    stage = null;
    trail = [];
    finalResult = null;
    history = [];
  }

  function jumpTo(idx) {
    if (idx < 0 || idx >= history.length) return;
    const snap = history[idx];
    phase = snap.phase;
    currentNode = snap.currentNode;
    offenceType = snap.offenceType;
    stage = snap.stage;
    trail = snap.trail;
    finalResult = snap.finalResult;
    history = history.slice(0, idx);
    render();
  }

  function goBack() { jumpTo(history.length - 1); }

  function answer(ans) {
    const fc = currentFlowchart(phase, offenceType);
    const n = fc.nodes[currentNode];
    const edge = resolveEdge(ans ? n.yes : n.no, stage);

    history = [...history, { phase, currentNode, offenceType, stage, trail, finalResult }];
    trail = [...trail, { lead: n.lead, q: n.q, ref: n.ref, answer: ans }];

    if (edge.type === 'node') {
      currentNode = edge.target;
    } else if (edge.type === 'result') {
      finalResult = edge.result;
      phase = 'done';
    } else if (edge.type === 'route') {
      offenceType = edge.offenceType;
      phase = 'fc2';
      currentNode = FC2.start;
    } else if (edge.type === 'stage') {
      stage = edge.stage;
      const consFc = getConsequenceFlowchart(offenceType);
      if (edge.stage === 1) {
        finalResult = consFc.stage1Result;
        phase = 'done';
      } else {
        phase = 'fc3';
        currentNode = consFc.start;
      }
    }
    render();
  }

  function refPill(sectionRef) {
    if (!sectionRef) return el('span');
    return el('span', { class: 'ref-pill-text', text: sectionRef });
  }

  function render() {
    const fc = phase === 'done' ? null : currentFlowchart(phase, offenceType);
    const node = fc ? fc.nodes[currentNode] : null;
    const headerTitle = phase === 'done' ? 'Result' : fc.title;

    headerTitleEl.textContent = headerTitle;
    stageBadgeWrap.innerHTML = '';
    if (stage != null) {
      stageBadgeWrap.appendChild(el('span', { class: 'stage-badge', text: `Stage ${stage}` }));
    }

    // trail
    trailWrap.innerHTML = '';
    if (trail.length > 0) {
      trail.forEach((t, i) => {
        const chip = el('button', { class: `trail-chip ${t.answer ? 'yes' : 'no'}`, type: 'button' }, [
          el('span', { class: 'trail-chip-text', text: t.q }),
          el('span', { class: 'trail-chip-answer', style: `color:${t.answer ? '#0F6E56' : '#A32D2D'};`, text: t.answer ? 'Yes' : 'No' }),
        ]);
        chip.addEventListener('click', () => jumpTo(i));
        trailWrap.appendChild(chip);
      });
    }

    // back row (only while still answering)
    backRowWrap.innerHTML = '';
    if (history.length > 0 && phase !== 'done') {
      backRowWrap.appendChild(el('div', { class: 'back-row' }, [
        el('button', { class: 'back-btn', type: 'button', text: '\u2190 Back', onclick: goBack }),
      ]));
    }

    // main content
    mainWrap.innerHTML = '';

    if (phase !== 'done' && node) {
      const card = el('div', { class: 'q-card' });
      if (stage != null || node.ref) {
        card.appendChild(el('div', { class: 'card-top-row' }, [
          stage != null ? el('span', { class: 'stage-badge-sm', text: `Stage ${stage}` }) : el('span'),
          refPill(node.ref),
        ]));
      }
      if (node.lead) card.appendChild(el('p', { class: 'lead-text', text: node.lead }));
      card.appendChild(el('p', { class: 'question-text', text: node.q }));
      card.appendChild(el('div', { class: 'answer-row' }, [
        el('button', { class: 'answer-btn no-btn', type: 'button', text: 'No', onclick: () => answer(false) }),
        el('button', { class: 'answer-btn yes-btn', type: 'button', text: 'Yes', onclick: () => answer(true) }),
      ]));
      mainWrap.appendChild(card);
    }

    if (phase === 'fc1' && currentNode === FC1.start) {
      const sched = el('div', { class: 'schedule-section' }, [
        el('div', { class: 'schedule-heading', text: 'Schedule 1AB' }),
      ]);
      SCHEDULE_1AB.forEach((o) => {
        sched.appendChild(el('div', { class: 'schedule-row' }, [
          el('span', { class: 'schedule-ref', text: o.ref }),
          el('span', { class: 'schedule-label', text: o.label }),
        ]));
      });
      mainWrap.appendChild(sched);
    }

    if (phase === 'done' && finalResult) {
      if (history.length > 0) {
        mainWrap.appendChild(el('div', { class: 'back-row' }, [
          el('button', { class: 'back-btn', type: 'button', text: '\u2190 Back', onclick: goBack }),
        ]));
      }
      const box = el('div', { class: 'result-block' });
      if (stage) box.appendChild(el('div', { class: 'stage-label', text: `Stage-${stage} offence` }));
      finalResult.lines.forEach((l) => {
        const lineBlock = el('div', { class: 'result-line-block' });
        if (l.ref) lineBlock.appendChild(el('div', { class: 'ref-row' }, [refPill(l.ref)]));
        lineBlock.appendChild(el('p', { class: 'result-line', text: l.text }));
        box.appendChild(lineBlock);
      });
      mainWrap.appendChild(box);
    }
  }

  render();
}
