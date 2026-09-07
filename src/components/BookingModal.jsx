import React, { useState } from 'react';
import { X, Phone, AlertTriangle, Calendar, CheckCircle2, Clock, Wrench, Shield, Send } from 'lucide-react';
import { COMPANY_INFO, SERVICE_AREAS } from '../data/hvacData';

export default function BookingModal({
  isOpen,
  onClose,
  initialService = 'heat-pumps',
  isEmergencyDefault = false
}) {
  const [isEmergency, setIsEmergency] = useState(isEmergencyDefault);
  const [service, setService] = useState(initialService);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    neighborhood: 'Departure Bay',
    address: '',
    notes: '',
    preferredTime: 'Anytime Today'
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync state when opened
  React.useEffect(() => {
    setIsEmergency(isEmergencyDefault);
    if (initialService) setService(initialService);
    setSubmitted(false);
  }, [isOpen, initialService, isEmergencyDefault]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Top Header */}
        <div className={`px-6 py-5 text-white flex items-center justify-between transition-colors ${
          isEmergency
            ? 'bg-gradient-to-r from-red-600 via-flame-600 to-red-700'
            : 'bg-gradient-to-r from-brand-900 via-brand-800 to-brand-950'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
              {isEmergency ? (
                <AlertTriangle className="w-6 h-6 text-amber-300 animate-bounce" />
              ) : (
                <Wrench className="w-6 h-6 text-brand-300" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">
                {isEmergency ? '24/7 Emergency Dispatch Request' : 'Schedule HVAC Service & Estimate'}
              </h3>
              <p className="text-xs text-white/80">
                {isEmergency
                  ? 'Nanaimo on-call Red Seal technician priority queue'
                  : 'TinStar Heating, Cooling & Air Balancing • Nanaimo, BC'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation state */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900 font-heading">
                {isEmergency ? 'Emergency Dispatch Triggered!' : 'Service Request Received!'}
              </h4>
              <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                {isEmergency
                  ? 'Our on-call Nanaimo technician has been notified via priority dispatch. We are reviewing your address and will call you back within 10-15 minutes.'
                  : 'Thank you! A TinStar comfort specialist will contact you shortly to confirm your appointment time and discuss your project.'}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700">
              <div><strong>Name:</strong> {formData.name || 'Nanaimo Resident'}</div>
              <div><strong>Phone:</strong> {formData.phone || '(250) 758-STAR'}</div>
              <div><strong>Service:</strong> {service.toUpperCase()}</div>
              <div><strong>Area:</strong> {formData.neighborhood}, Nanaimo, BC</div>
              <div><strong>Status:</strong> <span className={isEmergency ? 'text-red-600 font-bold' : 'text-emerald-600 font-bold'}>{isEmergency ? 'PRIORITY 24/7 DISPATCH' : 'SCHEDULED QUEUE'}</span></div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-500 mb-3">Need immediate answers right this second?</p>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-flame-500 hover:bg-flame-600 text-white font-bold text-sm shadow-lg shadow-flame-500/30 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Directly: {COMPANY_INFO.phone}
              </a>
            </div>

            <div>
              <button
                onClick={onClose}
                className="text-xs text-slate-500 hover:text-slate-700 underline"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form state */
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            
            {/* Urgency Toggle Selector */}
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-2xl">
              <button
                type="button"
                onClick={() => setIsEmergency(false)}
                className={`py-2.5 px-3 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  !isEmergency
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                Standard Appointment
              </button>

              <button
                type="button"
                onClick={() => setIsEmergency(true)}
                className={`py-2.5 px-3 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  isEmergency
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'text-red-700 hover:text-red-800'
                }`}
              >
                <AlertTriangle className="w-4 h-4 text-amber-300" />
                24/7 Emergency Now
              </button>
            </div>

            {isEmergency && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Urgent Breakdown Protocol:</strong> For active heating failure in sub-zero weather, gas odors, or heavy water leaks, submit below or call{' '}
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="underline font-bold text-red-950">
                    {COMPANY_INFO.phone}
                  </a>{' '}
                  immediately for the fastest dispatch.
                </div>
              </div>
            )}

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Service Required
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'heat-pumps', label: 'Heat Pumps' },
                  { id: 'heating', label: 'Heating / Furnace' },
                  { id: 'cooling', label: 'Air Conditioning' },
                  { id: 'air-balancing', label: 'Air Balancing & TAB' },
                  { id: 'installations', label: 'New Installation' },
                  { id: 'repairs-24-7', label: '24/7 Emergency Repair' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setService(item.id)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all ${
                      service === item.id
                        ? 'bg-brand-50 border-brand-500 text-brand-900 font-bold ring-2 ring-brand-500/20'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (Nanaimo / Island) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. (250) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nanaimo Area / District</label>
                <select
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                >
                  {SERVICE_AREAS.map((a, i) => (
                    <option key={i} value={a.name}>{a.name} ({a.eta} avg dispatch)</option>
                  ))}
                  <option value="Other Nanaimo">Other Central Island Area</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tell us about your home & equipment (furnace age, symptoms, heat pump goals)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Furnace blowing cold air, or looking for CleanBC heat pump rebate quote for 2,200 sq ft home in North Nanaimo..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full text-sm px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>100% Privacy &bull; Red Seal Certified</span>
              </div>

              <button
                type="submit"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm shadow-lg transition-all ${
                  isEmergency
                    ? 'bg-red-600 hover:bg-red-700 shadow-red-600/30'
                    : 'bg-brand-600 hover:bg-brand-700 shadow-brand-600/30'
                }`}
              >
                <Send className="w-4 h-4" />
                {isEmergency ? 'Dispatch Emergency Technician' : 'Submit Service Request'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
