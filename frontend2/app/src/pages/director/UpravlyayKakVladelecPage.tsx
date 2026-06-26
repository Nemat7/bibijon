import Topbar from '@/components/Topbar'

const BASE = '/director/week1/upravlyay-kak-vladelec/'

const images = [
  'Screenshot 2026-06-26 at 11.03.40.png',
  'Screenshot 2026-06-26 at 11.03.47.png',
  'Screenshot 2026-06-26 at 11.03.54.png',
  'Screenshot 2026-06-26 at 11.04.01.png',
  'Screenshot 2026-06-26 at 11.04.07.png',
  'Screenshot 2026-06-26 at 11.04.13.png',
  'Screenshot 2026-06-26 at 11.04.20.png',
  'Screenshot 2026-06-26 at 11.04.27.png',
  'Screenshot 2026-06-26 at 11.04.34.png',
  'Screenshot 2026-06-26 at 11.04.40.png',
  'Screenshot 2026-06-26 at 11.04.50.png',
  'Screenshot 2026-06-26 at 11.05.43.png',
  'Screenshot 2026-06-26 at 11.05.52.png',
  'Screenshot 2026-06-26 at 11.05.59.png',
  'Screenshot 2026-06-26 at 11.06.06.png',
  'Screenshot 2026-06-26 at 11.06.14.png',
  'Screenshot 2026-06-26 at 11.06.21.png',
  'Screenshot 2026-06-26 at 11.06.29.png',
  'Screenshot 2026-06-26 at 11.06.36.png',
  'Screenshot 2026-06-26 at 11.06.42.png',
  'Screenshot 2026-06-26 at 11.06.48.png',
  'Screenshot 2026-06-26 at 11.06.55.png',
  'Screenshot 2026-06-26 at 11.07.02.png',
  'Screenshot 2026-06-26 at 11.07.23.png',
  'Screenshot 2026-06-26 at 11.07.32.png',
  'Screenshot 2026-06-26 at 11.08.11.png',
  'Screenshot 2026-06-26 at 11.08.20.png',
  'Screenshot 2026-06-26 at 11.08.29.png',
]

export default function UpravlyayKakVladelecPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Управляй как владелец' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Управляй как владелец
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
