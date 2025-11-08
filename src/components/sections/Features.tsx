'use client'

import { Zap, Users, BarChart3, Mail, Target, Shield } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Lead Scoring',
    description: 'Our AI analyzes lead behavior and engagement to prioritize high-value prospects automatically.'
  },
  {
    icon: Users,
    title: 'Multi-Channel Outreach',
    description: 'Engage leads across email, social media, and messaging platforms from one unified dashboard.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track campaign performance, conversion rates, and ROI with comprehensive dashboards.'
  },
  {
    icon: Mail,
    title: 'Smart Email Sequences',
    description: 'Create personalized email campaigns that adapt based on lead interactions and responses.'
  },
  {
    icon: Target,
    title: 'Lead Enrichment',
    description: 'Automatically enrich lead data with social profiles, company info, and contact details.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with encryption, compliance, and data protection built-in.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Scale Sales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you find, engage, and convert more leads than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
