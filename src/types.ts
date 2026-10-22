export interface CarBullet {
  label: string;
  value: string;
}

export interface CarTimelineItem {
  id: string;
  step: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  costBadge: string;
  monthlyImpact: string;
  imageSrc: string;
  altText: string;
  fullStory: string;
  hardLesson: string;
  bullets?: CarBullet[];
}

export interface CalculatorState {
  mode: 'financing' | 'leasing';
  quotedPayment: number;
  totalFinanced: number;
  interestRate: number;
  loanLengthMonths: number;
  upfrontCash: number;
  insurancePremium: number;
  insurancePeriod: 'month' | '6months';
  annualDmv: number;
  monthlyFuel: number;
  annualUpkeep: number;
  monthlyParkingTolls: number;
  // Advanced checks
  hasTradeIn: boolean;
  oldLoanBalance: number;
  tradeInOffer: number;
  monthlyIncome: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FrameworkStep {
  number: string;
  title: string;
  subtitle: string;
  question: string;
  whyItMatters: string;
  quote?: string;
}
