import React from 'react';
import MagicBento from './MagicBento';

const About = () => {
  const cardData = [
    {
      color: "#fffbf5",
      title: "Mission",
      description: "To create digital solutions that not only meet technical requirements but also delight users with intuitive design and seamless interactions.",
      label: "Vision",
    },
    {
      color: "#fffbf5",
      title: "Experience",
      description: "3+ years of experience across various domains including education, business solutions, and personal projects.",
      label: "Expertise",
    },
    {
      color: "#fffbf5",
      title: "Quality First",
      description: "Every project deserves attention to detail and pixel-perfect execution.",
      label: "Standards",
    },
    {
      color: "#fffbf5",
      title: "User-Centered",
      description: "Design decisions are always made with the end user experience in mind.",
      label: "Approach",
    },
    {
      color: "#fffbf5",
      title: "Continuous Learning",
      description: "Staying current with the latest technologies and design trends.",
      label: "Growth",
    },
    {
      color: "#fffbf5",
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life.",
      label: "Partnership",
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-[#fffbf5] py-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-palanquin font-bold text-[#a18080] mb-6">
            About Neonym
          </h1>
          <p className="text-xl font-montserrat text-[#5c5451] max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that are both beautiful and functional, 
            with a focus on clean design and thoughtful user interactions.
          </p>
        </div>

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
                <h3 className="card__title font-normal text-base m-0 mb-1 text-[#a18080] font-bold">
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
