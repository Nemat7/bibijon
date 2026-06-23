import { useState } from 'react'
import { Link } from 'react-router'
import { Heart } from 'lucide-react'
import Topbar from '@/components/Topbar'

interface ArticleCard {
  title: string
  href: string
  description: string
  tags: { label: string; isMore?: boolean }[]
}

const articles: ArticleCard[] = [
  {
    title: 'Скаут',
    href: '/standards/obsluzhivanie/skaut',
    description:
      'Ты научишься предоставлять великолепный сервис каждому гостю, научишься предугадывать их потребности и ожидания.',
    tags: [
      { label: '#RU' },
      { label: '#Россия' },
      { label: '#BY' },
      { label: '+2', isMore: true },
    ],
  },
  {
    title: 'Стандарты внешнего вида и гигиены',
    href: '/standards/obsluzhivanie/vneshniy-vid',
    description:
      'Команды наших ресторанов представляют гостю наш Бренд. Именно поэтому мы уделяем особое внимание внешнему виду и соблюдению норм гигиены.',
    tags: [
      { label: '#Обслуживание' },
      { label: '+23', isMore: true },
    ],
  },
  {
    title: 'Комплектация и упаковка заказа',
    href: '/standards/obsluzhivanie/komplektaciya',
    description:
      'Один из важных этапов обслуживания – это сбор и упаковка блюд согласно заказу гостя. Правильная комплектация — залог довольного гостя.',
    tags: [
      { label: '#Обслуживание' },
      { label: '+25', isMore: true },
    ],
  },
  {
    title: 'CRP (Customer Recovery Process)',
    href: '/standards/obsluzhivanie/crp',
    description:
      'Customer Recovery Process — это автоматическая система обработки обращений гостей, позволяющая быстро реагировать на жалобы.',
    tags: [
      { label: '#Обслуживание' },
      { label: '#GE' },
      { label: '+19', isMore: true },
    ],
  },
  {
    title: 'GES_Guest Experience Survey',
    href: '/standards/obsluzhivanie/ges',
    description:
      'В этом CSL вы найдете всю информацию по работе с программой оценки клиентского опыта в ресторанах KFC.',
    tags: [
      { label: '#Обслуживание' },
      { label: '+23', isMore: true },
    ],
  },
  {
    title: 'Управление скоростью обслуживания',
    href: '/standards/obsluzhivanie/sos',
    description:
      'Одним из обещаний нашего Бренда является предоставление быстрого и качественного обслуживания каждому гостю без исключения.',
    tags: [
      { label: '#Обслуживание' },
      { label: '+26', isMore: true },
    ],
  },
  {
    title: 'Незабываемый сервис',
    href: '/standards/obsluzhivanie/servis',
    description:
      'Предоставить незабываемый сервис вы сможете, когда ваши гости почувствуют, что о них заботятся и что они важны для вас.',
    tags: [
      { label: '#Обслуживание' },
      { label: '#GE' },
      { label: '+20', isMore: true },
    ],
  },
]

function ArticleCardComponent({ article }: { article: ArticleCard }) {
  const [fav, setFav] = useState(false)

  return (
    <Link
      to={article.href}
      className="group flex flex-col bg-white rounded-[12px] overflow-hidden no-underline text-inherit"
      style={{
        border: '1.5px solid #f2f1ef',
        padding: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.18s ease, border-color 0.18s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)'
        e.currentTarget.style.borderColor = '#dad6cf'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
        e.currentTarget.style.borderColor = '#f2f1ef'
      }}
    >
      {/* Top row: category tag + heart */}
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
          Обслуживание
        </span>
        <button
          onClick={(e) => {
            e.preventDefault()
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
            className={
              fav
                ? 'text-[#e4002b] fill-[#e4002b]'
                : 'text-[#e4002b] fill-none'
            }
          />
        </button>
      </div>

      {/* Title */}
      <h3
        className="text-[#212121] font-bold flex-1"
        style={{
          fontSize: '18px',
          lineHeight: 1.3,
        }}
      >
        {article.title}
      </h3>

      {/* Description */}
      <p
        className="text-[#656565] line-clamp-3"
        style={{
          fontSize: '13px',
          lineHeight: 1.55,
          marginTop: '8px',
        }}
      >
        {article.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-[6px] mt-[10px]">
        {article.tags.map((tag, idx) =>
          tag.isMore ? (
            <span
              key={idx}
              className="inline-block text-xs font-semibold text-[#212121]"
              style={{
                background: '#f4f4f4',
                border: '1.5px solid #dad6cf',
                borderRadius: '20px',
                padding: '2px 10px',
                fontSize: '11px',
                fontWeight: 700,
                color: '#656565',
                lineHeight: '1',
              }}
            >
              {tag.label}
            </span>
          ) : (
            <span
              key={idx}
              className="inline-block text-xs font-semibold"
              style={{
                background: '#f4f4f4',
                border: '1.5px solid #dad6cf',
                borderRadius: '20px',
                padding: '2px 10px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#e4002b',
                lineHeight: '1',
              }}
            >
              {tag.label}
            </span>
          ),
        )}
      </div>
    </Link>
  )
}

export default function ObsluzhivaniePage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Обслуживание' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        {/* Page title */}
        <h1
          className="text-[#212121] font-extrabold"
          style={{
            fontSize: '36px',
            letterSpacing: '-0.02em',
            marginBottom: '14px',
            lineHeight: 1.1,
          }}
        >
          Обслуживание
        </h1>

        {/* See other roles link */}
        <Link
          to="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#e4002b] hover:text-[#87041e] transition-colors duration-150"
          style={{ marginBottom: '24px' }}
        >
          <span
            className="inline-block flex-shrink-0 rounded-sm"
            style={{
              width: '3px',
              height: '16px',
              background: '#e4002b',
            }}
          />
          См. Другие роли
        </Link>

        {/* Section search */}
        <div style={{ marginBottom: '24px' }}>
          <label
            className="block text-[#212121] font-bold"
            style={{
              fontSize: '16px',
              marginBottom: '10px',
            }}
          >
            Поиск
          </label>
          <input
            type="text"
            placeholder="Найдите статью Обслуживание"
            className="block outline-none text-sm text-[#212121] placeholder:text-[#656565] transition-colors duration-150 focus:border-[#656565]"
            style={{
              width: '320px',
              border: '1.5px solid #dad6cf',
              borderRadius: '8px',
              padding: '10px 14px',
              fontSize: '14px',
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleCardComponent key={article.href} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}
