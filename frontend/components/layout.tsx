"use client"
import { useState } from 'react'
import { Sidebar } from './sidebar'
import { MobileHeader } from './mobile-header'

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <MobileHeader onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden">
          <div className="w-64 h-full bg-white transform transition-transform duration-300">
            {/* Mobile menu content */}
            <MobileSidebar onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0">
        {children}
      </main>
    </div>
  )
}

function MobileSidebar({ onClose }: { onClose: () => void }) {
  return (
    <div className="h-full flex flex-col">
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        <span className="text-xl font-bold text-blue-600">CricScore</span>
        <button 
        title='close'
        onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex-1 px-4 py-4">
        <a href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
        <a href="/preview" className="block py-2 text-gray-700 hover:text-blue-600">Match Preview</a>
        <a href="/live" className="block py-2 text-gray-700 hover:text-blue-600">Live Score</a>
      </nav>
    </div>
  )
}

