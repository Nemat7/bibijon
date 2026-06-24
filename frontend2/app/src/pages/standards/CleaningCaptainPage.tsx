import { FileText, Sheet, FileType, Download } from 'lucide-react'
import Topbar from '@/components/Topbar'

const BASE = '/pdfs/himicheskiye/cleaning-captain/'

const fileNames: string[] = [
  'Программа уборки Cleaning Captain.pdf',
  // KFC SOP
  'KFC_SOP_№3_Жаровня и открытый фритюр (ежедневно).pdf',
  'KFC_SOP_№4_Жаровня и открытый фритюр (при замене жира).pdf',
  'KFC_SOP_№10_Мытье и дезинфекция кухонной посуды и щеток для мытья посуды.pdf',
  'KFC_SOP_№11_Очистка гриля Woodson_ Pro Max.pdf',
  'KFC_SOP_№12_Панировочный стол.pdf',
  'KFC_SOP_№18_Процедура мытья и дезинфекции рук.pdf',
  'KFC_SOP_№19_Поверхности, контактирующие с пищей.pdf',
  'KFC_SOP_№20_Салфетки.pdf',
  'KFC_SOP_№23_Тепловые шкафы_0.pdf',
  'KFC_SOP_№25_Меры безопасности.pdf',
  'KFC_SOP_№33_Моющие и дезинфицирующие средства.pdf',
  'KFC_SOP_№38_Вертикальный тостер.pdf',
  'KFC_SOP_№43_Фасовка для картофеля фри.pdf',
  'KFC_SOP_№50_Заправка и обслуживание диспенсеров для мытья рук.pdf',
  'KFC_SOP_№68_Дезинфекция термометра.pdf',
  // НАССР
  'НАССР Памятка 1_Салфетки RU 150915.doc',
  'НАССР Памятка 1а_Салфетки с Kay-5 Tablets 200120.pdf',
  'НАССР Памятка 12_Вытяжка и фильтры 041118.pdf',
  'НАССР Памятка 14_Морозильная камера 041118.pdf',
  'НАССР Памятка 15_Чистка гриля 041118-2.pdf',
  'НАССР Памятка 20_Меры первой помощи 041118.pdf',
  'НАССР Памятка 22_Использование тест-полосок для Mikro Quat 150520.pdf',
  'НАССР Памятка 24_Киоски самообслуживания 130420.pdf',
  'НАССР Памятка 25_Стены и поверхности, не контактирующие с пищей 070519.pdf',
  'НАССР Памятка 26_Мусорные контейнеры 180619.pdf',
  'НАССР Памятка 27_Офис 070519.pdf',
  'НАССР Памятка 28_Фасовка для картофеля фри 070519.pdf',
  'НАССР Памятка 29_Сухой склад 180619.pdf',
  'НАССР Памятка 30_Компакторная 070519.pdf',
  'НАССР Памятка 31_Вертикальный тостер 070519.pdf',
  'НАССР Памятка 32_Микроволновая печь 190520.pdf',
  'НАССР Памятка 35_Посудомоечная машина 181119.pdf',
  'НАССР Памятка 35_Станция оплаты 130420.pdf',
  'НАССР Памятка 36_Удаление надписей и рисунков со стен 200120.pdf',
  'НАССР Памятка 3_Зал 130420.pdf',
  'НАССР Памятка 4_Мопы, ведра, сгоны 041118.pdf',
  'НАССР Памятка 5_Холодильные камеры 041118.pdf',
  'НАССР Памятка 6_Прилавок, кассы и мониторы 130420.pdf',
  'НАССР Памятка 8_Туалеты 13042020.pdf',
  'НАССР Памятка Процедура мытья и дезинфекции рук 26032020 .pdf',
  'HACCP Памятка 9_Панировочный стол 041118-2.pdf',
  // Памятки
  'Памятка 2.1_Жаровни_02.06.13.pdf',
  'Памятка 2.2_Жаровни_02.06.13.pdf',
  'Памятка 3_Зал_13042020.pdf',
  'Памятка 7 Полы 15.05.20.pdf',
  'Памятка 8_Туалеты_13042020.pdf',
  'Памятка 9 Панировочный стол 15.05.20.pdf',
  'Памятка 18 Аппарат для приготовления напитков 15.05.2020.pdf',
  'Памятка 18а Аппарат для приготовления напитков ENDURO 175 15.05.2020.pdf',
  'Памятка 19_Меры первой помощи_02.06.13.pdf',
  'Памятка 20_Удаление жевательной резинки_12.08.13.pdf',
  'Памятка 23_Зонирование_25.08.13.pdf',
  'Памятка 24_Химические средства_07.08.13.pdf',
  'Памятка 25_ Инвентарь_25.08.12.pdf',
  'Памятка 26_Крема 14.07.2014.pdf',
  'Памятка KAY_MatchUp Использование_28.04.2014.pdf',
  // Инструкции
  'Инструкция по дезинфекции термометра.pdf',
]

function getExt(name: string) {
  return name.split('.').pop()?.toLowerCase() ?? 'pdf'
}

function getDisplayName(name: string) {
  return name.replace(/\.[^.]+$/, '')
}

function FileIcon({ ext }: { ext: string }) {
  if (ext === 'doc') return <FileType size={22} color="#1565c0" strokeWidth={1.8} />
  if (ext === 'xlsx' || ext === 'xls') return <Sheet size={22} color="#2e7d32" strokeWidth={1.8} />
  return <FileText size={22} color="#e4002b" strokeWidth={1.8} />
}

function iconBg(ext: string) {
  if (ext === 'doc') return '#e3f2fd'
  if (ext === 'xlsx' || ext === 'xls') return '#e8f5e9'
  return '#fdecea'
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
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '8px', lineHeight: 1.15 }}
        >
          Программа уборки Cleaning Captain
        </h1>
        <p className="text-[#656565]" style={{ fontSize: '13px', marginBottom: '28px' }}>
          {fileNames.length} документов
        </p>

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
                  style={{ width: '40px', height: '40px', background: iconBg(ext) }}
                >
                  <FileIcon ext={ext} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[#212121] font-semibold" style={{ fontSize: '13px', lineHeight: 1.4 }}>
                    {getDisplayName(name)}
                  </p>
                  <p className="text-[#656565]" style={{ fontSize: '11px', marginTop: '2px' }}>
                    {ext.toUpperCase()}
                  </p>
                </div>

                <Download
                  size={17}
                  strokeWidth={1.8}
                  className="flex-shrink-0 text-[#656565] group-hover:text-[#e4002b] transition-colors duration-150"
                />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
