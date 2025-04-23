
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

const Index: React.FC = () => {
  // Product categories for the showcase section
  const products = [
    {
      title: "Multiplay Systems",
      description: "Engaging play structures designed for children of all ages, providing safe and entertaining environments.",
      image: "https://images.unsplash.com/photo-1617801005262-5e9c577823d8?auto=format&fit=crop&w=800&q=80",
      link: "/multiplay-system"
    },
    {
      title: "Gym Flooring",
      description: "Premium rubber and vinyl flooring solutions designed to withstand heavy equipment and intense workouts.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      link: "/gym-flooring"
    },
    {
      title: "Outdoor Fitness Equipment",
      description: "Durable, weather-resistant fitness machines designed for parks and community spaces.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      link: "/outdoor-fitness"
    },
    {
      title: "Football Turf",
      description: "High-performance artificial turf systems that provide optimal playing conditions for football enthusiasts.",
      image: "https://images.unsplash.com/photo-1624280157150-4d1ed8632989?auto=format&fit=crop&w=800&q=80",
      link: "/football-turf"
    },
    {
      title: "Playground Equipment",
      description: "Safe, engaging, and durable playground structures that promote physical activity and imagination.",
      image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80",
      link: "/playground-equipment"
    },
    {
      title: "Multi Sports Flooring",
      description: "Versatile flooring solutions that accommodate multiple sports activities in a single space.",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80",
      link: "/multi-sports-flooring"
    },
    {
      title: "Badminton Court",
      description: "Professional-grade badminton court flooring with excellent shock absorption and performance characteristics.",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      link: "/badminton-court"
    },
    {
      title: "Cricket Pitch Flooring",
      description: "Specialized cricket pitch surfaces designed for both indoor and outdoor applications.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
      link: "/cricket-pitch"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy/90 to-luxury-navy/70"></div>
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury sports facility" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
            Elevate Your Sports Facilities
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Premium flooring and equipment solutions for sports facilities, playgrounds, and fitness centers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact" className="luxury-button">
              Request a Quote
            </Link>
            <Link to="/#products" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-luxury-navy font-medium rounded transition-all hover:bg-gray-100">
              Explore Products <ChevronDown size={18} />
            </Link>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={30} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-luxury-gold uppercase tracking-wider font-medium">About Us</span>
            <h2 className="section-heading mt-2">The Artful Home Experience</h2>
            <p className="text-gray-700 mb-4">
              At Artful Home, we believe that exceptional sports facilities enhance athletic performance and community engagement. We specialize in providing premium-quality flooring and equipment for sports venues, fitness centers, and playgrounds.
            </p>
            <p className="text-gray-700 mb-4">
              With a commitment to excellence, we source only the finest materials and partner with the most reputable manufacturers to ensure that our products not only meet but exceed industry standards for performance, durability, and safety.
            </p>
            <p className="text-gray-700 mb-6">
              From initial consultation to final installation, our team of experts provides personalized service to ensure your complete satisfaction.
            </p>
            <Link to="/contact" className="luxury-button">
              Learn More About Us
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-luxury-gold"></div>
            <img 
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80" 
              alt="Team working together" 
              className="rounded-lg shadow-xl w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-luxury-gold"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-luxury-gold uppercase tracking-wider font-medium">Our Offerings</span>
            <h2 className="section-heading mt-2 mx-auto after:left-1/2 after:-translate-x-1/2">Premium Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of high-quality sports flooring solutions and equipment, designed to meet the highest standards of performance, safety, and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="luxury-container">
        <div className="text-center mb-12">
          <span className="text-luxury-gold uppercase tracking-wider font-medium">Testimonials</span>
          <h2 className="section-heading mt-2 mx-auto after:left-1/2 after:-translate-x-1/2">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <h4 className="font-serif font-bold">Olympic Sports Center</h4>
                <p className="text-luxury-gold">Gymnasium Renovation</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The gym flooring provided by Artful Home transformed our facility. The quality, durability, and aesthetics exceeded our expectations, and their team was professional throughout the entire process."
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <h4 className="font-serif font-bold">Central Park Authority</h4>
                <p className="text-luxury-gold">Playground Installation</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The playground equipment installed by Artful Home has been a huge hit with children and parents alike. The quality and safety features are top-notch, and their installation team was efficient and professional."
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <h4 className="font-serif font-bold">Elite Football Academy</h4>
                <p className="text-luxury-gold">Football Turf Installation</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The artificial turf provided by Artful Home has significantly improved our training facilities. The playing surface is consistent, durable, and requires minimal maintenance, allowing us to focus on developing our athletes."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-luxury-navy py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact our team today to discuss your project requirements and receive a customized quote.
          </p>
          <Link 
            to="/contact" 
            className="luxury-button inline-block"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
