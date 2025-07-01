'use client'

import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-[#023251] font-medium transition-colors">
              Services
            </Link>
            <Link href="/partners" className="text-gray-600 hover:text-[#023251] font-medium transition-colors">
              Partners
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#023251] font-medium transition-colors">
              Contact
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
        </div>
      </div>
    </nav>
  )
}

export default Header