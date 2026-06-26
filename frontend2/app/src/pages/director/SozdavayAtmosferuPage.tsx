import Topbar from '@/components/Topbar'

const BASE = '/director/week1/sozdavay-atmosferu/'

const images = [
  'Screenshot 2026-06-26 at 14.07.12.png',
  'Screenshot 2026-06-26 at 14.07.20.png',
  'Screenshot 2026-06-26 at 14.07.25.png',
  'Screenshot 2026-06-26 at 14.07.32.png',
  'Screenshot 2026-06-26 at 14.07.40.png',
  'Screenshot 2026-06-26 at 14.07.47.png',
  'Screenshot 2026-06-26 at 14.07.53.png',
  'Screenshot 2026-06-26 at 14.07.59.png',
  'Screenshot 2026-06-26 at 14.08.23.png',
  'Screenshot 2026-06-26 at 14.08.28.png',
  'Screenshot 2026-06-26 at 14.08.34.png',
  'Screenshot 2026-06-26 at 14.08.43.png',
  'Screenshot 2026-06-26 at 14.08.50.png',
  'Screenshot 2026-06-26 at 14.08.57.png',
  'Screenshot 2026-06-26 at 14.09.05.png',
  'Screenshot 2026-06-26 at 14.09.22.png',
]

export default function SozdavayAtmosferuPage() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Директор', href: '/director' },
          { label: 'Создавай атмосферу семейного уюта и счастья' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        <h1
          className="text-[#212121] font-extrabold"
          style={{ fontSize: '32px', letterSpacing: '-0.02em', marginBottom: '28px', lineHeight: 1.15 }}
        >
          Создавай атмосферу семейного уюта и счастья
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
