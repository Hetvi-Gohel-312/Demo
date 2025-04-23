
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Artful <span className="text-luxury-gold">Home</span></h3>
            <p className="text-gray-300 mb-4">
              Premium sports flooring and equipment distributor providing high-quality solutions for various sporting needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-luxury-gold">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-luxury-gold">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-luxury-gold">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gym-flooring" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Gym Flooring
                </Link>
              </li>
              <li>
                <Link to="/outdoor-fitness" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Outdoor Fitness
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/badminton-court" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Badminton Court
                </Link>
              </li>
              <li>
                <Link to="/football-turf" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Football Turf
                </Link>
              </li>
              <li>
                <Link to="/playground-equipment" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Playground Equipment
                </Link>
              </li>
              <li>
                <Link to="/cricket-pitch" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Cricket Pitch Flooring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0 text-luxury-gold" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0 text-luxury-gold" />
                <span className="text-gray-300">info@artfulhome.com</span>
              </div>
              <address className="text-gray-300 not-italic">
                123 Luxury Avenue, <br />
                Design District, <br />
                New York, NY 10001
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Artful Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
