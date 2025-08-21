import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import BlurText from './animations/BlurText';
import ScrollReveal from './animations/ScrollReveal';
import ShinyButton from './animations/ShinyButton';
import categories from './constants';

const CategoryView = () => {
  const { categoryIndex } = useParams();
  const categoryIndexNum = parseInt(categoryIndex, 10);
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Import categories directly from Work component
 

  if (isNaN(categoryIndexNum) || categoryIndexNum < 0 || categoryIndexNum >= categories.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffbf5]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#a18080] mb-4">Category Not Found</h1>
          <Link to="/" className="text-[#a18080] hover:text-[#5c5451] transition-colors">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const category = categories[categoryIndexNum];

  return (
    <div className="min-h-screen bg-[#fffbf5] py-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#a18080] hover:text-[#5c5451] transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-montserrat">Back to Home</span>
          </Link>
          
          <BlurText className="text-4xl md:text-5xl font-palanquin font-bold text-[#a18080] mb-4">
            {category.title}
          </BlurText>
          <p className="text-xl font-montserrat text-[#5c5451] max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.projects.slice(0, showAll ? category.projects.length : 6).map((project, projectIndex) => (
            <ScrollReveal key={project.id} delay={projectIndex * 0.1}>
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            </ScrollReveal>
          ))}
        </div>

        {category.projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#5c5451] text-lg">No projects found in this category.</p>
          </div>
        )}

        {category.projects.length > 6 && (
          <div className="text-center mt-12">
            <ScrollReveal>
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-[#a18080] text-white font-montserrat rounded-lg hover:bg-[#5c5451] transition-colors duration-300"
              >
                {showAll ? 'Show Less' : `Show More (${category.projects.length - 6} more)`}
              </button>
            </ScrollReveal>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </div>
  );
};

export default CategoryView;
