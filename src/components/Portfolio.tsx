import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import sassLogo from '../assets/sass.png';
import estacionamento from '../assets/estacionamentoRot.png';
import monaco from '../assets/logomonaco.png';
import newtech from '../assets/newtech.png';


export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Sass para casais',
      description: t('Sistema que permite casais criarem páginas com mapaeamento das estrelas de datas especiais'),
      image: sassLogo,
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://rainbow-frangollo-578f23.netlify.app/',

    },
    {
      title: 'Site estacionamento rotativo',
      description: t('Site institucional para rede de estacionamentos'),
      image: estacionamento,
      technologies: ['React', 'nodejs', 'googlecloud'],
      liveUrl: 'https://thunderous-elf-16b7c5.netlify.app/',
    
    },
    {
      title:  'Website para agência de marketing',
      description: t('portfolio.runeTranslator'),
      image: monaco,
      technologies: ['TypeScript', 'Next.js', 'AI Integration'],
      liveUrl: 'https://monacosite.netlify.app/',
      
    },
    {
      title:  'Site newTech',
      description: t('Site 3D para lojas de eletrônicos'),
      image: monaco,
      technologies: ['TypeScript', 'Next.js', 'AI Integration'],
      liveUrl: 'https://newtechcvel.netlify.app/',
      
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">{t('portfolio.title')}</h2>
          <p className="text-gray-300 text-lg">{t('portfolio.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gold-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gold-500 text-sm rounded-full border border-gold-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gold-500 hover:text-yellow-400"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {t('portfolio.live')}
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                   
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gold-500 hover:text-yellow-400"
                  >
                   
                    {t('portfolio.code')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gold-500 hover:text-yellow-400"
          >
           
     
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}