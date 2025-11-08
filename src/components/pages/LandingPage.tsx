'use client'

import { useState } from 'react'
import Header from '../layout/Header'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import HowItWorks from '../sections/HowItWorks'
import Pricing from '../sections/Pricing'
import Footer from '../layout/Footer'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('features')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  )
}
