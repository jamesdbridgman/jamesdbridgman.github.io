// constants/guidelinesData.js
// Content source: Claude_prompts_3_guidelines.odt
// Each entry: { id, title, case: { name, citation, url }, sections: [{ heading, paragraphs }], sub: [ ...same shape... ] }
// Case names and other italicised text are wrapped in single asterisks, e.g. *R v Mako*.
// Render with the ItalicText helper in guidelines.jsx, which converts *...* into italic spans.

export const GUIDELINES = [
  {
    id: 'aggravated-robbery',
    title: 'Aggravated Robbery',
    case: {
      name: 'R v Mako',
      citation: '[2000] NZCA 407; [2000] 2 NZLR 170; (2000) 17 CRNZ 272',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2000/407.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[54] Different combinations of the features of the offending in the present case can be taken by way of example to indicate appropriate starting point levels. The robbery of commercial premises where members of the public can be expected to be present, targeting substantial sums in tills or a safe by a group, with a lethal weapon, disguises and other indications of preparation, should attract for adult perpetrators after a defended trial a starting point of six or perhaps more years. Where firearms are loaded or the danger of harm is increased in other ways, or if actual violence is used, the starting point would be eight years or more. To take the facts of the present case, that it had the hallmarks of a gang operation and the treatment of the tavern patrons would have justified a starting point of eight years and, in the case of the respondent, the further feature of presenting the firearm to the police at the end of a dangerous car chase would require a starting point of at least nine years for the overall offending.',
          '[55] As we said in *Tukuafu* for very serious armed robberies (even without multiple or repeat offending) a starting point of around 10 years will be appropriate.',
          '[56] A further example can be given taking another combination of features typical of many aggravated robberies. This envisages a robbery of a small retail shop by demanding money from the till under threat of the use of a weapon such as a knife after ensuring no customers are present, with or without assistance from a lookout or an accomplice waiting to facilitate getaway. The shopkeeper is confronted by one person with face covered. There is no actual violence. A small sum of money is taken. The starting point should be around four years. Should the shopkeeper be confined or assaulted, or confronted by multiple offenders, or if more money and other property is taken five years, and in bad cases six years, should be the starting point.',
          '[57] Another form of offending of disturbing frequency is the robbery of taxi drivers. These offences, generally at night, commonly involve violence to victims who, by their occupation are vulnerable. Other road users also may be endangered. Where a weapon is presented or physical violence is employed, though no serious injury may be caused, and money is taken a starting point of between four and five years would be appropriate.',
          '[58] Forced entry to premises at night by a number of offenders seeking money, drugs or other property, violence against victims, where weapons are brandished even if no serious injuries are inflicted would require a starting point of seven years or more. Where a private house is entered the starting point would be increased under the home invasion provisions to around 10 years.',
          '[59] At the other end of the scale would be street robbery by demanding that the victim hand over money or property such as an item of clothing, where a knife or similar weapon is produced or where offenders acting together by bullying or menacing conduct enforce the demand though no actual violence occurs. Depending upon the circumstances the starting point would be between 18 months and three years. Actual physical enforcement might well require a higher starting point.',
          { text: '[See [36]–[52] for a discussion of relevant aggravating features]', note: true },
        ],
      },
    ],
  },
  {
    id: 'robbery',
    title: 'Robbery',
    case: {
      name: 'Heteraka v R',
      citation: '[2013] NZCA 339',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2013/339.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[24] This Court has accepted that while the *Mako* guidelines should not be applied strictly to cases involving robbery, they can be adapted for such use, so long as arithmetical adjustments are not made mechanically to fit the differing maximum penalties.',
        ],
      },
    ],
  },
  {
    id: 'aggravated-burglary',
    title: 'Aggravated Burglary',
    case: {
      name: 'R v Watson',
      citation: '[2003] NZCA 242',
      url: 'https://beta.nzlii.org/cgi-bin/viewdoc/nz/cases/NZCA/2003/242.html',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          { text: '[Apply *Mako* by analogy]', note: true },
          '[27] In relation to the starting point of 10 years imprisonment, whilst this can be seen at the high end of the available sentencing range, it is nevertheless within range. In *R v Rua* (CA58/02, 24 October 2002), a case involving the crime of aggravated burglary, this Court referred with approval to the 10 year starting point identified in *Mako* for the offending there identified, and emphasised that it is "the particular combination of the variable features" that have to be assessed by the sentencer in each case in fixing start and end points for sentence. Although *Mako* was concerned with cases of aggravated robbery, the principles expressed therein are equally applicable to the crime of aggravated burglary. Both carry the same maximum penalty of 14 years imprisonment and have similar elements. Although an aggravated robbery may not necessarily involve intrusion into premises, an aggravated burglary inherently does. Where that intrusion is into a private dwelling house, that is an aggravating factor. It was so regarded by the courts prior to enactment of the home invasion legislation and is now expressly listed as an aggravating factor in the Sentencing Act 2002.',
          '[28] Given the common features of crimes of aggravated burglary and aggravated robbery, the guidance in *Mako* is useful by analogy. ~[...]~',
        ],
      },
    ],
  },
  {
    id: 'burglary',
    title: 'Burglary',
    case: {
      name: 'Arahanga v R',
      citation: '[2012] NZCA 480; [2013] 1 NZLR 189',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2012/480.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[78] This Court has deliberately not set a tariff for burglary because the range of circumstances in which the offence can be committed is so varied. Burglary of a domestic residence is a significant aggravating feature at sentencing due to the heightened risk of confrontation with the occupants. Dwelling house burglaries at the relatively minor end of the scale tend to attract a starting point of approximately 18 months\' to two years and six months\' imprisonment.',
        ],
      },
      {
        case: {
          name: 'Senior v Police',
          citation: '(2000) 18 CRNZ 340 (HC)',
        },
      },
      {
        heading: '*The first-time burglar — category 1*',
        paragraphs: [
          '[25] In the case of the first-time burglar, and depending on the burglar\'s background and the existence of aggravating (and mitigating) factors, a prison sentence may be imposed although frequently this is not the case.',
          { text: '[...]', note: true },
        ],
      },
      {
        heading: '*Recidivist burglary — category 2*',
        paragraphs: [
          '[27] In the case of the recidivist burglar, the length of the sentence will largely depend upon the number of previous convictions, the number of offences for which the offender appears for sentence and the presence of aggravating and mitigating factors.',
          '[28] In cases in this category, there is scope for the application of the prevention principle referred to in *Ward* [1976] 1 NZLR 588. In other words the protection of the public is a significant factor. It is common enough for sentencing judges to say, when imposing a sentence of imprisonment on a burglar, that the public is entitled to a rest from the activities of that particular burglar, see for instance *Brewster* at 229. As well, judges are likely to impose sentences which are more severe than those imposed on the offender on previous appearances for the same offence, although there are limits to the extent to which this can be carried though, see for instance *Andrian* (1996) 13 CRNZ 449 at 454.',
          { text: '[...]', note: true },
          '[31] Cases which might be thought to fit into this category are *Morgan* (unreported, CA 31l/97, judgment delivered 25 September 1997), *Devlin* (unreported A 56/95, High Court, Christchurch Registry, judgment of John Hansen J delivered 7 September, 1995), *Te Kira* (AP 9/96 High Court, Invercargill Registry, judgment of Tipping J delivered 23 April 1996), *Francis* (unreported AP 119/98, High Court, Christchurch Registry, judgment of Young J delivered 2 July 1998), *Brown* (unreported AP 32/98 High Court, Invercargill Registry, judgment of Young J delivered 28 August 1998), *Ngarimu* (unreported AP 223/98, High Court, Invercargill Registry, judgment of Young J delivered 23 November 1998), *Riri* (unreported AP 67/99, High Court, Hamilton Registry, judgment of Penlington J delivered 19 July 1999), *Kingi* (unreported AP 44/99 High Court, Rotorua Registry, judgment of Chambers J delivered 25 August 1999), *Moka* (unreported A 3/00 High Court, Auckland Registry, judgment of Williams J delivered 1 February 2000) and *Stockman* (unreported A 96/00 High Court, Auckland Registry, judgment of Rodney Hansen J delivered 21 July 2000).',
          '[32] In *Riri* there were 5 burglaries and the starting point sentence was 5 years. In none of the other cases did the starting point sentence exceed 4 years. The maximum sentence imposed in those cases was 3 years.',
        ],
      },
      {
        heading: '*The spree burglar — category three*',
        paragraphs: [
          '[38] This burglar will appear for sentence on a large number of burglaries all committed within a short space of time and usually having admitted at interview a number of burglaries which the police, without such admissions, would not have been able to solve.',
          '[39] In most cases the difference between the spree burglar and the category one or two burglar is simply that the spree burglar has been candid with the police. This co-operation is a significant factor. It means that burglaries which would not otherwise be solved are cleared. It provides at least a chance that some recoveries of stolen property will be made. It may lead to the identification of other people who have been involved in the offending either as parties to the burglaries or as receivers.',
          '[40] Cases in this category are *Grunt* (1992) 8 CRNZ 483, where there was an effective sentence of four years for eighteen burglaries of which the appellant volunteered information as to his involvement in sixteen, *Wickliffe* (unreported CA 387/95, judgment delivered 20 March 1996) where was an effective sentence of 4 years for thirteen burglaries within a one month period, this following a plea of guilty and allowing for the co-operation which characterises these cases, *Casey* (unreported AP 78/96 High Court, Napier Registry, judgment of Gallen J delivered 7 February 1997) where there was an effective sentence of three years for seven burglaries, twenty-three charges of unlawfully interfering with cars and one charge of being unlawfully in a yard, this following guilty pleas and co-operation, *Brian* (unreported AP 170/97 High Court, Christchurch Registry, judgment of Fraser J delivered 6 August 1997) where there was a sentence of eighteen months imposed for twenty-three burglaries on a youthful offender who had previous convictions but none for burglary and who had pleaded guilty and co-operated), *Roberts* (unreported AP 145/98, High Court, Hamilton Registry, judgment of Hammond J delivered 19 January 1999), where there was an effective sentence of 4 years imprisonment for 20 burglaries and one theft in a case where there were pleas of guilty and co-operation, *Marsh* (unreported AP 29/99 High Court, Dunedin Registry, judgment of Chisholm J delivered 18 August 1999) where three years imprisonment was imposed for thirty seven burglaries following pleas of guilty and co-operation, *White* (unreported A 170/99, High Court, Auckland Registry, judgment of Fisher J delivered 9 November 1999) where there was an effective sentence of 4 years imprisonment for 37 burglaries following pleas of guilty and co-operation.',
        ],
      },
    ],
  },
  {
    id: 'gbh',
    title: 'Grievous Bodily Harm',
    case: {
      name: 'R v Taueki',
      citation: '[2005] NZCA 175',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2005/174.pdf',
    },
    sections: [],
    sub: [
      {
        id: 'gbh-bands',
        title: 'Bands',
        sections: [
          {
            heading: 'Band one',
            paragraphs: [
              '[36] This band will be appropriate for offending involving violence at the lower end of the spectrum of GBH offences. It is not an appropriate band for offences of extreme violence or violence which is actually life threatening. We have set the lowest starting point in this band at three years for the reasons (and subject to the qualification) set out at [27] above. Where none of the aggravating factors referred to in [31] are present, a starting point at the bottom end of this band would normally be called for. Where one or more of those factors is present, a higher starting point would be required.',
              '[37] The following examples may assist with the application of the above principles:',
              '*(a) Street attack:* Where an offender has engaged in an attack on a person in a public street, in circumstances where the attack is impulsive (perhaps reacting to some perceived slight), no weapons are involved, and the grievous bodily harm caused to the victim does not have a lasting effect, a starting point at the lower end of this range would be indicated. On the other hand, where the attack features the use of a weapon (such as a fence paling found at the scene) or there are a number of attackers against a single victim, then a starting point of around five years may well be appropriate, again assuming that the grievous bodily harm does not have a lasting effect on the victim;',
              '*(b) Domestic assault:* A domestic assault by an offender on his or her spouse or partner (or former spouse or partner) which is impulsive, does not involve the use of a weapon and does not cause lasting injuries, but where the victim is properly classified as vulnerable, may require a starting point in the region of four years. Where there is a degree of premeditation or there is the use of a weapon (but, again, no lasting injuries), a higher starting point could be expected, perhaps five years or more.',
            ],
          },
          {
            heading: 'Band two',
            paragraphs: [
              '[38] This band will be appropriate for GBH offending which features two or three of the aggravating factors referred to in [31] above.',
              '[39] The following examples may assist in the application of that principle:',
              '*(a) Concerted street attack:* For a street attack in which a victim is set upon by a group of attackers in an attack involving the use of weapons found at the scene, a starting point at the lower end of band two would be indicated. If the attack involves blows to the head or other serious injuries are caused, or there is premeditation, then a starting point higher in the band two spectrum would be required;',
              '*(b) Assault on Police officer:* A GBH offence involving an attack on a Police officer in the course of his duty by a single attacker with the use of a weapon, where the attack is designed to avoid apprehension for other offending, but the injuries are not life threatening or lasting, would require a starting point at the lower end of band two. Where the attack involves multiple attackers or the use of lethal weapons, a starting point at the higher end of band two would be required;',
              '*(c) Premeditated domestic assault:* A domestic attack on the partner or former partner of the attacker which is premeditated and involves the inflicting of serious and lasting injury would require a starting point in band two. The appropriate point in that band would require evaluation of the seriousness of those factors. Where the attack involves the use of a weapon, particularly where it is brought to the scene, the starting point could be expected to be at the higher end of band two.',
            ],
          },
          {
            heading: 'Band three',
            paragraphs: [
              '[40] Band three would normally encompass serious offending which has three or more of the aggravating features referred to in [31] above, where the combination of aggravating features is particularly grave.',
              '[41] The following examples may assist:',
              '*(a) Serious concerted street attack:* An episode of street violence where multiple attackers set upon a victim in a premeditated attack, using weapons which they have brought to the scene for the purpose, and where serious and lasting injuries are inflicted on the victim will call for a starting point in the lower to middle range of Band 3. Where the victim is particularly vulnerable, or the attack has "hate crime" aspects to it, a higher starting point would be required. Where the victim is left with injuries which will have an ongoing impact on his or her enjoyment of life, a starting point at the top end of Band 3 will be called for.',
              '*(b) Serious domestic assault:* In a domestic attack situation, where the attack involves a premeditated home invasion with the use of a weapon brought to the scene, the victim is vulnerable and the injuries caused have a lasting effect on the victim, a starting point at the top of the Band 3 range may well be required;',
              '*(c) Serious attack on Police:* Where an assault on a Police officer by multiple attackers with weapons leading to a life-threatening injury, a starting point at or near the 14 year maximum may be called for.',
            ],
          },
        ],
      },
      {
        id: 'gbh-aggravating-mitigating',
        title: 'Aggravating and Mitigating Features',
        sections: [
          {
            heading: null,
            paragraphs: [
              '[27] Almost all GBH offences will involve a high degree of criminality (and significant injury to the victim) which will require the imposition of a term of imprisonment. It will be only in exceptional cases that a starting point of less than three years imprisonment will be appropriate: for example where the sentencing Judge considers the offending, while technically falling within s 188(1), involves culpability at a level which may have been better reflected in a lesser charge. Some recognition of different approaches to the exercise of prosecutorial discretion in different parts of the country may be needed.',
              { text: '[...]', note: true },
              '[30] We do, however, emphasise that a sentencing Judge needs not only to identify such factors, but also to evaluate the seriousness of a particular factor. For example premeditation is identified as a factor, but it may vary in particular cases from full scale planning and orchestration of a concerted vicious attack to a period of a few minutes or so after a perceived slight during which the offender decides to take revenge. The evaluative task is an important aspect of sentencing: without it, there would be a danger of a formulaic or mathematical approach to the assessment of sentencing starting points.',
              { text: '[...]', note: true },
            ],
          },
          {
            heading: 'Matters contributing to the seriousness of GBH offending',
            paragraphs: [
              '[31] We now turn to the features of offending which will be seen to contribute to the seriousness of the conduct and criminality involved in a GBH offence:',
              '*(a) Extreme violence:* The extent of the violence involved in the offending will have an obvious impact on the level of criminality. Where any violent conduct is prolonged that will also be relevant, as will violence which is unprovoked or gratuitous.',
              '*(b) Premeditation:* The degree of premeditation and planning will also reflect criminality. Serious violence which can properly be classified as impulsive or a reaction to an unexpected event will generally be seen as less culpable than premeditated violence.',
              '*(c) Serious injury:* Where the injuries suffered by the victim or victims are very serious, a higher starting point than in cases of minor injury will be called for. This is particularly the case where the injuries are potentially fatal or are such as to cause long term or permanent disability impacting on the victim\'s quality of life. However, care has to be taken not to double count the level of violence inflicted and the seriousness of the injuries which result from it.',
              '*(d) Use of weapons:* The use of a lethal weapon such as a firearm or a knife will be a serious aggravating factor. Where offenders use a broken bottle, the likelihood of very serious injury is high and this will also be a serious aggravating factor. Other examples are clubs, baseball bats and similar weapons which, particularly when aimed at the head, can cause significant and permanent injury. Where the use of a weapon is premeditated, the criminality will be worse.',
              '*(e) Attacking the head:* Even where weapons are not used, attacks on the head of a victim can have particularly serious consequences.',
              '*(f) Facilitation of crime:* Where a GBH offence involves the use of violence to facilitate the commission of another offence (for example rape) that will also be seen as an aggravating factor.',
              '*(g) Perverting the course of justice:* Similarly, where violence is used in an attempt to pervert the course of justice, that will be an aggravating factor.',
              '*(h) Multiple attackers:* The greater the number of attackers and the greater the disparity between the number of the attacking group and the victim group, the greater the culpability will be.',
              '*(i) Vulnerability of victim:* Where the victim is particularly vulnerable (for example a child or where there is a disparity in size or strength between the attacker and the victim), that will also be a significant factor in the assessment of culpability. Where the victim is a child in the offender\'s care, there will be the additional factor of breach of trust.',
              '*(j) Home invasion:* Where the offending involves the invasion of the sanctity of the home, this will be a particularly important factor.',
              '*(k) Gang warfare:* Where serious violence is perpetrated by members of a criminal gang or organised crime cartel, that would be a further aggravating feature.',
              '*(l) Public official:* Where the victim is a law enforcement officer or other public official carrying out his or her duties, that will be a serious additional aggravating factor.',
              '*(m) Vigilante action:* Where the serious violence results from the actions of one or more persons taking the law into their own hands, acting out of revenge or using stand-over tactics for the enforcement of other obligations, that will also be an aggravating feature.',
              '*(n) Hate crime:* Where the attack is inspired by racism, homophobia or hostility to any other group, that may also constitute an additional aggravating factor.',
            ],
          },
          {
            heading: 'Matters reducing the seriousness of GBH offending',
            paragraphs: [
              '[32] Matters which may be seen as leading to lower starting points are:',
              '*(a) Provocation:* Where the offender has been provoked, that may justify a lower starting point. It is not enough simply to claim to have been incensed by the actions of the victim or another: rather, the sentencing Judge will need to be satisfied that there was serious provocation which was an operative cause of the violence inflicted by the offender, and which remained an operative cause throughout the commission of the offence.',
              '*(b) Excessive self defence:* Similarly, where a party has acted out of self defence but has gone too far, the fact that the attack initially commenced as an effort to defend himself or herself (or another) may be seen as reducing the seriousness of the offending.',
            ],
          },
          {
            heading: 'Matters which should not be seen as reducing the seriousness of GBH offending',
            paragraphs: [
              '[33] To avoid any doubt, we mention that there are some factors which are sometimes said to reduce the seriousness of conduct, but which, in our view, should not be seen in that light:',
              '*(a) Domestic situation:* The fact that violence occurs in a domestic situation should not be seen as reducing its seriousness. Indeed, domestic violence is a major problem in New Zealand society and, by its very nature, one which is difficult to detect. It frequently involves violence by a man against a woman or child, where the vulnerability of the victim is a significant factor.',
              '*(b) Victim\'s plea:* Sometimes the victim of a serious assault, particularly in a domestic situation, will ask the Court to impose a lenient sentence. In our view the position is now clear that the Court should not condone violent conduct even if the victim does so: there is a public interest at stake as well as the interest of the victim. That is not, however, to say that the views of the victim are to be ignored: rather it is simply to emphasise that the views of the victim do not outweigh the public interest.',
              '*(c) Intoxication:* The fact that an offender is under the influence of alcohol or drugs at the time of the offending will not be a mitigating factor: s 9(3) of the Sentencing Act.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'intent-to-injure',
    title: 'Intent to Injure',
    case: {
      name: 'Nuku v R',
      citation: '[2012] NZCA 584; [2013] 2 NZLR 39',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2012/584.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          { text: '[Wounding with intent to injure, injuring with intent to injure, and aggravating injury]', note: true },
          '[37] We consider therefore that we should replace *Harris* with the following guidance, applicable to offending under ss 189(2), 188(2) and 191(2) where the offending involves intent to injure. We see this judgment as providing guidance on how *Taueki* can be adapted to apply to the lesser charges, rather than being a guideline judgment in its own right.',
          '[38] The following bands apply:',
          '(a) Band one: where there are few aggravating features, the level of violence is relatively low and the sentencing judge considers the offender\'s culpability to be at a level that might have been better reflected in a less serious charge, a sentence of less than imprisonment can be appropriate.',
          '(b) Band two: a starting point of up to three years\' imprisonment will be appropriate where three or fewer of the aggravating factors listed at [31] of *Taueki* are present.',
          '(c) Band three: a starting point of two years up to the statutory maximum (either five or seven years, depending on the offence) will apply where three or more of the aggravating features set out in *Taueki* are present and the combination of those features is particularly serious. The presence of a high level of or prolonged violence is an aggravating factor of such gravity that it will generally require a starting point within band three, even if there are few other aggravating features.',
        ],
      },
      {
        heading: null,
        case: {
          name: 'R v Tamihana',
          citation: '[2015] NZCA 169',
          url: 'https://beta.nzlii.org/nz/cases/NZCA/2015/169.pdf',
        },
        paragraphs: [
          { text: '[Assault with intent to injure]', note: true },
          '[16] There is no guideline judgment for the offence of assault with intent to injure under s 193 of the Crimes Act. There are however guideline decisions of this Court concerning similar offending under s 188(2) (wounding with intent), 189(2) (injuring with intent) and 191(2) (aggravated wounding or injury) of the Crimes Act. Offending under any of these sections involves the same mental element as does offending under s 193 — namely, an intent to injure. As a result the principles discussed are helpful in sentencing for offending contrary to s 193, notwithstanding that the decisions focus on different offences, with higher maximum sentences.',
        ],
      },
    ],
  },
  {
    id: 'assault-with-weapon',
    title: 'Assault with a Weapon',
    case: {
      name: 'Hirinui v R',
      citation: '[2014] NZCA 290',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2014/290.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[26] In *Nuku v R* this Court considered the appropriate bands for charges under ss 189(2), 191(2) and 188(2) of the Crimes Act 1961. The Crown submitted that, although the Court did not expressly refer to s 202C, the same methodology as that used in *Nuku* should be applied given that s 202C carries the same maximum penalty as a conviction under s 189(2). Mr Glover accepted that the principles expressed in *Nuku* were applicable to this case.',
          '[27] Having regard to this Court\'s comments in *Nuku* and the factors in ss 7, 8 and 9 of the Sentencing Act 2002, we consider that the unprovoked use of a heavy weapon, a baseball bat, to the head, resulting in serious injuries to a forehead supported the starting point of 18 months\' imprisonment taken by the Judge.',
          { text: '[...]', note: true },
        ],
      },
      {
        heading: null,
        case: {
          name: 'Wharepapa v R',
          citation: '[2025] NZCA 308',
          url: 'https://beta.nzlii.org/nz/cases/NZCA/2025/308.pdf',
        },
        paragraphs: [
          '[16] In *Hirinui v R*, the Court of Appeal confirmed that the *Nuku v R* methodology applies to the charge of assault with a weapon, noting that it carries the same five-year maximum penalty as injuring with intent to injure. *Nuku* relies on the aggravating features set out in *Taueki* in determining the appropriate sentencing band.',
          { text: '[See Intent to Injure and Grievous Bodily Harm]', note: true },
        ],
      },
    ],
  },
  {
    id: 'strangulation',
    title: 'Strangulation',
    case: {
      name: 'Shramka v R',
      citation: '[2022] NZCA 299',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2022/299.pdf',
    },
    sections: [
      {
        heading: '(1) Highest level s 189A offending',
        paragraphs: [
          '[46] We start with the example given by the Law Commission as exemplary of the "worst class" or band of offending under s 189A. We set it out again:',
          { text: 'An example of the worst class of strangulation within scope would feature the hallmarks of coercive or controlling behaviour and the terror we have identified. For example, a perpetrator enters the victim\'s home in breach of a protection order. After an altercation, he strangles her with his hands on and off for several minutes, leaving her struggling for breath, incontinent and unconscious. The victim thinks she will die and knows that the perpetrator has the power to kill her. Because he invaded her home, after the strangulation, she lives in constant fear for her security and life. As a consequence, he has achieved coercion and control over her.', quote: true },
          '[47] The example involves six of the eight aggravating factors identified at [42]: (a) premeditation (probably), (c) vulnerability, (d) home invasion and breach of protection order, (e) aggravated violence to an intense degree (involving repetition, duration and effect, resulting in unconsciousness), (f) threats to kill (probably), and (g) enduring psychological harm to the victim, also to an intense degree. Assuming all these factors apply, we consider it would compel a starting point of five and a half years\' imprisonment.',
          '[48] We note that if factor (b) — history of strangulation or very serious domestic violence — had been engaged as well, the appropriate starting point would be six years\' imprisonment.',
          '[49] We emphasise the need for qualitative assessment, rather than simple factor-counting. A very bad case, albeit with a more limited number of individual aggravating factors, might still command a more condign sentence than that suggested at [47].',
        ],
      },
      {
        heading: '(2) Moderate s 189A offending',
        paragraphs: [
          '[50] We take the present case as an example of moderate level s 189A offending. Without diminishing the violence in the present case, it is somewhat removed from the extremity of the Law Commission\'s example. We note that it engages four aggravating factors: (c) vulnerability (the parties\' physical disparity demonstrated by the fact the victim almost passed out before managing to break free), (d) breach of protection order (but not at the point of entry; it arose from Mr Shramka refusing to leave after visiting by invitation), (e) aggravated violence (being in the order of 30 seconds, nearly resulting in unconsciousness), and (g) enduring psychological harm to the victim.',
          '[51] We would not however engage factor (b) — history of strangulation or very serious domestic violence — here. Although Mr Shramka has other convictions for domestic violence, they do not reach the level of aggravating the starting point of this offence. Rather, they are matters requiring some uplift to the starting point and are to be taken into account at the second stage of sentencing, as personal to him. Factors (a) premeditation, (f) threats to kill, and (h) harm to associated persons are not engaged in this case.',
          '[52] In our view, therefore, in contrast to the Law Commission\'s example, the present case would compel a starting point of three years (36 months).',
          '[53] Had home invasion been involved, and the attack had resulted in unconsciousness, a starting point of four years or more would have been justified.',
        ],
      },
      {
        heading: '(3) Lower level s 189A offending',
        paragraphs: [
          '[54] We will not offer a worked example of this category, which will need to be developed on a case-by-case basis in future decisions, and by reference to the higher levels analysed above. However, had the strangulation been more transitory, and the harm less enduring, a lesser sentence would have applied — perhaps as low as two years. Such offending might be regarded as "lower level" offending, for which an eventual sentence of home detention may be available (assuming a suitable address was available, which often is not the case where domestic violence is in issue).',
        ],
      },
    ],
  },
  {
    id: 'methamphetamine',
    title: 'Methamphetamine',
    case: {
      name: 'Zhang v R',
      citation: '[2019] NZCA 507; [2019] 3 NZLR 648',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2019/507.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[118] We may summarise our proposed approach at the outset. After extensive consideration and debate upon the matter, we propose to retain the *Fatu* quantity bands, but with some significant modifications. In particular, we confirm that the role played by the offender is an important consideration in fixing culpability and thus the stage one sentence starting point. Due regard to role enables sentencing judges to properly assess the seriousness of the conduct and the criminality involved, and thereby the culpability inherent in the offending, in the holistic manner required by *Taueki* and *Hessell*. It means that a more limited measure of engagement in criminal dealing deserves a less severe sentence than a significant or leading role. Role may result in an offender moving not only within a band but also between bands.',
          { text: '[...]', note: true },
          '[125] The new bands are as follows:',
        ],
      },
      {
        heading: 'Quantity bands',
        table: {
          columns: ['', 'Former: Fatu', 'New: Zhang'],
          rows: [
            ['Band one: < 5 grams', '2 – 4.5 years', 'Community to 4 years'],
            ['Band two: < 250 grams', '3 – 11 years', '2 – 9 years'],
            ['Band three: < 500 grams', '8 – 15 years', '6 – 12 years'],
            ['Band four: < 2 kilograms', '10 years to life', '8 – 16 years'],
            ['Band five: > 2 kilograms', '10 years to life', '10 years to life'],
          ],
        },
        paragraphs: [],
      },
      {
        heading: null,
        case: {
          name: 'Berkland v R',
          citation: '[2022] NZSC 143',
          url: 'https://www.courtsofnz.govt.nz/assets/cases/2022/2022-NZSC-143.pdf',
        },
        paragraphs: [
          '[71] We consider it appropriate to adjust the significant role profile to address these issues:',
          { text: '[...]', note: true },
        ],
      },
      {
        heading: 'Updated Role Profile Table',
        table: {
          columns: ['Lesser', 'Significant', 'Leading'],
          rows: [
            [
              [
                '1. Performs a limited function under direction;',
                '2. engaged by pressure, coercion, intimidation;',
                '3. involvement through naivety or exploitation;',
                '4. motivated solely or primarily by own addiction;',
                '5. little or no actual or expected financial gain;',
                '6. paid in drugs to feed own addiction or cash significantly disproportionate to quantity of drugs or risks involved;',
                '7. no influence on those above in a chain;',
                '8. little, if any, awareness or understanding of the scale of operation; and/or',
                '9. if own operation, solely or primarily for own or joint use on non-commercial basis.',
              ],
              [
                '1. Management function in operation or chain where, under direction from a leader, this entails directing others in the operation whether by pressure, influence, intimidation or reward;',
                '2. operational function, whether operating alone or with others;',
                '3. motivated solely or primarily by financial or other advantage;',
                '4. actual or expected financial or other advantage, especially where commensurate with role and risk assumed; and/or',
                '5. some awareness and understanding of the scale of the operation.',
              ],
              [
                '1. Directing or organising buying and selling on a commercial scale;',
                '2. substantial links to, and influence on, others in a chain;',
                '3. close links to original source;',
                '4. expectation of substantial financial gain;',
                '5. uses business as cover; and/or',
                '6. abuses a position of trust or responsibility.',
              ],
            ],
          ],
        },
        paragraphs: [],
      },
    ],
  },
  {
    id: 'cocaine',
    title: 'Cocaine',
    case: {
      name: 'Cavallo v R',
      citation: '[2022] NZCA 276',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2022/276.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[63] Taking these four conclusions together, we consider that the appellants have established that sentencing for like quantities: (1) should not, in the case of cocaine, exceed sentencing for methamphetamine; and (2) should generally be sentenced slightly below comparable methamphetamine starting points — engaging a discount of around five per cent. The second assessment is however dependent on crack cocaine consumption remaining rare in New Zealand. Further studies may enable more robust conclusions to be drawn at a later time.',
        ],
      },
    ],
  },
  {
    id: 'class-b',
    title: 'Class B',
    case: {
      name: 'R v Wallace',
      citation: 'CA432/98, [1999] NZCA 518; [1999] 3 NZLR 159',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/1999/518.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[30] The cases reflect a considerable range in the seriousness of offending. They show that for commercial activity on a major scale the starting point before any allowance for mitigating factors for a principal offender will be in excess of eight years and in the very bad cases up to 14 years, especially where repeat offending is involved. For major offending of this kind there will likely be numerous separate offences so that the 14 year maximum penalty will have little direct relevance to the total offending.',
          '[31] Commercial manufacture or importation on a substantial scale reflecting sophistication and organisation with operations extending over a period of time though not involving massive quantities of drugs or prolonged dealing calls for a starting point in the range five to eight years.',
          '[32] For smaller operations, but representing commercial dealing, starting points of up to five years are appropriate. This necessarily must be a broad category to enable sentencers to reflect the many varied circumstances that can arise.',
        ],
      },
    ],
  },
  {
    id: 'cannabis',
    title: 'Cannabis',
    case: {
      name: 'R v Terewi',
      citation: 'CA113/99, [1999] NZCA 503; [1999] 3 NZLR 62',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/1999/503.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[4] It remains appropriate to divide cannabis cultivation offending into three broad categories:',
          'Category 1 consists of the growing of a small number of cannabis plants for personal use by the offender without any sale to another party occurring or being intended. Offending in this category is almost invariably dealt with by a fine or other non-custodial sentence. Where there have been supplies to others on a non-commercial basis the monetary penalty will be greater and in more serious cases or for persistent offending a term of periodic detention or even a short prison term may be merited.',
          'Category 2 encompasses small-scale cultivation of cannabis plants for a commercial purpose, i.e. with the object of deriving profit. The starting point for sentencing is generally between two and four years but where sales are infrequent and of very limited extent a lower starting point may be justified.',
          'Category 3 is the most serious class of such offending. It involves large-scale commercial growing, usually with a considerable degree of sophistication and organisation. The starting point will generally be four years or more.',
          { text: '[...]', note: true },
          '[6] It will be helpful to sentencing Judges if prosecutors bring evidence of the likely amounts of annual gross revenues, or turnover, obtained by the offender from a cannabis growing operation or which the offender must have anticipated deriving from the activity. That will reflect crop cycles and yields and will be a better measure of the size of an operation than simple reference to the number of plants which have been found. The sentence should also take into account the period over which the offending has continued.',
        ],
      },
    ],
  },
  {
    id: 'sexual-violation',
    title: 'Sexual Violation',
    case: {
      name: 'R v AM',
      citation: '[2010] NZCA 114; [2010] 2 NZLR 750',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2010/114.pdf',
    },
    sections: [],
    sub: [
      {
        id: 'sv-rape',
        title: 'Rape',
        sections: [
          {
            heading: null,
            paragraphs: [
              'The bands for sexual violation where the lead offence is rape, penile penetration of the mouth or anus or violation involving objects (the rape bands):',
              'Rape band one: 6–8 years. Rape band two: 7–13 years. Rape band three: 12–18 years. Rape band four: 16–20 years.',
            ],
          },
          {
            heading: 'Rape band one: 6–8 years',
            paragraphs: [
              '[93] This band will be appropriate for offending at the lower end of the spectrum; that is, offending where the aggravating features are either not present or present to a limited extent. Rape band one is not an appropriate band for offending where the level of violence is serious, the case involves an extended abduction, a victim who by reason of factors such as age (children or elderly persons) or mental or physical impairment is vulnerable or an offender acts in concert with others. Where none of the factors referred to above at [37] to [52] which increase the seriousness of the offending are present a starting point at the bottom end of this band would be appropriate. Where one or more of these factors is present to a low or moderate degree, a higher starting point within the band would be required.',
              'EXAMPLES OF CASES WITH STARTING POINTS AT THE LOWER END OF RAPE BAND ONE:',
              {
                list: [
                '*R v Murphy*: O had been drinking and came home at dawn to find a man and a woman whom he did not know asleep in his bed. O tried to wake them and asked them to leave. The male did so. The female, V, said she woke to find a man attempting to have sexual intercourse with her. She said she thought it was the man who left the room (the two having met the previous evening) and sexual intercourse took place. When V got up and could see the man in bed she realised it was O and left the room and made her complaint.',
                '*R v Pehi*: O and V were in a relationship for about six months. After some kissing in the early hours one morning in V\'s bedroom, O, by then extremely drunk, assaulted V and then engaged in non-consensual activity culminating in rape. V was annoyed with O but said she would have been willing nonetheless to have sex with O that night.',
                '*R v Hill*: O and V became intoxicated whilst at a party. They shared a taxi ride home in the early hours of the morning and went to V\'s house where they drank more alcohol and talked. V asked O to leave after he said he loved her. She left the room and returned having changed into pyjama shorts and a top. O was still there and V told him again that he should leave. O pushed V into a cane basket causing minor scraping and bruising to V\'s thigh. O removed V’s clothing and then penetrated her very briefly before stopping and apologising for his conduct.'
                  ],
                },
              ],
            },
          {
            heading: 'Rape band two: 7–13 years',
            paragraphs: [
              '[98] By comparison with rape band one, this band is appropriate for a scale of offending and levels of violence and premeditation which are, in relative terms, moderate. This band covers offending involving a vulnerable victim, or an offender acting in concert with others or some additional violence. It is appropriate for cases which involve two or three of the factors increasing culpability to a moderate degree.',
              { text: '[Case examples omitted due to app store policy]', note: true },
            ],
          },
          {
            heading: 'Rape band three: 12–18 years',
            paragraphs: [
              '[105] This band will encompass offending accompanied by aggravating features at a, relatively speaking, serious level. Rape band three is appropriate for offending which involves two or more of the factors increasing culpability to a high degree, such as a particularly vulnerable victim and serious additional violence, or more than three of those factors to a moderate degree. Particularly cruel, callous or violent single episodes of offending involving rape will fall into this band.',
              { text: '[Case examples omitted due to app store policy]', note: true },
            ],
          },
          {
            heading: 'Rape band four: 16–20 years',
            paragraphs: [
              '[108] The same sorts of factors that place offending towards the higher end of rape band three will apply here but it is likely that the offending in rape band four will involve multiple offending over considerable periods of time rather than single instances of rape.',
              '[109] Perhaps the paradigm case of offending within this band is that of repeated rapes of one or more family members over a period of years. Offending of this nature, especially that involving children and teenagers, will attract starting points at the higher end of this band. Gang or pack rape is another situation which is likely to fall within this band.',
              { text: '[Case examples omitted due to app store policy]', note: true },
            ],
          },
        ],
      },
      {
        id: 'sv-usc',
        title: 'Unlawful Sexual Connection',
        sections: [
          {
            heading: null,
            paragraphs: [
              'The bands for other violation where unlawful sexual connection is the lead offence (the USC bands):',
              '(a) USC band one: 2–5 years;',
              '(b) USC band two: 4–10 years; and',
              '(c) USC band three: 9–18 years.',
            ],
          },
          {
            heading: 'USC band one: 2–5 years',
            paragraphs: [
              '[114] This USC band will cover offending at the lower end of the spectrum. Where none of the factors referred to above which increase the seriousness of the offending is present a starting point at the bottom end of this band would be appropriate. Where one or more of these factors is present to a low or moderate degree, a starting point closer to the top of the band would be required.',
              { text: '[Case examples omitted due to app store policy]', note: true },
            ],
          },
          {
            heading: 'USC band two: 4–10 years',
            paragraphs: [
              '[117] This USC band is appropriate for cases of relatively moderate seriousness. It will encompass cases which involve two or three of the factors increasing culpability to a moderate degree.',
              { text: '[Case examples omitted due to app store policy]', note: true },
            ],
          },
          {
            heading: 'USC band three: 9–18 years',
            paragraphs: [
              '[120] This band is appropriate for the most serious offending of this type. USC band three will encompass cases which involve two or more of the factors increasing culpability to a high degree, for example, a particularly young victim or an extensive period of offending. Similarly, the band will be appropriate where more than three of those factors are present to a moderate degree.',
              { text: '[Case examples omitted due to app store policy]', note: true },
            ],
          },
        ],
      },
      {
        id: 'sv-culpability',
        title: 'Culpability Assessment Factors',
        sections: [
          {
            heading: 'Planning and premeditation',
            paragraphs: [
              '[37] The degree of planning and premeditation reflects criminality (s 9(1)(i) of the Sentencing Act is to the same effect). Sexual violation of an impulsive nature, although still serious, will generally be less so than that involving grooming of a child or young person, taking steps to get a victim alone, giving the victim alcohol or drugs with a view to offending, and other predatory behaviour. Offenders who show predatory sexual behaviour may be more likely to offend in an opportunistic manner. They should not be treated as lacking premeditation.',
            ],
          },
          {
            heading: 'Violence, detention and home invasion',
            paragraphs: [
              '[38] There is violence inherent in any act of sexual violation. There will usually also be some associated violence, for example, pushing or pulling a victim to the ground and holding him or her down. Where the associated violence is more than mild, this is another factor which increases culpability.',
              '[39] The reference to violence also encompasses threats of violence or other harm to the victim and to others, the presence and use of weapons and other forms of intimidation designed to assert control or to prevent a victim from reporting the offending.',
              '[40] An offender may abduct or detain the victim to facilitate the offending conduct. As with violence, a level of detention is inherent in sexual offending of this nature because the victim is not free to leave. But, where the sexual violation involves detention or abduction beyond that, this too increases the seriousness of the offending. Seriousness increases as the length of detention increases.',
              '[41] Where the offender breaks into the victim\'s home or is unlawfully in the home, that also increases the seriousness of the offending as s 9(1)(b) of the Sentencing Act provides.',
            ],
          },
          {
            heading: 'Vulnerability of victim',
            paragraphs: [
              '[42] Section 9(1)(g) of the Sentencing Act applies. The section treats as an aggravating factor the vulnerability of the victim because of age or health or any other factor known to the offender. Offending will be more serious the younger the child and the greater the age gap between the victim and the offender. Disparity in age between the victim and the offender may well be a factor in assessing the extent of vulnerability.',
              '[43] The other situations in which a victim may be considered vulnerable are varied: mental impairment or physical frailty are two examples, a victim who is the subject of a protection order to protect him or her from the offender is another.',
            ],
          },
          {
            heading: 'Harm to the victim',
            paragraphs: [
              '[44] Harm is inherent in the offending. The more harmful the offending, the more serious it is. Physical harm, for example cuts and bruising, are indications that the offending is more serious. Similarly, if the offending involves unprotected sex with the risk of pregnancy or infection or if it has those effects these factors indicate more serious offending. This is not to downplay the psychological and other non-physical harm, for example escalation of psychological problems and restrictions on the ability to go about the victim\'s daily life. The impact on others, such as children, other family members or those providing care and support to the victim is also relevant.',
            ],
          },
          {
            heading: 'Multiple offenders',
            paragraphs: [
              '[45] The fact that the violation involves more than one offender acting together is a factor increasing culpability. The role and extent of participation of the various offenders will of course be relevant in assessing an individual\'s culpability.',
              '[46] Gang rape may fall within the highest rape band despite the absence of other aggravating factors.',
            ],
          },
          {
            heading: 'Scale of offending',
            paragraphs: [
              '[47] More than one incident or extended abuse over a prolonged period of time is more serious as is repeated rape or sexual violation and associated degradation or indignities. Examples of degradation include videotaping or photographing the offending and offending against the victim whilst others are present. Cruelty or callousness also make the offending more serious (s 9(1)(e) of the Sentencing Act includes "particular cruelty" as an aggravating factor).',
              '[48] Offending against multiple victims is another aspect which increases the culpability of the offender. This can be addressed by recognising that prolonged offending involving multiple victims, particularly in the familial context, warrants higher starting points in rape band four, and by application of the provisions relating to cumulative and concurrent sentences and the totality principle. Where there are multiple victims over a number of years, the 20-year maximum for one offence is not the maximum available sentence able to be imposed for the series of offending.',
              '[49] On the other hand, a realistic view is to be taken where a number of offences are committed as part and parcel of what is, in substance, a single incident. What is required is a common sense approach to overall culpability.',
            ],
          },
          {
            heading: 'Breach of trust',
            paragraphs: [
              '[50] Breach of trust is recognised in s 9(1)(f) of the Sentencing Act as a factor which increases the culpability of the offender. Offending within the familial relationship involves a breach of trust and offending by a parent against his or her child is particularly serious. Other relationships of trust may arise where a person has assumed some responsibility in relation to the victim, for example, the neighbour who regularly babysits the child or the school sports coach.',
            ],
          },
          {
            heading: 'Hate crime',
            paragraphs: [
              '[51] Hate crimes against specific ethnic, religious or sexual groups may well warrant specific mention in the guidelines as a factor increasing seriousness. These matters can be a factor in sexual crime and are recognised in s 9(1)(h) of the Sentencing Act as an aggravating factor.',
            ],
          },
          {
            heading: 'Degree of violation',
            paragraphs: [
              '[52] Seriousness increases as the degree of violation increases, for example, use of a finger as opposed to a fist, or very brief penetration as opposed to a lengthy assault. Further, the more force involved in the actual violation the more serious the offending will be.',
            ],
          },
          {
            heading: 'Mistaken belief in consent',
            paragraphs: [
              '[53] There is authority for the proposition that to commit rape under a mistaken but unreasonable belief that there was consent is not a mitigating factor: *R v Hill*. It does not follow that the offender\'s culpability may be different in such a case. As in other areas of the criminal law, negligent acts are seen as less serious than deliberate acts. If the belief is grossly unreasonable that will not avail the offender. There may, however, be cases where it is plain that the belief, while unreasonable, was genuine, and this factor may reduce culpability.',
            ],
          },
          {
            heading: 'Consensual sexual activity immediately before the offending',
            paragraphs: [
              '[54] Individuals have the right to choose the level of sexual activity in which they wish to participate and sexual partners are obliged to respect their wishes. It has been recognised that, depending on the circumstances, culpability may be diminished where there was consensual sexual activity immediately prior to the offending.',
              '[55] The SEU draft guidelines follow the *R v A* approach in that they suggest that in limited circumstances seriousness may decrease where the offender and an adult victim have engaged in consensual sexual activity just before the offending. The SEU indicated that the relevance of this factor depends on the circumstances including the type of earlier consensual activity, the similarity to what comprised the sexual violation, and the timing. The SEU draft guidelines would also make it plain that the seriousness of the non-consensual act may outweigh any mitigating effect of the prior consensual activity.',
              '[56] The United Kingdom guidelines take a similar approach noting first that all of the non-consensual offences:',
              { text: '...involve a high level of culpability on the part of the offender, since that person will have acted either deliberately without the victim\'s consent or without giving due consideration to whether the victim was able to or did, in fact, consent.', quote: true },
              '[57] The United Kingdom guidelines go on to say that planning an offence suggests a higher level of culpability than "an opportunistic or impulsive offence". The guidelines continue:',
              { text: '2.20 In *Millberry*, the Court of Appeal established that the offender\'s culpability in a case of rape would be \'somewhat less\' in cases where the victim had consented to sexual familiarity with the offender on the occasion in question than in cases where the offender had set out with the intention of committing rape.', quote: true },
              { text: '2.21 Save in cases of breach of trust or grooming, an offender\'s culpability may be reduced if the offender and victim engaged in consensual sexual activity on the same occasion and immediately before the offence took place. Factors relevant to culpability in such circumstances include the type of consensual activity that occurred, similarity to what then occurs, and timing. However, the seriousness of the non-consensual act may overwhelm any other consideration.', quote: true },
              '[58] The Crown opposed the inclusion of this factor as a mitigating feature primarily on the ground that it undermined the non-consensual nature of the violation and so reduced its seriousness. Ms Aikman supported the United Kingdom and SEU approach essentially on the basis there may be a correlation with lack of premeditation.',
              '[59] This is a difficult and controversial issue. On balance for the reason advanced by Ms Aikman we adopt the SEU\'s approach. This has been the law in New Zealand at least since *R v A*. Further, after extensive consultation, this is the position adopted by both the United Kingdom and the SEU.',
              '[60] We do not envisage that this factor will have a great deal of impact in many cases. The focus is on assessing the seriousness of the offending. The sentencing judge has to proceed on the basis that the act constituting the offence was non-consensual or the belief in consent unreasonable. The totality of the behaviour comprising the sexual violation then has to be considered.',
            ],
          },
          {
            heading: 'Offending against person with whom offender is in or has been in a relationship',
            paragraphs: [
              '[61] Culpability is not reduced by any sense of entitlement associated with a current or previous relationship. There is no separate regime for sexual violation of a spouse or partner or those who have previously been in a relationship.',
            ],
          },
          {
            heading: 'The views of the victim',
            paragraphs: [
              '[62] To what extent should sentencing be influenced by the views of the victim? This arises most acutely where the victim is seeking a lenient sentencing response.',
              '[63] Where sexual offending occurs within a family or social group, victims are frequently under pressure either not to involve the criminal justice system or to withdraw from it. Defying this pressure can have adverse consequences in terms of family or social rifts and resulting ostracism. The circumstances of the present case, discussed at [140] below in which C has suffered as a result of the fracturing of the wider family, are not untypical. Unsurprisingly, judges often treat victims\' calls for leniency with caution, seeing them as likely to be the result of illegitimate family or social pressure. Giving effect to such calls may lead to increased pressure on other victims. Judges are required to treat like cases alike. (See s 8(e) of the Sentencing Act 2002.)',
              '[64] On the other hand, it is not easy to see why a judge should ignore a claim by victims that the harm suffered was minimal, at least where the judge is satisfied that illegitimate pressure has not been brought to bear on the victim. To do so would be patronising. As well, disregarding a victim\'s view in this context is likely to reduce the number of cases of rape which are prosecuted. No general rule can be set out. Judges will need to look at each case keeping in mind that some calls for leniency are a result of pressure. In addition, crime is a public wrong and so the victim\'s views are a factor that, like others, normally cannot overwhelm the outcome.',
            ],
          },
        ],
      },
    ],
  },
];

