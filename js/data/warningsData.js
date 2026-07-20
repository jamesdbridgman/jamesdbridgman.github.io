// constants/warningsData.js
//
// Data model for the "Warnings" (three strikes) flowchart tool.
// Transcribed from Warnings_Flowchart.pdf (Flowcharts 1–5).
//
// ─── HOW TO ADD LEGISLATIVE REFERENCES ─────────────────────────────────────
// Every question node has a `ref` field, now filled with the Sentencing
// Act 2002 / Schedule 1AA reference that requires that question to be
// asked (e.g. ref: 's 86KA(1)(a)', or 'Sch 1AA, Pt 6, cl 19(1)' for the
// transitional/commencement-date questions). The component doesn't add
// anything else in front of it. Result "lines" also have a `ref` field
// (left blank by default) if you want a reference on a specific
// consequence rather than the question that led to it.
//
// ─── STRUCTURE ──────────────────────────────────────────────────────────────
// Each flowchart is a small graph of nodes. A node has:
//   q     - the question text shown to the user
//   lead  - (optional) short instruction shown above the question, e.g.
//           "Review the defendant's criminal history."
//   ref   - legislative reference for this question
//   yes   - the edge taken if the user answers "Yes"
//   no    - the edge taken if the user answers "No"
//
// An edge is one of:
//   { type: 'node', target: 'nodeId' }            -> go to another question
//   { type: 'result', result: RESULT }             -> terminal outcome
//   { type: 'route', offenceType: 'murder' | 'manslaughter' | 'other' }
//                                                   -> (Flowchart 1 only) moves
//                                                      into Flowchart 2, tagged
//                                                      with which consequence
//                                                      flowchart (3/4/5) to use
//                                                      afterwards
//   { type: 'stage', stage: 1 | 2 | 3 }            -> (Flowchart 2 only) the
//                                                      stage has been determined
//
// Some edges depend on the stage already determined by Flowchart 2 (e.g. in
// Flowcharts 3–5, a "Yes" answer leads somewhere different for a Stage-2
// offence than a Stage-3 offence, and one node in Flowchart 5 depends on
// stage for BOTH its Yes and No answers). For these, instead of a single
// edge, use an object keyed by stage: { 2: edge, 3: edge }. resolveEdge()
// below picks the right one automatically.
//
// A RESULT is: { lines: [{ text, ref }, ...] } — most terminals are a single
// line, but several (e.g. "must impose MPI... must also give a warning...")
// are naturally a few separate legal consequences, each of which may want
// its own reference, so each is its own line.

export function resolveEdge(edge, stage) {
  if (edge && typeof edge === 'object' && !edge.type) {
    // stage-keyed variant, e.g. { 2: {...}, 3: {...} }
    return edge[stage];
  }
  return edge;
}

const line = (text, ref = '') => ({ text, ref });
const result = (...lines) => ({ lines });
const node = (target) => ({ type: 'node', target });
const term = (res) => ({ type: 'result', result: res });
const stageEdge = (stage) => ({ type: 'stage', stage });
const route = (offenceType) => ({ type: 'route', offenceType });

// ─── FLOWCHART 1: Does the regime apply? ───────────────────────────────────

const NOT_APPLY = term(result(line('The three strikes regime does not apply.')));

export const FC1 = {
  title: 'Does the regime apply?',
  intro: 'Apply this flowchart to every offence for which the defendant is to be sentenced.',
  start: 'schedule',
  nodes: {
    schedule: {
      q: 'Is the offence listed in Schedule 1AB?',
      ref: 's 86J',
      no: NOT_APPLY,
      yes: node('date'),
    },
    date: {
      q: 'Was the offence committed on or after 17 June 2025?',
      ref: 'sch 1AA, pt 6, cl 19(1)',
      no: NOT_APPLY,
      yes: node('age'),
    },
    age: {
      q: 'Was the defendant at least 18 years old at the time of the offence?',
      ref: 's 86J',
      no: NOT_APPLY,
      yes: node('murder'),
    },
    murder: {
      q: 'Is the offence murder?',
      ref: 'ss 86O(1), 86P(1), 86R(1), & 86S(1)(a)',
      yes: route('murder'),
      no: node('manslaughter'),
    },
    manslaughter: {
      q: 'Is the offence manslaughter?',
      ref: 's 86R(2)(a), (b), (c) & (d)',
      yes: route('manslaughter'),
      no: route('other'),
    },
  },
};

