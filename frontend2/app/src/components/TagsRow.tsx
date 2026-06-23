interface TagsRowProps {
  tags: string[]
  showMore?: number
  actions?: boolean
}

export default function TagsRow({ tags, showMore, actions }: TagsRowProps) {
  const visibleTags = showMore ? tags.slice(0, showMore) : tags
  const remainingCount = showMore ? tags.length - showMore : 0

  return (
    <div className="flex items-center justify-between flex-wrap gap-2">
      <div className="flex flex-wrap gap-[6px]">
        {visibleTags.map((tag, index) => (
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
        {remainingCount > 0 && (
          <span
            className="inline-block text-white font-semibold bg-[#e4002b]"
            style={{
              borderRadius: '20px',
              padding: '3px 11px',
              fontSize: '12px',
              lineHeight: '1',
            }}
          >
            +{remainingCount}
          </span>
        )}
      </div>

      {actions && (
        <div className="flex items-center gap-3">
          <button className="text-[13px] font-semibold text-[#656565] hover:text-[#212121] transition-colors duration-150">
            Экспорт
          </button>
          <button className="text-[13px] font-semibold text-[#656565] hover:text-[#212121] transition-colors duration-150">
            Печать
          </button>
        </div>
      )}
    </div>
  )
}
