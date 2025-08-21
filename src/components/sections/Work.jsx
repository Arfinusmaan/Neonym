import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlurText from '../animations/BlurText';
import ScrollReveal from '../animations/ScrollReveal';
import ProjectCard from '../ProjectCard';
import ShinyButton from '../animations/ShinyButton';
import { ArrowLeft } from 'lucide-react';
import ProjectModal from '../ProjectModal';
import categories from '../constants/index.js';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();


  const handleCategorySelect = (categoryIndex) => {
    setSelectedCategory(categoryIndex);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="work" className="min-h-screen bg-[#fffbf5]">
      {selectedCategory !== null ? (
        /* Dedicated Category View - Clean and Focused */
        <div className="min-h-screen bg-[#fffbf5] py-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Minimal Header for Category */}
            <div className="mb-12">
              <ScrollReveal>
                <button
                  onClick={handleBackToCategories}
                  className="flex items-center space-x-2 mb-8 text-[#a18080] hover:text-[#5c5451] transition-colors duration-200"
                >
                  <ArrowLeft size={20} />
                  <span className="font-montserrat">Back to All Projects</span>
                </button>
                
                <BlurText className="text-4xl md:text-5xl font-palanquin font-bold text-[#a18080] mb-4">
                  {categories[selectedCategory].title}
                </BlurText>
                <p className="text-xl font-montserrat text-[#5c5451] max-w-3xl">
                  {categories[selectedCategory].description}
                </p>
              </ScrollReveal>
            </div>

            {/* Projects Grid Only */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories[selectedCategory].projects.map((project, projectIndex) => (
                <ScrollReveal key={project.id} delay={projectIndex * 0.1}>
                  <ProjectCard 
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                </ScrollReveal>
              ))}
            </div>

            {/* Simple CTA */}
            <div className="text-center mt-20">
              <ScrollReveal>
                <ShinyButton onClick={() => scrollToSection('contact')}>
                  Start a Conversation
                </ShinyButton>
              </ScrollReveal>
            </div>
          </div>
        </div>
      ) : (
        /* Main Work Page with All Categories */
        <div className="min-h-screen bg-[#fffbf5] py-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-16">
              <ScrollReveal>
                <BlurText className="text-4xl md:text-5xl font-palanquin font-bold text-[#a18080] mb-6">
                  My Work
                </BlurText>
                <p className="text-xl font-montserrat text-[#5c5451] max-w-3xl mx-auto leading-relaxed">
                  A collection of projects spanning education, business solutions, and creative experiments. 
                  Each project represents a unique challenge and learning opportunity.
                </p>
              </ScrollReveal>
            </div>

            {/* Categories */}
            <div className="space-y-16">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <ScrollReveal delay={categoryIndex * 0.1}>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-palanquin font-bold text-[#a18080] mb-3">
                        {category.title}
                      </h2>
                      <p className="font-montserrat text-[#5c5451] max-w-2xl mx-auto">
                        {category.description}
                      </p>
                    </div>
                  </ScrollReveal>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {category.projects.slice(0, 3).map((project, projectIndex) => (
                      <ScrollReveal key={project.id} delay={projectIndex * 0.1}>
                        <ProjectCard 
                          project={project}
                          onClick={() => setSelectedProject(project)}
                        />
                      </ScrollReveal>
                    ))}
                  </div>

              <ScrollReveal>
                <div className="text-center">
                  <button 
                    onClick={() => navigate(`/work/${categoryIndex}`)}
                    className="font-montserrat text-[#a18080] hover:text-[#5c5451] transition-colors"
                  >
                    View All {category.title} →
                  </button>
                </div>
              </ScrollReveal>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center py-16 mt-16 bg-gradient-to-br from-[#a18080]/5 to-transparent rounded-2xl">
              <ScrollReveal>
                <h2 className="text-3xl font-palanquin font-bold text-[#a18080] mb-4">
                  Have a Project in Mind?
                </h2>
                <p className="font-montserrat text-[#5c5451] mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can bring your ideas to life with thoughtful design and clean development.
                </p>
                <ShinyButton onClick={() => scrollToSection('contact')}>
                  Start a Conversation
                </ShinyButton>
              </ScrollReveal>
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Work;
