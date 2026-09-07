import React from 'react';
import { MapPin, Clock, Star, Quote, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { SERVICE_AREAS, REVIEWS, COMPANY_INFO } from '../data/hvacData';

export default function NanaimoAreasAndReviews({ onOpenBooking }) {
  return (
    <section id="areas" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            Central Vancouver Island Service Territory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Proudly Keeping Nanaimo &amp; Surrounding Communities Comfortable
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our service vans are centrally dispatched throughout Nanaimo, enabling prompt response times for heat pump installations, furnace maintenance, and 24/7 emergencies.
          </p>
        </div>

        {/* Local Areas Grid with Dispatch ETAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-brand-50 text-brand-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{area.name}</h4>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-3">{area.detail}</p>
              
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Emergency ETA:</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {area.eta}
                </span>
              </div>
            </div>
          ))}

          {/* Central Island Callout */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-900 to-slate-950 text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="text-xs uppercase font-bold text-flame-400 mb-1">Extended Island Reach</div>
              <h4 className="text-sm font-bold text-white">Need Service Outside Nanaimo?</h4>
              <p className="text-xs text-slate-300 mt-1">
                We also take on custom residential installations across Bowser, Errington, and Gabriola Island by appointment.
              </p>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="mt-4 text-xs font-bold text-flame-300 hover:text-white flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Dispatch: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Real Reviews From Nanaimo Homeowners
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            See why homeowners from Departure Bay to Lantzville trust <strong>tinstar.ca</strong> for heating, cooling &amp; air balancing.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">{review.name}</h5>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3 h-3 text-brand-600" />
                      <span>{review.neighborhood}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{review.date}</span>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold mb-3">
                  Service: {review.service}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Nanaimo Customer Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-heading">
              Ready for Unmatched Comfort in Your Nanaimo Home?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Get an accurate, zero-pressure quote on heat pumps, gas furnaces, or precision air balancing today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking('heat-pumps', false)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-flame-500 hover:bg-flame-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-flame-500/30 transition-all hover:scale-[1.02]"
            >
              Schedule Free Estimate
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all text-center"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
