import { el } from '../ui.js';

const SECTIONS = [
  {
    title: 'Who',
    open: true,
    body: [
      'Placeholder — introduce yourself here. Who built this site, and what\u2019s your background? (e.g. barrister, legal researcher, etc.)',
      'You can also mention who the site is intended for — practitioners, students, the general public.',
    ],
  },
  {
    title: 'What',
    open: false,
    body: [
      'Placeholder — describe what the site does. It brings together a sentencing calculator, the Bridgman Theorem for methamphetamine starting points, a library of sentencing guideline judgments, and a three strikes guide.',
      'Add detail here about how each tool works and what it is (and isn\u2019t) meant to be used for.',
    ],
  },
  {
    title: 'Why',
    open: false,
    body: [
      'Placeholder — explain the motivation behind the site. Why does this tool exist, and what problem does it solve?',
      'This is also a good place for a disclaimer: this site is for guidance only and is not a substitute for legal advice.',
    ],
  },
];

function aboutAccordion({ title, body, open }) {
  let isOpen = open;
  const chevron = el('span', { text: isOpen ? '\u25B2' : '\u25BC' });
  const bodyEl = el('div', { class: 'about-acc-body', hidden: !isOpen },
    body.map((p) => el('p', { text: p }))
  );
  const header = el('button', { class: 'about-acc-header', type: 'button' }, [
    el('span', { class: 'about-acc-title', text: title }),
    chevron,
  ]);
  header.addEventListener('click', () => {
    isOpen = !isOpen;
    bodyEl.hidden = !isOpen;
    chevron.textContent = isOpen ? '\u25B2' : '\u25BC';
  });
  return el('div', { class: 'about-acc' }, [header, bodyEl]);
}

export function renderAbout(container) {
  container.innerHTML = '';
  container.appendChild(el('p', { class: 'about-intro', text: 'A quick introduction to this site \u2014 who\u2019s behind it, what it does, and why it exists. (Placeholder content \u2014 replace with your own.)' }));
  SECTIONS.forEach((s) => container.appendChild(aboutAccordion(s)));
  container.appendChild(el('p', { class: 'footer-text', html: 'Questions, suggestions, bugs, or comments:<br>jamesdbridgman@gmail.com' }));
}
