import Topbar from '@/components/Topbar'

const BASE = '/director/week2/rabotay-effektivno/'

const images = [
  'Screenshot 2026-06-26 at 15.57.55.png',
  'Screenshot 2026-06-26 at 15.58.08.png',
  'Screenshot 2026-06-26 at 15.58.18.png',
  'Screenshot 2026-06-26 at 15.58.24.png',
  'Screenshot 2026-06-26 at 15.58.31.png',
  'Screenshot 2026-06-26 at 15.58.37.png',
  'Screenshot 2026-06-26 at 15.58.44.png',
  'Screenshot 2026-06-26 at 15.58.50.png',
  'Screenshot 2026-06-26 at 15.58.59.png',
  'Screenshot 2026-06-26 at 15.59.05.png',
  'Screenshot 2026-06-26 at 15.59.12.png',
  'Screenshot 2026-06-26 at 15.59.17.png',
  'Screenshot 2026-06-26 at 15.59.27.png',
  'Screenshot 2026-06-26 at 15.59.37.png',
  'Screenshot 2026-06-26 at 15.59.45.png',
  'Screenshot 2026-06-26 at 15.59.52.png',
  'Screenshot 2026-06-26 at 16.00.02.png',
  'Screenshot 2026-06-26 at 16.00.16.png',
  'Screenshot 2026-06-26 at 16.00.27.png',
  'Screenshot 2026-06-26 at 16.00.33.png',
  'Screenshot 2026-06-26 at 16.00.39.png',
  'Screenshot 2026-06-26 at 16.00.44.png',
  'Screenshot 2026-06-26 at 16.00.52.png',
  'Screenshot 2026-06-26 at 16.00.59.png',
  'Screenshot 2026-06-26 at 16.01.05.png',
  'Screenshot 2026-06-26 at 16.01.11.png',
  'Screenshot 2026-06-26 at 16.01.17.png',
  'Screenshot 2026-06-26 at 16.01.22.png',
  'Screenshot 2026-06-26 at 16.01.32.png',
  'Screenshot 2026-06-26 at 16.01.39.png',
  'Screenshot 2026-06-26 at 16.01.47.png',
  'Screenshot 2026-06-26 at 16.02.02.png',
  'Screenshot 2026-06-26 at 16.02.09.png',
  'Screenshot 2026-06-26 at 16.02.45.png',
  'Screenshot 2026-06-26 at 16.03.02.png',
  'Screenshot 2026-06-26 at 16.03.15.png',
  'Screenshot 2026-06-26 at 16.03.24.png',
  'Screenshot 2026-06-26 at 16.03.29.png',
  'Screenshot 2026-06-26 at 16.03.39.png',
  'Screenshot 2026-06-26 at 16.04.13.png',
  'Screenshot 2026-06-26 at 16.04.19.png',
]

export default function RabotayEffektivnoPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Работай эффективно' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Работай эффективно
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
