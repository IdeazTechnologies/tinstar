import React, { useState } from 'react';
import { X, Check, Copy, Download, Sparkles, Flame, Snowflake, ShieldCheck, Palette, FileText } from 'lucide-react';
import { LogoIcon, LogoBadge } from './Logo';

export default function BrandKitModal({ isOpen, onClose }) {
  const [copiedCode, setCopiedCode] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const colors = [
    { name: 'Island Deep Blue (Brand Primary)', hex: '#0284c7', text: 'white', desc: 'Cooling, trust & Nanaimo coastal waters' },
    { name: 'Warm Ember (Flame Accent)', hex: '#f97316', text: 'white', desc: 'Heating comfort, warmth & energy' },
    { name: 'Polished Tin (Heritage Metal)', hex: '#94a3b8', text: 'slate-900', desc: 'Precision sheet metal & custom duct craftsmanship' },
    { name: 'Midnight Charcoal (Navy Foundation)', hex: '#082f49', text: 'white', desc: 'Premium architectural depth & readability' },
    { name: 'Clean Snow (Pure Field)', hex: '#f8fafc', text: 'slate-900', desc: 'Crisp indoor air quality & balanced ventilation' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 px-6 py-6 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-flame-400" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-heading">
                TinStar Brand Identity &amp; Primary Emblem
              </h3>
              <p className="text-sm text-slate-300">
                Official visual brand assets for tinstar.ca &bull; Nanaimo, BC
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close brand kit modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Logo Concept Narrative */}
          <div className="bg-brand-50/70 border border-brand-200/80 rounded-2xl p-5 md:p-6 text-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-brand-600" />
              <span className="font-heading font-bold text-slate-900 text-lg">The Primary Emblem Architecture</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              The official <strong>Primary Emblem</strong> is the heart of the TinStar brand. It features:
              <strong> 1) Polished 3D Tin Facets:</strong> hand-finished metallic silver star honoring master sheet metal craftsmanship.
              <strong> 2) Sculpted Heating Flame:</strong> vibrant amber-orange flame representing cozy winter warmth and gas systems.
              <strong> 3) Crisp Cooling Wave:</strong> azure-cyan water swirl representing air conditioning, heat pumps, and balanced ventilation.
            </p>
          </div>

          {/* Logo Variations Grid */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-4 flex items-center gap-2">
              <Palette className="w-4 h-4 text-brand-500" />
              Official Logo Formats &amp; Downloads
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Option 1: 3D Rendered Primary Emblem */}
              <div className="bg-slate-50 border-2 border-brand-500/40 rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-3 right-4 bg-brand-600 text-white text-[10px] uppercase tracking-widest font-black px-2.5 py-0.5 rounded-full shadow">
                  Official Site Logo
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-100 text-brand-700">
                      Primary Emblem (Full)
                    </span>
                    <span className="text-xs text-slate-400">Master 3D Render</span>
                  </div>
                  <div className="h-44 bg-white rounded-xl border border-slate-200/80 flex items-center justify-center p-3 mb-4">
                    <img
                      src="/images/tinstar-logo-emblem.png"
                      alt="TinStar 3D Primary Emblem"
                      className="max-h-36 object-contain drop-shadow-md"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mb-3">
                    The complete official Primary Emblem with 3D star, heating flame, cooling swirl, and stacked Nanaimo BC typography.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="/images/tinstar-logo-emblem-transparent.png"
                    download="tinstar-primary-emblem-transparent.png"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-brand-600 text-white text-xs font-semibold hover:bg-brand-700 transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Transparent PNG
                  </a>
                  <a
                    href="/images/tinstar-logo-emblem.png"
                    download="tinstar-primary-emblem-original.png"
                    className="w-full inline-flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl bg-slate-200 text-slate-700 text-[11px] font-semibold hover:bg-slate-300 transition-colors"
                  >
                    Download High-Res Original
                  </a>
                </div>
              </div>

              {/* Option 2: 3D Star Icon (Transparent Mark) */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-flame-100 text-flame-700">
                      3D Star Mark
                    </span>
                    <span className="text-xs text-slate-400">Transparent PNG</span>
                  </div>
                  <div className="h-44 bg-white rounded-xl border border-slate-200/80 flex items-center justify-center p-4 mb-4">
                    <img
                      src="/images/tinstar-star-3d.png"
                      alt="TinStar 3D Star Mark"
                      className="max-h-32 object-contain drop-shadow"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mb-3">
                    The standalone 3D Star Mark extracted directly from the Primary Emblem. Used for the site header lockup, app icons, and social avatars.
                  </p>
                </div>
                <a
                  href="/images/tinstar-star-3d.png"
                  download="tinstar-3d-star-mark.png"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download 3D Star Mark (PNG)
                </a>
              </div>

              {/* Option 3: Dark Mode Vehicle / Workwear Badge */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow text-white">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                      Workwear &amp; Van Badge
                    </span>
                    <span className="text-xs text-slate-400">Dark Decal</span>
                  </div>
                  <div className="h-44 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-4 mb-4">
                    <LogoBadge size={54} theme="light" />
                  </div>
                  <p className="text-xs text-slate-400 mb-3">
                    Uniform embroidery badge and navy service van door decal featuring the 3D Star Mark with high-contrast text.
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard('TinStar 3D Star Badge for Uniforms & Vans', 'badge-copy')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
                >
                  {copiedCode === 'badge-copy' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Ready for Uniforms</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-3.5 h-3.5" />
                      View Uniform Specs
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Color Palette */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-4 flex items-center gap-2">
              <Palette className="w-4 h-4 text-flame-500" />
              Brand Color System
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {colors.map((c, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm flex flex-col">
                  <div className="h-16 flex items-center justify-center font-mono font-bold text-sm shadow-inner" style={{ backgroundColor: c.hex, color: c.text === 'white' ? '#fff' : '#0f172a' }}>
                    {c.hex}
                  </div>
                  <div className="p-3 text-xs flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-slate-800">{c.name}</div>
                      <div className="text-slate-500 text-[11px] mt-1">{c.desc}</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(c.hex, `color-${idx}`)}
                      className="mt-2 text-[10px] font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1 self-start"
                    >
                      {copiedCode === `color-${idx}` ? 'Copied!' : 'Copy HEX'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-3">
              Brand Typography
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs uppercase font-bold text-slate-400 mb-1">Heading Font</div>
                <div className="text-2xl font-bold font-heading text-slate-900">Outfit Display</div>
                <div className="text-xs text-slate-500 mt-1">
                  Modern geometric proportions with rounded technical terminals. Friendly, clean, and forward-looking.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs uppercase font-bold text-slate-400 mb-1">Body &amp; Interface Font</div>
                <div className="text-2xl font-bold font-sans text-slate-900">Plus Jakarta Sans</div>
                <div className="text-xs text-slate-500 mt-1">
                  Engineered for crisp readability on high-DPI screens and mobile devices during emergency calls.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
          <div className="text-xs text-slate-600">
            Registered Trademark &copy; 2026 TinStar Heating &amp; Cooling &bull; Nanaimo, BC &bull; tinstar.ca
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
          >
            Close Brand Suite
          </button>
        </div>

      </div>
    </div>
  );
}
