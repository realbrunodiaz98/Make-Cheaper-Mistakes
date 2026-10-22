import { CarTimelineItem, FaqItem, FrameworkStep } from '../types';

export const CHECKOUT_URL =
  'https://whop.com/make-cheaper-mistakes-than-i-did/don-t-make-my-69-000-mistake/';

export const TALLY_URL = 'https://tally.so/r/68gDNN';

export const CAR_TIMELINE: CarTimelineItem[] = [
  {
    id: 'bmw-530i',
    step: '01',
    year: 'Early 2022',
    title: 'The "Free" BMW 530i',
    subtitle: 'A gift that carried thousands in hidden maintenance',
    description:
      'Income: ~$2,000/mo delivering food. A "free" gift requiring $2,000 in immediate repairs. Traded in for $1,500 instead of selling privately, letting emotion burn potential capital.',
    bullets: [
      { label: 'Income', value: '~$2,000/mo delivering food' },
      { label: 'The Trap', value: 'A "free" gift requiring $2,000 in immediate repairs.' },
      { label: 'The Mistake', value: 'Traded it in for $1,500 for a new car instead of selling it privately, letting emotion burn potential capital.' },
      { label: 'Takeaway', value: 'I had options, but I let frustration and emotion dictate a major financial decision.' }
    ],
    costBadge: 'Traded for $1,500 credit',
    monthlyImpact: 'Started the financing domino effect',
    imageSrc: '/assets/aistudio/1._Gift_2005_BMW_530i_a8aacade.jpg',
    altText: 'Silver 2005 BMW 530i sedan parked on the street',
    fullStory:
      'When I arrived in Los Angeles, I was scraping by on $2,000 a month delivering food on a borrowed motorcycle. My uncle generously gifted me his older BMW 530i. After sinking $2,000 into constant repairs within just a few months (no shit, it was a bimmer), I made a catastrophic financial decision. Instead of a pragmatic exit, I took a $1,500 trade-in on the BMW and financed a brand-new Kia Niro on a gig-worker\'s income. That single mistake started a brutal financing domino effect—and that is where my real financial education begins.',
    hardLesson:
      'More importantly, convenience is expensive. I gave that BMW away for pennies at the Kia dealer when I could have sold it privately for substantially more. I had options, but I let frustration and emotion dictate a major financial decision.'
  },
  {
    id: 'first-niro',
    step: '02',
    year: 'Mid 2022',
    title: 'Financed First Kia Niro',
    subtitle: '$467/month felt affordable on paper',
    description:
      'Income: ~$2,000/mo. The Illusion: $467/mo base payment. The Reality: >$820/mo actual carry. Committed over 40% of income to a depreciating asset without understanding payment to income ratio.',
    bullets: [
      { label: 'Income', value: '~$2,000/mo.' },
      { label: 'The Illusion', value: '$467/mo base payment (Felt affordable).' },
      { label: 'The Reality', value: '>$820/mo actual carry (Fuel + insurance that my uncle was paying because I couldn\'t afford it).' },
      { label: 'The Mistake', value: 'Committed over 40% of my income to a depreciating asset without understanding the payment to income ratio.' }
    ],
    costBadge: '$467 / month note',
    monthlyImpact: 'True minimum cost: >$820 / month',
    imageSrc: '/assets/aistudio/2._Financed_2022_Blue_Niro_ce406dc2.jpg',
    altText: 'Deep blue Kia Niro hybrid parked on a residential street',
    fullStory:
      "My brain locked onto the $467/month payment. The reality? I was making so little that I couldn't even afford to insure the vehicle. My uncle had to step in and pay my premiums for the first couple of months. Because I was delivering food, I was driving about 3,000 miles a month. Even with the hybrid getting 50 MPG, I was burning 60 gallons of fuel a month during the peak of the 2022 Los Angeles gas price crisis. I was spending roughly $360 a month just to keep it on the road. My true minimum monthly cost was over $800. The fundamental flaw wasn't the car; it was that I was emotionally compromised by the BMW's repairs, let the dealer leverage my desperation, and signed a contract I mathematically couldn't afford in the first place. I only had the car from May to November 2022 before it got totaled. I didn't even keep it long enough to pay the annual DMV fees, but the crash set the stage for an even more catastrophic financial decision.",
    hardLesson:
      "Lesson 02: The Payment Isn't The Cost. Dealers sell the monthly teaser; you pay the full iceberg. Never negotiate a trade-in when you are emotionally exhausted, and never finance a vehicle that requires a family member to bail out your basic operating expenses."
  },
  {
    id: 'totaled-crash',
    step: '03',
    year: 'Late 2022',
    title: 'The Collision & Panic Trigger',
    subtitle: 'Six months later: totaled, panic, and an urgent deadline',
    description:
      'Income: ~$4,000/mo. The Trap: Zero savings and total dependency on vehicle for full-time income. Sprinted to dealership in panic after crash, buying with $0 down.',
    bullets: [
      { label: 'Income', value: '~$4,000/mo.' },
      { label: 'The Trap', value: 'Zero savings and total dependency on a vehicle for full-time income.' },
      { label: 'The Mistake', value: 'Sprinted to the dealership in a panic after a crash, buying with $0 down just to get back on the road.' },
      { label: 'Takeaway', value: 'Never sign a multi-year contract to escape a two-week emergency.' }
    ],
    costBadge: 'Totaled Loss',
    monthlyImpact: 'Triggered $732/mo panic contract',
    imageSrc: '/assets/aistudio/3._Totalled_2022_Blue_Niro_0057ae00.jpg',
    altText: 'Front-end collision damage on blue Kia Niro with crushed hood and headlight',
    fullStory:
      "When the first Niro was totaled in November 2022, I had zero breathing room to think. In my head, all I could hear was, 'I need a car right now.' Food delivery wasn't a side hustle; it was my full-time livelihood. No car meant no income. I was without a vehicle for a couple of weeks, and instead of using that time to map out a healthier financial path, desperation completely blinded me. Having absolutely zero savings, I walked right back into that exact same Kia dealership in the second week of December. I let pure panic make the worst financial decision of my life: I drove off in a fully-loaded, brand-new Kia Niro with $0 down. Because I brought no cash to the table, my monthly payment skyrocketed to a suffocating $732. Even though my income had increased to $4,000 a month, committing that much capital just to the base payment—before factoring in LA insurance and fuel for full-time driving—was absolute financial self-sabotage.",
    hardLesson:
      "Lesson 01: The Escape Decision. Never sign a multi-year contract just to escape this week's emotional panic. When survival mode kicks in, logic disappears."
  },
  {
    id: 'second-niro',
    step: '04',
    year: 'Early 2023',
    title: 'The Second Niro + Defect',
    subtitle: '$732/month — a $265 monthly increase under pressure',
    description:
      'Base Payment: $732/mo. Defective car caused missed work days, tanking gig-income while fixed payment remained rigid. Tried to abandon car at dealer to escape contract.',
    bullets: [
      { label: 'Base Payment', value: '$732/mo.' },
      { label: 'The Trap', value: 'A defective car caused missed work days, tanking my variable gig-income while the fixed monthly payment remained rigid.' },
      { label: 'The Mistake', value: 'Tried to physically abandon the car at the dealer to escape the contract, trapping family in the fallout while waiting 17 months for a settlement check.' }
    ],
    costBadge: '$732 / month note',
    monthlyImpact: 'Payment jumped +$265/mo',
    imageSrc: '/assets/aistudio/4._Financed_2023_Green_Niro_cbac4d86.jpg',
    altText: 'Sage green 2023 Kia Niro hybrid parked under lights in parking lot',
    fullStory:
      "Just days after I signed the paperwork, this expensive new car started making weird noises and failing to accelerate safely. Because food delivery was my full-time job, this car was my sole income-producing tool. Every time I brought it in for inspection, I lost days of work. I was paying $732 every single month for a defective car I couldn't drive reliably. I was banking on the settlement check from the first totaled Niro to bail me out, but that money never came when I needed it. By the end of September 2023, completely burned out and financially bleeding, I made another emotional, disastrous move: I got a Tesla. A few days later, feeling helpless, angry, and trapped, I walked away and left the Niro at the dealer thinking the debt would disappear. But contracts do not care about your frustration. I quickly realized abandoning the car didn't erase the loan—it just meant I was going to ruin my uncle, who was tied into this mess. To make matters worse, that settlement check I was counting on? It took 17 months to arrive, finally showing up in April 2024, and it was nowhere near enough to fix the damage I had done.",
    hardLesson: 'Lesson 06: Money Owed Is Not Money You Have. My accident settlement took 17 months to arrive—bills never pause.'
  },
  {
    id: 'tesla-model-3',
    step: '05',
    year: 'Late 2023',
    title: 'The Leased Tesla Model 3',
    subtitle: 'Escaping the Kia misery right into a second car payment',
    description:
      'Base Payment: $600/mo. Reality: $1,050/mo actual carry. Tried to solve mechanical stress by leasing new liability that consumed >25% of gross income.',
    bullets: [
      { label: 'Base Payment', value: '$600/mo.' },
      { label: 'The Reality', value: '$1,050/mo actual carry (insurance and charging).' },
      { label: 'The Mistake', value: 'Tried to solve mechanical stress by leasing a new liability that consumed over 25% of my gross income.' },
      { label: 'Takeaway', value: "A new car doesn't erase broken math." }
    ],
    costBadge: '$600 / month lease',
    monthlyImpact: 'Total carry: $1,050 / month',
    imageSrc: '/assets/aistudio/5._Leased_2023_Model_3_b90c541f.jpg',
    altText: 'Gray Tesla Model 3 plugged in and charging at a Tesla Supercharger stall',
    fullStory:
      "Five days after making my last Kia payment, I leased a Tesla Model 3 for $600/month. It felt like liberation after the defective Niro, but it was just a shiny new liability. I used it as my daily driver for food delivery, adding $250 for insurance and roughly $200 in charging fees. My total monthly carry was $1,050. At the time, my gross income was around $4,000 a month, and I had just moved out in June 2023, taking on $1,100 in rent for the very first time. I thought I was finally solving my transportation crisis, but mathematically, I was spending over 25% of my gross income just to keep the tool I needed to do my job on the road. I was desperate for reliability, but I bought it at a price point that left me zero margin for error.",
    hardLesson: 'Lesson 04: Fixed Costs Are The Real Leak. Skipping $5 coffees cannot offset a $1,200/month structural transportation leak.'
  },
  {
    id: 'kia-forte',
    step: '06',
    year: '2024',
    title: 'The Negative Equity Forte',
    subtitle: 'Trading underwater debt into another $650/month note',
    description:
      'Base Payment: $650/mo (Phantom debt). Carried $1,900/mo in vehicle costs (Tesla + Forte) and tried to patch with unprofitable Turo side-hustle.',
    bullets: [
      { label: 'Base Payment', value: '$650/mo (Phantom debt)' },
      { label: 'The Trap', value: "Rolled the defective Niro's massive negative equity into an economy car loan under a friend's name." },
      { label: 'The Mistake', value: 'Carried $1,900/mo in total vehicle costs (Tesla + Forte) and tried to patch the bleeding with a stressful, unprofitable Turo side-hustle.' },
      { label: 'The Result', value: 'Surrendered the vehicle, betrayed a friend\'s financial trust, and ended up completely broke with more credit card debt than ever.' }
    ],
    costBadge: '$650 / month note',
    monthlyImpact: 'Burned ~$2,000/mo on two vehicles',
    imageSrc: '/assets/aistudio/6._Financed_2023_Forte__211e3f5d.JPG',
    altText: 'Black Kia Forte sedan parked along residential curb in Southern California',
    fullStory:
      "The green Kia Niro didn't just disappear. Because I was buried in negative equity, a friend took out a loan in their name to help me trade that underwater debt into a Kia Forte. Rolled negative equity bloated an economy car payment to $650/mo. I was morally and financially obligated to pay that note, plus $200 in insurance. To stop the bleeding, I put the Forte on Turo. It was a complete disaster—unprofitable, intensely stressful, and mathematically doomed. I carried two car notes and insurances for almost a year. Between the Tesla and the Forte, I was burning nearly $2K a month on vehicles alone while making $4,000. Eventually, the financial weight broke me. I surrendered the Forte note, betrayed my friend's financial trust and ended up broke with more credit card debt than ever.",
    hardLesson: 'Lesson 05: Tracking Isn’t The Same As Knowing. I tracked every dollar backward, but had no system to audit my future commitments.'
  }
];

