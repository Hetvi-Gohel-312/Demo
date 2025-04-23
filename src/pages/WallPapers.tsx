
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';

const WallPapers: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageBanner 
        title="Wall Papers" 
        backgroundImage="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80" 
      />
      <div className="luxury-container">
        <h2 className="section-heading mb-6">Elegant Wall Paper Designs</h2>
        <p className="text-gray-700 mb-8">
          Transform your walls with our stunning collection of wall papers, offering sophistication and style for every interior.
        </p>
        {/* Add more content about wall papers */}
      </div>
      <ContactCTA />
      <Footer />
    </>
  );
};

export default WallPapers;
