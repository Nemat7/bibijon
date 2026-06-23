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

export default function SkautArticle() {
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
  ]

  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Обслуживание', href: '/standards/obsluzhivanie' },
          { label: 'Скаут' },
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
              style={{ fontSize: '28px', lineHeight: '1.1', letterSpacing: '-0.02em', marginBottom: '8px' }}
            >
              Скаут
            </h1>
            <p className="text-[13px] text-[#656565] leading-relaxed">
              Что такое паспорт Скаута? Зачем нужен паспорт Скаута? Как пользоваться паспортом Скаута?
            </p>
          </div>
        </div>

        {/* Tags Row */}
        <div style={{ marginBottom: '28px', maxWidth: '860px' }}>
          <TagsRow tags={tags} showMore={3} actions />
        </div>

        {/* Article Body */}
        <div className="max-w-[860px]" style={{ lineHeight: '1.7', color: '#212121' }}>

          {/* 1. Скаут */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3' }}>
            Скаут
          </h2>
          <div className="flex gap-6 items-start" style={{ margin: '14px 0' }}>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                «Скаут кассы» — это настоящий профессионал своего дела. Он, лучший из лучших на кассе, лидер в обслуживании, грамотный и терпеливый наставник, интересный собеседник. Правая рука менеджера, всегда помогает кассирам в достижении поставленных целей, создает позитивную атмосферу на смене и показывает каждому кассиру насколько важен для нас каждый гость. Ведь кассир — это лицо ресторана, это первое впечатление гостей. Основная задача «Скаута кассы» сделать посещение каждого гостя незабываемым, неважно, в какое время дня или ночи он к нам придет. Сделать его нашим другом.
              </p>
            </div>
            <div style={{ flex: '0 0 260px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  height: '220px',
                  background: 'linear-gradient(150deg, #c0b8b0 0%, #907870 100%)',
                  borderRadius: '8px',
                }}
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', height: '40px', opacity: 0.3 }}>
                  <circle cx="20" cy="14" r="8" fill="#fff" />
                  <path d="M6 38c0-7.73 6.27-14 14-14s14 6.27 14 14" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>

          {/* 2. Критерии отбора */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Критерии отбора
          </h2>
          <ol style={{ margin: '0 0 14px 0', padding: 0, listStyle: 'none', counterReset: 'ol-counter' }}>
            {[
              'Быть в 3-ке лучших по выполнению индивидуальных целей ТО за последние 3 месяца',
              'Быть в 3-ке лучших по наполненности блюд',
              'Высокий средний чек - выше среднего по ресторану',
              'Фактические рейтинги блюд равны или выше плановых',
              'OCL и сертификация на кассе – 100%',
              'Отсутствие жалоб и отрицательных отзывов',
            ].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: '14px', padding: '3px 0 3px 26px', position: 'relative', lineHeight: '1.6', counterIncrement: 'ol-counter' }}
              >
                <span style={{ position: 'absolute', left: 0, color: '#212121', fontWeight: 600 }}>{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>

          {/* 3. Термины */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Термины
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '14px 0 20px', fontSize: '13px' }}>
            <thead>
              <tr>
                <th style={{ background: '#f4f4f4', fontWeight: 700, textAlign: 'left', padding: '10px 14px', border: '1px solid #f2f1ef', color: '#212121', width: '200px' }}>
                  Термин
                </th>
                <th style={{ background: '#f4f4f4', fontWeight: 700, textAlign: 'left', padding: '10px 14px', border: '1px solid #f2f1ef', color: '#212121' }}>
                  Определение
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Скорость обслуживания</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Стандарты времени, в течение которого должен быть обслужен каждый гость</td>
              </tr>
              <tr style={{ background: '#f4f4f4' }}>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Наполненность чека</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>
                  <p style={{ marginBottom: '4px', fontSize: '13px' }}>Среднее количество блюд в чеке:</p>
                  <p style={{ fontSize: '13px' }}>Количество блюд / количество чеков</p>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Уверенное предложение</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Это грамотное предложение продукции, направленное на продажу конкретных наименований блюд, повышающих средний чек</td>
              </tr>
              <tr style={{ background: '#f4f4f4' }}>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Красочное описание</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Это создание у гостя зрительного образа блюда для возбуждения аппетита</td>
              </tr>
              <tr>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Рейтинг</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>
                  <p style={{ marginBottom: '4px', fontSize: '13px' }}>Показатель, отображающий популярность определенного блюда:</p>
                  <p style={{ fontSize: '13px' }}>Количество блюд / количество чеков х 100%</p>
                </td>
              </tr>
              <tr style={{ background: '#f4f4f4' }}>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Средний чек</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>
                  <p style={{ marginBottom: '4px', fontSize: '13px' }}>Средняя сумма заказа:</p>
                  <p style={{ fontSize: '13px' }}>Сумма выручки / количество чеков</p>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Классический четырехугольник</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Система правильного предложения блюд при приеме заказа</td>
              </tr>
              <tr style={{ background: '#f4f4f4' }}>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Незабываемый сервис</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Это предвосхищение ожиданий гостя</td>
              </tr>
              <tr>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Активные продажи</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Активные продажи подразумевают, что кассир не просто принимает заказ у Гостя, но и использует при этом определенные методы продаж. Причем делает он это мягко и ненавязчиво, профессионально</td>
              </tr>
              <tr style={{ background: '#f4f4f4' }}>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>КОП2</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Правило для решения конфликтных ситуаций с гостем</td>
              </tr>
              <tr>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Акт гарантируй!</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Это обещание нашим Гостям в том, что мы настолько уверены в высоком качестве нашей продукции, что гарантируем это. Если Гость не удовлетворён качеством продукции KFC и возвращает её, мы готовы немедленно сделать замену!</td>
              </tr>
              <tr style={{ background: '#f4f4f4' }}>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>GES (Guest Experience Survey)</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Это система, позволяющая гостям оценить своё впечатление от посещения ресторана</td>
              </tr>
              <tr>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>OSAT</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Отношение превосходных отзывов (оценка 5) к общему количеству отзывов</td>
              </tr>
              <tr style={{ background: '#f4f4f4' }}>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Ролевая игра</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Это метод обучения в форме игры, который используется для отработки навыков обслуживания, при что участникам заранее определяют роли в соответствии с поставленными целями обучения</td>
              </tr>
              <tr>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Тет-а-тет</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>Индивидуальная беседа</td>
              </tr>
              <tr style={{ background: '#f4f4f4' }}>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>SMART</td>
                <td style={{ padding: '9px 14px', border: '1px solid #f2f1ef', verticalAlign: 'top', lineHeight: '1.55', fontSize: '13px' }}>
                  <p style={{ marginBottom: '4px', fontSize: '13px' }}>Аббревиатура, используемая для постановки целей и задач:</p>
                  <p style={{ fontSize: '13px' }}>S - Specific (конкретная)</p>
                  <p style={{ fontSize: '13px' }}>M - Measurable (измеримая)</p>
                  <p style={{ fontSize: '13px' }}>A - Attainable (достижимая)</p>
                  <p style={{ fontSize: '13px' }}>R - Relevant (актуальная)</p>
                  <p style={{ fontSize: '13px' }}>T - Time (ограниченная по времени)</p>
                </td>
              </tr>
            </tbody>
          </table>

          {/* 4. KPI's */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            KPI's (Ключевой показатель эффективности)
          </h2>
          <div
            className="flex items-center justify-center"
            style={{
              height: '140px',
              margin: '14px 0',
              background: 'linear-gradient(135deg, #e4dfd8 0%, #c0b8b0 100%)',
              borderRadius: '8px',
            }}
          >
            <svg viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '60px', height: '30px', opacity: 0.3 }}>
              <rect x="2" y="10" width="8" height="18" fill="#212121" />
              <rect x="14" y="4" width="8" height="24" fill="#212121" />
              <rect x="26" y="6" width="8" height="22" fill="#212121" />
              <rect x="38" y="12" width="8" height="16" fill="#212121" />
              <rect x="50" y="8" width="8" height="20" fill="#212121" />
            </svg>
          </div>

          {/* 5. Цели и задачи скаута */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Цели и задачи скаута
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Выполнять план по товарообороту, достигая цели ресторана по среднему чеку и наполненности через предоставление великолепного сервиса каждому гостю, и обеспечение высокой скорости, доброжелательности и точности.
          </p>
          <ul style={{ margin: '0 0 14px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Увеличить скорость обслуживания, как в часы пик, так и часы спада',
              'Выполнять ТО >100% за смену каждым кассиром для достижения целей ресторана по ТО за месяц> 100%',
              'Увеличить наполненность и средний чек по отношению к прошлым периодам',
              'Достичь плановых рейтингов по маркетинговым акциям',
              'Являться «Ролевой Моделью» в достижении прорывных результатов (ТО, наполненность, средний чек) в часы пик',
              'Обучить всех кассиров правильному предложению блюд, правильной комплектации заказа на поднос, на вынос, знаний таблицы кондиментов, обеспечения точности выполнения заказа (прием, оплата, сбор)',
              'Внедрить в работу все принципы незабываемого сервиса',
              'Вовлечь и замотивировать на работу каждого кассира',
              'Закрепить ориентацию кассиров на результат',
              'Подводить итоги за смену, признавать, фиксировать результаты на доске кассиров',
              'Определять и награждать лучшего кассира за день, неделю, месяц',
              'Проводить конкурсы и соревнования (новинки, средний чек, ТО (в час, день, неделю))',
              'По результатам работы кассира для улучшения обслуживания каждого гостя проводить ролевые игры',
              'Еженедельно на Т-А-Т с директором предоставлять отчет о проделанной работе за неделю, определять приоритеты на следующий период',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* 6. Инструменты скаута кассы */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Инструменты скаута кассы
          </h2>
          <div className="flex gap-6 items-start" style={{ margin: '14px 0' }}>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <u><strong>Паспорт Скаута</strong></u>
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                Специальный инструмент, в который Скаут записывает информацию о наблюдениях, обучении кассиров, промежуточные результаты кассиров, все новые идеи. Паспорт Скаута выдается сотруднику после прохождения сертификации
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <u><strong>OCL кассира</strong></u>
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                Чек-лист наблюдения за работой кассира
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <u><strong>Секундомер</strong></u>
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                Используется для оценки скорости и замеров для чек листа SOS/TRED
              </p>
            </div>
            <div style={{ flex: '0 0 260px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  height: '260px',
                  background: 'linear-gradient(150deg, #c8d0d8 0%, #90a0b0 100%)',
                  borderRadius: '8px',
                }}
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
                  <rect x="8" y="4" width="24" height="32" rx="2" fill="#212121" />
                  <line x1="12" y1="12" x2="28" y2="12" stroke="#fff" strokeWidth="1.5" />
                  <line x1="12" y1="17" x2="28" y2="17" stroke="#fff" strokeWidth="1.5" />
                  <line x1="12" y1="22" x2="22" y2="22" stroke="#fff" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* 7. Паспорт скаута кассы */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Паспорт скаута кассы
          </h2>
          <div className="flex gap-6 items-start" style={{ margin: '14px 0' }}>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                Паспорт Скаута кассы можно заказать в рекламном агентстве &quot;Мантустрен&quot;
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>Контакты для заказа:</p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <a href="mailto:su@mhtn.su" className="text-[#e4002b]">su@mhtn.su</a>
              </p>
            </div>
            <div style={{ flex: '0 0 260px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  height: '300px',
                  background: 'linear-gradient(150deg, #d0c8e0 0%, #9080b0 100%)',
                  borderRadius: '8px',
                }}
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
                  <rect x="6" y="2" width="28" height="36" rx="2" fill="#212121" />
                  <rect x="10" y="8" width="20" height="6" rx="1" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>

          {/* PDF 1 */}
          <a
            href="/pdfs/Инструкция по использованию паспорта  Скаута Кассы KFC_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 no-underline transition-colors duration-150"
            style={{
              border: '1.5px solid #f2f1ef',
              borderRadius: '8px',
              padding: '14px 18px',
              margin: '16px 0',
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
                Инструкция по использованию паспорта &nbsp;Скаута Кассы KFC_0.pdf
              </div>
              <div style={{ fontSize: '12px', color: '#656565', marginTop: '2px' }}>— 594.62 KB</div>
            </div>
            <Download size={18} className="text-[#656565] flex-shrink-0" />
          </a>

          {/* 8. Рутина скаута */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Рутина скаута
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            <strong>Рутина</strong> — правильно организованные обязанности, с четким распределением в течение смены.
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Успех работы по улучшению обслуживания в KFC, зависит от постоянства и периодичности проводимых мероприятий!
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            <strong>Ежедневная рутина</strong>
          </p>
          <ul style={{ margin: '0 0 14px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Ролевая модель - собственным примером показывать идеальную работу',
              'Наблюдение за работой кассиров во время смены',
              'Предоставление обратной связи для улучшения обслуживания',
              'Проведение ролевых игр на отработку скорости приема заказа, наполленности чека',
              'Проведение ролевых игр на тему незабываемого сервиса и 100% обслуживания',
              'Фиксирование финансовых достижений каждого кассира на доске',
              'Признание и награждение лучших',
              'Составление OCL',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            <strong>Еженедельная рутина</strong>
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>Тет-а-тет с директором:</p>
          <ul style={{ margin: '0 0 14px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Подведение итогов недели',
              'Составление плана действий на следующую неделю',
              'Проведение Т-А-Т с остальными кассирами',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            <strong>Ежемесячная рутина</strong>
          </p>
          <ul style={{ margin: '0 0 14px 0', padding: 0, listStyle: 'none' }}>
            <li style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.6' }}>
              <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
              Подведение итогов, награждение лучших на общем собрании с командой
            </li>
          </ul>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            <strong>Ежегодная рутина</strong>
          </p>
          <ul style={{ margin: '0 0 14px 0', padding: 0, listStyle: 'none' }}>
            {[
              'Подготовка кассиров к ежегодному CHAMPS чемпионату',
              'Ежегодная ресертификация',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 16px', position: 'relative', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '2px' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* 9. Ролевая модель */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Ролевая модель в предоставлении незабываемого сервиса
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Для того, чтобы добиваться поставленных целей от команды ты сам должен быть для них всегда примером в предоставлении 100% обслуживания и незабываемого сервиса, общайся с кассирами на тему, как стать для гостя другом, объясняй, как важно дарить гостю улыбку и хорошее настроение. Всегда помни, что самое главное для наших гостей — это скорость обслуживания.
          </p>

          {/* 10. Задачи скаута в часы спада */}
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#212121', marginTop: '28px', marginBottom: '10px', lineHeight: '1.3' }}>
            Задачи скаута в часы спада
          </h3>
          <div className="flex gap-6 items-start" style={{ margin: '14px 0' }}>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <strong>1.Работа с кассирами</strong> - твоя задача проработать с каждым кассиром в течение смены для улучшения принципов предоставления незабываемого сервиса каждому гостю, а именно таких, как увеличение скорости обслуживания, за счет правильного предложения.
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <strong>2. Наблюдение за обслуживанием кассира по чек-листу «OCL»</strong> с фиксированием результата и отклонений
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <strong>3. Проведение ролевых игрр</strong>, направленные на принципы незабываемого сервиса, такие как отношение к гостю, как к другу, гордость за свой продукт, убедить, что гость остался доволен
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <strong>4. Предоставление обратной связи</strong> (конструктивной или позитивной), сразу по завершению обслуживания
              </p>
            </div>
            <div style={{ flex: '0 0 260px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  height: '220px',
                  background: 'linear-gradient(150deg, #c8c0b8 0%, #908880 100%)',
                  borderRadius: '8px',
                }}
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
                  <circle cx="20" cy="14" r="8" fill="#212121" />
                  <path d="M6 38c0-7.73 6.27-14 14-14s14 6.27 14 14" fill="#212121" />
                </svg>
              </div>
            </div>
          </div>

          {/* 11. Задачи скаута в часы пик */}
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#212121', marginTop: '28px', marginBottom: '10px', lineHeight: '1.3' }}>
            Задачи скаута в часы пик
          </h3>
          <div className="flex gap-6 items-start" style={{ margin: '14px 0' }}>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                В часы пик скаут работает на кассе демонстрируя кассирам обслуживание гостей в соответствии со стандартами
              </p>
            </div>
            <div style={{ flex: '0 0 260px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  height: '180px',
                  background: 'linear-gradient(150deg, #d0c8c0 0%, #a09890 100%)',
                  borderRadius: '8px',
                }}
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
                  <rect x="4" y="10" width="32" height="24" rx="2" fill="#212121" />
                  <line x1="4" y1="18" x2="36" y2="18" stroke="#fff" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* 12. Проведение ролевых игр */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Проведение ролевых игр
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            Одним из способов улучшить работу кассира — является проведение ролевых игр. Используя ролевые игры, можно выяснить причины невыполнения стандартов и найти лучшее решение для их выполнения.
          </p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
          <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
            <strong>Проводи ролевые игры на тему:</strong>
          </p>
          <ol style={{ margin: '0 0 14px 0', padding: 0, listStyle: 'none', counterReset: 'ol-counter' }}>
            {[
              'Приветствие гостей',
              'Уверенное и красочное предложение',
              'Решения конфликтных ситуаций с гостем',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 26px', position: 'relative', lineHeight: '1.6', counterIncrement: 'ol-counter' }}>
                <span style={{ position: 'absolute', left: 0, color: '#212121', fontWeight: 600 }}>{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>

          {/* 13. Предоставление обратной связи */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Предоставление обратной связи
          </h2>
          <div className="flex gap-6 items-start" style={{ margin: '14px 0' }}>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <strong>Позитивная обратная связь</strong> — хороший способ поддержать контакт и укрепить доверие. Чем чаще ты отмечаешь успехи и качественную работу сотрудника, тем проще ему в будущем будет принять справедливую корректирующую обратную связь.
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <strong>Цель позитивной обратной связи</strong> — закрепить успешное поведение человека, чтобы он демонстрировал его снова и снова
              </p>
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <strong>Конструктивная обратная связь</strong> — это позитивная оценка, которая предоставляется сотрудникам для оказания помощи в поиске решений в проблемных областях. Соответственно, конструктивная обратная связь имеет позитивный характер и используется в качестве средства коммуникации для решения конкретных проблем.
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                Не забывай, когда предоставляется конструктивная обратная связь необходимо выяснить причины невыполнения стандарта. Исходя из этой причины найти решение данной проблемы, используя «5 почему».
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            style={{
              height: '200px',
              margin: '14px 0',
              background: 'linear-gradient(135deg, #dce4f0 0%, #b0bcd0 100%)',
              borderRadius: '8px',
            }}
          >
            <svg viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '60px', height: '30px', opacity: 0.3 }}>
              <circle cx="10" cy="15" r="8" fill="#212121" />
              <circle cx="30" cy="15" r="8" fill="#212121" />
              <circle cx="50" cy="15" r="8" fill="#212121" />
              <line x1="18" y1="15" x2="22" y2="15" stroke="#212121" strokeWidth="2" />
              <line x1="38" y1="15" x2="42" y2="15" stroke="#212121" strokeWidth="2" />
            </svg>
          </div>

          {/* 14. Организация конкурсов */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Организация конкурсов с подведением итогов
          </h2>
          <div className="flex gap-6 items-start" style={{ margin: '14px 0' }}>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <strong>Конкурсы</strong> — это один из способов, с помощью которого, благодаря дополнительной мотивации, кассирам становится легче и интереснее выполнять поставленные цели. Каждый конкурс должен быть направлен на выполнение финансовых показателей (средний чек, ТО, наполненность чека, продажа конкретных блюд). Твоя задача ежедневно помогать менеджеру контролировать нацеленность кассиров на достижение результатов по конкурсу. Длительность конкурсов может быть разной. Несколько минут, часов, смена, день, неделя, месяц, квартал.
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                Не забывай фиксировать результат каждого конкурса на доске. Без результата нет эффективности ни в одном конкурсе. Если конкурс длится больше одной смены обязательно фиксируй промежуточные итоги.
              </p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>&nbsp;</p>
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                <strong>Конкурсы должны быть направлены на:</strong>
              </p>
              <ol style={{ margin: '0 0 14px 0', padding: 0, listStyle: 'none', counterReset: 'ol-counter' }}>
                {[
                  'Скорость в часы пик — это количество чеков за час пик, либо замеры сбора заказа и ожидания в очереди',
                  'Средний чек (работай с кассирами с кого наименьший средний чек)',
                  'Рейтинги конкретных блюд и новинок',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 26px', position: 'relative', lineHeight: '1.6', counterIncrement: 'ol-counter' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#212121', fontWeight: 600 }}>{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div style={{ flex: '0 0 260px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  height: '280px',
                  background: 'linear-gradient(150deg, #c0c8d0 0%, #8898a8 100%)',
                  borderRadius: '8px',
                }}
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
                  <rect x="4" y="22" width="8" height="14" fill="#212121" />
                  <rect x="16" y="12" width="8" height="24" fill="#212121" />
                  <rect x="28" y="16" width="8" height="20" fill="#212121" />
                </svg>
              </div>
            </div>
          </div>

          {/* 15. Еженедельный тет-а-тет */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Еженедельный тет-а-тет с директором
          </h2>
          <div className="flex gap-6 items-start" style={{ margin: '14px 0' }}>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.7' }}>
                Каждую неделю ты будешь встречаться с директором для обсуждения итогов своей работы. Все заметки, сделанные в Паспорте, покажи директору и обсуди:
              </p>
              <ol style={{ margin: '0 0 14px 0', padding: 0, listStyle: 'none', counterReset: 'ol-counter' }}>
                {[
                  'Заполненные чек листы по OCL',
                  'Результаты проведения ролевых игр',
                  'Основные общие проблемы всех кассиров за неделю',
                  'Результаты по каждому кассиру по финансовым показателям за неделю',
                  'Обратную связь по работе каждого кассира за неделю',
                  'Цели и задачи на следующую неделю',
                  'Различные ноу-хау',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '14px', padding: '3px 0 3px 26px', position: 'relative', lineHeight: '1.6', counterIncrement: 'ol-counter' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#212121', fontWeight: 600 }}>{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div style={{ flex: '0 0 260px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  height: '220px',
                  background: 'linear-gradient(150deg, #d0c0c8 0%, #a08090 100%)',
                  borderRadius: '8px',
                }}
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
                  <circle cx="14" cy="15" r="7" fill="#212121" />
                  <circle cx="28" cy="15" r="7" fill="#212121" />
                  <path d="M4 36c0-5.52 4.48-10 10-10" stroke="#212121" strokeWidth="2" fill="none" />
                  <path d="M20 36c0-5.52 4.48-10 10-10" stroke="#212121" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* 16. Пример проведения ролевой игры */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#212121', marginTop: '32px', marginBottom: '12px', lineHeight: '1.3', borderTop: '2px solid #f2f1ef', paddingTop: '28px' }}>
            Пример проведение ролевой игры скаутом кассы
          </h2>

          {/* PDF 2 */}
          <a
            href="/pdfs/Скаут Кассы KFC пример ролевой игры.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 no-underline transition-colors duration-150"
            style={{
              border: '1.5px solid #f2f1ef',
              borderRadius: '8px',
              padding: '14px 18px',
              margin: '16px 0',
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
                Скаут Кассы KFC пример ролевой игры.pdf
              </div>
              <div style={{ fontSize: '12px', color: '#656565', marginTop: '2px' }}>— 413.68 KB</div>
            </div>
            <Download size={18} className="text-[#656565] flex-shrink-0" />
          </a>

        </div>
      </div>
    </div>
  )
}
