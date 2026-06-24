import { useState } from 'react'
import { Link } from 'react-router'
import { Heart } from 'lucide-react'
import Topbar from '@/components/Topbar'

interface ArticleCard {
  title: string
  description: string
  tags: { label: string; isMore?: boolean }[]
  href?: string
}

const articles: ArticleCard[] = [
  {
    title: 'Набор и отбор членов команды',
    description: 'Независимо от того, стоит ли перед Вами задача открыть новый ресторан или...',
    tags: [{ label: '#Развитие' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Управление обучением в ресторане',
    description: 'Бренд KFC стремительно растет и развивается. Вместе с ним стр...',
    tags: [{ label: '#Развитие' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Планирование кадрового резерва (PPR)',
    description: 'Для успешного управления командой, руководитель ресторана...',
    tags: [{ label: '#Развитие' }, { label: '#GE' }, { label: '+21', isMore: true }],
  },
  {
    title: 'Общение с командой ресторана',
    description: 'Эффективное общение с командой — одно из условий успешной работы ресторана...',
    tags: [{ label: '#Развитие' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Создание безопасной и благоприятной среды',
    description: 'Создание безопасной и комфортной среды для работы – одна из важнейших...',
    tags: [{ label: '#Развитие' }, { label: '#GE' }, { label: '+20', isMore: true }],
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
          Развитие
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

export default function RazvitiyePage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Развитие' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '36px', letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.1 }}
        >
          Развитие
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
            placeholder="Найдите статью Развитие"
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
