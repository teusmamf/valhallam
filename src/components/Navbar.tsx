import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logo from '../assets/valhallalogo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Valhalla" className="h-12 w-auto" />
              <span className="text-gold-500 font-bold text-xl ml-2">Valhalla</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/servicos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Serviços</Link>
              <Link to="/contato" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</Link>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="bg-gray-800 rounded-full p-2 shadow-lg border border-gold-500/30 ml-4"
            >
              <div className="flex items-center space-x-2 px-2">
                {i18n.language === 'pt' ? (
                  <>
                    <img
                      src="https://flagcdn.com/w40/br.png"
                      alt="Português"
                      className="w-6 h-4 rounded"
                    />
                    <span className="text-gold-500 text-sm">PT</span>
                  </>
                ) : (
                  <>
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="English"
                      className="w-6 h-4 rounded"
                    />
                    <span className="text-gold-500 text-sm">EN</span>
                  </>
                )}
              </div>
            </motion.button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="bg-gray-800 rounded-full p-2 shadow-lg border border-gold-500/30"
            >
              <div className="flex items-center space-x-2 px-2">
                {i18n.language === 'pt' ? (
                  <>
                    <img
                      src="https://flagcdn.com/w40/br.png"
                      alt="Português"
                      className="w-6 h-4 rounded"
                    />
                    <span className="text-gold-500 text-sm">PT</span>
                  </>
                ) : (
                  <>
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="English"
                      className="w-6 h-4 rounded"
                    />
                    <span className="text-gold-500 text-sm">EN</span>
                  </>
                )}
              </div>
            </motion.button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/servicos" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Serviços</Link>
            <Link to="/contato" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contato</Link>
          </div>
        </div>
      )}
    </nav>
  );
}