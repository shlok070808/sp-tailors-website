'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import Booking from '@/components/sections/Booking';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-luxury-darkBg z-50">
    <div className="text-center">
      <div className="animate-spin mb-4">
        <span className="text-6xl">✂️</span>
      </div>
      <h1 className="text-3xl font-playfair text-luxury-gold animate-pulse">S.P TAILORS</h1>
      <p className="text-gray-400 mt-2">Loading Premium Experience...</p>
    </div>
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="bg-luxury-darkBg text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
