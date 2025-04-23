
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { Check } from 'lucide-react';

const GymFlooring: React.FC = () => {
  const flooringTypes = [
    {
      name: "Rubber Gym Flooring",
      description: "Heavy-duty rubber flooring ideal for weight rooms and high-impact areas.",
      benefits: [
        "Superior shock absorption",
        "Excellent durability for heavy equipment",
        "Sound and vibration dampening",
        "Easy to clean and maintain",
        "Available in various thicknesses and colors"
      ],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Vinyl Sports Flooring",
      description: "Versatile vinyl flooring suitable for multipurpose fitness areas.",
      benefits: [
        "Seamless installation options",
        "Good shock absorption and comfort",
        "Wide range of designs and colors",
        "Water-resistant properties",
        "Cost-effective solution"
      ],
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Athletic Turf",
      description: "Synthetic turf designed specifically for fitness and functional training areas.",
      benefits: [
        "Ideal for sled work and agility training",
        "Durable and low maintenance",
        "Excellent traction and stability",
        "Customizable with markings and logos",
        "Comfortable for bodyweight exercises"
      ],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Interlocking Tiles",
      description: "Modular flooring solution offering flexibility and easy installation.",
      benefits: [
        "Easy DIY installation",
        "Reconfigurable layout",
        "Good impact absorption",
        "Multiple thickness options",
        "Easy replacement of damaged sections"
      ],
      image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      
      <PageBanner 
        title="Gym Flooring Solutions" 
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-luxury-gold uppercase tracking-wider font-medium">Fitness Solutions</span>
            <h2 className="section-heading mt-2">Premium Gym Flooring Systems</h2>
            <p className="text-gray-700 mb-4">
              Our gym flooring solutions are designed to meet the specific requirements of various fitness environments, from commercial gyms and sports centers to home fitness spaces. We offer a range of high-quality materials that provide essential performance characteristics, including shock absorption, durability, and ease of maintenance.
            </p>
            <p className="text-gray-700 mb-6">
              Each flooring system is selected based on the specific activities and equipment that will be used in the space, ensuring optimal safety, comfort, and longevity.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Customized solutions for specific gym areas</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Professional installation services</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Comprehensive maintenance packages</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                <span>Expert consultation for optimal selection</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-luxury-gold"></div>
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80" 
              alt="Modern gym with premium flooring" 
              className="rounded-lg shadow-xl w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-luxury-gold"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="text-luxury-gold uppercase tracking-wider font-medium">Options</span>
          <h2 className="section-heading mt-2 mx-auto after:left-1/2 after:-translate-x-1/2">Types of Gym Flooring</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a variety of gym flooring options to suit different fitness activities, equipment types, and aesthetic preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {flooringTypes.map((type, index) => (
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
                <p className="text-gray-600 mb-4">{type.description}</p>
                <h4 className="font-medium mb-2 text-luxury-navy">Key Benefits:</h4>
                <ul className="space-y-2 mb-4">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="bg-luxury-gold rounded-full p-0.5 text-white"><Check size={16} /></span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="font-serif text-2xl font-bold mb-4">Custom Gym Flooring Solutions</h3>
          <p className="text-gray-700 mb-6">
            Beyond our standard offerings, we specialize in creating custom gym flooring solutions tailored to your specific requirements. Our team can help you design a flooring system that combines different materials and features to optimize performance for various training zones within your facility.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-serif text-lg font-bold mb-2">Zone-Specific Design</h4>
              <p className="text-gray-600">
                We can create a comprehensive flooring plan with different materials for free weight areas, cardio zones, functional training spaces, and group exercise rooms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-serif text-lg font-bold mb-2">Branding Opportunities</h4>
              <p className="text-gray-600">
                Enhance your facility's aesthetic appeal and brand identity with custom colors, logos, and design elements integrated into your flooring system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      
      <Footer />
    </>
  );
};

export default GymFlooring;
