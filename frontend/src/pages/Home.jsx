import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeroSection />
    </div>
  );
};

export default LandingPage;

