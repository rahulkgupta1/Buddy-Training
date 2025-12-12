import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <img 
                  src="https://www.panhacare.com/logo-light.svg" 
                  alt="PANHA Logo" 
                  className="h-10 w-auto"
                />
                <span className="ml-3 text-primary text-xl font-bold md:text-3xl text-[#1a3e8c]">
                  Panha
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#program" className="text-gray-700 hover:text-[#1a3e8c] font-medium transition-colors">
              Program
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-[#1a3e8c] font-medium transition-colors">
              Benefits
            </Link>
            <Link 
              href="#enroll" 
              className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-indigo-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
