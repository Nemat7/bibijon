import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface TopbarProps {
  showBreadcrumb?: boolean
  breadcrumbItems?: BreadcrumbItem[]
}

export default function Topbar({ showBreadcrumb, breadcrumbItems }: TopbarProps) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div
      className="flex items-center gap-2 sm:gap-4 bg-white"
      style={{
        padding: '10px 16px',
        borderBottom: '1px solid #f2f1ef',
      }}
    >
      {/* Breadcrumb */}
      {showBreadcrumb && breadcrumbItems && breadcrumbItems.length > 0 && (
        <nav
          className="flex items-center gap-1 bg-[#f4f4f4] border border-[#dad6cf] flex-shrink-0"
          style={{
            borderRadius: '27px',
            padding: '6px 16px',
            fontSize: '13px',
          }}
        >
          {breadcrumbItems.map((item, index) => (
            <span key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-[6px] text-[#dad6cf] select-none">/</span>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="text-[#656565] hover:text-[#212121] transition-colors duration-150 no-underline"
                >
                  {item.label}
                </a>
              ) : (
                <span className="font-bold text-[#212121]">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}

      {/* Search */}
      <div
        className="flex items-center flex-1 min-w-0 max-w-[520px] border-2 border-[#dad6cf] bg-white transition-colors duration-150 focus-within:border-[#e4002b]"
        style={{ borderRadius: '24px', height: '38px' }}
      >
        <input
          type="text"
          placeholder="Поиск"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="flex-1 min-w-0 bg-transparent border-none outline-none text-sm text-[#212121] placeholder:text-[#656565]"
          style={{ padding: '0 12px', height: '34px', fontSize: '14px' }}
        />
        <div className="hidden sm:block" style={{ width: '1px', height: '20px', background: '#dad6cf' }} />
        <button className="hidden sm:flex items-center gap-1 px-3 text-[#656565] text-sm font-medium hover:text-[#212121] transition-colors duration-150 flex-shrink-0">
          <span>Все</span>
          <ChevronDown size={14} />
        </button>
        <button
          className="flex items-center justify-center bg-[#e4002b] hover:bg-[#87041e] text-white transition-colors duration-150 flex-shrink-0"
          style={{ width: '38px', height: '38px', borderRadius: '50%', marginRight: '-1px' }}
        >
          <Search size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}
