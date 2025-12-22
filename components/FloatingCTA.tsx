'use client'

import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

export default function FloatingCTA() {
  const handleEnrollClick = () => {
    window.open('https://payments.cashfree.com/forms/Buddytraining', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 hidden sm:block"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleEnrollClick}
        className="group flex items-center justify-center gap-2 bg-gradient-to-r from-panha-dark to-panha-primary text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 pulse-glow"
      >
        <ShoppingCart className="w-5 h-5" />
        <span>Enroll Now</span>
      </motion.button>
    </motion.div>
  )
}
