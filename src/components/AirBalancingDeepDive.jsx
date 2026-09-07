import React, { useState } from 'react';
import { Wind, Gauge, Activity, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, ThermometerSnowflake, Sparkles } from 'lucide-react';

export default function AirBalancingDeepDive({ onOpenBooking }) {
  const [activeScenario, setActiveScenario] = useState('balanced'); // 'unbalanced' or 'balanced'

  return (
    <section id="air-balancing" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Activity className="w-4 h-4 text-emerald-400" />
            Signature Specialty Service &bull; Nanaimo, BC
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
            Certified Air Balancing (TAB)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A brand-new heat pump or furnace is only as good as the airflow delivering it. TinStar uses precision flow hoods and digital manometers to eliminate hot/cold rooms and lower equipment strain.
          </p>
        </div>

        {/* 2-Column Feature: Visual Showcase & Technical Distinction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Image Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/air-balancing-precision.png"
                alt="TinStar Certified HVAC Air Balancing and airflow measurement hood diagnostic"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase font-bold text-emerald-400">Precision Testing</div>
                  <div className="text-sm font-bold text-white">Flow Hood CFM Verification</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Standard Tolerances</div>
                  <div className="text-sm font-bold text-brand-300">&plusmn;5% Design Airflow</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why Air Balancing Matters */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              Why Does My Home Have Hot &amp; Cold Rooms?
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
              Most HVAC contractors just install units. We balance the physics of your air.
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              When air isn't balanced, blower fans work overtime against excessive static pressure, increasing electrical costs and shortening heat pump lifespan. Bedrooms remain freezing while living areas roast.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Total External Static Pressure (TESP) Testing</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    We measure resistance inside your supply and return plenums, identifying choking points before they damage your blower motor.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-brand-500/20 text-brand-400 shrink-0 mt-0.5">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Room-by-Room CFM Register Balancing</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Using calibrated digital capture hoods, we adjust branch dampers so master suites, basements, and nurseries receive their exact engineered CFM.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-flame-500/20 text-flame-400 shrink-0 mt-0.5">
                  <ThermometerSnowflake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">HRV / ERV Whole-Home Ventilation Balancing</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Essential for Vancouver Island’s wet winters to prevent window condensation, mould, and stale indoor air without losing heat.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('air-balancing', false)}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all"
              >
                <span>Schedule Home Air Balancing Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Interactive Interactive Comparison: Unbalanced vs Balanced */}
        <div className="bg-slate-950 rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Interactive Diagnosis Simulator
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                How Air Balancing Affects Real Nanaimo Homes
              </h3>
            </div>

            {/* Toggle State */}
            <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveScenario('unbalanced')}
                className={`py-2 px-3.5 rounded-lg text-xs font-bold transition-all ${
                  activeScenario === 'unbalanced'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Unbalanced Ductwork (Typical)
              </button>

              <button
                onClick={() => setActiveScenario('balanced')}
                className={`py-2 px-3.5 rounded-lg text-xs font-bold transition-all ${
                  activeScenario === 'balanced'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                TinStar TAB Balanced
              </button>
            </div>
          </div>

          {/* Interactive Results Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className={`p-5 rounded-2xl border transition-all ${
              activeScenario === 'balanced'
                ? 'bg-emerald-950/30 border-emerald-500/30 text-white'
                : 'bg-red-950/30 border-red-500/30 text-white'
            }`}>
              <div className="text-xs uppercase font-bold tracking-wider mb-2 flex items-center gap-2">
                {activeScenario === 'balanced' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-400" />
                )}
                <span>Temperature Consistency</span>
              </div>
              <div className="text-3xl font-extrabold font-heading">
                {activeScenario === 'balanced' ? '±0.5°C' : '±4.5°C'}
              </div>
              <div className="text-xs text-slate-300 mt-2">
                {activeScenario === 'balanced'
                  ? 'Even comfort on all floors. Upstairs bedrooms remain identical to main floor living space.'
                  : 'Upstairs gets stifling hot in summer, freezing cold in winter. Thermostat never satisfies properly.'}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border transition-all ${
              activeScenario === 'balanced'
                ? 'bg-emerald-950/30 border-emerald-500/30 text-white'
                : 'bg-red-950/30 border-red-500/30 text-white'
            }`}>
              <div className="text-xs uppercase font-bold tracking-wider mb-2 flex items-center gap-2">
                {activeScenario === 'balanced' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-400" />
                )}
                <span>Register Acoustic Noise</span>
              </div>
              <div className="text-3xl font-extrabold font-heading">
                {activeScenario === 'balanced' ? '< 25 dB' : '45+ dB'}
              </div>
              <div className="text-xs text-slate-300 mt-2">
                {activeScenario === 'balanced'
                  ? 'Whisper quiet air distribution. No whistling grilles or vibrating tin duct trunk lines.'
                  : 'Annoying whistling vents and loud rushing air caused by excessive velocity through restricted registers.'}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border transition-all ${
              activeScenario === 'balanced'
                ? 'bg-emerald-950/30 border-emerald-500/30 text-white'
                : 'bg-red-950/30 border-red-500/30 text-white'
            }`}>
              <div className="text-xs uppercase font-bold tracking-wider mb-2 flex items-center gap-2">
                {activeScenario === 'balanced' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-400" />
                )}
                <span>Blower Motor Life &amp; Energy</span>
              </div>
              <div className="text-3xl font-extrabold font-heading">
                {activeScenario === 'balanced' ? '15-20 Yrs' : '7-10 Yrs'}
              </div>
              <div className="text-xs text-slate-300 mt-2">
                {activeScenario === 'balanced'
                  ? 'Optimized static pressure allows ECM motors to cruise at optimal efficiency, saving 15-25% in electricity.'
                  : 'Motor runs hot against blocked static pressure, tripping limit switches and causing premature failure.'}
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              * Measurements based on ASHRAE 111 &amp; National Environmental Balancing Bureau standards.
            </div>
            <button
              onClick={() => onOpenBooking('air-balancing', false)}
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
            >
              <span>Book a TinStar Airflow Audit in Nanaimo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
