import Topbar from '@/components/Topbar'

const BASE = '/director/week1/rgm-vvedenie/'

const images = [
  'Screenshot 2026-06-26 at 10.45.04.png',
  'Screenshot 2026-06-26 at 10.45.18.png',
  'Screenshot 2026-06-26 at 10.45.33.png',
  'Screenshot 2026-06-26 at 10.45.44.png',
  'Screenshot 2026-06-26 at 10.45.55.png',
  'Screenshot 2026-06-26 at 10.46.07.png',
  'Screenshot 2026-06-26 at 10.47.33.png',
  'Screenshot 2026-06-26 at 10.47.42.png',
  'Screenshot 2026-06-26 at 10.47.52.png',
  'Screenshot 2026-06-26 at 10.48.03.png',
  'Screenshot 2026-06-26 at 10.48.15.png',
  'Screenshot 2026-06-26 at 10.48.25.png',
  'Screenshot 2026-06-26 at 10.49.11.png',
  'Screenshot 2026-06-26 at 10.49.17.png',
  'Screenshot 2026-06-26 at 10.49.31.png',
  'Screenshot 2026-06-26 at 10.49.39.png',
  'Screenshot 2026-06-26 at 10.49.47.png',
  'Screenshot 2026-06-26 at 10.50.20.png',
  'Screenshot 2026-06-26 at 10.54.25.png',
  'Screenshot 2026-06-26 at 10.54.35.png',
  'Screenshot 2026-06-26 at 10.54.45.png',
  'Screenshot 2026-06-26 at 10.54.51.png',
  'Screenshot 2026-06-26 at 10.55.04.png',
  'Screenshot 2026-06-26 at 10.56.00.png',
  'Screenshot 2026-06-26 at 10.56.27.png',
  'Screenshot 2026-06-26 at 10.56.47.png',
  'Screenshot 2026-06-26 at 10.57.08.png',
  'Screenshot 2026-06-26 at 10.57.16.png',
  'Screenshot 2026-06-26 at 10.57.24.png',
  'Screenshot 2026-06-26 at 10.57.30.png',
  'Screenshot 2026-06-26 at 10.57.36.png',
  'Screenshot 2026-06-26 at 10.58.51.png',
  'Screenshot 2026-06-26 at 10.58.59.png',
  'Screenshot 2026-06-26 at 10.59.05.png',
  'Screenshot 2026-06-26 at 10.59.13.png',
  'Screenshot 2026-06-26 at 10.59.20.png',
  'Screenshot 2026-06-26 at 10.59.28.png',
  'Screenshot 2026-06-26 at 10.59.36.png',
  'Screenshot 2026-06-26 at 10.59.52.png',
  'Screenshot 2026-06-26 at 11.00.06.png',
  'Screenshot 2026-06-26 at 11.00.13.png',
  'Screenshot 2026-06-26 at 11.00.29.png',
  'Screenshot 2026-06-26 at 11.00.36.png',
  'Screenshot 2026-06-26 at 11.00.42.png',
  'Screenshot 2026-06-26 at 11.00.48.png',
  'Screenshot 2026-06-26 at 11.00.55.png',
  'Screenshot 2026-06-26 at 11.01.01.png',
  'Screenshot 2026-06-26 at 11.01.08.png',
]

export default function RgmVvedeniePage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'RGM - Введение' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          RGM - Введение
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
