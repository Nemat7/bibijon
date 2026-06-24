import { Link } from 'react-router'
import Topbar from '@/components/Topbar'

interface CategoryCard {
  title: string
  gradient: string
  image?: string
  href?: string
  grayed?: boolean
}

const categories: CategoryCard[] = [
  {
    title: 'Пищевая безопасность',
    gradient: 'linear-gradient(140deg, #c8831a 0%, #8c4f08 60%, #5a2f04 100%)',
    image: '/assets/std-food-safety.jpg',
    href: '/standards/rfss',
  },
  {
    title: 'Обслуживание',
    gradient: 'linear-gradient(140deg, #c83028 0%, #8c1c10 60%, #5a0c08 100%)',
    image: '/assets/std-service.jpg',
    href: '/standards/obsluzhivanie',
  },
  {
    title: 'Развитие',
    gradient: 'linear-gradient(140deg, #2850a8 0%, #1a3070 60%, #0c1840 100%)',
    image: '/assets/std-development.jpg',
    href: '/standards/razvitiye',
  },
  {
    title: 'Оборудование',
    gradient: 'linear-gradient(140deg, #585858 0%, #383838 60%, #202020 100%)',
    image: '/assets/std-equipment.jpg',
    grayed: true,
  },
  {
    title: 'Продукт',
    gradient: 'linear-gradient(140deg, #c83028 0%, #8c1c10 60%, #5a0c08 100%)',
    image: '/assets/std-product.jpg',
    href: '/standards/produkt',
  },
  {
    title: 'Управление',
    gradient: 'linear-gradient(140deg, #a05828 0%, #6c3810 60%, #3c1c04 100%)',
    image: '/assets/std-management.jpg',
  },
  {
    title: 'Химические вещества и чистка',
    gradient: 'linear-gradient(140deg, #5a7a5a 0%, #384e38 60%, #202c20 100%)',
    image: '/assets/std-chemicals.jpg',
  },
  {
    title: 'Equipment Brand Standards',
    gradient: 'linear-gradient(140deg, #8a7050 0%, #5c4830 60%, #3a2c18 100%)',
    image: '/assets/std-equipment-brand.jpg',
  },
]

function CategoryCardComponent({ card }: { card: CategoryCard }) {
  const inner = (
    <>
      {/* Dark gradient overlay from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)',
        }}
      />
      {/* Title */}
      <div
        className="absolute bottom-0 left-0 right-0 text-white font-bold"
        style={{
          padding: '14px 16px 18px',
          fontSize: '20px',
          lineHeight: 1.25,
          textShadow: '0 1px 8px rgba(0,0,0,0.7)',
        }}
      >
        {card.title}
      </div>
    </>
  )

  const commonClasses =
    'relative overflow-hidden block rounded-[12px] h-[176px] ' +
    'shadow-[0_5px_10px_rgba(0,0,0,0.2)] ' +
    'hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.28)] ' +
    'transition-transform duration-[180ms] ' +
    'hover:transition-transform hover:duration-[180ms]'

  const inlineStyle: React.CSSProperties = card.image
    ? {
        backgroundImage: `url('${card.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    : {
        background: card.gradient,
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }

  if (card.grayed) {
    inlineStyle.filter = 'saturate(0.15) brightness(0.75)'
  }

  if (card.href) {
    return (
      <Link
        to={card.href}
        className={commonClasses}
        style={inlineStyle}
      >
        {inner}
      </Link>
    )
  }

  return (
    <div className={commonClasses} style={inlineStyle}>
      {inner}
    </div>
  )
}

export default function StandardsPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты' },
        ]}
      />
      <div className="px-4 pt-5 pb-8 sm:px-8 sm:pt-8 sm:pb-10">
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
          Стандарты
        </h1>

        {/* See other roles link */}
        <Link
          to="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#e4002b] hover:text-[#87041e] transition-colors duration-150"
          style={{ marginBottom: '20px' }}
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

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((card) => (
            <CategoryCardComponent key={card.title} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}
