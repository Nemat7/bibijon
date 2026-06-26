import Topbar from '@/components/Topbar'

const BASE = '/director/week5/prazdnuy-uspekh/'

const images = [
  'Screenshot 2026-06-26 at 17.57.08.png',
  'Screenshot 2026-06-26 at 17.57.13.png',
  'Screenshot 2026-06-26 at 17.57.18.png',
  'Screenshot 2026-06-26 at 17.57.24.png',
  'Screenshot 2026-06-26 at 17.57.30.png',
  'Screenshot 2026-06-26 at 17.57.36.png',
  'Screenshot 2026-06-26 at 17.57.42.png',
  'Screenshot 2026-06-26 at 17.57.48.png',
  'Screenshot 2026-06-26 at 17.57.53.png',
  'Screenshot 2026-06-26 at 17.58.04.png',
  'Screenshot 2026-06-26 at 17.58.09.png',
  'Screenshot 2026-06-26 at 17.58.15.png',
  'Screenshot 2026-06-26 at 17.58.22.png',
  'Screenshot 2026-06-26 at 17.58.29.png',
  'Screenshot 2026-06-26 at 17.58.37.png',
]

export default function PrazdnuyUspekPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Празднуй успех' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Празднуй успех
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
