import React from 'react';
import { Phone, Mail, MapPin, Facebook, Award, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-ak-darker text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Core Layout Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Business description / summary */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="bg-ak-red text-white p-2 rounded-lg">
                <Award size={18} />
              </div>
              <span className="font-heading font-black text-lg text-white tracking-tight uppercase">
                AK Auto &amp; Tire
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              AK Auto &amp; Tire Inc delivers high-integrity automotive services to Niagara Falls. We are committed to certified repairs, transparent metrics, and customer happiness.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={BUSINESS_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-900 border border-gray-800 p-2 rounded-md hover:bg-ak-red hover:text-white transition-colors text-gray-300 inline-flex items-center"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={15} />
              </a>
              <span className="text-[10px] uppercase font-mono font-bold text-gray-500">Facebook Page</span>
            </div>
          </div>

          {/* Col 2: High-speed Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li><a href="#home" className="hover:text-ak-red transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-ak-red transition-colors">Our Services</a></li>
              <li><a href="#why-choose-us" className="hover:text-ak-red transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-ak-red transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="hover:text-ak-red transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-ak-red transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-ak-red transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services matching listings */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Services List
            </h4>
            <ul className="space-y-3.5 text-xs">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-ak-red transition-colors">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact details directly matching business */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Contact Information
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400">
              <li className="flex items-start">
                <MapPin size={15} className="mr-2 text-ak-red shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center hover:text-white transition-colors">
                  <Phone size={15} className="mr-2 text-ak-red shrink-0" />
                  <span>Phone: +1 905-560-0777</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center hover:text-white transition-colors">
                  <Mail size={15} className="mr-2 text-ak-red shrink-0" />
                  <span>Email: {BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start">
                <ShieldCheck size={15} className="mr-2 text-emerald-450 shrink-0 mt-0.5" />
                <span className="text-gray-500 font-mono text-[10px]">Licensed NY Automotive Shop</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Subfooter bottom details & Copyrights */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-xs text-gray-500">
              Copyright &copy; {currentYear} <strong>AK Auto &amp; Tire Inc</strong>. All rights reserved.
            </p>
            <p className="text-[10px] text-gray-600 font-mono">
              Designed as a modern, high-conversion responsive automotive website.
            </p>
          </div>

          {/* Scroll to Top button */}
          <button
            onClick={handleScrollToTop}
            className="p-2 bg-gray-900 hover:bg-ak-red text-gray-300 hover:text-white rounded-lg border border-gray-800 hover:border-transparent transition-all shrink-0 cursor-pointer text-xs flex items-center space-x-1.5"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
