import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">Entre em Contato</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Vamos Discutir Seu Projeto</h2>
            <p className="text-gray-400">
              Pronto para transformar seu negócio com soluções de automação e web de ponta? 
              Estamos aqui para ajudá-lo a navegar pelo futuro da tecnologia.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>+55 (11) 98765-4321</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6" />
                <span>contato@agenciafuturo.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-6 h-6" />
                <span>Chat ao Vivo Disponível 24/7</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:border-white transition-colors duration-300"
                placeholder="Seu Nome"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:border-white transition-colors duration-300"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:border-white transition-colors duration-300 h-32"
                placeholder="Conte-nos sobre seu projeto"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors duration-300 font-medium"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;