'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Briefcase, Shield } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Paid Internships & Part-Time Roles',
    subtitle: '85% placed within 1 month',
    description: 'Secure paid opportunities as a peer support specialist or good listener immediately after certification. Start earning while building your career.',
    points: ['₹10,000-20,000/month potential', 'Flexible working hours', 'Real-world experience'],
    highlight: 'Recognized by leading organizations',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'Build Your Professional CV',
    subtitle: 'Industry-recognized credentials',
    description: 'Add a verified, industry-recognized certification to your resume. Stand out from other psychology graduates with tangible credentials.',
    points: ['Verified PANHA certification', 'Recognized by leading organizations', 'Portfolio enhancement'],
    highlight: 'Recognized by leading organizations',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Verified Peer Supporter Status',
    subtitle: 'Public profile with endorsements',
    description: 'Gain official recognition and create a public professional profile showcasing your portfolio, skills, and verified achievements.',
    points: ['Public profile with endorsements', 'Digital badge for LinkedIn', 'Professional credibility'],
    highlight: 'Public profile with endorsements',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2 sm:mb-3"
          >
            <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-100 text-panha-primary font-semibold rounded-full text-xs sm:text-sm">
              ✨ Why Choose PANHA?
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight px-2">
            <span className="gradient-text-warm">Why Join PANHA Buddy Training?</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-3">
            Unlock three powerful benefits that will transform your psychology career
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* Top Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`mb-3 sm:mb-4 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg`}
                  >
                    <Icon className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" />
                  </motion.div>

                  {/* Subtitle */}
                  <p className="text-xs font-semibold text-panha-primary mb-1 uppercase tracking-wider line-clamp-2">
                    {benefit.subtitle}
                  </p>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow line-clamp-3">
                    {benefit.description}
                  </p>

                  {/* Divider */}
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-panha-primary to-panha-light rounded-full mb-3 sm:mb-4"></div>

                  {/* Points */}
                  <ul className="space-y-1.5 sm:space-y-2">
                    {benefit.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <motion.span
                          whileHover={{ scale: 1.3 }}
                          className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-panha-primary to-panha-light flex-shrink-0 mt-0.5"
                        >
                          <span className="text-white text-xs font-bold">✓</span>
                        </motion.span>
                        <span className="text-xs sm:text-sm text-gray-700 font-medium">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Highlight Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200"
                  >
                    <p className="text-xs text-panha-primary font-semibold flex items-center gap-1.5">
                      <span className="text-sm">🏆</span>
                      <span className="line-clamp-2">{benefit.highlight}</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12 text-center px-2"
        >
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">
            Ready to unlock these benefits and transform your career?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-panha-dark to-panha-primary text-white rounded-full font-bold text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
