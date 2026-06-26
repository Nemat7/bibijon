import Topbar from '@/components/Topbar'

const BASE = '/director/week2/obuchay-komandu/'

const images = [
  'Screenshot 2026-06-26 at 15.42.59.png',
  'Screenshot 2026-06-26 at 15.43.05.png',
  'Screenshot 2026-06-26 at 15.43.10.png',
  'Screenshot 2026-06-26 at 15.43.18.png',
  'Screenshot 2026-06-26 at 15.43.26.png',
  'Screenshot 2026-06-26 at 15.43.34.png',
  'Screenshot 2026-06-26 at 15.43.40.png',
  'Screenshot 2026-06-26 at 15.43.48.png',
  'Screenshot 2026-06-26 at 15.43.55.png',
  'Screenshot 2026-06-26 at 15.44.02.png',
  'Screenshot 2026-06-26 at 15.44.10.png',
  'Screenshot 2026-06-26 at 15.44.15.png',
  'Screenshot 2026-06-26 at 15.44.21.png',
  'Screenshot 2026-06-26 at 15.44.30.png',
  'Screenshot 2026-06-26 at 15.44.37.png',
  'Screenshot 2026-06-26 at 15.44.46.png',
  'Screenshot 2026-06-26 at 15.44.52.png',
  'Screenshot 2026-06-26 at 15.44.59.png',
  'Screenshot 2026-06-26 at 15.45.06.png',
  'Screenshot 2026-06-26 at 15.45.13.png',
  'Screenshot 2026-06-26 at 15.45.20.png',
  'Screenshot 2026-06-26 at 15.45.51.png',
  'Screenshot 2026-06-26 at 15.45.58.png',
  'Screenshot 2026-06-26 at 15.46.07.png',
  'Screenshot 2026-06-26 at 15.46.15.png',
  'Screenshot 2026-06-26 at 15.46.24.png',
  'Screenshot 2026-06-26 at 15.46.31.png',
  'Screenshot 2026-06-26 at 15.47.14.png',
  'Screenshot 2026-06-26 at 15.47.21.png',
  'Screenshot 2026-06-26 at 15.47.29.png',
  'Screenshot 2026-06-26 at 15.47.37.png',
  'Screenshot 2026-06-26 at 15.47.44.png',
  'Screenshot 2026-06-26 at 15.47.52.png',
  'Screenshot 2026-06-26 at 15.48.04.png',
  'Screenshot 2026-06-26 at 15.48.10.png',
  'Screenshot 2026-06-26 at 15.48.16.png',
  'Screenshot 2026-06-26 at 15.48.30.png',
  'Screenshot 2026-06-26 at 15.48.37.png',
  'Screenshot 2026-06-26 at 15.48.43.png',
  'Screenshot 2026-06-26 at 15.48.50.png',
  'Screenshot 2026-06-26 at 15.48.56.png',
  'Screenshot 2026-06-26 at 15.49.01.png',
  'Screenshot 2026-06-26 at 15.49.08.png',
  'Screenshot 2026-06-26 at 15.49.14.png',
  'Screenshot 2026-06-26 at 15.49.44.png',
  'Screenshot 2026-06-26 at 15.49.51.png',
  'Screenshot 2026-06-26 at 15.49.56.png',
  'Screenshot 2026-06-26 at 15.50.02.png',
  'Screenshot 2026-06-26 at 15.50.07.png',
  'Screenshot 2026-06-26 at 15.50.19.png',
  'Screenshot 2026-06-26 at 15.50.24.png',
  'Screenshot 2026-06-26 at 15.50.31.png',
  'Screenshot 2026-06-26 at 15.50.37.png',
  'Screenshot 2026-06-26 at 15.50.45.png',
  'Screenshot 2026-06-26 at 15.50.54.png',
  'Screenshot 2026-06-26 at 15.51.01.png',
]

export default function ObuchayKomanduPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Обучай и развивай команду' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Обучай и развивай команду
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