// ─── FLOWCHART 2: Is it a Stage-1, 2 or 3 offence? ─────────────────────────

export const FC2 = {
  title: 'Is it a Stage-1, 2 or 3 offence?',
  start: 'firstWarning',
  nodes: {
    firstWarning: {
      lead: "Review the defendant's criminal history.",
      q: 'Are there any records of first warning?',
      ref: 's 86J',
      no: stageEdge(1),
      yes: node('firstAfter2025'),
    },
    firstAfter2025: {
      q: 'Were any of them given on or after 17 June 2025?',
      ref: 'sch 1AA, pt 6, cls 18 & 21(1)',
      no: node('firstOver12mo'),
      yes: node('finalOrSubsequent1'),
    },
    firstOver12mo: {
      q: "Were any of them imposed on a sentence of more than 12 months' imprisonment?",
      ref: 's 86J & sch 1AA, pt 6, cl 21(2)',
      no: node('recordsFinalSub'),
      yes: node('finalOrSubsequent1'),
    },
    recordsFinalSub: {
      q: 'Are there any records of final or subsequent warning?',
      ref: 's 86J',
      no: stageEdge(1),
      yes: node('recordsOver12mo'),
    },
    recordsOver12mo: {
      q: "Were any of them imposed on a sentence of more than 12 months' imprisonment?",
      ref: 's 86J & sch 1AA, pt 6, cl 21(3)',
      no: stageEdge(1),
      yes: node('anotherActive'),
    },
    anotherActive: {
      q: 'Is there another such warning which was imposed for offending committed after an active final or subsequent warning?',
      ref: 'sch 1AA, pt 6, cl 21(5)',
      no: stageEdge(2),
      yes: node('over2yr'),
    },
    finalOrSubsequent1: {
      q: 'Are there any records of final or subsequent warning?',
      ref: 's 86J',
      no: stageEdge(2),
      yes: node('finalAfter2025'),
    },
    finalAfter2025: {
      q: 'Were any of them given on or after 17 June 2025?',
      ref: 'sch 1AA, pt 6, cls 18 & 21(1)',
      no: node('afterFirstActive'),
      yes: stageEdge(3),
    },
    afterFirstActive: {
      q: 'Were any of them imposed for offending committed after a first warning that is still active?',
      ref: 's 86U & sch 1AA, pt 6, cl 21(5)(a) & (b)',
      no: stageEdge(2),
      yes: node('over2yr'),
    },
    over2yr: {
      q: "Were any of them imposed on a sentence of more than two years' imprisonment?",
      ref: 's 86J',
      no: stageEdge(2),
      yes: stageEdge(3),
    },
  },
};

// ─── FLOWCHART 3: Non-homicide offences ────────────────────────────────────

export const FC3 = {
  title: 'Non-homicide offences — consequences',
  stage1Result: result(
    line("There are no limits on the court's discretion.", ''),
    line('The court must give the defendant a first warning if they sentence the defendant to more than 12 months\u2019 imprisonment.', 's 86K(3)')
  ),
  start: 'over2yr',
  nodes: {
    over2yr: {
      q: "Is the court imposing a sentence of more than two years' imprisonment?",
      ref: 'ss 86O(1) & 86R(1)',
      no: node('stage2over12mo'),
      yes: { 2: term(result(
              line('The court must make an order that the sentence is to be served without parole, unless that would be manifestly unjust.', 's 86O(2)'),
              line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
            )),
            3: node('pleadedGuilty') },
    },
    stage2over12mo: {
      q: "Is the court imposing a sentence of more than 12 months' imprisonment on a Stage-2 offence?",
      ref: 's 86KA(1)(a)',
      no: term(result(line('No additional consequences.', ''))),
      yes: term(result(line('The court must also give the defendant a further first warning.', 's 86KA(3) & (4)'))),
    },
    pleadedGuilty: {
      q: 'Did the defendant plead guilty to the qualifying offence?',
      ref: 's 86R(2)(a)(ii) & (b)(ii)',
      yes: term(result(
        line('The court must sentence the defendant to at least 80% of the maximum penalty unless that would be manifestly unjust.', 's 86R(2)(b)'),
        line('The court must make an order that the sentence is to be served without parole, unless that would be manifestly unjust.', 's 86R(3)'),
        line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
      )),
      no: term(result(
        line('The court must impose the maximum penalty unless that would be manifestly unjust.', 's 86R(2)(a)'),
        line('The court must make an order that the sentence is to be served without parole, unless that would be manifestly unjust.', 's 86R(3)'),
        line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
      )),
    },
  },
};

