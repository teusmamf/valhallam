import { motion } from 'framer-motion';
import { Code, Bot, Globe, Rocket, Shield, LineChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      title: t('webDev'),
      description: t('webDevDesc')
    },
    {
      icon: Bot,
      title: t('automation'),
      description: t('automationDesc')
    },
    {
      icon: Code,
      title: t('customSolutions'),
      description: t('customDesc')
    },
    {
      icon: Shield,
      title: t('digitalProtection'),
      description: t('protectionDesc')
    },
    {
      icon: Rocket,
      title: t('technicalPrecision'),
      description: t('precisionDesc')
    },
    {
      icon: LineChart,
      title: t('innovationStrength'),
      description: t('innovationDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">{t('specialties')}</h1>
          <p className="text-gray-300 text-lg">{t('heroDescription')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <service.icon className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}