import { FileText, Sheet, Download } from 'lucide-react'
import Topbar from '@/components/Topbar'

interface DocFile {
  name: string
  href: string
  ext: 'pdf' | 'xlsx'
}

const files: DocFile[] = [
  {
    name: 'Общение с командой ресторана',
    href: '/pdfs/razvitiye/obshhenie/Общение с командой ресторана.pdf',
    ext: 'pdf',
  },
  {
    name: 'BSC Fusion - Action Plan',
    href: '/pdfs/razvitiye/obshhenie/BSC Fusion - Action Plan.pdf',
    ext: 'pdf',
  },
  {
    name: 'Пример АР',
    href: '/pdfs/razvitiye/obshhenie/Пример АР.xlsx',
    ext: 'xlsx',
  },
  {
    name: 'Протокол собрания команды',
    href: '/pdfs/razvitiye/obshhenie/Протокол собрания команды.xlsx',
    ext: 'xlsx',
  },
]

export default function ObshheniePage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Развитие', href: '/standards/razvitiye' },
          { label: 'Общение с командой ресторана' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '36px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Общение с командой ресторана
        </h1>

        <div className="flex flex-col gap-3" style={{ maxWidth: '680px' }}>
          {files.map((file) => (
            <a
              key={file.href}
              href={file.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-[12px] no-underline group"
              style={{
                border: '1.5px solid #f2f1ef',
                padding: '16px 20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.18s ease, border-color 0.18s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.boxShadow = '0 6px 20px rgba(0,0,0,0.11)'
                el.style.borderColor = '#dad6cf'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
                el.style.borderColor = '#f2f1ef'
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-[8px]"
                style={{
                  width: '44px',
                  height: '44px',
                  background: file.ext === 'pdf' ? '#fdecea' : '#e8f5e9',
                }}
              >
                {file.ext === 'pdf' ? (
                  <FileText size={22} color="#e4002b" strokeWidth={1.8} />
                ) : (
                  <Sheet size={22} color="#2e7d32" strokeWidth={1.8} />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[#212121] font-semibold truncate" style={{ fontSize: '15px', lineHeight: 1.35 }}>
                  {file.name}
                </p>
                <p className="text-[#656565]" style={{ fontSize: '12px', marginTop: '2px' }}>
                  {file.ext.toUpperCase()}
                </p>
              </div>

              <Download
                size={18}
                strokeWidth={1.8}
                className="flex-shrink-0 text-[#656565] group-hover:text-[#e4002b] transition-colors duration-150"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
