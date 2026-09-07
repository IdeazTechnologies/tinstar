import React from 'react';

/**
 * 3D Star Icon from the Primary Emblem (transparent PNG)
 */
export function LogoIcon({ size = 48, className = '' }) {
  return (
    <img
      src="/images/tinstar-star-3d.png"
      alt="TinStar 3D Star Emblem"
      width={size}
      height={size}
      className={`object-contain drop-shadow-sm select-none ${className}`}
      loading="eager"
    />
  );
}

/**
 * Workwear / Decal Badge using the 3D Star Emblem
 */
export function LogoBadge({ size = 52, theme = 'dark' }) {
  const isLightText = theme === 'light';
  return (
    <div className="inline-flex items-center gap-3">
      <div className="relative flex items-center justify-center p-2 rounded-2xl bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 border border-brand-500/30 shadow-lg">
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
          <span className="text-flame-500 font-bold">Heating</span> &bull; <span className="text-brand-500 font-bold">Cooling</span> &bull; Air Balancing
        </span>
      </div>
    </div>
  );
}

/**
 * Main Logo Component for TinStar Heating & Cooling
 * Uses the Primary 3D Emblem requested by the client.
 */
export default function Logo({
  variant = 'full', // 'full' (Primary Emblem + horizontal lockup), 'emblem' (pure Primary Emblem), 'badge'
  theme = 'dark',   // 'dark' = for light backgrounds; 'light' = for dark backgrounds
  size = 'md',
  className = '',
  onOpenBrandKit = null
}) {
  const isLight = theme === 'light';

  if (variant === 'badge') {
    return <LogoBadge theme={theme} />;
  }

  // Pure Primary Emblem standalone image
  if (variant === 'emblem') {
    const emblemHeight = size === 'lg' ? 'h-20' : size === 'sm' ? 'h-12' : 'h-16';
    return (
      <div
        className={`inline-flex items-center cursor-pointer group ${className}`}
        onClick={onOpenBrandKit}
        title="TinStar Heating & Cooling - Primary Emblem (Click for Brand Suite)"
      >
        <img
          src={isLight ? '/images/tinstar-logo-emblem-light-text.png' : '/images/tinstar-logo-emblem-transparent.png'}
          alt="TinStar Heating & Cooling Nanaimo"
          className={`${emblemHeight} w-auto object-contain drop-shadow transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
    );
  }

  // Default 'full' brand lockup featuring the 3D Primary Emblem Star + crisp typography
  const starSize = size === 'lg' ? 56 : size === 'sm' ? 40 : 48;
  const mainTextSize = size === 'lg' ? 'text-2xl sm:text-3xl' : size === 'sm' ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl';

  return (
    <div
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      onClick={onOpenBrandKit}
      title="TinStar Heating & Cooling (Click to view Brand Assets)"
    >
      {/* 3D Primary Emblem Star */}
      <div className="relative shrink-0">
        <img
          src="/images/tinstar-star-3d.png"
          alt="TinStar 3D Star Emblem"
          style={{ width: `${starSize}px`, height: `${starSize}px` }}
          className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Typography matched to the Primary Emblem brand styling */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-heading font-black ${mainTextSize} tracking-tight ${isLight ? 'text-white' : 'text-slate-900'}`}>
            TIN<span className="text-flame-500">STAR</span>
          </span>
          <span className="font-mono text-[11px] font-bold text-brand-600 bg-brand-50 border border-brand-200 px-1.5 py-0.5 rounded shadow-xs">
            .ca
          </span>
        </div>
        
        <div className="flex items-center gap-1 text-[10px] tracking-widest uppercase font-extrabold mt-1">
          <span className="text-flame-500">HEATING</span>
          <span className={isLight ? 'text-slate-500' : 'text-slate-300'}>&bull;</span>
          <span className="text-brand-500">COOLING</span>
          <span className={isLight ? 'text-slate-500' : 'text-slate-300'}>&bull;</span>
          <span className={isLight ? 'text-slate-300' : 'text-slate-500'}>NANAIMO, BC</span>
        </div>
      </div>
    </div>
  );
}
