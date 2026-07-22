import { GUIDELINES, AUTHORITIES } from '../data/guidelinesData.js';
import { el, accordion, renderInlineParts, modal, bodyParagraph } from '../ui.js';

function caseHeaderNode(caseInfo) {
  if (!caseInfo) return null;
  return el('div', { class: 'case-header-block' }, [
    el('p', { class: 'paragraph' }, [
      el('span', { class: 'italic', text: caseInfo.name }),
      document.createTextNode(` ${caseInfo.citation}`),
    ]),
    el('a', { class: 'case-link', href: caseInfo.url, target: '_blank', rel: 'noopener noreferrer', text: 'View judgment →' }),
  ]);
}

function paragraphNode(p) {
  const isQuote = typeof p === 'object' && p.quote;
  const isNote = typeof p === 'object' && p.note;
  const text = typeof p === 'object' ? p.text : p;
  const classes = ['paragraph'];
  if (isQuote) classes.push('quote');
  if (isNote) classes.push('note');
  return el('p', { class: classes.join(' ') }, [renderInlineParts(text)]);
}

function listNode(items) {
  return el('ul', { class: 'case-list' }, items.map((item) => (
    el('li', { class: 'case-list-item' }, [renderInlineParts(item)])
  )));
}

function tableNode(table) {
  const thead = el('tr', {}, table.columns.map((c) => el('th', { text: c })));
  const rows = table.rows.map((row) => el('tr', {}, row.map((cell) => {
    if (Array.isArray(cell)) {
      return el('td', {}, [el('div', {}, cell.map((line) => el('div', { text: line })))]);
    }
    return el('td', { text: cell });
  })));
  return el('table', { class: 'guideline-table' }, [thead, ...rows]);
}

function sectionsBlock(sections) {
  const frag = document.createDocumentFragment();
  sections.forEach((section) => {
    const block = el('div', { class: 'section-block' });
    if (section.case) block.appendChild(caseHeaderNode(section.case));
    if (section.heading) block.appendChild(el('h4', { class: 'sub-heading' }, [renderInlineParts(section.heading)]));
    (section.paragraphs || []).forEach((p) => {
      const node = (typeof p === 'object' && p.list) ? listNode(p.list) : paragraphNode(p);
      block.appendChild(node);
    });
    if (section.table) block.appendChild(tableNode(section.table));
    frag.appendChild(block);
  });
  return frag;
}

function entryAccordion(entry) {
  return accordion({
    title: entry.title,
    buildBody: (body) => {
      if (entry.case) body.appendChild(caseHeaderNode(entry.case));
      if (entry.sections && entry.sections.length) body.appendChild(sectionsBlock(entry.sections));
      (entry.sub || []).forEach((sub) => {
        body.appendChild(accordion({
          title: sub.title,
          nested: true,
          buildBody: (subBody) => {
            if (sub.case) subBody.appendChild(caseHeaderNode(sub.case));
            subBody.appendChild(sectionsBlock(sub.sections));
          },
        }));
      });
    },
  });
}

export function renderGuidelines(container) {
  container.innerHTML = '';

  const helpModal = modal({
    titleText: 'About this page',
    bodyNodes: [bodyParagraph('This page provides a selection of key paragraphs from common sentencing guidelines and authorities. It is intended to be a quick reference to well-known sentencing law. Links are provided to the cases in full.')],
  });

  const headingRow = el('div', { class: 'group-heading-row' }, [
    el('h2', { class: 'group-heading', text: 'Guideline Judgments', style: 'margin:0;' }),
    el('button', { class: 'help-btn', type: 'button', text: 'Help?', onclick: () => helpModal.show() }),
  ]);

  container.appendChild(helpModal.overlay);
  container.appendChild(headingRow);
  GUIDELINES.forEach((entry) => container.appendChild(entryAccordion(entry)));

  container.appendChild(el('h2', { class: 'group-heading', text: 'Authorities' }));
  AUTHORITIES.forEach((entry) => container.appendChild(entryAccordion(entry)));

  container.appendChild(el('p', { class: 'footer-note', html: 'Questions, suggestions, bugs, or comments:<br>jamesdbridgman@gmail.com' }));
}
