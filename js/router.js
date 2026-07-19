const ROUTES = {
  calculator: { title: 'Bridgman Sentencing Calculator', navLabel: 'Sentencing Calculator' },
  theorem: { title: 'Bridgman Theorem', navLabel: 'Bridgman Theorem' },
  guidelines: { title: 'Sentencing Guidelines', navLabel: 'Sentencing Guidelines' },
  warnings: { title: 'Three Strikes Guide', navLabel: 'Three Strikes Guide' },
  about: { title: 'About', navLabel: 'About' },
};

const DEFAULT_ROUTE = 'calculator';

let onChangeCb = null;

export function initRouter(onChange) {
  onChangeCb = onChange;
  window.addEventListener('hashchange', dispatch);
  dispatch();
}

export function navigate(route) {
  window.location.hash = `#/${route}`;
}

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const route = raw.split('/')[0] || DEFAULT_ROUTE;
  return ROUTES[route] ? route : DEFAULT_ROUTE;
}

function dispatch() {
  const route = parseHash();
  if (onChangeCb) onChangeCb(route, ROUTES[route]);
}

export function getRoutes() {
  return ROUTES;
}
