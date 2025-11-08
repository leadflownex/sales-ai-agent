'use client'

import Header from '../layout/Header'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Footer from '../layout/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main>
        <Hero />
        <Features />
        
        {/* Simple section without import */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of sales teams using LeadFlowNex
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
