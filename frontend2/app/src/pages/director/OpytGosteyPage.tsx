import Topbar from '@/components/Topbar'

const BASE = '/director/week3/opyt-gostey/'

const images = [
  'Screenshot 2026-06-26 at 16.09.20.png',
  'Screenshot 2026-06-26 at 16.09.27.png',
  'Screenshot 2026-06-26 at 16.09.32.png',
  'Screenshot 2026-06-26 at 16.09.38.png',
  'Screenshot 2026-06-26 at 16.09.59.png',
  'Screenshot 2026-06-26 at 16.10.04.png',
  'Screenshot 2026-06-26 at 16.10.09.png',
  'Screenshot 2026-06-26 at 16.10.15.png',
  'Screenshot 2026-06-26 at 16.10.20.png',
  'Screenshot 2026-06-26 at 16.10.26.png',
  'Screenshot 2026-06-26 at 16.10.31.png',
  'Screenshot 2026-06-26 at 16.10.36.png',
  'Screenshot 2026-06-26 at 16.10.41.png',
  'Screenshot 2026-06-26 at 16.10.47.png',
  'Screenshot 2026-06-26 at 16.10.52.png',
  'Screenshot 2026-06-26 at 16.10.58.png',
  'Screenshot 2026-06-26 at 16.11.08.png',
  'Screenshot 2026-06-26 at 16.11.15.png',
  'Screenshot 2026-06-26 at 16.11.21.png',
]

export default function OpytGosteyPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Опыт Гостей' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Опыт Гостей
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