export const SIX_EXPENSIVE_TRAPS = [
  {
    number: '01',
    title: 'The Escape Decision',
    subtitle: 'Trading a temporary emotional crisis for 60 months of debt',
    question: 'Am I solving the actual transportation problem, or am I trying to escape how this situation feels right now?'
  },
  {
    number: '02',
    title: "The Payment Isn't The Cost",
    subtitle: 'The 50% invisible iceberg dealerships hide',
    question: 'Can I truly afford all the other costs attached to this monthly payment, like insurance, annual registration, fuel, and maintenance?'
  },
  {
    number: '03',
    title: "Free Isn't Free",
    subtitle: '$0 purchase price with thousands in hidden costs',
    question: 'What will this vehicle actually cost me to insure, maintain, and fuel over the next 24 months?'
  },
  {
    number: '04',
    title: 'Fixed Costs Are The Real Leak',
    subtitle: "Cutting $5 coffees won't fix a structural $900/mo anchor",
    question: 'How much of my paycheck is going straight to this car payment before I even have a chance to buy groceries?'
  },
  {
    number: '05',
    title: "Tracking Isn't The Same As Managing",
    subtitle: 'Looking backward at expenses gives zero control over your future',
    question: 'Am I actually managing my future cash flow, or am I just using an app to document my past financial mistakes?'
  },
  {
    number: '06',
    title: 'Expected Money Is Not Money You Have',
    subtitle: 'The danger of funding vehicle payments with anticipated funds',
    question: 'If the bonus, settlement, raise, or refund I am expecting never arrives, can I still easily handle this vehicle?'
  }
];

