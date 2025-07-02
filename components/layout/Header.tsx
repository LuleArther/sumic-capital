'use client'

import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const offeringsLinks = [
    { name: 'For Founders', href: '/for-founders' },
    { name: 'For Investors', href: '/for-investors' },
    { name: 'For Advisors', href: '/for-advisors' },
    { name: 'For Partners', href: '/for-partners' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-[#023251]">SUMIC CAPITAL</div>
            <div className="text-sm text-gray-500 font-medium">Investment Platform</div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-[#023251] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#023251] font-medium transition-colors">
              About Us
            </Link>
            
            {/* What We Offer Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-600 hover:text-[#023251] font-medium transition-colors flex items-center space-x-1">
                <span>What We Offer</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {offeringsLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 text-gray-700 hover:text-[#023251] hover:bg-gray-50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/pricing" className="text-gray-600 hover:text-[#023251] font-medium transition-colors">
              Pricing
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/signin" className="text-[#023251] font-medium hover:text-gray-600 transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="bg-[#20EF0E] hover:bg-green-500 text-black px-6 py-3 rounded-lg font-semibold transition-all shadow-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-[#023251] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:text-[#023251] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Mobile What We Offer */}
              <div className="px-4 py-2">
                <div className="text-gray-700 font-medium mb-2">What We Offer</div>
                <div className="ml-4 space-y-2">
                  {offeringsLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block py-1 text-gray-600 hover:text-[#023251] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                href="/pricing"
                className="block px-4 py-2 text-gray-700 hover:text-[#023251] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <div className="px-4 py-4 border-t border-gray-200">
                <div className="space-y-3">
                  <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full text-[#023251] font-medium py-2 border border-[#023251] rounded-lg hover:bg-[#023251] hover:text-white transition-colors">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-[#20EF0E] hover:bg-green-500 text-black py-2 rounded-lg font-semibold transition-all">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header