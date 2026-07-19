// ─── SENTENCING CALCULATOR ───────────────────────────────────────────────────

export const MIT_FACTORS = [
  { id: 'guilty',     label: 'Guilty plea',             max: 25 },
  { id: 'background', label: 'Background & upbringing',  max: 30 },
  { id: 'youth',      label: 'Youth',                    max: 30 },
  { id: 'personal',   label: 'Addiction',                max: 40 },
  { id: 'remorse',    label: 'Remorse',                  max: 20 },
  { id: 'goodchar',   label: 'Previous good character',  max: 20 },
  { id: 'miscdisc',   label: 'Misc. discount',           max: 50 },
  { id: 'assistance', label: 'Assistance to authorities', max: 50 },
];

export const AGG_FACTORS = [
  { id: 'priorcnv',   label: 'Previous convictions',     max: 30 },
  { id: 'miscuplift', label: 'Misc. uplift',             max: 30 },
];

// ─── BRIDGMAN THEOREM ─────────────────────────────────────────────────────────

// spMin and spMax are in months
export const BANDS = [
  { label: 'Band one',   minG: 0,    maxG: 5,        spMin: 0,   spMax: 48,  spMinLabel: 'Community', spMaxLabel: '4 years' },
  { label: 'Band two',   minG: 5,    maxG: 250,      spMin: 24,  spMax: 108, spMinLabel: '2 years',   spMaxLabel: '9 years' },
  { label: 'Band three', minG: 250,  maxG: 500,      spMin: 72,  spMax: 144, spMinLabel: '6 years',   spMaxLabel: '12 years' },
  { label: 'Band four',  minG: 500,  maxG: 2000,     spMin: 96,  spMax: 192, spMinLabel: '8 years',   spMaxLabel: '16 years' },
  { label: 'Band five',  minG: 2000, maxG: Infinity,  spMin: 120, spMax: 360, spMinLabel: '10 years',  spMaxLabel: 'Life (30y proxy)' },
];

export const BAND_COLORS = ['#185FA5', '#0F6E56', '#854F0B', '#A32D2D', '#533AB7'];

// Reverse-engineered constants from original app data
export const QUANT_WEIGHT = 0.49;
export const ROLE_STEP    = 4.64;
export const REDUCTION    = 0.84;

export const ROLE_POINTS = [
  { v: 1,   main: 'Low Lesser',            sub: 'Lower end of lesser role' },
  { v: 1.5, main: 'Low–Mid Lesser',        sub: '' },
  { v: 2,   main: 'Mid Lesser',            sub: 'Middle of lesser role' },
  { v: 2.5, main: 'Mid–High Lesser',       sub: '' },
  { v: 3,   main: 'High Lesser',           sub: 'Upper end of lesser role' },
  { v: 3.5, main: 'Lesser / Significant',  sub: 'Border of lesser and significant' },
  { v: 4,   main: 'Low Significant',       sub: 'Lower end of significant role' },
  { v: 4.5, main: 'Low–Mid Significant',   sub: '' },
  { v: 5,   main: 'Mid Significant',       sub: 'Middle of significant role' },
  { v: 5.5, main: 'Mid–High Significant',  sub: '' },
  { v: 6,   main: 'High Significant',      sub: 'Upper end of significant role' },
  { v: 6.5, main: 'Significant / Leading', sub: 'Border of significant and leading' },
  { v: 7,   main: 'Low Leading',           sub: 'Lower end of leading role' },
  { v: 7.5, main: 'Low–Mid Leading',       sub: '' },
  { v: 8,   main: 'Mid Leading',           sub: 'Middle of leading role' },
  { v: 8.5, main: 'Mid–High Leading',      sub: '' },
  { v: 9,   main: 'High Leading',          sub: 'Upper end of leading role' },
];

// ─── LIBRARY CONTENT ─────────────────────────────────────────────────────────

export const GUIDELINES = [
  {
    title: 'Sentencing Act 2002 — general principles',
    body: 'The court must take into account the gravity of the offending, the desirability of consistency, the effect on the victim, the interests of the community, and the need to hold the offender accountable. The court must impose the least restrictive outcome appropriate in the circumstances.',
  },
  {
    title: 'Starting point methodology',
    body: 'The court first identifies a starting point based on the nature and seriousness of the offending. It then adjusts upward for aggravating factors and downward for mitigating factors personal to the offender. The final sentence reflects all relevant considerations.',
  },
  {
    title: 'Guilty plea discount',
    body: 'A guilty plea can attract a discount of up to 25%. The discount is largest when the plea is entered at the earliest opportunity and reduces as the matter progresses toward trial. A last-minute plea may attract little or no discount.',
  },
  {
    title: 'Remorse',
    body: 'Genuine remorse, demonstrated through actions such as reparation or a victim apology, may attract a mitigating discount. The court will consider whether remorse is genuine or self-serving.',
  },
  {
    title: 'Youth and background',
    body: 'The age of the offender and their personal background, including deprived upbringing, abuse, or mental health issues, may be relevant mitigating factors. These do not excuse offending but may reduce moral culpability.',
  },
  {
    title: 'Previous convictions',
    body: 'Prior convictions, particularly for similar offending, are an aggravating factor. They demonstrate a pattern of offending and may reduce the weight given to otherwise mitigating features such as good character.',
  },
  {
    title: 'Totality principle',
    body: 'Where an offender is sentenced for multiple offences, the court must ensure the cumulative sentence is not out of proportion to the overall offending. The totality principle requires the final sentence to reflect the overall criminality without being crushing.',
  },
];
