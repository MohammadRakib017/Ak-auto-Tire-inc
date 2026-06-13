import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, X, Clock, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';
import { ServiceIcon } from './ServiceIcon';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'repairs', label: 'Mechanical Repairs' },
    { value: 'tires', label: 'Tires & Alignment' },
    { value: 'diagnostics', label: 'Computer Diagnostics' },
  ];

  // Filter services on category and search query
  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-ak-red uppercase tracking-widest bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-full inline-block">Our Direct Expertise</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ak-dark tracking-tight leading-tight">
            Comprehensive Auto Care &amp; Certified Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Our workshop is fitted with modern diagnostic terminals and precision tire fitting apparatus to care for all automotive models.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Quick tab controls */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-gray-100 rounded-xl max-w-full overflow-x-auto self-start">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-white text-ak-red shadow-sm'
                    : 'text-gray-600 hover:text-ak-dark hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sizable Searchbar Input */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <input
              type="text"
              placeholder="Search services (e.g. brakes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs py-3.5 pl-10 pr-4 bg-white border border-gray-200 focus:border-ak-red rounded-xl focus:outline-none transition duration-200 shadow-sm"
            />
            <Search size={15} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 font-bold text-xs text-gray-400 hover:text-ak-dark focus:outline-none cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Grid List of filtered service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white border border-gray-200/60 p-6 rounded-2xl hover:border-rose-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Visual accent blocks */}
                <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-bl from-rose-500/5 to-transparent rounded-tr-2xl group-hover:scale-110 transition duration-300" />
                
                <div>
                  <div className="flex items-start justify-between mb-5">
                    {/* Icon Base */}
                    <div className="bg-rose-50 text-ak-red p-3.5 rounded-xl group-hover:bg-ak-red group-hover:text-white transition-all duration-300 shadow-sm">
                      <ServiceIcon name={service.iconName} size={22} />
                    </div>
                    {/* Badge showing Price and Time details */}
                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 block uppercase">Estimate starting at</span>
                      <span className="font-heading font-extrabold text-ak-dark text-lg group-hover:text-ak-red transition-colors">{service.basePrice}</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-[18px] text-ak-dark group-hover:text-ak-red transition-colors duration-200 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-xs.5 leading-relaxed line-clamp-3 mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Service list items preview */}
                  <ul className="space-y-1.5 border-t border-gray-100 pt-4 mb-5">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-600">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mr-2" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                    {service.features.length > 2 && (
                      <li className="text-[10px] font-semibold text-ak-red pl-5">
                        +{service.features.length - 2} more features
                      </li>
                    )}
                  </ul>

                  {/* Call to detail action */}
                  <div className="flex items-center justify-between text-xs font-bold text-gray-700 mt-auto group-hover:text-ak-red transition duration-200">
                    <span className="flex items-center text-gray-500 text-[10px] uppercase font-mono">
                      <Clock size={12} className="mr-1.5" /> {service.estimatedTime}
                    </span>
                    <span className="inline-flex items-center text-ak-blue group-hover:text-ak-red">
                      View Details <ChevronRight size={14} className="ml-0.5 transform group-hover:translate-x-1 transition duration-200" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty fallback screen */}
          {filteredServices.length === 0 && (
            <div className="col-span-full py-16 text-center bg-white border border-dashed border-gray-300 rounded-2xl min-h-[250px] flex flex-col justify-center items-center">
              <HelpCircle size={44} className="text-gray-400 mb-3 animate-pulse" />
              <h3 className="font-heading font-bold text-lg text-gray-700">No Services Found</h3>
              <p className="text-xs text-gray-500 mt-1">Try clarifying your terms or resetting filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 text-xs font-bold text-white bg-ak-red rounded-lg"
              >
                Show All Services
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Detail Slideover Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content layout card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden z-20 border border-gray-100"
            >
              {/* Colored top header block */}
              <div className="bg-ak-dark text-white p-6 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors pointer-events-auto cursor-pointer"
                >
                  <X size={20} />
                </button>
                
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="bg-ak-red text-white p-2.5 rounded-xl shadow-md inline-block">
                    <ServiceIcon name={selectedService.iconName} size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full">
                    {selectedService.category.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="font-heading font-extrabold text-2xl tracking-tight pr-8">
                  {selectedService.title}
                </h3>
              </div>

              {/* Dynamic details body content */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase text-gray-400 tracking-wider mb-2">Service Overview</h4>
                  <p className="text-gray-600 text-sm.5 leading-relaxed">{selectedService.fullDetails}</p>
                </div>

                {/* Grid detail metrics */}
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200/50">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">Est. Repair Time</span>
                    <span className="text-sm.5 font-extrabold text-ak-dark flex items-center mt-1">
                      <Clock size={14} className="text-ak-red mr-1.5 shrink-0" />
                      {selectedService.estimatedTime}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">Estimated Price</span>
                    <span className="text-sm.5 font-extrabold text-ak-red mt-1 block">
                      From {selectedService.basePrice} <span className="text-[10px] font-normal text-gray-500">(Upfront Range)</span>
                    </span>
                  </div>
                </div>

                {/* Full visual checklist features */}
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase text-gray-400 tracking-wider mb-3">Service Inclusions</h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mr-2 mt-0.5" />
                        <span className="text-xs text-gray-700 font-medium leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal footer call to actions */}
                <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded-lg cursor-pointer text-center"
                  >
                    Close Details
                  </button>
                  <button
                    onClick={() => {
                      onSelectServiceForBooking(selectedService.title);
                      setSelectedService(null);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-ak-blue hover:bg-blue-800 rounded-lg shadow-md transition-colors inline-flex items-center justify-center cursor-pointer"
                  >
                    <span>Request This Service</span>
                    <ArrowRight size={13} className="ml-1.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default ServicesSection;
