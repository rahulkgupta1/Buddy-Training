'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHomePage, setIsHomePage] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  useEffect(() => {
    // Check if we're on home page
    const checkHomePage = () => {
      setIsHomePage(window.location.pathname === '/')
    }

    // Check if payment modal is open
    const checkPaymentModal = () => {
      const modal = document.querySelector('[data-enrollment-modal="true"]') as HTMLElement
      const paymentModal = document.getElementById('enrollment-modal') as HTMLElement
      
      // Check if modal exists and is visible
      const modalExists = modal || paymentModal
      const modalVisible = modalExists && (
        (modal && modal.style.display !== 'none') || 
        (paymentModal && paymentModal.style.display !== 'none') ||
        (paymentModal && paymentModal.classList.contains('block'))
      )
      
      setIsPaymentModalOpen(modalVisible)
      return !modalVisible // Return true if modal is NOT visible
    }

    // Handle scroll to show/hide
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroSectionHeight = 600 // Approximate hero section height
      
      // Show after scrolling past hero section, hide when back to top, and hide if payment modal is open
      const shouldShow = scrollY > heroSectionHeight && checkPaymentModal()
      setIsVisible(shouldShow)
    }

    // Listen for modal state changes
    const listenForModalChanges = () => {
      // Custom event listener for modal state
      const handleModalStateChange = (event: any) => {
        const { isOpen } = event.detail || {}
        setIsPaymentModalOpen(isOpen)
        handleScroll() // Re-check visibility
      }

      window.addEventListener('modalStateChanged', handleModalStateChange)
      
      return () => {
        window.removeEventListener('modalStateChanged', handleModalStateChange)
      }
    }

    checkHomePage()
    handleScroll()
    
    const cleanupModalListener = listenForModalChanges()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('popstate', checkHomePage)
    
    // Check modal state periodically (fallback)
    const modalCheckInterval = setInterval(() => {
      const wasVisible = isVisible
      checkPaymentModal()
      handleScroll()
      
      // Debug log
      console.log('StickyCTA Debug:', {
        isHomePage,
        scrollY: window.scrollY,
        heroSectionHeight: 600,
        shouldShow: window.scrollY > 600 && !isPaymentModalOpen,
        isPaymentModalOpen,
        isVisible: wasVisible
      })
    }, 2000)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', checkHomePage)
      cleanupModalListener()
      clearInterval(modalCheckInterval)
    }
  }, [])

  // Only show on home page, after scrolling, and when payment modal is closed
  if (!isHomePage || !isVisible || isPaymentModalOpen) return null

  return (
    <div 
      className="fixed z-50 backdrop-blur-lg border border-gray-600 shadow-xl transition-all duration-300 ease-out rounded-3xl"
      style={{
        width: '786.013px',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(45, 45, 45, 0.85)'
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Left Section - Panha Logo and Course Info */}
          <div className="flex items-center space-x-3">
            {/* Panha Logo */}
            <div className="flex-shrink-0">
              <img 
                src="https://www.panhacare.com/logo-light.svg" 
                alt="PANHA Logo" 
                className="h-10 w-auto"
              />
            </div>

            {/* Course Info */}
            <div>
              <h3 className="font-bold text-white text-lg leading-tight">Buddy Training</h3>
              <p className="text-sm text-gray-100 flex items-center">
                <svg className="w-4 h-4 mr-1 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                1K+ Students Enrolled
              </p>
            </div>
          </div>

          {/* Right Section - Price and CTA */}
          <div className="flex items-center space-x-4">
            {/* Price */}
            <div className="text-right hidden sm:block">
              <div className="flex items-center space-x-2">
                <span className="text-gray-200 line-through text-base">₹5,999.00</span>
                <span className="text-2xl font-bold text-white">₹3,999.00</span>
              </div>
              <p className="text-sm text-yellow-300 font-medium">Save ₹2,000</p>
            </div>

            {/* Mobile Price */}
            <div className="text-right sm:hidden">
              <div className="flex items-center space-x-1">
                <span className="text-gray-200 line-through text-sm">₹5,999</span>
                <span className="text-xl font-bold text-white">₹3,999</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="#enroll"
              className="relative bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap text-base sm:text-lg overflow-hidden group"
            >
              <span className="relative z-10">Enroll Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -skew-x-12 -translate-x-full group-hover:translate-x-0"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
