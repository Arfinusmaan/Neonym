import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitText from '../animations/SplitText';
import BlurText from '../animations/BlurText';
import ShinyButton from '../animations/ShinyButton';
import ScrollReveal from '../animations/ScrollReveal';

const Home = () => {
  useEffect(() => {
    // Hero background logo animation
    gsap.fromTo('.hero-logo-bg', 
      { opacity: 0, scale: 0.8 },
      { opacity: 0.05, scale: 1, duration: 2, ease: 'power2.out', delay: 1 }
    );
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-[#fffbf5]">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Logo */}
        <div className="hero-logo-bg absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/logo.png" 
            alt="Neonym" 
            className="w-96 h-96 object-contain opacity-5"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <SplitText 
            className="text-5xl md:text-7xl font-palanquin font-bold text-[#a18080] mb-6"
            delay={0.5}
          >
            Creative Web Design
          </SplitText>
          
          <SplitText 
            className="text-4xl md:text-6xl font-palanquin font-bold text-[#a18080] mb-8"
            delay={1}
          >
            Modern Development
          </SplitText>

          <BlurText 
            className="text-lg md:text-xl font-montserrat text-[#5c5451] mb-12 max-w-2xl mx-auto leading-relaxed"
            delay={1.5}
          >
            Crafting digital experiences that blend elegance with functionality. 
            From concept to creation, bringing your vision to life with thoughtful design and clean code.
          </BlurText>

          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:items-center md:justify-center">
            <ShinyButton 
              onClick={() => scrollToSection('contact')}
              className="w-full md:w-auto"
            >
              Start Your Project
            </ShinyButton>
            
            <button 
              onClick={() => scrollToSection('work')}
              className="w-full md:w-auto px-8 py-3 font-montserrat text-[#5c5451] hover:text-[#a18080] transition-colors duration-200"
            >
              See Our Work →
            </button>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Home;