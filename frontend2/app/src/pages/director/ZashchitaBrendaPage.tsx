import Topbar from '@/components/Topbar'

const BASE = '/director/week3/zashchita-brenda/'

const images = [
  'Screenshot 2026-06-26 at 16.13.27.png',
  'Screenshot 2026-06-26 at 16.13.32.png',
  'Screenshot 2026-06-26 at 16.13.37.png',
  'Screenshot 2026-06-26 at 16.13.42.png',
  'Screenshot 2026-06-26 at 16.13.48.png',
  'Screenshot 2026-06-26 at 16.13.59.png',
  'Screenshot 2026-06-26 at 16.14.04.png',
  'Screenshot 2026-06-26 at 16.14.10.png',
  'Screenshot 2026-06-26 at 16.14.15.png',
  'Screenshot 2026-06-26 at 16.14.23.png',
  'Screenshot 2026-06-26 at 16.14.29.png',
  'Screenshot 2026-06-26 at 16.14.35.png',
  'Screenshot 2026-06-26 at 16.14.40.png',
  'Screenshot 2026-06-26 at 16.14.44.png',
  'Screenshot 2026-06-26 at 16.14.50.png',
  'Screenshot 2026-06-26 at 16.14.57.png',
  'Screenshot 2026-06-26 at 16.15.04.png',
  'Screenshot 2026-06-26 at 16.15.10.png',
]

export default function ZashchitaBrendaPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Защита бренда' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Защита бренда
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
