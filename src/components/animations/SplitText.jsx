import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SplitText = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Split text into individual characters
    const text = element.textContent;
    element.innerHTML = '';
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      element.appendChild(span);
    });

    // Animate characters
    const chars = element.querySelectorAll('span');
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.02,
      delay: delay,
      ease: 'power2.out'
    });
  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default SplitText;