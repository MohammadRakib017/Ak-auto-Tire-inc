import React from 'react';
import { Phone, CalendarRange, Clock, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-ak-darker to-ak-dark text-white relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-700/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
        
        <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/20 px-3.5 py-1.5 rounded-full text-rose-400 text-xs uppercase font-bold tracking-widest font-mono">
          <Sparkles size={12} className="animate-pulse" />
          <span>Need Reliable Auto Repair Services?</span>
        </div>

        <div className="space-y-4">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-3xl mx-auto leading-tight">
            Contact AK Auto &amp; Tire Inc Today
          </h2>
          <p className="text-gray-300 text-sm.5 sm:text-base max-w-2xl mx-auto leading-relaxed">
            Contact AK Auto &amp; Tire Inc today for professional automotive maintenance, diagnostics, tire services, and repairs. Our mechanics are ready to assist.
          </p>
        </div>

        {/* Direct Action Buttons matching the spec exactly */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 max-w-md mx-auto">
          {/* Double buttons */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center justify-center space-x-2.5 bg-ak-red hover:bg-ak-red-hover text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-ak-red/25 hover:shadow-xl hover:shadow-ak-red/35 transition-all duration-200 cursor-pointer text-center"
          >
            <Phone size={15} fill="currentColor" />
            <span>Call +1 905-560-0777</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center justify-center space-x-2.5 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-bold py-3.5 px-6 rounded-xl transition duration-200 cursor-pointer"
          >
            <CalendarRange size={15} />
            <span>Schedule Service</span>
          </button>
        </div>

        {/* Subtle trust signal lines */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-3.5 text-xs text-gray-400 font-medium">
          <span className="flex items-center">
            <Clock size={14} className="mr-2 text-rose-500" />
            Mon - Fri: 8 AM - 6 PM | Sat: 8 AM - 4 PM
          </span>
          <span className="hidden sm:inline text-gray-700">|</span>
          <span className="flex items-center">
            <Award size={14} className="mr-2 text-rose-500" />
            Honest Upfront Certified Estimates
          </span>
        </div>

      </div>
    </section>
  );
};
export default CTASection;
