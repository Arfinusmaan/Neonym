import React, { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 20,
  stiffness: 200,
  mass: 1,
};

const ProjectCard = ({ project, onClick = () => {} }) => {
  const cardRef = useRef(null);

  // motion values for tilt
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);

  // motion values for tooltip (project name)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useSpring(0, springValues);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -15; // smoother tilt
    const rotationY = (offsetX / (rect.width / 2)) * 15;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    opacity.set(0);
  };

  const handleSeeMore = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative [perspective:1000px]">
      <motion.div
        ref={cardRef}
        className="
          group relative bg-white rounded-xl p-6 shadow-sm border border-[#a18080]/10
          hover:shadow-2xl cursor-pointer
          transition-all duration-300 ease-out
          hover:border-[#a18080]/20
        "
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSeeMore}
      >
        {/* Project Image */}
        <div
          className="w-full h-48 rounded-lg mb-4 overflow-hidden"
          style={{ transform: "translateZ(30px)" }}
        >
          <img
            src={project.image || ""}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="space-y-3" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-lg font-palanquin font-semibold text-[#a18080] group-hover:text-[#5c5451] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm font-montserrat text-[#5c5451] line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack?.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-montserrat bg-[#a18080]/10 text-[#a18080] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleSeeMore}
              className="text-sm font-montserrat text-[#a18080] hover:text-[#5c5451] transition-colors"
            >
              See More →
            </button>

            <div className="flex items-center space-x-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-[#5c5451] hover:text-[#a18080] hover:bg-[#a18080]/10 rounded-full transition-all duration-200"
                  aria-label="View on GitHub"
                  style={{ transform: "translateZ(15px)" }}
                >
                  <Github size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-[#5c5451] hover:text-[#a18080] hover:bg-[#a18080]/10 rounded-full transition-all duration-200"
                  aria-label="View Live Demo"
                  style={{ transform: "translateZ(15px)" }}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Floating tooltip with project name */}
        <motion.div
          className="pointer-events-none absolute left-0 top-0 rounded-md bg-[#a18080] text-white px-2 py-1 text-xs font-montserrat shadow-lg"
          style={{
            x,
            y,
            opacity,
            translateX: "-50%",
            translateY: "-150%",
            transform: "translateZ(40px)", // floats above
          }}
        >
          {project.title}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
