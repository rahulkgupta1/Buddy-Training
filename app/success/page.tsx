'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Mail, Download, Users } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        {/* Success Icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-30"></div>
            <CheckCircle className="w-24 h-24 text-green-500 relative" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to PANHA Buddy Training!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Your enrollment has been confirmed. You&apos;re now part of our community of peer support professionals.
          </p>

          {/* Next Steps */}
          <div className="space-y-4 mb-12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg"
            >
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Check Your Email</h3>
                <p className="text-gray-600 text-sm">We&apos;ve sent your login credentials and course access details</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4 p-4 bg-green-50 rounded-lg"
            >
              <Download className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Download Resources</h3>
                <p className="text-gray-600 text-sm">Access all 10 modules, videos, and downloadable materials</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg"
            >
              <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Join Community</h3>
                <p className="text-gray-600 text-sm">Connect with 500+ certified peer supporters in our community group</p>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
              <p className="text-3xl font-bold text-panha-dark">10</p>
              <p className="text-sm text-gray-600">Modules</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600">2</p>
              <p className="text-sm text-gray-600">Weeks</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
              <p className="text-3xl font-bold text-orange-600">∞</p>
              <p className="text-sm text-gray-600">Access</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-panha-dark to-panha-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Go to Dashboard
            </motion.button>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-panha-primary text-panha-primary rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Back to Home
              </motion.button>
            </Link>
          </div>

          {/* Support */}
          <p className="text-gray-600 text-sm mt-8">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@panha.com" className="text-panha-primary font-semibold hover:underline">
              support@panha.com
            </a>
          </p>
        </div>

        {/* Celebration Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center mt-8 text-4xl"
        >
          🎉
        </motion.div>
      </motion.div>
    </div>
  )
}
