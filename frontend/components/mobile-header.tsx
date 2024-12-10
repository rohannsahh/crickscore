import { Menu } from 'lucide-react'

export function MobileHeader({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-4 z-50">
      <button
      title='header'
        onClick={onMenuToggle}
        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
      >
        <Menu className="text-gray-600" />
      </button>
      <span className="ml-4 text-lg font-semibold text-blue-600">CricScore</span>
    </div>
  )
}

