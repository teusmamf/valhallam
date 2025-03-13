import React from 'react';
import { Bot, Globe, Laptop } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">Our Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-gray-800 hover:border-white transition-all duration-300">
            <Globe className="w-12 h-12 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Website Creation</h2>
            <p className="text-gray-400 mb-6">
              Custom-built, responsive websites that showcase your brand with modern design and seamless functionality.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Responsive Design</li>
              <li>• SEO Optimization</li>
              <li>• Performance Focused</li>
              <li>• Modern Technologies</li>
            </ul>
          </div>
          
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-gray-800 hover:border-white transition-all duration-300">
            <Bot className="w-12 h-12 mb-6" />
            <h2 className="text-2xl font-bold mb-4">AI Customer Service</h2>
            <p className="text-gray-400 mb-6">
              Intelligent automation solutions that enhance customer support and streamline operations.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• 24/7 Support</li>
              <li>• Smart Chatbots</li>
              <li>• Automated Responses</li>
              <li>• Analytics & Insights</li>
            </ul>
          </div>
          
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-gray-800 hover:border-white transition-all duration-300">
            <Laptop className="w-12 h-12 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Technology Solutions</h2>
            <p className="text-gray-400 mb-6">
              Comprehensive tech solutions tailored to optimize your business processes.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• System Integration</li>
              <li>• Process Automation</li>
              <li>• Custom Software</li>
              <li>• Tech Consulting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;