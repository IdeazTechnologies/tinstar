import React, { useState } from 'react';
import { Calculator, DollarSign, Sparkles, CheckCircle2, ArrowRight, HelpCircle, Leaf, Zap, Shield } from 'lucide-react';
import { REBATE_DATA } from '../data/hvacData';

export default function HeatPumpRebateCalculator({ onOpenBooking }) {
  const [currentFuel, setCurrentFuel] = useState('gas'); // 'gas', 'oil', 'electric', 'old-heatpump'
  const [homeSize, setHomeSize] = useState('medium'); // 'small', 'medium', 'large'
  const [systemType, setSystemType] = useState('ducted'); // 'ducted' or 'ductless'
  const [inNanaimo, setInNanaimo] = useState(true);

  // Compute calculated values
  const calculateRebates = () => {
    let provincial = 0;
    let utility = 0;
    let municipal = inNanaimo ? 750 : 350;
    let savingsPerYear = 950;

    if (currentFuel === 'oil') {
      provincial = 6000;
      utility = 2500;
      savingsPerYear = 1800;
    } else if (currentFuel === 'gas') {
      provincial = 4000;
      utility = 2000;
      savingsPerYear = 1100;
    } else if (currentFuel === 'electric') {
      provincial = 2500;
      utility = 2000;
      savingsPerYear = 1250;
    } else {
      provincial = 2000;
      utility = 1500;
      savingsPerYear = 700;
    }

    if (homeSize === 'large') {
      savingsPerYear = Math.round(savingsPerYear * 1.35);
    } else if (homeSize === 'small') {
      savingsPerYear = Math.round(savingsPerYear * 0.85);
    }

    const totalRebates = provincial + utility + municipal;
    return { provincial, utility, municipal, totalRebates, savingsPerYear };
  };

  const results = calculateRebates();

  return (
    <section id="rebate-calculator" className="py-20 bg-gradient-to-b from-slate-50 to-brand-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame-100 text-flame-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-flame-600" />
            CleanBC &amp; Nanaimo Heat Pump Incentives
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Vancouver Island Heat Pump Rebate Calculator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Transitioning to a high-efficiency heat pump has never been more affordable. Calculate your potential grant stack and annual heating bill reduction.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Inputs Section */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              
              {/* Step 1: Current Heating Fuel */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. What is your current heating system?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'gas', label: 'Natural Gas / Propane', badge: 'High Rebate' },
                    { id: 'oil', label: 'Oil Tank / Furnace', badge: 'Max Rebate' },
                    { id: 'electric', label: 'Electric Baseboards', badge: 'Huge Savings' },
                    { id: 'old-heatpump', label: 'Aging Heat Pump (12+ Yrs)', badge: 'Modern Upgrade' },
                  ].map((fuel) => (
                    <button
                      key={fuel.id}
                      type="button"
                      onClick={() => setCurrentFuel(fuel.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        currentFuel === fuel.id
                          ? 'border-brand-500 bg-brand-50/80 text-brand-950 font-bold ring-2 ring-brand-500/20'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{fuel.label}</div>
                      <span className="text-[10px] text-brand-600 font-semibold block mt-1">{fuel.badge}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Home Square Footage */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  2. Approximate Finished Home Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'small', label: 'Under 1,500 sq ft', desc: 'Bungalow / Townhome' },
                    { id: 'medium', label: '1,500 – 2,800 sq ft', desc: 'Average Island Home' },
                    { id: 'large', label: '2,800+ sq ft', desc: 'Large Multi-Level' },
                  ].map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setHomeSize(size.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        homeSize === size.id
                          ? 'border-brand-500 bg-brand-50/80 text-brand-950 font-bold ring-2 ring-brand-500/20'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold">{size.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{size.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Desired Heat Pump Architecture */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  3. System Configuration Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSystemType('ducted')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      systemType === 'ducted'
                        ? 'border-brand-500 bg-brand-50/80 text-brand-950 font-bold ring-2 ring-brand-500/20'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold">Central Ducted Heat Pump</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Uses existing or custom sheet metal ducts with air balancing.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSystemType('ductless')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      systemType === 'ductless'
                        ? 'border-brand-500 bg-brand-50/80 text-brand-950 font-bold ring-2 ring-brand-500/20'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold">Multi-Head Ductless Mini-Split</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Independent room-by-room zoning with zero ductwork needed.
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 4: Nanaimo residency checkbox */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800">City of Nanaimo Resident?</div>
                  <div className="text-[11px] text-slate-500">Qualifies for additional municipal climate action top-ups</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inNanaimo}
                    onChange={(e) => setInNanaimo(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
                </label>
              </div>

            </div>

            {/* Right Results Breakdown Section */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-950 p-6 sm:p-10 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Estimated Grant Stack
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Active 2026 Programs
                  </span>
                </div>

                {/* Big Number */}
                <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10 mb-6">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Total Estimated Rebates Available
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-heading text-emerald-400 mt-1">
                    ${results.totalRebates.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Free grant funding directly offsetting your installation invoice
                  </div>
                </div>

                {/* Granular breakdown */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-slate-300">CleanBC Better Homes Grant</span>
                    <span className="font-bold text-white">${results.provincial.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-slate-300">BC Hydro / FortisBC Efficiency Incentive</span>
                    <span className="font-bold text-white">${results.utility.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-slate-300">Municipal Nanaimo / Island Bonus</span>
                    <span className="font-bold text-white">${results.municipal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5 text-flame-400 font-semibold">
                    <span>Estimated Annual Utility Bill Savings</span>
                    <span>~${results.savingsPerYear.toLocaleString()} / year</span>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs text-brand-200 flex items-start gap-2">
                  <Zap className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Federal 0% Financing:</strong> Eligible for Canada Greener Homes 10-year interest-free loan up to $40,000.
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={() => onOpenBooking('heat-pumps', false)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <span>Claim My Rebate &amp; In-Home Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[10px] text-slate-400 mt-2">
                  TinStar is a CleanBC Registered Program Contractor. We handle rebate filing paperwork.
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
