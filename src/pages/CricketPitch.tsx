
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { Check } from 'lucide-react';

const CricketPitch: React.FC = () => {
  const pitchTypes = [
    {
      name: "Indoor Cricket Pitch Surfaces",
      description: "Premium surfaces designed specifically for indoor cricket facilities, providing consistent bounce and optimal performance.",
      features: [
        "Shock-absorbent underlays for player safety",
        "Consistent ball bounce characteristics",
        "Durable against repeated impact",
        "Low maintenance requirements",
        "Professional marking options"
      ],
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Outdoor Artificial Cricket Pitches",
      description: "Weather-resistant artificial surfaces that provide consistent playing conditions throughout the season.",
      features: [
        "UV-resistant materials",
        "All-weather performance",
        "Excellent drainage capabilities",
        "Realistic ball response",
        "Reduced maintenance compared to natural turf"
      ],
      image: "https://images.unsplash.com/photo-1629285483773-6b5cde2171d6?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cricket Practice Nets",
      description: "Specialized flooring systems for cricket practice nets that withstand intensive use and provide realistic play conditions.",
      features: [
        "Designed for heavy-use training environments",
        "Accurate ball bounce for effective practice",
        "Durable against repeated ball impact and foot traffic",
        "Low maintenance requirements",
        "Available with built-in shock absorption"
      ],
      image: "https://images.unsplash.com/photo-1592633578180-61397bd7f8d4?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const maintenanceTips = [
    "Regular brushing to maintain uniform fiber direction",
    "Periodic deep cleaning to remove dirt and debris",
    "Prompt repair of any damaged areas",
    "Proper rolling techniques for optimum density",
    "Protection from sharp objects and heavy point loads",
    "Application of approved cleaning agents only",
    "Following manufacturer-specific care instructions",
    "Professional inspection and maintenance services"
  ];

  return (
    <>
      <Navbar />
      
      <PageBanner 
        title="Cricket Pitch Flooring" 
        backgroundImage="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-luxury-gold uppercase tracking-wider font-medium">Specialized Solutions</span>
            <h2 className="section-heading mt-2">Premium Cricket Pitch Flooring</h2>
            <p className="text-gray-700 mb-4">
              Our cricket pitch flooring solutions are designed to provide consistent, high-performance playing surfaces for both indoor and outdoor cricket facilities. Each system is engineered to deliver the specific performance characteristics required for cricket, including consistent ball bounce, appropriate speed, and optimal player comfort and safety.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you're establishing a new cricket facility or upgrading an existing one, our specialized surfaces ensure reliable performance that meets the expectations of players at all levels, from recreational clubs to professional training centers.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Engineered specifically for cricket</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Consistent play characteristics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Professional installation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Comprehensive maintenance programs</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-luxury-gold"></div>
            <img 
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80" 
              alt="Cricket pitch surface" 
              className="rounded-lg shadow-xl w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-luxury-gold"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="text-luxury-gold uppercase tracking-wider font-medium">Options</span>
          <h2 className="section-heading mt-2 mx-auto after:left-1/2 after:-translate-x-1/2">Types of Cricket Pitch Flooring</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer specialized cricket pitch flooring solutions for different environments and applications, each designed to provide optimal performance for the game.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {pitchTypes.map((type, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-8 items-center"
              style={{ direction: index % 2 !== 0 ? 'rtl' : 'ltr' }}
            >
              <div style={{ direction: 'ltr' }}>
                <h3 className="font-serif text-2xl font-bold mb-3">{type.name}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <h4 className="font-medium mb-2 text-luxury-navy">Key Features:</h4>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={type.image} 
                  alt={type.name} 
                  className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1565457210787-a4e26c636208?auto=format&fit=crop&w=800&q=80" 
              alt="Cricket pitch maintenance" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Maintenance and Care</h3>
            <p className="text-gray-700 mb-6">
              Proper maintenance is essential for preserving the performance characteristics and extending the lifespan of your cricket pitch flooring. Our team provides comprehensive guidance and support to ensure that your investment remains in optimal condition throughout its life cycle.
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {maintenanceTips.map((tip, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                  <span className="text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      
      <Footer />
    </>
  );
};

export default CricketPitch;
