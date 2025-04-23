
import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-luxury-navy py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Our team of experts is ready to help you select the perfect flooring and equipment solutions that meet your specific needs and budget.
        </p>
        <Link 
          to="/contact" 
          className="luxury-button inline-block"
        >
          Get a Free Quote Today
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
