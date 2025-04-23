
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';

const Flooring: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageBanner 
        title="Flooring Solutions" 
        backgroundImage="https://images.unsplash.com/photo-1556194472-1d6de0d9591d?auto=format&fit=crop&w=1200&q=80" 
      />
      <div className="luxury-container">
        <h2 className="section-heading mb-6">Comprehensive Flooring Options</h2>
        <p className="text-gray-700 mb-8">
          Explore our wide range of premium flooring solutions for every space, from residential to commercial environments.
        </p>
        {/* Add more content about flooring */}
      </div>
      <ContactCTA />
      <Footer />
    </>
  );
};

export default Flooring;
