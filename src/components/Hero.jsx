import React, { useState } from 'react';
import { Phone, Shield, Sparkles, CheckCircle2, ArrowRight, Flame, Snowflake, Wind, Clock, AlertTriangle, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

export default function Hero({ onOpenBooking, onOpenBrandKit }) {
  const [quickService, setQuickService] = useState('heat-pumps');
  const [quickPhone, setQuickPhone] = useState('');
  const [isEmergencyQuick, setIsEmergencyQuick] = useState(false);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenBooking(quickService, isEmergencyQuick);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Graphic with warm ambient glow overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-nanaimo-home-comfort.png"
          alt="Warm, inviting Nanaimo home with modern ultra-efficient heat pump"
          className="w-full h-full object-cover object-center opacity-30 md:opacity-40 filter saturate-[1.15]"
        />
        {/* Gradients to blend seamless readability with warm inviting imagery */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-flame-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Chips */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-flame-500/20 border border-flame-500/30 text-flame-300 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-flame-400 animate-pulse"></span>
            Nanaimo, BC &bull; Locally Owned &amp; Operated
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-md">
            <Shield className="w-3.5 h-3.5 text-brand-400" />
            Red Seal Certified &bull; BC Safety Authority
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-medium backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            CleanBC Rebates Up To $11,000
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.1]">
              Island Comfort.<br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Precision Warmth.
              </span><br />
              <span className="bg-gradient-to-r from-flame-400 via-flame-500 to-amber-400 bg-clip-text text-transparent">
                Whisper-Quiet
              </span>{' '}
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-300 bg-clip-text text-transparent">
                Cooling.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              At <strong className="text-white">tinstar.ca</strong>, we combine old-school sheet metal tinsmith craftsmanship with next-generation heat pump technology and certified <strong>Air Balancing</strong>. From seamless new installations to rapid <strong>24/7 emergency repairs</strong> across Nanaimo and Central Vancouver Island.
            </p>

            {/* Core Service Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <a href="#heat-pumps" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-400/50 hover:bg-white/10 transition-all text-left group">
                <div className="flex items-center justify-between mb-1.5">
                  <Snowflake className="w-5 h-5 text-brand-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-brand-300 font-bold uppercase">Rebates</span>
                </div>
                <div className="text-xs font-bold text-white">Heat Pumps</div>
                <div className="text-[10px] text-slate-400">Ductless & Ducted</div>
              </a>

              <a href="#heating" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-flame-400/50 hover:bg-white/10 transition-all text-left group">
                <div className="flex items-center justify-between mb-1.5">
                  <Flame className="w-5 h-5 text-flame-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-flame-300 font-bold uppercase">Heating</span>
                </div>
                <div className="text-xs font-bold text-white">Furnaces & Gas</div>
                <div className="text-[10px] text-slate-400">96%+ AFUE High-Eff</div>
              </a>

              <a href="#air-balancing" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-white/10 transition-all text-left group">
                <div className="flex items-center justify-between mb-1.5">
                  <Wind className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-emerald-300 font-bold uppercase">Specialty</span>
                </div>
                <div className="text-xs font-bold text-white">Air Balancing</div>
                <div className="text-[10px] text-slate-400">Certified TAB Airflow</div>
              </a>

              <a href="#repairs" className="p-3 rounded-2xl bg-red-950/40 border border-red-500/30 hover:border-red-400 hover:bg-red-950/60 transition-all text-left group">
                <div className="flex items-center justify-between mb-1.5">
                  <AlertTriangle className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-red-300 font-bold uppercase">24 Hours</span>
                </div>
                <div className="text-xs font-bold text-white">24/7 Repairs</div>
                <div className="text-[10px] text-red-300">Nanaimo On-Call</div>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking('heat-pumps', false)}
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-flame-500 to-amber-500 hover:from-flame-600 hover:to-amber-600 text-white font-bold text-base shadow-lg shadow-flame-500/30 flex items-center justify-center gap-2 group transition-all hover:scale-[1.02]"
              >
                <span>Request Free Consultation &amp; Estimate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:border-white/40"
              >
                <Phone className="w-5 h-5 text-flame-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-300">
                <strong className="text-white">4.9 / 5.0 Star Rating</strong> across 140+ Nanaimo, Lantzville &amp; Parksville homeowners
              </div>
            </div>

          </div>

          {/* Right Column: Quick Dispatch & Instant Estimate Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/90 border border-white/15 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-flame-400">
                    Nanaimo Fast Dispatch
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {isEmergencyQuick ? 'Immediate 24/7 Service' : 'Schedule Estimate or Inspection'}
                  </h3>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                  {isEmergencyQuick ? (
                    <Clock className="w-6 h-6 text-red-400 animate-spin" />
                  ) : (
                    <CheckCircle2 className="w-6 h-6 text-brand-400" />
                  )}
                </div>
              </div>

              {/* Mode Toggle inside hero card */}
              <div className="grid grid-cols-2 gap-2 my-4 p-1 bg-slate-950 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setIsEmergencyQuick(false)}
                  className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all ${
                    !isEmergencyQuick
                      ? 'bg-brand-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Standard Service
                </button>
                <button
                  type="button"
                  onClick={() => setIsEmergencyQuick(true)}
                  className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isEmergencyQuick
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/40'
                      : 'text-red-400 hover:text-red-300'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  24/7 Emergency
                </button>
              </div>

              {/* Quick Form */}
              <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    What system do you need help with?
                  </label>
                  <select
                    value={quickService}
                    onChange={(e) => setQuickService(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="heat-pumps">Heat Pump (Ducted or Ductless Mini-Split)</option>
                    <option value="heating">Heating / High-Eff Gas Furnace</option>
                    <option value="cooling">Central Air Conditioning & Cooling</option>
                    <option value="air-balancing">Certified TAB Air Balancing & IAQ</option>
                    <option value="installations">New Installation / Custom Sheet Metal</option>
                    <option value="repairs-24-7">24/7 Emergency Repair (No Heat / Breakdown)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Nanaimo Area Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(250) 555-0199"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 ${
                      isEmergencyQuick
                        ? 'bg-red-600 hover:bg-red-500 shadow-red-600/30'
                        : 'bg-brand-600 hover:bg-brand-500 shadow-brand-600/30'
                    }`}
                  >
                    <span>{isEmergencyQuick ? 'Dispatch 24/7 Emergency Van' : 'Get My Quote & Consultation'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>✓ Upfront pricing</span>
                  <span>✓ Red Seal technicians</span>
                  <span>✓ No hidden travel fees</span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