export const SEVEN_FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    number: '01',
    title: 'STOP',
    subtitle: 'Impose an emotional circuit breaker',
    question: 'Would I make this exact same decision if I felt completely calm and had 30 days to think?',
    whyItMatters:
      'Never sign when you are angry because your car broke, panicked because you need to get to work, excited because you love the smell of a new car, or pressured by a salesperson\'s "today only" discount.',
    quote: 'Your emotions aren’t proof that the decision is wrong. But they are a mandatory reason to slow down.'
  },
  {
    number: '02',
    title: 'NAME THE ACTUAL PROBLEM',
    subtitle: 'Separate transit utility from lifestyle desire',
    question: 'What specific problem am I actually trying to solve right now?',
    whyItMatters:
      '"I need reliable transportation to get to work" is an entirely different problem than "I need this specific $38,000 crossover." Once you isolate the real requirement, the number of viable solutions explodes.',
    quote: 'Don’t start with the solution. Start with the problem.'
  },
  {
    number: '03',
    title: 'LIST THREE OTHER OPTIONS',
    subtitle: 'Break the false binary trap',
    question: 'What are three completely different ways to solve this problem without signing this contract?',
    whyItMatters:
      'Repair what you have. Buy a $5,000 cash beater. Borrow a family vehicle for 3 weeks. Rent a car for 10 days while you look. Take public transit. The goal isn’t that the alternatives are perfect; the goal is breaking the illusion that "this is my only choice."',
    quote: 'This exercise is intentionally annoying. Do it anyway.'
  },
  {
    number: '04',
    title: 'CALCULATE THE REAL COST',
    subtitle: 'Run your own numbers, not the dealer\'s teaser',
    question: 'What is the true monthly carrying drain when insurance, DMV fees, gas/charging, and upkeep are added?',
    whyItMatters:
      'Include upfront drive-off fees, registration renewals, maintenance reserves, interest charges, and rolled negative equity. You don\'t need 47 formulas; you just need an honest tally.',
    quote: 'You don\'t need perfect numbers. You need a more honest number than the monthly payment.'
  },
  {
    number: '05',
    title: 'CHECK THE FUTURE',
    subtitle: 'Stress-test downside scenarios',
    question: 'If my income stays flat or drops 15% for the next 12 months, can I comfortably carry this car?',
    whyItMatters:
      'What happens if the money you expect never arrives? What happens if you hate the car in 8 months? Who else in your family or friend circle could be negatively impacted if you have to default or surrender?',
    quote: 'Don’t only calculate the best-case scenario. Think about the version where life doesn’t cooperate.'
  },
  {
    number: '06',
    title: 'WAIT',
    subtitle: 'The mandatory cooling period',
    question: 'What happens if I step out of the dealership and wait before signing anything?',
    whyItMatters:
      'If the answer is "nothing bad happens," you do not need to sign today. Salespeople have monthly quotas and want your signature today. Your financial future does not.',
    quote: 'A salesperson may want your decision today. Your financial future doesn’t.'
  },
  {
    number: '07',
    title: 'DECIDE',
    subtitle: 'Make an intentional decision with eyes wide open',
    question: 'Am I choosing this with full awareness of the true costs, risks, and alternatives?',
    whyItMatters:
      'Buy it, lease it, buy a cheaper car, fix your old one, or walk away completely. If you choose to proceed, you do so knowingly, not reactively.',
    quote: 'The goal isn\'t to make every decision perfectly. The goal is intentional decisions instead of reactive decisions.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do I access the guide and tools after purchasing?',
    answer:
      'You get instant digital access to one central, locked Notion webpage. The 6 lessons, the 7-step framework, the "Before I Say Yes" form, and the Real Car Cost Calculator all live directly inside that single page. You do not need a paid Notion account to read it or use the tools.'
  },
  {
    question: 'Will this teach me how to negotiate with dealerships and get a cheaper car?',
    answer:
      'No. This is not a "beat the salesman" negotiation course. Dealerships aren\'t your biggest financial risk—your own emotional blind spots, panic, and lack of cash-flow visibility are. This guide is built to fix your internal decision-making process before you ever look at a car.'
  },
  {
    question: 'What if I’m already stuck in a bad car loan or have negative equity?',
    answer:
      'This guide cannot magically erase a legal contract you already signed. However, if you are thinking about trading in that underwater vehicle or rolling negative equity into a new loan, this framework and the embedded calculator will force you to run the true math before you dig the hole any deeper.'
  },
  {
    question: 'Is this formal financial or legal advice?',
    answer:
      'Absolutely not. I am not a financial advisor. I am someone who lost $69,000 making reactive, emotional vehicle decisions and built the framework I wish I had before the first domino fell. This is an educational tool designed to force personal accountability and mathematical clarity.'
  },
  {
    question: 'How does the 30-day money-back guarantee work?',
    answer:
      'Read the guide. Use the framework. Run the numbers on a real decision. If you genuinely don\'t think it was worth the $27 to help you avoid a catastrophic financial mistake, email me within 30 days. I will refund you in full. No hoops, no convincing me, no hard feelings.'
  }
];
