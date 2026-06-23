import { Star } from 'lucide-react'

interface ArticleHeaderProps {
  photoGradient: string
  category: string
  title: string
  description: string
  tags: string[]
  showMoreTag?: boolean
  svgContent?: React.ReactNode
}

export default function ArticleHeader({
  photoGradient,
  category,
  title,
  description,
  tags,
  showMoreTag,
  svgContent,
}: ArticleHeaderProps) {
  return (
    <div
      className="flex overflow-hidden bg-white"
      style={{
        border: '1.5px solid #f2f1ef',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      {/* Photo Area */}
      <div
        className="flex-shrink-0 flex items-center justify-center relative"
        style={{
          width: '130px',
          background: photoGradient,
        }}
      >
        {svgContent || (
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="20" r="10" fill="white" fillOpacity="0.35" />
            <ellipse cx="28" cy="52" rx="18" ry="12" fill="white" fillOpacity="0.25" />
          </svg>
        )}
      </div>

      {/* Meta Area */}
      <div className="flex-1 relative" style={{ padding: '18px 20px' }}>
        {/* Fav Button */}
        <button
          className="absolute top-3 right-3 text-[#dad6cf] hover:text-[#e4002b] transition-colors duration-150"
          aria-label="Add to favorites"
        >
          <Star size={20} strokeWidth={2} />
        </button>

        {/* Category Tag */}
        <span
          className="inline-block text-xs font-semibold text-[#e4002b] uppercase tracking-wide"
          style={{
            background: '#f4f4f4',
            border: '1px solid #dad6cf',
            borderRadius: '20px',
            padding: '3px 10px',
            fontSize: '11px',
          }}
        >
          {category}
        </span>

        {/* Title */}
        <h1
          className="mt-2 font-extrabold text-[#212121]"
          style={{ fontSize: '22px', lineHeight: '1.2' }}
        >
          {title}
        </h1>

        {/* Description */}
        <p className="mt-1 text-sm text-[#656565] leading-relaxed">
          {description}
        </p>

        {/* Tags Row */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-[6px] mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block text-[#e4002b] font-semibold"
                style={{
                  background: '#f4f4f4',
                  border: '1.5px solid #dad6cf',
                  borderRadius: '20px',
                  padding: '3px 11px',
                  fontSize: '12px',
                  lineHeight: '1',
                }}
              >
                {tag}
              </span>
            ))}
            {showMoreTag && (
              <span
                className="inline-block text-white font-semibold bg-[#e4002b]"
                style={{
                  borderRadius: '20px',
                  padding: '3px 11px',
                  fontSize: '12px',
                  lineHeight: '1',
                }}
              >
                +{tags.length}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
