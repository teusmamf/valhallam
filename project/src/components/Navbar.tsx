import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Globe, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="w-8 h-8" />
            <span className="font-bold text-xl">FutureAuto</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors duration-300 group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/services" 
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors duration-300 group"
            >
              <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Services</span>
            </Link>
            
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;