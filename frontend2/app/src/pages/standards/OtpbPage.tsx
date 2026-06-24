import { FileText, Download } from 'lucide-react'
import Topbar from '@/components/Topbar'

const BASE = '/pdfs/upravleniye/otpb/'

const fileNames: string[] = [
  'Меры защиты и обеспечение ОТ и ПБ.pdf',
  'Действия при пожаре.pdf',
  'Аптечка первой помощи.pdf',
  'Требования к комплектации аптечки 27.08.21.pdf',
  'Показания к применению основных манипуляций.pdf',
  'Комикс по Охране труда для ЧК.pdf',
  'Виды инструктажей и сроки проведения .pdf',
]

function getDisplayName(name: string) {
  return name.replace(/\.[^.]+$/, '')
}

export default function OtpbPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Управление', href: '/standards/upravleniye' },
          { label: 'Меры защиты и обеспечение ОТ и ПБ' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Меры защиты и обеспечение ОТ и ПБ
        </h1>

        <div className="flex flex-col gap-3" style={{ maxWidth: '780px' }}>
          {fileNames.map((name) => (
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
              <div className="flex-shrink-0 flex items-center justify-center rounded-[8px]" style={{ width: '40px', height: '40px', background: '#fdecea' }}>
                <FileText size={22} color="#e4002b" strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#212121] font-semibold" style={{ fontSize: '13px', lineHeight: 1.4 }}>
                  {getDisplayName(name)}
                </p>
                <p className="text-[#656565]" style={{ fontSize: '11px', marginTop: '2px' }}>PDF</p>
              </div>
              <Download size={17} strokeWidth={1.8} className="flex-shrink-0 text-[#656565] group-hover:text-[#e4002b] transition-colors duration-150" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
