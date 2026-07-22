import { el } from '../ui.js';

const SECTIONS = [
  {
    title: 'Who',
    open: false,
    body: [
      'I\u2019m James. I\u2019m a Crown Prosecutor who needs better hobbies.',
      'The App and Website are designed for New Zealand criminal law practitioners: Crown prosecutors, defence lawyers, Police prosecutors, and any one else in between.',
      [
        'The Three Strikes Guide feature is adapted with permission from the incredible work of ',
        { text: 'Charlotte Brook', url: 'https://katesheppardchambers.co.nz/charlotte-brook/' },
        '. Thank you very much!',
      ],
    ],
  },
  {
    title: 'What',
    open: false,
    body: [
      'The App and Website have four features.',
      'Have you ever been in court, struggling to takes notes while also checking the judge\u2019s maths?',
      'The Sentencing Calculator is a tool to assist at stage two of the sentencing process. Users input the starting point at the top of the page in years as a decimal (e.g. 6.5), years and months (e.g. 6 years and 6 months), or months (e.g. 78 months). The starting point is then adjusted for personal aggravating and mitigating factors. These factors can be measured and input as percentage (either by using the slider or typing in the box) or as a number of months. Inputting with any one of these methods will adjust the others to match. The end sentence is then calculated with a breakdown of how that result is achieved.',
      'Have you ever thought that sentencing for certain offences could be reduced to a formula?',
      'The Bridgman Theorem is a tool to predict methamphetamine starting points based on quantity and role input as a number on a 9-point scale. The Theorem is, in part, a thought experiment to demonstrate how sentencing can be made consistent and predictable with a formula.',
      'Was it paragraph [56] or [59] of Mako that you were thinking of?',
      'The Sentencing Guidelines page provides key paragraphs from the most commonly-used sentencing guideline judgments and helpful authorities. This is intended to be a quick-reference guide rather than a research tool. Links are provided to the cases in full (where available).',
      'What strike is the defendant on?',
      'The Three Strikes Guide navigates the wonderfully-drafted reinstate three strikes provisions of the Sentencing Act 2002. A series of Yes/No questions guides users through the provisions to determine whether the offence is Stage-1, 2, or 3, and what the consequences are at sentencing. Please note, if sentencings for strike offences take place out of order from which they were committed the Act should be consulted.',
    ],
  },
  {
    title: 'Why',
    open: false,
    body: [
      'I made the App and the Website to help my colleagues in the criminal justice sector, to make our lives slightly easier.',
      'Secondly, mathematical mistakes in sentencing can result in real impacts on defendants. Small errors can mean months of a defendant\u2019s life. I like to think the App and Website may help ensure this does not happen.',
      'Why charge for the App? When I released the App in 2023 the overwhelming majority of feedback was that I should charge for it, and charge significantly more than I suggested. I have taken that feedback on board with the release of version 2.0.',
      'However, all proceeds from App purchases for the first 12 months will be matched $ for $ and donated to methamphetamine addiction therapy. Thereafter, all proceeds will continue to be donated. I am fortunate enough that the revenue from expected downloads would not change my life. But, as any criminal practitioner knows, methamphetamine has devastated New Zealand. If the money generated from this App can help one person in their recovery then the work has been worth it.',
    ],
  },
  {
    title: 'Privacy Policy',
    open: false,
    body: [
      'This Bridgman Sentencing Website (Website) and the Bridgman Sentencing Calculator (App) do not collect or store any data.',
      'The Website and App do not share any data with any third party.',
      'The data inputs in this Website and the App (starting point, quantity, role, and three strikes guide responses) are not kept or stored when the Website or App is closed.',
      'The Website and App do not request, collect, or store any personal information whatsoever.',
      'For completeness, the App is entirely offline. Even if data were collected and stored (which it is not), that data could not be shared because the App does not connect to the internet.',
      [
        'Any questions, suggestions, bugs, or comments should be directed to ',
        { text: 'jamesdbridgman@gmail.com', url: 'mailto:jamesdbridgman@gmail.com' },
      ],
    ],
  },
];

// Builds a single <p>. `item` is either a plain string, or an array of
// parts (strings and { text, url } link descriptors) for paragraphs that
// need an inline hyperlink.
function buildParagraph(item) {
  if (typeof item === 'string') return el('p', { text: item });
  const children = item.map((part) => (
    typeof part === 'string'
      ? document.createTextNode(part)
      : el('a', { href: part.url, target: '_blank', rel: 'noopener noreferrer', class: 'about-link', text: part.text })
  ));
  return el('p', {}, children);
}

function aboutAccordion({ title, body, open }) {
  let isOpen = open;
  const chevron = el('span', { text: isOpen ? '\u25B2' : '\u25BC' });
  const bodyEl = el('div', { class: 'about-acc-body', hidden: !isOpen },
    body.map(buildParagraph)
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
  container.appendChild(el('p', { class: 'about-intro', text: 'What are the Bridgman Sentencing Calculator (App) and the Bridgman Sentencing Website (Website)?' }));
  SECTIONS.forEach((s) => container.appendChild(aboutAccordion(s)));
  container.appendChild(el('p', { class: 'footer-text', html: 'Questions, suggestions, bugs, or comments:<br>jamesdbridgman@gmail.com' }));
}
