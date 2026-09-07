import React from 'react';
import { AlertTriangle, Phone, Clock, ShieldCheck, CheckCircle2, Wrench, ThermometerSnowflake, Flame } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

export default function EmergencyRepairSection({ onOpenBooking }) {
  const commonEmergencies = [
    { title: 'No Heat / Furnace Blows Cold Air', action: 'Immediate winter priority dispatch' },
    { title: 'Heat Pump Iced Over / Fan Locked', action: 'Defrost cycle & sensor diagnosis' },
    { title: 'Water Leaking From Indoor Air Handler', action: 'Condensate line clearing & leak test' },
    { title: 'Burnt Electrical Smell / Blower Hum', action: 'Capacitor, relay & motor test' },
    { title: 'Thermostat Blank / System Unresponsive', action: 'Low-voltage & transformer repair' },
    { title: 'Strange Metallic Clanking or Whistling', action: 'Blower wheel & duct inspection' },
  ];

  return (
    <section id="emergency" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Urgent Live Status Box */}
        <div className="bg-red-950/60 border border-red-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-red-500/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-3 border border-red-500/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                24/7/365 Emergency Service Hotline
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Nanaimo 24-Hour Emergency HVAC Repairs
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
                Breakdowns don't wait for business hours. When your furnace quits during a snow freeze or your heat pump stops during a coastal gale, our on-call Red Seal technicians respond immediately across Nanaimo, Lantzville, and Parksville.
              </p>
            </div>

            {/* Quick Call Action Card */}
            <div className="bg-slate-900/90 border border-red-500/30 rounded-2xl p-6 text-center shrink-0 min-w-[280px]">
              <div className="text-xs uppercase font-bold text-red-400 tracking-wider mb-1">
                Direct Emergency Line
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-2xl sm:text-3xl font-black font-heading text-white hover:text-flame-400 transition-colors block"
              >
                {COMPANY_INFO.phone}
              </a>
              <div className="text-[11px] text-slate-400 mt-1 mb-4">
                Real live dispatcher on call 24 hours
              </div>
              <button
                onClick={() => onOpenBooking('repairs-24-7', true)}
                className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <AlertTriangle className="w-4 h-4 text-amber-300" />
                Dispatch Van Right Now
              </button>
            </div>
          </div>

          {/* 3 Step Rapid Protocol */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 font-bold font-mono">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Live Nanaimo Dispatch</h4>
                <p className="text-xs text-slate-400 mt-1">
                  You speak with a knowledgeable professional who triages your heating/cooling emergency and contacts the nearest service van.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 font-bold font-mono">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Mobile Parts Warehouse</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Our vans stock universal ignitors, flame sensors, run capacitors, contactors, motors, and defrost boards for 90% same-visit repairs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 font-bold font-mono">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Clear Upfront Approval</h4>
                <p className="text-xs text-slate-400 mt-1">
                  We diagnose the root failure, explain options, and provide a fixed quote. You approve the price before any repair begins.
                </p>
              </div>
            </div>
          </div>

          {/* Common Emergency Scenarios Matrix */}
          <div className="mt-8 pt-6 border-t border-red-500/20">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Common 24-Hour Urgent Service Requests We Fix Everyday:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {commonEmergencies.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">{item.title}</span>
                  <span className="text-[10px] text-flame-400 font-bold">{item.action}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
