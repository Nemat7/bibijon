import Topbar from '@/components/Topbar'

const BASE = '/director/week4/kontrol-raskhodov/'

const images = [
  'Screenshot 2026-06-26 at 17.33.53.png',
  'Screenshot 2026-06-26 at 17.33.59.png',
  'Screenshot 2026-06-26 at 17.34.04.png',
  'Screenshot 2026-06-26 at 17.34.11.png',
  'Screenshot 2026-06-26 at 17.34.18.png',
  'Screenshot 2026-06-26 at 17.34.26.png',
  'Screenshot 2026-06-26 at 17.34.32.png',
  'Screenshot 2026-06-26 at 17.34.37.png',
  'Screenshot 2026-06-26 at 17.34.45.png',
  'Screenshot 2026-06-26 at 17.34.53.png',
  'Screenshot 2026-06-26 at 17.35.01.png',
  'Screenshot 2026-06-26 at 17.35.13.png',
]

export default function KontrolRaskhodovPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Контроль расходов' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Контроль расходов
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
