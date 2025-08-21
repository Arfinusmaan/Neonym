import React from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import ShinyButton from './animations/ShinyButton';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-palanquin font-bold text-[#a18080]">
              {project.title}
            </h2>
            <button 
              onClick={onClose}
              className="text-[#5c5451] hover:text-[#a18080] text-2xl"
            >
              <X size={24} />
            </button>
          </div>

          <div className="w-full h-64 bg-gradient-to-br from-[#a18080]/10 to-[#a18080]/5 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-[#a18080]/40 text-6xl font-palanquin">
              <img
            src={project.image || ""}
            alt={project.title}
            className="w-full h-full object-cover"
          />
            </div>
          </div>

          <p className="font-montserrat text-[#5c5451] leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="font-palanquin font-semibold text-[#a18080] mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm font-montserrat bg-[#a18080]/10 text-[#a18080] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <ShinyButton onClick={() => window.open(project.githubUrl, '_blank')}>
              View on GitHub
            </ShinyButton>
            <ShinyButton onClick={() => window.open(project.liveUrl, '_blank')}>
              Live Demo
            </ShinyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
