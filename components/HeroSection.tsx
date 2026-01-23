'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  const handleEnrollClick = () => {
    window.open('https://payments.cashfree.com/forms/Buddytraining', '_blank');
  };

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] bg-white flex items-center overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-4 lg:pb-12">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
  
            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                <span className="gradient-text">Become a Certified</span>
                <br />
                <span className="gradient-text">Peer Supporter</span>
                <br />
                <span className="text-gray-900">&amp; Earn While You Learn</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6 leading-relaxed max-w-xl">
                Transform Your Psychology Degree into a Professional Career. Train as a Mental Wellbeing Buddy in Just 2 Weeks.
              </p>
            </div>

            {/* Trust Badges - Single Row */}
            <div className="flex flex-row items-center justify-center gap-1.5 sm:gap-2">
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                className="flex-shrink-0 flex items-center gap-1.5 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md shadow-sm border border-gray-100 hover:shadow transition-all whitespace-nowrap text-xs"
              >
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Verified Certification</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                className="flex-shrink-0 flex items-center gap-1.5 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md shadow-sm border border-gray-100 hover:shadow transition-all whitespace-nowrap text-xs"
              >
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Professional Portfolio</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                className="flex-shrink-0 flex items-center gap-1.5 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md shadow-sm border border-gray-100 hover:shadow transition-all whitespace-nowrap text-xs"
              >
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Paid Opportunities</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnrollClick}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-panha-dark to-panha-primary text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-panha-primary/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-panha-primary text-panha-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6 sm:gap-8 pt-4 sm:pt-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-panha-dark">10</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Modules</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-panha-dark">2</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Weeks</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-panha-dark">100%</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Online & Flexible</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual - Mobile App Image - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <img 
                src="/panha-image.png" 
                alt="PANHA Care Mobile App"
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



