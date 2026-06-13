import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, Star, Clock, Check, Building, Facebook } from 'lucide-react';
import { BUSINESS_INFO, BUSINESS_HOURS } from '../data';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      setErrorStatus('Please fill in all details.');
      return;
    }
    setErrorStatus('');
    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-ak-red uppercase tracking-widest bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-full inline-block">
            Get in Touch
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ak-dark tracking-tight">
            Contact AK Auto &amp; Tire Inc
          </h2>
          <p className="text-gray-600 text-sm.5">
            Whether you need a quick tire swap, severe brake replacement, or diagnostic advice, our service writers are standing by.
          </p>
        </div>

        {/* Info & Form double columns */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Column 1: Core credentials details (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-xl text-ak-dark border-b border-gray-150 pb-3">
                Garage Information
              </h3>
              
              <div className="space-y-4 text-sm.5">
                
                {/* Physical Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="bg-rose-50 border border-rose-100 text-ak-red p-2.5 rounded-xl shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-gray-400 block tracking-wider">Our Address</span>
                    <strong className="text-ak-dark font-bold font-heading text-sm sm:text-base.5 block mt-0.5 leading-snug">
                      {BUSINESS_INFO.address}
                    </strong>
                    <span className="text-xs text-gray-400 font-mono italic block mt-1">Directly on Bridge St near Niagara Gorge</span>
                  </div>
                </div>

                {/* Direct Dial Care */}
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="flex items-start space-x-3.5 group p-2 rounded-xl hover:bg-rose-50/50 transition-colors cursor-pointer"
                >
                  <div className="bg-rose-50 border border-rose-100 text-ak-red p-2.5 rounded-xl shrink-0 group-hover:bg-ak-red group-hover:text-white transition-all duration-200 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-gray-400 block tracking-wider group-hover:text-ak-red">Direct Phone Line</span>
                    <strong className="text-ak-dark font-extrabold font-heading text-[18px] block mt-0.5 text-ak-red">
                      {BUSINESS_INFO.phoneDisplay}
                    </strong>
                    <span className="text-xs text-gray-400 block mt-0.5 font-bold">Tap to dial instantly</span>
                  </div>
                </a>

                {/* Email Dispatch */}
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`} 
                  className="flex items-start space-x-3.5 group p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="bg-rose-50 border border-rose-100 text-ak-blue p-2.5 rounded-xl shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-gray-400 block tracking-wider">Email Support</span>
                    <strong className="text-gray-700 font-bold font-mono text-sm block mt-0.5 group-hover:text-ak-dark">
                      {BUSINESS_INFO.email}
                    </strong>
                  </div>
                </a>

                {/* Facebook Community */}
                <a 
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3.5 group p-2 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <div className="bg-rose-50 border border-rose-100 text-ak-blue p-2.5 rounded-xl shrink-0 mt-0.5">
                    <Facebook size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-gray-400 block tracking-wider">Social Channels</span>
                    <strong className="text-gray-700 font-bold font-heading text-xs.5 block mt-0.5 group-hover:text-ak-blue">
                      AK Auto &amp; Tire Social Profile
                    </strong>
                    <span className="text-xs text-[10.5px] text-gray-450 block mt-0.5">Follow for tire discounts</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Business Hours Table layout */}
            <div className="bg-gray-50 border border-gray-250/70 p-6 rounded-2xl space-y-4">
              <h4 className="font-heading font-extrabold text-sm text-ak-dark flex items-center border-b border-gray-200 pb-2.5">
                <Clock size={16} className="text-ak-red mr-2 shrink-0" />
                Service Operating Hours
              </h4>
              
              <div className="space-y-2">
                {BUSINESS_HOURS.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs py-1 border-b border-gray-150 last:border-0">
                    <span className="font-bold text-gray-600">{h.day}</span>
                    <span className={`font-mono ${h.closed ? 'text-ak-red font-bold' : 'text-gray-800 font-medium'}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Elegant and Sizable Contact Form (Col 7) */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-200/60 p-6 md:p-8 rounded-2xl relative shadow-sm">
            <h3 className="font-heading font-extrabold text-lg text-ak-dark mb-1">
              Send an Online Inquiry
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Have specific vehicle needs or repair questions? Send us an outline of the issue.
            </p>

            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-emerald-200 p-6 rounded-xl text-center space-y-3 shadow-md"
                >
                  <div className="inline-flex items-center justify-center p-3.5 bg-emerald-100 text-emerald-500 rounded-full">
                    <Check size={24} />
                  </div>
                  <h4 className="font-heading font-extrabold text-lg text-gray-800">Message Placed Successfully!</h4>
                  <p className="text-gray-500 text-xs.5 leading-relaxed max-w-sm mx-auto">
                    Thank you. Your message has reached our front service writers desk. We will call or email you right away!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {errorStatus && (
                    <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-xs font-semibold text-ak-red">
                      {errorStatus}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-750 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rachel Green"
                        className="w-full text-xs p-3 bg-white border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:ring-1 focus:ring-ak-red"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-750 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 905-560-0777"
                        className="w-full text-xs p-3 bg-white border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:ring-1 focus:ring-ak-red"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-750 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rachel@gmail.com"
                      className="w-full text-xs p-3 bg-white border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:ring-1 focus:ring-ak-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-750 mb-1">Vehicle Details &amp; Message</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please note vehicle Year, Make, Model, and are you booking a flat tire repair or is there a general suspension noise?..."
                      className="w-full text-xs p-3 bg-white border border-gray-200 focus:border-ak-red rounded-lg focus:outline-none focus:ring-1 focus:ring-ak-red"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-ak-red hover:bg-ak-red-hover text-white font-bold text-xs.5 py-3 rounded-lg shadow-md transition-all duration-250 cursor-pointer inline-flex items-center justify-center space-x-2"
                  >
                    <Send size={13} />
                    <span>Send Message to AK Auto</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Embedded Real Google Map pointing to 4589 Bridge St, Niagara Falls, NY */}
        <div className="bg-gray-150 border border-gray-220 rounded-2xl overflow-hidden shadow-md">
          <div className="bg-ak-dark text-white p-4.5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2.5">
              <MapPin size={18} className="text-ak-red shrink-0" />
              <span className="text-xs font-semibold tracking-tight">4589 Bridge St, Niagara Falls, NY, United States, L2E 2R6</span>
            </div>
            <a 
              href="https://maps.google.com/?q=4589+Bridge+St,+Niagara+Falls,+NY,+L2E+2R6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-[10px] text-rose-450 hover:text-white flex items-center bg-white/5 py-1 px-3 border border-white/10 rounded"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
          
          <div className="relative w-full aspect-video md:aspect-[3/1] max-h-[380px]">
            <iframe
              src={BUSINESS_INFO.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AK Auto &amp; Tire Inc Google Maps Location"
              className="absolute inset-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
export default ContactSection;
