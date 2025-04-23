
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';

const GlassFilm: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageBanner 
        title="Glass Film" 
        backgroundImage="https://images.unsplash.com/photo-1610409538799-55ded7d5b9c4?auto=format&fit=crop&w=1200&q=80" 
      />
      <div className="luxury-container">
        <h2 className="section-heading mb-6">Advanced Glass Film Solutions</h2>
        <p className="text-gray-700 mb-8">
          Enhance privacy, reduce glare, and improve energy efficiency with our premium glass film technologies.
        </p>
        {/* Add more content about glass film */}
      </div>
      <ContactCTA />
      <Footer />
    </>
  );
};

export default GlassFilm;
