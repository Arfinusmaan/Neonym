import React from 'react';

const ShinyButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden px-8 py-3 rounded-lg font-montserrat font-medium
        bg-transparent border-2 border-[#a18080] text-[#a18080]
        hover:bg-[#a18080] hover:text-white
        transition-all duration-300 ease-out
        group
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Shiny effect */}
      <div className="
        absolute inset-0 -translate-x-full
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        group-hover:translate-x-full
        transition-transform duration-700 ease-out
      " />
    </button>
  );
};

export default ShinyButton;