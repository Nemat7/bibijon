import { AlertTriangle } from 'lucide-react'
import Topbar from '@/components/Topbar'
import ArticleHeader from '@/components/ArticleHeader'
import TagsRow from '@/components/TagsRow'

const HeadsetSvg = () => (
  <svg viewBox="0 0 100 100" fill="white" opacity="0.3" className="w-14 h-14">
    <circle cx="50" cy="35" r="14" />
    <rect x="34" y="30" width="4" height="10" rx="2" />
    <path d="M50 51 L50 51 C38 51 28 58 28 68 L28 85 L72 85 L72 68 C72 58 62 51 50 51Z" />
  </svg>
)

const PvSvg = () => (
  <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <rect width="36" height="44" rx="4" fill="#fff0f2" />
    <rect x="0.75" y="0.75" width="34.5" height="42.5" rx="3.25" stroke="#e4002b" strokeWidth="1.5" />
    <text x="18" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#e4002b">PDF</text>
    <line x1="8" y1="28" x2="28" y2="28" stroke="#e4002b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="33" x2="24" y2="33" stroke="#e4002b" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const tags = [
  '#Обслуживание',
  '#KSC',
  '#Яркая',
  '#AR',
  '#Атлас',
  '#Промо',
  '#42',
  '#Бренд',
  '#лидерство',
  '#обслуживание',
  '#качество',
]

