import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const whatsappNumber = '+5545999036871'; // ex: 5511999999999
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 transition-colors text-white p-4 rounded-full shadow-lg z-50"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}
