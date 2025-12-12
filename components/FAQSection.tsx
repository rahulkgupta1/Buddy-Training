'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need prior experience?',
    answer: 'No! This program is designed for psychology students at all levels. Whether you\'re a bachelor\'s or master\'s student, we\'ll teach you everything you need to know about peer support.',
  },
  {
    question: 'What\'s the time commitment?',
    answer: 'The program is designed to be completed in 2 weeks with approximately 20-25 hours of total engagement. You can study at your own pace within this timeframe.',
  },
  {
    question: 'How do I get paid opportunities after?',
    answer: 'Upon certification, you\'ll get access to our exclusive job board with paid internship and part-time opportunities. Many graduates earn ₹10,000-20,000 per month.',
  },
  {
    question: 'Is this recognized professionally?',
    answer: 'Yes! The PANHA Buddy certification is recognized by leading psychology institutions and employers. It\'s a verified credential that enhances your CV and professional profile.',
  },
  {
    question: 'What if I miss a module?',
    answer: 'You have lifetime access to all course materials. You can revisit any module anytime, even after completing the program.',
  },
  {
    question: 'What support do I get during training?',
    answer: 'You\'ll have access to our community support group, weekly live Q&A sessions, and direct support from our training team. You\'re never alone in this journey!',
  },
]

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know about PANHA Buddy Training</p>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white transition-colors"
              >
                <h3 className="font-semibold text-gray-900 text-left text-lg">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-panha-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-white border-t border-gray-200"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-panha-dark to-panha-primary text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Our Support Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
