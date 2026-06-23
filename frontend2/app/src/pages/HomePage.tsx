import { Info, Heart } from 'lucide-react'
import Topbar from '@/components/Topbar'

/* ─── Bow Tie SVG ─── */
function BowTieSVG() {
  return (
    <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 20 L52 8 L52 42 L40 30 Z"
        fill="#1a1a1a"
      />
      <path
        d="M40 20 L28 8 L28 42 L40 30 Z"
        fill="#1a1a1a"
      />
      <ellipse
        cx="40"
        cy="25"
        rx="6"
        ry="8"
        fill="#1a1a1a"
      />
    </svg>
  )
}

/* ─── Role Icon: Assistant Manager ─── */
function AssistantIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

/* ─── Role Icon: Transportation Manager ─── */
function TransportIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

/* ─── Role Icon: Chef ─── */
function ChefIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  )
}

/* ─── Content Card ─── */
interface ContentCardProps {
  gradient: string
  title: string
}

function ContentCard({ gradient, title }: ContentCardProps) {
  return (
    <div
      className="relative flex-1 overflow-hidden group cursor-pointer"
      style={{
        aspectRatio: '1 / 1',
        borderRadius: '12px',
        boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
        background: gradient,
      }}
    >
      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)',
        }}
      />

      {/* Top-left info icon */}
      <button
        className="absolute top-3 left-3 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-150"
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <Info size={14} strokeWidth={2.5} />
      </button>

      {/* Top-right heart icon */}
      <button
        className="absolute top-3 right-3 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-150"
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <Heart size={14} strokeWidth={2} />
      </button>

      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
        <span className="text-white font-bold text-[12px] leading-tight">
          {title}
        </span>
      </div>
    </div>
  )
}

/* ─── Pagination Dots ─── */
function PaginationDots({ count, active }: { count: number; active: number }) {
  return (
    <div className="flex items-center gap-[6px]">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-colors duration-150"
          style={{
            width: i === active ? '18px' : '6px',
            height: '6px',
            background: i === active ? '#212121' : '#dad6cf',
            borderRadius: i === active ? '3px' : '50%',
          }}
        />
      ))}
    </div>
  )
}

/* ─── Role Item ─── */
interface RoleItemProps {
  bgColor: string
  icon: React.ReactNode
  label: string
}

function RoleItem({ bgColor, icon, label }: RoleItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          background: bgColor,
        }}
      >
        {icon}
      </div>
      <span className="text-[13px] font-bold text-[#212121] leading-tight">{label}</span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />

      <div className="flex">
        {/* ─── Main Content ─── */}
        <div className="flex-1" style={{ padding: '24px 28px' }}>
          {/* Featured Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[17px] font-bold text-[#212121]">
                Помещено На Главную
              </h2>
              <PaginationDots count={8} active={0} />
            </div>

            {/* Featured Card */}
            <div
              className="relative overflow-hidden w-full cursor-pointer"
              style={{
                height: '220px',
                borderRadius: '12px',
                boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
                background:
                  'radial-gradient(ellipse at 60% 40%, #d4873a 0%, #b05a1a 40%, #6e2c0a 100%)',
              }}
            >
              {/* Red-black overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(228,0,43,0.18) 0%, rgba(0,0,0,0.35) 100%)',
                }}
              />

              {/* Background text */}
              <div
                className="absolute top-1/2 left-8 -translate-y-1/2 font-black text-white pointer-events-none select-none whitespace-nowrap"
                style={{
                  fontSize: '52px',
                  opacity: 0.12,
                  letterSpacing: '-0.02em',
                }}
              >
                KFC LISTENS
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <h3
                  className="text-white font-bold"
                  style={{ fontSize: '22px', lineHeight: '1.2' }}
                >
                  Планирование Действий
                </h3>
                <p
                  className="text-white/85 mt-[2px]"
                  style={{ fontSize: '13px' }}
                >
                  Планирование действий
                </p>
              </div>
            </div>
          </div>

          {/* Content Cards Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[17px] font-bold text-[#212121]">
                Построить Знание Как
              </h2>
              <PaginationDots count={8} active={0} />
            </div>

            <div className="flex gap-[14px]">
              <ContentCard
                gradient="linear-gradient(135deg, #5a5a5a 0%, #3a3a3a 100%)"
                title="ТВОЁ РУКОВОДСТВО..."
              />
              <ContentCard
                gradient="linear-gradient(135deg, #6a6a6a 0%, #4a4a4a 100%)"
                title="Collectramatic Pressure Cooke..."
              />
              <ContentCard
                gradient="linear-gradient(135deg, #4e4e4e 0%, #2e2e2e 100%)"
                title="Collectramatic Pressure Cooke..."
              />
            </div>
          </div>
        </div>

        {/* ─── Right Panel ─── */}
        <div
          className="flex-shrink-0 bg-white"
          style={{
            width: '280px',
            padding: '24px 20px',
            borderLeft: '1px solid #f2f1ef',
          }}
        >
          {/* Role Card */}
          <div className="mb-6">
            <h3 className="text-[17px] font-bold text-[#212121] mb-3">Директор</h3>
            <div
              className="bg-white text-center"
              style={{
                borderRadius: '12px',
                padding: '24px 16px',
                minHeight: '180px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <div
                className="font-extrabold text-[#212121]"
                style={{ fontSize: '38px', lineHeight: 1 }}
              >
                RGM<span className="text-[#e4002b]">1</span>
              </div>
              <div className="flex justify-center mt-4">
                <BowTieSVG />
              </div>
            </div>
          </div>

          {/* Other Roles */}
          <div>
            <h3 className="text-[15px] font-bold text-[#212121] mb-3">
              Другие Должности
            </h3>
            <div className="flex flex-col gap-3">
              <RoleItem
                bgColor="#b8b4ae"
                icon={<AssistantIcon />}
                label="Ассистент Менеджера"
              />
              <RoleItem
                bgColor="#e8c840"
                icon={<TransportIcon />}
                label="Менеджер По Перевозкам"
              />
              <RoleItem
                bgColor="#e8a8a0"
                icon={<ChefIcon />}
                label="Шеф"
              />
            </div>

            {/* See other roles link */}
            <div className="flex items-center gap-2 mt-4">
              <div
                className="bg-[#e4002b] rounded-full flex-shrink-0"
                style={{ width: '4px', height: '16px' }}
              />
              <a
                href="#"
                className="text-[13px] font-semibold text-[#e4002b] hover:text-[#87041e] transition-colors duration-150 no-underline"
              >
                См. Другие роли
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
