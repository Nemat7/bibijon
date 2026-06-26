import Topbar from '@/components/Topbar'

const BASE = '/director/week1/kouching/'

const images = [
  'Screenshot 2026-06-26 at 13.57.13.png',
  'Screenshot 2026-06-26 at 13.57.23.png',
  'Screenshot 2026-06-26 at 13.57.30.png',
  'Screenshot 2026-06-26 at 13.57.38.png',
  'Screenshot 2026-06-26 at 13.57.45.png',
  'Screenshot 2026-06-26 at 13.57.51.png',
  'Screenshot 2026-06-26 at 13.57.58.png',
  'Screenshot 2026-06-26 at 13.58.20.png',
  'Screenshot 2026-06-26 at 13.58.30.png',
  'Screenshot 2026-06-26 at 13.58.37.png',
  'Screenshot 2026-06-26 at 13.58.43.png',
  'Screenshot 2026-06-26 at 13.58.49.png',
  'Screenshot 2026-06-26 at 13.59.03.png',
  'Screenshot 2026-06-26 at 13.59.10.png',
  'Screenshot 2026-06-26 at 13.59.17.png',
  'Screenshot 2026-06-26 at 13.59.24.png',
  'Screenshot 2026-06-26 at 14.00.19.png',
  'Screenshot 2026-06-26 at 14.00.29.png',
  'Screenshot 2026-06-26 at 14.00.35.png',
  'Screenshot 2026-06-26 at 14.00.47.png',
  'Screenshot 2026-06-26 at 14.00.58.png',
  'Screenshot 2026-06-26 at 14.01.10.png',
  'Screenshot 2026-06-26 at 14.01.21.png',
  'Screenshot 2026-06-26 at 14.01.31.png',
  'Screenshot 2026-06-26 at 14.01.38.png',
  'Screenshot 2026-06-26 at 14.01.46.png',
  'Screenshot 2026-06-26 at 14.01.53.png',
  'Screenshot 2026-06-26 at 14.02.22.png',
  'Screenshot 2026-06-26 at 14.02.30.png',
  'Screenshot 2026-06-26 at 14.02.39.png',
  'Screenshot 2026-06-26 at 14.02.54.png',
  'Screenshot 2026-06-26 at 14.03.16.png',
  'Screenshot 2026-06-26 at 14.03.26.png',
  'Screenshot 2026-06-26 at 14.03.37.png',
  'Screenshot 2026-06-26 at 14.03.51.png',
  'Screenshot 2026-06-26 at 14.03.58.png',
  'Screenshot 2026-06-26 at 14.04.08.png',
  'Screenshot 2026-06-26 at 14.04.29.png',
  'Screenshot 2026-06-26 at 14.04.36.png',
]

export default function KouchingPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Коучинг' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Коучинг
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
