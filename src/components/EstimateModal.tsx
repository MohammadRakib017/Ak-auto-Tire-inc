import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calculator, Clock, CheckCircle2, ChevronRight, Sparkles, Send, Phone } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose }) => {
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv' | 'truck' | 'hybrid'>('sedan');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  
  // Contact details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  
  // Submit status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<string>('');

  const toggleServiceSelection = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Compute conceptual total estimated price based on service base values
  const calculateTotalEstimate = () => {
    let baseSum = 0;
    selectedServiceIds.forEach((id) => {
      const match = SERVICES_DATA.find((s) => s.id === id);
      if (match) {
        // Parse "$89" -> 89
        const numeric = parseInt(match.basePrice.replace('$', ''), 10);
        baseSum += isNaN(numeric) ? 0 : numeric;
      }
    });

    // Apply multiplier based on vehicle size class
    let multiplier = 1.0;
    if (vehicleType === 'suv') multiplier = 1.15;
    if (vehicleType === 'truck') multiplier = 1.30;
    if (vehicleType === 'hybrid') multiplier = 1.05;

    const baseMin = Math.round(baseSum * multiplier);
    const baseMax = Math.round(baseSum * multiplier * 1.25);

    if (baseMin === 0) return { min: 0, max: 0, display: '$0' };
    return {
      min: baseMin,
      max: baseMax,
      display: `$${baseMin} - $${baseMax}`
    };
  };

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServiceIds.length === 0) {
      setFormErrors('Please select at least one service to estimate costs.');
      return;
    }
    if (!fullName || !email || !phone) {
      setFormErrors('Please fill in your name, email, and phone number.');
      return;
    }

    setFormErrors('');
    setIsSubmitted(true);
  };

  const resetEstimator = () => {
    setSelectedServiceIds([]);
    setVehicleType('sedan');
    setFullName('');
    setEmail('');
    setPhone('');
    setAdditionalNotes('');
    setIsSubmitted(false);
  };

  const currentEst = calculateTotalEstimate();

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

      {/* Estimator modal layout sheet */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-100 flex flex-col md:grid md:grid-cols-12 max-h-[90vh] md:max-h-[85vh]"
      >
        
        {/* Left Side: Summary Panel (Col 5) */}
        <div className="md:col-span-5 bg-ak-dark text-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-rose-500/20 text-ak-red p-2.5 rounded-xl">
                <Calculator size={20} />
              </div>
              <span className="text-[10px] tracking-widest font-mono font-bold uppercase text-rose-400">
                Live Estimates
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-xl text-white">Cost Calculator</h3>
              <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                Configure your service choice here to generate a live estimation range instantly, with transparent upfront variables.
              </p>
            </div>

            {/* Calculations Box */}
            <div className="bg-gray-900/60 border border-gray-800/80 p-5 rounded-xl space-y-3.5">
              <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-wider block">Estimated Quote Range</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="font-heading font-black text-3xl sm:text-4xl text-rose-500 leading-none">
                  {currentEst.display}
                </span>
                <span className="text-[10px] text-gray-400 font-mono">*Pre-tax</span>
              </div>
              
              <div className="border-t border-gray-800/60 pt-3">
                <span className="text-[10px] text-emerald-400 font-bold block flex items-center">
                  <CheckCircle2 size={11} className="mr-1 inline-block" /> Includes Multi-Point Check
                </span>
                <span className="text-[9px] text-gray-500 block leading-tight mt-1">
                  Adjusts dynamically corresponding to vehicle size multiplier factors.
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block pt-6 border-t border-gray-800/50">
            <span className="text-[10px] text-gray-400 font-mono block">Questions? Call Repair Bay:</span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="font-heading font-extrabold text-yellow-405 text-sm hover:text-rose-500 flex items-center mt-1 text-white">
              <Phone size={13} className="mr-2 text-rose-500 shrink-0" fill="currentColor" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Right Side: Action form details (Col 7) */}
        <div className="md:col-span-7 bg-white p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-full">
          {/* Header Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-ak-dark p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {isSubmitted ? (
            /* Success confirmation panel */
            <div className="py-8 text-center space-y-4 my-auto">
              <div className="inline-flex items-center justify-center p-4 bg-emerald-50 text-emerald-500 rounded-full animate-bounce border border-emerald-100 mb-2">
                <Check size={32} />
              </div>
              <h3 className="font-heading font-black text-2xl text-ak-dark">Estimate Request Submitted!</h3>
              <div className="bg-gray-50 border border-gray-200/50 p-4.5 rounded-xl text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold uppercase font-mono text-[9px]">Requested For:</span>
                  <span className="text-gray-800 font-bold">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold uppercase font-mono text-[9px]">Phone:</span>
                  <span className="text-gray-800 font-mono">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold uppercase font-mono text-[9px]">Aprox Range:</span>
                  <span className="text-rose-600 font-extrabold font-heading text-sm">{currentEst.display}</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs max-w-sm mx-auto leading-relaxed">
                We have received your configuration! One of our certified managers will reach out to schedule your service with direct price guarantees.
              </p>
              
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  type="button"
                  onClick={resetEstimator}
                  className="px-4.5 py-2 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer"
                >
                  Calculate Another
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-bold text-white bg-ak-dark hover:bg-slate-800 rounded-lg cursor-pointer shadow-sm"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            /* Main Interactive Selection Form */
            <form onSubmit={handleEstimateSubmit} className="space-y-6">
              
              {/* Dynamic state validations */}
              {formErrors && (
                <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-xs font-bold text-ak-red">
                  {formErrors}
                </div>
              )}

              {/* Step 1: Vehicle Select Category */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-gray-400 tracking-wider mb-2">
                  1. Vehicle Type (Adjusts pricing ratios)
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {(['sedan', 'suv', 'truck', 'hybrid'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setVehicleType(type)}
                      className={`py-2 text-xs font-bold rounded-lg border capitalize cursor-pointer text-center ${
                        vehicleType === type
                          ? 'border-ak-red bg-rose-50/50 text-ak-red font-extrabold shadow-sm'
                          : 'border-gray-200 hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Services with checkboxes */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-gray-400 tracking-wider mb-2">
                  2. Select services needed (Multiple okay)
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-[170px] overflow-y-auto pr-1 border border-gray-100 p-2 rounded-xl">
                  {SERVICES_DATA.map((service) => {
                    const isSelected = selectedServiceIds.includes(service.id);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleServiceSelection(service.id)}
                        className={`text-left p-2.5 rounded-lg border flex items-center justify-between text-xs transition duration-200 cursor-pointer ${
                          isSelected
                            ? 'border-ak-red bg-rose-50/10 text-ak-dark font-semibold'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className="truncate pr-1">{service.title}</span>
                        <div className={`h-4.5 w-4.5 rounded flex items-center justify-center border shrink-0 ${
                          isSelected ? 'bg-ak-red border-ak-red text-white' : 'border-gray-300'
                        }`}>
                          {isSelected && <Check size={11} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Fast Contact Details */}
              <div className="space-y-3">
                <label className="block text-[11px] font-mono font-bold uppercase text-gray-400 tracking-wider">
                  3. Your Contact Details
                </label>
                
                <div className="space-y-2.5">
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="First &amp; Last Name"
                    className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                  />
                  
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                    />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                    />
                  </div>

                  <input
                    type="text"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Vehicle Year, Make, Model or special remarks (optional)"
                    className="w-full text-xs p-3 bg-gray-50 border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              {/* Footer pricing and submission button */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-[10px] text-gray-400 font-mono block">Estimated Total:</span>
                  <span className="font-heading font-black text-rose-500 text-lg md:text-xl">
                    {currentEst.display}
                  </span>
                </div>
                
                <button
                  type="submit"
                  className="bg-ak-red hover:bg-ak-red-hover text-white font-bold text-xs.5 py-3 px-5 sm:px-6 rounded-lg transition-all duration-200 cursor-pointer shadow-md inline-flex items-center space-x-1.5"
                >
                  <Send size={12} />
                  <span>Request Guaranteed Estimate</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </motion.div>
    </div>
  );
};
export default EstimateModal;
