
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { Check } from 'lucide-react';

const MultiSportsFlooring: React.FC = () => {
  const flooringTypes = [
    {
      name: "Polyurethane Systems",
      description: "Seamless, poured-in-place surfaces that provide excellent durability and performance for multiple sports.",
      applications: ["School gymnasiums", "Community sports centers", "University athletic facilities", "Recreation centers"],
      features: [
        "Seamless, joint-free surface",
        "Excellent ball bounce and shock absorption",
        "Superior durability for high-traffic areas",
        "Customizable performance characteristics",
        "Wide range of color options"
      ],
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Modular Sport Tiles",
      description: "Interlocking tiles that create versatile surfaces suitable for both indoor and outdoor multi-sport courts.",
      applications: ["Outdoor multi-courts", "Recreational areas", "School playgrounds", "Community centers"],
      features: [
        "Quick and easy installation",
        "Excellent drainage capabilities",
        "Low maintenance requirements",
        "Good shock absorption and traction",
        "Durable in various weather conditions"
      ],
      image: "https://images.unsplash.com/photo-1519311726-5cced75130cd?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Advanced Vinyl Systems",
      description: "Versatile vinyl flooring specifically engineered for multi-sport applications with consistent performance.",
      applications: ["Professional sports facilities", "Training centers", "Educational institutions", "Event spaces"],
      features: [
        "Uniform ball bounce and roll",
        "Excellent foot stability and traction",
        "Comfortable underfoot feel",
        "Easy to maintain and clean",
        "Long-lasting performance"
      ],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const sportTypes = [
    "Basketball",
    "Volleyball",
    "Handball",
    "Badminton",
    "Futsal",
    "Indoor Hockey",
    "Netball",
    "Table Tennis",
    "Indoor Cricket",
    "Pickleball",
    "Gymnastics",
    "Fitness Activities"
  ];

  return (
    <>
      <Navbar />
      
      <PageBanner 
        title="Multi Sports Flooring" 
        backgroundImage="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-luxury-gold uppercase tracking-wider font-medium">Versatile Solutions</span>
            <h2 className="section-heading mt-2">Premium Multi Sports Flooring</h2>
            <p className="text-gray-700 mb-4">
              Our multi sports flooring systems are designed to accommodate a wide range of sporting activities within a single surface, making them ideal for facilities that host diverse programs and events. These versatile solutions provide the perfect balance of performance characteristics to support different sports, from ball games to court sports.
            </p>
            <p className="text-gray-700 mb-6">
              Each system is engineered to deliver consistent performance across multiple sports while maintaining optimal safety, comfort, and durability for years of intensive use.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Versatile surfaces for multiple sports</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Customizable court markings</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Professional installation services</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Maintenance and resurfacing programs</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-luxury-gold"></div>
            <img 
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80" 
              alt="Multi sports flooring facility" 
              className="rounded-lg shadow-xl w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-luxury-gold"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="text-luxury-gold uppercase tracking-wider font-medium">Options</span>
          <h2 className="section-heading mt-2 mx-auto after:left-1/2 after:-translate-x-1/2">Types of Multi Sports Flooring</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a variety of multi sports flooring solutions to suit different facility requirements, usage patterns, and budget considerations.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {flooringTypes.map((type, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-8 items-center"
              style={{ direction: index % 2 !== 0 ? 'rtl' : 'ltr' }}
            >
              <div style={{ direction: 'ltr' }}>
                <h3 className="font-serif text-2xl font-bold mb-3">{type.name}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-luxury-navy">Common Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.applications.map((app, i) => (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
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

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h3 className="font-serif text-2xl font-bold mb-4">Supported Sports and Activities</h3>
          <p className="text-gray-700 mb-6">
            Our multi sports flooring systems are designed to support a wide range of sports and activities, providing the right balance of shock absorption, ball bounce, slide control, and traction for each.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sportTypes.map((sport, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="font-medium text-luxury-navy">{sport}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1569517282132-25d22f4573f6?auto=format&fit=crop&w=800&q=80" 
              alt="Multi-purpose sports facility" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Custom Court Markings</h3>
            <p className="text-gray-700 mb-6">
              We offer professional court marking services to create clear, accurate, and durable game lines for multiple sports on a single surface. Our experienced team uses premium line marking materials that maintain their visibility while ensuring consistent play performance across the entire court.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Precise measurement and layout</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Color-coded lines for different sports</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Official regulation dimensions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Custom logos and branding elements</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Durable, long-lasting materials</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ContactCTA />
      
      <Footer />
    </>
  );
};

export default MultiSportsFlooring;
