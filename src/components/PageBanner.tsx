
import React from 'react';

interface PageBannerProps {
  title: string;
  backgroundImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, backgroundImage }) => {
  return (
    <div 
      className="relative h-[40vh] min-h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 35, 66, 0.7), rgba(26, 35, 66, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center text-white z-10">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-up">
          {title}
        </h1>
        <div className="mt-4 mx-auto w-24 h-1 bg-luxury-gold animate-fade-up" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default PageBanner;
