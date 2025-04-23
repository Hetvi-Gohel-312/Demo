
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';

const OtherProducts: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageBanner 
        title="Other Products" 
        backgroundImage="https://images.unsplash.com/photo-1581579186913-45ac20648ec6?auto=format&fit=crop&w=1200&q=80" 
      />
      <div className="luxury-container">
        <h2 className="section-heading mb-6">Diverse Product Range</h2>
        <p className="text-gray-700 mb-8">
          Discover our extensive collection of additional products designed to meet your unique needs and enhance your living spaces.
        </p>
        {/* Add more content about other products */}
      </div>
      <ContactCTA />
      <Footer />
    </>
  );
};

export default OtherProducts;
