import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const AboutUs: React.FC = () => {
  const values = [
    {
      title: 'Quality Workmanship',
      desc: 'We follow stringent OEM torque specifications, verify balances digitally, and utilize professional components.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Communication',
      desc: 'No jargon. We walk you through live diagnostics, explaining the why and how of any recommended service.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images visual frame Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-rose-500/10 rounded-2xl transform translate-x-3 translate-y-3 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1000"
              alt="AK Auto & Tire Shop mechanics"
              className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-lg border border-gray-100"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Badges */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-4.5 py-3.5 rounded-xl border border-gray-100 shadow-xl flex items-center space-x-3 max-w-[220px]">
              <span className="font-heading font-black text-3xl text-ak-red leading-none">100%</span>
              <p className="text-xs text-gray-700 font-bold leading-tight font-heading">
                Transparency &amp; Direct Integrity Guarantee
              </p>
            </div>
          </div>

          {/* Text content details Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-ak-red uppercase tracking-widest bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-full inline-block">
              Our Professional Heritage
            </span>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ak-dark tracking-tight leading-tight">
              About AK Auto &amp; Tire Inc
            </h2>

            <div className="space-y-4 text-gray-600 text-sm.5 leading-relaxed">
              <p>
                At <strong>AK Auto &amp; Tire Inc</strong>, we understand that finding an auto shop you can genuinely trust with your family vehicle is no easy task. That is why our facility on Bridge St, Niagara Falls, NY is committed to delivering reliable automotive repair and tire services with quality workmanship, completely transparent communication, and exceptional customer care.
              </p>
              <p>
                Whether you commute to Buffalo, drive a local fleet vehicle, or manage regular family transport, we offer a safe haven of practical mechanical solutions without sales pressure. We source prime durable components, implement high-caliber technology scanners, and walk you through every checklist before any work begins.
              </p>
            </div>

            {/* In-depth core values block */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {values.map((v, i) => (
                <div key={i} className="space-y-1.5 p-4.5 bg-gray-50 border border-gray-200/50 rounded-xl">
                  <div className="flex items-center space-x-2 text-ak-red">
                    <v.icon size={18} />
                    <h3 className="font-heading font-bold text-sm text-ak-dark">{v.title}</h3>
                  </div>
                  <p className="text-gray-505 text-xs font-medium leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick Achievements Bullet list */}
            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center text-xs font-bold text-gray-700">
                <Check size={16} className="text-ak-red mr-2" />
                <span>Locally Owned &amp; Operated</span>
              </div>
              <div className="flex items-center text-xs font-bold text-gray-700">
                <Check size={16} className="text-ak-red mr-2" />
                <span>Certified Brand Tire Retailer</span>
              </div>
              <div className="flex items-center text-xs font-bold text-gray-700">
                <Check size={16} className="text-ak-red mr-2" />
                <span>Niagara Falls Community Partner</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default AboutUs;
