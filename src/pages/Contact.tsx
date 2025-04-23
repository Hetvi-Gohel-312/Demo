
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Form submitted! We'll get back to you soon.");
  };

  return (
    <>
      <Navbar />
      
      <PageBanner 
        title="Contact Us" 
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <span className="text-luxury-gold uppercase tracking-wider font-medium">Get in Touch</span>
            <h2 className="section-heading mt-2">Contact Information</h2>
            <p className="text-gray-700 mb-8">
              We're here to answer any questions you may have about our products and services. Reach out to us and we'll respond as soon as we can.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-luxury-gold focus:border-luxury-gold block w-full p-2.5" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-luxury-gold focus:border-luxury-gold block w-full p-2.5" 
                    placeholder="name@example.com" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-luxury-gold focus:border-luxury-gold block w-full p-2.5" 
                  placeholder="+1 (123) 456-7890" 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-luxury-gold focus:border-luxury-gold block w-full p-2.5" 
                  placeholder="How can we help you?" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-luxury-gold focus:border-luxury-gold block w-full p-2.5" 
                  placeholder="Leave a comment..." 
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="luxury-button"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h3 className="font-serif text-2xl font-bold mb-6">How to Reach Us</h3>
              
              <div className="space-y-6">
                <div className="contact-item">
                  <Phone size={20} className="text-luxury-gold" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Mail size={20} className="text-luxury-gold" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@artfulhome.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <MapPin size={20} className="text-luxury-gold" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">
                      123 Luxury Avenue, <br />
                      Design District, <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="text-gray-700 mb-6">
                Follow us on social media to stay updated with our latest products, projects, and announcements.
              </p>
              
              <div className="flex space-x-6">
                <a href="https://instagram.com" className="flex flex-col items-center hover:text-luxury-gold transition-colors">
                  <Instagram size={24} className="mb-2" />
                  <span>Instagram</span>
                </a>
                <a href="https://facebook.com" className="flex flex-col items-center hover:text-luxury-gold transition-colors">
                  <Facebook size={24} className="mb-2" />
                  <span>Facebook</span>
                </a>
                <a href="https://twitter.com" className="flex flex-col items-center hover:text-luxury-gold transition-colors">
                  <Twitter size={24} className="mb-2" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
            {/* In a real application, you would embed a Google Map or another map service here */}
            <div className="flex items-center justify-center h-full bg-gray-300">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-luxury-gold" />
                <h3 className="font-serif text-2xl font-bold">Our Location</h3>
                <p>123 Luxury Avenue, Design District, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
