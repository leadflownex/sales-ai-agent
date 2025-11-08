'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Rocket } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900">LeadFlowNex</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/auth/login" className="text-gray-700 hover:text-primary-600 transition-colors">
              Login
            </Link>
            <Link 
              href="/auth/login" 
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-gray-700 hover:text-primary-600">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-primary-600">
                How It Works
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-primary-600">
                Pricing
              </Link>
              <Link href="/auth/login" className="text-gray-700 hover:text-primary-600">
                Login
              </Link>
              <Link 
                href="/auth/login" 
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