// ─── FLOWCHART 4: Manslaughter ─────────────────────────────────────────────

export const FC4 = {
  title: 'Manslaughter — consequences',
  stage1Result: result(
    line("There are no limits on the court's discretion.", ''),
    line('The court must give the defendant a first warning if they sentence the defendant to more than 12 months\u2019 imprisonment.', 's 86K(3)')
  ),
  start: 'over2yr',
  nodes: {
    over2yr: {
      q: "Is the court imposing a sentence of more than two years' imprisonment?",
      ref: 'ss 86O(1) & 86R(1)',
      no: node('stage2over12mo'),
      yes: { 2: node('indeterminate'), 3: node('pleadedGuilty') },
    },
    stage2over12mo: {
      q: "Is the court imposing a sentence of more than 12 months' imprisonment on a Stage-2 offence?",
      ref: 's 86KA(1)(a)',
      no: term(result(line('No additional consequences.', ''))),
      yes: term(result(line('The court must also give the defendant a further first warning.', 's 86KA(3) & (4)'))),
    },
    indeterminate: {
      q: 'Is the court imposing an indeterminate sentence?',
      ref: 's 86O(1)',
      yes: term(result(line('The court must also give the defendant a subsequent warning.', 's 86L(3)'))),
      no: term(result(
        line('The court must make an order that the sentence is to be served without parole, unless that would be manifestly unjust.', 's 86O(2)'),
        line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
      )),
    },
    pleadedGuilty: {
      q: 'Did the defendant plead guilty?',
      ref: 's 86R(2)(c)(ii) & (d)(ii)',
      yes: term(result(
        line('The court must sentence the defendant to at least eight years\u2019 imprisonment unless that would be manifestly unjust.', 's 86R(2)(d)'),
        line('The court must make an order that the sentence is to be served without parole, unless that would be manifestly unjust.', 's 86R(3)'),
        line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
      )),
      no: term(result(
        line('The court must sentence the defendant to at least ten years\u2019 imprisonment unless that would be manifestly unjust.', 's 86R(2)(c)'),
        line('The court must make an order that the sentence is to be served without parole, unless that would be manifestly unjust.', 's 86R(3)'),
        line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
      )),
    },
  },
};

// ─── FLOWCHART 5: Murder ────────────────────────────────────────────────────

const SUBSEQUENT_WARNING_ONLY = term(result(line('The court must also give the defendant a subsequent warning.', 's 86L(3)')));

export const FC5 = {
  title: 'Murder — consequences',
  stage1Result: result(
    line("There are no limits on the court's discretion.", ''),
    line('The court must give the defendant a first warning if they sentence the defendant to more than 12 months\u2019 imprisonment.', 's 86K(3)')
  ),
  start: 'lifeS102',
  nodes: {
    lifeS102: {
      q: 'Is the court imposing a sentence of life imprisonment under s 102?',
      ref: 'ss 86P(1)(a) & 86S(1)(a)',
      no: node('over2yr'),
      yes: node('lifeWithoutParoleS103'),
    },
    over2yr: {
      q: "Is the court imposing a sentence of more than two years' imprisonment?",
      ref: 's 86L(1)',
      no: node('stage2over12mo'),
      yes: SUBSEQUENT_WARNING_ONLY,
    },
    stage2over12mo: {
      q: "Is the court imposing a sentence of more than 12 months' imprisonment on a Stage-2 offence?",
      ref: 's 86KA(1)(a)',
      no: term(result(line('No additional consequences.', ''))),
      yes: term(result(line('The court must also give the defendant a further first warning.', 's 86KA(3) & (4)'))),
    },
    lifeWithoutParoleS103: {
      q: 'Is the court sentencing the defendant to life imprisonment without parole under s 103(2A)?',
      ref: 'ss 86P(1)(b) & 86S(1)(b)',
      yes: SUBSEQUENT_WARNING_ONLY,
      no: node('pleadedGuilty'),
    },
    pleadedGuilty: {
      q: 'Did the defendant plead guilty?',
      ref: 'ss 86P(2)(a), & (b) & 86S(2)(a) & (b)',
      yes: { 2: node('s104'), 3: term(result(
              line('The court must impose an MPI of at least 18 years unless that would be manifestly unjust.', 's 86S(2)(a)'),
              line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
            )) },
      no: { 2: term(result(
              line('The court must impose an MPI of at least 17 years unless that would be manifestly unjust.', 's 86P(2)(b)'),
              line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
            )), 3: term(result(
              line('The court must impose an MPI of at least 20 years unless that would be manifestly unjust.', 's 86S(2)(b)'),
              line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
            )) },
    },
    s104: {
      q: 'Does s 104 apply?',
      ref: 's 86P(2)(a) & (b)',
      no: term(result(
        line('The court must impose an MPI of at least 15 years unless that would be manifestly unjust.', 's 86P(2)(a)'),
        line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
      )),
      yes: term(result(
        line('The court must impose an MPI of at least 17 years unless that would be manifestly unjust.', 's 86P(2)(b)'),
        line('The court must also give the defendant a subsequent warning.', 's 86L(3)')
      )),
    },
  },
};

