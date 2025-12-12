'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Brain, MessageCircle, Lock, AlertCircle, Heart, Shield, Users, FileText, Rocket } from 'lucide-react'

const modules = [
  { title: 'Foundations of Peer Support & Active Listening', duration: '2 hours', icon: BookOpen, color: 'from-panha-dark to-panha-primary' },
  { title: 'The Science of Mental Wellbeing', duration: '2 hours', icon: Brain, color: 'from-panha-dark to-panha-primary' },
  { title: 'Empathetic Communication Skills', duration: '2.5 hours', icon: MessageCircle, color: 'from-panha-dark to-panha-primary' },
  { title: 'Building Trust & Confidentiality', duration: '2 hours', icon: Lock, color: 'from-panha-dark to-panha-primary' },
  { title: 'Understanding Mental Health Challenges', duration: '3 hours', icon: AlertCircle, color: 'from-panha-dark to-panha-primary' },
  { title: 'Self-Care for Peer Supporters', duration: '1.5 hours', icon: Heart, color: 'from-panha-dark to-panha-primary' },
  { title: 'Crisis Response & Boundaries', duration: '3 hours', icon: Shield, color: 'from-panha-dark to-panha-primary' },
  { title: 'Cultural Sensitivity in Support', duration: '2 hours', icon: Users, color: 'from-panha-dark to-panha-primary' },
  { title: 'Documentation & Professional Ethics', duration: '2 hours', icon: FileText, color: 'from-panha-dark to-panha-primary' },
  { title: 'Launching Your Peer Support Practice', duration: '2 hours', icon: Rocket, color: 'from-panha-dark to-panha-primary' },
]

export default function ProgramOverview() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null)

  const moduleDescriptions = [
    'Learn the fundamentals of peer support, active listening techniques, and how to create a safe space for others.',
    'Understand the science behind mental wellbeing, stress management, and psychological resilience.',
    'Master empathetic communication, non-verbal cues, and building genuine connections with peers.',
    'Develop skills in building trust, maintaining confidentiality, and professional boundaries.',
    'Explore common mental health challenges, their symptoms, and appropriate peer support responses.',
    'Learn self-care strategies to prevent burnout and maintain your own mental wellbeing.',
    'Handle crisis situations appropriately and maintain healthy professional boundaries.',
    'Provide culturally sensitive support and understand diverse perspectives in mental health.',
    'Learn documentation practices and professional ethics in peer support work.',
    'Create your peer support practice, build your client base, and start earning.',
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
            <span className="gradient-text">Complete 10-Module Certification in 2 Weeks</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Master peer support through comprehensive, practical training</p>
        </motion.div>

        {/* Program Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md border-l-4 border-panha-primary">
            <p className="text-gray-600 text-xs sm:text-sm font-medium mb-1">Duration</p>
            <p className="text-2xl sm:text-3xl font-bold text-panha-dark">2 Weeks</p>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">Intensive program</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md border-l-4 border-panha-light">
            <p className="text-gray-600 text-xs sm:text-sm font-medium mb-1">Format</p>
            <p className="text-2xl sm:text-3xl font-bold text-panha-dark">Online</p>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">Video + Exercises</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md border-l-4 border-panha-accent">
            <p className="text-gray-600 text-xs sm:text-sm font-medium mb-1">Certification</p>
            <p className="text-2xl sm:text-3xl font-bold text-panha-dark">Official</p>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">PANHA Verified</p>
          </div>
        </motion.div>

        {/* Modules Grid - 2 Columns x 5 Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12"
        >
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all cursor-pointer group"
              >
                {/* Module Header */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-xs font-bold bg-gradient-to-r ${module.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                        Module {index + 1}
                      </span>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mt-1">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Module Description */}
                <AnimatePresence>
                  {expandedModule === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`px-5 sm:px-6 py-4 sm:py-5 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-t border-gray-200`}
                    >
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {moduleDescriptions[index]}
                      </p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.color}`}></div>
                        <span className="text-xs font-semibold text-gray-600">Click to collapse</span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Total Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg border border-blue-200 overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-10 blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-200 rounded-full opacity-10 blur-3xl"
          ></motion.div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className="inline-block mb-3 sm:mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs sm:text-sm font-bold">
                ✓ Complete Program
              </span>
            </motion.div>
            
            <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">Total Training Hours</p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-3 sm:mb-4"
            >
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">22.5+</p>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">Hours of comprehensive training</p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-panha-dark">10</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Modules</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-panha-dark">2</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Weeks</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-panha-dark">100%</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Online</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
