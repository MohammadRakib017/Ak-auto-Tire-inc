import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus, Search, Sparkles, HelpCircle } from 'lucide-react';
import { FAQS_DATA, SEO_ACCORDION_KEYWORDS } from '../data';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [seoOpenIndex, setSeoOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'standard' | 'seo'>('standard');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSeoAccordion = (index: number) => {
    setSeoOpenIndex(seoOpenIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold text-ak-red uppercase tracking-widest bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-full inline-block">
            Answers &amp; Resources
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-ak-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm.5">
            Clear responses about routine maintenance intervals, pricing transparency, and safe mechanical diagnostics.
          </p>
        </div>

        {/* Tab Controls (Standard vs SEO Local Insights) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-150 rounded-xl">
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'standard'
                  ? 'bg-white text-ak-red shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              General FAQ
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center space-x-1 cursor-pointer ${
                activeTab === 'seo'
                  ? 'bg-white text-ak-dark shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <Sparkles size={12} className="text-rose-500" />
              <span>Niagara Falls Local Services</span>
            </button>
          </div>
        </div>

        {/* Panel 1: Standard FAQs */}
        {activeTab === 'standard' ? (
          <div className="space-y-4">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-gray-50/50 transition-colors cursor-pointer"
                  >
                    <span className="font-heading font-extrabold text-[15px] text-ak-dark pr-6 leading-snug">
                      {faq.question}
                    </span>
                    <span className={`p-1 rounded-lg bg-gray-50 text-gray-500 transform transition-transform duration-250 shrink-0 ${isOpen ? 'rotate-180 bg-rose-50 text-ak-red' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-gray-100 overflow-hidden"
                      >
                        <div className="p-5 text-gray-600 text-xs.5 leading-relaxed bg-gray-50/30">
                          {faq.answer}
                          
                          {/* Inner Helper Categories Badge */}
                          <div className="mt-3.5 flex items-center">
                            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                              Topic: {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          /* Panel 2: Highly Target-Optimized Niagara Local Services */
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-ak-blue/5 via-rose-500/5 to-transparent border border-gray-200/60 p-4.5 rounded-xl mb-6">
              <h4 className="text-xs font-bold text-ak-dark flex items-center">
                <HelpCircle size={15} className="mr-2 text-rose-500" />
                Niagara Falls Drivers SEO Search Queries
              </h4>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                AK Auto &amp; Tire Inc meets professional criteria as a leading regional automotive repair workshop. Search our targeted services locally in New York state.
              </p>
            </div>

            {SEO_ACCORDION_KEYWORDS.map((seo, idx) => {
              const isOpen = seoOpenIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:border-gray-300 transition-all"
                >
                  <button
                    onClick={() => toggleSeoAccordion(idx)}
                    className="w-full text-left p-5 flex justify-between items-center bg-white transition-colors cursor-pointer"
                  >
                    <span className="font-heading font-extrabold text-[14.5px] text-ak-dark flex items-center pr-6 leading-snug">
                      <span className="h-2 w-2 rounded-full bg-rose-500 mr-2.5 shrink-0" />
                      {seo.term}
                    </span>
                    <span className={`p-1 rounded-lg bg-gray-50 text-gray-500 transform transition-transform duration-250 shrink-0 ${isOpen ? 'rotate-180 bg-rose-100 text-ak-dark' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-gray-100 overflow-hidden"
                      >
                        <div className="p-5 text-gray-600 text-xs.5 leading-relaxed bg-rose-50/5">
                          {seo.desc}
                          <div className="mt-3">
                            <a
                              href="#contact"
                              className="text-[10px] font-bold text-ak-red hover:underline"
                            >
                              Inquire about this Niagara Falls service &rarr;
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
export default FAQSection;
