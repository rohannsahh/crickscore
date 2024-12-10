

'use client'

import { useState } from 'react'

export default function BallTracker() {
  const [activeView, setActiveView] = useState('Live View')

  const balls = [
    { value: '1', over: '19.6' },
    { value: 'W', over: '19.5' },
    { value: '0', over: '19.4' },
    { value: '4', over: '19.3' },
    { value: '1', over: '19.2' },
    { value: '6', over: '19.1' },
    // ... add more balls to make up 24
  ]

  return (
    <section id="ball_tracker" className="bg-white border border-gray-200 rounded-lg p-6 m-4 mx-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Ball-by-Ball Tracker</h2>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 text-sm rounded-full ${
              activeView === 'Live View' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'border border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => setActiveView('Live View')}
          >
            Live View
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-full ${
              activeView === 'Match Report' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'border border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => setActiveView('Match Report')}
          >
            Match Report
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 w-full">
          {balls.map((ball, index) => (
            <div key={index} className="relative group">
              <div className={`w-12 h-12 flex flex-col items-center justify-center rounded-lg border ${
                ball.value === 'W' ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'
              } cursor-pointer hover:bg-gray-100 transition-all`}>
                <span className={`text-sm font-medium ${ball.value === 'W' ? 'text-red-600' : ''}`}>{ball.value}</span>
                <span className="text-xs text-gray-500">{ball.over}</span>
              </div>
              <div className="hidden group-hover:block absolute bottom-full left-0 mb-2 w-48 p-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <p className="text-xs text-gray-600">
                  {ball.value === 'W' ? 'Wicket: Caught at mid-wicket' : 
                   ball.value === '4' ? 'Four runs: Shot through covers' : 
                   ball.value === '6' ? 'Six runs: Over long-on' : 
                   `${ball.value} run${ball.value !== '1' ? 's' : ''} taken`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Ball Speed</h3>
          <div className="flex items-end space-x-2">
            <div className="text-3xl font-bold text-gray-800">142</div>
            <div className="text-sm text-gray-600 mb-1">km/h</div>
          </div>
          <div className="mt-2 text-xs text-gray-500">Average: 138 km/h</div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Length</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Good Length</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{width: '75%'}}></div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Movement</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Swing</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full" style={{width: '60%'}}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Shot Distribution</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-50 rounded-lg border border-gray-200">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-chart-pie text-4xl text-gray-400 mb-2"></i>
              <p className="text-sm text-gray-500">Wagon Wheel View</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="text-sm text-gray-600">Dot Balls</div>
          <div className="text-2xl font-bold text-gray-800">8</div>
          <div className="text-xs text-gray-500 mt-1">Last 24 balls</div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="text-sm text-gray-600">Boundaries</div>
          <div className="text-2xl font-bold text-gray-800">3</div>
          <div className="text-xs text-gray-500 mt-1">Last 24 balls</div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="text-sm text-gray-600">Run Rate</div>
          <div className="text-2xl font-bold text-gray-800">7.2</div>
          <div className="text-xs text-gray-500 mt-1">Current over</div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="text-sm text-gray-600">Wickets</div>
          <div className="text-2xl font-bold text-gray-800">2</div>
          <div className="text-xs text-gray-500 mt-1">Last 24 balls</div>
        </div>
      </div>
    </section>
  )
}

