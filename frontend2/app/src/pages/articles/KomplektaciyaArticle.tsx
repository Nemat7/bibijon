import Topbar from '../../components/Topbar'
import TagsRow from '../../components/TagsRow'
import { Star, Download, AlertTriangle } from 'lucide-react'

const headsetSvg = (
  <svg viewBox="0 0 100 100" fill="white" opacity="0.3" style={{ width: '70px', height: '70px' }}>
    <circle cx="50" cy="35" r="14" />
    <rect x="34" y="30" width="4" height="10" rx="2" />
    <path d="M50 51 L50 51 C38 51 28 58 28 68 L28 85 L72 85 L72 68 C72 58 62 51 50 51Z" />
  </svg>
)

export default function KomplektaciyaArticle() {
  const tags = [
    '#Обслуживание',
    '#GE',
    '#ВСЕГЕРГЕ',
    '#Georgia',
    '#Грузия',
    '#AM',
    '#Armenia',
    '#Армения',
    '#AZ',
    '#Azerbaijan',
    '#Азербайджан',
    '#KZ',
    '#Kazakhstan',
    '#Казахстан',
    '#RU',
    '#Россия',
    '#BY',
    '#Беларусь',
    '#KG',
    '#Kyrgyzstan',
    '#Кыргызстан',
  ]

  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Обслуживание', href: '/standards/obsluzhivanie' },
          { label: 'Комплектация и упаковка заказа' },
        ]}
      />

      <div className="px-7 pb-16" style={{ paddingTop: '28px' }}>
        {/* Article Header Card */}
        <div
          className="flex overflow-hidden bg-white relative"
          style={{
            border: '1.5px solid #f2f1ef',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            marginBottom: '20px',
            maxWidth: '860px',
          }}
        >
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: '130px',
              background: 'linear-gradient(150deg, #c84830 0%, #982010 50%, #601008 100%)',
            }}
          >
            {headsetSvg}
          </div>
          <div className="flex-1 relative" style={{ padding: '18px 20px 14px' }}>
            <button
              className="absolute top-3 right-3 text-[#dad6cf] hover:text-[#e4002b] transition-colors duration-150"
              aria-label="В избранное"
            >
              <Star size={20} strokeWidth={2} />
            </button>
            <a
              href="/standards/obsluzhivanie"
              className="inline-block text-[#e4002b] font-semibold uppercase tracking-wide hover:no-underline"
              style={{
                background: '#f4f4f4',
                border: '1px solid #dad6cf',
                borderRadius: '20px',
                padding: '3px 12px',
                fontSize: '12px',
                marginBottom: '8px',
              }}
            >
              Обслуживание
            </a>
            <h1
              className="mt-2 font-extrabold text-[#212121]"
              style={{ fontSize: '24px', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '8px' }}
            >
              Комплектация и упаковка заказа
            </h1>
            <p className="text-[13px] text-[#656565] leading-relaxed">
              Техника комплектации, Чек-лист комплектации
            </p>
          </div>
        </div>

        {/* Tags Row */}
        <div style={{ marginBottom: '28px', maxWidth: '860px' }}>
          <TagsRow tags={tags} showMore={3} actions />
        </div>

        {/* Article Body */}
        <div className="max-w-[860px]" style={{ lineHeight: '1.7', color: '#212121' }}>

          {/* 1. Введение */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3' }}>
            Введение
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Один из важных этапов обслуживания – это сбор и упаковка блюд и напитков, заказанных гостем. Заказ собирается в определенной последовательности для сохранения качества блюд (например, горячий картофель фри кладется в последнюю очередь, чтобы не остыл).
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Осуществляя сбор заказа, кассир должен соблюдать все правила сбора и комплектации, чтобы отвечать высоким стандартам скорости, качества и гостеприимства.
          </p>

          {/* 2. Стандарты */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Стандарты
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Заказ собирается в определенной последовательности и с определенным расположением на подносе.
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            В зависимости от того, заказал ли гость «на вынос» или «в зале», вы используете либо поднос, либо бумажные пакеты, для размещения заказа.
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>

          {/* 2a. Порядок сбора заказа */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '24px', marginBottom: '8px' }}>
            Порядок сбора заказа
          </h3>
          <ol style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none', counterReset: 'ol-c' }}>
            {[
              'Кладем кондименты (салфетки, ложка, вилка и т.п.).',
              'Ставим наливаться напиток.',
              'Кладем горячие блюда, предварительно правильно их упаковав.',
              'Кладем салат.',
              'Кладем десерт.',
              'Ставим напиток на поднос или упаковываем на вынос (стакан с напитком нужно держать в руке так, чтобы не касаться краев стакана).',
              'Наливаем и ставим на поднос пиво (стакан с пивом нужно держать в руке так, чтобы не касаться краев стакана).',
              'Кладем на поднос картофель.',
              'Все логотипы должны быть обращены к Гостю (в т.ч. салфетка на поднос).',
            ].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: '14px', padding: '4px 0 4px 26px', position: 'relative', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span style={{ position: 'absolute', left: 0, fontWeight: 600, minWidth: '22px' }}>{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>

          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>

          {/* CSL Note */}
          <div
            style={{
              background: '#f4f4f4',
              border: '1.5px solid #f2f1ef',
              borderRadius: '8px',
              padding: '12px 16px',
              margin: '20px 0 10px',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '1.55',
            }}
          >
            Стандарты сборки/выдачи заказа для различных форматов ресторанов (Hybrid, Fusion, Auto) вы можете найти в: <a href="#" className="text-[#e4002b] no-underline font-bold hover:underline">CSL Управление продажами</a>.
          </div>

          {/* 2b. Комплектация заказа на подносе */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '24px', marginBottom: '8px' }}>
            Комплектация заказа на подносе
          </h3>
          <div
            style={{
              margin: '14px 0 6px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #f2f1ef',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, #d6cfc8 0%, #b0a89e 100%)',
              }}
            >
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', height: '40px', opacity: 0.35 }}>
                <circle cx="20" cy="14" r="8" fill="#fff" />
                <path d="M6 38c0-7.73 6.27-14 14-14s14 6.27 14 14" fill="#fff" />
              </svg>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#656565', fontStyle: 'italic', margin: '6px 0 16px' }}>
            Заказ должен располагаться на подносе так, чтобы сохранялось равновесие!
          </p>

          {/* Важные правила */}
          <p style={{ fontSize: '14px', fontWeight: 700, margin: '18px 0 8px' }}>Важные правила:</p>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'При сборе заказа используем правило холодных и горячих зон, т.е. холодные и горячие блюда и напитки располагаются в разных частях подноса. Это необходимо для того, чтобы горячие блюда дольше оставались горячими, а холодные – холодными (при упаковке заказа «на вынос» холодные и горячие блюда упаковываются в разные пакеты).',
              'Кондименты располагаются в углу подноса ближе к гостю под его правую руку, также для удобства гостя.',
              'Все блюда и напитки (курица в коробках, картофель, сандвичи) на подносе должны располагаться логотипом к гостю, чтобы гость мог прочитать информацию, представленную на упаковках.',
              'Если заказ маленький, то он располагается на подносе так, чтобы сохранялось равновесие.',
              'Если заказ очень большой, можно разместить его на нескольких подносах/пакетах.',
              'На подносе все должно лежать правильно и аккуратно, ничего не должно падать. Подать Гостю поднос нужно таким образом, чтобы его удобно было взять.',
            ].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: '14px', padding: '4px 0 4px 16px', position: 'relative', lineHeight: '1.65' }}
              >
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* 2c. Расходные материалы */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '24px', marginBottom: '8px' }}>
            Расходные материалы при сборе заказа
          </h3>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Во всех ресторанах сети KFC используется единая упаковка и кондименты. Упаковка индивидуальна для каждого блюда и может меняться в зависимости от сезонности или с введением нового блюда. Поэтому очень важно использовать именно ту упаковку, которая сейчас используется по всей сети.
          </p>

          {/* Alert Block */}
          <div
            className="flex items-start gap-3"
            style={{
              background: '#e4002b',
              borderRadius: '8px',
              padding: '16px 20px',
              margin: '16px 0',
            }}
          >
            <span className="flex-shrink-0" style={{ marginTop: '2px' }}>
              <AlertTriangle size={22} color="white" />
            </span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff', lineHeight: '1.5' }}>
              Помни, что правильный сбор, точная комплектация заказа – это еще и верная упаковка!
            </span>
          </div>

          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Подробную информацию о том, какие кондименты и упаковка используются с разными блюдами, можно увидеть в документе
          </p>

          {/* XLS File Link Card */}
          <a
            href="/pdfs/KFC Использование расходных материалов СНГ 24.03.22.xls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 no-underline transition-colors duration-150"
            style={{
              border: '1.5px solid #f2f1ef',
              borderRadius: '8px',
              padding: '12px 16px',
              margin: '10px 0',
              background: '#fff',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f0fff4'
              e.currentTarget.style.borderColor = '#a0d0b0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff'
              e.currentTarget.style.borderColor = '#f2f1ef'
            }}
          >
            <svg className="flex-shrink-0" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '36px', height: '44px' }}>
              <rect x="1" y="1" width="28" height="38" rx="3" fill="#fff" stroke="#1a7a40" strokeWidth="1.5" />
              <path d="M7 1v8H1" fill="none" stroke="#1a7a40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="16" y="24" width="19" height="14" rx="3" fill="#1a7a40" />
              <text x="18" y="35" fontFamily="Arial,sans-serif" fontSize="7" fontWeight="700" fill="#fff">XLS</text>
              <line x1="7" y1="20" x2="22" y2="20" stroke="#cde8d4" strokeWidth="1.2" />
              <line x1="7" y1="24" x2="16" y2="24" stroke="#cde8d4" strokeWidth="1.2" />
              <line x1="7" y1="28" x2="14" y2="28" stroke="#cde8d4" strokeWidth="1.2" />
            </svg>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#1a7a40', lineHeight: '1.4' }}>
                KFC Использование расходных материалов СНГ 24.03.22.xls
              </div>
              <div style={{ fontSize: '12px', color: '#656565', marginTop: '2px' }}>– 151 KB</div>
            </div>
            <Download size={18} className="text-[#656565] flex-shrink-0" />
          </a>

        </div>
      </div>
    </div>
  )
}
