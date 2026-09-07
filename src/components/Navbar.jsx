import React, { useState, useEffect } from 'react';
import { Phone, Clock, Shield, Sparkles, Menu, X, ChevronDown, Flame, Snowflake, Wind, Wrench, AlertTriangle, Calculator, MapPin } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/hvacData';

export default function Navbar({ onOpenBooking, onOpenBrandKit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navServices = [
    { name: 'Heat Pumps & Mini-Splits', href: '#heat-pumps', icon: Snowflake, desc: 'CleanBC Rebates up to $11,000' },
    { name: 'Heating Systems & Furnaces', href: '#heating', icon: Flame, desc: 'High-efficiency gas & electric' },
    { name: 'Air Conditioning & Cooling', href: '#cooling', icon: Snowflake, desc: 'Whole-home summer comfort' },
    { name: 'Certified Air Balancing', href: '#air-balancing', icon: Wind, desc: 'Precision TAB airflow testing' },
    { name: 'New Installations & Tin Shop', href: '#installations', icon: Wrench, desc: 'Custom sheet metal fabrication' },
    { name: '24/7 Emergency Repairs', href: '#repairs', icon: AlertTriangle, desc: 'Nanaimo on-call dispatch', emergency: true },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      
      {/* 24/7 Emergency Notification Top Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-brand-950 text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="font-semibold text-slate-200">
              Nanaimo 24/7 Emergency HVAC Dispatch On-Call:
            </span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="font-bold text-flame-400 hover:text-flame-300 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              {COMPANY_INFO.phone}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-5 text-slate-300">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-400" />
              Red Seal Certified Journeyperson
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-flame-400" />
              Serving Greater Nanaimo & Central Island
            </span>
            <span className="text-slate-600">&bull;</span>
            <button
              onClick={onOpenBrandKit}
              className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 hover:bg-brand-500/30 transition-all border border-brand-500/30"
              title="Inspect logo designs and branding assets"
            >
              <Sparkles className="w-3 h-3 text-flame-400" />
              New Logo Suite
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-lg shadow-slate-900/5 py-2.5 border-b border-slate-200/80'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-1">
            <Logo variant="emblem" size={isScrolled ? 'sm' : 'md'} onOpenBrandKit={onOpenBrandKit} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-brand-600 py-2 transition-colors"
                aria-expanded={servicesDropdown}
              >
                Services & Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 grid gap-1.5 animate-fadeIn">
                  {navServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={index}
                        href={service.href}
                        onClick={() => setServicesDropdown(false)}
                        className={`p-2.5 rounded-xl flex items-start gap-3 transition-colors ${
                          service.emergency
                            ? 'hover:bg-red-50 text-slate-900 group'
                            : 'hover:bg-brand-50 text-slate-900 group'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                          service.emergency ? 'bg-red-100 text-red-600' : 'bg-brand-100 text-brand-600'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold ${service.emergency ? 'text-red-700 group-hover:text-red-800' : 'text-slate-900 group-hover:text-brand-600'}`}>
                            {service.name}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {service.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#heat-pumps"
              className="text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors"
            >
              Heat Pumps
            </a>

            <a
              href="#air-balancing"
              className="text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors flex items-center gap-1"
            >
              Air Balancing
              <span className="text-[9px] bg-flame-100 text-flame-700 font-extrabold px-1.5 py-0.5 rounded uppercase">
                Specialty
              </span>
            </a>

            <a
              href="#rebate-calculator"
              className="text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors flex items-center gap-1"
            >
              <Calculator className="w-3.5 h-3.5 text-brand-600" />
              Rebates
            </a>

            <a
              href="#areas"
              className="text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors"
            >
              Nanaimo Areas
            </a>

            <a
              href="#repairs"
              className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              24/7 Repairs
            </a>

          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-800 hover:text-brand-700 text-xs font-bold border border-slate-200 hover:border-brand-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              {COMPANY_INFO.phone}
            </a>

            <button
              onClick={() => onOpenBooking('heat-pumps', false)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Request Service & Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBooking('repairs-24-7', true)}
              className="px-2.5 py-1.5 rounded-lg bg-red-600 text-white text-[11px] font-bold"
            >
              24/7 Dispatch
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-fadeIn shadow-xl">
            <div className="grid gap-2">
              <a
                href="#heat-pumps"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2.5 text-sm"
              >
                <Snowflake className="w-4 h-4 text-brand-600" />
                Heat Pumps & CleanBC Rebates
              </a>
              <a
                href="#heating"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2.5 text-sm"
              >
                <Flame className="w-4 h-4 text-flame-600" />
                Heating Systems & Furnaces
              </a>
              <a
                href="#cooling"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2.5 text-sm"
              >
                <Snowflake className="w-4 h-4 text-brand-600" />
                Air Conditioning & Cooling
              </a>
              <a
                href="#air-balancing"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2.5 text-sm"
              >
                <Wind className="w-4 h-4 text-emerald-600" />
                Certified Air Balancing (TAB)
              </a>
              <a
                href="#installations"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2.5 text-sm"
              >
                <Wrench className="w-4 h-4 text-slate-600" />
                New Installations & Custom Tin Shop
              </a>
              <a
                href="#repairs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl font-bold text-red-600 hover:bg-red-50 flex items-center gap-2.5 text-sm"
              >
                <AlertTriangle className="w-4 h-4 text-red-600" />
                24/7 Emergency Repairs (Nanaimo)
              </a>
              <a
                href="#rebate-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2.5 text-sm"
              >
                <Calculator className="w-4 h-4 text-brand-600" />
                Heat Pump Rebate Calculator
              </a>
              <a
                href="#areas"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2.5 text-sm"
              >
                <MapPin className="w-4 h-4 text-brand-600" />
                Nanaimo Service Areas & ETA
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrandKit();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-flame-500" />
                Inspect Logo Variations & Brand Assets
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('repairs-24-7', true);
                }}
                className="w-full py-3 px-4 rounded-xl bg-red-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-red-600/30"
              >
                <AlertTriangle className="w-4 h-4 text-amber-300" />
                24/7 Emergency Dispatch Call
              </button>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
}
