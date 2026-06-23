import Topbar from '../../components/Topbar'
import TagsRow from '../../components/TagsRow'
import { Star, Download } from 'lucide-react'

const headsetSvg = (
  <svg viewBox="0 0 100 100" fill="white" opacity="0.3" style={{ width: '70px', height: '70px' }}>
    <circle cx="50" cy="35" r="14" />
    <rect x="34" y="30" width="4" height="10" rx="2" />
    <path d="M50 51 L50 51 C38 51 28 58 28 68 L28 85 L72 85 L72 68 C72 58 62 51 50 51Z" />
  </svg>
)

export default function VneshniyVidArticle() {
  const tags = [
    '#Обслуживание',
    '#GE',
    '#ВСЕГЕРГЕ',
    '#Georgia',
    '#Грузия',
    '#AM',
    '#Armenia',
    '#Армения',
    '#AZ',
    '#Azerbaijan',
    '#Азербайджан',
    '#KZ',
    '#Kazakhstan',
    '#Казахстан',
    '#RU',
    '#Россия',
    '#BY',
    '#Беларусь',
    '#KG',
    '#Kyrgyzstan',
    '#Кыргызстан',
  ]

  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Обслуживание', href: '/standards/obsluzhivanie' },
          { label: 'Стандарты внешнего вида и гигиены' },
        ]}
      />

      <div className="px-7 pb-16" style={{ paddingTop: '28px' }}>
        {/* Article Header Card */}
        <div
          className="flex overflow-hidden bg-white relative"
          style={{
            border: '1.5px solid #f2f1ef',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            marginBottom: '20px',
            maxWidth: '860px',
          }}
        >
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: '130px',
              background: 'linear-gradient(160deg, #c8a888 0%, #a07858 50%, #6c4830 100%)',
            }}
          >
            {headsetSvg}
          </div>
          <div className="flex-1 relative" style={{ padding: '18px 20px 14px' }}>
            <button
              className="absolute top-3 right-3 text-[#dad6cf] hover:text-[#e4002b] transition-colors duration-150"
              aria-label="В избранное"
            >
              <Star size={20} strokeWidth={2} />
            </button>
            <a
              href="/standards/obsluzhivanie"
              className="inline-block text-[#e4002b] font-semibold uppercase tracking-wide hover:no-underline"
              style={{
                background: '#f4f4f4',
                border: '1px solid #dad6cf',
                borderRadius: '20px',
                padding: '3px 12px',
                fontSize: '12px',
                marginBottom: '8px',
              }}
            >
              Обслуживание
            </a>
            <h1
              className="mt-2 font-extrabold text-[#212121]"
              style={{ fontSize: '24px', lineHeight: '1.15', letterSpacing: '-0.02em', marginBottom: '8px' }}
            >
              Стандарты внешнего вида и гигиены
            </h1>
            <p className="text-[13px] text-[#656565] leading-relaxed">
              Требования к внешнему виду, гигиене, униформе и маникюру сотрудников ресторана
            </p>
          </div>
        </div>

        {/* Tags Row */}
        <div style={{ marginBottom: '28px', maxWidth: '860px' }}>
          <TagsRow tags={tags} showMore={3} actions />
        </div>

        {/* Article Body */}
        <div className="max-w-[860px]" style={{ lineHeight: '1.7', color: '#212121' }}>

          {/* Введение */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3' }}>
            Введение
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Чтобы быть &quot;Динамично развивающимся блестящим Брендом&quot;, мы должны позаботиться о том, чтобы рестораны были чистыми, гостеприимными, выполнение заказов – точным, здания и оборудование – в отличном состоянии, продукты – неизменного высокого качества, а обслуживание – быстрым.
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Команды наших ресторанов представляют Гостю наш Бренд. Внешний вид и поведение сотрудников являются ключевыми факторами, определяющими представление Гостя обо всех членах команд ресторана, о наших ресторанах и нашем Бренде.
          </p>

          {/* Стандарты */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Стандарты
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Члены команды должны неукоснительно соблюдать стандарты гигиены, к которым относятся:
          </p>

          {/* Униформа */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '22px', marginBottom: '8px' }}>
            Униформа
          </h3>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
              <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
              В начале каждой смены сотрудники должны переодеться в чистую униформу, включая обувь.
            </li>
            <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
              <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
              Униформа сотрудников должна быть чистой, чтобы избежать загрязнения пищевых продуктов, оборудования, посуды, инвентаря, одноразовых упаковочных материалов и столовых приборов.
            </li>
            <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
              <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
              Сотрудники, занимающиеся приготовлением продукции, при входе в производственную зону надевают санитарную одежду (фартук, сеточку для волос/бейсболку/бандану). Дополнительно сотрудники надевают одноразовые фартуки и перчатки.
            </li>
            <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
              <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
              Женщина может носить хиджаб по религиозным соображениям в качестве утвержденной фиксации для волос. Допустимо ношение однотонных хиджабов (рекомендуется черный и красный цвета) без бахромы и каких-либо украшений/узоров.
              <ul style={{ margin: '4px 0 4px 16px', padding: 0, listStyle: 'none' }}>
                <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                  <span style={{ position: 'absolute', left: '2px' }}>&ndash;</span>
                  Хиджабы должны содержаться в чистоте и в хорошем состоянии (без потрепанных краев, кисточек и т. д.,), чтобы предотвратить загрязнение пищи и попадание в оборудование. Не допускается использование булавок, украшений, аналогичных предметов.
                </li>
              </ul>
            </li>
            <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
              <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
              При работе с продуктом (станции Панировка, Кухня) допустимо носить униформу с длинным рукавом (только для сотрудников, кому необходимо носить длинный рукав по религиозным причинам), при условии ношения одноразовых нарукавников поверх рукавов.
            </li>
            <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
              <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
              На выходах из производственной зоны необходимо разместить крючки для фартуков сотрудников соответствующей зоны и промаркировать их &quot;Для санитарной одежды&quot;. Сотрудники зоны панировки не должны работать на станции сандвичей и кассе. При выполнении уборки на рабочем месте и посещении туалета фартук необходимо снимать. Дополнительно, при посещении туалета сотрудники снимают сеточку для волос/бейсболку/бандану и надевают одноразовый халат.
            </li>
            <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
              <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
              Перед работой с готовой к употреблению пищей фартуки, загрязненные сырыми продуктами животного происхождения, необходимо выбросить или заменить.
            </li>
            <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
              <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
              Личные вещи сотрудников (например, куртки, телефоны, ключи и т. п.) должны храниться в специально предназначенном месте в ресторане, чтобы избежать загрязнения пищевых продуктов, оборудования, посуды, инвентаря, одноразовых упаковочных материалов и столовых приборов.
            </li>
          </ul>

          {/* Украшения */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '22px', marginBottom: '8px' }}>
            Украшения
          </h3>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Сотрудники не должны носить украшения на руках, в том числе медицинские или религиозные браслеты, обручальные кольца.',
              'Допускается носить религиозные символы (например, крестик) на шнурке на шее под униформой. Носить цепочки не допускается.',
              'Менеджеры и сотрудники не могут носить наручные часы.',
              'Не допускается ношение бус, серег, пирсинга на видимых частях тела',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Волосы */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '22px', marginBottom: '8px' }}>
            Волосы
          </h3>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Волосы должны быть чистыми',
              'Волосы, спадающие на воротник, должны стягиваться назад и закрепляться под головным убором. Челки недопустимы.',
              'Члены команды ресторана должны ежедневно чисто бриться.',
              'Члены команды ресторана не носят бород или бородок (эспаньолок).',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Волосы на лице */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '22px', marginBottom: '8px' }}>
            Волосы на лице
          </h3>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Государственные нормативные требования для сотрудников ресторанов относительно волос на лице имеют преимущественную силу.',
              'Волосы на лице делятся на четыре категории: усы, эспаньолки, бакенбарды и бороды.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            <strong>Определения:</strong>
          </p>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Усы – волосы, растущие на верхней губе под носом. Могут опускаться по бокам рта, а также примыкать к бороде или эспаньолке.',
              'Эспаньолка – небольшая борода, расположенная на подбородке и имеющая клиновидную форму. Ограничена подбородком и/или примыкает к усам.',
              'Бакенбарды - волосы на щеке рядом с ухом.',
              'Борода – волосы на лице, покрывающие подбородок и боковые части лица, могут примыкать к усам и бакенбардам.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Face illustrations placeholder */}
          <div style={{ margin: '16px 0 8px' }}>
            <div
              className="flex items-center justify-center"
              style={{
                maxWidth: '100%',
                height: 'auto',
                minHeight: '200px',
                background: 'linear-gradient(135deg, #d6cfc8 0%, #b0a89e 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '60px', height: '60px', opacity: 0.3 }}>
                <ellipse cx="40" cy="30" rx="16" ry="18" fill="#fff" />
                <path d="M16 75c0-18 10-30 24-30s24 12 24 30" fill="#fff" />
              </svg>
            </div>
          </div>

          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Усы и/или эспаньолки, бороды должны быть закрыты сеткой для бороды (набородник). Сетка надевается при входе в зону приготовления продукции и выбрасывается при выходе из неё.',
              'Требования распространяются на сотрудников и всех посетителей (представителей руководящей группы, вышестоящих руководителей ресторана, подрядчиков, инспекторов, сотрудников службы по борьбе с вредителями и т. п.).',
              'При работе в зоне обслуживания гостей наличие волос на лице, которые необходимо закрывать сеткой для бороды, не допускается.',
              'Допускается не использовать сетку для бороды при наличии щетины не более 3 мм.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Ногти */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '22px', marginBottom: '8px' }}>
            Ногти на руках и накладные ресницы
          </h3>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Ногти сотрудников должны быть подстриженными и аккуратными, с гладкими краями.',
              'Сотрудникам не разрешается использовать накладные, наклеенные и акриловые ногти или приходить с покрытыми лаком ногтями, включая шеллак.',
              'Ношение накладных/нарощенных ресниц не допускается.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Макияж и татуировки */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '22px', marginBottom: '8px' }}>
            Макияж и татуировки
          </h3>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Макияж должен быть свежим и естественного вида (пастельных, т.е. не ярких тонов). Применение одеколона или духов должно быть умеренным.',
              'Наличие татуировок у сотрудников KFC допустимо. Татуировки недопустимы, если покрывают большую часть тела, носят оскорбительный или агрессивный характер',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Мытье и дезинфицирование рук */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '22px', marginBottom: '8px' }}>
            Мытье и дезинфицирование рук
          </h3>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Сотрудники должны мыть руки, используя специально выделенные для этого раковины.
          </p>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Запрещается использовать для мытья рук трехсекционные мойки, мойки для продуктов, хозяйственные или другие мойки, не предназначенные для этого.',
              'Нельзя мыть руки, когда на них надеты одноразовые перчатки.',
              'Перед мытьем рук перчатки необходимо снять и выбросить.',
              'Перед выполнением работы, требующей использования перчаток, необходимо вымыть руки с использованием антибактериального мыла, продезинфицировать их и только после этого надеть перчатки.',
              'Для работы с сырой (охлажденной или замороженной) продукцией животного происхождения (с использованием перчаток или без них) сотруднику, выполняющему эту работу, должна выделяться специальная раковина для мытья рук. Остальные сотрудники, не работающие с продукцией животного происхождения, не должны использовать данную раковину для мытья рук.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Ознакомьтесь с памятками */}
          <div
            style={{
              background: '#f4f4f4',
              border: '1.5px solid #f2f1ef',
              borderRadius: '8px',
              padding: '14px 18px',
              margin: '20px 0 10px',
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px' }}>Ознакомьтесь с памятками по униформе</div>
            {/* PDF 1 */}
            <a
              href="/pdfs/Памятка по униформе (новый дизайн) 29.03.22.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 no-underline transition-colors duration-150"
              style={{
                border: '1.5px solid #f2f1ef',
                borderRadius: '8px',
                padding: '12px 16px',
                margin: '8px 0',
                background: '#fff',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fff5f6'
                e.currentTarget.style.borderColor = '#f0b0b8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.borderColor = '#f2f1ef'
              }}
            >
              <svg className="flex-shrink-0" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '36px', height: '44px' }}>
                <rect x="1" y="1" width="28" height="38" rx="3" fill="#fff" stroke="#e4002b" strokeWidth="1.5" />
                <path d="M7 1v8H1" fill="none" stroke="#e4002b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="16" y="24" width="19" height="14" rx="3" fill="#e4002b" />
                <text x="18.5" y="35" fontFamily="Arial,sans-serif" fontSize="7" fontWeight="700" fill="#fff">PDF</text>
                <line x1="7" y1="20" x2="22" y2="20" stroke="#ddd" strokeWidth="1.2" />
                <line x1="7" y1="24" x2="16" y2="24" stroke="#ddd" strokeWidth="1.2" />
                <line x1="7" y1="28" x2="14" y2="28" stroke="#ddd" strokeWidth="1.2" />
              </svg>
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#e4002b', lineHeight: '1.4' }}>
                  Памятка по униформе (новый дизайн) 29.03.22.pdf
                </div>
                <div style={{ fontSize: '12px', color: '#656565', marginTop: '2px' }}>– 1 MB</div>
              </div>
              <Download size={18} className="text-[#656565] flex-shrink-0" />
            </a>
            {/* PDF 2 */}
            <a
              href="/pdfs/Памятка по униформе (старый дизайн) 29.03.22.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 no-underline transition-colors duration-150"
              style={{
                border: '1.5px solid #f2f1ef',
                borderRadius: '8px',
                padding: '12px 16px',
                margin: '8px 0',
                background: '#fff',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fff5f6'
                e.currentTarget.style.borderColor = '#f0b0b8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.borderColor = '#f2f1ef'
              }}
            >
              <svg className="flex-shrink-0" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '36px', height: '44px' }}>
                <rect x="1" y="1" width="28" height="38" rx="3" fill="#fff" stroke="#e4002b" strokeWidth="1.5" />
                <path d="M7 1v8H1" fill="none" stroke="#e4002b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="16" y="24" width="19" height="14" rx="3" fill="#e4002b" />
                <text x="18.5" y="35" fontFamily="Arial,sans-serif" fontSize="7" fontWeight="700" fill="#fff">PDF</text>
                <line x1="7" y1="20" x2="22" y2="20" stroke="#ddd" strokeWidth="1.2" />
                <line x1="7" y1="24" x2="16" y2="24" stroke="#ddd" strokeWidth="1.2" />
                <line x1="7" y1="28" x2="14" y2="28" stroke="#ddd" strokeWidth="1.2" />
              </svg>
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#e4002b', lineHeight: '1.4' }}>
                  Памятка по униформе (старый дизайн) 29.03.22.pdf
                </div>
                <div style={{ fontSize: '12px', color: '#656565', marginTop: '2px' }}>– 1.83 MB</div>
              </div>
              <Download size={18} className="text-[#656565] flex-shrink-0" />
            </a>
          </div>

          {/* Правила мытья рук */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Правила мытья рук
          </h2>
          <ol style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none', counterReset: 'ol-c' }}>
            {[
              'Намочить руки под струей теплой воды (40 ± 2 °C)',
              'Используя антибактериальное мыло, тщательно намылить руки (антибактериальное мыло используется в дополнение к дезинфицирующему средству для рук).',
              'Тщательно вымыть руки, включая запястья, тыльные стороны ладоней, области между пальцами и вокруг ногтей.',
              'Намыливать руки нужно не менее 10 секунд.',
              'Ополоснуть руки под струей теплой воды (40 ± 2 °C).',
              'Вытереть руки чистым одноразовым бумажным полотенцем.',
              'Если раковина не является бесконтактной, необходимо закрыть кран с помощью этого же бумажного полотенца.',
              'Выбросить бумажное полотенце в предназначенное для этого мусорное ведро с автоматическим открыванием крышки или без крышки, установленное рядом с раковиной для мытья рук.',
              'Не допускается использовать сушилки для рук.',
              'Нанести одобренное дезинфицирующее средство на ладони',
              'Протереть руки дезинфицирующим средством, покрывая всю поверхность рук и пальцев, пока руки не высохнут.',
            ].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: '14px', padding: '4px 0 4px 26px', position: 'relative', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span style={{ position: 'absolute', left: 0, fontWeight: 600, color: '#212121', minWidth: '22px' }}>{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>

          {/* Правила мытья рук при ношении нарукавников */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Правила мытья рук при ношении одноразовых нарукавников
          </h2>
          <ol style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none', counterReset: 'ol-c' }}>
            {[
              'Снять одноразовые перчатки (при использовании) и нарукавники.',
              'Закатать рукава до локтя.',
              'Намочить руки под струей теплой воды (40 ± 2 °C)',
              'Используя антибактериальное мыло, тщательно намылить руки (антибактериальное мыло используется в дополнение к дезинфицирующему средству для рук).',
              'Тщательно вымыть руки, включая запястья, тыльные стороны ладоней, области между пальцами и вокруг ногтей.',
              'Намыливать руки нужно не менее 10 секунд.',
              'Ополоснуть руки под струей теплой воды (40 ± 2 °C).',
              'Вытереть руки чистым одноразовым бумажным полотенцем.',
              'Если раковина не является бесконтактной, необходимо закрыть кран с помощью этого же бумажного полотенца.',
              'Выбросить бумажное полотенце в предназначенное для этого мусорное ведро с автоматическим открыванием крышки или без крышки, установленное рядом с раковиной для мытья рук.',
              'Не допускается использовать сушилки для рук.',
              'Нанести одобренное дезинфицирующее средство на ладони',
              'Протереть руки дезинфицирующим средством, покрывая всю поверхность рук и пальцев, пока руки не высохнут.',
              'Опустить рукава, используя чистое бумажное полотенце, не касаясь рукавов руками (если касания не удалось избежать - повторно вымыть и продезинфицировать руки).',
              'Надеть новые нарукавники и перчатки (если необходимо).',
            ].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: '14px', padding: '4px 0 4px 26px', position: 'relative', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span style={{ position: 'absolute', left: 0, fontWeight: 600, color: '#212121', minWidth: '22px' }}>{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>

          {/* Alert blocks */}
          <div
            className="flex items-start gap-2"
            style={{
              background: '#fff0f0',
              border: '1.5px solid #f5c0c0',
              borderLeft: '4px solid #e4002b',
              borderRadius: '6px',
              padding: '12px 16px',
              margin: '12px 0',
              fontSize: '13px',
              fontWeight: 600,
              color: '#8b0000',
              lineHeight: '1.5',
            }}
          >
            <span className="flex-shrink-0" style={{ marginTop: '1px' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L1 16h16L9 1z" fill="#e4002b" />
                <path d="M9 7v4M9 13h.01" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            Не использовать дезинфицирующее средство предварительно не вымыв руки!
          </div>
          <div
            className="flex items-start gap-2"
            style={{
              background: '#fff0f0',
              border: '1.5px solid #f5c0c0',
              borderLeft: '4px solid #e4002b',
              borderRadius: '6px',
              padding: '12px 16px',
              margin: '12px 0',
              fontSize: '13px',
              fontWeight: 600,
              color: '#8b0000',
              lineHeight: '1.5',
            }}
          >
            <span className="flex-shrink-0" style={{ marginTop: '1px' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L1 16h16L9 1z" fill="#e4002b" />
                <path d="M9 7v4M9 13h.01" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            Не ополаскивать руки и не вытирать бумажным полотенцем после дезинфекции!
          </div>

          {/* Полное мытье рук */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Полное мытье рук (мытье, ополаскивание, вытирание полотенцем и использование дезинфицирующего средства для рук) выполняется во всех нижеперечисленных случаях:
          </h2>

          <p style={{ fontSize: '14px', fontWeight: 700, margin: '16px 0 6px' }}>Перед:</p>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Контактом с пищевыми продуктами, упаковкой, посудой, инвентарем или поверхностями, контактирующими с пищевыми продуктами.',
              'Надеванием одноразовых перчаток для работы с пищевыми продуктами, включая смену перчаток.',
              'Обработкой пореза или раны',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          <p style={{ fontSize: '14px', fontWeight: 700, margin: '16px 0 6px' }}>После:</p>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Посещения туалета и еще раз при возвращении в служебную зону/на кухню - «двойное мытье рук».',
              'Прихода на работу и после переодевания в униформу, надевания фартука.',
              'Каждого возвращения в служебную зону (кроме официантов, сотрудников зала).',
              'Обработки пореза или раны.',
              'Работы с непродовольственными товарами (химические средства, транспортная упаковка).',
              'Работы с сырыми продуктами животного происхождения/ белковыми и перед контактом с готовой к употреблению пищей или поверхностями, контактирующими с готовой к употреблению пищей.',
              'Перерыва в работе.',
              'Прикосновения к лицу, волосам, униформе, одноразовому халату, фартуку, телефону, другим людям, например, при рукопожатии.',
              'Выполнения задач, не связанных с контактом с пищевыми продуктами, таких как операции с наличными, работа на компьютере, вынос мусора, поднятие предметов с пола, мытье грязной посуды, подметание, уборка общих и производственных помещений, туалетов, протирание столов.',
              'Кашля, чихания, сморкания или использования одноразовых носовых платков.',
              'Курения, приема пищи или напитков.',
              'Каждого возможного загрязнения рук',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Использование перчаток */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Использование перчаток/одноразовых нарукавников при работе с продуктами
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Согласно стандартам YUM для определенных процедур необходимо использовать перчатки. Разрешается использовать только утвержденные одноразовые перчатки/нарукавники.
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Вымойте руки, придерживаясь стандартной процедуры, прежде чем надеть новую пару одноразовых перчаток/нарукавников.
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Нельзя выполнять в перчатках/нарукавниках следующие процедуры:
          </p>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'операции с наличностью',
              'прием оплаты',
              'пересчет наличности',
              'пользование туалетом',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Одноразовые перчатки/нарукавники необходимо заменить после:
          </p>
          <ul style={{ margin: '0 0 12px 0', padding: 0, listStyle: 'none' }}>
            {[
              'касания тела другого человека',
              'кашля/чихания',
              'приема пищи/напитков/курения',
              'контакта с грязным: оборудованием, поверхностью, одеждой, фартуком итд.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.65' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Выбрасывайте перчатки/нарукавники, если они повреждены или испачканы.
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Меняйте одноразовые перчатки/нарукавники не реже, чем раз в час.
          </p>

          {/* Alert blocks */}
          <div
            className="flex items-start gap-2"
            style={{
              background: '#fff0f0',
              border: '1.5px solid #f5c0c0',
              borderLeft: '4px solid #e4002b',
              borderRadius: '6px',
              padding: '12px 16px',
              margin: '12px 0',
              fontSize: '13px',
              fontWeight: 600,
              color: '#8b0000',
              lineHeight: '1.5',
            }}
          >
            <span className="flex-shrink-0" style={{ marginTop: '1px' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L1 16h16L9 1z" fill="#e4002b" />
                <path d="M9 7v4M9 13h.01" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            Перчатки никогда не используются во время мытья рук.
          </div>
          <div
            className="flex items-start gap-2"
            style={{
              background: '#fff0f0',
              border: '1.5px solid #f5c0c0',
              borderLeft: '4px solid #e4002b',
              borderRadius: '6px',
              padding: '12px 16px',
              margin: '12px 0',
              fontSize: '13px',
              fontWeight: 600,
              color: '#8b0000',
              lineHeight: '1.5',
            }}
          >
            <span className="flex-shrink-0" style={{ marginTop: '1px' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L1 16h16L9 1z" fill="#e4002b" />
                <path d="M9 7v4M9 13h.01" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            Перчатки необходимо использовать для защиты продуктов, которые вы используете.
          </div>
          <div
            className="flex items-start gap-2"
            style={{
              background: '#fff0f0',
              border: '1.5px solid #f5c0c0',
              borderLeft: '4px solid #e4002b',
              borderRadius: '6px',
              padding: '12px 16px',
              margin: '12px 0',
              fontSize: '13px',
              fontWeight: 600,
              color: '#8b0000',
              lineHeight: '1.5',
            }}
          >
            <span className="flex-shrink-0" style={{ marginTop: '1px' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L1 16h16L9 1z" fill="#e4002b" />
                <path d="M9 7v4M9 13h.01" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            Перчатки не предназначены для защиты ваших рук от загрязнения.
          </div>

          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Подробную информацию по стандартам внешнего вида, гигиены сотрудников, мытью рук, работы с одноразовыми перчатками /нарукавниками ты можешь найти в CSL RFSS.
          </p>

        </div>
      </div>
    </div>
  )
}
