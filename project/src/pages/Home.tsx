import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Bot, Globe, MessageSquare, Star, Users, Building2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PastProjects from '../components/Pastprojects';

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

const Home = () => {
  return (
    <div className="relative">
      {/* Seção Hero */}
      <div className="relative h-screen">
        <div className="absolute inset-0 z-0" style={{ pointerEvents: 'all' }}>
          <Spline 
            scene="https://prod.spline.design/1exG3VCBStEwKPOV/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        <motion.div 
          className="relative z-10 flex items-center justify-center h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center max-w-4xl px-4 pointer-events-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              {...fadeIn}
            >
              Automatize Seu Futuro
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Transforme seu negócio com soluções de automação e web de ponta
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300"
              >
                Comece Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Seção de Estatísticas */}
      <motion.div 
        className="bg-black/80 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <Users className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-gray-400">Clientes Satisfeitos</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <Building2 className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-gray-400">Projetos Concluídos</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <Star className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p className="text-gray-400">Satisfação do Cliente</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Seção de Recursos */}
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
            Por Que Escolher a Nossa Empresa
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              className="text-center p-6 rounded-lg border border-gray-800 hover:border-white transition-colors duration-300 hover:transform hover:scale-105"
              variants={fadeIn}
            >
              <Bot className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Soluções com IA</h3>
              <p className="text-gray-400">Sistemas de automação avançados que aprendem e se adaptam às necessidades do seu negócio</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 rounded-lg border border-gray-800 hover:border-white transition-colors duration-300 hover:transform hover:scale-105"
              variants={fadeIn}
            >
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Presença Web Moderna</h3>
              <p className="text-gray-400">Sites bonitos e responsivos que capturam a essência da sua marca</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 rounded-lg border border-gray-800 hover:border-white transition-colors duration-300 hover:transform hover:scale-105"
              variants={fadeIn}
            >
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Atendimento 24/7</h3>
              <p className="text-gray-400">Sistemas de suporte automatizados que nunca dormem</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Seção de Depoimentos */}
      <motion.div 
        className="bg-black/80 py-24 px-4"
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

            <PastProjects/>
            Depoimentos dos Clientes
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-black/50 p-8 rounded-xl border border-gray-800"
              variants={fadeIn}
            >
              <Quote className="w-8 h-8 mb-4 text-gray-400" />
              <p className="text-gray-300 mb-6">
                "As soluções de automação fornecidas pela FutureAuto transformaram nossas operações de atendimento ao cliente. Os tempos de resposta caíram 70% e a satisfação do cliente está no auge."
              </p>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-400">CEO, TechCorp</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-black/50 p-8 rounded-xl border border-gray-800"
              variants={fadeIn}
            >
              <Quote className="w-8 h-8 mb-4 text-gray-400" />
              <p className="text-gray-300 mb-6">
                "Nosso novo site não é apenas bonito, é uma ferramenta poderosa que aumentou nossas conversões online em 150%. A atenção aos detalhes da equipe é notável."
              </p>
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-gray-400">Diretor de Marketing, GrowthLabs</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-black/50 p-8 rounded-xl border border-gray-800"
              variants={fadeIn}
            >
              <Quote className="w-8 h-8 mb-4 text-gray-400" />
              <p className="text-gray-300 mb-6">
                "As soluções tecnológicas implementadas pela equipe otimizaram nossos processos e reduziram custos operacionais em 40%. Eles realmente entendem as necessidades dos negócios modernos."
              </p>
              <div>
                <h4 className="font-bold">Emma Davis</h4>
                <p className="text-gray-400">COO, InnovateNow</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;