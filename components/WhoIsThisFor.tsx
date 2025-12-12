'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const audiences = [
  'Bachelor\'s degree students in Psychology',
  'Master\'s degree students in Psychology',
  'Aspiring mental health professionals',
  'Students wanting paid internships',
  'Those passionate about peer support',
  'Anyone building psychology portfolio',
]

export default function WhoIsThisFor() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Perfect for Psychology Students</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're just starting or advancing your career, this program is designed for you
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Checklist */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-panha-primary to-panha-light">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 font-medium">{audience}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-panha-primary via-panha-light to-cyan-300 rounded-3xl p-12 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-3xl font-bold text-white mb-4">Your Psychology Degree</h3>
                <p className="text-white text-lg mb-8 leading-relaxed">
                  Transforms into a professional career with verified credentials and paid opportunities
                </p>
                <div className="space-y-3">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-white">
                    <p className="font-semibold">✓ Recognized by employers</p>
                  </div>
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-white">
                    <p className="font-semibold">✓ Immediate earning potential</p>
                  </div>
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-white">
                    <p className="font-semibold">✓ Professional network access</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
