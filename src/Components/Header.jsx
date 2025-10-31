import React, { useState } from 'react'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-black"
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5274 0L75.0548 65H0L37.5274 0Z"
              fill="black"
            />
          </svg>
          <span className="ml-2 text-xl font-semibold text-black">vercel</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Solutions
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Developers
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Documentation
          </a>
        </nav>

        {/* Right side - Search and Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm text-gray-900 placeholder-gray-500 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black transition-colors"
              />
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Sign In
            </button>
            <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
              Start Deploying
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm text-gray-900 placeholder-gray-500 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black transition-colors"
              />
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-1">
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
              >
                Solutions
              </a>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
              >
                Developers
              </a>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
              >
                Documentation
              </a>
            </nav>

            {/* Mobile Action Buttons */}
            <div className="pt-3 space-y-2 border-t border-gray-200">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-black text-left transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
              >
                Start Deploying
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
