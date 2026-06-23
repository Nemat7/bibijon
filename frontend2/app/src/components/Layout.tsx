import { useState } from 'react'
import { Outlet, Navigate } from 'react-router'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import { useAuth } from '@/hooks/useAuth'

export default function Layout() {
  const { isAuthenticated, loading } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#e4002b] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="flex min-h-screen">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 overflow-y-auto min-h-screen lg:ml-[230px]">
        {/* Mobile-only top bar */}
        <div
          className="flex items-center gap-3 bg-white lg:hidden"
          style={{ padding: '12px 16px', borderBottom: '1px solid #f2f1ef' }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-md text-[#212121] hover:bg-[#f4f4f4] transition-colors duration-150"
            aria-label="Открыть меню"
          >
            <Menu size={22} strokeWidth={2} />
          </button>
          <span className="text-[22px] font-black italic text-[#e4002b] leading-none">KFC</span>
        </div>

        <Outlet />
      </main>
    </div>
  )
}
