
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { Check } from 'lucide-react';

const PlaygroundEquipment: React.FC = () => {
  const equipmentTypes = [
    {
      name: "Swing Sets",
      description: "Classic playground favorites featuring various swing options for different age groups.",
      features: [
        "Multiple swing type options",
        "Heavy-duty frame construction",
        "Safety-tested chain and seat designs",
        "Suitable for various age ranges",
        "Customizable configurations"
      ],
      image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Slides and Climbers",
      description: "Engaging structures that promote physical development and provide thrilling play experiences.",
      features: [
        "Various height and design options",
        "Safe, smooth sliding surfaces",
        "Challenging climbing elements",
        "Durable, weather-resistant materials",
        "Rounded edges and safety features"
      ],
      image: "https://images.unsplash.com/photo-1609220136736-7fea48b21835?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Spring Riders and Seesaws",
      description: "Motion-oriented equipment that develops balance and provides cooperative play opportunities.",
      features: [
        "Stable base structures",
        "Ergonomic seating designs",
        "Smooth, controlled movement",
        "Engaging animal and vehicle themes",
        "Multiple user options"
      ],
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Inclusive Play Equipment",
      description: "Specially designed structures that ensure play opportunities for children of all abilities.",
      features: [
        "Wheelchair-accessible features",
        "Sensory play elements",
        "Ground-level activities",
        "Transfer stations for elevated components",
        "Multi-sensory experiences"
      ],
      image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const safetyFeatures = [
    "Impact-absorbing surfacing options",
    "Rounded edges and corners on all equipment",
    "Non-toxic, lead-free materials and coatings",
    "Age-appropriate design considerations",
    "Compliance with international safety standards",
    "Anti-entrapment features",
    "Stable foundations and secure anchoring",
    "Regular safety inspection programs"
  ];

  return (
    <>
      <Navbar />
      
      <PageBanner 
        title="Playground Equipment" 
        backgroundImage="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-luxury-gold uppercase tracking-wider font-medium">Play Solutions</span>
            <h2 className="section-heading mt-2">Premium Playground Equipment</h2>
            <p className="text-gray-700 mb-4">
              Our playground equipment combines engaging play value with superior safety and durability. Designed to inspire imagination, promote physical development, and create memorable play experiences, our structures meet the highest standards for quality and performance.
            </p>
            <p className="text-gray-700 mb-6">
              From traditional favorites like swings and slides to innovative interactive elements, we offer a comprehensive range of equipment suitable for various settings, including schools, parks, residential communities, and childcare facilities.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Custom design and layout services</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Professional installation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Safety certification</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Maintenance programs</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-luxury-gold"></div>
            <img 
              src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80" 
              alt="Modern playground equipment" 
              className="rounded-lg shadow-xl w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-luxury-gold"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="text-luxury-gold uppercase tracking-wider font-medium">Options</span>
          <h2 className="section-heading mt-2 mx-auto after:left-1/2 after:-translate-x-1/2">Types of Playground Equipment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a diverse range of playground equipment to create engaging play spaces for children of all ages and abilities.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {equipmentTypes.map((type, index) => (
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
              src="https://images.unsplash.com/photo-1605729729286-7c8f83ed3d6c?auto=format&fit=crop&w=800&q=80" 
              alt="Safety features in playground equipment" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Safety: Our Top Priority</h3>
            <p className="text-gray-700 mb-6">
              At Artful Home, safety is paramount in our playground equipment design and installation. All our products are engineered to meet or exceed international safety standards, with thoughtful features that minimize risk while maximizing play value.
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                  <span className="text-sm">{feature}</span>
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

export default PlaygroundEquipment;
