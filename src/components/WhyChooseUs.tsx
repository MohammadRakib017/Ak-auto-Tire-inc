import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldAlert, Award, AlertCircle, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data';
import { ServiceIcon } from './ServiceIcon';

export const WhyChooseUs: React.FC = () => {
  const stats = [
    { num: '10+', label: 'Years Combined Service' },
    { num: '15,000+', label: 'Vehicles Repaired' },
    { num: '100%', label: 'Satisfaction Guaranteed' },
    { num: '4.9★', label: 'Average Google Rating' },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-ak-dark text-white relative">
      {/* Structural visual background curves */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-red-650/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full inline-block uppercase tracking-widest font-mono">
            AK Auto Advantage
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
            Why Hundreds of Niagara Drivers Choose AK Auto &amp; Tire Inc
          </h2>
          <p className="text-gray-400 text-sm.5 max-w-xl mx-auto">
            We hold ourselves to rigorous standards of transparency, efficiency, and craft. Enjoy direct honest service with zero stress.
          </p>
        </div>

        {/* Counter Stats Section Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-black/40 border border-gray-800/80 rounded-2xl mb-16 shadow-2xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3 space-y-1">
              <span className="font-heading font-black text-3xl sm:text-4xl text-rose-500 block leading-none">
                {stat.num}
              </span>
              <span className="text-gray-300 font-bold text-xs max-w-[140px] mx-auto block leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Feature Cards Grid (Why Choose Us reasons) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_DATA.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-gray-900/60 hover:bg-gray-900 border border-gray-800/60 hover:border-rose-500/30 p-6.5 rounded-2xl hover:shadow-xl hover:shadow-rose-500/[0.02] transition-all duration-300 flex flex-col items-start gap-4"
            >
              <div className="bg-rose-500/10 text-rose-500 p-3 rounded-lg border border-rose-500/15">
                <ServiceIcon name={reason.iconName} size={22} />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-lg text-white">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-xs.5 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Promise Section Banner (Trust Booster) */}
        <div className="mt-16 bg-gradient-to-r from-ak-blue/30 via-rose-950/20 to-black/30 border border-gray-800/80 p-6.5 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center space-x-4">
            <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-full border border-emerald-500/20 shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base text-white">The AK Auto Transparent Guarantee</h4>
              <p className="text-xs text-gray-400 max-w-xl leading-relaxed mt-0.5">
                We guarantee all components are installed according to official manufacturer specifications. We supply original diagnostic reports to back up every quote.
              </p>
            </div>
          </div>
          <div className="text-right shrink-0 w-full md:w-auto">
            <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-1">
              Authorized Service Shop
            </span>
            <span className="font-mono text-gray-300 font-semibold text-xs py-1 px-3 bg-white/5 border border-white/10 rounded-md">
              LLC Certified #78B-450
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
export default WhyChooseUs;
