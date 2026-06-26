import { useState } from 'react'
import { Link } from 'react-router'
import { Heart } from 'lucide-react'
import Topbar from '@/components/Topbar'

interface TrainingCard {
  title: string
  week: number
  href?: string
  to?: string
}

const week1: TrainingCard[] = [
  { title: 'RGM - Введение', week: 1, to: '/director/rgm-vvedenie' },
  { title: 'Управляй как владелец', week: 1, to: '/director/upravlyay-kak-vladelec' },
  { title: 'Руководи сердцем', week: 1, to: '/director/rukovodi-serdcem' },
  { title: 'Коучинг', week: 1, to: '/director/kouching' },
  { title: 'Создавай атмосферу семейного уюта и счастья', week: 1, to: '/director/sozdavay-atmosferu' },
]

const weeks = [
  { label: 'Неделя 1', cards: week1 },
]

function TrainingCardItem({ card }: { card: TrainingCard }) {
  const [fav, setFav] = useState(false)

  const sharedStyle = {
    border: '1.5px solid #f2f1ef',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    minHeight: '160px',
    display: 'flex' as const,
    flexDirection: 'column' as const,
  }

  const inner = (
    <>
      <div className="flex items-center justify-between gap-2 mb-[10px]">
        <span
          style={{
            background: '#f4f4f4',
            border: '1.5px solid #dad6cf',
            borderRadius: '20px',
            padding: '3px 10px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#656565',
            lineHeight: '1',
            whiteSpace: 'nowrap' as const,
          }}
        >
          {card.week} Неделя
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); setFav(!fav) }}
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
        {card.title}
      </h3>

      <p className="text-[#656565]" style={{ fontSize: '13px', lineHeight: 1.55, marginTop: '8px' }}>
        Онлайн-тренинг
      </p>

      <div className="flex flex-wrap gap-[6px] mt-[10px]">
        <span style={{ background: '#f4f4f4', border: '1.5px solid #dad6cf', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 600, color: '#e4002b', lineHeight: '1' }}>
          #Директор
        </span>
      </div>
    </>
  )

  if (card.to) {
    return (
      <Link
        to={card.to}
        className="group flex flex-col bg-white rounded-[12px] overflow-hidden no-underline"
        style={{ ...sharedStyle, cursor: 'pointer' }}
      >
        {inner}
      </Link>
    )
  }

  if (card.href) {
    return (
      <a
        href={card.href}
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
    <div className="flex flex-col bg-white rounded-[12px] overflow-hidden" style={sharedStyle}>
      {inner}
    </div>
  )
}

export default function DirectorPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Директор
        </h1>

        {weeks.map((week) => (
          <div key={week.label} className="mb-10">
            <h2
              className="text-[#212121] font-bold"
              style={{ fontSize: '20px', marginBottom: '16px', borderBottom: '2px solid #f2f1ef', paddingBottom: '8px' }}
            >
              {week.label}
            </h2>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
            >
              {week.cards.map((card) => (
                <TrainingCardItem key={card.title} card={card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
