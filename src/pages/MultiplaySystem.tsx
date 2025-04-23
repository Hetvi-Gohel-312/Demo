
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { Check } from 'lucide-react';

const MultiplaySystem: React.FC = () => {
  const features = [
    {
      title: "Modular Design",
      description: "Customizable components that can be arranged in various configurations to suit different spaces and age groups.",
      image: "https://images.unsplash.com/photo-1617801005262-5e9c577823d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Safety Features",
      description: "Built with rounded edges, non-toxic materials, and soft landing zones to ensure children's safety during play.",
      image: "https://images.unsplash.com/photo-1605729729286-7c8f83ed3d6c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Inclusive Play",
      description: "Elements designed to accommodate children of different abilities, promoting inclusive play experiences.",
      image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const benefits = [
    "Promotes physical activity and active play",
    "Enhances coordination and motor skills",
    "Encourages social interaction and cooperation",
    "Develops problem-solving abilities",
    "Stimulates imagination and creativity",
    "Builds confidence and independence",
    "Supports cognitive development",
    "Creates memorable play experiences"
  ];

  return (
    <>
      <Navbar />
      
      <PageBanner 
        title="Multiplay Systems" 
        backgroundImage="https://images.unsplash.com/photo-1617801005262-5e9c577823d8?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-luxury-gold uppercase tracking-wider font-medium">Play Solutions</span>
            <h2 className="section-heading mt-2">Engaging Multiplay Systems</h2>
            <p className="text-gray-700 mb-4">
              Our multiplay systems are designed to provide children with exciting, challenging, and safe play experiences. Each system combines multiple play elements into a cohesive structure that encourages physical activity, social interaction, and imaginative play.
            </p>
            <p className="text-gray-700 mb-6">
              From compact units for small spaces to elaborate structures for large playgrounds, our multiplay systems can be customized to suit your specific requirements and budget.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Customizable designs and themes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Premium-quality materials</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Safety-certified components</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Professional installation</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-luxury-gold"></div>
            <img 
              src="https://images.unsplash.com/photo-1611841315886-a8ad8d02f179?auto=format&fit=crop&w=800&q=80" 
              alt="Children's multiplay system" 
              className="rounded-lg shadow-xl w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-luxury-gold"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="text-luxury-gold uppercase tracking-wider font-medium">Features</span>
          <h2 className="section-heading mt-2 mx-auto after:left-1/2 after:-translate-x-1/2">Key Features of Our Multiplay Systems</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our multiplay systems are designed with these key features to provide safe, engaging, and developmentally appropriate play experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-60 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1596461110761-b9473487922a?auto=format&fit=crop&w=800&q=80" 
              alt="Children playing on multiplay system" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Benefits of Multiplay Systems</h3>
            <p className="text-gray-700 mb-6">
              Multiplay systems offer numerous benefits for children's physical, social, and cognitive development. By incorporating various play elements into a single structure, these systems provide comprehensive play experiences that support holistic development.
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

export default MultiplaySystem;
