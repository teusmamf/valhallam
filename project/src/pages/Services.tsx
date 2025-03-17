import React from 'react';
import { Bot, Globe, Laptop } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">Nossos Serviços</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-gray-800 hover:border-white transition-all duration-300">
            <Globe className="w-12 h-12 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Criação de Websites</h2>
            <p className="text-gray-400 mb-6">
              Websites personalizados e responsivos que destacam sua marca com design moderno e funcionalidade perfeita.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Design Responsivo</li>
              <li>• Otimização para SEO</li>
              <li>• Foco em Performance</li>
              <li>• Tecnologias Modernas</li>
            </ul>
          </div>
          
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-gray-800 hover:border-white transition-all duration-300">
            <Bot className="w-12 h-12 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Atendimento ao Cliente com IA</h2>
            <p className="text-gray-400 mb-6">
              Soluções de automação inteligente que melhoram o suporte ao cliente e simplificam operações.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Suporte 24/7</li>
              <li>• Chatbots Inteligentes</li>
              <li>• Respostas Automatizadas</li>
              <li>• Análises e Insights</li>
            </ul>
          </div>
          
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-gray-800 hover:border-white transition-all duration-300">
            <Laptop className="w-12 h-12 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Soluções Tecnológicas</h2>
            <p className="text-gray-400 mb-6">
              Soluções tecnológicas completas personalizadas para otimizar os processos do seu negócio.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Integração de Sistemas</li>
              <li>• Automação de Processos</li>
              <li>• Software Personalizado</li>
              <li>• Consultoria em Tecnologia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;