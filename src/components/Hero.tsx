import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, FileText, CheckCircle2, Shield, Users2, Star, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeroProps {
  onOpenEstimate: () => void;
  onOpenBooking: () => void;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1600&h=900', // Modern shop bay
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1600&h=900', // Diagnostic computer
  'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=1600&h=900'  // Wheels/brakes alignment
];

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate, onOpenBooking }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative text-white overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center bg-gray-950">
      {/* Dynamic Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGES[currentImageIdx]})` }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Dark radial gradients and visual frames */}
        <div className="absolute inset-0 bg-gradient-to-r from-ak-darker via-ak-dark/95 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline Content column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Target Audience / Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-ak-red/10 border border-ak-red/30 px-3 py-1.5 rounded-full text-ak-red font-semibold text-xs uppercase tracking-wider"
            >
              <Sparkles size={14} className="text-ak-red animate-pulse" />
              <span>Full Automotive Maintenance &amp; Tires</span>
            </motion.div>

            {/* High-Impact Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white"
              >
                Professional Auto Repair <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-400">
                  &amp; Tire Services
                </span> <br />
                You Can Trust
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
              >
                From oil changes and brake repairs to tire replacement and engine diagnostics, AK Auto &amp; Tire Inc keeps your vehicle running safely and efficiently.
              </motion.p>
            </div>

            {/* High-Conversion Prompt Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center space-x-2 bg-ak-red hover:bg-ak-red-hover text-white text-base font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-ak-red/25 hover:shadow-xl hover:shadow-ak-red/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Phone size={18} fill="currentColor" />
                <span>Call Now: +1 (905) 560-0777</span>
              </a>

              <button
                onClick={onOpenEstimate}
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 text-base font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-sm cursor-pointer"
              >
                <FileText size={18} />
                <span>Get Free Estimate</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/60 max-w-lg"
            >
              <div className="flex items-center space-x-2">
                <Shield size={18} className="text-emerald-400 shrink-0" />
                <span className="text-xs text-gray-300 font-medium font-heading">Certified Mechanics</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span className="text-xs text-gray-300 font-medium font-heading">Quality Fit Guarantees</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 md:col-span-1">
                <Users2 size={18} className="text-emerald-400 shrink-0" />
                <span className="text-xs text-gray-300 font-medium font-heading">Local Business Trust</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Info Sidebar Card Column (Conversion Booster) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-gradient-to-b from-gray-900/90 to-gray-950/95 border border-gray-800 p-6 rounded-2xl shadow-2xl backdrop-blur-md space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-rose-500 uppercase tracking-widest font-mono">Customer Scorecard</span>
                <div className="flex items-center space-x-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white">4.9★ Local Rating</h3>
              <p className="text-xs text-gray-400 font-medium mt-1">Based on Niagara Falls, NY Google &amp; FB Verified Reviews</p>
            </div>

            <div className="space-y-3.5 border-t border-b border-gray-800/80 py-4.5">
              <div className="flex justify-between text-xs text-gray-300">
                <span className="font-semibold">Need Quick Maintenance?</span>
                <span className="text-emerald-400 font-bold">Same-Day Open Slots</span>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span className="font-semibold">Standard Brake Pad Check</span>
                <span className="text-white font-mono font-bold">Complimentary</span>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span className="font-semibold">Flat Tire Puncture Safety Patch</span>
                <span className="text-white font-mono font-bold">Only $25</span>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <span className="font-semibold">Computer Diagnostics (OBD Scan)</span>
                <span className="text-white font-mono font-bold">$75 (Full Diagnostic)</span>
              </div>
            </div>

            {/* Quick Consultation call-to-action */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-semibold text-white">Have an active issue? Let&#39;s talk:</h4>
              <button
                onClick={onOpenBooking}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs.5 py-3 rounded-lg border border-slate-700 transition duration-200 cursor-pointer text-center"
              >
                Schedule Check-Up
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
