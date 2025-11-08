'use client'

import { Search, Mail, BarChart3, Users } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Find Leads',
    description: 'Use our AI to discover high-quality leads based on your ideal customer profile.'
  },
  {
    icon: Mail,
    title: 'Engage Automatically',
    description: 'Send personalized outreach across multiple channels with smart sequencing.'
  },
  {
    icon: Users,
    title: 'Convert & Nurture',
    description: 'Track engagement and automatically follow up with interested prospects.'
  },
  {
    icon: BarChart3,
    title: 'Analyze & Optimize',
    description: 'Get detailed analytics to continuously improve your conversion rates.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get from zero to qualified leads in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-100 rounded-2xl">
                  <step.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-2">{index + 1}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
