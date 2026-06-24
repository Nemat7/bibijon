import { FileText, Sheet, Download } from 'lucide-react'
import Topbar from '@/components/Topbar'

const BASE = '/pdfs/upravleniye/bsc/'

const fileNames: string[] = [
  'Balanced Scorecard (B S C).pdf',
  'Balanced Scorecard BSC.pdf',
  'Методология BSC EQ.pdf',
  'Методология BSC EQ_SmartBox.pdf',
  'Методология расчёта BSC FZ - NEW.pdf',
  'Методология расчёта BSC FZ SmartBox.pdf',
  'BSC_Eq 2020 Q1_Q2.xlsx',
  'BSC_Eq_Smart Box 2020 Q1_Q2.xlsx',
  'BSC_Fz 2020 Q1_Q2.xlsx',
  'BSC_Fz_Smart Box 2020 Q1_Q2.xlsx',
]

function getExt(name: string) {
  return name.split('.').pop()?.toLowerCase() ?? 'pdf'
}

function getDisplayName(name: string) {
  return name.replace(/\.[^.]+$/, '')
}

function FileIcon({ ext }: { ext: string }) {
  if (ext === 'xlsx' || ext === 'xls') return <Sheet size={22} color="#2e7d32" strokeWidth={1.8} />
  return <FileText size={22} color="#e4002b" strokeWidth={1.8} />
}

function iconBg(ext: string) {
  if (ext === 'xlsx' || ext === 'xls') return '#e8f5e9'
  return '#fdecea'
}

export default function BscPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Управление', href: '/standards/upravleniye' },
          { label: 'Balanced Scorecard (B.S.C)' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Balanced Scorecard (B.S.C)
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
