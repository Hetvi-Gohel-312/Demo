
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { Check } from 'lucide-react';

const OutdoorFitness: React.FC = () => {
  const equipmentTypes = [
    {
      name: "Cardiovascular Equipment",
      description: "Outdoor machines designed to improve heart health and stamina, including cross trainers, air walkers, and exercise bikes.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Strength Training Stations",
      description: "Resistance-based equipment that helps build muscle strength, including chest presses, pull-up bars, and leg presses.",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Balance and Flexibility Units",
      description: "Equipment designed to improve coordination, stability, and joint mobility, including balance beams and stretching stations.",
      image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Multi-Station Fitness Hubs",
      description: "Comprehensive workout stations that combine multiple exercise options in a compact space, perfect for community parks.",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const benefits = [
    "Weatherproof and durable construction",
    "Low maintenance requirements",
    "Accessible for users of varying fitness levels",
    "Promotes community engagement and social interaction",
    "Free access to fitness opportunities",
    "Suitable for all age groups",
    "Encourages outdoor activity and connection with nature",
    "Cost-effective solution for public spaces"
  ];

  return (
    <>
      <Navbar />
      
      <PageBanner 
        title="Outdoor Fitness Equipment" 
        backgroundImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-luxury-gold uppercase tracking-wider font-medium">Outdoor Solutions</span>
            <h2 className="section-heading mt-2">Premium Outdoor Fitness Equipment</h2>
            <p className="text-gray-700 mb-4">
              Our outdoor fitness equipment provides communities with accessible, durable, and effective exercise options in public spaces. Designed to withstand the elements while offering engaging workout opportunities, our equipment promotes healthy lifestyles for people of all ages and abilities.
            </p>
            <p className="text-gray-700 mb-6">
              Each piece is constructed from high-quality, weather-resistant materials and engineered for safety, stability, and longevity in outdoor environments.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Weather-resistant construction</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Safety-certified designs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Inclusive exercise options</span>
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
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" 
              alt="Outdoor fitness equipment" 
              className="rounded-lg shadow-xl w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-luxury-gold"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="text-luxury-gold uppercase tracking-wider font-medium">Equipment</span>
          <h2 className="section-heading mt-2 mx-auto after:left-1/2 after:-translate-x-1/2">Types of Outdoor Fitness Equipment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of outdoor fitness equipment to create complete fitness parks or complement existing recreational spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {equipmentTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className="h-60 overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-serif text-xl font-bold mb-2">{type.name}</h3>
                <p className="text-gray-600 flex-grow">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Benefits of Outdoor Fitness Equipment</h3>
            <p className="text-gray-700 mb-6">
              Outdoor fitness equipment offers unique advantages over traditional indoor gyms, making exercise more accessible and enjoyable for communities. These benefits extend beyond physical health to include social and environmental advantages.
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
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1599058917212-d750089bc620?auto=format&fit=crop&w=800&q=80" 
              alt="People using outdoor fitness equipment" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <ContactCTA />
      
      <Footer />
    </>
  );
};

export default OutdoorFitness;
