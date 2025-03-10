import { motion } from 'framer-motion';

export default function VikingDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4"
      >
        <div className="h-0.5 w-16 bg-gold-500"></div>
        <svg className="w-8 h-8 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L8 6H4L2 8V16L4 18H8L12 22L16 18H20L22 16V8L20 6H16L12 2Z" />
          <path d="M12 8V16M8 12H16" />
        </svg>
        <div className="h-0.5 w-16 bg-gold-500"></div>
      </motion.div>
    </div>
  );
}