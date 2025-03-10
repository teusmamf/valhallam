import {  Instagram, Linkedin,  } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/valhalla_mkt_?igsh=bG00emZpb3Z3OW96&utm_source=qr" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="border-t border-gray-800" style={{ backgroundColor: '#06062d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            
            <p className="text-gray-400 text-sm">
              Forjando o futuro digital com a força e precisão dos guerreiros nórdicos.
            </p>
          </div>
          
          <div>
            <h3 className="text-gold-500 font-bold text-lg mb-4">Nosso Legado</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Força em Inovação</li>
              <li>Honra em Qualidade</li>
              <li>Glória em Resultados</li>
              <li>Sabedoria Digital</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-500 font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Valhalla Company. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}