export function getConsequenceFlowchart(offenceType) {
  if (offenceType === 'murder') return FC5;
  if (offenceType === 'manslaughter') return FC4;
  return FC3;
}

// ─── SCHEDULE 1AB OFFENCES ──────────────────────────────────────────────────
// Reference list shown under the "Is the offence listed in Schedule 1AB?"
// question. Crimes Act 1961 section references.

export const SCHEDULE_1AB = [
  { ref: 's 128B', label: 'Sexual violation' },
  { ref: 's 129(1)', label: 'Attempted sexual violation' },
  { ref: 's 129(2)', label: 'Assault with intent to commit sexual violation' },
  { ref: 's 129A(1)', label: 'Sexual connection with consent induced by threat' },
  { ref: 's 131(1)', label: 'Sexual connection with dependent family member under 18 years' },
  { ref: 's 131(2)', label: 'Attempted sexual connection with dependent family member under 18 years' },
  { ref: 's 132(1)', label: 'Sexual connection with child' },
  { ref: 's 132(2)', label: 'Attempted sexual connection with child' },
  { ref: 's 132(3)', label: 'Indecent act on child' },
  { ref: 's 134(1)', label: 'Sexual connection with young person' },
  { ref: 's 134(2)', label: 'Attempted sexual connection with young person' },
  { ref: 's 134(3)', label: 'Indecent act on young person' },
  { ref: 's 135', label: 'Indecent assault' },
  { ref: 's 138(1)', label: 'Exploitative sexual connection with person with significant impairment' },
  { ref: 's 138(2)', label: 'Attempted exploitative sexual connection with person with significant impairment' },
  { ref: 's 142A', label: 'Compelling indecent act with animal' },
  { ref: 's 144A', label: 'Sexual conduct with children and young people outside New Zealand' },
  { ref: 's 172', label: 'Murder' },
  { ref: 's 173', label: 'Attempted murder' },
  { ref: 's 174', label: 'Counselling or attempting to procure murder' },
  { ref: 's 175', label: 'Conspiracy to murder' },
  { ref: 's 177', label: 'Manslaughter' },
  { ref: 's 188(1)', label: 'Wounding with intent to cause grievous bodily harm' },
  { ref: 's 188(2)', label: 'Wounding with intent to injure' },
  { ref: 's 189(1)', label: 'Injuring with intent to cause grievous bodily harm' },
  { ref: 's 189A', label: 'Strangulation or suffocation' },
  { ref: 's 191(1)', label: 'Aggravated wounding' },
  { ref: 's 191(2)', label: 'Aggravated injury' },
  { ref: 's 198(1)', label: 'Discharging firearm or doing dangerous act with intent to do grievous bodily harm' },
  { ref: 's 198(2)', label: 'Discharging firearm or doing dangerous act with intent to injure' },
  { ref: 's 198A(1)', label: 'Using firearm against law enforcement officer, etc' },
  { ref: 's 198A(2)', label: 'Using firearm with intent to resist arrest or detention' },
  { ref: 's 198B', label: 'Commission of crime with firearm' },
  { ref: 's 200(1)', label: 'Poisoning with intent to cause grievous bodily harm' },
  { ref: 's 201', label: 'Infecting with disease' },
  { ref: 's 208', label: 'Abduction for purposes of marriage or civil union or sexual connection' },
  { ref: 's 209', label: 'Kidnapping' },
  { ref: 's 232(1)', label: 'Aggravated burglary' },
  { ref: 's 234', label: 'Robbery' },
  { ref: 's 235', label: 'Aggravated robbery' },
  { ref: 's 236(1)', label: 'Causing grievous bodily harm with intent to rob, or assault with intent to rob in specified circumstances' },
  { ref: 's 236(2)', label: 'Assault with intent to rob' },
];
