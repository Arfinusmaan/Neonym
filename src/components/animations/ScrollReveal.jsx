import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const directions = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { y: 0, x: 50 },
      right: { y: 0, x: -50 }
    };

    const { x, y } = directions[direction];

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      x: x,
      y: y
    });

    // Animate on scroll
    gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.4,
      delay: delay * 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  }, [delay, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;