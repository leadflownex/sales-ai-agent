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
        
        {/* Simple HowItWorks section directly here */}
        <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple 3-step process to get more leads
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
