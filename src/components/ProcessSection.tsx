import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_DATA } from '../data';
import { ServiceIcon } from './ServiceIcon';
import { CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold text-ak-red bg-rose-50 border border-rose-100 px-3 py-1 rounded-full inline-block uppercase tracking-widest font-mono">
            How We Care For Your Sedan, SUV or Truck
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ak-dark tracking-tight leading-tight">
            Our Professional 4-Step Automotive Process
          </h2>
          <p className="text-gray-500 text-sm.5 max-w-lg mx-auto">
            From the initial drive-in inspection to post-repair test trials, we apply exact diagnostic disciplines.
          </p>
        </div>

        {/* Process Steps Segment Controls */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PROCESS_DATA.map((step) => {
            const isSelected = activeStep === step.stepNumber;
            const isCompleted = activeStep > step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-ak-red shadow-lg shadow-rose-500/[0.03]'
                    : 'bg-white/60 border-gray-200 hover:bg-white hover:border-gray-350'
                }`}
              >
                <div className="flex items-center justify-between mb-3.5">
                  <span className={`font-heading font-black text-xs px-2.5 py-1 rounded-md ${
                    isSelected ? 'bg-ak-red text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    STEP {step.stepNumber}
                  </span>
                  {isCompleted && <CheckCircle2 size={16} className="text-emerald-500" />}
                </div>
                <h3 className={`font-heading font-bold text-sm ${isSelected ? 'text-ak-red' : 'text-ak-dark'}`}>
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Content Display Card with Motion animation */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-48 h-48 bg-gray-50 rounded-tl-full -mr-12 -mb-12 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {PROCESS_DATA.map((step) => {
              if (step.stepNumber !== activeStep) return null;
              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column Icon */}
                  <div className="md:col-span-3 flex justify-center">
                    <div className="bg-rose-50 border border-rose-100 text-ak-red p-7 rounded-2xl">
                      <ServiceIcon name={step.iconName} size={48} />
                    </div>
                  </div>

                  {/* Right Column details */}
                  <div className="md:col-span-9 space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-ak-blue uppercase tracking-widest font-mono">
                        Active Stage {step.stepNumber} of 4
                      </span>
                    </div>
                    
                    <h4 className="font-heading font-extrabold text-2xl text-ak-dark">
                      {step.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm.5 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>

                    {/* Step Specific Actions Checklist */}
                    <div className="grid sm:grid-cols-2 gap-3 pt-2 max-w-xl">
                      <div className="flex items-center text-xs text-gray-700 font-medium">
                        <CheckCircle2 size={14} className="text-ak-red mr-2 shrink-0" />
                        <span>Meticulous status evaluation</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-700 font-medium">
                        <CheckCircle2 size={14} className="text-ak-red mr-2 shrink-0" />
                        <span>OEM standard compliance check</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-700 font-medium">
                        <CheckCircle2 size={14} className="text-ak-red mr-2 shrink-0" />
                        <span>Strict workplace hygiene control</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-700 font-medium">
                        <CheckCircle2 size={14} className="text-ak-red mr-2 shrink-0" />
                        <span>Complete customer sign-off</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
export default ProcessSection;
