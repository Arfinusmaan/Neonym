import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlurText = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, {
      filter: 'blur(10px)',
      opacity: 0,
      y: 30
    });

    // Animate on scroll
    gsap.to(element, {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      duration: 1,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default BlurText;