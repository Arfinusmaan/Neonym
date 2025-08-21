import React, { useRef, useLayoutEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import BlurText from "../animations/BlurText";
import ScrollReveal from "../animations/ScrollReveal";

/* --------------------------- ScrollVelocity (inline) --------------------------- */

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < (numCopies ?? 1); i++) {
      spans.push(
        <span className={`flex-shrink-0 ${className}`} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }

    return (
      <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

/* --------------------------------- Testimonials -------------------------------- */

const Testimonials = () => {
  // Combined testimonials array
  const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Principal, Greenwood Academy",
    img: "SJ",
    rating: 5,
    review: "Neonym transformed our school!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Restaurant Owner",
    img: "MC",
    rating: 5,
    review: "Exceeded all expectations!",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Mathematics Teacher",
    img: "ER",
    rating: 5,
    review: "My portfolio opened doors!",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Director, Learning Hub",
    img: "JW",
    rating: 5,
    review: "Working with Neonym was easy!",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Boutique Owner",
    img: "LT",
    rating: 5,
    review: "Stunning site, big sales boost!",
  },
  {
    id: 6,
    name: "Robert Kumar",
    role: "Academy Director",
    img: "RK",
    rating: 5,
    review: "A complete solution for us!",
  },
];


  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={12}
        className={`${index < rating ? "text-[#a18080] fill-current" : "text-gray-300"}`}
      />
    ));

  const TestimonialCard = ({ item }) => (
    <div className="p-4 border rounded-lg shadow-md bg-white min-w-[270px] max-w-[270px]">
      <div className="flex  items-start justify-between mb-2">
        <Quote className="text-[#a18080]/30" size={16} />
        <div className="flex ">{renderStars(item.rating)}</div>
      </div>
      <p className="text-gray-700 italic mb-3 text-sm line-clamp-4">"{item.review}"</p>
      <div className="flex items-center">
        <div className="w-9 h-9 bg-gradient-to-br from-[#a18080]/20 to-[#a18080]/10 rounded-full flex items-center justify-center mr-3">
          <span className="font-palanquin font-semibold text-[#a18080] text-xs">{item.img}</span>
        </div>
        <div>
          <h4 className="mt-0.5 font-semibold text-sm">{item.name}</h4>
          <p className="text-xs text-gray-500">{item.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="min-h-screen bg-gradient-to-br from-[#a18080]/5 to-transparent py-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <BlurText className="text-4xl md:text-5xl font-palanquin font-bold text-[#a18080] mb-6">
              Client Testimonials
            </BlurText>
            <p className="text-xl font-montserrat text-[#5c5451] max-w-3xl mx-auto leading-relaxed">
              Don't just take my word for it. Here's what clients have to say
              about working with Neonym and the results we've achieved together.
            </p>
          </ScrollReveal>
        </div>

        {/* Row 1 – scrolls right */}
        <ScrollVelocity
          texts={[
            <div className="flex gap-4">
              {reviews.slice(0, 3).map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>,
          ]}
          velocity={40}
          numCopies={5}
          parallaxClassName="mb-8"
          scrollerClassName="items-stretch gap-4"
        />

        {/* Row 2 – scrolls left */}
        <ScrollVelocity
          texts={[
            <div className="flex gap-4">
              {reviews.slice(3, 6).map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>,
          ]}
          velocity={-40}
          numCopies={5}
          scrollerClassName="items-stretch gap-4"
        />

        {/* Stats Section */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#a18080]/10 mt-16">
            <div className="text-center mb-8">
              <BlurText className="text-2xl md:text-3xl font-palanquin font-bold text-[#a18080] mb-4">
                Client Success Metrics
              </BlurText>
              <p className="font-montserrat text-[#5c5451] max-w-2xl mx-auto">
                Real results that matter to businesses and organizations
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-palanquin font-bold text-[#a18080] mb-2">
                  100%
                </div>
                <div className="text-sm font-montserrat text-[#5c5451]">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-palanquin font-bold text-[#a18080] mb-2">
                  250%
                </div>
                <div className="text-sm font-montserrat text-[#5c5451]">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-palanquin font-bold text-[#a18080] mb-2">
                  48hrs
                </div>
                <div className="text-sm font-montserrat text-[#5c5451]">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-palanquin font-bold text-[#a18080] mb-2">
                  95%
                </div>
                <div className="text-sm font-montserrat text-[#5c5451]">Projects On Time</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
