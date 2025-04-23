
import React from 'react';
import { Phone, Whatsapp } from 'lucide-react';

// Utility for links
const phoneNumber = '9842223220';
const whatsappNumber = '9842223220';
const whatsappMsg = encodeURIComponent('Hi, I am interested in your Badminton Court Flooring solutions.');

const Breadcrumbs = () => (
  <nav className="flex items-center text-sm mt-2 text-gray-500 mb-8" aria-label="Breadcrumb">
    <a href="/" className="hover:text-luxury-gold transition-colors">Home</a>
    <span className="mx-2">/</span>
    <a href="/flooring" className="hover:text-luxury-gold transition-colors">Flooring</a>
    <span className="mx-2">/</span>
    <span className="hover:text-luxury-gold transition-colors">Sports Flooring</span>
    <span className="mx-2">/</span>
    <span className="text-luxury-gold font-semibold">Badminton court flooring</span>
  </nav>
);

const contactBtns = (
  <div className="flex gap-3 mt-4 flex-wrap">
    <a
      href={`https://wa.me/91${whatsappNumber}?text=${whatsappMsg}`}
      className="luxury-button bg-green-500 text-white hover:bg-green-600"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <Whatsapp size={18} className="mr-1"/> WhatsApp
    </a>
    <a
      href={`tel:${phoneNumber}`}
      className="luxury-button bg-blue-600 text-white hover:bg-blue-700"
      aria-label="Call"
    >
      <Phone size={18} className="mr-1"/> Call {phoneNumber}
    </a>
    <a
      href="mailto:priya_interactive@yahoo.com"
      className="luxury-button bg-luxury-gold text-luxury-navy"
      aria-label="Email"
    >
      E-Mail
    </a>
  </div>
);

const navItems = [
  { name: 'Window Blinds', href: '../../bamboo_blinds/index.htm' },
  { name: 'Wall Papers', href: '../../wall_coverings/index.htm' },
  { name: 'Insect Screens', href: '../../insect_screens/index.htm' },
  { name: 'Glass Film', href: '../../glass_film/index.htm' },
  { name: 'Flooring', href: '../../flooring/index.htm' },
  { name: 'Other Products', href: '../../other_products/index.htm' },
  { name: 'Call 9842223220', href: '../../aboutus/contact.htm' },
];

