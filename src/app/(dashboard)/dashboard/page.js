"use client"
import React from 'react'
import { BookOpenCheck, CirclePlus, Contact, Eye, MessageSquareWarning, ShieldCheck, SquareActivity, Users, Wallet } from "lucide-react"
import DashboardCard from '../common/DashboardCard'
import RecentActivityFeed from '../components/RecentActivityFeed'

const page = () => {

  const mockActivities = [
    { description: 'John Doe booked a flight to Paris', timestamp: '2024-07-08 10:00 AM', icon: SquareActivity },
    { description: 'New user registered', timestamp: '2024-07-08 09:00 AM', icon: SquareActivity },
    { description: 'Jane Smith left a 5-star review for a hotel in Rome', timestamp: '2024-07-08 08:00 AM', icon: SquareActivity },
    { description: 'Jane Smith left a 5-star review for a hotel in Rome', timestamp: '2024-07-08 08:00 AM', icon: SquareActivity },
    { description: 'Jane Smith left a 5-star review for a hotel in Rome', timestamp: '2024-07-08 08:00 AM', icon: SquareActivity },
    { description: 'Jane Smith left a 5-star review for a hotel in Rome', timestamp: '2024-07-08 08:00 AM', icon: SquareActivity },
  ];
  const cardData = [
    { icon: SquareActivity, title: "Total Activities", value: "1,329", progress: 25, path: '/activities' },
    { icon: BookOpenCheck, title: "Total Bookings", value: "1,329", progress: 25, path: '/bookings' },
    { icon: Users, title: "Total Users", value: "1,329", progress: 25, path: '/users' },
    { icon: ShieldCheck, title: "Total Revenue", value: "1,329", progress: 25, path: '/wallet' },
    { icon: Wallet, title: "Wallet Balance", value: "1,329", progress: 25, path: '/wallet' },
  ]
  const QuickLinks = [
    { icon: CirclePlus, title: "Add Activity", path: '/addNewActivity' },
    { icon: Eye, title: "View Bookings", path: '/bookings' },
    { icon: Contact, title: "Manage Users", path: '/users' },
    { icon: MessageSquareWarning, title: "Generate Report", path: '/wallet' },
  ]
  return (
    <div className="grid  items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">
        {cardData.map((data, index) => (
          <DashboardCard
            key={index}
            icon={data.icon}
            title={data.title}
            value={data.value}
            progress={data.progress}
            path={data.path}
            progressBar={true}
          />
        ))}
      </div>
      <div className="mt-2 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        {mockActivities.map((data, index) => (
          <RecentActivityFeed
            key={index}
            icon={data.icon}
            description={data.description}
            timestamp={data.timestamp}
            
          />
        ))}
        <div className="flex justify-between items-center mt-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">
          </span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
      <h2 className="text-2xl font-semibold mt-3">Quick Links</h2>
      <div className="grid gap-4 mb-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {QuickLinks.map((data, index) => (
          <DashboardCard
            progressBar={false}
            key={index}
            icon={data.icon}
            title={data.title}
            value={data.value}
            progress={data.progress}
            path={data.path}
          />
        ))}
      </div>
    </div>
  )
}

export default page