export const AUTHORITIES = [
  {
    id: 'guilty-plea',
    title: 'Guilty Plea',
    case: {
      name: 'Hessell v R',
      citation: '[2010] NZSC 135; [2011] 1 NZLR 607',
      url: 'https://www.courtsofnz.govt.nz/assets/cases/2010/2010-NZSC-135.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[62] Guilty pleas are often the result of understandings reached by accused and prosecutors on the charges faced and facts admitted. To give the same percentage credit invariably for an early guilty plea in sentencing without regard to the circumstances can amount to giving a double benefit. For example if the Crown agrees to accept a plea to manslaughter and drops a charge of murder in relation to offending, the acceptance of the plea can be a concession in itself. If the full credit for an early plea is then also given, the sentence may not properly reflect the offending. The only way in which the many variable circumstances of individual cases which are relevant to a guilty plea can properly be identified is by requiring their evaluation by the sentencing judge, and allowing that judge scope in light of the conclusion he or she reaches to give the most appropriate recognition of the guilty plea in fixing the sentence.',
          { text: '[...]', note: true },
          '[74] The credit that is given must reflect all the circumstances in which the plea is entered, including whether it is truly to be regarded as an early or late plea and the strength of the prosecution case. Consideration of all the relevant circumstances will identify the extent of the true mitigatory effect of the plea.',
          '[75] The reduction for a guilty plea component should not exceed 25 per cent. That upper limit reflects the fact that remorse is dealt with separately. Whether the accused pleads guilty at the first reasonable opportunity is always relevant. But when that opportunity arose is a matter for particular inquiry rather than formalistic quantification. A plea can reasonably be seen as early when an accused pleads as soon as he or she has had the opportunity to be informed of all implications of the plea.',
          '[76] At the other end of the range, there may be cases in which there are significant benefits from a plea, warranting a sentence reduction, even though the plea comes very late. After a trial has commenced some real justification should be required before any allowance is made but there are from time to time instances where an allowance is justified.',
        ],
      },
    ],
  },
  {
    id: 'addiction',
    title: 'Addiction',
    case: {
      name: 'Zhang v R',
      citation: '[2019] NZCA 507; [2019] 3 NZLR 648',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2019/507.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[147] Addiction should only be relevant where it is causative of the offending, and should not be treated as having mitigating effect in cases where the offender operated above street level or engaged in self-sufficient dealing. Non-causative addiction will be of little mitigatory relevance, as is the case with a non-contributory mental health condition. Commercial dealing is likely to be inconsistent with the impairment of the ability to exercise rational choice, which is what diminishes culpability and justifies discounting the sentence. But we would not exclude the possibility of a case in which that impairment co-exists with more substantial offending. Furthermore, addiction is relevant in a second way unrelated to the choice made to offend: that is, in potentially rendering a term of imprisonment more severe (but not necessarily, if addiction treatment programmes are available). Each aspect is a matter for the sentencing judge to have regard to.',
          { text: '[...]', note: true },
          '[149] Sixthly, we consider addiction may logically give rise to a discount of up to 30 per cent of the sentence depending on the extent to which it mitigates moral culpability for the offending. There is we acknowledge a degree of arbitrariness in that figure, and it can be indicative only. It is not to be regarded as an absolute upper limit. In some cases, a sentencing judge may well have grounds to conclude that there is no material difference between the mitigating impact of the addiction presented and a serious mental health disorder. In such a case a greater discount could not be condemned as unduly lenient, although clear reasons ought to be given for that course being taken.',
        ],
      },
    ],
  },
  {
    id: 'youth',
    title: 'Youth',
    case: {
      name: 'Churchward v R',
      citation: '[2011] NZCA 531',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2011/531.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[Full discussion at [76] to [93]]',
          '[77] Youth has been held to be relevant to sentencing in the following ways:',
          '(a) There are age-related neurological differences between young people and adults, including that young people may be more vulnerable or susceptible to negative influences and outside pressures (including peer pressure) and may be more impulsive than adults.',
          '(b) The effect of imprisonment on young people, including the fact that long sentences may be crushing on young people.',
          '(c) Young people have greater capacity for rehabilitation, particularly given that the character of a juvenile is not as well formed as that of an adult.',
          { text: '[...]', note: true },
          '[84] As was noted in *R v Rapira*, however, where the offending is grave, the scope to take account of youth may be greatly circumscribed. This is because the very factors that may lead young people to offend may cause concerns about future public safety. There is also the need for denunciation and deterrence, both specific to the offender and general. This Court summarised the relevance of youth to sentencing in *Pouwhare v R* as follows:',
          { text: '...the fact that an offender is a young person can sometimes be given radical effect on sentence, unconstrained by any normative percentage, even where offending is serious. In other cases that is not possible. The young age of the offender cannot be accorded presumptive, let alone paramount, weight. The objective seriousness of the offending, the young person\'s part in it, anything aggravating and otherwise mitigating must also be weighed.', quote: true },
        ],
      },
    ],
  },
  {
    id: 'em-bail',
    title: 'Time on EM Bail',
    case: {
      name: 'Paora v R',
      citation: '[2021] NZCA 559',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2021/559.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[42] It has long been accepted that the fact a defendant has been remanded on bail (the length of time a defendant has been on bail, the conditions of the bail and the defendant\'s compliance) may affect sentence. Compliance evidences rehabilitative success or potential. And, while bail conditions are imposed for preventive reasons, a strict curfew may constrain liberty sufficiently to require recognition if the sentence is to be proportional in all the circumstances of the offence and the offender. In its 2000 judgment in *Faisandier v R*, this Court remarked that it had not been the practice to make adjustments to prison sentences for periods spent on bail on remand, even under restrictive bail conditions, but recognised that some allowance could be made, as a matter of overall impression, having regard to the duration and restrictive nature of what amounted to electronically monitored house arrest.',
          { text: '[...]', note: true },
          '[45] We make several points about s 9(2)(h):',
          '(a) it is to be contrasted with s 90 of the Parole Act 2002 in which the legislature has prescribed one-for-one credit for time spent on custodial remand. Section 30Q of the Bail Act 2000 provides that a defendant on EM bail is not in custody.',
          '(b) the legislature has singled out EM bail for mandatory consideration, indicating that the State\'s ability to monitor compliance is important.',
          '(c) the legislation does not preclude credit for other restrictive conditions of bail; and',
          '(d) credit for EM bail, or other restrictive bail conditions, remains an evaluative decision for the sentencing court.',
          { text: '[...]', note: true },
          '[53] There is no guideline about the discount which should be afforded to a defendant for time spent on EM bail in New Zealand, although percentages ranging between 30 and 50 per cent are often used, and this Court recently noted that an allowance of up to 50 per cent is not uncommon. That is not an upper limit. As we have explained, the assessment of credit is an evaluative decision to be made having regard to the restrictiveness and duration of EM bail conditions in each case. Courts have sometimes considered it appropriate to award a discount of more than 50 per cent of time spent on EM bail to reflect its restrictive conditions.',
        ],
      },
    ],
  },
  {
    id: 'uplift-previous-convictions',
    title: 'Uplift for Previous Convictions',
    case: {
      name: 'Orchard v R',
      citation: '[2019] NZCA 529; [2020] 2 NZLR 37',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2019/529.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[39] Section 9(1)(j) of the Sentencing Act 2002 requires a court to take into account the number, seriousness, date, relevance, and nature of any previous convictions of the offender and of any convictions for which the offender is being sentenced or otherwise dealt with at the same time. In addition, any uplift for prior offending must take into account s 26(2) of the New Zealand Bill of Rights Act 1990, which provides that no one who has been finally convicted of an offence shall be punished for it again. Previous convictions are relevant as an indicator of character and culpability, or because they show the need for a greater deterrent response, or as an indicator of risk of reoffending. The second and third considerations may call for an uplift at the second stage of the *Taueki* methodology.',
        ],
      },
    ],
  },
  {
    id: 'sentencing-approach',
    title: 'Sentencing Approach',
    case: {
      name: 'Moses v R',
      citation: '[2020] NZCA 296; [2020] 3 NZLR 583',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2020/296.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[46] A two-step methodology should be used:',
          '(a) the first step, following *Taueki*, calculates the adjusted starting point, incorporating aggravating and mitigating features of the offence;',
          '(b) the second step incorporates all aggravating and mitigating factors personal to the offender, together with any guilty plea discount, which should be calculated as a percentage of the adjusted starting point.',
          '[47] Because the court fixes all second-step uplifts and discounts by reference to the adjusted starting point under this methodology, it makes no difference to sentence length if the guilty plea discount is the last step in the sentence calculation. However, the sentencing judge should still quantify a guilty plea discount, for several reasons: the discount is justified in substantial part by systemic and social considerations distinct from the offender\'s personal circumstances; the discount must be transparent, which aids predictability; and the calculation allows others, including the offender and the victim, to identify the sentence that would have been imposed but for the plea. It should be apparent that the discount does not exceed the maximum of 25 per cent of the adjusted starting point.',
          '[48] This methodology does not preclude credit for some mitigating factors being assessed by reference to what would otherwise be the end sentence (that is, the product of step 2), where that is appropriate. For example, credit for time spent on electronically monitored bail is commonly calculated in that way.',
          '[49] Guideline judgments such as this one promote transparency of analysis and principled consistency of outcome, so furthering objectives of the Sentencing Act. The ultimate question, however, is not whether an applicable guideline judgment is followed but whether the sentence is a just one in all the circumstances. When answering it the sentencer should stand back and consider the circumstances of offence and offender against the applicable sentencing purposes, principles and factors.',
        ],
      },
      {
        heading: null,
        case: {
          name: 'R v Taueki',
          citation: '[2005] NZCA 175',
          url: 'https://beta.nzlii.org/nz/cases/NZCA/2005/174.pdf',
        },
        paragraphs: [
          '[8] [...] The modern approach to sentencing uses as a reference point a starting point taking into account aggravating and mitigating features of the offending, but excluding mitigating and aggravating features relating to the offender. Put another way, a starting point "is the sentence considered appropriate for the particular offending (the combination of features) for an adult offender after a defended trial": *R v Mako* [2000] 2 NZLR 170 at [34].',
          '[42] As the Court noted in *Mako*, these illustrations are intended for guidance only, and to minimise the need to refer to the large number of earlier sentencing decisions. But the suggested bands and starting points should be used flexibly, and where any particular feature or combination of features has some unusual character, the starting point should be adjusted to reflect that. Sentencing Judges will also need to exercise judgement in assessing the gravity of each aggravating feature. The features of the offending in each case must be carefully assessed in order to establish a starting point which properly reflects the culpability inherent in the offending. Where there are multiple offenders with different levels of involvement in the offending, the actual culpability of each offender will need to be assessed. However, there is no requirement to draw fine distinctions.',
          '[43] To achieve the objective of greater consistency, it will be necessary for sentencing Judges to articulate in a transparent way the basis on which they have determined the appropriate band, and the factors which have guided their assessment of the starting point. It will be important that the starting point is identified before attention is turned to the personal circumstances of the offender, because the starting point will provide the basis for assessing the consistency of one case with another.',
          '[44] Once a starting point has been determined in accordance with the above criteria, it is then necessary to determine whether the aggravating or mitigating factors relating to the offender\'s particular personal circumstances require that the actual sentence should be higher or lower than the starting point. This involves consideration of the factors mentioned in ss 8 and 9 of the Sentencing Act which relate to the offender, as opposed to the offending, as well as any other matters relevant to the personal circumstances of the offender. The most significant mitigating factor will normally be an early guilty plea, for which a substantial reduction from the starting point will normally be justified.',
        ],
      },
    ],
  },
  {
    id: 'applying-guideline-judgments',
    title: 'Applying Guideline Judgments',
    case: {
      name: 'L v R',
      citation: '[2021] NZCA 297',
      url: 'https://beta.nzlii.org/nz/cases/NZCA/2021/297.pdf',
    },
    sections: [
      {
        heading: null,
        paragraphs: [
          '[18] There has been no change to the maximum sentence or other legislative change since *R v AM* (CA27/2009) was decided that would affect the appropriate starting point for this type of offending. The guideline judgment for sentencing purposes in this context remains *R v AM* (CA27/2009), not other cases which seek to apply it. There is a risk of upward sentencing creep and a lack of consistency if decisions applying *R v AM* (CA27/2009) are used by judges to guide the starting point instead of applying the guidance given in *R v AM* (CA27/2009) itself.',
        ],
      },
    ],
  },
];
