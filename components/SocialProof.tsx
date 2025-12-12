'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Psychology Masters Student',
    initials: 'PS',
    content: 'This certification transformed my career prospects. I got a paid internship within 2 weeks of completing the program!',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'Psychology Bachelor Student',
    initials: 'AP',
    content: 'The practical role-playing sessions were incredibly valuable. I feel confident in my peer support skills now.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Psychology Masters Student',
    initials: 'NG',
    content: 'The certification added significant value to my CV. Employers were impressed with the comprehensive training.',
    rating: 5,
  },
]

export default function SocialProof() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
            <span className="text-panha-primary">What Students</span>
            <span className="text-panha-accent"> Say</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Real experiences from psychology students who completed the program.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-5 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-panha-accent text-panha-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-4 leading-relaxed text-xs sm:text-sm italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-panha-primary to-panha-light flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Read More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#" className="inline-flex items-center gap-2 text-panha-primary font-semibold text-sm hover:gap-3 transition-all">
            Read More Success Stories
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
