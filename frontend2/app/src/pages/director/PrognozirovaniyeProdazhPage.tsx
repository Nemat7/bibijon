import Topbar from '@/components/Topbar'

const BASE = '/director/week4/prognozirovanie-prodazh/'

const images = [
  'Screenshot 2026-06-26 at 17.36.21.png',
  'Screenshot 2026-06-26 at 17.36.29.png',
  'Screenshot 2026-06-26 at 17.36.37.png',
  'Screenshot 2026-06-26 at 17.36.44.png',
  'Screenshot 2026-06-26 at 17.36.52.png',
  'Screenshot 2026-06-26 at 17.36.59.png',
  'Screenshot 2026-06-26 at 17.37.07.png',
  'Screenshot 2026-06-26 at 17.37.14.png',
  'Screenshot 2026-06-26 at 17.37.22.png',
  'Screenshot 2026-06-26 at 17.37.31.png',
  'Screenshot 2026-06-26 at 17.37.38.png',
  'Screenshot 2026-06-26 at 17.37.46.png',
  'Screenshot 2026-06-26 at 17.37.53.png',
  'Screenshot 2026-06-26 at 17.38.00.png',
  'Screenshot 2026-06-26 at 17.38.07.png',
  'Screenshot 2026-06-26 at 17.38.14.png',
  'Screenshot 2026-06-26 at 17.38.23.png',
  'Screenshot 2026-06-26 at 17.38.32.png',
  'Screenshot 2026-06-26 at 17.38.40.png',
  'Screenshot 2026-06-26 at 17.38.49.png',
  'Screenshot 2026-06-26 at 17.38.56.png',
  'Screenshot 2026-06-26 at 17.39.24.png',
  'Screenshot 2026-06-26 at 17.40.51.png',
  'Screenshot 2026-06-26 at 17.40.59.png',
  'Screenshot 2026-06-26 at 17.41.05.png',
  'Screenshot 2026-06-26 at 17.41.16.png',
  'Screenshot 2026-06-26 at 17.41.30.png',
  'Screenshot 2026-06-26 at 17.41.44.png',
  'Screenshot 2026-06-26 at 17.41.51.png',
  'Screenshot 2026-06-26 at 17.42.02.png',
  'Screenshot 2026-06-26 at 17.42.14.png',
  'Screenshot 2026-06-26 at 17.42.24.png',
  'Screenshot 2026-06-26 at 17.42.31.png',
  'Screenshot 2026-06-26 at 17.42.39.png',
  'Screenshot 2026-06-26 at 17.43.02.png',
  'Screenshot 2026-06-26 at 17.43.10.png',
  'Screenshot 2026-06-26 at 17.43.19.png',
]

export default function PrognozirovaniyeProdazhPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Прогнозирование продаж и планирование трудовых ресурсов' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Прогнозирование продаж и планирование трудовых ресурсов
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
