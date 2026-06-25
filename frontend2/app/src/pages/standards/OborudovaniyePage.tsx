import { useState } from 'react'
import { Link } from 'react-router'
import { Heart } from 'lucide-react'
import Topbar from '@/components/Topbar'

interface ArticleCard {
  title: string
  description: string
  href?: string
  to?: string
}

const articles: ArticleCard[] = [
  { title: 'Холодильник/морозильник SKYCOLD GNH/GNL', description: 'Холодильник/морозильник SKYCOLD GNH/GNL' },
  { title: 'ХОЛОДИЛЬНИК ДЛЯ ОТХОДОВ SIMECO', description: 'Холодильник для отходов SIMECO' },
  { title: 'Оборудование', description: 'Общее руководство по оборудованию ресторана KFC' },
  { title: 'PM Календарь', description: 'Календарь планово-предупредительного обслуживания оборудования' },
  { title: 'Мармит BM1W (BM)', description: 'Мармит электрический для подогрева ингредиентов' },
  { title: 'Сэндвичная станция Техно-ТТ СПН', description: 'Серия C-124/20/1007' },
  { title: 'Миксер Vita Mix', description: 'Миксер для приготовления десертов, напитков, смесей из разных ингредиентов' },
  { title: 'Antunes (RoundUp) ES-1200', description: 'Машина для приготовления яиц' },
  { title: 'Сертификация фритюров', description: 'Цель: обеспечить безопасность сотрудников и исправное техническое состояние фритюров' },
  { title: 'Миксер Hamilton Beach', description: 'Миксер для приготовления молочных коктейлей, десертов' },
  { title: 'Устройство дозирования полуфабриката замороженного картофеля Fran…', description: 'Устройство предназначено для краткосрочного замораживания полуфабриката' },
  { title: 'Морозильная камера', description: 'Морозильная камера -18-23С' },
  { title: 'Тепловой шкаф Henny Penny', description: 'Тепловой шкаф Henny Penny HHC-136' },
  { title: 'Шкаф холодильный Polair CM-107G', description: 'Шкаф холодильный для хранения охлаждённых продуктов' },
  { title: 'Открытый фритюр Frymaster FPRE214', description: 'Открытый фритюр Frymaster FPRE214' },
  { title: 'Testo 270', description: 'В этом CSL ты узнаешь, как правильно использовать анализатор масла Testo 270' },
  { title: 'Henny Penny PFE 590', description: '8-ми головая жаровня для приготовления продуктов под давлением' },
  { title: 'Carpigiani', description: 'Аппарат для приготовления мороженого и коктейлей' },
  { title: 'Вертикальный тостер ROBOLABS', description: 'Вертикальный контактный тостер для карамелизации булочек' },
  { title: 'Гриль STAR', description: 'Прижимной программируемый гриль для поджаривания булочек' },
  { title: 'Гриль WOODSON', description: 'Прижимной программируемый гриль для поджаривания булочек' },
  { title: 'Кофемашина TIGER', description: 'Аппарат для приготовления горячих напитков' },
  { title: 'Тепловая витрина FABRISTEEL', description: 'Тепловая витрина для хранения предварительно упакованного продукта' },
  { title: 'Вертикальный тостер PRINCECASTLE', description: 'Вертикальный контактный тостер для поджаривания булочек' },
  { title: 'Гриль PRINCE CASTLE', description: 'Прижимной программируемый гриль для поджаривания булочек' },
  { title: 'Вертикальный тостер ROUNDUP', description: 'Вертикальный конвейерный тостер Antunes VCT 1000 для поджаривания булочек' },
  { title: 'Тепловая витрина Simeco', description: 'Тепловая витрина для хранения предварительно упакованного продукта' },
  { title: 'Тепловая витрина ТТМ', description: 'Тепловая витрина для хранения предварительно упакованного продукта' },
  { title: 'Тепловая витрина Follett', description: 'Тепловая витрина для хранения предварительно упакованного продукта' },
  { title: 'Тепловая витрина HCW', description: 'Тепловая витрина для хранения предварительно упакованного продукта' },
  { title: 'Ларь морозильный ROBOLABS', description: 'Ларь морозильный для хранения продуктов, прошедших глубокую заморозку' },
  { title: 'Ларь морозильный FOLLETT', description: 'Ларь морозильный для хранения продуктов, прошедших глубокую заморозку' },
  { title: 'Ларь морозильный SIMECO', description: 'Ларь морозильный для хранения продуктов, прошедших глубокую заморозку' },
  { title: 'Льдогенератор SCOTSMAN', description: 'Аппарат для приготовления льда' },
  { title: 'Льдогенератор ICEMATIC', description: 'Аппарат для приготовления льда' },
  { title: 'Льдогенератор CORNELIUS', description: 'Аппарат для приготовления льда' },
  { title: 'Льдогенератор EQTA', description: 'Аппарат для приготовления льда' },
  { title: 'Микроволновая печь MERRYCHEF', description: 'Микроволновая печь Merrychef DEC1000 для подогрева продуктов' },
  { title: 'Микроволновая печь MERRYCHEF', description: 'Микроволновая печь Merrychef MD180117UK, MD180117EU' },
  { title: 'Морозильник HICOLD', description: 'Морозильник Hicold с рабочей поверхностью' },
  { title: 'Микроволновая печь MENUMASTER', description: 'Микроволновая печь Menumaster DEC1B/C8C18' },
  { title: 'Микроволновая печь MENUMASTER', description: 'Микроволновая печь Menumaster RSS115/RFS518TS' },
  { title: 'Морозильник TRUE', description: 'Морозильник TRUE TUC-27F (Тип Tue 24472/9481/601 с рабочей поверхностью)' },
  { title: 'Морозильник SIMECO', description: 'Морозильник SIMECO (серия с бортом и без борта с рабочей поверхностью)' },
  { title: 'Пресс для мусора ORWAK', description: 'Пресс для мусора ORWAK серии 5030, 5031' },
  { title: 'Стол панировочный AYRKING', description: 'Стол для панировки продуктов AYRKING' },
  { title: 'Посудомоечная машина Hobart', description: 'Посудомоечная машина Hobart для мытья посуды' },
  { title: 'Сэндвичная станция Simeco', description: 'Сэндвичная станция Simeco для сборки сэндвичей' },
  { title: 'Сэндвичная станция Stoddart', description: 'Сэндвичная станция Stoddart для сборки сэндвичей' },
  { title: 'Тепловой шкаф Prince Castle', description: 'Тепловой шкаф Prince Castle для хранения горячих продуктов' },
  { title: 'Тепловой шкаф Henny Penny', description: 'Тепловой шкаф Henny Penny для хранения горячих продуктов' },
  { title: 'Тепловой шкаф для пирожков', description: 'Тепловой шкаф для хранения пирожков' },
  { title: 'Фасовочная станция для картофеля Simeco', description: 'Фасовочная станция Simeco для картофеля' },
  { title: 'Фасовочная станция Hatco', description: 'Фасовочная станция Hatco' },
  { title: 'Фасовочная станция для картофеля Follett', description: 'Фасовочная станция Follett для картофеля' },
  { title: 'Фасовочная станция для картофеля Turrell', description: 'Фасовочная станция Turrell для картофеля' },
  { title: 'ВЕСЫ SWN', description: 'Весы SWN для взвешивания продуктов' },
  { title: 'Холодильник TRUE', description: 'Холодильник TRUE для хранения охлаждённых продуктов' },
  { title: 'Холодильник SIMECO', description: 'Холодильник SIMECO для хранения охлаждённых продуктов' },
  { title: 'Фасовочная станция ТМ', description: 'Фасовочная станция ТМ' },
  { title: 'Testo Saveris 0560 модель 1020', description: 'Система мониторинга температуры Testo Saveris 0560 модель 1020' },
  { title: 'Микроволновая печь TurboAir', description: 'Микроволновая печь TurboAir' },
  { title: 'Часы-таймер с угловыми таймерами для бургершута', description: 'Часы-таймер с угловыми таймерами для бургершута' },
  { title: 'Инструкция Speed monitor', description: 'Инструкция по работе со Speed monitor' },
  { title: 'Напольная холодильная витрина Enigma', description: 'Напольная холодильная витрина Enigma' },
  { title: 'Жаровня Winston', description: 'Жаровня Winston для приготовления продуктов' },
  { title: 'Henny Penny PXE 100', description: 'Жаровня Henny Penny PXE 100' },
  { title: 'Henny Penny PFE 500', description: 'Жаровня Henny Penny PFE 500' },
  { title: 'Henny Penny OXE 100', description: 'Жаровня Henny Penny OXE 100' },
  { title: 'Henny Penny EEE', description: 'Жаровня Henny Penny EEE' },
  { title: 'Frymaster RE14', description: 'Фритюр Frymaster RE14' },
  { title: 'Frymaster (открытый фритюр)', description: 'Открытый фритюр Frymaster' },
  { title: 'Henny Penny OFE 141 (142) SPLIT', description: 'Жаровня Henny Penny OFE 141 (142) SPLIT' },
  { title: 'PITCO', description: 'Фритюр PITCO' },
  { title: 'Открытый фритюр Henny Penny OFE-321, 322, 323, 324', description: 'Открытый фритюр Henny Penny OFE-321, 322, 323, 324' },
  { title: 'Frymaster YSCFRE218CSE', description: 'Фритюр Frymaster YSCFRE218CSE' },
  { title: 'Winston H4', description: 'Жаровня Winston H4' },
  { title: 'Taylor C 606', description: 'Аппарат Taylor C 606' },
  { title: 'Taylor C 708', description: 'Аппарат Taylor C 708' },
  { title: 'Кофемашина Thermoplan Black&White', description: 'Кофемашина Thermoplan Black&White' },
  { title: 'Кофемашина FRANKE', description: 'Кофемашина FRANKE' },
  { title: 'Гриль FKI', description: 'Гриль FKI для поджаривания булочек' },
  { title: 'Сэндвичная станция Follett', description: 'Сэндвичная станция Follett для сборки сэндвичей' },
  { title: 'KFC Routines', description: 'Рутины KFC для управления оборудованием' },
  { title: 'Фасовочная станция для картофеля Fabristeel', description: 'Фасовочная станция Fabristeel для картофеля' },
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
          Оборудование
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
        <span style={{ background: '#f4f4f4', border: '1.5px solid #dad6cf', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 600, color: '#e4002b', lineHeight: '1' }}>
          #Оборудование
        </span>
        <span style={{ background: '#f4f4f4', border: '1.5px solid #dad6cf', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 600, color: '#e4002b', lineHeight: '1' }}>
          #GE
        </span>
        <span style={{ background: '#f4f4f4', border: '1.5px solid #dad6cf', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 700, color: '#656565', lineHeight: '1' }}>
          +20
        </span>
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

export default function OborudovaniyePage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Оборудование' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '36px', letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.1 }}
        >
          Оборудование
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
            placeholder="Найдите статью Оборудование"
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
