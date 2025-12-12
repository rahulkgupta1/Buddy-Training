'use client'

import { motion } from 'framer-motion'
import { CreditCard, BookOpen, CheckCircle, Award, Briefcase } from 'lucide-react'

const steps = [
  {
    icon: CreditCard,
    title: 'Enroll & Pay ₹3,999',
    description: 'Access all 10 modules instantly',
    step: 1,
  },
  {
    icon: BookOpen,
    title: 'Complete Training',
    description: '2 weeks of video lessons & practice',
    step: 2,
  },
  {
    icon: CheckCircle,
    title: 'Pass Assessment',
    description: 'Demonstrate your peer support skills',
    step: 3,
  },
  {
    icon: Award,
    title: 'Get Certified',
    description: 'Receive verified certificate & public profile',
    step: 4,
  },
  {
    icon: Briefcase,
    title: 'Start Earning',
    description: 'Apply for paid internships & part-time roles',
    step: 5,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            5 simple steps to become a certified peer supporter
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-panha-primary via-panha-light to-panha-accent transform -translate-y-1/2"></div>

          {/* Steps Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10"
          >
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="bg-gray-100 rounded-xl shadow-lg p-8 text-center h-full border-t-4 border-panha-primary hover:shadow-2xl transition-all duration-300">
                    {/* Step Number Circle */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-panha-primary to-panha-light rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-gray-800 font-bold text-lg">{item.step}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-4 mb-4 flex justify-center">
                      <div className="p-4 bg-gradient-to-br from-panha-primary to-panha-light rounded-lg">
                        <Icon className="w-8 h-8 text-gray-800" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="text-panha-accent text-2xl">→</div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold">Ready to start your journey?</span> Join hundreds of certified PANHA Buddies today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-panha-dark to-panha-primary text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Now
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
