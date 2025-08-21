import React from 'react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';
import BlurText from '../animations/BlurText';
import ScrollReveal from '../animations/ScrollReveal';
import ThreeDCard from '../animations/ThreeDCard';

const Experience = () => {
  const experiences =[
  {
    id: 1,
    name: 'Arfin Usmaan',
    title: 'Lead Web Developer & Founder',
    company: 'Neonym Studio',
    location: 'Palani, India (Remote Worldwide)',
    period: '2023 – Present',
    type: 'Freelance / Founder',
    description:
      'Delivering high-end, modern websites for startups, educational institutions, and businesses worldwide. Leading all aspects of the development process—from concept to deployment—while ensuring premium design quality and pixel-perfect execution.',
    achievements: [
      'Completed 50+ professional websites in just 20 days for startup clients using AI workflows and no-code tools.',
      'Designed and deployed fully custom React + Tailwind sites for brands across multiple industries.',
      'Consistently achieved 100% client satisfaction through on-time delivery and premium quality.'
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'React',
      'Three.js',
      'React Three Fiber',
      'React Three Drei',
      'GSAP',
      'Vite',
      'Git',
      'Vercel',
      'Netlify',
      'Cloudflare'
    ]
  },
  {
    id: 2,
    name: 'Manikandan',
    title: 'Full-Stack Web Developer & Founder',
    company: 'Neonym Studio',
    location: 'Palani, India',
    period: '2023 – Present',
    type: 'Freelance',
    description:
      'As a freelance Full-Stack Web Developer at Neonym Studio, I design and build modern, responsive websites and web applications tailored to client needs. My role covers the full development lifecycle—from conceptualizing user experiences to deploying robust, scalable solutions.',
    achievements: [
      'Developed and deployed 30+ client websites, improving average site load speed by over 30%.',
      'Integrated secure payment gateways and optimized backend APIs, reducing transaction errors by 25%.',
      'Implemented SEO-friendly architecture, helping clients achieve first-page rankings on Google for targeted keywords.'
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Git',
      'Figma',
      'REST APIs',
      'Tailwind CSS',
      'Bootstrap',
      'Firebase',
      'Vite',
      'Vercel'
    ]
  }

  ]

  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      year: '2023',
      icon: Award
    },
    {
      title: 'Advanced JavaScript',
      issuer: 'FreeCodeCamp',
      year: '2022',
      icon: Award
    },
    {
      title: 'UI/UX Design Principles',
      issuer: 'Google',
      year: '2022',
      icon: Award
    },
    {
      title: 'Web Accessibility',
      issuer: 'W3C',
      year: '2021',
      icon: Award
    }
  ];

  const skills = {
    'Frontend Development': ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js'],
    'Styling & Design': ['Tailwind CSS', 'CSS3', 'SASS', 'Styled Components', 'Figma'],
    'Backend & Database': ['Node.js', 'Express', 'MongoDB', 'Firebase', 'PostgreSQL'],
    'Tools & Workflow': ['Git', 'Webpack', 'Vite', 'Docker', 'AWS', 'Vercel']
  };

  return (
    <section id="experience" className="min-h-screen bg-[#fffbf5] py-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <BlurText className="text-4xl md:text-5xl font-palanquin font-bold text-[#a18080] mb-6">
              Professional Experience
            </BlurText>
            <p className="text-xl font-montserrat text-[#5c5451] max-w-3xl mx-auto leading-relaxed">
              A journey through my professional growth, from junior developer to leading complex projects 
              and building solutions that make a real impact.
            </p>
          </ScrollReveal>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-palanquin font-bold text-[#a18080] mb-8 text-center">
              Work Experience
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.05}>
                <ThreeDCard
                  maxRotation={4}
                  glowOpacity={0.2}
                  shadowBlur={25}
                  transitionDuration="0.4s"
                  className="w-full"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#a18080]/10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-palanquin font-bold text-[#a18080] mb-1">
                          {exp.title}
                        </h3>
                        <p className=" font-montserrat font-medium text-[#5c5451] mb-1">
                          <span className='text-[#a18080]'>Name:</span> {exp.name}
                        </p>
                        <p className="font-montserrat font-medium text-[#5c5451] mb-2">
                          <span className='text-[#a18080]'>Company:</span> {exp.company}
                        </p>
                         {/* Removed unnecessary empty paragraph */}
                        <div className="flex flex-wrap items-center gap-4 text-sm font-montserrat text-[#5c5451]">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {exp.location}
                          </div>
                          <span className="px-2 py-1 bg-[#a18080]/10 text-[#a18080] rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="font-montserrat text-[#5c5451] leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-palanquin font-semibold text-[#a18080] mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="font-montserrat text-[#5c5451] text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-palanquin font-semibold text-[#a18080] mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 text-xs font-montserrat bg-[#a18080]/5 text-[#a18080] rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Skills & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <ScrollReveal>
            <ThreeDCard
              maxRotation={6}
              glowOpacity={0.15}
              shadowBlur={20}
              transitionDuration="0.4s"
              className="w-full"
            >
              <div className="bg-white rounded-xl p-8 shadow-sm border border-[#a18080]/10">
                <BlurText className="text-2xl font-palanquin font-bold text-[#a18080] mb-6">
                  Technical Skills
                </BlurText>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={index}>
                      <h4 className="font-palanquin font-semibold text-[#5c5451] mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 text-sm font-montserrat bg-[#a18080]/10 text-[#a18080] rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ThreeDCard>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={0.1}>
            <ThreeDCard
              maxRotation={6}
              glowOpacity={0.15}
              shadowBlur={20}
              transitionDuration="0.4s"
              className="w-full"
            >
              <div className="bg-white rounded-xl p-8 shadow-sm border border-[#a18080]/10">
                <BlurText className="text-2xl font-palanquin font-bold text-[#a18080] mb-6">
                  Certifications
                </BlurText>
                <div className="space-y-4">
                  {certifications.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <div key={index} className="flex items-center p-4 bg-[#a18080]/5 rounded-lg">
                        <div className="p-2 bg-[#a18080]/10 rounded-full mr-4">
                          <Icon size={20} className="text-[#a18080]" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-palanquin font-semibold text-[#a18080]">
                            {cert.title}
                          </h4>
                          <p className="text-sm font-montserrat text-[#5c5451]">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ThreeDCard>
          </ScrollReveal>
        </div>

        {/* Summary Stats */}
        <ScrollReveal>
          
            <div className="mt-16 bg-gradient-to-br from-[#a18080]/10 to-[#a18080]/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <BlurText className="text-2xl md:text-3xl font-palanquin font-bold text-[#a18080] mb-4">
                  Career Highlights
                </BlurText>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-palanquin font-bold text-[#a18080] mb-2">
                    4+
                  </div>
                  <div className="text-sm font-montserrat text-[#5c5451]">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-palanquin font-bold text-[#a18080] mb-2">
                    75+
                  </div>
                  <div className="text-sm font-montserrat text-[#5c5451]">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-palanquin font-bold text-[#a18080] mb-2">
                    15+
                  </div>
                  <div className="text-sm font-montserrat text-[#5c5451]">
                    Technologies Mastered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-palanquin font-bold text-[#a18080] mb-2">
                    50+
                  </div>
                  <div className="text-sm font-montserrat text-[#5c5451]">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;