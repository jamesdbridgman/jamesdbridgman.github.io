// ─── FORMATTING ──────────────────────────────────────────────────────────────

export function fmtLong(totalMonths) {
  const m = Math.max(0, Math.round(totalMonths));
  const y = Math.floor(m / 12);
  const mo = m % 12;
  return `${y} year${y === 1 ? '' : 's'} & ${mo} month${mo === 1 ? '' : 's'}`;
}

export function fmtShort(totalMonths) {
  const abs = Math.max(0, Math.round(Math.abs(totalMonths)));
  const y = Math.floor(abs / 12);
  const mo = abs % 12;
  const sign = totalMonths < 0 ? '-' : '';
  return `${sign}${y > 0 ? y + 'y ' : ''}${mo}mo`;
}

export function fmtDec(totalMonths) {
  const m = Math.max(0, Math.round(totalMonths));
  return `${(m / 12).toFixed(1)} years or ${m} month${m === 1 ? '' : 's'}`;
}

// ─── CALCULATOR HELPERS ───────────────────────────────────────────────────────

export function monthsToPct(months, startMonths) {
  if (!startMonths) return 0;
  return Math.round((months / startMonths) * 1000) / 10;
}

export function pctToMonths(pct, startMonths) {
  return Math.round(startMonths * pct / 100);
}

// ─── THEOREM HELPERS ──────────────────────────────────────────────────────────

import { BANDS, ROLE_POINTS, QUANT_WEIGHT, ROLE_STEP, REDUCTION } from './data.js';

export function getBand(grams) {
  return BANDS.find(b => grams >= b.minG && grams < b.maxG) || BANDS[BANDS.length - 1];
}

export function snapRole(value) {
  let best = ROLE_POINTS[0];
  ROLE_POINTS.forEach(p => {
    if (Math.abs(p.v - value) < Math.abs(best.v - value)) best = p;
  });
  return best;
}

export function theoremCalculate(grams, roleValue) {
  const band = getBand(grams);
  const bandSpan = band.spMax - band.spMin;
  const quantRange = band.maxG === Infinity ? 2000 : band.maxG - band.minG;
  const quantPct = Math.min((grams - band.minG) / quantRange, 1);
  const quantComponent = quantPct * bandSpan * QUANT_WEIGHT;
  const roleComponent = roleValue * ROLE_STEP;
  const preReduction = band.spMin + quantComponent + roleComponent;
  const result = preReduction * REDUCTION;
  return {
    band,
    quantPct,
    quantComponent,
    roleComponent,
    preReduction,
    result,
    resultRounded: Math.round(result),
  };
}
