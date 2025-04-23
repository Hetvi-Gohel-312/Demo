
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { Check } from 'lucide-react';

const FootballTurf: React.FC = () => {
  const turfTypes = [
    {
      name: "Professional Grade Turf",
      description: "FIFA-certified synthetic turf systems designed for professional stadiums and high-level competition.",
      features: [
        "FIFA Quality Pro certification",
        "Advanced shock absorption",
        "Superior ball roll and bounce characteristics",
        "Maximum durability for intensive use",
        "Professional installation and maintenance"
      ],
      image: "https://images.unsplash.com/photo-1624280157150-4d1ed8632989?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Training Facility Turf",
      description: "Hard-wearing synthetic turf designed for training facilities with high usage rates.",
      features: [
        "Excellent durability for frequent use",
        "Consistent performance in all weather conditions",
        "Cost-effective installation and maintenance",
        "Good shock absorption for player safety",
        "Suitable for multi-sport applications"
      ],
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Community Sports Turf",
      description: "Versatile synthetic turf systems for community sports facilities and recreational areas.",
      features: [
        "Multi-sport functionality",
        "Cost-effective installation",
        "Low maintenance requirements",
        "Good durability for community use",
        "Suitable for various age groups"
      ],
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const benefits = [
    "All-weather playability",
    "Consistent playing surface",
    "Reduced maintenance costs",
    "No need for watering or mowing",
    "Increased playing hours",
    "Environmental sustainability",
    "Improved drainage capabilities",
    "Long-term cost efficiency"
  ];

  return (
    <>
      <Navbar />
      
      <PageBanner 
        title="Football Turf Solutions" 
        backgroundImage="https://images.unsplash.com/photo-1624280157150-4d1ed8632989?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-luxury-gold uppercase tracking-wider font-medium">Sports Surfaces</span>
            <h2 className="section-heading mt-2">Premium Football Turf Systems</h2>
            <p className="text-gray-700 mb-4">
              Our football turf systems provide exceptional playing surfaces that combine performance, safety, and durability. Designed to meet the specific requirements of various levels of play, from professional competitions to community recreation, our synthetic turf solutions offer consistent playability in all weather conditions.
            </p>
            <p className="text-gray-700 mb-6">
              Each system is engineered with advanced fiber technology, shock-absorbing underlays, and effective drainage systems to ensure optimal performance and player safety.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>FIFA-certified options available</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Advanced shock absorption</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Superior drainage systems</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Professional installation services</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-luxury-gold"></div>
            <img 
              src="https://images.unsplash.com/photo-1624280157150-4d1ed8632989?auto=format&fit=crop&w=800&q=80" 
              alt="Football turf field" 
              className="rounded-lg shadow-xl w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-luxury-gold"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="text-luxury-gold uppercase tracking-wider font-medium">Options</span>
          <h2 className="section-heading mt-2 mx-auto after:left-1/2 after:-translate-x-1/2">Types of Football Turf</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of football turf solutions to suit different levels of play, usage requirements, and budgets.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {turfTypes.map((type, index) => (
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
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80" 
              alt="Football players on artificial turf" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Benefits of Synthetic Football Turf</h3>
            <p className="text-gray-700 mb-6">
              Modern synthetic football turf offers numerous advantages over natural grass, particularly in terms of maintenance, durability, and consistent playability throughout the year.
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                  <span className="text-sm">{benefit}</span>
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

export default FootballTurf;
