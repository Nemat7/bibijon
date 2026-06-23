import { NavLink, useNavigate } from 'react-router'
import { useAuth } from '@/hooks/useAuth'
import {
  Home,
  User,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  Heart,
  Award,
  Bell,
  LogOut,
  X,
} from 'lucide-react'

const mainNav = [
  { label: 'Главная', to: '/', icon: Home },
  { label: 'Директор', to: '/', icon: User },
  { label: 'Отчет об обучении', to: '/', icon: BarChart3 },
  { label: 'Стандарты', to: '/standards', icon: BookOpen },
  { label: 'Оценивать', to: '/', icon: ClipboardCheck },
]

const secondaryNav = [
  { label: 'Избранное', to: '/', icon: Heart },
  { label: 'Достижения', to: '/', icon: Award },
  { label: 'Уведомления', to: '/', icon: Bell },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const roleLabel = user?.role === 'admin' ? 'Администратор' : user?.role === 'director' ? 'Директор' : 'Сотрудник'

  return (
    <aside
      className={`fixed left-0 top-0 h-full w-[230px] bg-white flex flex-col z-30 transition-transform duration-300 ease-in-out lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ borderRight: '1px solid #f2f1ef' }}
    >
      {/* Close button — mobile only */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 lg:hidden p-1.5 rounded-md text-[#656565] hover:bg-[#f4f4f4] hover:text-[#212121] transition-colors duration-150"
        aria-label="Закрыть меню"
      >
        <X size={18} strokeWidth={2} />
      </button>
      {/* User Card */}
      <div className="mx-4 mt-5 mb-3 bg-[#f4f4f4] rounded-lg" style={{ padding: '14px 16px' }}>
        <div className="text-sm font-bold text-[#212121] leading-tight">{user?.first_name} {user?.last_name}</div>
        <div className="text-sm text-[#656565] leading-tight mt-[2px]">{roleLabel}</div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col gap-[2px] px-3 overflow-y-auto">
        {mainNav.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md transition-colors duration-150 ${isActive && item.to !== '/' ? 'bg-[#f2f1ef] font-bold text-[#212121]' : 'font-normal text-[#656565] hover:bg-[#f2f1ef] hover:text-[#212121]'
              }`
            }
            style={{ padding: '10px 16px', fontSize: '14px' }}
          >
            <item.icon size={18} strokeWidth={2} />
            <span>{item.label}</span>
          </NavLink>
        ))}

        {/* Divider */}
        <div className="my-2" style={{ borderTop: '1px solid #f2f1ef' }} />

        {secondaryNav.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className="flex items-center gap-3 rounded-md font-normal text-[#656565] hover:bg-[#f2f1ef] hover:text-[#212121] transition-colors duration-150"
            style={{ padding: '10px 16px', fontSize: '14px' }}
          >
            <item.icon size={18} strokeWidth={2} />
            <span>{item.label}</span>
          </NavLink>
        ))}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 rounded-md font-semibold text-[#e4002b] hover:bg-[#fff0f2] hover:text-[#87041e] transition-colors duration-150 mt-[2px] w-full text-left"
          style={{ padding: '10px 16px', fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <LogOut size={18} strokeWidth={2} />
          <span>Выход</span>
        </button>
      </nav>

      {/* Language Selector */}
      <div className="mx-3 mb-4 mt-2 rounded-md border border-[#dad6cf] bg-white" style={{ padding: '10px 12px' }}>
        <div className="text-[11px] text-[#656565] font-semibold uppercase tracking-wide">Язык Веб-Сайта</div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[13px] text-[#212121]">Russian</span>
          <button className="text-[11px] text-[#e4002b] font-semibold hover:text-[#87041e] transition-colors">
            Изменить
          </button>
        </div>
      </div>
    </aside>
  )
}
