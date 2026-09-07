import React from 'react';

export function LogoIcon({ size = 42, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TinStar Logo Icon"
    >
      <defs>
        <linearGradient id="tinStarMetal" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="40%" stopColor="#94a3b8" />
          <stop offset="70%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="flameFacet" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient id="coolFacet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <filter id="tinShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodOpacity="0.25" floodColor="#0f172a" />
        </filter>
      </defs>

      <g filter="url(#tinShadow)">
        {/* Left 3D Tin Facets */}
        <path d="M50 8 L50 50 L18 68 L28 34 Z" fill="url(#tinStarMetal)" />
        <path d="M50 8 L50 50 L10 34 L28 34 Z" fill="#64748b" opacity="0.9" />
        <path d="M50 50 L50 92 L18 68 Z" fill="#334155" />

        {/* Top Right Heating Flame Facet */}
        <path d="M50 8 C56 22 66 24 74 18 C72 29 80 34 88 34 L50 50 Z" fill="url(#flameFacet)" />
        <path d="M50 8 C53 18 60 22 66 22 C62 30 68 34 76 36 L50 50 Z" fill="#facc15" opacity="0.8" />

        {/* Bottom Right Cooling Ice/Air Facet */}
        <path d="M50 50 L88 34 C82 46 86 60 80 68 L50 50 Z" fill="url(#coolFacet)" />
        <path d="M50 50 L80 68 C72 78 64 86 50 92 Z" fill="#0369a1" />
        <path d="M50 50 L70 62 C65 70 58 76 50 82 Z" fill="#7dd3fc" opacity="0.85" />

        {/* Crisp star center glimmer */}
        <polygon points="50,44 52.5,48.5 57,49.5 53.5,53 54.5,58 50,55 45.5,58 46.5,53 43,49.5 47.5,48.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function LogoBadge({ size = 56, theme = 'dark' }) {
  const isLightText = theme === 'light';
  return (
    <div className="inline-flex items-center gap-3">
      <div className="relative flex items-center justify-center p-2 rounded-2xl bg-gradient-to-br from-slate-900 to-brand-950 border border-brand-500/30 shadow-lg">
        <LogoIcon size={size} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-heading font-extrabold text-xl tracking-wider ${isLightText ? 'text-white' : 'text-slate-900'}`}>
            TIN<span className="text-flame-500">STAR</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest bg-brand-500/10 text-brand-600 px-1.5 py-0.5 rounded border border-brand-500/20">
            Nanaimo
          </span>
        </div>
        <span className={`text-[11px] font-semibold tracking-wider uppercase ${isLightText ? 'text-slate-300' : 'text-slate-600'}`}>
          <span className="text-flame-500">Heating</span> &bull; <span className="text-brand-500">Cooling</span> &bull; Air Balancing
        </span>
      </div>
    </div>
  );
}

export default function Logo({
  variant = 'full',
  theme = 'dark', // 'dark' = dark text on light background; 'light' = white text on dark background
  size = 'md',
  className = '',
  onOpenBrandKit = null
}) {
  const isLightText = theme === 'light';

  if (variant === 'badge') {
    return <LogoBadge theme={theme} />;
  }

  if (variant === 'raster') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <img
          src="/images/tinstar-logo-emblem.png"
          alt="TinStar Heating & Cooling Nanaimo"
          className="h-11 w-11 object-contain drop-shadow"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-heading font-black text-2xl tracking-tight leading-none ${isLightText ? 'text-white' : 'text-slate-900'}`}>
              TIN<span className="text-flame-500">STAR</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              .ca
            </span>
          </div>
          <span className={`text-[10px] tracking-wider uppercase font-semibold mt-0.5 ${isLightText ? 'text-slate-300' : 'text-slate-500'}`}>
            <span className="text-flame-500 font-bold">HEATING</span> &bull; <span className="text-brand-500 font-bold">COOLING</span> &bull; NANAIMO, BC
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' vector logo
  const iconSize = size === 'lg' ? 52 : size === 'sm' ? 34 : 42;
  const textSize = size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-lg' : 'text-2xl';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative group cursor-pointer" onClick={onOpenBrandKit} title="Click to view TinStar Brand & Logo Variations">
        <LogoIcon size={iconSize} className="transition-transform duration-300 group-hover:scale-105" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-heading font-black ${textSize} tracking-tight ${isLightText ? 'text-white' : 'text-slate-900'}`}>
            TIN<span className="text-flame-500">STAR</span>
          </span>
          <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 border border-brand-200 px-1.5 py-0.5 rounded">
            .ca
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] tracking-widest uppercase font-bold mt-1">
          <span className="text-flame-500">HEATING</span>
          <span className="text-slate-300">&bull;</span>
          <span className="text-brand-500">COOLING</span>
          <span className="text-slate-300">&bull;</span>
          <span className={isLightText ? 'text-slate-300' : 'text-slate-500'}>NANAIMO, BC</span>
        </div>
      </div>
    </div>
  );
}
