import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import EstimateModal from './components/EstimateModal';
import SchemaMarkup from './components/SchemaMarkup';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [estimateOpen, setEstimateOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');

  // Triggers booking modal with custom service name prefilled
  const handleSelectServiceForBooking = (serviceName: string) => {
    setPrefilledService(serviceName);
    setBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setPrefilledService('');
    setBookingOpen(true);
  };

  const handleOpenEstimate = () => {
    setEstimateOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white antialiased text-gray-800">
      
      {/* Schema LD+JSON Head Injector */}
      <SchemaMarkup />

      {/* Main Layout Elements */}
      <Header 
        onOpenBooking={handleOpenGeneralBooking} 
        onOpenEstimate={handleOpenEstimate} 
      />
      
      <main className="flex-1">
        
        {/* Hero Segment */}
        <Hero 
          onOpenEstimate={handleOpenEstimate} 
          onOpenBooking={handleOpenGeneralBooking} 
        />

        {/* Services Segment */}
        <ServicesSection 
          onSelectServiceForBooking={handleSelectServiceForBooking} 
        />

        {/* Brand Core Strengths */}
        <WhyChooseUs />

        {/* Business Story */}
        <AboutUs />

        {/* Inspection Steps Workflow */}
        <ProcessSection />

        {/* Client Reviews Grid */}
        <Testimonials />

        {/* Accompanying FAQs & SEO references */}
        <FAQSection />

        {/* High Conversion callouts bar */}
        <CTASection 
          onOpenBooking={handleOpenGeneralBooking} 
        />

        {/* Coordinates Map, Hours Table, Contact Form panel */}
        <ContactSection />

      </main>

      {/* Standardized business footer */}
      <Footer />

      {/* Modals & Slide-ins with prefill callbacks */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        prefilledService={prefilledService}
      />

      <EstimateModal
        isOpen={estimateOpen}
        onClose={() => setEstimateOpen(false)}
      />

    </div>
  );
}
