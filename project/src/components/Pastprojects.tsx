import React from 'react';
import { motion } from 'framer-motion';

// Define the type for a project
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// Define the animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Define the props for the component (if any)
interface PastProjectsProps {
  // Add any props here if needed
}

const PastProjects: React.FC<PastProjectsProps> = () => {
  // Sample data for past projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully automated e-commerce platform with AI-driven recommendations.",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 2,
      title: "Corporate Website",
      description: "A modern, responsive website for a leading tech corporation.",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 3,
      title: "Customer Support Bot",
      description: "An AI-powered chatbot that handles 80% of customer inquiries.",
      image: "https://via.placeholder.com/400x200"
    }
  ];

  return (
    <motion.div 
      className="bg-black py-24 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          variants={fadeIn}
        >
          Past Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-white transition-colors duration-300 hover:transform hover:scale-105"
              variants={fadeIn}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PastProjects;