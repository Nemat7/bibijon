import Topbar from '@/components/Topbar'

const BASE = '/director/week1/rukovodi-serdcem/'

const images = [
  'Screenshot 2026-06-26 at 11.21.55.png',
  'Screenshot 2026-06-26 at 11.22.02.png',
  'Screenshot 2026-06-26 at 11.22.09.png',
  'Screenshot 2026-06-26 at 11.22.16.png',
  'Screenshot 2026-06-26 at 11.22.22.png',
  'Screenshot 2026-06-26 at 11.22.29.png',
  'Screenshot 2026-06-26 at 11.22.36.png',
  'Screenshot 2026-06-26 at 11.22.42.png',
  'Screenshot 2026-06-26 at 11.22.48.png',
  'Screenshot 2026-06-26 at 11.22.55.png',
  'Screenshot 2026-06-26 at 11.23.03.png',
  'Screenshot 2026-06-26 at 11.23.11.png',
  'Screenshot 2026-06-26 at 11.23.18.png',
  'Screenshot 2026-06-26 at 11.23.24.png',
  'Screenshot 2026-06-26 at 11.23.30.png',
  'Screenshot 2026-06-26 at 11.23.37.png',
  'Screenshot 2026-06-26 at 11.23.43.png',
  'Screenshot 2026-06-26 at 11.24.22.png',
  'Screenshot 2026-06-26 at 11.24.34.png',
  'Screenshot 2026-06-26 at 11.24.46.png',
  'Screenshot 2026-06-26 at 11.24.54.png',
  'Screenshot 2026-06-26 at 11.25.10.png',
  'Screenshot 2026-06-26 at 11.25.29.png',
]

export default function RukovodiSerdcemPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Руководи сердцем' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Руководи сердцем
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