export default function ServisArticle() {
  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Обслуживание', href: '/standards/obsluzhivanie' },
          { label: 'Незабываемый сервис' },
        ]}
      />

      <div style={{ padding: '28px 36px 60px' }}>
        <ArticleHeader
          photoGradient="linear-gradient(150deg, #f07020 0%, #c04810 50%, #882808 100%)"
          category="Обслуживание"
          title="Незабываемый сервис"
          description="Предоставляй незабываемый сервис: вы сможете, когда ваш подход к каждому Гостю будет индивидуальным, не бойтесь задать ему заботливый вопрос! Проявляйте свою индивидуальность!"
          tags={[]}
          svgContent={<HeadsetSvg />}
        />

        <div className="mt-5" />

        <TagsRow tags={tags} showMore={5} actions />

        <div style={{ maxWidth: '860px', color: '#212121' }} className="mt-7">
          {/* ВВЕДЕНИЕ */}
          <h2 className="text-lg font-extrabold leading-tight mb-3" style={{ letterSpacing: '-0.02em' }}>
            Введение
          </h2>
          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Для предоставления Сердечного гостеприимства, у нас есть три основных правила-принципы незабываемого сервиса:
          </p>

          <ol className="list-none my-4 pl-0" style={{ counterReset: 'pr-c' }}>
            {[
              'Страсть к продукту, продавай его с гордостью',
              'Относись к каждому Гостю как к другу',
              'Убедись, чтобы Гости уходили от нас счастливыми',
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm py-2.5"
                style={{ borderBottom: '1px solid #f2f1ef', lineHeight: '1.6' }}
              >
                <span
                  className="w-7 h-7 rounded-full bg-[#e4002b] text-white font-extrabold text-[13px] flex items-center justify-center flex-shrink-0 mt-px"
                >
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Предоставить незабываемый сервис вы сможете, когда ваш подход к каждому Гостю будет индивидуальным, не бойтесь задать лишний раз заботливый вопрос!
          </p>
          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            <strong>Проявляйте свою индивидуальность!</strong>
          </p>
          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Мы верим в дружелюбное искреннее отношение к Гостю, которое заставляет его возвращаться к нам снова и снова.
          </p>

          <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
            <strong>Мы:</strong>
          </p>
          <ul className="list-none p-0 m-0 mb-4">
            {[
              'Относимся к нашим продуктам с любовью и страстью, и подаем их нашим Гостям с гордостью',
              'Делаем все, чтобы обслуживать наших Гостей быстро и качественно',
              'Проявляем свои лучшие качества в работе с Гостями и относимся к ним как к друзьям',
              'Убеждаемся, что наши Гости уходят счастливыми',
              'Делаем время наших Гостей в ресторане KFC незабываемым',
              'Следим за чистотой наших ресторанов',
            ].map((item, i) => (
              <li key={i} className="text-sm py-1 relative" style={{ paddingLeft: '18px', lineHeight: '1.65' }}>
                <span className="absolute left-0 text-[11px]" style={{ color: '#e4002b', top: '7px' }}>★</span>
                {item}
              </li>
            ))}
          </ul>

          {/* СТАНДАРТЫ */}
          <h2
            className="text-lg font-extrabold leading-tight"
            style={{ marginTop: '36px', marginBottom: '12px', paddingTop: '28px', borderTop: '2px solid #f2f1ef', letterSpacing: '-0.02em' }}
          >
            Стандарты
          </h2>

          {/* ПРИВЕТСТВИЕ */}
          <span
            className="inline-block bg-[#e4002b] text-white text-[13px] font-extrabold tracking-wide uppercase rounded px-3.5 py-1 mb-2.5 mt-6"
            style={{ letterSpacing: '0.04em' }}
          >
            Приветствие
          </span>
          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Впечатления Гостя начинают формироваться, когда он входит в ресторан или подъезжает к окну автораздачи, где его приветствует член команды. Если вы своевременно поприветствуете Гостя, он почувствует себя желанным.
          </p>

          <ul className="list-none p-0 m-0 mb-3">
            {[
              <>Поприветствуйте Гостя в течение <strong>5 секунд</strong> теплой улыбкой и визуальным контактом</>,
              'Приветствие должно быть дружеским, а не заученным и бездушным',
                'Улыбайтесь искренне. Будьте доброжелательны и радушны',
              'Сразу после слов приветствия спросите, чем вы можете помочь, или предложите Гостю сделать заказ',
            ].map((item, i) => (
              <li key={i} className="text-sm py-1 relative" style={{ paddingLeft: '26px', lineHeight: '1.65' }}>
                <span className="absolute left-0.5 font-bold text-[#e4002b]">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-[#fafafa] rounded-lg p-4 my-3" style={{ border: '1.5px solid #f2f1ef' }}>
            <div className="text-xs font-bold uppercase tracking-wider text-[#656565] mb-2.5" style={{ letterSpacing: '0.06em' }}>
              Примеры фраз для приветствия
            </div>
            {[
              'Здравствуйте! ТАК ХОРОШО, что вы пришли! Могу я принять ваш заказ?',
              'Здравствуйте! Спасибо, что Вы выбрали нас!',
              'Добрый день, мы рады видеть вас! Чем я могу помочь вам сегодня?',
              'Здравствуйте, добро пожаловать в KFC! Чем я могу вам помочь?',
              'Спасибо, что пришли к нам! Что я могу сделать для вас сегодня?',
              'Добрый вечер. Что я могу для вас сделать?',
              <>Мы рады видеть вас снова <span className="text-[#656565] text-xs not-italic">(приветствие постоянного Гостя)</span></>,
            ].map((phrase, i) => (
              <div
                key={i}
                className="text-sm italic text-[#333] py-1 relative"
                style={{ paddingLeft: '16px', lineHeight: '1.6', borderBottom: i < 6 ? '1px solid #f2f1ef' : 'none' }}
              >
                <span className="absolute left-0 text-[#e4002b] font-black text-base not-italic" style={{ top: '3px' }}>"</span>
                {phrase}
              </div>
            ))}
          </div>

          {/* ПРИЕМ ЗАКАЗА */}
          <span
            className="inline-block bg-[#e4002b] text-white text-[13px] font-extrabold tracking-wide uppercase rounded px-3.5 py-1 mb-2.5 mt-6"
            style={{ letterSpacing: '0.04em' }}
          >
            Прием заказа
          </span>
          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Абсолютная точность при приеме заказа критически важна. Когда команда добивается соблюдения всех стандартов приема заказа, она создает у Гостя желаемое впечатление:
          </p>

          <ul className="list-none p-0 m-0 mb-3">
            {[
              'Внимательно слушайте Гостей',
              'Задавайте вопросы для ясного понимания',
              'Будьте точны при приеме и вводе заказа',
              'Попросите Гостя подтвердить правильность заказа, посмотрев его на мониторе (со стороны Гостя)',
              'Ваша скорость работы должна соответствовать потребностям Гостя',
              <><strong>Заказ необходимо принять в течение 30 секунд</strong></>,
              'Если Гость торопится и точно знает, что он хочет заказать, сразу перейдите к приему заказа',
              'Если Гость не знает точно, что он хочет заказать, и/или ему требуется информация о продуктах, потратьте время на удовлетворение его потребностей',
            ].map((item, i) => (
              <li key={i} className="text-sm py-1 relative" style={{ paddingLeft: '26px', lineHeight: '1.65' }}>
                <span className="absolute left-0.5 font-bold text-[#e4002b]">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Подробное описание всех блюд смотрите в конце документа.
          </p>

          <ul className="list-none p-0 m-0 mb-3">
            {[
              'Выясните, будет ли Гость есть в зале или возьмет еду на вынос',
              <>Рассказывайте Гостям о новинках, промо-акциях или спецпредложениях: <em>«У нас сейчас есть отличное предложение. Давайте я вам о нем расскажу!»</em></>,
              'Если Гость сомневается, предложите ему свое любимое блюдо',
              <>Рассказывая о промо-акциях или спецпредложениях, уточните, какое количество людей Гость собирается накормить. Это позволит вам предложить специальный продукт, отвечающий потребностям Гостя (например, Баскет): <em>«На какое количество людей будет рассчитан ваш заказ?»</em></>,
            ].map((item, i) => (
              <li key={i} className="text-sm py-1 relative" style={{ paddingLeft: '26px', lineHeight: '1.65' }}>
                <span className="absolute left-0.5 font-bold text-[#e4002b]">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Alert Block */}
          <div className="bg-[#e4002b] rounded-lg p-4 my-4 text-sm font-bold text-white flex items-start gap-3" style={{ lineHeight: '1.55' }}>
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div><strong>ВАЖНО:</strong> предлагая блюда Гостям, используйте правила последовательного предложения или «классический треугольник».</div>
          </div>

          {/* Triangle Wrap */}
          <div className="rounded-[10px] overflow-hidden my-4 mb-5" style={{ border: '1.5px solid #f2f1ef' }}>
            <div className="bg-[#e4002b] text-white text-[13px] font-extrabold uppercase px-4 py-2.5" style={{ letterSpacing: '0.03em' }}>
              Классический треугольник — логическая последовательность предложения блюд
            </div>
            <div className="p-4">
              <p className="text-[13px] text-[#656565] mb-3.5">
                Предлагая блюда и напитки по классическому треугольнику, кассир сделает свою работу грамотно и последовательно. По треугольнику можно быстро и легко оценить, какие категории отсутствуют в заказе.
              </p>
              <div className="flex items-start gap-3 py-2.5" style={{ borderBottom: '1px solid #f2f1ef' }}>
                <span className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-white font-extrabold text-[13px] flex-shrink-0 bg-[#e4002b]">1</span>
                <div className="text-sm leading-relaxed"><strong>Основное блюдо</strong> (верхняя вершина) — предложите первым. К основному блюду можно предложить хлеб и соус (например, к кускам курицы).</div>
              </div>
              <div className="flex items-start gap-3 py-2.5" style={{ borderBottom: '1px solid #f2f1ef' }}>
                <span className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-white font-extrabold text-[13px] flex-shrink-0 bg-[#c04810]">2</span>
                <div className="text-sm leading-relaxed"><strong>Гарнир</strong> (правая вершина) — предложите следующим. К гарниру также можно предложить соус.</div>
              </div>
              <div className="flex items-start gap-3 py-2.5">
                <span className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-white font-extrabold text-[13px] flex-shrink-0 bg-[#882808]">3</span>
                <div className="text-sm leading-relaxed"><strong>Напиток</strong> (левая вершина) — предложите после гарнира. Затем можно предложить дополнительное блюдо и десерт.</div>
              </div>
            </div>
          </div>

          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Помните: все блюда делятся на пять категорий: <strong>основные блюда, гарниры, напитки, дополнительные блюда и десерты</strong>. Состав блюд в категориях может меняться. Обязательно обращайте внимание при вводе новых блюд, к какой категории они относятся, чтобы правильно предлагать их Гостям.
          </p>

          <ul className="list-none p-0 m-0 mb-4">
            {[
              <>Предлагайте в <strong>позитивной утвердительной форме</strong>, без частицы «НЕ». Используйте слова: «попробуйте», «возьмите», «рекомендую вам»</>,
              'Не перегружайте предложение. Обязательно нужно предложить основное блюдо, гарнир, соус и напиток (включая новинку)',
              <>Для ненавязчивого предложения блюд используйте <strong>слова-маркеры</strong>: картошка на гарнир, мороженое на десерт, соус к курице и т.д.</>,
              <>Предлагайте большую порцию, если Гость не уточняет размер: <em>«Колу большую или стандартную?»</em>, <em>«Крыльев — 9?»</em></>,
              <>Не задавайте Гостю вопросы, на которые можно ответить «нет». <em>«Соус желаете?»</em> — неправильно. <em>«Какой соус предпочитаете к картофелю фри?»</em> — правильно</>,
              'Если Гость сказал «это всё» — не настаивайте. Слушайте Гостя',
              'Не оспаривайте мнение Гостя. Право Гостя — иметь собственные вкусы и пристрастия',
              'Всегда поддерживайте с Гостем зрительный контакт',
              <>Сообщите время готовности заказа: <em>«Ваш заказ будет готов ровно через одну минуту»</em></>,
              <>Если заказ задерживается: <em>«Мы сейчас начинаем готовить свежий картофель фри. Он будет готов через 3 минуты. Я вынесу его с остальной частью заказа, чтобы всё было горячим и свежим»</em></>,
            ].map((item, i) => (
              <li key={i} className="text-sm py-1.5 relative" style={{ paddingLeft: '20px', lineHeight: '1.65' }}>
                <span className="absolute left-0.5 text-[#e4002b] font-black text-base">›</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Note Box */}
          <div className="bg-[#f4f4f4] rounded-lg p-4 my-3" style={{ border: '1.5px solid #f2f1ef' }}>
            <strong className="text-sm">Что сказать, если Гостю пришлось подождать?</strong>
            <ul className="mt-2 list-none p-0 m-0">
              {[
                'Расскажи о планируемых акциях и мероприятиях',
                'Узнай, знает ли Гость про нашу услугу доставки',
                'Пригласи Гостя на ближайший ТУР на Кухню',
              ].map((item, i) => (
                <li key={i} className="text-sm py-1 relative" style={{ paddingLeft: '14px', lineHeight: '1.65' }}>
                  <span className="absolute left-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ВРУЧЕНИЕ ЗАКАЗА */}
          <span
            className="inline-block bg-[#e4002b] text-white text-[13px] font-extrabold tracking-wide uppercase rounded px-3.5 py-1 mb-2.5 mt-6"
            style={{ letterSpacing: '0.04em' }}
          >
            Вручение заказа
          </span>
          <ul className="list-none p-0 m-0 mb-3">
            {[
              'Сверьте собранный заказ визуально с чеком',
              'Проверьте, что Гостю положили все необходимые кондименты',
              'Вручите заказ Гостю с улыбкой и глядя прямо в глаза',
              <><strong>Заказ должен быть вручен не позднее чем через 5 минут</strong> с момента, как Гость встал в очередь</>,
              <>Вручайте заказ не позже, чем через <strong>60 секунд</strong> после сообщения Гостю стоимости заказа</>,
            ].map((item, i) => (
              <li key={i} className="text-sm py-1 relative" style={{ paddingLeft: '26px', lineHeight: '1.65' }}>
                <span className="absolute left-0.5 font-bold text-[#e4002b]">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* ПРОЩАНИЕ */}
          <span
            className="inline-block bg-[#e4002b] text-white text-[13px] font-extrabold tracking-wide uppercase rounded px-3.5 py-1 mb-2.5 mt-6"
            style={{ letterSpacing: '0.04em' }}
          >
            Прощание и благодарность
          </span>
          <div className="bg-[#fafafa] rounded-lg p-4 my-2" style={{ border: '1.5px solid #f2f1ef' }}>
            <div
              className="text-sm italic text-[#333] relative"
              style={{ paddingLeft: '16px', lineHeight: '1.6' }}
            >
              <span className="absolute left-0 text-[#e4002b] font-black text-base not-italic" style={{ top: '3px' }}>"</span>
              Спасибо за заказ. Приятного аппетита. Будем рады увидеть вас снова
            </div>
          </div>
          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Произнесите с теплотой в голосе «Спасибо за заказ», пожелайте Гостю приятного аппетита (или произнесите другую уместную фразу).
          </p>

          {/* РАБОТА С ЖАЛОБАМИ */}
          <h2
            className="text-lg font-extrabold leading-tight"
            style={{ marginTop: '36px', marginBottom: '12px', paddingTop: '28px', borderTop: '2px solid #f2f1ef', letterSpacing: '-0.02em' }}
          >
            Работа с жалобами и вопросами Гостей
          </h2>
          <p className="text-sm mb-3" style={{ lineHeight: '1.7' }}>
            Если Гость обратился к тебе с жалобой, используй правило <strong>ВИП2</strong>:
          </p>

          {/* VIP2 Block */}
          <div className="rounded-lg overflow-hidden my-4 mb-5" style={{ border: '1.5px solid #f2f1ef' }}>
            {/* Row 1 */}
            <div className="flex items-stretch" style={{ borderBottom: '1.5px solid #eee' }}>
              <div className="w-[120px] min-w-[120px] flex flex-col items-center justify-center p-4 bg-[#fafafa]" style={{ borderRight: '1.5px solid #eee' }}>
                <span className="text-[26px] mb-1 leading-none">👂</span>
                <span className="text-[11px] font-extrabold text-[#e4002b] uppercase tracking-wide text-center leading-tight">
                  Выслушай Внимательно
                </span>
              </div>
              <div className="flex-1 p-4">
                <div className="text-sm font-bold mb-2">Выслушай Внимательно, что говорит Гость</div>
                <ul className="list-none p-0 m-0 mb-2">
                  {[
                    'Прояви заинтересованность',
                    'Будь внимательным. Не перебивай',
                    'Выясни факты. Определи суть проблемы',
                  ].map((item, i) => (
                    <li key={i} className="text-sm py-1 relative" style={{ paddingLeft: '26px', lineHeight: '1.65' }}>
                      <span className="absolute left-0.5 font-bold text-[#e4002b]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="italic text-[#555] my-1.5 px-2.5 py-1.5 bg-[#fff8f8] rounded-r text-[13px] leading-snug" style={{ borderLeft: '3px solid #f0c0c0' }}>
                  «Насколько я понимаю, проблема заключается в том, что в заказе отсутствует картофель фри. Правильно?»
                </div>
                <p className="text-[13px] my-2 mx-0">
                  Продемонстрируй сожаление и желание разрешить проблему (посредством слов и языка телодвижений). Никогда не проявляй раздражение и не принимай жалобу на свой счет.
                </p>
                <div className="italic text-[#555] my-1.5 px-2.5 py-1.5 bg-[#fff8f8] rounded-r text-[13px] leading-snug" style={{ borderLeft: '3px solid #f0c0c0' }}>
                  «Я понимаю, что вы разочарованы, и хочу сделать все возможное, чтобы вы остались довольны»
                </div>
                <p className="text-[13px] my-2 mx-0">
                  Немедленно сообщи о серьезных или опасных проблемах менеджеру на смене (предполагаемое пищевое отравление, посторонние предметы в пище). Если не можешь решить проблему самостоятельно:
                </p>
                <div className="italic text-[#555] my-1.5 px-2.5 py-1.5 bg-[#fff8f8] rounded-r text-[13px] leading-snug" style={{ borderLeft: '3px solid #f0c0c0' }}>
                  «Менеджер сможет помочь Вам в этом вопросе, я сейчас позову его/ее»
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex items-stretch" style={{ borderBottom: '1.5px solid #eee' }}>
              <div className="w-[120px] min-w-[120px] flex flex-col items-center justify-center p-4 bg-[#fafafa]" style={{ borderRight: '1.5px solid #eee' }}>
                <span className="text-[26px] mb-1 leading-none">🙏</span>
                <span className="text-[11px] font-extrabold text-[#e4002b] uppercase tracking-wide text-center leading-tight">
                  Извинись Искренне
                </span>
              </div>
              <div className="flex-1 p-4">
                <div className="text-sm font-bold mb-2">Помни: Мой Гость — Моя Забота о нём</div>
                <div className="italic text-[#555] my-1.5 px-2.5 py-1.5 bg-[#fff8f8] rounded-r text-[13px] leading-snug" style={{ borderLeft: '3px solid #f0c0c0' }}>
                  «Мне действительно жаль, что у вас возникло плохое впечатление о нашем ресторане»
                </div>
                <p className="text-[13px] my-2 mx-0">
                  Искренне поблагодари за обратную связь:
                </p>
                <div className="italic text-[#555] my-1.5 px-2.5 py-1.5 bg-[#fff8f8] rounded-r text-[13px] leading-snug" style={{ borderLeft: '3px solid #f0c0c0' }}>
                  «Большое спасибо, что уделили внимание работе нашего ресторана»
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex items-stretch">
              <div className="w-[120px] min-w-[120px] flex flex-col items-center justify-center p-4 bg-[#fafafa]" style={{ borderRight: '1.5px solid #eee' }}>
                <span className="text-[26px] mb-1 leading-none">🎁</span>
                <span className="text-[11px] font-extrabold text-[#e4002b] uppercase tracking-wide text-center leading-tight">
                  Порадуй Подарком
                </span>
              </div>
              <div className="flex-1 p-4">
                <div className="text-sm font-bold mb-2">Реши проблему в пользу Гостя</div>
                <ul className="list-none p-0 m-0 mb-2">
                  {[
                    'Удиви предложением (кофе, напиток, картофель, стрипсы, крылья)',
                    'Купон «Оставайтесь с нами» — всегда под рукой!',
                    'Не позволяй Гостю уйти с чувством неудовлетворения',
                  ].map((item, i) => (
                    <li key={i} className="text-sm py-1 relative" style={{ paddingLeft: '26px', lineHeight: '1.65' }}>
                      <span className="absolute left-0.5 font-bold text-[#e4002b]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] mb-1.5">
                  Спроси, что можно сделать, чтобы исправить ситуацию:
                </p>
                <div className="italic text-[#555] my-1.5 px-2.5 py-1.5 bg-[#fff8f8] rounded-r text-[13px] leading-snug" style={{ borderLeft: '3px solid #f0c0c0' }}>
                  «Я действительно хочу помочь Вам»
                </div>
                <p className="text-[13px] my-2 mx-0">
                  Замени блюда или весь заказ, если это необходимо. Добавь что-то (бесплатный десерт, кофе, напиток, картофель, стрипсы, крылья):
                </p>
                <div className="italic text-[#555] my-1.5 px-2.5 py-1.5 bg-[#fff8f8] rounded-r text-[13px] leading-snug" style={{ borderLeft: '3px solid #f0c0c0' }}>
                  «Я бы хотел бесплатно заменить ваш заказ. Вы согласны?»
                </div>
              </div>
            </div>
          </div>

          {/* Вкус гарантируем! */}
          <div
            className="rounded-[10px] p-5 my-4"
            style={{
              border: '2px solid #e4002b',
              background: 'linear-gradient(135deg, #fff0f2 0%, #fff 100%)',
            }}
          >
            <div className="text-base font-extrabold text-[#e4002b] mb-2.5">Вкус гарантируем!</div>
            <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
              Обещание «Вкус Гарантируем» говорит нам о том, что если Гость недоволен качеством продукции, тебе необходимо самостоятельно и незамедлительно заменить его на то же самое блюдо.
            </p>
            <p className="text-sm mb-2" style={{ lineHeight: '1.7' }}>
              Помни, что опыт Гостя — это забота каждого. Возражения Гостя не заканчиваются на этапе выдачи заказа. Гость может вернуться и что-то спросить — подскажи!
            </p>
            <p className="text-sm m-0" style={{ lineHeight: '1.7' }}>
              Убирая столы в зале, будь внимателен ко всем Гостям! Если ты слышишь, что Гостям по какой-то причине не нравится еда или другие моменты посещения ресторана — удели им время.
            </p>
          </div>

          {/* PDF */}
          <h2
            className="text-lg font-extrabold leading-tight"
            style={{ marginTop: '36px', marginBottom: '12px', paddingTop: '28px', borderTop: '2px solid #f2f1ef', letterSpacing: '-0.02em' }}
          >
            Памятка по работе с жалобами Гостей
          </h2>
          <a
            className="flex items-center gap-3 bg-white no-underline transition-colors duration-150 max-w-[640px] border-[1.5px] border-[#f2f1ef] hover:bg-[#fff0f2] hover:border-[#e4002b]"
            style={{ borderRadius: '8px', padding: '12px 16px', margin: '10px 0' }}
            href="/pdfs/Памятка по работе с жалобами_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PvSvg />
            <div>
              <div className="text-[13px] font-semibold text-[#e4002b] leading-snug">Памятка по работе с жалобами_0.pdf</div>
              <div className="text-xs text-[#656565] mt-0.5">37.79 KB</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
