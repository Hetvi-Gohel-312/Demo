
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';

const InsectScreens: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageBanner 
        title="Insect Screens" 
        backgroundImage="https://images.unsplash.com/photo-1581579186913-45ac20648ec6?auto=format&fit=crop&w=1200&q=80" 
      />
      <div className="luxury-container">
        <h2 className="section-heading mb-6">Protective Insect Screen Solutions</h2>
        <p className="text-gray-700 mb-8">
          Keep your spaces comfortable and bug-free with our high-quality insect screen solutions, designed for durability and effectiveness.
        </p>
        {/* Add more content about insect screens */}
      </div>
      <ContactCTA />
      <Footer />
    </>
  );
};

export default InsectScreens;
