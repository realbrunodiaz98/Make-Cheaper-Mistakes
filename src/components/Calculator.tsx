import React, { useState } from 'react';
import { CalculatorState } from '../types';
import { CHECKOUT_URL } from '../data/content';
import {
  HelpCircle,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';

const INITIAL_STATE: CalculatorState = {
  mode: 'financing',
  quotedPayment: 520,
  totalFinanced: 28000,
  interestRate: 6.9,
  loanLengthMonths: 60,
  upfrontCash: 2500,
  insurancePremium: 210,
  insurancePeriod: 'month',
  annualDmv: 540,
  monthlyFuel: 160,
  annualUpkeep: 900,
  monthlyParkingTolls: 30,
  hasTradeIn: false,
  oldLoanBalance: 0,
  tradeInOffer: 0,
  monthlyIncome: 4500
};

export const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE);
  const [showTradeIn, setShowTradeIn] = useState(false);
  const [showIncome, setShowIncome] = useState(true);
  const [showResale, setShowResale] = useState(false);

  // Negative equity calculation
  const negativeEquity =
    showTradeIn && state.oldLoanBalance > state.tradeInOffer
      ? state.oldLoanBalance - state.tradeInOffer
      : 0;

  // Monthly breakdown
  const monthlyPayment = state.quotedPayment || 0;
  const monthlyInsurance =
    state.insurancePeriod === '6months'
      ? (state.insurancePremium || 0) / 6
      : state.insurancePremium || 0;
  const monthlyDmv = (state.annualDmv || 0) / 12;
  const monthlyFuel = state.monthlyFuel || 0;
  const monthlyUpkeep = (state.annualUpkeep || 0) / 12;
  const monthlyParking = state.monthlyParkingTolls || 0;
  const monthlyNegativeEquity =
    negativeEquity > 0
      ? negativeEquity / (state.loanLengthMonths || 60)
      : 0;

  const totalMonthlyDrain =
    monthlyPayment +
    monthlyInsurance +
    monthlyDmv +
    monthlyFuel +
    monthlyUpkeep +
    monthlyParking +
    monthlyNegativeEquity;

  const annualDrain = totalMonthlyDrain * 12;
  const totalCommitment =
    totalMonthlyDrain * (state.loanLengthMonths || 60) + (state.upfrontCash || 0);

  // Payment vs Invisible bills breakdown
  const paymentShare = totalMonthlyDrain > 0 ? (monthlyPayment / totalMonthlyDrain) * 100 : 0;
  const hiddenShare = 100 - paymentShare;

  // Income burden
  const incomeBurden =
    state.monthlyIncome > 0 ? (totalMonthlyDrain / state.monthlyIncome) * 100 : 0;

  const clearForm = () => {
    setState({
      ...INITIAL_STATE,
      quotedPayment: 0,
      totalFinanced: 0,
      interestRate: 0,
      upfrontCash: 0,
      insurancePremium: 0,
      annualDmv: 0,
      monthlyFuel: 0,
      annualUpkeep: 0,
      monthlyParkingTolls: 0,
      oldLoanBalance: 0,
      tradeInOffer: 0
    });
    setShowTradeIn(false);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#0B0C0E] border-b border-[#242733]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#242733]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B7F] mb-2 font-mono-numbers">
              <span>FREE COMPANION TOOL</span>
              <span aria-hidden="true">·</span>
              <span>ALL-IN COST AUDIT</span>
              <span aria-hidden="true">·</span>
              <span>RUN SPECIFIC NUMBERS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              The Real Car Cost Calculator
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#8E909B] max-w-xl">
              A free tool to plug your numbers on the go, choose between financing and leasing, and see the full picture so you don’t overlook all the hidden costs beyond the advertised monthly note.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            <button
              type="button"
              onClick={clearForm}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#8E909B] hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Inputs Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Mode Selector */}
            <div className="flex items-center gap-2 p-1 bg-[#14161C] border border-[#242733] rounded-lg w-fit">
              <button
                type="button"
                onClick={() => setState({ ...state, mode: 'financing' })}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all font-heading ${
                  state.mode === 'financing'
                    ? 'bg-[#C29B7F] text-[#0B0C0E] shadow-sm'
                    : 'text-[#8E909B] hover:text-white'
                }`}
              >
                Financing (Loan)
              </button>
              <button
                type="button"
                onClick={() => setState({ ...state, mode: 'leasing' })}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all font-heading ${
                  state.mode === 'leasing'
                    ? 'bg-[#C29B7F] text-[#0B0C0E] shadow-sm'
                    : 'text-[#8E909B] hover:text-white'
                }`}
              >
                Leasing
              </button>
            </div>

            {/* Block 01: The offer on the table */}
            <div className="bg-[#14161C] border border-[#242733] rounded-xl p-5 sm:p-6 space-y-4">
              <div className="border-b border-[#242733] pb-3 flex items-center justify-between">
                <div>
                  <span className="font-mono-numbers text-xs font-bold text-[#C29B7F]">01</span>
                  <h3 className="text-base font-bold text-white font-heading inline-block ml-2">
                    The offer on the table
                  </h3>
                </div>
                <span className="text-xs text-[#8E909B]">Dealer contract</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#8E909B] mb-1.5">
                    Quoted monthly payment ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8E909B] font-mono-numbers">$</span>
                    <input
                      type="number"
                      value={state.quotedPayment || ''}
                      onChange={(e) =>
                        setState({ ...state, quotedPayment: parseFloat(e.target.value) || 0 })
                      }
                      placeholder="e.g. 520"
                      className="w-full bg-[#0E0F13] border border-[#242733] focus:border-[#C29B7F] rounded-lg pl-7 pr-3 py-2 text-sm text-white font-mono-numbers outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8E909B] mb-1.5">
                    Cash paid upfront / drive-off ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8E909B] font-mono-numbers">$</span>
                    <input
                      type="number"
                      value={state.upfrontCash || ''}
                      onChange={(e) =>
                        setState({ ...state, upfrontCash: parseFloat(e.target.value) || 0 })
                      }
                      placeholder="e.g. 2500"
                      className="w-full bg-[#0E0F13] border border-[#242733] focus:border-[#C29B7F] rounded-lg pl-7 pr-3 py-2 text-sm text-white font-mono-numbers outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8E909B] mb-1.5">
                    Total amount financed / sticker ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8E909B] font-mono-numbers">$</span>
                    <input
                      type="number"
                      value={state.totalFinanced || ''}
                      onChange={(e) =>
                        setState({ ...state, totalFinanced: parseFloat(e.target.value) || 0 })
                      }
                      placeholder="e.g. 28000"
                      className="w-full bg-[#0E0F13] border border-[#242733] focus:border-[#C29B7F] rounded-lg pl-7 pr-3 py-2 text-sm text-white font-mono-numbers outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8E909B] mb-1.5">
                    Loan / lease length (months)
                  </label>
                  <select
                    value={state.loanLengthMonths}
                    onChange={(e) =>
                      setState({ ...state, loanLengthMonths: parseInt(e.target.value, 10) || 60 })
                    }
                    className="w-full bg-[#0E0F13] border border-[#242733] focus:border-[#C29B7F] rounded-lg px-3 py-2 text-sm text-white font-mono-numbers outline-none transition-colors"
                  >
                    <option value={24}>24 Months (2 Years)</option>
                    <option value={36}>36 Months (3 Years)</option>
                    <option value={48}>48 Months (4 Years)</option>
                    <option value={60}>60 Months (5 Years)</option>
                    <option value={72}>72 Months (6 Years)</option>
                    <option value={84}>84 Months (7 Years)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Block 02: The bills around it */}
            <div className="bg-[#14161C] border border-[#242733] rounded-xl p-5 sm:p-6 space-y-4">
              <div className="border-b border-[#242733] pb-3 flex items-center justify-between">
                <div>
                  <span className="font-mono-numbers text-xs font-bold text-[#C29B7F]">02</span>
                  <h3 className="text-base font-bold text-white font-heading inline-block ml-2">
                    The bills around it
                  </h3>
                </div>
                <span className="text-xs text-[#8E909B]">The invisible 50%</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#8E909B] mb-1.5">
                    Insurance premium ($/month)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8E909B] font-mono-numbers">$</span>
                    <input
                      type="number"
                      value={state.insurancePremium || ''}
                      onChange={(e) =>
                        setState({ ...state, insurancePremium: parseFloat(e.target.value) || 0 })
                      }
                      placeholder="e.g. 210"
                      className="w-full bg-[#0E0F13] border border-[#242733] focus:border-[#C29B7F] rounded-lg pl-7 pr-3 py-2 text-sm text-white font-mono-numbers outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8E909B] mb-1.5">
                    Monthly fuel / charging ($/month)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8E909B] font-mono-numbers">$</span>
                    <input
                      type="number"
                      value={state.monthlyFuel || ''}
                      onChange={(e) =>
                        setState({ ...state, monthlyFuel: parseFloat(e.target.value) || 0 })
                      }
                      placeholder="e.g. 160"
                      className="w-full bg-[#0E0F13] border border-[#242733] focus:border-[#C29B7F] rounded-lg pl-7 pr-3 py-2 text-sm text-white font-mono-numbers outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8E909B] mb-1.5">
                    Annual DMV & registration reserve ($/year)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8E909B] font-mono-numbers">$</span>
                    <input
                      type="number"
                      value={state.annualDmv || ''}
                      onChange={(e) =>
                        setState({ ...state, annualDmv: parseFloat(e.target.value) || 0 })
                      }
                      placeholder="e.g. 540"
                      className="w-full bg-[#0E0F13] border border-[#242733] focus:border-[#C29B7F] rounded-lg pl-7 pr-3 py-2 text-sm text-white font-mono-numbers outline-none transition-colors"
                    />
                  </div>
                  <span className="text-[11px] text-[#8E909B] mt-1 block">
                    ≈ ${Math.round(monthlyDmv)}/mo allocated
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8E909B] mb-1.5">
                    Annual upkeep / tires / service ($/year)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8E909B] font-mono-numbers">$</span>
                    <input
                      type="number"
                      value={state.annualUpkeep || ''}
                      onChange={(e) =>
                        setState({ ...state, annualUpkeep: parseFloat(e.target.value) || 0 })
                      }
                      placeholder="e.g. 900"
                      className="w-full bg-[#0E0F13] border border-[#242733] focus:border-[#C29B7F] rounded-lg pl-7 pr-3 py-2 text-sm text-white font-mono-numbers outline-none transition-colors"
                    />
                  </div>
                  <span className="text-[11px] text-[#8E909B] mt-1 block">
                    ≈ ${Math.round(monthlyUpkeep)}/mo allocated
                  </span>
                </div>
              </div>
            </div>

            {/* Expandable Module: Negative Equity Rollover */}
            <div className="bg-[#14161C] border border-[#242733] rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setShowTradeIn(!showTradeIn)}
                className="w-full px-5 py-3.5 flex items-center justify-between text-left text-sm font-semibold text-[#DFDFE3] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#C29B7F]" />
                  <span>Trading in an existing car with an unpaid loan?</span>
                </div>
                {showTradeIn ? <ChevronUp className="w-4 h-4 text-[#8E909B]" /> : <ChevronDown className="w-4 h-4 text-[#8E909B]" />}
              </button>

              {showTradeIn && (
                <div className="p-5 border-t border-[#242733] bg-[#0E0F13]/50 space-y-4">
                  <p className="text-xs text-[#8E909B] leading-relaxed">
                    This is how Bruno ended up with a $650/month Kia Forte. If you owe more than the dealer offers for your trade-in, that negative equity is rolled into your new loan note.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#8E909B] mb-1">
                        Current loan balance owed ($)
                      </label>
                      <input
                        type="number"
                        value={state.oldLoanBalance || ''}
                        onChange={(e) =>
                          setState({ ...state, oldLoanBalance: parseFloat(e.target.value) || 0 })
                        }
                        placeholder="e.g. 12000"
                        className="w-full bg-[#14161C] border border-[#242733] rounded-lg px-3 py-2 text-sm text-white font-mono-numbers outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#8E909B] mb-1">
                        Dealer trade-in offer ($)
                      </label>
                      <input
                        type="number"
                        value={state.tradeInOffer || ''}
                        onChange={(e) =>
                          setState({ ...state, tradeInOffer: parseFloat(e.target.value) || 0 })
                        }
                        placeholder="e.g. 8500"
                        className="w-full bg-[#14161C] border border-[#242733] rounded-lg px-3 py-2 text-sm text-white font-mono-numbers outline-none"
                      />
                    </div>
                  </div>

                  {negativeEquity > 0 && (
                    <div className="p-3 bg-[#E05252]/10 border border-[#E05252]/30 rounded-lg text-xs text-[#DFDFE3] flex items-center justify-between">
                      <span className="font-semibold text-[#E05252]">Rolled Negative Equity:</span>
                      <span className="font-mono-numbers font-bold text-white">
                        +${negativeEquity.toLocaleString()} (+${Math.round(monthlyNegativeEquity)}/mo)
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Expandable Module: Context of Your Income */}
            <div className="bg-[#14161C] border border-[#242733] rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setShowIncome(!showIncome)}
                className="w-full px-5 py-3.5 flex items-center justify-between text-left text-sm font-semibold text-[#DFDFE3] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#C29B7F]" />
                  <span>Put it in the context of your monthly income</span>
                </div>
                {showIncome ? <ChevronUp className="w-4 h-4 text-[#8E909B]" /> : <ChevronDown className="w-4 h-4 text-[#8E909B]" />}
              </button>

              {showIncome && (
                <div className="p-5 border-t border-[#242733] bg-[#0E0F13]/50 space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#8E909B] mb-1">
                      Monthly Take-Home Income (After Taxes)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8E909B] font-mono-numbers">$</span>
                      <input
                        type="number"
                        value={state.monthlyIncome || ''}
                        onChange={(e) =>
                          setState({ ...state, monthlyIncome: parseFloat(e.target.value) || 0 })
                        }
                        placeholder="e.g. 4000"
                        className="w-full bg-[#14161C] border border-[#242733] rounded-lg pl-7 pr-3 py-2 text-sm text-white font-mono-numbers outline-none"
                      />
                    </div>
                  </div>

                  {state.monthlyIncome > 0 && (
                    <div className="pt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[#8E909B]">Vehicle Carrying Share of Income:</span>
                        <span className={`font-mono-numbers font-bold ${
                          incomeBurden > 20 ? 'text-[#E05252]' : incomeBurden > 15 ? 'text-[#E5A93C]' : 'text-[#48BB78]'
                        }`}>
                          {incomeBurden.toFixed(1)}% of your pay
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[#242733] rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            incomeBurden > 20 ? 'bg-[#E05252]' : incomeBurden > 15 ? 'bg-[#E5A93C]' : 'bg-[#48BB78]'
                          }`}
                          style={{ width: `${Math.min(incomeBurden, 100)}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-[#8E909B] mt-1.5">
                        {incomeBurden > 20
                          ? '🚨 DANGER ZONE: Financial guidelines recommend total vehicle carry costs stay below 15-20% of net pay. At this level, any minor income interruption creates an urgent crisis.'
                          : incomeBurden > 15
                          ? '⚠️ ELEVATED RISK: This vehicle will consume a significant portion of your discretionary income.'
                          : '✅ REASONABLE: Well within common balanced personal budget thresholds.'}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Summary Column (5 cols) matching Bruno's screenshot */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#14161C] border border-[#242733] rounded-2xl p-6 shadow-2xl space-y-6">
              <div>
                <span className="font-mono-numbers text-[11px] uppercase tracking-wider text-[#C29B7F] font-bold block mb-1">
                  YOUR CAR, BEYOND THE PAYMENT
                </span>
                <h3 className="text-xl font-extrabold text-white font-heading">
                  True Monthly Drain
                </h3>
              </div>

              {/* Big Result Counters */}
              <div className="p-4 bg-[#0E0F13] rounded-xl border border-[#242733] space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-[#8E909B]">Real Monthly Cost:</span>
                  <span className="text-3xl font-extrabold text-[#C29B7F] font-heading font-mono-numbers">
                    ${Math.round(totalMonthlyDrain).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-baseline justify-between text-xs pt-2 border-t border-[#242733]">
                  <span className="text-[#8E909B]">12-Month Out-Of-Pocket:</span>
                  <span className="font-mono-numbers font-bold text-white text-base">
                    ${Math.round(annualDrain).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-[#8E909B]">
                    {state.loanLengthMonths}-Month Total Commitment:
                  </span>
                  <span className="font-mono-numbers font-bold text-[#DFDFE3]">
                    ${Math.round(totalCommitment).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Itemized Cost Breakdown List */}
              <div className="space-y-2 text-xs">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8E909B] pb-1 border-b border-[#242733]">
                  Known Monthly Costs So Far
                </div>

                <div className="flex justify-between py-1 border-b border-[#242733]/60">
                  <span className="text-[#DFDFE3]">Advertised Payment</span>
                  <span className="font-mono-numbers font-semibold text-white">
                    ${Math.round(monthlyPayment).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#242733]/60">
                  <span className="text-[#DFDFE3]">Auto Insurance</span>
                  <span className="font-mono-numbers font-semibold text-white">
                    +${Math.round(monthlyInsurance).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#242733]/60">
                  <span className="text-[#DFDFE3]">Fuel / Electric Charging</span>
                  <span className="font-mono-numbers font-semibold text-white">
                    +${Math.round(monthlyFuel).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#242733]/60">
                  <span className="text-[#DFDFE3]">DMV & Registration Reserve</span>
                  <span className="font-mono-numbers font-semibold text-white">
                    +${Math.round(monthlyDmv).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#242733]/60">
                  <span className="text-[#DFDFE3]">Upkeep & Tires Reserve</span>
                  <span className="font-mono-numbers font-semibold text-white">
                    +${Math.round(monthlyUpkeep).toLocaleString()}
                  </span>
                </div>

                {monthlyParking > 0 && (
                  <div className="flex justify-between py-1 border-b border-[#242733]/60">
                    <span className="text-[#DFDFE3]">Parking / Tolls</span>
                    <span className="font-mono-numbers font-semibold text-white">
                      +${Math.round(monthlyParking).toLocaleString()}
                    </span>
                  </div>
                )}

                {negativeEquity > 0 && (
                  <div className="flex justify-between py-1 border-b border-[#242733]/60 text-[#E05252]">
                    <span>Rolled Negative Equity</span>
                    <span className="font-mono-numbers font-semibold">
                      +${Math.round(monthlyNegativeEquity).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* The Iceberg Callout */}
              <div className="p-3.5 bg-[#C29B7F]/10 border border-[#C29B7F]/30 rounded-xl text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#C29B7F]">
                  <ShieldAlert className="w-4 h-4" />
                  <span>The Real Cost Iceberg</span>
                </div>
                <p className="text-[#DFDFE3] leading-relaxed">
                  The dealer’s payment represents only <strong className="text-white font-mono-numbers">{paymentShare.toFixed(0)}%</strong> of your true monthly drain. The other <strong className="text-white font-mono-numbers">{hiddenShare.toFixed(0)}%</strong> consists of unyielding fixed bills.
                </p>
              </div>

              {/* Next Step CTA */}
              <div className="pt-2">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-xl transition-all shadow-md font-heading text-center"
                >
                  <span>Don't sign blind — Unlock the full guide.</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <p className="text-[11px] text-[#8E909B] text-center mt-2">
                  Includes full Notion Guide + "Before I Say Yes" interactive form bonus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