const NavbarCustom = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-luxury-navy text-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="../index.htm" className="font-serif text-2xl font-bold">Artful <span className="text-luxury-gold">Home</span></a>
        <button
          className="lg:hidden block p-2 focus:outline-none"
          onClick={() => setIsOpen(val => !val)}
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        <nav className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="uppercase text-sm tracking-wider font-medium hover:text-luxury-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="mailto:priya_interactive@yahoo.com"
            className="uppercase text-sm font-medium hover:text-luxury-gold transition-colors"
          >
            E-Mail
          </a>
        </nav>
      </div>
      {/* Mobile */}
      {isOpen && (
        <nav className="lg:hidden bg-luxury-navy px-4 pb-4 animate-fade-in">
          <div className="flex flex-col space-y-2 mt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="uppercase text-sm font-medium hover:text-luxury-gold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="mailto:priya_interactive@yahoo.com"
              className="uppercase text-sm font-medium hover:text-luxury-gold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              E-Mail
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

const PageSection = ({
  title,
  imgSrc,
  imgAlt,
  children,
}: {
  title: string;
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
}) => (
  <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
    <div>
      <img src={`/badminton_images/${imgSrc}`} alt={imgAlt} className="rounded-lg w-full object-cover shadow-lg" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {children}
      {contactBtns}
    </div>
  </section>
);

const BadmintonCourt: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className="pt-20 bg-background min-h-screen">
      <NavbarCustom />
      <main className="luxury-container pt-6">
        <Breadcrumbs />
        <header className="mb-8 text-center">
          <h1 className="section-heading mb-2">Badminton court flooring</h1>
          <p className="text-lg text-luxury-navy font-semibold">Distributors, Wholesalers and Dealers</p>
        </header>
        
        {/* Introduction */}
        <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/badminton_images/Polish_20220610_113257730.webp"
              alt="Badminton Floor Introduction"
              className="rounded-lg w-full object-cover shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Choosing the Right Badminton Court Flooring</h3>
            <p className="mb-3 text-gray-700">
              Selecting the appropriate flooring for a badminton court is essential for player safety and performance. The right choice depends on the frequency of use and the age group of players.
            </p>
            <p className="mb-3 text-gray-700">
              Using improper flooring can lead to serious injuries—always opt for specialized sports flooring to protect athletes and enhance their game experience.
            </p>
            {contactBtns}
          </div>
        </section>

        {/* Sections */}
        <PageSection
          title="1. Wooden Badminton Court"
          imgSrc="Polish_20220610_113113585.webp"
          imgAlt="Wooden Badminton Court"
        >
          <p className="mb-2 text-gray-700">Wooden badminton courts are the best choice for both professionals and recreational players due to their superior area elasticity, which helps reduce strain and injuries. Recommended and approved by the Badminton World Federation (BWF).</p>
        </PageSection>

        <PageSection
          title="2. Synthetic Badminton Court Flooring"
          imgSrc="Polish_20220610_113128731.webp"
          imgAlt="Synthetic Badminton Court"
        >
          <p className="mb-2 text-gray-700">Synthetic flooring, made of advanced artificial materials, offers modern, player-friendly surfaces tailored for contemporary game styles. It helps reduce impact injuries and is suitable for all skill levels.</p>
        </PageSection>

        <PageSection
          title="3. Modular Tiles Badminton Court"
          imgSrc="Polish_20220610_113434564.webp"
          imgAlt="Modular Tiles Badminton Court"
        >
          <p className="mb-2 text-gray-700">Modular tiles combine the best features of wooden and PVC flooring: slip & water resistance, antibacterial & antifungal properties, cushioned comfort, and long-lasting durability.</p>
          <ul className="list-disc pl-5 mb-2 text-gray-700">
            <li>Slip & water resistance</li>
            <li>Antibacterial & antifungal</li>
            <li>Cushion and durability</li>
          </ul>
        </PageSection>

        <PageSection
          title="4. Rubber Mat Badminton Flooring"
          imgSrc="Polish_20220610_113211766.webp"
          imgAlt="Rubber Mat Badminton Flooring"
        >
          <p className="mb-2 text-gray-700">Rubber mat flooring consists of natural rubber with premium cushioning, making it ideal for multiple sports and reducing injuries and fatigue.</p>
          <ul className="list-disc pl-5 mb-2 text-gray-700">
            <li>Non-toxic</li>
            <li>Shock absorption</li>
            <li>Easy to maintain and install</li>
          </ul>
        </PageSection>

        <PageSection
          title="5. PVC Badminton Court Flooring"
          imgSrc="Polish_20220610_113413249.webp"
          imgAlt="PVC Badminton Court Flooring"
        >
          <p className="mb-2 text-gray-700">PVC flooring is highly popular for its anti-slip property. Available in mats for easy installation & storage. It should ideally be placed over wooden flooring for enhanced safety and performance.</p>
          <ul className="list-disc pl-5 mb-2 text-gray-700">
            <li>3 layers: surface (durability), middle (stability), lower (cushioning)</li>
            <li>Anti-slip, easy to install/store</li>
          </ul>
        </PageSection>

        <PageSection
          title="6. Acrylic Badminton Court Flooring"
          imgSrc="Polish_20220610_113359289.webp"
          imgAlt="Acrylic Badminton Court Flooring"
        >
          <p className="mb-2 text-gray-700">Acrylic flooring is available in a wide range of colors and types. It is highlighted as the most economical choice for indoor and outdoor use.</p>
        </PageSection>
      </main>
    </div>
  );
};

export default BadmintonCourt;
