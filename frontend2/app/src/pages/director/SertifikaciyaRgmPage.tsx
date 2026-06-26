import Topbar from '@/components/Topbar'

const BASE = '/director/week5/sertifikaciya-rgm/'

const images = [
  'Screenshot 2026-06-26 at 17.59.31.png',
  'Screenshot 2026-06-26 at 17.59.38.png',
  'Screenshot 2026-06-26 at 18.00.01.png',
  'Screenshot 2026-06-26 at 18.00.20.png',
  'Screenshot 2026-06-26 at 18.00.30.png',
  'Screenshot 2026-06-26 at 18.00.37.png',
  'Screenshot 2026-06-26 at 18.00.48.png',
  'Screenshot 2026-06-26 at 18.00.57.png',
  'Screenshot 2026-06-26 at 18.01.04.png',
  'Screenshot 2026-06-26 at 18.01.15.png',
  'Screenshot 2026-06-26 at 18.01.28.png',
  'Screenshot 2026-06-26 at 18.01.34.png',
  'Screenshot 2026-06-26 at 18.01.42.png',
  'Screenshot 2026-06-26 at 18.01.49.png',
  'Screenshot 2026-06-26 at 18.02.02.png',
  'Screenshot 2026-06-26 at 18.02.10.png',
  'Screenshot 2026-06-26 at 18.02.17.png',
  'Screenshot 2026-06-26 at 18.02.27.png',
  'Screenshot 2026-06-26 at 18.02.37.png',
  'Screenshot 2026-06-26 at 18.02.46.png',
  'Screenshot 2026-06-26 at 18.02.55.png',
  'Screenshot 2026-06-26 at 18.03.04.png',
  'Screenshot 2026-06-26 at 18.03.41.png',
  'Screenshot 2026-06-26 at 18.03.57.png',
  'Screenshot 2026-06-26 at 18.04.06.png',
  'Screenshot 2026-06-26 at 18.04.15.png',
  'Screenshot 2026-06-26 at 18.04.25.png',
  'Screenshot 2026-06-26 at 18.04.33.png',
  'Screenshot 2026-06-26 at 18.04.53.png',
  'Screenshot 2026-06-26 at 18.05.00.png',
  'Screenshot 2026-06-26 at 18.05.07.png',
  'Screenshot 2026-06-26 at 18.05.15.png',
  'Screenshot 2026-06-26 at 18.05.24.png',
  'Screenshot 2026-06-26 at 18.05.31.png',
  'Screenshot 2026-06-26 at 18.05.39.png',
  'Screenshot 2026-06-26 at 18.05.46.png',
  'Screenshot 2026-06-26 at 18.05.53.png',
  'Screenshot 2026-06-26 at 18.06.00.png',
  'Screenshot 2026-06-26 at 18.06.07.png',
]

export default function SertifikaciyaRgmPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Сертификация RGM' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Сертификация RGM
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
