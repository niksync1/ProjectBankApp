import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import KeyFeatures from './components/KeyFeatures';
import FeaturesSection from './components/FeaturesSection';
// import TestimonialsCarousel from './components/TestimonialsCarousel';
import ProductShowcase from './components/ProductShowcase';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <KeyFeatures />
        <FeaturesSection />
        {/* <TestimonialsCarousel /> */}
        <ProductShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}