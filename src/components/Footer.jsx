import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@neonym.com', label: 'Email' },
    // { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#fffbf5] border-t border-[#a18080]/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="/public/neonym-high-resolution-logo.png" 
              alt="Neonym" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-palanquin text-[#a18080] font-semibold animate-pulse">
              Neonym
            </span>
          </div>

          {/* Additional Links */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-montserrat text-[#5c5451] hover:text-[#a18080] transition-colors duration-200"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-sm font-montserrat text-[#5c5451] hover:text-[#a18080] transition-colors duration-200"
            >
              Experience
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 text-[#5c5451] hover:text-[#a18080] hover:bg-[#a18080]/10 rounded-full transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#a18080]/10 text-center">
          <p className="text-sm font-montserrat text-[#5c5451]">
            © 2025 Neonym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;