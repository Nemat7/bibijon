import Topbar from '@/components/Topbar'

const BASE = '/director/week2/planirovanie-kadrov/'

const images = [
  'Screenshot 2026-06-26 at 15.34.58.png',
  'Screenshot 2026-06-26 at 15.35.04.png',
  'Screenshot 2026-06-26 at 15.35.09.png',
  'Screenshot 2026-06-26 at 15.35.17.png',
  'Screenshot 2026-06-26 at 15.35.22.png',
  'Screenshot 2026-06-26 at 15.35.28.png',
  'Screenshot 2026-06-26 at 15.35.34.png',
  'Screenshot 2026-06-26 at 15.35.42.png',
  'Screenshot 2026-06-26 at 15.35.48.png',
  'Screenshot 2026-06-26 at 15.35.54.png',
  'Screenshot 2026-06-26 at 15.36.02.png',
  'Screenshot 2026-06-26 at 15.36.09.png',
  'Screenshot 2026-06-26 at 15.36.16.png',
  'Screenshot 2026-06-26 at 15.37.48.png',
  'Screenshot 2026-06-26 at 15.37.56.png',
  'Screenshot 2026-06-26 at 15.38.04.png',
  'Screenshot 2026-06-26 at 15.38.12.png',
  'Screenshot 2026-06-26 at 15.38.19.png',
  'Screenshot 2026-06-26 at 15.38.31.png',
  'Screenshot 2026-06-26 at 15.38.39.png',
  'Screenshot 2026-06-26 at 15.38.47.png',
  'Screenshot 2026-06-26 at 15.38.54.png',
  'Screenshot 2026-06-26 at 15.39.00.png',
  'Screenshot 2026-06-26 at 15.39.08.png',
  'Screenshot 2026-06-26 at 15.39.16.png',
  'Screenshot 2026-06-26 at 15.39.59.png',
  'Screenshot 2026-06-26 at 15.40.09.png',
  'Screenshot 2026-06-26 at 15.40.15.png',
  'Screenshot 2026-06-26 at 15.40.22.png',
  'Screenshot 2026-06-26 at 15.40.35.png',
  'Screenshot 2026-06-26 at 15.40.44.png',
  'Screenshot 2026-06-26 at 15.40.52.png',
  'Screenshot 2026-06-26 at 15.40.58.png',
]

export default function PlanirovanieKadrovPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Планирование кадрового резерва' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Планирование кадрового резерва
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
