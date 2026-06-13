import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Facebook, Clock, Menu, X, Award } from 'lucide-react';
import { BUSINESS_INFO, BUSINESS_HOURS } from '../data';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenEstimate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentStatusText, setCurrentStatusText] = useState('');

  // Watch scroll positioning for sticky glassy effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute live open/closed status based on EST/EDT local hours
  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        // Niagara Falls is in Eastern Time (ET)
        // Let's calculate the ET time
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/New_York',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
          weekday: 'long',
        });
        const parts = formatter.formatToParts(now);
        
        let weekday = '';
        let hourStr = '';
        let minStr = '';
        
        parts.forEach(p => {
          if (p.type === 'weekday') weekday = p.value;
          if (p.type === 'hour') hourStr = p.value;
          if (p.type === 'minute') minStr = p.value;
        });

        const hour = parseInt(hourStr, 10);
        const minute = parseInt(minStr, 10);
        const timeVal = hour * 100 + minute; // e.g. 1430 for 2:30 PM

        const todayHours = BUSINESS_HOURS.find(h => h.day === weekday);

        if (!todayHours || todayHours.closed) {
          setIsOpenNow(false);
          setCurrentStatusText('Closed Today (Sunday)');
          return;
        }

        // Parse hour string "8:00 AM - 6:00 PM"
        let startHour = 8;
        let endHour = 18; // default 6 PM

        if (weekday === 'Saturday') {
          endHour = 16; // 4:00 PM
        }

        const openTime = startHour * 100;
        const closeTime = endHour * 100;

        if (timeVal >= openTime && timeVal < closeTime) {
          setIsOpenNow(true);
          const displayEnd = endHour > 12 ? `${endHour - 12}:00 PM` : `${endHour}:00 AM`;
          setCurrentStatusText(`Open Now • Closes at ${displayEnd}`);
        } else {
          setIsOpenNow(false);
          const displayStart = `${startHour}:00 AM`;
          setCurrentStatusText(`Closed • Opens tomorrow at ${displayStart}`);
        }
      } catch (e) {
        // Fallback simple setup
        setIsOpenNow(true);
        setCurrentStatusText('Open Now • 8:00 AM - 6:00 PM');
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner / Utility Bar */}
      <div className="bg-ak-darker text-gray-300 text-xs py-2 px-4 border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Contact Quick Links */}
          <div className="flex items-center space-x-6 flex-wrap">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center space-x-1.5 hover:text-ak-red transition-colors">
              <Phone size={13} className="text-ak-red" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <div className="hidden sm:flex items-center space-x-1.5 text-gray-300">
              <MapPin size={13} className="text-ak-red" />
              <span>4589 Bridge St, Niagara Falls, NY</span>
            </div>
          </div>

          {/* Social Link and Active Open Signal */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 bg-gray-900/80 px-2.5 py-0.5 rounded-full border border-gray-800">
              <span className={`h-2 w-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-gray-500'}`} />
              <span className="text-[11px] font-medium tracking-tight text-gray-300">{currentStatusText}</span>
            </div>
            <a 
              href={BUSINESS_INFO.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-ak-red transition-colors p-1 bg-gray-900 rounded-md border border-gray-800 inline-flex items-center justify-center"
              aria-label="Visit us on Facebook"
            >
              <Facebook size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 py-3'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Elegant Emblem logo */}
          <a href="#home" className="flex items-center space-x-2.5 group">
            <div className="bg-ak-dark text-white p-2 rounded-lg group-hover:bg-ak-red transition-colors duration-300 shadow-md flex items-center justify-center">
              <Award className="text-ak-red group-hover:text-white transition-colors duration-300" size={24} />
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="font-heading font-extrabold text-[20px] tracking-tight text-ak-dark">AK AUTO</span>
                <span className="font-heading font-extrabold text-[20px] tracking-tight text-ak-red">&nbsp;&amp;&nbsp;TIRE</span>
              </div>
              <p className="text-[9px] font-mono tracking-widest text-gray-500 uppercase font-bold -mt-1">Inc • Niagara Falls</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-sm text-gray-600 hover:text-ak-red px-3 py-1.5 rounded-md hover:bg-gray-50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-2.5">
            <button
              onClick={onOpenEstimate}
              className="text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-lg transition-all duration-200 cursor-pointer"
            >
              Free Estimate
            </button>
            <button
              onClick={onOpenBooking}
              className="text-xs font-semibold text-white bg-ak-red hover:bg-ak-red-hover px-4.5 py-2.5 rounded-lg transition-all duration-200 shadow-sm shadow-ak-red/10 cursor-pointer hover:shadow-md hover:shadow-ak-red/20 transform hover:-translate-y-0.5"
            >
              Book Service
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-ak-red focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden"
            >
              <div className="px-5 py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-medium text-[15px] text-gray-700 hover:text-ak-red py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Mobile CTAs */}
                <div className="pt-4 pb-2 border-t border-gray-100 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEstimate();
                    }}
                    className="text-center py-3 text-xs font-semibold text-gray-700 bg-gray-100 rounded-lg cursor-pointer"
                  >
                    Estimate
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="text-center py-3 text-xs font-semibold text-white bg-ak-red hover:bg-ak-red-hover rounded-lg cursor-pointer shadow-sm shadow-ak-red/10"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
export default Header;
