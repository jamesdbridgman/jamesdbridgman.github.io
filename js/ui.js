// Small DOM helpers shared by every page module.

export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k === 'text') node.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else if (v !== undefined && v !== null && v !== false) node.setAttribute(k, v === true ? '' : v);
  }
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c === null || c === undefined || c === false) return;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return node;
}

// Renders *italic* and ~note~ markup (used throughout guidelinesData.js) into
// a fragment of spans, matching guidelines.jsx's renderInlineParts().
export function renderInlineParts(text) {
  const frag = document.createDocumentFragment();
  const parts = String(text).split(/(\*[^*]+\*|~[^~]+~)/g).filter(Boolean);
  parts.forEach((part) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      frag.appendChild(el('span', { class: 'italic', text: part.slice(1, -1) }));
    } else if (part.startsWith('~') && part.endsWith('~')) {
      frag.appendChild(el('span', { class: 'inline-note', text: part.slice(1, -1) }));
    } else {
      frag.appendChild(document.createTextNode(part));
    }
  });
  return frag;
}

// Simple accordion. Returns the wrapper element.
export function accordion({ title, nested = false, buildBody }) {
  let open = false;
  const chevron = el('span', { class: 'acc-chevron', text: '▸' });
  const header = el('button', { class: `acc-header${nested ? ' nested' : ''}`, type: 'button' }, [
    el('span', { class: `acc-title${nested ? ' nested' : ''}`, text: title }),
    chevron,
  ]);
  const body = el('div', { class: 'acc-body', hidden: true });
  const wrap = el('div', { class: `acc-wrap${nested ? ' nested' : ''}` }, [header, body]);

  function toggle() {
    open = !open;
    if (open) {
      body.hidden = false;
      body.innerHTML = '';
      buildBody(body);
      const collapseRow = el('div', { class: 'acc-collapse-row' }, [
        el('button', { class: 'acc-collapse-btn', type: 'button', text: '▴ Collapse', onclick: () => { toggle(); wrap.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }),
      ]);
      body.appendChild(collapseRow);
      chevron.textContent = '▾';
    } else {
      body.hidden = true;
      chevron.textContent = '▸';
    }
  }
  header.addEventListener('click', toggle);
  return wrap;
}

// A modal: call show()/hide(). Content is provided as DOM nodes.
export function modal({ titleText, bodyNodes, large = false }) {
  const overlay = el('div', { class: 'modal-overlay', hidden: true });
  const box = el('div', { class: large ? 'modal-box' : 'modal-box' });
  if (titleText) box.appendChild(el('h3', { class: large ? 'modal-title-lg' : 'modal-title', text: titleText }));
  (Array.isArray(bodyNodes) ? bodyNodes : [bodyNodes]).forEach((n) => box.appendChild(n));
  const closeBtn = el('button', { class: 'modal-close', type: 'button', text: 'Close' });
  box.appendChild(closeBtn);
  overlay.appendChild(box);

  function hide() { overlay.hidden = true; }
  function show() { overlay.hidden = false; }
  closeBtn.addEventListener('click', hide);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) hide(); });

  return { overlay, show, hide };
}

export function bodyParagraph(text) {
  return el('p', { class: 'modal-body' }, [renderInlineParts(text)]);
}
