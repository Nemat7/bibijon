import { FileText, Sheet, FileType, Download } from 'lucide-react'
import Topbar from '@/components/Topbar'

interface DocFile {
  name: string
  href: string
  ext: 'pdf' | 'xlsx' | 'xls' | 'doc'
}

const files: DocFile[] = [
  {
    name: 'Программа уборки Cleaning Captain',
    href: '/pdfs/himicheskiye/cleaning-captain/Программа уборки Cleaning Captain.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №3 — Жаровня и открытый фритюр (ежедневно)',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№3_Жаровня и открытый фритюр (ежедневно).pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №4 — Жаровня и открытый фритюр (при замене жира)',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№4_Жаровня и открытый фритюр (при замене жира).pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №10 — Мытьё и дезинфекция кухонной посуды и щёток',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№10_Мытье и дезинфекция кухонной посуды и щеток для мытья посуды.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №11 — Очистка гриля Woodson Pro Max',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№11_Очистка гриля Woodson_ Pro Max.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №12 — Панировочный стол',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№12_Панировочный стол.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №18 — Процедура мытья и дезинфекции рук',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№18_Процедура мытья и дезинфекции рук.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №19 — Поверхности, контактирующие с пищей',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№19_Поверхности, контактирующие с пищей.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №20 — Салфетки',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№20_Салфетки.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №23 — Тепловые шкафы',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№23_Тепловые шкафы_0.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №25 — Меры безопасности',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№25_Меры безопасности.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №33 — Моющие и дезинфицирующие средства',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№33_Моющие и дезинфицирующие средства.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №38 — Вертикальный тостер',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№38_Вертикальный тостер.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №43 — Фасовка для картофеля фри',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№43_Фасовка для картофеля фри.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №50 — Заправка и обслуживание диспенсеров для мытья рук',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№50_Заправка и обслуживание диспенсеров для мытья рук.pdf',
    ext: 'pdf',
  },
  {
    name: 'KFC SOP №68 — Дезинфекция термометра',
    href: '/pdfs/himicheskiye/cleaning-captain/KFC_SOP_№68_Дезинфекция термометра.pdf',
    ext: 'pdf',
  },
  {
    name: 'НАССР Памятка 1 — Салфетки',
    href: '/pdfs/himicheskiye/cleaning-captain/НАССР Памятка 1_Салфетки RU 150915.doc',
    ext: 'doc',
  },
]

function fileIcon(ext: DocFile['ext']) {
  if (ext === 'pdf') return <FileText size={22} color="#e4002b" strokeWidth={1.8} />
  if (ext === 'doc') return <FileType size={22} color="#1565c0" strokeWidth={1.8} />
  return <Sheet size={22} color="#2e7d32" strokeWidth={1.8} />
}

function fileBg(ext: DocFile['ext']) {
  if (ext === 'pdf') return '#fdecea'
  if (ext === 'doc') return '#e3f2fd'
  return '#e8f5e9'
}

export default function CleaningCaptainPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Химические вещества и чистка', href: '/standards/himicheskiye' },
          { label: 'Программа уборки Cleaning Captain' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Программа уборки Cleaning Captain
        </h1>

        <div className="flex flex-col gap-3" style={{ maxWidth: '780px' }}>
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
                style={{ width: '44px', height: '44px', background: fileBg(file.ext) }}
              >
                {fileIcon(file.ext)}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[#212121] font-semibold" style={{ fontSize: '14px', lineHeight: 1.4 }}>
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
