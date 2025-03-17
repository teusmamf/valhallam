import React from 'react';
import { motion } from 'framer-motion';

// Define o tipo para um projeto
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// Define as variantes de animação
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

// Define as props para o componente (se necessário)
interface PastProjectsProps {
  // Adicione quaisquer props aqui, se necessário
}

const PastProjects: React.FC<PastProjectsProps> = () => {
  // Dados de exemplo para projetos anteriores
  const projects: Project[] = [
    {
      id: 1,
      title: "Plataforma de E-Commerce",
      description: "Uma plataforma de e-commerce totalmente automatizada com recomendações baseadas em IA.",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 2,
      title: "Site Corporativo",
      description: "Um site moderno e responsivo para uma grande empresa de tecnologia.",
      image: "https://via.placeholder.com/400x200"
    },
    {
      id: 3,
      title: "Chatbot de Suporte ao Cliente",
      description: "Um chatbot alimentado por IA que resolve 80% das consultas dos clientes.",
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
          Projetos Anteriores
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