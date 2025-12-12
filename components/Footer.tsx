import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a202c] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and Newsletter */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-gray-300 text-2xl font-bold">Panha</div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Join our newsletter to stay up to date on feedback and releases.
            </p>
            <div className="flex flex-col gap-3 mb-4 w-full">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-md bg-[#2d3748] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs">
              By subscribing, you agree to receive communications from us. We never share your data.
            </p>
          </div>

          {/* Column 2: Support */}
          <div className="col-span-1">
            <h3 className="text-gray-300 font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://forms.gle/NX6RaWR4aWtC1cbG8" 
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.panhacare.com/Terms-of-Service" 
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.panhacare.com/privacy" 
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div className="col-span-1">
            <h3 className="text-gray-300 font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.panhacare.com/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://www.panhacare.com/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="https://www.panhacare.com/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="https://forms.gle/NX6RaWR4aWtC1cbG8" 
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Panha Services */}
          <div className="col-span-1">
            <h3 className="text-gray-300 font-semibold text-lg mb-4">Panha Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ably" className="text-gray-400 hover:text-white transition-colors">
                  10 min free call/chat
                </Link>
              </li>
              <li>
                <Link href="https://www.panhacare.com/#" className="text-gray-400 hover:text-white transition-colors">
                  Register for sessions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-gray-300 font-semibold text-lg mb-2">Email</h3>
              <a 
                href="mailto:info@panhacare.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                info@panhacare.com
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-4 mb-4">
                <Link 
                  href="https://www.linkedin.com/company/panha/" 
                  className="flex items-center bg-blue-700 text-gray-300 px-3 py-2 rounded-lg shadow-md hover:bg-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <div className="text-left">
                    <span className="text-xs block">FIND IT ON THE</span>
                    <span className="font-bold block">Top 10 on LinkedIn</span>
                  </div>
                </Link>
                
                {/* Social Media Icons */}
                <div className="flex space-x-2">
                  <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16v16H4V4zm4.5 2.5v11h2.5v-11h-2.5zm1.25 1.25c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S8.5 6.81 8.5 7.5s.56 1.25 1.25 1.25zm4 0v11h2.5v-5.5c0-1.5.5-2.5 2-2.5s2 1 2 2.5v5.5h2.5v-6c0-2.5-1.5-3.5-3-3.5s-2.5 1-2.5 2v-2h-2.5z"/>
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162s6.162 2.759 6.162 6.162-2.759 6.163-6.162 6.163-6.162-2.759-6.162-6.163zm12 0c0-3.226-2.617-5.838-5.838-5.838s-5.838 2.617-5.838 5.838 2.617 5.838 5.838 5.838 5.838-2.617 5.838-5.838zm1.541-7.66c0 .796-.646 1.44-1.44 1.44s-1.44-.646-1.44-1.44.646-1.44 1.44-1.44 1.44.646 1.44 1.44z"/>
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                &copy; 2025 Panha. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}