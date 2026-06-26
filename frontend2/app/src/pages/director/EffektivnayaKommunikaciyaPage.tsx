import Topbar from '@/components/Topbar'

const BASE = '/director/week5/effektivnaya-kommunikaciya/'

const images = [
  'Screenshot 2026-06-26 at 17.54.56.png',
  'Screenshot 2026-06-26 at 17.55.01.png',
  'Screenshot 2026-06-26 at 17.55.07.png',
  'Screenshot 2026-06-26 at 17.55.12.png',
  'Screenshot 2026-06-26 at 17.55.18.png',
  'Screenshot 2026-06-26 at 17.55.23.png',
  'Screenshot 2026-06-26 at 17.55.30.png',
  'Screenshot 2026-06-26 at 17.55.35.png',
  'Screenshot 2026-06-26 at 17.55.41.png',
  'Screenshot 2026-06-26 at 17.55.46.png',
  'Screenshot 2026-06-26 at 17.55.52.png',
  'Screenshot 2026-06-26 at 17.55.59.png',
  'Screenshot 2026-06-26 at 17.56.05.png',
]

export default function EffektivnayaKommunikaciyaPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Эффективная коммуникация' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Эффективная коммуникация
        </h1>

        <div className="flex flex-col gap-3" style={{ maxWidth: '860px' }}>
          {images.map((name, i) => (
            <img
              key={name}
              src={BASE + name}
              alt={`Слайд ${i + 1}`}
              style={{
                width: '100%',
                borderRadius: '10px',
                border: '1.5px solid #f2f1ef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'block',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
