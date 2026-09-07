import React from 'react';
import { Shield, Award, Wrench, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { TRUST_PILLARS } from '../data/hvacData';

export default function TechnicianCraftsmanship({ onOpenBooking, onOpenBrandKit }) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/images/technician-service-craftsmanship.png"
                alt="TinStar Red Seal Certified HVAC Journeyperson Technician in Nanaimo, BC"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-flame-500 text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Credibility Guarantee</div>
                    <div className="text-sm font-extrabold text-slate-900">Interprovincial Red Seal Certified</div>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  BC Safety Authority #L-BC89421
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: The TinStar Story & Craftsmanship */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5 text-brand-600" />
              Why We Are Called "TinStar"
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              True Sheet Metal Craftsmanship Combined With Modern Heat Pump Science.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In an era of cookie-cutter flex duct and slap-and-dash installations, <strong>tinstar.ca</strong> holds high standards. We operate our own sheet metal shop right here on Vancouver Island, custom fabricating heavy-gauge tin transitions, acoustically insulated return boots, and aerodynamic trunk lines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {TRUST_PILLARS.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <h4 className="text-xs font-bold text-slate-900">{pillar.title}</h4>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenBooking('installations', false)}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Consult On Custom HVAC Installation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBrandKit}
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all border border-slate-200"
              >
                <Sparkles className="w-4 h-4 text-flame-500" />
                <span>View TinStar Logos &amp; Identity</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
