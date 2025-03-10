import { motion } from 'framer-motion';
import { Code, Bot, Globe, Axe, Shield, Sword } from 'lucide-react';
import VikingDivider from '../components/VikingDivider';
import HeroBackground from '../components/HeroBackground';
import Portfolio from '../components/Portfolio';
import { useTranslation } from 'react-i18next';
import FloatingWhatsAppButton from '../components/floatingwppbutton';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#06062d' }}>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-20 pb-32 relative overflow-hidden hero-overlay"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <HeroBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('welcome')} <span className="text-gold-500">Valhalla</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-black-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t('heroDescription')}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              {t('startJourney')}
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"
        />
      </motion.section>

      <VikingDivider />

      {/* Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white mb-16"
          >
            {t('nordicValues')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-700 p-8 rounded-lg border-2 border-gold-500/20"
            >
              <Sword className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{t('innovationStrength')}</h3>
              <p className="text-gray-300">{t('innovationDesc')}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-700 p-8 rounded-lg border-2 border-gold-500/20"
            >
              <Shield className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{t('digitalProtection')}</h3>
              <p className="text-gray-300">{t('protectionDesc')}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-700 p-8 rounded-lg border-2 border-gold-500/20"
            >
              <Axe className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{t('technicalPrecision')}</h3>
              <p className="text-gray-300">{t('precisionDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <VikingDivider />

      {/* Portfolio Section */}
      <Portfolio />

      <VikingDivider />

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white mb-16"
          >
            {t('specialties')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-lg transform transition-all duration-300 hover:shadow-gold"
            >
              <Globe className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{t('webDev')}</h3>
              <p className="text-gray-300">{t('webDevDesc')}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-lg transform transition-all duration-300 hover:shadow-gold"
            >
              <Bot className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{t('automation')}</h3>
              <p className="text-gray-300">{t('automationDesc')}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-lg transform transition-all duration-300 hover:shadow-gold"
            >
              <Code className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{t('customSolutions')}</h3>
              <p className="text-gray-300">{t('customDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>
      <FloatingWhatsAppButton/>
    </div>
  );
}