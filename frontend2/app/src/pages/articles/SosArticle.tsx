import Topbar from '@/components/Topbar'
import ArticleHeader from '@/components/ArticleHeader'
import TagsRow from '@/components/TagsRow'

const SosBadgeSvg = () => (
  <svg viewBox="0 0 100 100" fill="white" opacity="0.3" className="w-14 h-14">
    <circle cx="50" cy="35" r="14" />
    <rect x="34" y="30" width="4" height="10" rx="2" />
    <path d="M50 51 L50 51 C38 51 28 58 28 68 L28 85 L72 85 L72 68 C72 58 62 51 50 51Z" />
  </svg>
)

const PvSvg = () => (
  <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <rect width="36" height="44" rx="4" fill="#fff0f2" />
    <rect x="0.75" y="0.75" width="34.5" height="42.5" rx="3.25" stroke="#e4002b" strokeWidth="1.5" />
    <text x="18" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#e4002b">PDF</text>
    <line x1="8" y1="28" x2="28" y2="28" stroke="#e4002b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="33" x2="24" y2="33" stroke="#e4002b" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const tags = [
  '#Обслуживание',
  '#SOS-reporting',
  '#SOS-TRED',
  '#Чек-лист скорости',
  '#Стандарты скорости',
  '#BY',
  '#GE',
  '#Georgia',
  '#Грузия',
  '#AM',
  '#Armenia',
]

const pdfFiles = [
  { name: 'CSL Управление скоростью.pdf', size: '3.38 MB' },
  { name: 'Рекомендуемое время приготовление блюд и напитков.pdf', size: '209.65 KB' },
  { name: 'Стандарты скорости приготовления блюд.pdf', size: '67.44 KB' },
  { name: 'Чек-лист скорости AUTO.pdf', size: '131.1 KB' },
  { name: 'Чек-лист скорости FUSION.pdf', size: '123.88 KB' },
  { name: 'Чек-лист скорости HYBRID и CLASSIC.pdf', size: '121.44 KB' },
]

export default function SosArticle() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Обслуживание', href: '/standards/obsluzhivanie' },
          { label: 'Управление скоростью о...' },
        ]}
      />

      <div style={{ padding: '28px 36px 60px' }}>
        <ArticleHeader
          photoGradient="linear-gradient(150deg, #e4002b 0%, #a00020 50%, #600010 100%)"
          category="Обслуживание"
          title="Управление скоростью обслуживания"
          description="Одним из обещаний нашего Бренда является предоставление быстрого и качественного обслуживания для наших Гостей. Скорость — это неотъемлемая часть Стратегии KFC."
          tags={[]}
          svgContent={<SosBadgeSvg />}
        />

        <div className="mt-5" />

        <TagsRow tags={tags} showMore={5} actions />

        <div style={{ maxWidth: '860px', color: '#212121' }} className="mt-7">
          <h2 className="text-lg font-extrabold leading-tight mb-3" style={{ letterSpacing: '-0.02em' }}>
            Управление скоростью обслуживания в ресторанах KFC
          </h2>

          <p className="text-sm mb-3" style={{ lineHeight: '1.75' }}>
            Посещая наши рестораны, Гости ожидают более высокой скорости обслуживания в сравнении с нашими конкурентами. Скорость обслуживания является существенным элементом формирования положительного впечатления Гостей.
          </p>

          {/* Slogan Block */}
          <div
            className="bg-[#f4f4f4] rounded-r-lg my-6 mb-7"
            style={{ borderLeft: '4px solid #e4002b', padding: '24px 28px' }}
          >
            <div className="text-base font-extrabold text-[#212121] uppercase" style={{ letterSpacing: '0.02em', lineHeight: '1.6' }}>
              Улучшая скорость обслуживания,
            </div>
            <div className="text-base font-extrabold text-[#212121] uppercase" style={{ letterSpacing: '0.02em', lineHeight: '1.6' }}>
              мы увеличиваем поток Гостей,
            </div>
            <div className="text-base font-extrabold text-[#212121] uppercase" style={{ letterSpacing: '0.02em', lineHeight: '1.6' }}>
              что помогает нам достигнуть целей
            </div>
            <div className="text-base font-extrabold text-[#212121] uppercase" style={{ letterSpacing: '0.02em', lineHeight: '1.6' }}>
              по продажам, через увеличение
            </div>
            <div className="text-base font-extrabold text-[#212121] uppercase" style={{ letterSpacing: '0.02em', lineHeight: '1.6' }}>
              количества транзакций.
            </div>
          </div>

          <p className="text-sm mb-3" style={{ lineHeight: '1.75' }}>
            Задачей Менеджера является удовлетворение данных ожиданий Гостей.
          </p>
          <p className="text-sm mb-3" style={{ lineHeight: '1.75' }}>
            Данное руководство было создано для того, чтобы объяснить, как управлять скоростью в твоем ресторане.
          </p>

          {/* PDF Links */}
          {pdfFiles.map((file, i) => (
            <a
              key={i}
              className="flex items-center gap-3 bg-white no-underline transition-colors duration-150 max-w-[640px] hover:bg-[#fff0f2] hover:border-[#e4002b] border-[1.5px] border-[#f2f1ef]"
              style={{ borderRadius: '8px', padding: '12px 16px', margin: '10px 0' }}
              href={`/pdfs/${file.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PvSvg />
              <div>
                <div className="text-[13px] font-semibold text-[#e4002b] leading-snug">{file.name}</div>
                <div className="text-xs text-[#656565] mt-0.5">{file.size}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
