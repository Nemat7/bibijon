import Topbar from '@/components/Topbar'

const BASE = '/director/week2/preimushchestva-komandy/'

const images = [
  'Screenshot 2026-06-26 at 15.52.25.png',
  'Screenshot 2026-06-26 at 15.52.37.png',
  'Screenshot 2026-06-26 at 15.52.44.png',
  'Screenshot 2026-06-26 at 15.52.49.png',
  'Screenshot 2026-06-26 at 15.52.56.png',
  'Screenshot 2026-06-26 at 15.53.04.png',
  'Screenshot 2026-06-26 at 15.53.18.png',
  'Screenshot 2026-06-26 at 15.53.23.png',
  'Screenshot 2026-06-26 at 15.53.29.png',
  'Screenshot 2026-06-26 at 15.53.35.png',
  'Screenshot 2026-06-26 at 15.53.41.png',
  'Screenshot 2026-06-26 at 15.53.46.png',
  'Screenshot 2026-06-26 at 15.53.53.png',
  'Screenshot 2026-06-26 at 15.53.59.png',
  'Screenshot 2026-06-26 at 15.54.06.png',
  'Screenshot 2026-06-26 at 15.54.13.png',
]

export default function PreimushchestvaKomandyPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Преимущества дружной командной работы' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Преимущества дружной командной работы
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
