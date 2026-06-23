import { Link } from 'react-router'
import { Star, FileText } from 'lucide-react'
import Topbar from '@/components/Topbar'
import TagsRow from '@/components/TagsRow'

const tags = [
  '#Пищевая безопасность',
  '#GE',
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
  '#KG',
  '#Kyrgyzstan',
  '#Кыргызстан',
  '#UZ',
  '#Uzbekistan',
  '#Узбекистан',
  '#TJ',
  '#Tajikistan',
  '#Таджикистан',
]

export default function RfssArticle() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Пищевая безопасность', href: '/standards' },
          { label: 'RFSS (Пищевая безопасность)' },
        ]}
      />

      <div style={{ padding: '28px 36px 60px' }}>
        {/* ── Header — UNIQUE circular portrait style for RFSS ── */}
        <div
          className="flex items-start gap-5 relative max-w-[860px]"
          style={{
            border: '1.5px solid #f2f1ef',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          {/* Circular portrait */}
          <div
            className="flex items-center justify-center overflow-hidden flex-shrink-0"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #c8c4be 0%, #a09890 100%)',
              border: '3px solid #e4002b',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            }}
          >
            <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg" style={{ width: '56px', height: '56px' }}>
              <ellipse cx="30" cy="20" rx="14" ry="16" fill="#fff" opacity="0.85" />
              <path d="M8 70c0-18 9-30 22-30s22 12 22 30" fill="#fff" opacity="0.85" />
            </svg>
          </div>

          {/* Meta */}
          <div className="flex-1 pt-1">
            <Link
              to="/standards"
              className="inline-block no-underline text-xs font-semibold text-[#656565] mb-2"
              style={{
                background: '#f4f4f4',
                border: '1px solid #dad6cf',
                borderRadius: '20px',
                padding: '3px 12px',
              }}
            >
              Пищевая безопасность
            </Link>
            <h1
              className="font-extrabold text-[#212121] tracking-tight"
              style={{
                fontSize: '24px',
                lineHeight: '1.15',
                marginBottom: '8px',
              }}
            >
              RFSS (Пищевая безопасность)
            </h1>
            <p className="text-[13px] text-[#656565] leading-relaxed">
              Руководство по стандартам пищевой безопасности для ресторанов
            </p>
          </div>

          {/* Fav button */}
          <button
            className="absolute bg-none border-none cursor-pointer"
            style={{ top: '14px', right: '16px', padding: '4px' }}
            aria-label="В избранное"
          >
            <Star className="w-5 h-5" style={{ color: '#c8c4be' }} strokeWidth={1.5} />
          </button>
        </div>

        {/* ── Tags Row ── */}
        <TagsRow tags={tags} showMore={14} actions />

        <div className="mt-7" style={{ maxWidth: '860px' }}>
          {/* ── Article Body ── */}

          <h2
            className="text-lg font-extrabold leading-tight mb-3"
            style={{ letterSpacing: '-0.02em' }}
          >
            Введение
          </h2>

          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Мнение гостя может сформироваться мгновенно при:
          </p>
          <ul className="list-none p-0 mb-3">
            {[
              'входе в чистый туалет;',
              'заказе продуктов в чистых условиях;',
              'наблюдении за тем, как сотрудники моют руки;',
              'размещении за чистым столом.',
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm relative"
                style={{ padding: '2px 0 2px 18px', lineHeight: '1.6' }}
              >
                <span className="absolute left-1 text-[#212121]">•</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Гости рассчитывают на то, что пища готовится в чистой кухне, которая проходит санитарную обработку.
          </p>
          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Cанитарно-гигиеническое состояние ресторана непосредственно влияет на безопасность и качество пищевых продуктов. Эти факторы могут определять, вернется ли гость в этот ресторан.
          </p>

          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Убедитесь, что все сотрудники ресторана осведомлены о важности перечисленных ниже стандартов пищевой безопасности. Сделайте чистоту и гигиену основным приоритетом. Ресторан станет лучшим местом для гостей и лучшим местом для работы.
          </p>

          {/* ── Standards List ── */}
          <h2
            className="text-lg font-extrabold leading-tight"
            style={{
              marginTop: '36px',
              marginBottom: '14px',
              paddingTop: '28px',
              borderTop: '2px solid #f2f1ef',
              letterSpacing: '-0.02em',
            }}
          >
            Документ включает в себя следующие стандарты
          </h2>

          <ul className="list-none p-0 mb-4">
            {/* RFSS 3.1 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.1. Стандарты пищевой безопасности для ресторанов
              <ul className="list-none p-0 ml-5">
                {[
                  'Пищевое законодательство',
                  'Программа производственного контроля',
                  'HACCP',
                  'Ежегодная проверка воды_Документ HACCP_KFC_оППУ №2_Инженерные коммуникации',
                ].map((sub, j) => (
                  <li key={j} className="text-sm relative" style={{ padding: '2px 0 2px 16px', lineHeight: '1.6' }}>
                    <span className="absolute left-0 font-semibold text-[#656565]">-</span>
                    {sub}
                  </li>
                ))}
              </ul>
            </li>

            {/* RFSS 3.2 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.2 Обучение сотрудников стандартам пищевой безопасности
            </li>

            {/* RFSS 3.3 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.3 Состояние здоровья сотрудников_Документ HACCP_ППУ №7_Гигиена персонала
            </li>

            {/* RFSS 3.4 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.4 Гигиена рук_Документ HACCP_ППУ №7_Гигиена персонала
            </li>

            {/* RFSS 3.5 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.5 Обработка ран_ Документ HACCP_ППУ №4_Меры по предотвращению перекрестного загрязнения
            </li>

            {/* RFSS 3.6 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.6 Униформа и внешний вид _Документ HACCP_ППУ №7_Гигиена персонала
            </li>

            {/* RFSS 3.7 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.7 Одноразовые перчатки Документ HACCP_ППУ №7_Гигиена персонала
            </li>

            {/* RFSS 3.8 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.8 Поставщики продуктов питания
              <ul className="list-none p-0 ml-5">
                <li className="text-sm relative" style={{ padding: '2px 0 2px 16px', lineHeight: '1.6' }}>
                  <span className="absolute left-0 font-semibold text-[#656565]">-</span>
                  Отзыв продукции
                </li>
              </ul>
            </li>

            {/* RFSS 3.9 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.9 Предотвращение загрязнения_ Документ HACCP_ППУ №4_Меры по предотвращению перекрестного загрязнения
              <ul className="list-none p-0 ml-5">
                {[
                  'Предупреждение перекрестного загрязнения',
                  'Документ HACCP_ППУ №9 Удаление отходов',
                ].map((sub, j) => (
                  <li key={j} className="text-sm relative" style={{ padding: '2px 0 2px 16px', lineHeight: '1.6' }}>
                    <span className="absolute left-0 font-semibold text-[#656565]">-</span>
                    {sub}
                  </li>
                ))}
              </ul>
            </li>

            {/* RFSS 3.10 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.10 Температурный режим_Документ HACCP_оППУ №8 Получение и хранение
            </li>

            {/* RFSS 3.12 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.12 Химические средства и личные медикаменты
            </li>

            {/* RFSS 3.13 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.13 Маркировка сроков годности продуктов_Документ HACCP_оППУ №8 Получение и хранение
            </li>

            {/* RFSS 3.14 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.14 Очистка и техническое обслуживание оборудования, посуды, инвентаря_HACCP_ППУ №5_Очистка и дезинфекция
            </li>

            {/* RFSS 3.15 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.15 Уборка и техническое обслуживание помещений_Документ HACCP_ППУ №5_Очистка и дезинфекция
              <ul className="list-none p-0 ml-5">
                <li className="text-sm relative" style={{ padding: '2px 0 2px 16px', lineHeight: '1.6' }}>
                  <span className="absolute left-0 font-semibold text-[#656565]">-</span>
                  Программа уборки Cleaning Captain
                </li>
              </ul>
            </li>

            {/* RFSS 3.16 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.16 Контроль работы ресторанов (внутренний и внешний)
              <ul className="list-none p-0 ml-5">
                <li className="text-sm relative" style={{ padding: '2px 0 2px 16px', lineHeight: '1.6' }}>
                  <span className="absolute left-0 font-semibold text-[#656565]">-</span>
                  Санитарные проверки (для РФ)
                </li>
              </ul>
            </li>

            {/* RFSS 3.18 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.18. Предотвращение заражения вредителями_Документ HACCP_ППУ №6 Контроль вредителей
            </li>

            {/* RFSS 3.20 */}
            <li className="text-sm relative" style={{ padding: '3px 0 3px 18px', lineHeight: '1.6' }}>
              <span className="absolute left-1 text-[#212121]">•</span>
              RFSS 3.20. Использование и повреждение (бой) стекла
            </li>
          </ul>

          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Для просмотра документа перейдите по ссылке
          </p>

          {/* PDF Link Card */}
          <a
            href="/pdfs/Стандарты пищевой безопасности для ресторанов (RFSS, HACCP)_июль 2022 (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 no-underline bg-white transition-colors duration-150"
            style={{
              border: '1.5px solid #f2f1ef',
              borderRadius: '8px',
              padding: '14px 18px',
              marginTop: '8px',
              maxWidth: '640px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff5f6'
              e.currentTarget.style.borderColor = '#f0b0b8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff'
              e.currentTarget.style.borderColor = '#f2f1ef'
            }}
          >
            <FileText className="flex-shrink-0" style={{ width: '36px', height: '36px', color: '#e4002b' }} />
            <div className="flex-1 min-w-0">
              <div
                className="font-semibold leading-snug"
                style={{ fontSize: '13px', color: '#e4002b' }}
              >
                Стандарты пищевой безопасности для ресторанов (RFSS, HACCP)_июль 2022.pdf
              </div>
              <div className="text-xs text-[#656565] mt-0.5">– 1.13 МБ</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
