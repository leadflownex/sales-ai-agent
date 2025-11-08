'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            AI-Powered
            <span className="block text-primary-600">Sales Automation</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your sales process with intelligent lead generation, multi-channel outreach, 
            and real-time analytics. Close more deals, faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/auth/login"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </Link>
            
            <button className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">50%</div>
              <div className="text-gray-600">Faster Lead Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">3x</div>
              <div className="text-gray-600">More Qualified Leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600">AI Assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
