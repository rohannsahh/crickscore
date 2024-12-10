import Link from 'next/link'
import { Home,  BeerIcon as Baseball, Eye } from 'lucide-react'

export function Sidebar() {
  return (
    <nav className="w-64 bg-white border-r border-gray-200 flex-shrink-0 hidden md:block">
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-gray-200">
          
          <Link href="/dashboard">  <span className="text-xl font-bold text-blue-600">LifeEase </span></Link>
          

        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-4 overflow-y-auto">
          <NavLink href="/dashboard/home" icon={<Home className="w-5 h-5" />} label="Home" />
          <NavLink href="/dashboard/preview" icon={<Eye className="w-5 h-5" />} label="Match Preview" />
          {/* <NavLink href="/live" icon={<Trophy className="w-5 h-5" />} label="Live Score" />
          <NavLink href="/stats" icon={<BarChart2 className="w-5 h-5" />} label="Stats" /> */}
          <NavLink href="/dashboard/commentary" icon={<Baseball className="w-5 h-5" />} label="Commentary" />
        </div>

        {/* User Profile */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <span>U</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">User</p>
              <p className="text-xs text-gray-500">user@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
      {icon}
      <span className="ml-3">{label}</span>
    </Link>
  )
}

