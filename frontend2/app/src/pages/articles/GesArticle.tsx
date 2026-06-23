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
  'GES',
  'GE Georgia Грузия',
  'AM Armenia Армения',
  'AZ Azerbaijan Азербайджан',
  'KZ Kazakhstan Казахстан',
  'KG Kyrgyzstan Кыргызстан',
  'UZ Uzbekistan Узбекистан',
  'TJ Tajikistan Таджикистан',
]

export default function GesArticle() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Обслуживание', href: '/standards/obsluzhivanie' },
          { label: 'GES_Guest Experience Survey' },
        ]}
      />

      <div style={{ padding: '28px 36px 60px' }}>
        <ArticleHeader
          photoGradient="linear-gradient(150deg, #2048b0 0%, #103090 50%, #081860 100%)"
          category="Обслуживание"
          title="GES_Guest Experience Survey"
          description="В этом CSL вы найдете всю информацию по работе с программой GES: как Гости оценивают посещение ресторанов, ключевые показатели эффективности, формирование и анализ отчетов GES"
          tags={[]}
          svgContent={<HeadsetSvg />}
        />

        <div className="mt-5" />

        <TagsRow tags={[...primaryTags, ...secondaryTags]} showMore={9} actions />

        <div style={{ maxWidth: '860px', color: '#212121' }} className="mt-7">

          {/* ВВЕДЕНИЕ */}
          <h2 className="text-lg font-extrabold mt-0 mb-3 leading-tight pt-0 border-t-0">
            Введение
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            <strong>KFC Guest Experience Survey</strong> – это система, позволяющая Гостям оценить свое впечатление от посещения наших ресторанов.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В опросе Гостю необходимо ответить на ряд вопросов, касающихся последнего посещения ресторана KFC и проставить оценки от 1 до 5, где:
          </p>
          <div className="flex gap-2 flex-wrap my-2.5">
            {[
              { num: '5', label: 'Очень удовлетворен' },
              { num: '4', label: 'Удовлетворен' },
              { num: '3', label: 'Не удовлетворен' },
              { num: '2', label: 'Не доволен' },
              { num: '1', label: 'Очень недоволен' },
            ].map((badge) => (
              <div key={badge.num} className="inline-flex items-center gap-1.5 bg-[#f4f4f4] border-[1.5px] border-[#dad6cf] rounded-md px-3 py-1.5 text-[13px] font-bold">
                <span className="text-lg font-extrabold text-kfc-red leading-none">{badge.num}</span>
                <span>— {badge.label}</span>
              </div>
            ))}
          </div>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В опросе анализируются отзывы Гостей и определяются области для улучшения.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Мы ценим обратную связь Гостей и должны работать над предоставлением незабываемого впечатления.
          </p>

          {/* ДЕТАЛИ ОПРОСА */}
          <h2 className="text-lg font-extrabold mt-0 mb-3 leading-tight pt-0 border-t-0">
            Детали опроса
          </h2>
          <div className="flex items-start gap-6 my-2.5">
            <div className="flex-1">
              <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
                Гостям предлагается оставить отзыв о посещении ресторана путем размещения информации об опросе на чеке. На каждом чеке указана ссылка на опрос и код ресторана.
              </p>
              <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
                Гость может оставить отзыв, зайдя на сайт:
              </p>
            </div>
          </div>
          <ul className="my-2 pl-0 list-none">
            {[
              { code: 'kfcfeedbackrus.com', country: 'Россия' },
              { code: 'kfcfeedbackua.com', country: 'Украина' },
              { code: 'kfcfeedbackbel.com', country: 'Беларусь' },
              { code: 'kfcfeedbackaze.com', country: 'Азербайджан' },
              { code: 'kfcfeedbackarm.com', country: 'Армения' },
              { code: 'kfcfeedbackgeo.com', country: 'Грузия' },
              { code: 'kfcfeedbackkaz.com', country: 'Казахстан' },
              { code: 'kfcfeedbackkyr.com', country: 'Киргизия' },
              { code: 'kfcfeedbackuz.com', country: 'Узбекистан' },
              { code: 'kfcfeedbacktjk.com', country: 'Таджикистан' },
            ].map((item) => (
              <li key={item.code} className="text-sm py-1 relative pl-3.5" style={{ lineHeight: '1.6' }}>
                <span className="absolute left-0">•</span>
                <code className="bg-[#f4f4f4] border border-[#dad6cf] rounded px-1.5 font-mono text-[13px] text-kfc-red font-semibold">{item.code}</code>
                {' — '}{item.country}
              </li>
            ))}
          </ul>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Гость должен корректно ввести код ресторана, дату, время и номер чека</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• С одного устройства можно заполнить один опрос раз в 14 дней</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Гость должен заполнить опрос в течение 7 дней с момента посещения ресторана</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Рестораны должны гарантировать корректность кода и печать приглашения заполнить опрос на каждом чеке</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Рестораны должны предоставлять скидку 10% при предъявлении им чека с кодом, полученным после заполнения опроса</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• В любой стране нашего BU принимаются чеки с кодом из любого ресторана (например, в Киеве должны принять чек с кодом из ресторанов Баку и наоборот)</li>
          </ul>
          <div className="bg-kfc-red text-white rounded-lg p-4 my-4 flex gap-3 items-start text-sm font-bold">
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
            <div><strong>ВАЖНО:</strong> при приемке новых ресторанов необходимо проверять готовность к GES по акту приемки новых ресторанов</div>
          </div>

          {/* ЧТО ОЦЕНИВАЮТ ГОСТИ */}
          <h2 className="text-lg font-extrabold mt-0 mb-3 leading-tight pt-0 border-t-0">
            Что оценивают наши Гости
          </h2>
          <ul className="my-2.5 p-0 list-none">
            <li className="flex items-start gap-3 py-2 border-b border-[#f2f1ef]">
              <span className="w-[26px] h-[26px] rounded-full bg-kfc-red text-white font-extrabold text-[13px] flex items-center justify-center shrink-0 mt-px">1</span>
              <div className="text-sm" style={{ lineHeight: '1.65' }}>При прохождении опроса Гости выбирают <strong>тип заказа и способ размещения</strong></div>
            </li>
          </ul>
          <ul className="my-2.5 p-0 list-none">
            {[
              'Оценивают <strong>свое впечатление о ресторане</strong>',
              'Оценивают <strong>удовлетворенность по следующим драйверам</strong>',
              'Гости могут также указать <strong>какие именно позиции из меню</strong> оказали самое большое влияние на рейтинг Вкус еды',
              'Гость может <strong>оставить комментарий</strong>',
              'Гость указывает <strong>вероятность возврата</strong> в ресторан',
              'На последнем этапе опроса Гость получает <strong>код на скидку 10%</strong> при следующем посещении',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 py-2 border-b border-[#f2f1ef] last:border-b-0">
                <span className="w-[26px] h-[26px] rounded-full bg-kfc-red text-white font-extrabold text-[13px] flex items-center justify-center shrink-0 mt-px">{i + 2}</span>
                <div className="text-sm" style={{ lineHeight: '1.65' }} dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <div className="bg-[#f4f4f4] border-[1.5px] border-[#f2f1ef] rounded-lg p-4 my-4 text-sm leading-relaxed">
            Гостям, которые оценили обслуживание как <strong>Превосходное</strong>, предлагается отправить свой комментарий в ресторан по электронной почте. Эти письма должны быть напечатаны и размещены в ресторане на доске «Наши результаты» в качестве повода для празднования.
          </div>

          {/* КЛЮЧЕВЫЕ ПОКАЗАТЕЛИ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Ключевые показатели эффективности
          </h2>
          <div className="grid grid-cols-2 gap-3.5 my-4">
            {[
              { num: 'KPI 1', title: 'Количество опросов', body: <>Ресторанам необходимо получить минимум <strong>30 опросов</strong> за месяц. Получение менее 30 действующих опросов не позволяет провести корректный анализ.</> },
              { num: 'KPI 2', title: 'Общее впечатление (OSAT)', body: <>Это все отзывы, в которых Гость оценил свой визит на <strong>5</strong>.</>, example: 'если OSAT составил 85%, это означает, что из 100 Гостей 85 оценили свой визит на 5 из 5.' },
              { num: 'KPI 3', title: 'B2B OSAT — Bottom 2 Box', body: <>Сумма всех отзывов с оценками <strong>1 и 2</strong> по пунктам опроса. Важный показатель для дополнительного анализа неудовлетворенности Гостей.</>, example: 'Всего опросов в октябре — 40. Оценка «1» — 1 опрос, оценка «2» — 1 опрос. Сумма оценок 1 и 2 / на общее количество оценок = <strong>5%</strong>' },
              { num: 'KPI 4', title: 'Решение проблем', body: <>Отзывы, в которых Гость указал, что столкнулся с проблемой во время визита, и затем оценил ее решение на <strong>5 из 5</strong>. Показатель позволяет оценить эффективность решения проблем непосредственно в ресторане.</>, example: '10 Гостей столкнулись с проблемой, 3 из 10 остались удовлетворены решением — показатель Решение проблем = <strong>30%</strong>' },
            ].map((kpi, i) => (
              <div key={i} className="border-[1.5px] border-[#f2f1ef] rounded-xl p-5 bg-white">
                <div className="text-[13px] font-extrabold text-kfc-red tracking-wider uppercase mb-1.5">{kpi.num}</div>
                <div className="text-sm font-bold mb-1.5">{kpi.title}</div>
                <div className="text-[13px] text-[#444] leading-relaxed">{kpi.body}</div>
                {kpi.example && (
                  <div className="text-[13px] text-[#656565] mt-2 pt-2 border-t border-[#f2f1ef] leading-relaxed">
                    <strong>Пример:</strong> <span dangerouslySetInnerHTML={{ __html: kpi.example }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Основные драйверы для анализа</h3>
          <div className="grid grid-cols-2 gap-4 my-3">
            <div>
              <div className="text-[13px] font-bold mb-2 uppercase tracking-wider text-[#656565]">Основные драйверы</div>
              <ul className="my-1 pl-0 list-none">
                {['Вкус еды', 'Скорость обслуживания', 'Точность выполнения заказа', 'Доброжелательность сотрудников', 'Вероятность возврата', 'Вероятность рекомендаций', 'Чистота', 'Гигиенические практики'].map((item, i) => (
                  <li key={i} className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>
                    <span className="absolute left-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[13px] font-bold mb-2 uppercase tracking-wider text-[#656565]">Дополнительные пункты опроса</div>
              <ul className="my-1 pl-0 list-none">
                {['Грубость/невежливость сотрудников', 'Недостающие блюда или приборы', 'Определенного блюда не было в наличии', 'Внешний вид сотрудника доставки', 'Ненадлежащая температура блюда', 'Удобство использования сайта', 'Удобство оплаты картой', 'Удобство изменения заказа', 'Ощущение срочности в работе сотрудников', 'B2B по конкретному драйверу и т.д.'].map((item, i) => (
                  <li key={i} className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>
                    <span className="absolute left-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-[13px] text-[#656565]" style={{ lineHeight: '1.7' }}>
            Всего более <strong>70 пунктов опроса</strong> помогут максимально расширенно проанализировать отчет.
          </p>

          {/* DASHBOARD RGM */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Dashboard — Панель лидера (для SM / ARGM / RGM)
          </h2>

          {[
            { num: '1.', title: 'Панель показателей', text: ' — результат ключевих KPI текущего периода: OSAT, B2B OSAT и столкнулись с проблемой (% Гостей, которые столкнулись с проблемой в ресторане)' },
            { num: '2.', title: '«Выигрышный период»', text: ' — указывает на количество дней, в течение которых ресторан не получал жалоб от неудовлетворенных или очень неудовлетворенных гостей в OSAT (оценки 1 и 2)' },
            { num: '3.', title: 'Как выполнить сравнение?', text: ' — сравнение показателей вашего ресторана по основным драйверам с предыдущими 30 днями и со страной' },
            { num: '4.', title: 'Как улучшить общую удовлетворенность (OSAT)?', text: ' — отчет показывает лучшие и худшие результаты по драйверам с разбивкой на дни недели и тип визита. Помогает определить, на каких драйверах, при каком типе визита и в какие дни недели сосредоточить усилия' },
            { num: '5.', title: 'Рейтинг филиалов', text: ' — количество отзывов и результат по основным драйверам по ресторану и территории в текущем периоде. К отчетам можно перейти нажав «Показать все результаты»' },
            { num: '6.', title: 'Месячный Тренд', text: ' — тренд по трем ключевым драйверам: Точность, Скорость и Вкус в разрезе последних 6 месяцев (результат и количество отзывов)' },
            { num: '7.', title: 'Отчет о комментариях', text: ' — быстрое ознакомление с последними комментариями гостей. Кнопка «Просмотреть все комментарии» ведет к полному отчету о комментариях' },
            { num: '8.', title: 'Статус обработки Winback', text: ' — N/А для нашего BU, т.к. мы не обрабатываем жалобы на платформе GES' },
            { num: '9.', title: '', text: 'Раздел позволяет просмотреть все ваши <strong>сохраненные отчеты</strong> и быстро перейти к ним', isHtml: true },
          ].map((item, i) => (
            <div key={i} className="my-3.5 py-3.5 px-4 bg-[#fafafa] border-l-[3px] border-[#dad6cf] rounded-r-md text-sm leading-relaxed">
              {item.num && <span className="font-extrabold text-kfc-red inline-block min-w-[22px]">{item.num}</span>}
              {item.title && <span className="font-bold">{item.title}</span>}
              {item.isHtml ? <span dangerouslySetInnerHTML={{ __html: item.text }} /> : <span>{item.text}</span>}
            </div>
          ))}

          {/* DASHBOARD AC */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Dashboard — Панель лидера (для AC)
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Dashboard Area Coach идентичен Dashboard RGM. Охватывает все те же разделы и KPI, только по территории. Есть исключения:
          </p>
          <ul className="my-2.5 p-0 list-none">
            {['Отсутствует показатель «Выигрышный период»', 'Отсутствует показатель «Рейтинг филиалов»', 'Отсутствует показатель «Как улучшить OSAT»', 'Добавился отчет «Худшие/Лучшие»'].map((item, i) => (
              <li key={i} className="text-sm py-1 pl-5 relative leading-relaxed">
                <span className="absolute left-0.5 text-kfc-red font-bold">–</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-[#f4f4f4] border-[1.5px] border-[#f2f1ef] rounded-lg p-4 my-4 text-sm leading-relaxed">
            <strong>Отчет Лучшие/Худшие</strong> — показывает 5 лучших и 5 худших результатов за период по одному из выбранных показателей. Для построения отчета необходимо:<br /><br />
            1. Выбрать интервал дат<br />
            2. Выбрать показатель, по которому отслеживать лучшие и худшие результаты<br />
            3. Выбрать иерархию (ресторан, ТУ и т.д.)
          </div>

          {/* EXECUTIVE DASHBOARD */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Executive Dashboard (только для ARL)
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Для выбора этого отчета нажмите <strong>«360»</strong> на верхней панели инструментов, затем выберите <strong>«Панель мониторинга»</strong>.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Слева на панели инструментов выберите необходимые фильтры в выпадающих окнах. В фильтре свойства можно выбрать «Показать все свойства», вывести их на экран и отфильтровать каждую по удовлетворенности Гостя.
          </p>

          {[
            { header: 'Отчет 1. Как выполнить сравнение?', body: 'Показывает результаты ключевых драйверов текущего периода, предыдущего периода и результат текущего периода по BU.' },
            { header: 'Отчет 2. Победы и наблюдения', body: <>Аналитика, основанная на комментариях гостей. Показывает:
              <ul className="my-2 pl-0 list-none">
                <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Количество упоминаний по категориям или продукту и тренд (сравнение текущего периода с предыдущим)</li>
                <li className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>• Количество позитивных / негативных отзывов по каждой категории или продукту и тренд</li>
              </ul>
              <p className="text-sm mb-1" style={{ lineHeight: '1.7' }}><strong>Пример:</strong> Количество упоминаний о категории «Скорость» уменьшилось на 0,2%, количество позитивных отзывов увеличилось на 1%</p>
              <p className="text-sm mb-1" style={{ lineHeight: '1.7' }}><strong>Построение отчета:</strong></p>
              <ol className="list-none my-2 pl-0" style={{ counterReset: 'ol-c' }}>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">1.</span>В верхнем поле отчета стрелками влево и вправо выберите аналитику по Категориям или Продукту</li>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">2.</span>Для просмотра всех Категорий нажмите кнопку в нижнем левом углу «Просмотр отчета»</li>
              </ol>
              <p className="text-sm mb-1" style={{ lineHeight: '1.7' }}>В верхней части полного отчета можно отфильтровать все категории от большего к меньшему и наоборот, по: количеству отзывов, количеству упоминаний, тренду негативных/позитивных упоминаний.</p>
            </> },
            { header: 'Отчет 3. Что говорят Гости?', body: <>Аналитика, основанная на комментариях Гостей. Программа идентифицирует конкретные слова или фразы из комментариев.
              <ol className="list-none my-2 pl-0" style={{ counterReset: 'ol-c' }}>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">1.</span>Можно выбрать от 1 до 3 фокусных слов для поиска комментариев Гостей</li>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">2.</span>Нажав «Просмотреть отчет по комментариям», увидеть все комментарии, в которых упоминались выбранные слова</li>
              </ol>
              <p className="text-sm mb-1" style={{ lineHeight: '1.7' }}>В комментариях по выбранным словам отображается: общее мнение, количество негативных и позитивных отзывов, все комментарии с упоминанием выбранных слов. На левой панели фильтров можно выбрать только позитивные или только негативные отзывы.</p>
            </> },
            { header: 'Отчет 4. ТОП 10', body: <>Аналитика по 10 категориям и продуктам с наибольшим количеством отзывов, основанная на комментариях гостей. Показывает количество упоминаний, позитивных и негативных отзывов по каждой категории.
              <ol className="list-none my-2 pl-0" style={{ counterReset: 'ol-c' }}>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">1.</span>В верхнем поле отчета стрелками выберите аналитику по Категориям или Продукту</li>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">2.</span>Наведя курсор на один из столбцов, можно увидеть количество позитивных и негативных отзывов, а также количество обращений</li>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">3.</span>Нажав кнопку в правом нижнем углу «Просмотреть отчет по комментариям», можно увидеть все комментарии гостей по выбранной категории</li>
              </ol>
            </> },
            { header: 'Отчет 5. Тренд', body: <>Показывает, как меняется тренд 6 категорий в зависимости от комментариев гостей с течением времени, какие категории упоминаются больше всего, включая позитивные и негативные отзывы по каждой категории.
              <ol className="list-none my-2 pl-0" style={{ counterReset: 'ol-c' }}>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">1.</span>В верхней части отчета выберите просмотр тренда в абсолютных числах или в %</li>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">2.</span>Переключите временной интервал: за неделю, месяц или квартал</li>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">3.</span>Наведя курсор на линии тренда категорий, в любой пиковой точке увидеть количество комментариев с разбивкой на позитивные и негативные</li>
                <li className="text-sm py-0.5 relative" style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}><span className="absolute left-0 font-semibold">4.</span>Нажав кнопку «Просмотреть все категории», можно увидеть все комментарии гостей по выбранной категории</li>
              </ol>
            </> },
          ].map((report, i) => (
            <div key={i} className="border-[1.5px] border-[#f2f1ef] rounded-lg my-3.5 overflow-hidden">
              <div className="bg-[#f4f4f4] px-4 py-2.5 text-sm font-bold border-b border-[#f2f1ef]">{report.header}</div>
              <div className="px-4 py-3.5 text-sm leading-relaxed">{report.body}</div>
            </div>
          ))}

          {/* ТЕКСТОВЫЙ АНАЛИЗ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Текстовый анализ
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Для выбора этого отчета нажмите <strong>«360»</strong> на верхней панели инструментов, затем выберите <strong>«Панель мониторинга»</strong>. Фильтры выбираются по аналогии с Executive Dashboard.
          </p>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              'Выбираем необходимые фильтры',
              'В Темах выбираем продукт или категорию',
              'Видим общее мнение Гостей по выбранной категории или продукту, а также количество позитивных и негативных отзывов',
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
          <div className="bg-[#f4f4f4] border-[1.5px] border-[#f2f1ef] rounded-lg p-4 my-4 text-sm leading-relaxed">
            <strong>Пример работы с отчетом:</strong><br /><br />
            Задача: посмотреть все комментарии Гостей, которые оценили Вкус еды на 1, 2, 3 и 4 и отметили Влияние на вкус еды — Картофель фри.<br /><br />
            — Слева выбираем фильтр: отзывы, в которых Гости оценили Вкус еды от 1 до 4<br />
            — В темах выбираем продукт — Картофель<br /><br />
            Видим общее мнение Гостей по картофелю, а также количество позитивных и негативных отзывов. Справа видим все отзывы, в которых упоминалось слово «картофель».
          </div>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В поле <strong>Темы</strong> можно выбрать Категории или Продукты и увидеть количество позитивных или негативных отзывов по каждому типу. Есть возможность выбора подкатегории выпадающим списком справа от категории для более детального анализа.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Под темами можно выбрать фильтр по самым популярным словам. Использование фильтра помогает выбрать отзывы по этому слову.
          </p>

          {/* GES РЕПОРТИНГ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            GES-репортинг
          </h2>
          <h3 className="text-[15px] font-bold mt-5 mb-2">Основные шаги для построения отчетов</h3>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              <>На верхней панели инструментов выберите <strong>«Отчеты»</strong></>,
              'Выберите тип отчета и период, за который необходимо сформировать отчет',
              'Выберите уровень отчетности (ресторан, территория, маркет, страна и т.д.)',
              <>Выберите пункты опроса для отображения в отчете и нажмите <strong>«Построение отчета»</strong>. Отчет будет сформирован и доступен для загрузки в выбранном формате</>,
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

          {[
            { header: 'Отчет «Сравнение»', body: 'Используется для сравнения с предыдущим периодом по тем пунктам, которые вы выбрали.' },
            { header: 'Отчет «Полный масштаб»', body: 'Позволяет увидеть, какое количество Гостей оценили каждый пункт опроса в 1, 2, 3, 4, 5 и % от общего числа оценок. Мониторинг этого отчета позволяет увидеть возможности для роста и двигаться в направлении удовлетворения ожиданий Гостей.' },
            { header: 'Отчет «Комментарий»', body: 'Включает в себя открытые комментарии, оставленные Гостями. Вопрос, к которому дан тот или иной комментарий, показан в столбце «Пункт опроса».' },
            { header: '«Перекрестный» отчет', body: 'Позволяет увидеть зависимость одних критериев оценки от других. Например, насколько вероятно вернуться Гости, если их Общее впечатление было не превосходным.' },
            { header: 'Отчет по заполнению опросов', body: 'Показывает общее количество ответов, достоверных ответов, и количество людей, которые отказались от заполнения опроса, начав его. Для сортировки нажмите на заголовки столбцов — от максимального к минимальному и наоборот.' },
          ].map((report, i) => (
            <div key={i} className="border-[1.5px] border-[#f2f1ef] rounded-lg my-3.5 overflow-hidden">
              <div className="bg-[#f4f4f4] px-4 py-2.5 text-sm font-bold border-b border-[#f2f1ef]">{report.header}</div>
              <div className="px-4 py-3.5 text-sm leading-relaxed"><p>{report.body}</p></div>
            </div>
          ))}

          {/* ДЕТАЛЬНЫЙ АНАЛИЗ ПРОДУКТОВ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Детальный анализ продуктов с помощью GES
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Эти отчеты позволяют проанализировать:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Какие продукты имеют наибольшее влияние на Общее Впечатление</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Неудовлетворенность продуктом с течением времени</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Причины недовольства продуктами с самой низкой оценкой</li>
          </ul>

          {[
            { title: 'Какие продукты имеют наибольшее влияние на Общее Впечатление', steps: ['Запустите отчет «Сравнение» за период 3+ месяцев', 'Выберите свой Рынок', 'Выберите пункты опроса для отображения: Общее впечатление, Вкус еды, Общая ценность', 'Сравните по критерию «Влияние на вкус продуктов»'] },
            { title: 'Неудовлетворенность продуктом за период времени', steps: ['Сформируйте «Перекрестный» отчет за один месяц', 'Выберите свой Рынок', 'Выберите «Вкус еды» в первом раскрывающемся списке', 'Выберите «Влияние на вкус продукта» во втором раскрывающемся списке', 'Обратите внимание на сумму оценок 1–3 (недовольные и равнодушные Гости). Этот отчет нужно запускать по месяцам для создания графика тренда'] },
            { title: 'Определение причины недовольства продуктами с самой низкой оценкой', steps: ['Сформируйте отчет «Сравнение» в течение минимум 3-х месяцев', 'Выберите Рынок', 'Выберите пункт опроса «Вкус еды» для отображения в отчете', 'Отфильтруйте по «Улучшить результаты»', 'Отфильтруйте по продукту с наивысшим недовольством, используя вкладку «Фильтрация данных» в меню «Улучшить результаты»'] },
          ].map((block, i) => (
            <div key={i} className="bg-[#fdf8f4] border-[1.5px] border-[#e8ddd0] rounded-lg p-4 my-2.5">
              <div className="text-[13px] font-extrabold uppercase tracking-wider text-[#87041e] mb-2.5">{block.title}</div>
              <ol className="list-none m-0 pl-0" style={{ counterReset: 'ol-c' }}>
                {block.steps.map((step, si) => (
                  <li
                    key={si}
                    className="text-[13px] py-0.5 relative"
                    style={{ paddingLeft: '22px', lineHeight: '1.6', counterIncrement: 'ol-c' }}
                  >
                    <span className="absolute left-0 font-semibold">
                      {si + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}

          {/* АНАЛИЗ LTO */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Анализ данных об LTO
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Анализ LTO необходим для:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Оценки влияния продуктов LTO на Общее впечатление</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Измерения удовлетворенности продуктов LTO</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Получения результатов опроса по продуктам LTO</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Обзора впечатлений от продуктов LTO vs Общая производительность</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Анализа зависимости продуктов LTO от Общего впечатления</li>
          </ul>

          {[
            { title: 'Влияние продуктов LTO на Общее Впечатление', steps: ['Выберите отчет «Сравнение» — выполнять еженедельно, используя селектор даты, для создания графика тренда', 'Выберите «Рынок»', 'Выберите пункты опроса: OSAT, «Вкус», «Точность и скорость»', 'Выберите дату за 4–6 недель до начала маркетингового окна', 'Выберите дату в течение первых недель после начала маркетингового окна'] },
            { title: 'Измерение удовлетворенности LTO с помощью комментариев Гостей', steps: ['Запустите отчет «Комментарий» за период времени LTO', 'Выберите «Рынок»', 'Выберите «Удовлетворение» в поле «Объекты опроса»', 'В комментарии к поиску впишите продукт, по которому хотите увидеть комментарии', 'Сформируйте отчет — в нем будут показаны все комментарии, содержащие название продукта. Сравните количество удовлетворенных / неудовлетворенных Гостей'] },
          ].map((block, i) => (
            <div key={i} className="bg-[#fdf8f4] border-[1.5px] border-[#e8ddd0] rounded-lg p-4 my-2.5">
              <div className="text-[13px] font-extrabold uppercase tracking-wider text-[#87041e] mb-2.5">{block.title}</div>
              <ol className="list-none m-0 pl-0" style={{ counterReset: 'ol-c' }}>
                {block.steps.map((step, si) => (
                  <li
                    key={si}
                    className="text-[13px] py-0.5 relative"
                    style={{ paddingLeft: '22px', lineHeight: '1.6', counterIncrement: 'ol-c' }}
                  >
                    <span className="absolute left-0 font-semibold">
                      {si + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}

          {/* ВЫИГРЫШНЫЙ ПЕРИОД */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Отчет «Выигрышный период»
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            <strong>«Выигрышный период»</strong> указывает на количество дней, в течение которых ресторан не получал жалоб от неудовлетворенных или очень неудовлетворенных гостей в OSAT (оценки 1 и 2).
          </p>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              'Запустите отчет «Выигрышный период»',
              'Выберите «Подразделение»',
              'В Данных отчета выберите «B2B»',
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
          <div className="bg-[#f4f4f4] border-[1.5px] border-[#f2f1ef] rounded-lg p-4 my-4 text-sm leading-relaxed">
            <strong>Пример:</strong> KFC Sverdlovskiy Moscow:<br />
            — самый длительный период в ноябре без оценок 1 и 2 — <strong>15 дней</strong><br />
            — в настоящий момент период без 1 и 2 составляет всего <strong>5 дней</strong>, т.к. 5 дней назад ресторан получил негативный отзыв
          </div>

          {/* ЕЖЕНЕДЕЛЬНЫЙ ОТЧЕТ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Еженедельный отчет
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Каждый ресторан еженедельно получает отчет, в котором содержится сводная таблица отзывов Гостей за предыдущую неделю.
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Помогает ресторанам определить насколько они близки к достижению минимального количества отзывов за период</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Если Гость не оставил комментарий, то этот отзыв все равно будет включен в отчет, но поле «Комментарий» будет пустым</li>
          </ul>

          {/* ОТЧЕТ ЗА ПЕРИОД */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Отчет за период
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Не позднее <strong>7-го числа</strong> каждого месяца ресторан получает отчет за период (за предыдущий месяц). Помогает определить зоны с великолепными результатами и возможностями для роста.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Отчет включает в себя:
          </p>
          <ul className="my-2 pl-0 list-none">
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Рейтинг ресторана в разрезе страны</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Показатель B2B и тренд в сравнении с предыдущим периодом</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Показатель OSAT и тренд в сравнении с предыдущим периодом</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• % Гостей, столкнувшихся с проблемой в ресторане, и тренд</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• % Гостей, удовлетворенных решением проблемы, и тренд</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Количество отзывов по типу размещения заказа (диджитал каналы и прилавок)</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Категорию (драйвер) для анализа и исправления ситуации, а также конкретный продукт или проблему — на основе текстового анализа комментариев Гостей</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Дни недели и часы, требующие улучшения</li>
            <li className="text-sm py-1 relative pl-5" style={{ lineHeight: '1.65' }}>• Тип размещения и получения заказа, являющийся возможностью для улучшения</li>
          </ul>

          {/* НАСТРОЙКА РАССЫЛКИ */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Настройка автоматической рассылки отчетов
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Для настройки отправки «быстрого отчета» пользователь (любой пользователь выше уровня «Ресторан») должен выполнить следующие действия:
          </p>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            {[
              <>Нажмите на вкладку <strong>«Фавориты»</strong> на верхней панели инструментов</>,
              <>Найдите раздел <strong>«Быстрые результаты»</strong></>,
              <>Нажмите кнопку <strong>«Управление»</strong></>,
              <>Нажмите кнопку <strong>«Добавить»</strong> и последовательно внесите всю необходимую информацию</>,
              <>Нажмите кнопку <strong>«Сохранить»</strong></>,
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
            Выполнив этот алгоритм, вы добавили в ваш быстрый отчет одну строку с данными по конкретному ресторану. Если у Вас шесть ресторанов — выполните алгоритм шесть раз.
          </p>
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            <strong>ВАЖНО:</strong> После выполнения алгоритма зайдите в закладку «Электронная почта» и внесите адреса почты получателей (например, ресторанов). Адресов получателей не может быть более <strong>10</strong>.
          </div>

          {/* ПРИЛОЖЕНИЕ KFC */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Отзывы Гостей из ПРИЛОЖЕНИЯ KFC
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Наши Гости имеют возможность оставить отзывы не только через источник GES, но и через <strong>мобильное приложение KFC (App)</strong>. После размещения заказа на доставку или C&C, Гости оценивают свой опыт по 5-бальной шкале и выбирают драйвер.
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Таким образом, в SMG можно видеть OSAT из источника APP.
          </p>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Как посмотреть OSAT из источника APP?</h3>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            <li
              className="text-sm py-1 relative"
              style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
            >
              <span className="absolute left-0 font-semibold min-w-[22px]">1.</span>
              В отчете «Сравнение» выбрать пункт «Общее впечатление»
            </li>
            <li
              className="text-sm py-1 relative"
              style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
            >
              <span className="absolute left-0 font-semibold min-w-[22px]">2.</span>
              В фильтрах выбрать Тип источника отзывов — <strong>«App»</strong>
            </li>
          </ol>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Наведите курсор на показатель Общее впечатление и увидите количество отзывов и % общего впечатления, где <em>n</em> — количество ответов. Количество отзывов в графе подсчет показывает общее количество отзывов. Посмотреть детально количество отзывов и оценки можно в отчете «Полный масштаб».
          </p>

          {/* ДРАЙВЕРЫ APP */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Драйверы источника обратной связи — App
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            После размещения заказа через мобильное приложение (доставка или C&C), Гости оценивают свой опыт от 1 до 5 звезд и могут выбрать один из 5 драйверов.
          </p>

          <div className="grid grid-cols-2 gap-4 my-3">
            <div>
              <div className="text-[13px] font-bold mb-2 uppercase tracking-wider text-[#656565]">1–4 звезды — Гость не удовлетворен</div>
              <ul className="my-1 pl-0 list-none">
                {['Дружелюбие сотрудников', 'Чистота в ресторане', 'Вкус еды', 'Скорость обслуживания', 'Точность заказа'].map((item, i) => (
                  <li key={i} className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>
                    <span className="absolute left-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[13px] font-bold mb-2 uppercase tracking-wider text-[#656565]">5 звезд — Гость удовлетворен</div>
              <ul className="my-1 pl-0 list-none">
                {['Дружелюбие сотрудников', 'Отличное обслуживание', 'Вкусная еда'].map((item, i) => (
                  <li key={i} className="text-sm py-0.5 relative pl-5" style={{ lineHeight: '1.65' }}>
                    <span className="absolute left-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OSAT ПО ТИПУ ВИЗИТА */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            OSAT GES или OSAT App — по типу визита или методу заказа
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Для того, чтобы посмотреть результат OSAT GES или OSAT APP по типу визита (в зале, на вынос, на автораздаче или доставка) или по методу заказа (через киоск, мобильное приложение, прилавок и т.д.) необходимо:
          </p>
          <ol className="list-none my-3 pl-0" style={{ counterReset: 'ol-c' }}>
            <li
              className="text-sm py-1 relative"
              style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
            >
              <span className="absolute left-0 font-semibold min-w-[22px]">1.</span>
              В Отчете «Сравнение» выбрать пункт опроса «Общее впечатление» — для GES; или «Общее впечатление» + фильтр Тип источника отзывов «App» — для OSAT App
            </li>
            <li
              className="text-sm py-1 relative"
              style={{ paddingLeft: '26px', lineHeight: '1.65', counterIncrement: 'ol-c' }}
            >
              <span className="absolute left-0 font-semibold min-w-[22px]">2.</span>
              Воспользоваться фильтром (кнопкой) <strong>«Улучшить результаты»</strong> и выбрать «Тип визита» или «Метод заказа»
            </li>
          </ol>

          {/* OSAT DELIVERY CLUB */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            OSAT Delivery Club и Скорость доставки Delivery Club
          </h2>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            В SMG есть возможность посмотреть два показателя (ТОЛЬКО для ресторанов с доставкой Delivery Club):
          </p>

          <h3 className="text-[15px] font-bold mt-5 mb-2">1. Скорость доставки Delivery Club</h3>
          {[
            { label: 'Время ожидания курьера', value: 'Aggregator – Driver Wait Time' },
            { label: 'Общее время доставки', value: 'Aggregator – Average Delivery Time' },
            { label: 'Доставлено вовремя (Да/Нет)', value: 'Aggregator – Promise Fulfilled (Y/N)' },
          ].map((row, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[#f2f1ef] text-sm leading-relaxed">
              <div className="font-bold min-w-[220px] flex-shrink-0">{row.label}</div>
              <div>{row.value}</div>
            </div>
          ))}
          <p className="text-sm mb-2 mt-2" style={{ lineHeight: '1.7' }}>
            Посмотреть СКОРОСТЬ ДОСТАВКИ можно в отчете «Сравнение», выбрав соответствующие пункты опроса.
          </p>

          <h3 className="text-[15px] font-bold mt-5 mb-2">2. OSAT Delivery Club</h3>
          {[
            { label: 'DeliveryClub OSAT (%Positive)', value: '% ответов «ДА» на вопрос «Все ли вам понравилось?»' },
            { label: 'Delivery club – Taste (%Positive)', value: '% ответов «ДА» на вопрос «Понравилась ли вам еда?»' },
            { label: 'Delivery club – Speed (%Positive)', value: '% ответов «ДА» на вопрос «Был ли заказ доставлен вовремя?»' },
            { label: 'Delivery club – Accuracy (%Positive)', value: '% ответов «ДА» на вопрос «Был ли заказ собран точно?»' },
          ].map((row, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[#f2f1ef] text-sm leading-relaxed">
              <div className="font-bold min-w-[220px] flex-shrink-0">{row.label}</div>
              <div>{row.value}</div>
            </div>
          ))}
          <p className="text-sm mb-2 mt-2" style={{ lineHeight: '1.7' }}>
            Посмотреть OSAT Delivery Club можно в отчете «Сравнение», выбрав соответствующие пункты опроса.
          </p>

          {/* СПРАВКА */}
          <h2 className="text-lg font-extrabold mt-9 mb-3 leading-tight pt-7 border-t-2 border-[#f2f1ef]">
            Раздел «Справка» в GES
          </h2>
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 my-3 text-sm" style={{ lineHeight: '1.65' }}>
            <strong>ВАЖНО:</strong> Для входа на сайт GES необходимо использовать URL-адрес (см. ниже) и <strong>SSO (Yum ID + пароль)</strong>. Чтобы обновить SSO, обратитесь к администратору GEM.
          </div>

          <h3 className="text-[15px] font-bold mt-5 mb-2">Ссылка на сайт GES</h3>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Посетите раздел <strong>«Справка»</strong> для получения инструкций по использованию веб-сайта и отчетов, а также раздел «Наиболее часто задаваемые вопросы».
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            Также вы можете работать с порталом SMG через <strong>мобильное приложение</strong>.
          </p>

          {/* PDF */}
          <a href="#" className="flex items-center gap-3 border-[1.5px] border-[#f2f1ef] rounded-lg p-3 my-2.5 no-underline bg-white hover:bg-[#fff0f2] hover:border-kfc-red max-w-[640px] transition-colors">
            <PdfSvg />
            <div>
              <span className="text-[13px] font-semibold text-kfc-red leading-snug">GES App Pairing Guide</span>
              <div className="text-xs text-[#656565] mt-0.5">321.24 KB</div>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}
