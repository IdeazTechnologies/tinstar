import React, { useState } from 'react';
import { SERVICES } from '../data/hvacData';
import { Snowflake, Flame, Wind, Wrench, AlertTriangle, CheckCircle, ArrowRight, Sparkles, Shield, ChevronRight } from 'lucide-react';

const SERVICE_ICONS = {
  'heat-pumps': Snowflake,
  'heating': Flame,
  'cooling': Snowflake,
  'air-balancing': Wind,
  'installations': Wrench,
  'repairs-24-7': AlertTriangle,
};

export default function ServicesSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('heat-pumps');

  const selectedService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];
  const IconComponent = SERVICE_ICONS[selectedService.id] || Snowflake;

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Complete HVAC Solutions in Nanaimo, BC
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Heating, Cooling, Heat Pumps &amp; Precision Airflow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered specifically for Vancouver Island’s climate. From brand-new custom installations to certified airflow balancing and 24-hour emergency turnaround.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-2 bg-slate-200/80 rounded-2xl mb-10">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.id] || Snowflake;
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`py-3 px-3 rounded-xl text-left transition-all flex flex-col items-center sm:items-start text-center sm:text-left ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-md font-bold ring-2 ring-brand-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <div className={`p-2 rounded-lg mb-2 ${
                  isActive
                    ? s.id === 'repairs-24-7'
                      ? 'bg-red-100 text-red-600'
                      : s.id === 'heating'
                      ? 'bg-flame-100 text-flame-600'
                      : s.id === 'air-balancing'
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-brand-100 text-brand-600'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-1">{s.title}</span>
                <span className="text-[10px] text-slate-400 font-medium hidden sm:block mt-0.5">{s.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    selectedService.id === 'repairs-24-7'
                      ? 'bg-red-100 text-red-700 border border-red-200'
                      : selectedService.id === 'air-balancing'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-brand-100 text-brand-800 border border-brand-200'
                  }`}>
                    {selectedService.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Nanaimo &amp; Central Island Coverage
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-base font-semibold text-brand-700 mb-4">
                  {selectedService.tagline}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Service Inclusions &amp; Standards
                  </div>
                  {selectedService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">Target Outcome</div>
                  <div className="text-xs font-bold text-slate-800">{selectedService.stats}</div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking(selectedService.id, selectedService.id === 'repairs-24-7')}
                    className={`px-5 py-3 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                      selectedService.id === 'repairs-24-7'
                        ? 'bg-red-600 hover:bg-red-700 shadow-red-600/30'
                        : 'bg-brand-600 hover:bg-brand-700 shadow-brand-600/30'
                    }`}
                  >
                    <span>{selectedService.id === 'repairs-24-7' ? 'Request Immediate 24/7 Dispatch' : `Book ${selectedService.title} Estimate`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Information / Visual Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-brand-950 p-6 sm:p-10 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                    <IconComponent className="w-8 h-8 text-flame-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Standard</div>
                    <div className="text-sm font-bold text-brand-300">Red Seal Verified</div>
                  </div>
                </div>

                <h4 className="text-lg font-bold font-heading mb-3 text-slate-100">
                  Ideal For Your Home If:
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/10 mb-6">
                  "{selectedService.idealFor}"
                </p>

                {/* Service Specs Checklist */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-flame-400">
                    Why Nanaimo Chooses TinStar
                  </div>
                  <div className="text-xs text-slate-300 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                      <span>Nanaimo-based shop with custom sheet metal fittings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-flame-400"></span>
                      <span>Assistance claiming maximum CleanBC rebates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Calculated CFM airflow &amp; static pressure verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>No overtime surcharges on clear upfront quotes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Available across Greater Nanaimo</span>
                <span className="text-flame-400 font-bold">tinstar.ca</span>
              </div>

            </div>

          </div>
        </div>

        {/* 6 Services Overview Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.id] || Snowflake;
            return (
              <div
                key={s.id}
                id={s.id === 'repairs-24-7' ? 'repairs' : s.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-brand-400/80 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl transition-colors ${
                      s.id === 'repairs-24-7'
                        ? 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white'
                        : s.id === 'heating'
                        ? 'bg-flame-50 text-flame-600 group-hover:bg-flame-500 group-hover:text-white'
                        : s.id === 'air-balancing'
                        ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                        : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      {s.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-heading text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking(s.id, s.id === 'repairs-24-7')}
                    className="text-xs font-bold text-brand-600 hover:text-brand-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{s.id === 'repairs-24-7' ? '24/7 Dispatch Call' : 'Learn More & Quote'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Nanaimo, BC
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
