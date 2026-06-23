import { AlertTriangle } from 'lucide-react'
import Topbar from '@/components/Topbar'
import ArticleHeader from '@/components/ArticleHeader'
import TagsRow from '@/components/TagsRow'

const HeadsetSvg = () => (
  <svg viewBox="0 0 100 100" fill="white" opacity="0.3" className="w-14 h-14">
    <circle cx="50" cy="35" r="14" />
    <rect x="34" y="30" width="4" height="10" rx="2" />
    <path d="M50 51 C38 51 28 58 28 68 L28 85 L72 85 L72 68 C72 58 62 51 50 51Z" />
  </svg>
)

const PdfSvg = () => (
  <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <rect width="36" height="44" rx="4" fill="#fff0f2" />
    <rect x="0.75" y="0.75" width="34.5" height="42.5" rx="3.25" stroke="#e4002b" strokeWidth="1.5" />
    <text x="18" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#e4002b">PDF</text>
    <line x1="8" y1="28" x2="28" y2="28" stroke="#e4002b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="33" x2="24" y2="33" stroke="#e4002b" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const primaryTags = ['#Обслуживание']
const secondaryTags = [
  'GE Georgia Грузия',
  'AM Armenia Армения',
  'AZ Azerbaijan Азербайджан',
  'KZ Kazakhstan Казахстан',
  'KG Kyrgyzstan Кыргызстан',
  'UZ Uzbekistan Узбекистан',
  'TJ Tajikistan',
]

export default function CrpArticle() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Обслуживание', href: '/standards/obsluzhivanie' },
          { label: 'CRP (Customer Recovery Process)' },
        ]}
      />

      <div style={{ padding: '28px 36px 60px' }}>
        <ArticleHeader
          photoGradient="linear-gradient(150deg, #c84830 0%, #982010 50%, #601008 100%)"
          category="Обслуживание"
          title="CRP (Customer Recovery Process)"
          description="Сustomer Recovery Process — это автоматическая система обработки обращений от наших Гостей из всех возможных источников"
          tags={[]}
          svgContent={<HeadsetSvg />}
        />

        <div className="mt-5" />

        <TagsRow tags={[...primaryTags, ...secondaryTags]} showMore={8} actions />

        <div style={{ maxWidth: '860px', color: '#212121' }} className="mt-7">

          {/* ВВЕДЕНИЕ */}
          <h2 className="text-lg font-extrabold mt-0 mb-3 leading-tight pt-0 border-t-0">
            ВВЕДЕНИЕ
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Обратная связь от Гостей – это подарок и возможность не просто вернуть расположение недовольного Гостя, улучшить сервис, качество продукта, скорость, точность и т. д. Это еще и сверхэффективный инструмент, который позволяет узнать, что важно для наших Гостей, что необходимо улучшить не только в конкретном ресторане, но и на уровне бренда.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Получая обратную связь от Гостей, очень важно:
          </p>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              'Быстро и эффективно коммуницировать с Гостем',
              'Вернуть лояльность Гостя',
              'Провести детальный анализ проблемы и сделать все возможное для исправления',
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm py-1 relative"
                style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span className="absolute left-0 font-semibold min-w-[22px]" style={{ counterReset: i === 0 ? 'none' : undefined }}>
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Все обращения, в том числе и жалобы без прямого влияния ресторанов, крайне важны для улучшения бизнеса. Вы, руководители, должны знать абсолютно все преимущества и недостатки. Используйте эту обратную связь для анализа и предоставления обратной связи в соответствующие департаменты: например, о различных каналах продаж, меню, маркетинговых активностях и т. д. Ваша обратная связь будет бесценна и крайне важна на улучшения на уровне всего бренда.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            И даже если Гость ошибся сам, используйте и эту возможность просто позвонить и поговорить, рассказать о нашем замечательном продукте, о новинках и пригласить в ваш ресторан.
          </p>

          {/* ИСТОЧНИКИ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ИСТОЧНИКИ ОБРАТНОЙ СВЯЗИ
          </h2>
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            <strong>Сustomer Recovery Process (CRP)</strong> — это автоматическая система обработки обращений от наших Гостей из всех возможных источников.
          </div>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Обращения Гостей попадают в систему из следующих источников:
          </p>

          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr>
                <th className="text-left p-2.5 font-bold text-white border" style={{ background: '#f07020', borderColor: '#c85010', fontSize: '14px' }}>Источник</th>
                <th className="text-left p-2.5 font-bold text-white border" style={{ background: '#f07020', borderColor: '#c85010', fontSize: '14px' }}>Описание</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['GES (guest experience survey)', 'Опрос на странице www.kfcfeedbackrus.com (если твой ресторан находится не в России, вебсайт может отличаться), заполняя который, Гости могут поделиться с нами своими впечатлениями от посещения ресторана. Любой отзыв Гостя с оценкой от 1 до 4, будет считаться жалобой'],
                ['Сайт KFC', 'Обращения, которые оставляют Гости, заполнив специальную форму, на сайте KFC'],
                ['INTERNET KFC - социальные сети (social networks)', 'Служба мониторинга вносит в CRP все обращения Гостей, которые они оставляют во всех официальных группах соцсетей Бренда (Twitter, Facebook, Вконтакте).'],
                ['Contact center', 'Обращения Гостей, получаемые через звонки в единый contact center.'],
                ['Агрегаторы Доставки', 'Обращения Гостей, которые они оставляют при оформлении заказа на доставку'],
                ['Chat bot INTERNET', <>Чат бот в мобильном приложении*<br />действует не во всех городах</>],
                ['Приложение KFC', 'Этой формой обратной связи Гости могут воспользоваться после размещения заказа через приложение (на самовывоз или доставку). Любой отзыв Гостя с оценкой от 1 до 4 звезд, будет считаться жалобой'],
              ].map(([src, desc], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f4' }}>
                  <td className="font-bold p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>{src}</td>
                  <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* КАНАЛЫ ПРОДАЖ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            КАНАЛЫ ПРОДАЖ
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            При анализе жалоб (выгрузка из GSD), используйте фильтр - Канал продаж.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Существуют следующие каналы продаж:
          </p>
          <ul className="space-y-1 my-3">
            {['В зале', 'Доставка', 'Киоск', 'На вынос', 'С&C', 'Экспресс Окно'].map((item) => (
              <li key={item} className="relative pl-6 text-sm" style={{ lineHeight: '1.55' }}>
                <span className="absolute left-0 text-kfc-red font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-kfc-red text-white rounded-lg p-4 my-4 flex gap-3 items-start text-sm font-bold">
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
            <div><strong>Важно!</strong> Только для канала продаж - Доставка указывается ПРИЧИНА.</div>
          </div>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Для анализа закрытых жалоб (выгрузка из GSD), по каналу продаж - Доставка, используйте фильтр - Причина.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Существуют следующие ПРИЧИНЫ по Каналу продаж - Доставка:
          </p>
          <div className="border-[1.5px] border-[#bbb] rounded p-3.5 inline-block" style={{ minWidth: '260px' }}>
            <ul className="space-y-1">
              {['Ошибка ресторана', 'Ошибка курьерской службы', 'Ошибка обеих сторон', 'Ошибка колл-центра', 'Манипуляции гостя', 'Техническая ошибка', 'Другое'].map((item) => (
                <li key={item} className="relative pl-6 text-sm font-bold" style={{ lineHeight: '1.55' }}>
                  <span className="absolute left-0 text-kfc-red font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ЖИЗНЕННЫЙ ЦИКЛ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ЖИЗНЕННЫЙ ЦИКЛ ОБРАЩЕНИЯ
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В зависимости от источника обратной связи, обращение Гостя, попавшее в CRP, имеет строго определенный цикл существования и проходит определенные этапы:
          </p>

          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr style={{ background: '#f07020', color: '#fff' }}>
                <th className="text-left p-2.5 font-bold border" style={{ borderColor: '#c85010' }}>ЭТАП</th>
                <th className="text-left p-2.5 font-bold border" style={{ borderColor: '#c85010' }}>ОТВЕТСТВЕННОЕ ЛИЦО</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['РЕГИСТРАЦИЯ ОБРАЩЕНИЯ В GSD', 'Модераторы внешнего агентства/ автоматически/ колл-центр'],
                ['КЛАССИФИКАЦИЯ', 'Модераторы внешнего агентства'],
                ['ОБРАБОТКА', <>ИСПОЛНИТЕЛИ:<br />*РЕСТОРАН/ ТЕРРИТОРИАЛЬНЫЙ УПРАВЛЯЮЩИЙ<br />*СУПЕРВАЙЗЕР КУРЬЕРСКОЙ СЛУЖБЫ<br />*СУПЕРВАЙЗЕР КОЛЛ-ЦЕНТРА<br /><span className="inline-block bg-[#fff0e0] border-[1.5px] border-[#e8a060] rounded px-2.5 py-0.5 text-xs font-bold text-[#b04010] mt-1 mr-1">Средний уровень – 48 часов</span><span className="inline-block bg-[#fff0e0] border-[1.5px] border-[#e8a060] rounded px-2.5 py-0.5 text-xs font-bold text-[#b04010] mt-1">Высокий уровень – 24 часа</span></>],
                ['КОНТРОЛЬ', <>РУКОВОДИТЕЛИ ИСПОЛНИТЕЛЕЙ:<br />*ТЕРРИТОРИАЛЬНЫЙ УПРАВЛЯЮЩИЙ/ ММ<br />*РУКОВОДИТЕЛИ СУПЕРВАЙЗЕРОВ КУРЬЕРСКОЙ СЛУЖБЫ<br />*РУКОВОДИТЕЛИ СУПЕРВАЙЗЕРОВ КОЛЛ-ЦЕНТРА</>],
                ['ПРОВЕРКА', 'Модераторы внешнего агентства'],
                ['ЗАКРЫТИЕ ЖАЛОБЫ', 'Модераторы внешнего агентства'],
              ].map(([stage, resp], i) => (
                <tbody key={i}>
                  <tr>
                    <td className="p-2.5 border align-top font-extrabold text-xs uppercase tracking-wider" style={{ borderColor: '#e8ddd0', background: '#fdf8f4', lineHeight: '1.55' }}>{stage}</td>
                    <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>{resp}</td>
                  </tr>
                  {i < 5 && (
                    <tr>
                      <td colSpan={2} className="px-3.5 py-0.5" style={{ border: 'none', padding: '2px 14px' }}>
                        <span className="text-kfc-red text-[22px] leading-none">↓</span>
                      </td>
                    </tr>
                  )}
                </tbody>
              ))}
            </tbody>
          </table>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            <strong>КЛАССИФИКАЦИЯ</strong> - проводится внешней службой (модераторами)
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            <strong>ОБРАБОТКА</strong> - ресторанами, Территориальными Управляющими
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            <strong>КОНТРОЛЬ</strong> - Территориальными Управляющими, Маркет-менеджерами
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            <strong>ПРОВЕРКА</strong> - проводится внешней службой (модераторами)
          </p>

          {/* ПРОЦЕСС РАБОТЫ С ЖАЛОБОЙ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ПРОЦЕСС РАБОТЫ С ЖАЛОБОЙ
          </h2>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              'Обращения из источника GES минуя этап классификация сразу попадают в ресторан. Категория присваивается модератором на этапе проверки',
              'Обращения из источника Приложение KFC (C&C) сначала попадают на классификацию, где модератор присваивает жалобе Категорию. Исключения составляют обращения, оставленные гостями со старых версий приложения. В этом случае, минуя этап классификация обращения сразу попадают в ресторан с той Категорией, которую выбрал гость. В случае, если Гость определил Категорию не верно, или не выбрал ее, Категория присваивается/ меняется модератором на этапе проверки',
              'Обращения из всех остальных источников и Приложения KFC (Доставка), сначала попадают на классификацию, где модератор присваивает жалобе Категорию.',
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm py-1 relative"
                style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span className="absolute left-0 font-semibold min-w-[22px]">
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>

          {/* ЭТАП 1 */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ЭТАП 1 - КЛАССИФИКАЦИЯ
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Классификацией обращений занимается внешнее агентство. Категорию может присвоить как внешнее агентство, так и выбрать сам Гость (если обращение из источника - Приложение KFC).
          </p>
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            <strong>Важно!</strong> Категория присваивается исходя из содержания жалобы.
          </div>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Существуют следующие Категории:
          </p>

          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr>
                <th colSpan={2} className="text-left p-2.5 font-bold text-white border" style={{ background: '#f07020', borderColor: '#c85010', fontSize: '14px' }}>КАТЕГОРИИ</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1. Точность обслуживания / Точность доставки', <><strong>Пример:</strong> не корректно собранный заказ, отсутствие продукта, не предоставили Гостю чек, включили дополнительные позиции без ведома Гостя, не привезли доставку и т. д.</>],
                ['2. Скорость обслуживания', <><strong>Пример:</strong> нарушения стандартов скорости обслуживания, мало работающих касс, очередь, не готов заказ к времени заказа (если заказ сделан через приложение), опоздание курьера и т. д.</>],
                ['3. Гостеприимство', <><strong>Пример:</strong> Гость просит о чем-либо и получает отказ без объяснения причины, комплекс нарушений – отсутствие клиентоориентированности в целом (дискомфорт, невнимательность персонала к просьбам Гостей), курение сотрудников при Гостях и т. д.</>],
                ['4. Чистота', <><strong>Пример:</strong> работа с продуктом без перчаток, грязная униформа, чистота помещения, переполненные мусорные баки, отсутствие средств гигиены в туалетных комнатах, наличие грызунов и насекомых и т. д.</>],
                ['5. Техническое состояние*', <><strong>Пример:</strong> ветхость мебели, отделки помещения, не работает туалет, не работает киоск, ДМБ, экран очереди, не принимают кредитные карты, проблемы с подключением wi-fi; для приложения – все ошибки приложения, ошибки геолокации, ошибки гостя, если гость выбрал другой ресторан и т. д.</>],
                ['6. Продукт', <><strong>Пример:</strong> посторонний запах или вкус продукта, некачественная сборка, неаппетитный вид, t блюд, размер порции, сроки годности и т. д.</>],
                ['7. Безопасность', <><strong>Пример:</strong> любые жалобы на угрозу причинения вреда здоровью окружающим (драки в ресторане, травмопасность, распространение запрещённых препаратов и т. д.)</>],
                ['8. Люди', <><strong>Пример:</strong> любые жалобы на сотрудников ресторана, на некорректное поведение охранников, уборщиц и т. д.</>],
              ].map(([cat, desc], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f4' }}>
                  <td className="font-bold p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55', minWidth: '220px' }}>{cat}</td>
                  <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Для анализа закрытых жалоб (выгрузка из GSD) Категории - Техническое состояние, используйте фильтр - Канал продаж.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            <strong>Пример:</strong>
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Для канала продаж "C&C" категория Техническое состояние – это ошибки геолокации или Гостя при выборе ресторана, любые проблемы, связанные с оплатой, отзывы Гостей о некорректной работе приложения и т. д.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Для канала продаж "В Зале" категория Техническое состояние – это ветхость мебели, не работающий экран очереди, сломанный туалет и т. д.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Помимо классификации по категориям, жалобы классифицируются по Уровню влияния:
          </p>

          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr>
                <th colSpan={2} className="text-left p-2.5 font-bold text-white border" style={{ background: '#f07020', borderColor: '#c85010', fontSize: '14px' }}>УРОВНИ ВЛИЯНИЯ</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#fff' }}>
                <td className="p-2.5 border align-top font-extrabold" style={{ borderColor: '#e8ddd0', lineHeight: '1.55', minWidth: '120px', color: '#e08000' }}>СРЕДНИЙ</td>
                <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>
                  К обращениям среднего уровня влияния относятся все обращения Гостей, не имеющие отношения к пищевой, финансовой и юридической безопасности.<br /><br />Пример: «Грязные подносы, остывшее блюдо, медленная скорость обслуживания, не доложили картофель в заказ» и т. д
                </td>
              </tr>
              <tr style={{ background: '#fdf8f4' }}>
                <td className="p-2.5 border align-top font-extrabold" style={{ borderColor: '#e8ddd0', lineHeight: '1.55', color: '#e4002b' }}>ВЫСОКИЙ</td>
                <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>
                  К обращениям высокого уровня влияния относятся все обращения Гостей, влияющие на пищевую, финансовую и юридическую безопасность.<br /><br />Пример: «Вчера получил пищевое отравление после употребления стрипсов с колой, до сих пор плохо себя чувствую» и т. д
                </td>
              </tr>
              <tr style={{ background: '#fff' }}>
                <td className="p-2.5 border align-top font-extrabold" style={{ borderColor: '#e8ddd0', lineHeight: '1.55', color: '#e4002b' }}>КРИТИЧЕСКИЙ</td>
                <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>
                  К обращениям критического уровня влияния относятся обращения, которые решаются кризисным комитетом (LT), например, жалоба сотрудника на ресторан, обращение в Роспотребнадзор или угрозы публикации в прессе.
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Директора ресторанов и Территориальные Управляющие работают только с обращениями среднего и высокого уровней влияния.
          </p>

          {/* ЭТАП 2 */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ЭТАП 2 - ОБРАБОТКА
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            После классификации, или минуя ее (зависит от источника), обращение отправляется на обработку исполнителю (ресторану или Территориальному управляющему) в зависимости от уровня влияния обращения.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Обработка — это один из важнейших этапов. На этом этапе необходимо связаться с Гостем и решить проблему по правилу ВИП2, а также предпринять действия для ресторана, чтобы проблема в будущем не повторилась.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            О назначении жалобы исполнитель получает уведомление по электронной почте. Уведомление содержит в себе следующую информацию: дата регистрации, срок выполнения, состав ответственных лиц за обработку, контактные данные заявителя и содержание жалобы.
          </p>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Для работы с жалобами необходимо:</h3>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              'Перейти по ссылке, указанной в уведомлении. Обратите внимание, что ссылки для корпоративных и франчайзинговых ресторанов разные.',
              'Либо зайти на портал GSD – Главная страница (или Мой кабинет) – вкладку «Требует внимания»',
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm py-1 relative"
                style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span className="absolute left-0 font-semibold min-w-[22px]">
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            После регистрации откроется форма обращения.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Зайдите во вкладку «Обработка» - меню «Действие» - «Завершить Обработку», заполните поля «Решение» и сохраните обращение.
          </p>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Для звонка Гостю по жалобе, воспользуйтесь следующими правилами:</h3>

          {/* VIP2 wrap */}
          <div className="border-[1.5px] border-[#f2f1ef] rounded-lg overflow-hidden my-4">
            {[
              { icon: '👂', label: 'ВЫСЛУШАЙ', title: 'Выслушай внимательно', content: 'Отойди по возможности в то место, где не будут слышны посторонние звуки.' },
              { icon: '💬', label: 'ПОЗНАКОМЬСЯ', title: 'Спроси, как ты можешь обращаться к Гостю', content: 'Называй Гостя по имени (избегай таких обращений, как «девушка», «молодой человек»), возможно нейтральное обращение к Гостю – «Вы», «Вас», «Вам».' },
              { icon: '🙂', label: 'ИЗВИНИСЬ', title: 'Извинись искренне', phrases: ['«Извините, пожалуйста, что вам пришлось столкнуться со столь неприятной ситуацией»', '«Прошу прощения за нашу ошибку»', '«Мне очень жаль»', '«Простите, пожалуйста, что так случилось»'] },
              { icon: '👍', label: 'ПОБЛАГОДАРИ', title: 'Поблагодари за обращение', phrases: ['«Спасибо большое, что сказали нам об этом»', '«Благодарю за ваше обращение»', '«Вы правильно сделали, что позвонили нам, спасибо»', '«Спасибо, что дали нам возможность исправить свою ошибку»'] },
              { icon: '🎁', label: 'ПОРАДУЙ ПОДАРКОМ', title: 'Порадуй подарком (предложи комплимент от ресторана)', phrases: ['«Пожалуйста, при следующем посещении воспользуйтесь нашим приглашением на обед в качестве комплимента»', '«Мы хотим исправить ваше впечатление о нашем ресторане и приглашаем вас с директором и воспользоваться нашим предложением на бесплатное «блюдо» в качестве комплимента»', '«Пожалуйста, приходите к нам лично пообщаться с директором и воспользоваться нашим комплиментом специально для вас»', '«Мы рады будем видеть вас снова нашим Гостем, пожалуйста, приходите к нам на обед в качестве комплимента от нашего ресторана»'] },
            ].map((item, i) => (
              <div key={i} className="flex items-stretch border-b border-dashed border-[#ddd] last:border-b-0">
                <div className="w-[110px] min-w-[110px] flex flex-col items-center justify-center p-4 bg-[#fafafa] border-r border-dashed border-[#ddd] text-center">
                  <div className="text-[26px] mb-1 leading-none">{item.icon}</div>
                  <div className="text-[11px] font-extrabold tracking-wider">{item.label}</div>
                </div>
                <div className="flex-1 p-3.5 text-[13px]" style={{ lineHeight: '1.65' }}>
                  <div className="font-bold mb-1.5 text-sm">{item.title}</div>
                  {item.content && <div>{item.content}</div>}
                  {item.phrases && item.phrases.map((phrase, pi) => (
                    <div key={pi} className="text-[#656565] italic my-0.5">{phrase}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            После общения с гостем и проведения расследования в ресторане, заполните корректно поля: "Решение для ресторана" и "Решение для Гостя"
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Не дублируйте информацию в обоих полях.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В поле <strong>Решение для гостя</strong> – необходимо описать результат общения с Гостем. Позвонили, какая была суть разговора, остался ли Гость лоялен. Даже если не удалось вернуть лояльность Гостя, необходимо тщательным образом описать ситуацию.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В поле <strong>Решение для ресторана</strong> – необходимо указать причину жалобы, почему так произошло? Что вы предприняли, что бы ситуация не повторилась.
          </p>

          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            Если не удалось связаться с гостем, необходимо обязательно в поле "Решение для Гостя" указать в какое время и с какого телефона вы пытались дозвониться
          </div>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            <strong>Пример:</strong> До Гостя не удалось дозвониться. Звонили:
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            13.01 10:00; 14:00; 18:00 c номера телефона + 7 495 *******;
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            14.01 11:00; 15:00; 20:00 c номера телефона +7 965 *******:
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            15.01 10:00; 14:00; 18:00 c номера телефона + 7 495 *******
          </p>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Связаться с Гостем по e-mail</h3>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В тех случаях, когда не указан телефон Гостя, но указан электронный адрес в поле обращения «e-mail заявителя», вы можете ответить Гостю через портал GSD
          </p>
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            <strong>Внимание!</strong> Переписка с Гостем по электронной почте возможна только через GSD. Приписка с личных адресов - недопустима.
          </div>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В этом случае ваши действия:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Зайдите в обращение, заполните поля «Решение для ресторана», «Решение для гостя».</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Во вкладке «Действие» выберите «Отправить решение гостю по e-mail» - сделайте это только в том случае, если не указан телефон Гостя и, если вы хотите отправить ответ Гостю по электронной почте через GSD. При этом ответ Гостю будет автоматически отправлен из поля «Решение для гостей».</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Нажмите Сохранить.</li>
          </ul>

          <h4 className="text-sm font-bold mt-4 mb-1.5">Памятка - ответ Гостю по e-mail</h4>
          {/* Email template doc */}
          <div className="bg-white border border-[#ccc] rounded p-6 my-4 text-[13px] leading-relaxed max-w-[720px] shadow-md">
            <div className="flex gap-0 mb-4 border-b border-[#eee] pb-3">
              <div className="font-bold min-w-[140px] text-[13px]">ПРИВЕТСТВИЕ</div>
              <div className="text-[13px] text-[#333]">Здравствуйте/Добрый день + (обязательно имя, если есть)</div>
            </div>
            <div className="mt-3.5">
              <div className="font-bold underline text-[13px] mb-1.5">БЛАГОДАРНОСТЬ ЗА ПРЕДОСТАВЛЕННУЮ ОБРАТНУЮ СВЯЗЬ</div>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Спасибо, что нашли время и поделились с нами информацией! Мы постоянно работаем над тем, чтобы становиться лучше и лучше. И именно благодаря вам это возможным.</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Спасибо за ваш подробный отзыв! Мы очень строго следим за тем, чтобы все рестораны сети KFC соответствовали высоким стандартам качества обслуживания.</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Благодарим вас за подробную обратную связь, благодаря ей мы становимся лучше <span className="text-kfc-red font-bold">ИЛИ</span> выявили ошибки и <span className="text-kfc-red font-bold">недочеты в работе ресторана и принимаем меры для их исправления.</span></p>
            </div>
            <div className="mt-3.5">
              <div className="font-bold underline text-[13px] mb-1.5">ЕСЛИ ДО ГОСТЯ НЕ ДОЗВОНИЛИСЬ, НО ПРОВЕРКУ ПРОВЕЛИ</div>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>К сожалению, нам не удалось связаться с вами по указанному вами контактному номеру телефона +7 XXX XXX.XXXX.<br /><span className="text-kfc-red font-bold">(далее пункт РЕЗУЛЬТАТ ПРОВЕРКИ)</span></p>
            </div>
            <div className="mt-3.5">
              <div className="font-bold underline text-[13px] mb-1.5">ЕСЛИ ДО ГОСТЯ НЕ ДОЗВОНИЛИСЬ, ЧТОБЫ ЗАПРОСИТЬ ДОП. ИНФОРМАЦИЮ</div>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>К сожалению, нам не удалось связаться с вами по указанному вами контактному номеру телефона +7 XXX.XXX.XXXX. Не могли бы вы в ответном письме сообщить _____</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Мы приносим свои извинения за столь длительное ожидание. К сожалению, у нас не получилось связаться с вами по телефону. Уточните, пожалуйста, время в которое вам удобно было бы принять звонок. Надеемся на ваше понимание.</p>
            </div>
            <div className="mt-3.5">
              <div className="font-bold underline text-[13px] mb-1.5">ИЗВИНЕНИЯ ЗА НЕПРИЯТНЫЙ ОПЫТ</div>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Очень жаль, что посещение ресторана не оправдало ваших ожиданий.</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Нам очень жаль, что вы были вынуждены столкнуться (столкнулись) с подобным некорректным поведением сотрудников по телефону. Мы приносим вам свои извинения!</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Приносим вам свои извинения за допущенную неточность при сборе заказа.</p>
            </div>
            <div className="mt-3.5">
              <div className="font-bold underline text-[13px] mb-1.5">РЕЗУЛЬТАТ ПРОВЕРКИ</div>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Мы провели тщательную проверку по поводу оставленной вами обратной связи. Были изучены видеозаписи, проведен опрос работников ресторана.</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Проверка показала, что...</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Мы вынесли (штраф, замечание, иные меры) сотруднику ресторана___________, помимо этого мы провели обучение по теме «__________» с сотрудниками ресторана.</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>С менеджером, которая отказалась вас обслуживать мы провели наставническую беседу и вынесли ей дисциплинарное взыскание за некорректное поведение.</p>
            </div>
            <div className="mt-3.5">
              <div className="font-bold underline text-[13px] mb-1.5">КОМПЛИМЕНТ</div>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Мы готовы (<span className="text-kfc-red font-bold">ИЛИ хотели бы</span>) компенсировать вам этот неприятный опыт и с удовольствием приглашаем вас на обед в качестве комплимента!</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Мы приглашаем вас к нам в ресторан, чтобы сгладить неприятные впечатления и угостить прохладительным/горячим напитком/сандвичем/новинкой нашего меню!</p>
            </div>
            <div className="mt-3.5">
              <div className="font-bold underline text-[13px] mb-1.5">ПРОЩАНИЕ</div>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Спасибо, что выбрали нас! Приходите к нам снова, будем рады вас видеть!</p>
              <p className="text-[13px] mb-1.5" style={{ lineHeight: '1.65' }}>Обязательно сделаем все возможное, чтобы подобное не повторилось. Будем рады, если <span className="text-kfc-red font-bold">Вы</span> останетесь с нами.</p>
            </div>
          </div>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            После ответа от Гостя вы получите уведомление об этом на электронную почту. Обращение при этом автоматически выйдет из ожидания и вам необходимо будет закрыть его, выбрав во вкладке «Действие» - «Завершить обработку».
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Если Гость не ответил, обращение выйдет из ожидания автоматически через 48 часов, и вам необходимо будет закрыть его, выбрав во вкладке «Действие» - «Завершить обработку».
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            После завершения этапа Обработка обращение поступит на Контроль к ответственному лицу.
          </p>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Работа с жалобами высокого уровня влияния</h3>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Важнейшим фокусом в работе с жалобами является качественная работа и правильная коммуникация с гостями по жалобам высокого уровня влияния.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Некорректная или несвоевременная реакция на жалобы высокого уровня влияния может привести к кризисным ситуациям и как следствие к возможным событиям, которые могут повлиять на функционирование наших ресторанов, на наш бизнес, на репутацию Бренда Yum!
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Основная часть жалоб высокого уровня влияния приходится на качество продукции и нарушение требований пищевой безопасности.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            При получении претензии от гостя на качество и нарушение требований пищевой безопасности (обнаружение инородных предметов в продукции, пищевое отравление, недожаренная куриная продукция, качество и безопасность хлебобулочных изделий) при расследовании в ресторане используйте Памятку по работе с жалобами на качество и нарушение требований пищевой безопасности.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В Решение для ресторана (GSD) обязательно необходимо внести всю информацию по выполненным в соответствии с памяткой действиям (результатам расследования). При оформлении по результатам расследования претензии поставщику укажите её номер.
          </p>

          <a href="#" className="flex items-center gap-3 border-[1.5px] border-[#f2f1ef] rounded-lg p-3 my-2.5 no-underline bg-white hover:bg-[#fff0f2] hover:border-kfc-red max-w-[640px] transition-colors">
            <PdfSvg />
            <div>
              <span className="text-[13px] font-semibold text-kfc-red leading-snug">Памятка по работе с жалобами на качество и нарушение требований пищевой безопасности</span>
            </div>
          </a>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Правила и случаи возврата жалоб на классификацию</h3>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Существует всего 3 случая, при которых ресторан может не обрабатывать жалобу, а вернуть ее на классификацию:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• а). Дубль</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• б). Некорректно назначенные жалобы на Ресторан</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• в). Для Доставки - Ответственность Логиста</li>
          </ul>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Если жалоба не попадает ни под один из трех допустимых случаев возврата на классификацию, Вам необходимо:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• связаться с гостем, вернуть лояльность гостя;</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• описать детально результат в полях Решение для Ресторана и Решение для Гостя;</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• отправить жалобу на проверку (завершить обработку).</li>
          </ul>
          <p className="text-[13px] text-[#656565] my-1.5 leading-relaxed">
            * Внимание! Этот случай не касается случаев Технического характера, когда Гость при размещении заказа на C&C разместил заказ в другом ресторане
          </p>
          <p className="text-[13px] text-[#656565] my-1.5 leading-relaxed">
            * Внимание! Не путайте с жалобами, которые возвратились в обработку или образовались новые от одного и того же гостя, по причине некачественной обработки жалобы рестораном (не вернули лояльность гостя или не связались вовсе).
          </p>
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            <strong>Важно!</strong> Такая жалоба попадает в статистику ресторана.
          </div>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Если ваше обращение попадает под один из трех случаев, то выбирайте: меню «Действие» - «Вернуть на классификацию»
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Во всех трех случаях заполнения полей является обязательным:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• номер исходной жалобы - для причины <strong>Дубль</strong></li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• предполагаемое название ресторана - для причины <strong>Некорректно назначенная жалоба на Ресторан</strong></li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• фото/видео подтверждение - для причины <strong>Доставка - ошибка курьерской службы</strong></li>
          </ul>

          {/* Case blocks */}
          <div className="my-5 p-4 bg-[#fdf8f6] border-[1.5px] border-[#e8d0c0] rounded-lg">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-kfc-red text-white font-extrabold flex items-center justify-center flex-shrink-0">1</div>
              <div className="text-base font-bold pt-1">Не корректно определен ресторан</div>
            </div>
            <div className="text-sm mb-2" style={{ lineHeight: '1.65' }}>
              Если вы точно знаете, что гость жалуйся на соседний ресторан. Например, гость пожаловался на чистоту на FC, а у вас IL, FC – ваши соседи.
            </div>
            <ul className="space-y-1">
              <li className="relative pl-6 text-sm" style={{ lineHeight: '1.55' }}>
                <span className="absolute left-0 text-kfc-red font-bold">✓</span>
                Верните такую жалобу на классификацию, выбрав причину возврата – Другой ресторан
              </li>
              <li className="relative pl-6 text-sm" style={{ lineHeight: '1.55' }}>
                <span className="absolute left-0 text-kfc-red font-bold">✓</span>
                Заполните обязательное поле – впишите название предполагаемого ресторана
              </li>
            </ul>
          </div>

          <div className="my-5 p-4 bg-[#fdf8f6] border-[1.5px] border-[#e8d0c0] rounded-lg">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-kfc-red text-white font-extrabold flex items-center justify-center flex-shrink-0">2</div>
              <div className="text-base font-bold pt-1">Дубликат жалобы</div>
            </div>
            <div className="text-sm mb-2" style={{ lineHeight: '1.65' }}>
              <strong>Дубли – это продублированное содержание жалобы с новым порядковым номером с одними и теми же данными (текстом, ФИО гостя, адресом, телефоном).</strong>
            </div>
            <ul className="space-y-1">
              <li className="relative pl-6 text-sm" style={{ lineHeight: '1.55' }}>
                <span className="absolute left-0 text-kfc-red font-bold">✓</span>
                Верните такую жалобу на классификацию, выбрав причину возврата – Дубли
              </li>
              <li className="relative pl-6 text-sm" style={{ lineHeight: '1.55' }}>
                <span className="absolute left-0 text-kfc-red font-bold">✓</span>
                Заполните обязательное поле – впишите номер исходной жалобы
              </li>
            </ul>
          </div>

          <div className="my-5 p-4 bg-[#fdf8f6] border-[1.5px] border-[#e8d0c0] rounded-lg">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-kfc-red text-white font-extrabold flex items-center justify-center flex-shrink-0">3</div>
              <div className="text-base font-bold pt-1">Для доставки – ошибка курьерской службы (скорость, гостеприимство и точность доставки)</div>
            </div>
            <div className="text-sm mb-2" style={{ lineHeight: '1.65' }}>
              Если вы уверены, что Ответственный за решение жалобы – курьерская служба, Ресторан будет получать нотификации. Обращайте внимание на ответственного за обработку.
            </div>
            <ul className="space-y-1">
              <li className="relative pl-6 text-sm" style={{ lineHeight: '1.55' }}>
                <span className="absolute left-0 text-kfc-red font-bold">✓</span>
                Верните такую жалобу на классификацию, выбрав причину возврата – Ответственность курьерской службы
              </li>
              <li className="relative pl-6 text-sm" style={{ lineHeight: '1.55' }}>
                <span className="absolute left-0 text-kfc-red font-bold">✓</span>
                Заполните обязательное поле – подгрузите фото/ видео подтверждение (нажав на звездочку в левом верхнем углу)
              </li>
            </ul>
          </div>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Ограничение на возврат жалоб на классификацию</h3>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Существует ограничение на возврат жалоб на классификацию:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Возврат на классификацию возможен не более 1 раза, при условии если ваш случай попадает под 1 из трех, описанных выше.</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• На третий раз возврата на классификацию ресторан увидит уведомление о достижении максимально допустимого количества возвратов на классификацию. При попытке продолжить, AC данного ресторана получит на почту уведомление о достижении рестораном максимально допустимого количества возвратов на классификацию. В этом случае AC следует провести дополнительное обучение RGM ресторана.</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• На четвертый раз ресторан получит уведомление о превышении количества возвратов и вернуть на классификацию не сможет</li>
          </ul>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Требования к загрузке файлов при возврате на Классификацию, если причина Доставка - ошибка курьерской службы</h3>
          <div className="my-2">
            <div className="font-bold text-sm mb-1.5">Фото:</div>
            <ul className="my-1 pl-0 list-none">
              {['Не более 1-4 файла', 'Качественные скриншоты/фото монитора с камер наблюдения', 'Обязательное отображение информации о дате и времени', 'Фото заказа вместе с чеком', 'Важную информацию для операторов GSD/супервайзеров можно выделять при помощи любого фоторедактора', 'Фото стикеров безопасности'].map((item, i) => (
                <li key={i} className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.6' }}>
                  <span className="absolute left-0 text-[#656565]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-2">
            <div className="font-bold text-sm mb-1.5">Видео:</div>
            <ul className="my-1 pl-0 list-none">
              {['Не более 1-2 файлов', 'Длительность не более 2-3 минут', 'Качественная запись видео на смартфон с камер наблюдения (Важно! не снимать с разрешением 4K)', 'Обязательное отображение информации - даты и времени происходящего'].map((item, i) => (
                <li key={i} className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.6' }}>
                  <span className="absolute left-0 text-[#656565]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ЭТАП 3 */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ЭТАП 3 - КОНТРОЛЬ
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            На данном этапе жалоба попадает к руководителю (в зависимости от уровня влияния это будет либо Территориальный Управляющий, либо Маркет-менеджер/FBM).
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Этап Контроля является важнейшим этапом, позволяющим Руководителю оценить/ проконтролировать качество обработки жалобы исполнителем (Директором ресторана или Территориальным Управляющим). Убедиться, что Гость доволен решением его проблемы.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            О назначении жалобы на Контроль руководитель получает уведомление по электронной почте.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Уведомление включает следующую информацию: дату регистрации, срок, к которому необходимо завершить контроль, ответственного за обработку, содержание жалобы и указанное решение.
          </p>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Для работы с жалобами необходимо:</h3>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              'Перейти по ссылке, указанной в уведомлении. Обратите внимание, что ссылки для корпоративных и франчайзинговых ресторанов разные.',
              'Либо зайти на портал GSD – Главная страница (или Мой кабинет) – вкладка «Требует внимания»',
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm py-1 relative"
                style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span className="absolute left-0 font-semibold min-w-[22px]">
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            После регистрации откроется форма обращения.
          </p>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              'Необходимо внимательно ознакомиться с текстом жалобы, с полями Решение для ресторана и Решение для Гостя',
              'Руководителю необходимо принять решение. Исходя из текста жалобы и уровня влияния, следует ли убедиться, что лояльность Гостя действительно возвращена. Если да, то необходимо позвонить Гостю и спросить, удовлетворен он решением проблемы.',
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm py-1 relative"
                style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span className="absolute left-0 font-semibold min-w-[22px]">
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
          <div className="border-2 border-kfc-red rounded-md p-3 my-3.5 text-sm leading-relaxed">
            <p className="mb-1"><strong>ВАЖНО!</strong></p>
            <p className="mb-1">100% проверки требуют все жалобы высокого уровня</p>
            <p>100% проверки требуют жалобы, если из полей Решение Для ресторана; Решение для Гостя не очевидно решение проблемы</p>
          </div>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }} start={3}>
            {[
              <>В зависимости от принятого решения необходимо во вкладке ПРОВЕРКА выбрать:<br /><br />Проверка Удовлетворенности <strong>Выполнена</strong><br />Проверка Удовлетворенности <strong>Не требуется</strong></>,
              'После проверки необходимо указать Результат проверки в поле Результат проверки',
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm py-1 relative"
                style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span className="absolute left-0 font-semibold min-w-[22px]">
                  {i + 3}.
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В зависимости от жалобы примите решение о проведении проверки. Выберите: Проверка Выполнена или Проверка Не требуется
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Укажите результат проверки
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Также у Руководителя на Контроле есть возможность вернуть обращение на повторную обработку исполнителю с подробными комментариями в том случае, если вы не удовлетворены результатами обработки обращения, видите формальный подход и т. д. Для этого в меню «Действия» выберите «Вернуть в обработку». В поле «Примечание» укажите причину возврата, после чего сохраните обращение.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Если вы удовлетворены результатами обработки обращения, перейдите на вкладку «Обработка» - меню «Действия» - «Подтвердить результат» и сохраните обращение.
          </p>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Качественная проверка каждой жалобы со стороны Руководителя позволяет:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• увеличить количество удовлетворенных гостей</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• увеличить скорость получения эффективной обратной связи со стороны исполнителей</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• улучшить качество обратной связи</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• свести к минимуму повышение уровня влияния до высокого или образование новых жалоб, в связи с повторными обращениями Гостей на то, что с ними не связались или не решили проблему</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• снизить количество жалоб</li>
          </ul>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Обязательный выбор полей Проверки удовлетворенности на этапе Контроля позволят увидеть статистику - количество жалоб, проверенных Руководителем
          </p>

          {/* ЭТАП 4 */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ЭТАП 4 - ПРОВЕРКА
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Выборочная Проверка удовлетворенности Гостя решением жалобы, проводится внешней организацией после того, как вы фактически решили жалобу и технически закрыли ее вместе с вашим руководителем в системе.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Гостю задают вопрос: Остались ли вы довольны обратной связью от ресторана?
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            По итогам проверки бывают случаи, когда жалоба была решена не эффективно и Гость остался не удовлетворен. Или жалобу закрыли, а с Гостем вообще не связались.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Если Гость не удовлетворен обратной связью:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Если жалоба не закрыта, ее снова возвращают в обработку, но уже с повышением уровня до высокого.</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Если жалоба закрыта, а гость обращается в соц. сети или к модераторам с вопросом, почему с ним не связались, то образуется новое обращение с высоким уровнем (не путать с дубликатом жалобы)</li>
          </ul>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Почему так происходит? Возможно, вы поторопились и не уделили должного внимания Гостю. Возможно вы не дозвонились до Гостя или же есть другие причины. Но решать жалобу придется снова и теперь уже вашему руководителю. Или плюс еще одна жалоба в статистике ресторана.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Как же сделать, чтобы не возникало таких ситуаций?
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Внимательно читайте обращение Гостя, убедитесь, что есть контакты Гостя, по которым вы можете с ним связаться. Может быть указан телефон или электронный адрес.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Обязательно свяжитесь с Гостем. Предпочтительнее по телефону.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Скажите Гостю примерно следующее:
          </p>
          <div className="bg-[#f4f4f4] border-[1.5px] border-[#f2f1ef] rounded-lg p-4 my-4 text-sm leading-relaxed">
            &quot;Здравствуйте, нам очень жаль, что у вас остались негативные впечатления после посещения нашего ресторана. Мы ценим своих гостей и очень хотели бы это исправить. Мы очень хотим изменить ваше впечатление о нашем ресторане. Пожалуйста приходите к нам угоститься самой вкусной курочкой и пообщаться с директором ресторана!&quot;
          </div>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Используйте правило ВИП2
          </p>

          {/* СРОКИ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            СРОКИ ОБРАБОТКИ ОБРАЩЕНИЙ ГОСТЕЙ
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Крайне важно соблюдать сроки обработки жалоб. Не допускайте нарушения сроков обработки. Не заставляйте гостей ждать. Вернуть лояльность гостя и доверие с каждым днем будет сложнее, а иногда и просто невозможно.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Не теряйте время на возврат жалоб на классификацию (кроме четырех допустимых случаев возврата на классификацию).
          </p>

          <div className="flex items-start gap-2.5 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            <span className="font-extrabold flex-shrink-0 mt-0.5">✓</span>
            <span>Срок обработки для обращений <strong>среднего</strong> уровня - <span className="text-kfc-red font-bold">48 часов</span> на этапе Обработка и Контроль соответственно</span>
          </div>
          <div className="flex items-start gap-2.5 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            <span className="font-extrabold flex-shrink-0 mt-0.5">✓</span>
            <span>Срок обработки для обращений <strong>высокого</strong> уровня - <span className="text-kfc-red font-bold">24 часа</span> на этапе Обработка и Контроль соответственно</span>
          </div>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Кроме обработки жалобы и возврата на классификацию, ресторан может остановить обработку, например, в ожидании ответа гостя на запрос дополнительной информации или в случае, если не дозвонились гостю.
          </p>
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            <strong>Внимание!</strong> Остановка обработки возможна единожды и на срок - 24 часа.
          </div>

          {/* ПРИЛОЖЕНИЕ KFC */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ПРОЦЕСС CRP ДЛЯ ОБРАЩЕНИЙ ИЗ ИСТОЧНИКА - ПРИЛОЖЕНИЕ KFC
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Приложение KFC – один из источников обратной связи от Гостей.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            После получения заказа, у Гостя есть возможность заполнить форму опроса SMG
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• выбрать от 1 до 5 звезд (1-4 звезды - жалоба; 5 звезд - благодарность)</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• выбрать один из драйверов, которым Гость не доволен или который особенно понравился</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• оставить комментарий</li>
          </ul>
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            Не возвращайте жалобу на классификацию, если Гость не сообщил вам причину выбранной им формы обратной связи или сказал, что все нормально. Воспользуйтесь дополнительной возможностью пообщаться с Гостем и обработайте жалобу согласно стандартной процедуре CRP.
          </div>

          {/* ПРИМЕРЫ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ПРИМЕРЫ ПРАВИЛЬНОГО И НЕПРАВИЛЬНОГО РЕШЕНИЙ ОБРАЩЕНИЙ ГОСТЕЙ
          </h2>

          <div className="my-4 p-4 border-[1.5px] border-[#f2f1ef] rounded-lg">
            <p className="text-sm italic font-bold mb-2" style={{ lineHeight: '1.7' }}>Жалоба: Я сделал заказ через приложение и случайно заказал в другом ресторане</p>
            <p className="text-sm italic font-bold mb-1" style={{ lineHeight: '1.7' }}>Пример неправильного решения:</p>
            <p className="text-sm italic mb-3" style={{ lineHeight: '1.7' }}>Позвонили Гостю и рекомендовали обратиться в тех. Поддержку и в банк. Мы не несем ответственности за действия Гостя и приложение.</p>
            <p className="text-sm italic font-bold mb-1" style={{ lineHeight: '1.7' }}>Пример правильного решения:</p>
            <p className="text-sm italic" style={{ lineHeight: '1.7' }}>Позвонили Гостю, извинились. Уточнили детали заказа, попросили прислать (показать) скриншот с телефона. Отменили заказ согласно процедуре, описанной в CSL C&C, продублировали заявку на GSD на возврат средств/ обратились к сотруднику IT поддержки, ответственному за C&C. Заверили Гостя, что заказ отменен и сообщили о сроках возврата денежных средств. Гость остался доволен решение проблемы.</p>
          </div>

          <div className="my-4 p-4 border-[1.5px] border-[#f2f1ef] rounded-lg">
            <p className="text-sm italic font-bold mb-2" style={{ lineHeight: '1.7' }}>Жалоба: Мне привезли острые крылья</p>
            <p className="text-sm italic font-bold mb-1" style={{ lineHeight: '1.7' }}>Пример неправильного решения:</p>
            <p className="text-sm italic mb-3" style={{ lineHeight: '1.7' }}>Не связывались с гостем, так как вины ресторана нет. Просьба убрать жалобу из статистики ресторана</p>
            <p className="text-sm italic font-bold mb-1" style={{ lineHeight: '1.7' }}>Пример правильного решения:</p>
            <p className="text-sm italic" style={{ lineHeight: '1.7' }}>Позвонили Гостю. Поговорили с Гостем, рассказали подробнее о нашем продукте. Пригласили вновь посетить ресторан и попробовать оригинальные ножки. Гость остался очень доволен.</p>
          </div>

          {/* ЗАМЕЩЕНИЕ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            НАСТРОЙКА ФУНКЦИИ ЗАМЕЩЕНИЯ В GSD
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В случае вашего отпуска необходимо заранее настроить Функцию замещения.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Необходимо войти на портал GSD по ссылке:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• <strong>gsd.kfc.ru</strong> - для корпоративных ресторанов</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• <strong>http://fz.kfc.ru</strong> - для партнерских ресторанов</li>
          </ul>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              'Слева выбрать вкладку «Обо мне».',
              'В открывшемся окне «Замещение» нажать «+» добавить.',
              'В строчку ФИО заносим данные сотрудника, который будет вас замещать и нажимаем ПОИСК.',
              'Выделяем найденную строчку с информацией о сотруднике и нажимаем ОК. Таким образом можно внести несколько сотрудников, формируя список, из которого в дальнейшем вы будете выбирать заместителя на время вашего отсутствия.',
              'В строчках «Заместитель для роли «Руководитель» и «Заместитель для роли «Исполнитель» вносим фамилию замещающего вас сотрудника из списка выше и нажимаем Enter',
              'Вносим данные о начале и окончании вашего отсутствия.',
              'Нажимаем «Запланировать отпуск».',
              'У вас появилась запись о планировании периода отсутствия. Нажимаем «Сохранить» и «ОК».',
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm py-1 relative"
                style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span className="absolute left-0 font-semibold min-w-[22px]">
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Если период вашего отсутствия начинается завтра, а окончание неизвестно, то вы нажимаете «Начать отпуск завтра».
          </p>
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            Обратите внимание: не должно быть более одного периода в состоянии «Планирование» либо «Отсутствие».
          </div>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Для того, чтобы удалить данные о планировании или отсутствии, нужно поставить галочку в белом квадратике, тем самым выделится ваша информация о периоде отсутствия, и нажать «Удалить отпуск».
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Период отсутствия автоматически закрывается по факту достижения даты окончания. Если дата окончания неизвестна, то по выходу из отпуска вам необходимо нажать «Завершить сейчас».
          </p>

          {/* ВЫГРУЗКА */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ВЫГРУЗКА ОБРАЩЕНИЙ ИЗ GSD
          </h2>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              <>Для выгрузки обращений необходимо войти на портал GSD по ссылке:<br /><br /><strong>gsd.kfc.ru</strong> - для корпоративных ресторанов<br /><strong>http://fz.kfc.ru</strong> - для партнерских ресторанов</>,
              'Для выгрузки жалоб или других обращений необходимо зайти в Мой кабинет и отфильтровать результаты, нажав Поиск по категориям – Обращения гостей',
              'Далее выбрать все жалобы, нажав на синий квадрат в меню над обращениями',
              <>В списке Задачи выберите тип отчета для выгрузки:<br /><br /><strong>"Экспорт для Ресторана по дате создания"</strong> – для уровня ресторана<br /><strong>"Экспорт для ТУ по дате создания"</strong> – для территориальных управляющих<br /><strong>"Экспорт для MM по дате создания"</strong> – для маркет менеджеров</>,
              'Далее выберите формат для печати XLS',
              <>После нажатия на кнопку Выполнить, откроется окно Параметры фильтра<br /><br />- Выберите необходимый диапазон дат*<br />При выборе дат будьте внимательны. Чтобы выгрузить все жалобы календарного месяца в поле "Дата создания по", установите 01 число следующего месяца<br /><br />- Выберите Тип обращения - Жалоба</>,
              <>После нажатия на кнопку ОК, откроется вторая вкладка с подготовкой файла<br /><br />- Ожидайте появление кнопки «Загрузить файл»<br />- Нажмите на кнопку "Загрузить файл"</>,
              <>В файле вы найдете все жалобы по своему ресторану или территории. Для анализа жалоб используйте следующие фильтры:
                <ul className="mt-2 pl-0 list-none">
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• ID жалобы</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Дата создания</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Время создания</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Источник жалобы</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Статус жалобы (закрыто, обработка, контроль, проверка, классификация)</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Содержание жалобы</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Поле - Решение для гостя</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Поле - Решение для ресторана</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Категория</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Уровень влияния (средний, высокий)</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Канал продаж</li>
                  <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Причина (для анализа жалоб по каналу продаж - Доставка, используйте этот фильтр).</li>
                </ul>
              </>,
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm py-1 relative"
                style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span className="absolute left-0 font-semibold min-w-[22px]">
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Если вы правильно будете работать с каждой жалобой, количество жалоб будет уменьшаться естественным образом, а количество лояльных гостей - увеличиваться
          </p>

          {/* РАБОТА С ЖАЛОБАМИ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            РАБОТА С ЖАЛОБАМИ ГОСТЕЙ
          </h2>

          <h3 className="text-[15px] font-bold mt-5 mb-2">ОСНОВНЫЕ ПРАВИЛА РАБОТЫ С ЖАЛОБАМИ</h3>
          <table className="w-full border-collapse my-4 text-[13px]">
            <tbody>
              <tr style={{ background: '#fff' }}>
                <td className="font-bold p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55', minWidth: '220px' }}>1 Все жалобы решает ДИРЕКТОР ресторана</td>
                <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>
                  <p className="text-[13px] mb-1.5">► Если директор ресторана отсутствует, а Гость жалуется сейчас, то заместитель директора или менеджер общается с Гостем, применяя правило ВИП 2</p>
                  <p className="text-[13px]">► Если заместитель директора или менеджер понимает, что ситуация выходит из-под контроля, стоит еще раз поблагодарить Гостя и попросить вернуться к разговору на следующий день. Следует сообщить об этой ситуации директору или территориальному управляющему и попросить помощи в общении с Гостем</p>
                </td>
              </tr>
              <tr style={{ background: '#fdf8f4' }}>
                <td className="font-bold p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>2. При общении с Гостем четко следуйте правилу ВИП 2</td>
                <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>
                  <p className="text-[13px] mb-2"><strong>► Внимательно Выслушайте</strong> - слушайте внимательно и максимально заинтересованно. Гость должен понимать, что о нем заботятся и пытаются оправдать его ожидания.</p>
                  <p className="text-[13px] mb-2"><strong>► Искренне Извинитесь</strong> - после того, как вы внимательно выслушали Гостя, ему следует принести искренние извинения за то, что он получил негативный опыт от посещения вашего ресторана. Поблагодарите Гостя за обратную связь и объясните, что его мнение является очень важным ценным. Пообещайте Гостю исправить ситуацию и заверьте, что следующее посещение ресторана его обязательно порадует.</p>
                  <p className="text-[13px]"><strong>► Порадуйте Подарком</strong> – примите решение самостоятельно. В зависимости от жалобы, подарите Гостю купон &quot;Оставайтесь с нами&quot;, пригласите на кофе или бесплатный обед. Но как правило, для Гостя важнее получить эмоциональную компенсацию в виде правильного, искреннего и заинтересованного общения с вашей стороны.</p>
                </td>
              </tr>
              <tr style={{ background: '#fff' }}>
                <td className="font-bold p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>3. Если вы пообещали Гостю исправить ситуацию – сделайте это!</td>
                <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>Обсуждайте каждую жалобу с менеджерами, меняйте ситуацию в ресторане. Гость не должен второй раз получить холодный продукт или увидеть грязный туалет. Третьего шанса у вас может и не быть.</td>
              </tr>
              <tr style={{ background: '#fdf8f4' }}>
                <td className="font-bold p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>4. Соблюдайте сроки обработки жалоб.</td>
                <td className="p-2.5 border align-top" style={{ borderColor: '#e8ddd0', lineHeight: '1.55' }}>Не допускайте нарушения сроков обработки. Не заставляйте Гостей ждать. Вернуть лояльность и доверие Гостя с каждым днем будет сложнее, а иногда и просто невозможно.</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-[15px] font-bold mt-5 mb-2">ПРИМЕРЫ ВЗАИМОДЕЙСТВИЙ С ГОСТЕМ</h3>
          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr style={{ background: '#e4002b', color: '#fff' }}>
                <th className="text-left p-2.5 font-bold border" style={{ borderColor: '#c0001f', minWidth: '170px' }}>СИТУАЦИЯ</th>
                <th className="text-left p-2.5 font-bold border" style={{ borderColor: '#c0001f' }}>ДЕЙСТВИЯ МЕНЕДЖЕРА</th>
                <th className="text-left p-2.5 font-bold border" style={{ borderColor: '#c0001f' }}>ЧТО СКАЗАТЬ?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Гость долго ждет свой заказ', ['Выяснить точное время готовности заказа'], '"Прошу прощения за ожидание. Ваш заказ будет готов через ...минут. Позвольте, пока Вы ждете, угостить вас кофе (мороженым, любым другим блюдом или напитком)?"'],
                ['Гость заказал блюдо, которого сегодня нет в меню (стоп лист)', ['Извиниться И сообщить, что сегодня этого блюда нет в меню.', 'Предложить аналогичное блюдо взамен или предложить новинку.'], '"Прошу прощения, сегодня данного блюда отсутствует в меню. Но я предлагаю Вам попробовать нашу новинку (красочно описать блюдо)"'],
                ['Гость заказал блюдо, которого нет в меню ресторана или которое вывели из меню', ['Извиниться и сообщить, что блюдо не представлено в меню ресторана этого формата или не представлено в KFC', 'Предложить аналогичное блюдо взамен или предложить новинку, предварительно спросив о предпочтениях'], '"К сожалению, данное блюдо не представлено в меню ресторана. Я Вам предлагаю попробовать... — это аналогичное блюдо/наша новинка." (красочно описать блюдо).'],
                ['Гость просит книгу отзывов и предложений', ['Если Гость просит книгу отзывов и предложений у рядового сотрудника, сотруднику следует немедленно позвать менеджера', 'Менеджеру необходимо представиться и выяснить причину проблемы.', 'Постараться решить проблему по ВИП 2'], '"Пожалуйста, подождите одну минуту, я позову менеджера"\n"Добрый день. Меня зовут Дмитрий, я директор ресторана. Вы попросили книгу отзывов. Могу я узнать причину?"'],
                ['Гость решил изменить заказ', ['Если гость обратился к рядовому сотруднику, необходимо позвать менеджера ресторана для корректировки заказа', 'Внести правки в заказ', 'Повторить заказ Гостю и назвать'], ''],
                ['Гость уронил заказ на пол', ['Заменить заказ полностью и сообщить менеджеру'], '"Мы сейчас же заменим Ваш заказ на аналогичный"'],
                ['Гость просит изменить состав блюда', ['Внести изменения в заказ с учетом предпочтений Гостя'], '"Конечно, мы с радостью учтем Ваши пожелания"'],
                ['Гость не согласен с общей стоимостью заказа', ['Извиниться перед Гостем', 'Проверить заказ, внесенный в кассу', 'Сверить цены на соответствие с меню'], ''],
                ['Неисправности кассового аппарата', ['Извиниться перед Гостем', 'Позвать менеджера', 'Позитивно попросить подождать, объяснить причину'], '"Простите пожалуйста, у нас произошли некоторые технические трудности. Нужно немного подождать"'],
                ['Пьяный, грубый гость', ['Позвать менеджера'], ''],
                ['У Гостя недостаточно денег, что бы оплатить заказ', ['Позвать менеджерам'], ''],
                ['Несовершеннолетние Гости хотят купить пиво', ['Извиниться', 'Попросить документ, удостоверяющий личность с указанием даты рождения'], '"Прошу прощения, мы не продаем алкогольные напитки Гостям до 18 лет. Покажите, пожалуйста, паспорт"'],
              ].map(([situation, actions, quote], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f8' }}>
                  <td className="font-bold p-2.5 border align-top" style={{ borderColor: '#e0d0d0', lineHeight: '1.55', minWidth: '170px' }}>{situation}</td>
                  <td className="p-2.5 border align-top" style={{ borderColor: '#e0d0d0', lineHeight: '1.55' }}>
                    <ul className="list-none m-0 p-0">
                      {(actions as string[]).map((action, ai) => (
                        <li key={ai} className="text-[13px] py-0.5 relative pl-3.5" style={{ lineHeight: '1.55' }}>
                          <span className="absolute left-0.5">•</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-2.5 border align-top italic text-[#444]" style={{ borderColor: '#e0d0d0', lineHeight: '1.55' }}>{quote}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Счетчик жалоб</h3>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Руководитель любого уровня на этапе обработки или контроля может видеть все жалобы Гостей, которые оставили жалобу 2-й и более раз за последние 60 дней. Это позволяет:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• более внимательно отнестись к такому Гостю</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• увидеть закономерность, на что жалуется Гость более 1 раза за последние 60 дней</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• реагировать оперативнее на системные проблемы</li>
          </ul>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Как посмотреть такие жалобы:
          </p>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              'В общем списке такие жалобы будут выделены',
              'В самой жалобе справа можно увидеть сколько раз за последние 60 дней Гость обращался с жалобой (по 1 из следующих признаков - номер телефона или адрес почты)',
              'Нажав на кнопку ОТКРЫТЬ СПИСОК - можно увидеть детально все жалобы',
              'Одна из жалоб будет текущая - в остальные можно также провалиться в саму жалобу и ознакомиться с деталями',
            ].map((item, i) => (
              <li
                key={i}
                className="text-sm py-1 relative"
                style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
              >
                <span className="absolute left-0 font-semibold min-w-[22px]">
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>

          {/* ПАМЯТКА */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            ПАМЯТКА ПО РАБОТЕ С ЖАЛОБАМИ ГОСТЕЙ
          </h2>

          <a href="#" className="flex items-center gap-3 border-[1.5px] border-[#f2f1ef] rounded-lg p-3 my-2.5 no-underline bg-white hover:bg-[#fff0f2] hover:border-kfc-red max-w-[640px] transition-colors">
            <PdfSvg />
            <div>
              <span className="text-[13px] font-semibold text-kfc-red leading-snug">Инструкция по выгрузке жалоб из GSD</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 border-[1.5px] border-[#f2f1ef] rounded-lg p-3 my-2.5 no-underline bg-white hover:bg-[#fff0f2] hover:border-kfc-red max-w-[640px] transition-colors">
            <PdfSvg />
            <div>
              <span className="text-[13px] font-semibold text-kfc-red leading-snug">Памятка по общению с гостем, позвонившим в ресторан с жалобой</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 border-[1.5px] border-[#f2f1ef] rounded-lg p-3 my-2.5 no-underline bg-white hover:bg-[#fff0f2] hover:border-kfc-red max-w-[640px] transition-colors">
            <PdfSvg />
            <div>
              <span className="text-[13px] font-semibold text-kfc-red leading-snug">ПАМЯТКА ПО ОТВЕТУ ГОСТЮ ПО EMAIL</span>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}
