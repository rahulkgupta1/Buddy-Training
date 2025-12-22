'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  'Access to all 10 modules with video content',
  'Interactive exercises and real-world scenarios',
  'Professional profile setup assistance',
  'Job board access for internship opportunities',
  'Community support and peer network',
  'Live role-playing sessions with certified trainers',
  'Digital portfolio creation guidance',
  'Certification upon successful completion',
  'Lifetime access to course materials',
  'Certificate of completion (digital + physical)',
]

const paymentFeatures = [
  { icon: '💳', title: 'Secure payment via credit card, debit card, or UPI' },
  { icon: '🔒', title: '100% secure transaction with encrypted payment gateway' },
  { icon: '⚡', title: 'Instant access to course materials after payment confirmation' },
]

export default function PricingSection() {
  const handleEnrollClick = () => {
    window.open('https://payments.cashfree.com/forms/Buddytraining', '_blank');
  };

  return (
    <section id="pricing" className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
            <span className="gradient-text">Invest in Your Future</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">One-time investment for lifetime opportunities</p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl border-2 border-panha-primary overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-panha-dark to-panha-primary text-white p-5 sm:p-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-1">PANHA Buddy Training Certification</h3>
            <p className="text-blue-100 text-xs sm:text-sm">Complete peer support certification program</p>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 lg:p-8">
            {/* Price */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-7 sm:mb-8"
            >
              <p className="text-gray-600 text-sm sm:text-base mb-1">One-time investment</p>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-bold text-panha-dark">₹3,999</span>
                <span className="text-gray-600 text-sm sm:text-base">/lifetime access</span>
              </div>
              <p className="text-green-600 font-semibold text-xs sm:text-sm">Limited time offer - Secure your spot today!</p>
            </motion.div>

            {/* What's Included Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8"
            >
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-panha-primary">✓</span> What&apos;s Included
              </h4>
              
              {/* Features Grid - 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.02 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-4 w-4 rounded-full bg-gradient-to-br from-panha-primary to-panha-light shadow-md flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium text-xs leading-tight">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Payment & Enrollment Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-7 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200"
            >
              <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2.5">Payment & Enrollment</h4>
              <div className="space-y-2">
                {paymentFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.03 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-base flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-700 font-medium text-xs leading-tight">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnrollClick}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-panha-dark to-panha-primary text-white px-6 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-panha-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Enroll Now
            </motion.button>

            {/* Trust Message */}
            <p className="text-center text-gray-600 text-xs">
              ✓ 30-day money-back guarantee | ✓ No hidden fees | ✓ Lifetime access
            </p>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-panha-dark mb-1">500+</p>
            <p className="text-gray-600 text-xs sm:text-sm">Students Trained</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-panha-dark mb-1">10K+</p>
            <p className="text-gray-600 text-xs sm:text-sm">Hours of Support Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-panha-dark mb-1">₹50L+</p>
            <p className="text-gray-600 text-xs sm:text-sm">Earned by Graduates</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
