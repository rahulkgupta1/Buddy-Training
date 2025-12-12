'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import EnrollmentModal from './EnrollmentModal'

export default function FloatingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 bg-gradient-to-r from-panha-dark to-panha-primary text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 pulse-glow"
      >
        <ShoppingCart className="w-5 h-5" />
        <span>Enroll Now</span>
      </motion.button>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.div>
  )
}
