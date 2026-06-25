import { FileText, Download, Youtube } from 'lucide-react'
import Topbar from '@/components/Topbar'

const BASE = '/pdfs/oborudovaniye/tehno-tt/'

const fileNames: string[] = [
  'Сэндвичная станция Техно-ТТ СПН.pdf',
  'Сэндвичная станция Техно-ТТ СПНС_0.pdf',
]

const VIDEO_URL = 'https://www.youtube.com/watch?v=SbeTUn9uV3w&t=189s'
const VIDEO_EMBED = 'https://www.youtube.com/embed/SbeTUn9uV3w?start=189'

function getDisplayName(name: string) {
  return name.replace(/\.[^.]+$/, '')
}

export default function TehnoTtPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Оборудование', href: '/standards/oborudovaniye' },
          { label: 'Сэндвичная станция Техно-ТТ СПН' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Сэндвичная станция Техно-ТТ СПН
        </h1>

        {/* YouTube video */}
        <div style={{ maxWidth: '780px', marginBottom: '28px' }}>
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1.5px solid #f2f1ef',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <iframe
              src={VIDEO_EMBED}
              title="Сэндвичная станция Техно-ТТ СПН"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 no-underline"
            style={{ marginTop: '10px', color: '#e4002b', fontSize: '13px', fontWeight: 600 }}
          >
            <Youtube size={16} strokeWidth={1.8} />
            Открыть на YouTube
          </a>
        </div>

        {/* Documents */}
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
