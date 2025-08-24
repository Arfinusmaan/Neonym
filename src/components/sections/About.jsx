import React from 'react';
import MagicBento from './MagicBento';
import ScrollReveal from '../animations/ScrollReveal';
import BlurText from '../animations/BlurText';

const About = () => {
  const cardData = [
    {
      color: "#fffbf5",
      title: "Mission",
      description: "Empowering learners with innovation, discipline, and purpose — shaping the next generation of thinkers and leaders.",
      label: "Vision",
    },
    {
      color: "#fffbf5",
      title: "Experience",
      description: "Years of proven excellence in education, training, and mentoring — mastering both traditional methods and cutting-edge digital platforms.",
      label: "Expertise",
    },
    {
      color: "#fffbf5",
      title: "Quality First",
      description: "We uphold uncompromising standards of quality, ethics, and innovation — every lesson, every system, every result is benchmarked at the highest level.",
      label: "Standards",
    },
    {
      color: "#fffbf5",
      title: "User-Centered",
      description: "A learner-first approach rooted in clarity, consistency, and creativity — designed to deliver results that are measurable, scalable, and future-ready.",
      label: "Approach",
    },
    {
      color: "#fffbf5",
      title: "Continuous Learning",
      description: "Continuous evolution through research, technology, and feedback — ensuring our students never stop moving forward.",
      label: "Growth",
    },
    {
      color: "#fffbf5",
      title: "Collaboration",
      description: "Built on trust, collaboration, and long-term vision — we work with students, parents, and institutions as true partners in success.",
      label: "Partnership",
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-[#fffbf5] py-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ScrollReveal className="text-center mb-12 transition-colors duration-200">
          <BlurText className="text-4xl md:text-5xl font-palanquin font-bold text-[#a18080] mb-6">
            About Neonym
          </BlurText>
          <p className="text-xl font-montserrat text-[#5c5451] max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that are both beautiful and functional, 
            with a focus on clean design and thoughtful user interactions.
          </p>
        </ScrollReveal>

        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          disableAnimations={false}
          spotlightRadius={300}
          particleCount={12}
          enableTilt={true}
          glowColor="161, 128, 128"
          clickEffect={true}
          enableMagnetism={true}
        >
          {cardData.map((card, index) => (
            <div key={index} className="card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <div className="card__header flex justify-between gap-3 relative">
                <span className="card__label text-base text-[#a18080] font-semibold">{card.label}</span>
              </div>
              <div className="card__content flex flex-col relative">
                <h3 className="card__title text-base m-0 mb-1 text-[#a18080] font-bold">
                  {card.title}
                </h3>
                <p className="card__description text-xs leading-5 opacity-90 text-[#5c5451]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </MagicBento>
      </div>
    </section>
  );
};

export default About;
