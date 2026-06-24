import { useState } from 'react'
import { Link } from 'react-router'
import { Heart } from 'lucide-react'
import Topbar from '@/components/Topbar'

interface ArticleCard {
  title: string
  description: string
  tags: { label: string; isMore?: boolean }[]
  href?: string
  to?: string
}

const articles: ArticleCard[] = [
  {
    title: '4 PILLARS',
    description: 'Четыре ключевых столпа управления рестораном KFC...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    href: '/pdfs/upravleniye/4 PILLARS.pdf',
  },
  {
    title: 'Правила безопасности для предупреждения преступлений в помещениях',
    description: 'Правила и процедуры безопасности для предотвращения преступлений...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    to: '/standards/upravleniye/pravila-bezopasnosti',
  },
  {
    title: 'Balanced Scorecard (B.S.C)',
    description: 'Сбалансированная система показателей для оценки эффективности ресторана...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    to: '/standards/upravleniye/bsc',
  },
  {
    title: 'Бренд Шеф KFC',
    description: 'Стандарты и требования к бренд-шефу KFC...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    to: '/standards/upravleniye/brend-shef',
  },
  {
    title: 'Рутина успеха Территориального управляющего',
    description: 'Ежедневные и еженедельные рутины территориального управляющего...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    href: '/pdfs/upravleniye/Рутина успеха Территориального управляющего.pdf',
  },
  {
    title: 'Кликун',
    description: 'Процедура работы с системой Кликун в ресторане...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    href: '/pdfs/upravleniye/Кликун.pdf',
  },
  {
    title: 'P&L и управление затратами (COS, COL, Semis)',
    description: 'Управление прибылью и убытками, контроль затрат на продукты, труд и полуфабрикаты...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    to: '/standards/upravleniye/pl',
  },
  {
    title: 'Инвентаризация',
    description: 'Процедура проведения инвентаризации в ресторане KFC...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    to: '/standards/upravleniye/inventarizaciya',
  },
  {
    title: 'Прогнозирование',
    description: 'Методы и инструменты прогнозирования продаж и потребностей ресторана...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Работа с отчетами в R-Keeper',
    description: 'Руководство по работе с отчетами и аналитикой в системе R-Keeper...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    href: '/pdfs/upravleniye/Работа с отчетами в R-Keeper.pdf',
  },
  {
    title: 'Кризис Менеджмент',
    description: 'Процедуры и действия в кризисных ситуациях для управляющих рестораном...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
    to: '/standards/upravleniye/krizis',
  },
  {
    title: 'Управление продажами',
    description: 'Стратегии и инструменты управления продажами в ресторане KFC...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Контроль кассовых операций',
    description: 'Процедуры контроля и учета кассовых операций в ресторане...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Меры защиты и обеспечение ОТ и ПБ',
    description: 'Меры по охране труда и пожарной безопасности в ресторане...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Расследование и учет несчастных случаев на производстве',
    description: 'Процедуры расследования и документирования производственных травм...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Руководство по открытию новых ресторанов',
    description: 'Пошаговое руководство по процессу открытия нового ресторана KFC...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Корпоративная культура',
    description: 'Ценности, миссия и корпоративная культура бренда KFC...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'RGS (Running Great Shifts)',
    description: 'Стандарты и процедуры управления сменой для достижения отличных результатов...',
    tags: [{ label: '#Управление' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
]

function ArticleCardComponent({ article }: { article: ArticleCard }) {
  const [fav, setFav] = useState(false)

  const sharedStyle: React.CSSProperties = {
    border: '1.5px solid #f2f1ef',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'box-shadow 0.18s ease, border-color 0.18s ease',
  }

  const inner = (
    <>
      <div className="flex items-center justify-between gap-2 mb-[10px]">
        <span
          className="inline-block text-xs font-semibold whitespace-nowrap"
          style={{
            background: '#f4f4f4',
            border: '1.5px solid #dad6cf',
            borderRadius: '20px',
            padding: '3px 10px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#e4002b',
            lineHeight: '1',
          }}
        >
          Управление
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setFav(!fav)
          }}
          className="flex-shrink-0 leading-none transition-transform duration-150 hover:scale-[1.15]"
          style={{ padding: '2px' }}
          aria-label="В избранное"
        >
          <Heart
            size={22}
            strokeWidth={1.8}
            className={fav ? 'text-[#e4002b] fill-[#e4002b]' : 'text-[#e4002b] fill-none'}
          />
        </button>
      </div>

      <h3 className="text-[#212121] font-bold flex-1" style={{ fontSize: '18px', lineHeight: 1.3 }}>
        {article.title}
      </h3>

      <p className="text-[#656565] line-clamp-3" style={{ fontSize: '13px', lineHeight: 1.55, marginTop: '8px' }}>
        {article.description}
      </p>

      <div className="flex flex-wrap gap-[6px] mt-[10px]">
        {article.tags.map((tag, idx) =>
          tag.isMore ? (
            <span key={idx} style={{ background: '#f4f4f4', border: '1.5px solid #dad6cf', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 700, color: '#656565', lineHeight: '1' }}>
              {tag.label}
            </span>
          ) : (
            <span key={idx} style={{ background: '#f4f4f4', border: '1.5px solid #dad6cf', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 600, color: '#e4002b', lineHeight: '1' }}>
              {tag.label}
            </span>
          ),
        )}
      </div>
    </>
  )

  if (article.to) {
    return (
      <Link
        to={article.to}
        className="group flex flex-col bg-white rounded-[12px] overflow-hidden no-underline"
        style={{ ...sharedStyle, cursor: 'pointer' }}
      >
        {inner}
      </Link>
    )
  }

  if (article.href) {
    return (
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col bg-white rounded-[12px] overflow-hidden no-underline"
        style={{ ...sharedStyle, cursor: 'pointer' }}
      >
        {inner}
      </a>
    )
  }

  return (
    <div
      className="group flex flex-col bg-white rounded-[12px] overflow-hidden"
      style={sharedStyle}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)'; e.currentTarget.style.borderColor = '#dad6cf' }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#f2f1ef' }}
    >
      {inner}
    </div>
  )
}

export default function UpravleniyePage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Управление' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '36px', letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.1 }}
        >
          Управление
        </h1>

        <Link
          to="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#e4002b] hover:text-[#87041e] transition-colors duration-150"
          style={{ marginBottom: '24px' }}
        >
          <span
            className="inline-block flex-shrink-0 rounded-sm"
            style={{ width: '3px', height: '16px', background: '#e4002b' }}
          />
          См. Другие роли
        </Link>

        <div style={{ marginBottom: '24px' }}>
          <label
            className="block text-[#212121] font-bold"
            style={{ fontSize: '16px', marginBottom: '10px' }}
          >
            Поиск
          </label>
          <input
            type="text"
            placeholder="Найдите статью Управление"
            className="block outline-none text-sm text-[#212121] placeholder:text-[#656565] transition-colors duration-150 focus:border-[#656565]"
            style={{
              width: '100%',
              maxWidth: '320px',
              border: '1.5px solid #dad6cf',
              borderRadius: '8px',
              padding: '10px 14px',
              fontSize: '14px',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <ArticleCardComponent key={`${article.title}-${index}`} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}
