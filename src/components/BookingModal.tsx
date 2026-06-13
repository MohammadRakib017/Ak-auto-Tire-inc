import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Check, Send, Sparkles, Building2, Phone } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO, BUSINESS_HOURS } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, prefilledService }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00 AM');
  const [serviceType, setServiceType] = useState('General Auto Repair');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Submit states
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState('');

  // Sync prefilled service when modal opens or passes through
  useEffect(() => {
    if (prefilledService) {
      setServiceType(prefilledService);
    }
  }, [prefilledService, isOpen]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !phone || !preferredDate) {
      setFormErrors('Please supply your name, email, phone number, and a preferred date.');
      return;
    }

    setFormErrors('');
    setIsSubmitted(true);
  };

  const resetBookingForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setVehicleMake('');
    setVehicleModel('');
    setVehicleYear('');
    setPreferredDate('');
    setPreferredTime('09:00 AM');
    setServiceType('General Auto Repair');
    setAdditionalNotes('');
    setIsSubmitted(false);
  };

  const timeslots = [
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Heavy blur backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-100 flex flex-col max-h-[90vh] md:max-h-[85vh]"
      >
        
        {/* Banner with logo & instructions */}
        <div className="bg-ak-dark text-white p-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="flex items-center space-x-2.5 mb-1">
            <Calendar className="text-ak-red" size={20} />
            <span className="text-[10px] uppercase font-mono tracking-widest text-rose-400 font-bold block">
              Direct Service Booking bay
            </span>
          </div>
          
          <h3 className="font-heading font-extrabold text-xl py-0.5">
            Schedule Reliable Auto Service
          </h3>
          <p className="text-gray-400 text-xs mt-1 max-w-lg leading-relaxed">
            Fill in your preferred timeslot details. We will confirm your bay allocation quickly via phone or email in under 2 hours.
          </p>
        </div>

        {/* Action / submission form */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Success confirmation screen */
            <div className="py-10 text-center space-y-4 max-w-md mx-auto">
              <div className="inline-flex items-center justify-center p-4 bg-emerald-50 text-emerald-500 rounded-full animate-bounce border border-emerald-100 mb-2">
                <Check size={32} />
              </div>
              
              <h3 className="font-heading font-black text-2xl text-ak-dark">Booking Request Sent!</h3>
              
              <div className="bg-gray-50 border border-gray-200/50 p-4 rounded-xl text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold uppercase font-mono text-[9px]">Service Requested:</span>
                  <span className="text-gray-800 font-bold">{serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold uppercase font-mono text-[9px]">Requested Date:</span>
                  <span className="text-gray-800 font-bold">{preferredDate} <span className="text-ak-red font-mono">@ {preferredTime}</span></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold uppercase font-mono text-[9px]">Owner Contact:</span>
                  <span className="text-gray-800">{fullName} ({phone})</span>
                </div>
              </div>

              <p className="text-gray-500 text-xs leading-relaxed">
                Thank you for choosing AK Auto &amp; Tire Inc. A certified diagnostic rep will reach out shortly to finalise details. We look forward to servicing your vehicle!
              </p>

              <div className="pt-4 flex justify-center space-x-3">
                <button
                  type="button"
                  onClick={resetBookingForm}
                  className="px-4.5 py-2 text-xs font-bold text-gray-750 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer"
                >
                  Book New Slot
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-bold text-white bg-ak-dark hover:bg-slate-800 rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Form inputs */
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              {formErrors && (
                <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-xs font-bold text-ak-red">
                  {formErrors}
                </div>
              )}

              {/* Grid 1: Personal Details */}
              <div className="space-y-3.5">
                <h4 className="text-[11px] font-mono font-bold uppercase text-gray-400 tracking-wider">
                  1. Contact Information
                </h4>
                
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-1">
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone (+1 905-560-0777)"
                      className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 2: Vehicle Specs */}
              <div className="space-y-3.5 pt-1">
                <h4 className="text-[11px] font-mono font-bold uppercase text-gray-400 tracking-wider">
                  2. Vehicle Identification
                </h4>
                
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                    placeholder="Year (e.g. 2018)"
                    className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                  />
                  <input
                    type="text"
                    required
                    value={vehicleMake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                    placeholder="Make (e.g. Ford)"
                    className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                  />
                  <input
                    type="text"
                    required
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    placeholder="Model (e.g. F-150)"
                    className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              {/* Grid 3: Service type selection & Timeslot */}
              <div className="space-y-3.5 pt-1">
                <h4 className="text-[11px] font-mono font-bold uppercase text-gray-400 tracking-wider">
                  3. Service &amp; Schedule
                </h4>
                
                <div className="grid sm:grid-cols-12 gap-3.5">
                  
                  {/* Select Service Dropdown */}
                  <div className="sm:col-span-6">
                    <label className="block text-[10px] font-semibold text-gray-450 mb-1">Service category</label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white text-gray-700"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title} (From {srv.basePrice})
                        </option>
                      ))}
                      <option value="Other / Diagnosis Request">Other / Inspection Query</option>
                    </select>
                  </div>

                  {/* Day Picker */}
                  <div className="sm:col-span-3">
                    <label className="block text-[10px] font-semibold text-gray-450 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]} // prevent pick in history
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white text-gray-600 block"
                    />
                  </div>

                  {/* Time Picker */}
                  <div className="sm:col-span-3">
                    <label className="block text-[10px] font-semibold text-gray-450 mb-1">Time slot</label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white text-gray-700"
                    >
                      {timeslots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>
              </div>

              {/* Special instructions */}
              <div className="pt-1">
                <textarea
                  rows={2}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Describe details if possible (e.g., sound triggers when decelerating, fluid colors, winter swap info)"
                  className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                />
              </div>

              {/* Submit panel */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg border border-emerald-100 max-w-sm shrink-0">
                  <Sparkles size={13} fill="currentColor" />
                  <span className="text-[10px] font-semibold tracking-tight">Requires no credit card upfront</span>
                </div>
                
                <button
                  type="submit"
                  className="bg-ak-red hover:bg-ak-red-hover text-white font-bold text-xs.5 py-3 px-6 rounded-lg shadow-md cursor-pointer transition-colors inline-flex items-center space-x-2"
                >
                  <Send size={12} />
                  <span>Request Booking</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </motion.div>
    </div>
  );
};
export default BookingModal;
