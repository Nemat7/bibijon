import { FileText, Sheet, FileType, Download } from 'lucide-react'
import Topbar from '@/components/Topbar'

const BASE = '/pdfs/upravleniye/pl/'

const fileNames: string[] = [
  'P&L и управление затратами (COS,COL,Semis).pdf',
  'ARL.pdf',
  'Пример расчета производительности.pdf',
  'ЧЕК ЛИСТ КОНТРОЛЯ ЭФФЕКТИВНОГО УПРАВЛЕНИЯ SPMH.pdf',
  'ЧЕК-ЛИСТ ПРОВЕРКИ РАСПИСАНИЯ_0.pdf',
  'SEMIS калькулятор.xlsx',
  'Инженерный обход Place.doc',
]

function getExt(name: string) {
  return name.split('.').pop()?.toLowerCase() ?? 'pdf'
}

function getDisplayName(name: string) {
  return name.replace(/\.[^.]+$/, '')
}

function FileIcon({ ext }: { ext: string }) {
  if (ext === 'xlsx' || ext === 'xls') return <Sheet size={22} color="#2e7d32" strokeWidth={1.8} />
  if (ext === 'doc' || ext === 'docx') return <FileType size={22} color="#1565c0" strokeWidth={1.8} />
  return <FileText size={22} color="#e4002b" strokeWidth={1.8} />
}

function iconBg(ext: string) {
  if (ext === 'xlsx' || ext === 'xls') return '#e8f5e9'
  if (ext === 'doc' || ext === 'docx') return '#e3f2fd'
  return '#fdecea'
}

export default function PlPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Управление', href: '/standards/upravleniye' },
          { label: 'P&L и управление затратами' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '30px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.2 }}
        >
          P&L и управление затратами (COS, COL, Semis)
        </h1>

        <div className="flex flex-col gap-3" style={{ maxWidth: '780px' }}>
          {fileNames.map((name) => {
            const ext = getExt(name)
            return (
              <a
                key={name}
                href={BASE + name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-[12px] no-underline group"
                style={{
                  border: '1.5px solid #f2f1ef',
                  padding: '14px 18px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.18s ease, border-color 0.18s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.11)'; e.currentTarget.style.borderColor = '#dad6cf' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#f2f1ef' }}
              >
                <div className="flex-shrink-0 flex items-center justify-center rounded-[8px]" style={{ width: '40px', height: '40px', background: iconBg(ext) }}>
                  <FileIcon ext={ext} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#212121] font-semibold" style={{ fontSize: '13px', lineHeight: 1.4 }}>
                    {getDisplayName(name)}
                  </p>
                  <p className="text-[#656565]" style={{ fontSize: '11px', marginTop: '2px' }}>{ext.toUpperCase()}</p>
                </div>
                <Download size={17} strokeWidth={1.8} className="flex-shrink-0 text-[#656565] group-hover:text-[#e4002b] transition-colors duration-150" />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
