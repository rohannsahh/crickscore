import { FeedingPanel } from '@/components/feeding-panel'
import { Layout } from '@/components/layout'
import { LiveScoreWidget } from '@/components/live-score-widget'
import React from 'react'

export default function HomePage() {
  return (
    <div>
    <Layout>
      <div className="container mx-auto p-4 my-8 space-y-6">
        <h2 className='text-2xl font-bold m-2 text-gray-800'>Feeding Panel</h2>
        <LiveScoreWidget/>
        <FeedingPanel/>
      </div>
    </Layout>
    </div>
  )
}

