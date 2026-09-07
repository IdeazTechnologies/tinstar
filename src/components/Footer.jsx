import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from '../data/hvacData';

export default function Footer({ onOpenBooking, onOpenBrandKit }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo theme="light" size="md" onOpenBrandKit={onOpenBrandKit} />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Nanaimo's home comfort experts. Specializing in high-efficiency heat pumps, heating systems, central air conditioning, custom sheet metal installations, and certified TAB air balancing.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Nanaimo, British Columbia, Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-flame-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-white hover:text-flame-400">
                  {COMPANY_INFO.phone} (24/7 Dispatch)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Emergency Repairs &bull; Mon–Fri 7:30am–5:30pm Office</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBrandKit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Inspect Logo Variations &amp; Brand Assets
              </button>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id === 'repairs-24-7' ? 'repairs' : s.id}`}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#rebate-calculator" className="hover:text-brand-400 transition-colors text-flame-400 font-semibold">
                  Heat Pump Rebate Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Nanaimo Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICE_AREAS.slice(0, 6).map((area, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span>{area.name}</span>
                  <span className="text-[10px] text-slate-500">{area.eta}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Emergency Banner */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Licensing &amp; Trust
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-brand-400" />
                  Red Seal Certified
                </div>
                <div className="text-[11px] text-slate-400">
                  {COMPANY_INFO.license}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-4 h-4" />
                  CleanBC Contractor
                </div>
                <div className="text-[11px] text-slate-400">
                  Registered program contractor authorized for provincial and utility heat pump grants.
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('repairs-24-7', true)}
                className="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs text-center shadow-md shadow-red-600/30 transition-all"
              >
                24/7 Emergency Dispatch
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 <strong>TinStar Heating &amp; Cooling</strong> (<span className="text-slate-400">tinstar.ca</span>). All Rights Reserved. Nanaimo, BC.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3.5 h-3.5 text-flame-500 fill-flame-500" /> for Nanaimo &amp; Central Vancouver Island
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
