
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, link }) => {
  return (
    <div className="product-card h-full flex flex-col">
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <Link to={link} className="luxury-button text-center">
            Learn More
          </Link>
          <a 
            href="tel:+15551234567" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-luxury-navy border border-luxury-navy font-medium rounded transition-all hover:bg-luxury-navy hover:text-white"
          >
            <Phone size={18} />
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
