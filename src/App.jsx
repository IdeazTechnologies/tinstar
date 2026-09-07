import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AirBalancingDeepDive from './components/AirBalancingDeepDive';
import HeatPumpRebateCalculator from './components/HeatPumpRebateCalculator';
import EmergencyRepairSection from './components/EmergencyRepairSection';
import TechnicianCraftsmanship from './components/TechnicianCraftsmanship';
import NanaimoAreasAndReviews from './components/NanaimoAreasAndReviews';
import Footer from './components/Footer';
import BrandKitModal from './components/BrandKitModal';
import BookingModal from './components/BookingModal';
import { Phone, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from './data/hvacData';

export default function App() {
  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    service: 'heat-pumps',
    isEmergency: false,
  });

  const [brandKitOpen, setBrandKitOpen] = useState(false);

  const openBooking = (service = 'heat-pumps', isEmergency = false) => {
    setBookingModalState({
      isOpen: true,
      service,
      isEmergency,
    });
  };

  const closeBooking = () => {
    setBookingModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-brand-500 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        onOpenBooking={openBooking}
        onOpenBrandKit={() => setBrandKitOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={openBooking}
          onOpenBrandKit={() => setBrandKitOpen(true)}
        />

        {/* 6 Core HVAC Services Section */}
        <ServicesSection
          onOpenBooking={openBooking}
        />

        {/* Certified Air Balancing Deep Dive (Signature Specialty) */}
        <AirBalancingDeepDive
          onOpenBooking={openBooking}
        />

        {/* Heat Pump Rebate Calculator (CleanBC / Vancouver Island) */}
        <HeatPumpRebateCalculator
          onOpenBooking={openBooking}
        />

        {/* 24/7 Emergency Repairs Banner */}
        <EmergencyRepairSection
          onOpenBooking={openBooking}
        />

        {/* Red Seal Technician & Custom Tin Shop Craftsmanship */}
        <TechnicianCraftsmanship
          onOpenBooking={openBooking}
          onOpenBrandKit={() => setBrandKitOpen(true)}
        />

        {/* Nanaimo Areas & Customer Reviews */}
        <NanaimoAreasAndReviews
          onOpenBooking={openBooking}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={openBooking}
        onOpenBrandKit={() => setBrandKitOpen(true)}
      />

      {/* Modals */}
      <BrandKitModal
        isOpen={brandKitOpen}
        onClose={() => setBrandKitOpen(false)}
      />

      <BookingModal
        isOpen={bookingModalState.isOpen}
        onClose={closeBooking}
        initialService={bookingModalState.service}
        isEmergencyDefault={bookingModalState.isEmergency}
      />

      {/* Floating 24/7 Mobile Action Pill */}
      <div className="fixed bottom-4 right-4 z-30 flex sm:hidden items-center gap-2">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-red-600 text-white font-bold text-xs shadow-2xl shadow-red-600/50 border border-white/20 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>24/7 Emergency Call</span>
        </a>
      </div>

    </div>
  );
}
