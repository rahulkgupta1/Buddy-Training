'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import EnrollmentForm from './EnrollmentForm'

interface EnrollmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  useEffect(() => {
    // Dispatch custom event to notify StickyCTA about modal state
    const event = new CustomEvent('modalStateChanged', {
      detail: { isOpen }
    })
    window.dispatchEvent(event)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div data-enrollment-modal="true" id="enrollment-modal">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-panha-dark to-panha-primary text-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Enroll Now</h2>
                  <p className="text-blue-100 text-sm mt-1">Join PANHA Buddy Training</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <EnrollmentForm />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
