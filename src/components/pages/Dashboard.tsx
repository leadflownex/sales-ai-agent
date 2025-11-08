'use client'

import { BarChart3, Users, Mail, Target } from 'lucide-react'

const stats = [
  {
    icon: Users,
    label: 'Total Leads',
    value: '1,234',
    change: '+12%',
    trend: 'up'
  },
  {
    icon: Mail,
    label: 'Emails Sent',
    value: '456',
    change: '+8%',
    trend: 'up'
  },
  {
    icon: Target,
    label: 'Conversion Rate',
    value: '24%',
    change: '+3%',
    trend: 'up'
  },
  {
    icon: BarChart3,
    label: 'Revenue',
    value: '$12,456',
    change: '+15%',
    trend: 'up'
  }
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="card">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="ml-4 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.label}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full"></div>
                    <div className="text-sm text-gray-600">
                      New lead added from LinkedIn
                    </div>
                    <div className="text-xs text-gray-400">2 hours ago</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors">
                  Create New Campaign
                </button>
                <button className="w-full text-left px-4 py-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors">
                  Import Leads
                </button>
                <button className="w-full text-left px-4 py-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
