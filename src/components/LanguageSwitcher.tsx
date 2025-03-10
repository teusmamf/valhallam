import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-gray-800 rounded-full p-2 shadow-lg border border-gold-500/30"
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
  );
}