import { useState } from 'react'
import { Star, AlertTriangle } from 'lucide-react'
import Topbar from '@/components/Topbar'
import TagsRow from '@/components/TagsRow'

const HeadsetSvg = () => (
  <svg viewBox="0 0 100 100" fill="white" opacity="0.3" style={{ width: '70px', height: '70px' }}>
    <circle cx="50" cy="35" r="14" />
    <rect x="34" y="30" width="4" height="10" rx="2" />
    <path d="M50 51 C38 51 28 58 28 68 L28 85 L72 85 L72 68 C72 58 62 51 50 51Z" />
  </svg>
)

const primaryTags = ['#оригинальная курица']

export default function KurinnyeKuskiORArticle() {
  const [favActive, setFavActive] = useState(true)

  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Продукт', href: '/standards/produkt' },
          { label: 'Куринные куски OR' },
        ]}
      />

      <div style={{ padding: '28px 36px 60px' }}>
        {/* Header Card */}
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
              background: 'linear-gradient(150deg, #c8c030 0%, #a08020 50%, #685010 100%)',
            }}
          >
            <HeadsetSvg />
          </div>

          {/* Meta Area */}
          <div className="flex-1 relative" style={{ padding: '18px 20px' }}>
            {/* Fav Button */}
            <button
              className={`absolute top-3 right-3 transition-colors duration-150 ${
                favActive ? 'text-kfc-red' : 'text-[#dad6cf] hover:text-[#e4002b]'
              }`}
              onClick={() => setFavActive(!favActive)}
              aria-label="Add to favorites"
            >
              <Star size={20} strokeWidth={2} fill={favActive ? '#e4002b' : 'none'} />
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
              Продукт
            </span>

            {/* Title */}
            <h1
              className="mt-2 font-extrabold text-[#212121]"
              style={{ fontSize: '22px', lineHeight: '1.2' }}
            >
              Куринные куски OR
            </h1>

            {/* Description */}
            <p className="mt-1 text-sm text-[#656565] leading-relaxed">
              Полковник Харланд Сандерс представил курицу Original Recipe ® с ее секретной смесью из 11 трав и специй в 1939 году, и это тот самый рецепт, который сегодня любят во всем мире.
            </p>
          </div>
        </div>

        <div className="mt-5" />

        <TagsRow tags={primaryTags} actions />

        {/* ARTICLE BODY */}
        <div className="max-w-[860px]" style={{ padding: '0 8px', color: '#212121' }}>

          {/* Section: Оригинальные Куринные куски OR */}
          <h2 className="text-[19px] font-extrabold text-[#212121] leading-tight mt-9 mb-5">
            Оригинальные Куринные куски OR
          </h2>
          <p className="text-sm leading-[1.7] mb-3">
            Куриные куски Original Recipe ® маринуются и панируются по секретному рецепту 11 трав и специй, обжариваются под давлением до получения мягкой золотисто-коричневой корочки с хрустящими краями.
          </p>
          <p className="text-sm leading-[1.7] mb-3">
            Куриные куски поставляются охлажденными или замороженными, в зависимости от поставщика и региона.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              Если вы используете замороженные куриные куски, то ознакомьтесь с CSL Размораживание куриных полуфабрикатов, в котором описана процедура размораживания.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              Если вы используете охлажденные куриные куски, то следуйте процедурам, описанным ниже.
            </li>
          </ul>

          {/* Section: ПРОЦЕДУРЫ */}
          <h2 className="text-[19px] font-extrabold text-[#212121] leading-tight mt-9 mb-5 pt-7 border-t-2 border-[#f2f1ef]">
            ПРОЦЕДУРЫ
          </h2>
          <p className="text-sm leading-[1.7] mb-3">
            Вымойте руки теплой водой, используя антибактериальное мыло и соблюдая правила мытья рук.
          </p>
          <p className="text-sm leading-[1.7] mb-3">
            Мойте руки до и после приготовления любых пищевых продуктов. Это особенно важно при подготовке сырой курицы. Сырая курица может содержать бактерии, которые могут распространиться на другие продукты питания, если не соблюдаются надлежащие гигиенические, санитарные процедуры и стандарты.
          </p>

          {/* Sub-section: Подготовка */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Подготовка
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Проверьте уровень панировочной смеси в емкости. Емкость с панировочной смесью должна быть заполнена минимум на половину (не ниже риски). Если необходимо, добавьте в емкость панировочную смесь и дважды просейте перед использованием.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Подготовьте погружную воду. Наполните погружное ведро холодной водой почти до перехода диаметра (до риски). Вода должна иметь температуру ниже 26°C. Меняйте погружную воду после каждого панирования перед переходом к панированию другого вида куриного продукта.
            </li>
          </ul>
          <p className="text-sm leading-[1.7] mb-3">
            Ознакомьтесь с CSL Стандарты работы с панировочной смесью и погружной водой, где более подробно описаны все процедуры.
          </p>

          {/* Sub-section: Панирование Оригинальных кусков OR */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Панирование Оригинальных кусков OR
          </h3>
          <p className="text-sm leading-[1.7] mb-3">
            Во время работы с оригинальным продуктом использовать одноразовые перчатки на станции панировка не требуется.
          </p>

          {/* Inline alert */}
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
            <div className="text-sm leading-[1.7]">
              <strong>Не используйте куриный полуфабрикат с истекшим сроком хранения.</strong>
            </div>
          </div>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>В случае использования размороженной курицы ОБЯЗАТЕЛЬНО:</strong>
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              <strong>Проверьте что продукт полностью разморожен</strong> – кусочки не должны слипаться друг с другом, прощупайте каждый кусочек, кусочки должны быть мягкие, кость должна легко прощупываться и внутри не должно быть кристаллов льда;
            </li>
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              <strong>Если вы обнаружили недостаточно размороженный кусочек</strong>, не используйте его для панирования, его необходимо удалить в отходы.
            </li>
          </ul>

          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Возьмите специальную синюю / черную гастроемкость для куриного полуфабриката.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Возьмите в холодильнике пакет с куриным полуфабрикатом, соблюдая правило ротации.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Проверьте срок годности пакета с куриным полуфабрикатом.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Поместите пакет в специальную синюю / черную гастроемкость и отнесите его на панировочный стол.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Откройте, при необходимости, пакет с куриным полуфабрикатом ножницами для оригинальной продукции.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Поставьте погружную корзину на решетку и поддон.
            </li>
          </ul>

          {/* Numbered step 1 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">1</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Проведите инспекцию кусков и удалите излишки подкожного жира:
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Проверьте отсутствие сломанных костей, кровоподтеков, случайных порезов кожи, перьев, синяков, проверьте правильность числа кусков в пакете (2 головы, 18 кусков)
              </p>
              <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
                <div className="text-sm leading-[1.7]">
                  Минимальное и максимальное количество кусков для панирования - 18 штук.
                </div>
              </div>
              <p className="text-sm leading-[1.7] mb-3">
                При наличии излишков подкожного жира, отделите их от всех частей, особенно большие куски жира на бедрах.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                <strong>Выломайте бедро/удалите лишний жир.</strong>
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Возьмите бедро обеими руками так, чтобы сторона, покрытая кожей, находилась внизу.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Положите один большой палец на позвоночник, а другой - на конец бедренной кости.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Расположите остальные пальцы внизу, на середине мясной части; нажмите этими пальцами вверх, а обоими большими пальцами - вниз.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Конец бедренной кости выскочит из сустава и будет торчать из мяса. Это необходимо сделать для того, чтобы тепло проникало в продукт и чтобы кусок правильно подвергся тепловой обработке.
                </li>
              </ul>
              <p className="text-sm leading-[1.7] mb-3">
                Расправьте кожу на каждом куске, чтобы закрыть обнажившееся мясо. Это обеспечивает более ровную панировку продукта
              </p>

              {/* Bold sub-steps */}
              <p className="text-[15px] font-bold text-[#212121] mt-5 mb-2">
                Выложите куски в погружную корзину
              </p>

              <p className="text-[15px] font-bold text-[#212121] mt-5 mb-2">
                Потрясти погружную корзину 3 раза
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Потрясите погружную корзину от себя, вверх и на себя три раза. Это делается для того, чтобы еще больше разъединить куски и избавиться от оставшегося мясного сока. Встряхивать необходимо над решеткой и поддоном.
              </p>

              <p className="text-[15px] font-bold text-[#212121] mt-5 mb-2">
                Погрузить корзину
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Опустите корзину в воду и покрутите ручкой корзины слева направо, чтобы все куски покрылись водой. Этим обеспечивается отделение кусков один от другого и смачивание их.
              </p>

              <p className="text-[15px] font-bold text-[#212121] mt-5 mb-2">
                Поднять и дать стечь лишней воде
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Поднимите корзину из бачка для окунания. Подержите ее над бачком 3 — 4 секунды, или пока не стекут излишки воды, или пока не упадет последняя капля воды.
              </p>
            </div>
          </div>

          {/* Numbered step 2 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">2</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Встряхнуть 7 раз над бачком:
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Встряхните корзину над решеткой и поддоном 7 раз, чтобы стекла жидкость и сдвинулись куски куриного мяса в корзине.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Сделайте быстрое движение вперед, вверх и к себе. Все куски в корзине должны прийти в движение, чтобы избавиться от лишней воды.
              </p>
              <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
                <div className="text-sm leading-[1.7]">
                  Не встряхивайте корзину над панировочной ёмкостью или близко от неё во избежание образования комочков теста.
                </div>
              </div>
            </div>
          </div>

          {/* Numbered step 4 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">4</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Равномерно разложить куриный полуфабрикат в панировке
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Расправьте кожу на каждом кусочке: бедрышке/грудке/киле/ножке/крылышке. Выложите куски в панировку по одному кожей вниз, так, чтобы они равномерно распределились в панировочной ёмкости.
              </p>
            </div>
          </div>

          {/* Numbered step 5 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">5</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Отнести корзину обратно:
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Верните погружную корзину обратно на решетку и поддон.
              </p>
            </div>
          </div>

          {/* Numbered step 6 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">6</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Собрать-накрыть, собрать-поднять 10 раз.
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Поочередно, соберите и накройте, соберите и поднимите куски, 10 раз
              </p>
            </div>
          </div>

          {/* Numbered step 7 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">7</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Руками вдавить панировку 7 раз:
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Вдавите панировку в куски, 7 раз, продвигаясь вокруг ёмкости и заканчивая в центре.
              </p>
            </div>
          </div>

          {/* Numbered step 8 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">8</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Потрясти и постучать:
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Возьмите по одному куску большим и указательным пальцем каждой руки. Затем потрясите кистями рук и постучите основаниями ладоней одна об другую, чтобы стряхнуть излишки панировки. Сгладьте кожу на грудке, бедрах и киле.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Вдавите горстку панировки на все непокрытые места, а затем потрясите и постучите снова.
              </p>
              <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
                <div className="text-sm leading-[1.7]">
                  Складывая запанированные куски на решетки оставляйте между ними небольшое расстояние, чтобы во время тепловой обработки КУСКИ не слипались!!!!!
                </div>
              </div>
              <p className="text-sm leading-[1.7] mb-3">
                Излишняя кожа тщательно заправляется под низ. Не сжимайте грудку.
              </p>
            </div>
          </div>

          {/* Numbered step 9 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">9</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Взять ножки, расправить кожу, сжать, скрутить и добавить панировки
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Возьмите каждую ножку большим и указательным пальцами, натяните кожу по мясу, так, чтобы она оставалась на месте во время тепловой обработки (во время этой обработки кожа стягивается).
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Осторожно удерживая каждую ножку, возьмите голяшку кольцом из указательного и большого пальцев другой руки, сожмите ее и очень осторожно скрутите голяшку, чтобы удалить возможные воздушные карманы. Этим предотвращается обратное стягивание кожи с голяшки и разрывы, взрывы.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Панировка должна равномерно покрывать мясо и голяшку. Если на ножке есть непокрытые панировкой места, возьмите в одну руку горсть панировки и впрессуйте ее по всей поверхности ножки, удерживая ее другой рукой. Запанированные ножки выложите на решетку.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                При укладке ножек, меняйте поочередно направление их расположения, чтобы свести к минимуму взрыв ножки и обратное стягивание кожи с сустава.
              </p>
              <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
                <div className="text-sm leading-[1.7]">
                  Не втирайте панировку руками в панировочном ящике. Это приводит к образованию нежелательных шариков теста.
                </div>
              </div>
            </div>
          </div>

          {/* Numbered step 10 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">10</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Взять крылышки, расправить кожу, сложить крылышки:
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Сложите и зафиксируйте крылышки, а затем слегка приоткройте их, чтобы обеспечить нормальный приток жира. Сложите свободные части кожи на мясо у сустава. Положите на решетку третьей тонкой фалангой вниз.
              </p>
            </div>
          </div>

          {/* Storage rules bullet list */}
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              Время хранения запанированной продукции составляет не более 2 минут после окончания панирования последнего куска.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              Сетки и корзины с запанированным куриным полуфабрикатом не допускается хранить над фритюром.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              Если куриная продукция в пакете использована не полностью уберите ее в холодильник после загрузки запанированной курицы во фритюр.
            </li>
          </ul>

          {/* Section: Выкладка на решетки */}
          <h2 className="text-[19px] font-extrabold text-[#212121] leading-tight mt-9 mb-5 pt-7 border-t-2 border-[#f2f1ef]">
            Выкладка на решетки
          </h2>

          {/* Sub-section: Уложить куски в 8 головый НР */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Уложить куски в 8 головый НР
          </h3>
          <p className="text-sm leading-[1.7] mb-3">
            После укладки всех кусков на решетки, ПРИ ИСПОЛЬЗОВАНИИ ОДНОРАЗОВЫХ ПЕРЧАТОК В ПРОЦЕССЕ ПАНИРОВКИ: одноразовые перчатки необходимо выбросить.
          </p>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>Для приготовления 8 голов:</strong>
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Класть по 2 головы на решетку.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Сверху загружаемого продукта установите пустую решетку, чтобы полуфабрикат не &quot;уплывал&quot; с верхней решетки.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Нажать на кнопку 8-HEAD.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Располагайте продукт на всех решетках одинаково. Меняйте через одну решетки при загрузке фритюра так, чтобы бедра были в задней части одной решетки, а на следующей решетке в задней части были грудки. Это делается для улучшения потока жира.
            </li>
          </ul>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>Для приготовления 6 голов:</strong>
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Используйте решетки 1, 2 и 3
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Сверху загружаемого продукта установите пустую решетку (#4), чтобы полуфабрикат не &quot;уплывал&quot; с верхней решетки.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Нажмите на кнопку 6-HEAD.
            </li>
          </ul>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>Для приготовления 4 голов</strong>
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Используйте решетки 2 и 3, нижнюю решетку оставьте пустой
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Сверху загружаемого продукта установите пустую решетку (#4), чтобы полуфабрикат не &quot;уплывал&quot; с верхней решетки.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Нажмите на кнопку 4-HEAD.
            </li>
          </ul>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>Для приготовления 2 голов:</strong>
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Используйте решетку N2.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Сверху загружаемого продукта установите пустую решетку (#3), чтобы полуфабрикат не &quot;уплывал&quot; с верхней решетки.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Нажмите на кнопку 2-HEAD
            </li>
          </ul>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>Для приготовления 1 головы</strong>
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Используйте решетку N2
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Сверху загружаемого продукта установите пустую решетку (#3), чтобы полуфабрикат не &quot;уплывал&quot; с верхней решетки.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Нажмите на кнопку 2-HEAD
            </li>
          </ul>

          <p className="text-sm leading-[1.7] mb-3">
            Схема укладки 8 голов в НР и Схема укладки 1 головы 8 - головой НР
          </p>
          <img
            src="/assets/img-004.jpg"
            alt="Схема укладки 8 голов в НР"
            className="rounded-lg border border-[#f2f1ef] my-4"
            style={{ maxWidth: '480px', width: '100%' }}
          />
          <p className="text-sm leading-[1.7] mb-3">
            Схема укладки кусков для 4-голового НР (электрического)
          </p>
          <img
            src="/assets/img-010.jpg"
            alt="Схема укладки кусков для 4-голового НР"
            className="rounded-lg border border-[#f2f1ef] my-4"
            style={{ maxWidth: '480px', width: '100%' }}
          />

          {/* Sub-section: Уложить куски - 4 головый НР */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Уложить куски - 4 головый НР
          </h3>
          <p className="text-sm leading-[1.7] mb-3">
            После укладки всех кусков на решетки, ПРИ ИСПОЛЬЗОВАНИИ ОДНОРАЗОВЫХ ПЕРЧАТОК В ПРОЦЕССЕ ПАНИРОВКИ: одноразовые перчатки необходимо выбросить.
          </p>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>Укладка кусков - 4 головый НР (электрический):</strong>
          </p>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>для приготовления 4 голов:</strong>
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Укладка согласно схеме.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Оставьте верхнюю решетку пустой для того, чтобы полуфабрикат не &quot;уплывал&quot; во время жарки.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Нажать на кнопку 4-HEAD.
            </li>
          </ul>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>Для приготовления 2 голов:</strong>
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Укладка согласно схеме.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Нумерация решеток начинается снизу.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              При загрузке полуфабриката в жаровню использовать решетки # 2, 3.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Установить пустую решетку #4 сверху загружаемого продукта для того, чтобы полуфабрикат не &quot;уплывал&quot; с верхней решетки.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Нажмите на кнопку 2-HEAD.
            </li>
          </ul>

          <img
            src="/assets/img-011.jpg"
            alt="Схема укладки 4 головый НР"
            className="rounded-lg border border-[#f2f1ef] my-4"
            style={{ maxWidth: '480px', width: '100%' }}
          />

          {/* Section: Приготовление кусков */}
          <h2 className="text-[19px] font-extrabold text-[#212121] leading-tight mt-9 mb-5 pt-7 border-t-2 border-[#f2f1ef]">
            Приготовление кусков
          </h2>
          <p className="text-sm leading-[1.7] mb-3">
            Настройки жаровен зависят от веса куриной тушки.
          </p>

          {/* Sub-section: Стандарты */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Стандарты
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Проверяйте уровень фритюрного масла перед тепловой обработкой каждой партии. Отрегулируйте его уровень по необходимости.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              В случае, если корзина не использовалась ранее (например, после мойки) - опустите ее в фритюрное масло, затем поднимите и дайте ей стечь в течение 15 секунд. Это предотвратит прилипание панировки к решеткам.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Тепловую обработку следует начать в течение 2 минут после панировки последней ножки.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Подогревать фритюрное масло следует во время процесса панирования и укладки куриного мяса для того, чтобы фритюрное масло достигло нужной температуры.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Прежде чем опускать продукт во фритюр, убедитесь, что выбрана верная кнопка продукта, и что на дисплей выведено слово &quot;droP&quot;/&quot;ready&quot;.
            </li>
          </ul>

          {/* Warning alert */}
          <div className="bg-kfc-red text-white rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
            <div className="text-sm font-bold">
              Запрещается сокращать время тепловой обработки или производить ее при более низкой температуре, чем требуется по стандарту.
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Перед началом приготовления продукта фритюрное масло необходимо размешать: 4-головый НР – используя крюк для корзин
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Для снижения температуры в 8-головом HP допускается проводить дополнительную процедуру фильтрации.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
              Использование СИЗ не требуется.
            </li>
          </ul>

          {/* Inline alert */}
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
            <div className="text-sm leading-[1.7]">
              Не перемешивайте фритюрное масло в холодной зоне у основания жаровни, это может вызвать выливание кипящего фритюрного масла из жарочного бака.
            </div>
          </div>

          {/* Numbered steps for cooking */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">1</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Опустите корзину в масло
              </h4>

              <p className="text-sm leading-[1.7] mb-3">
                <strong>4-головый HP:</strong>
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Вставьте ручку в корзину.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Загрузите решетки в корзину (снизу вверх) согласно таблицам укладки.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Установите чистую решетку от Henny Penny в слот над верхней решеткой с мясом, чтобы предотвратить всплывание ножек во время тепловой обработки.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Погрузите корзину в жарочный бак, а затем снимите ручку для корзины.
                </li>
              </ul>

              <p className="text-sm leading-[1.7] mb-3">
                <strong>8-головый HP / Velocity PXE :</strong>
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Принесите решетки с панированным куриным полуфабрикатом к фритюру.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Загрузите решетки в корзину (снизу вверх) согласно таблицам укладки.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Установите чистую решетку от Henny Penny в слот над верхней решеткой с мясом, чтобы предотвратить всплывание ножек во время тепловой обработки.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Погрузите корзину в жарочный бак.
                </li>
              </ul>

              <img
                src="/assets/img-012.jpg"
                alt="Погружение корзины"
                className="rounded-lg border border-[#f2f1ef] my-4"
                style={{ maxWidth: '480px', width: '100%' }}
              />

              <p className="text-sm leading-[1.7] mb-3">
                <strong>4-головый HP:</strong>
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Закройте крышку плавно без удара; сильно нажмите на поперечину, чтобы сработал предохранитель.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Поверните шпиндель направо (по часовой стрелке) до упора так, чтобы красная ручка шпинделя совместилась с красной ручкой.
                </li>
              </ul>

              <p className="text-sm leading-[1.7] mb-3">
                <strong>8-головый HP / Velocity PXE:</strong>
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Потяните за рычаг прямо вниз, чтобы закрыть жарочный бак, крышка защелкнется на предохранитель.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Потяните рычаг на себя, а затем поднимите его.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  При поднятом рычаге потяните его на себя опять, а затем потяните вниз до упора.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Когда Вы тяните рычаг на себя, ролики с обеих сторон рычага крышки попадают в блоки замка.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Когда Вы тяните рычаг вниз, крышка плотно примыкает к кромке жарочного бака. Прокладка в крышке обеспечивает герметичность для создания давления.
                </li>
              </ul>

              <img
                src="/assets/img-017.jpg"
                alt="Закрытие крышки"
                className="rounded-lg border border-[#f2f1ef] my-4"
                style={{ maxWidth: '480px', width: '100%' }}
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">2</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Включите цикл тепловой обработки
              </h4>
              <ul className="space-y-2 mb-4">
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Нажмите на кнопку, соответствующую количеству приготавливаемых ножек.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Прежде чем отойти от фритюра, убедитесь, что таймер включился.
                </li>
              </ul>
              <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
                <div className="text-sm leading-[1.7]">
                  Если цикл тепловой обработки прервался из-за отключения питания, ошибки программы или по другой причине, продукт, находящийся во фритюре, подлежит удалению в отходы!
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">3</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Если куриная продукция в пакете использована не полностью
              </h4>
              <ul className="space-y-2 mb-4">
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Если куриный полуфабрикат в пакете использован не полностью необходимо завернуть верхнюю часть пакета и отнести пакет обратно в холодильник в специальной синей/ черной гастроемкости.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Положить пакет сверху закрытых упаковок с соответствующей куриной продукцией, чтобы он был использован в первую очередь (рисунок ниже).
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Пустой пакет из-под курицы необходимо выкидывать, используя синюю/ черную гастроемкость.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  При необходимости отнести специальную синюю/ черную гастроемкость на мойку. Гастроемкость необходимо мыть 1 раз в 4 часа и ополаскивать при необходимости в нижней раковине двухъярусной мойки или в средней раковине трехсекционной мойки.
                </li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">4</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Очистите и продезинфицируйте
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                панировочный стол, ручки корзин, ручки холодильника, ручку фритюра и наружную панель компьютера, чтобы снизить риск перекрестного заражения.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">5</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Вымойте руки.
              </h4>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">6</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                За минуту до окончания цикла,
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                возьмите нужное количество горячих решёток из теплового шкафа и положите решётки на укладочный стол
              </p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">7</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Остановите таймер по окончании цикла:
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Сброс давления и подача звукового сигнала происходят автоматически. На дисплее появится слово &quot;DONE&quot;.
              </p>
            </div>
          </div>

          {/* Step 8 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">8</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Нажмите кнопку под мигающей лампочкой:
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                На дисплее фритюра появится слово &quot;FILR&quot; или &quot;CooL&quot;.
              </p>
            </div>
          </div>

          {/* Warning alert */}
          <div className="bg-kfc-red text-white rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
            <div className="text-sm font-bold">
              Не пытайтесь повернуть шпиндель 4- голового фритюра или отомкнуть крышку 8-голового, пока манометр не покажет отсутствие давление; а также НЕ открывайте сливной клапан, ПОКА ножки НЕ будут извлечены из фритюра. Можно обжечься или сломать систему запора или повредить оборудование.
            </div>
          </div>

          <img
            src="/assets/img-018.jpg"
            alt="Дисплей фритюра"
            className="rounded-lg border border-[#f2f1ef] my-4"
            style={{ maxWidth: '480px', width: '100%' }}
          />

          {/* Inline alert */}
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
            <div className="text-sm leading-[1.7]">
              Убедитесь по манометру в отсутствии давления!
            </div>
          </div>

          {/* Warning alert */}
          <div className="bg-kfc-red text-white rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
            <div className="text-sm font-bold">
              Не открывайте крышку до полного падения давления в жаровне. Если открыть крышку до окончания цикла, брызги горячего масла могут обжечь находящихся возле жаровни членов бригады.
            </div>
          </div>

          {/* Inline alert */}
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
            <div className="text-sm leading-[1.7]">
              Всегда крепко держите ручки фритюра. Не позволяйте крышке подпрыгнуть после первого быстрого подъема!
            </div>
          </div>

          {/* Step 9 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">9</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Откройте крышку ПОСЛЕ падения давления
              </h4>

              <p className="text-sm leading-[1.7] mb-3">
                <strong>4-головый HP</strong>
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Медленно поверните шпиндель налево на один оборот (против часовой стрелки), чтобы снять давление.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Затем продолжайте поворачивать, пока шпиндель не остановится.
                </li>
                <li className="text-sm leading-[1.7] relative pl-5 before:content-['–'] before:absolute before:left-0.5 before:text-kfc-red before:font-bold">
                  Нажмите вниз на поперечину, потяните вверх предохранитель и осторожно поднимите крышку.
                </li>
              </ul>

              <p className="text-sm leading-[1.7] mb-3">
                <strong>8-головый HP / Velocity PXE</strong>
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Медленно разомкните рычаг, подняв ручку
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Нажмите
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Опустите ручку и нажмите опять
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Нажмите на верхнюю часть предохранителя, чтобы разомкнуть крышку.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Поднимите крышку быстрым движением подъемной ручки, чтобы она приоткрылась, а затем поднимите полностью
              </p>

              <img
                src="/assets/img-019.jpg"
                alt="Открытие крышки"
                className="rounded-lg border border-[#f2f1ef] my-4"
                style={{ maxWidth: '480px', width: '100%' }}
              />
            </div>
          </div>

          {/* Step 10 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">10</span>
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#212121] mt-0 mb-2">
                Извлеките решетки с куриным мясом и дайте маслу стечь в течение 15 секунд.
              </h4>
              <p className="text-sm leading-[1.7] mb-3">
                Готовые куски не должны храниться над маслом. Пары масла впитываются в продукт, ухудшая его вкусовые качества.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Оставьте фритюр в режиме &quot;COOL&quot; или &quot;IDLE&quot; и подготовьтесь к следующей партии.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Если используется 4-головой НР, профильтруйте масло.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Если фритюр не требуется вам сразу же для следующей партии, ОСТАВЬТЕ ЕГО В РЕЖИМЕ &quot;COOL&quot;/&quot;IDLE&quot;. Это поддерживает температуру фритюрного масла на уровне 124°C.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Если фритюр требуется для следующей партии, нажмите на кнопку выбора программы, соответствующей количеству загружаемой продукции. Затем запанируйте и разложите мясо на решетки. К окончанию панировки жаровня должна быть при температуре &quot;droP&quot;/&quot;READY&quot;.
              </p>
              <p className="text-sm leading-[1.7] mb-3">
                Применение режима &quot;CooL&quot;/&quot;IDLE&quot; увеличивает срок службы фритюрного масла, потому что оно не подвергается излишнему нагреву. Если поддерживать фритюр всё время при температуре &quot;droP&quot;, фритюрное масло портится и потребляется больше энергии.
              </p>

              <img
                src="/assets/img-020.jpg"
                alt="Извлечение решеток"
                className="rounded-lg border border-[#f2f1ef] my-4"
                style={{ maxWidth: '480px', width: '100%' }}
              />
            </div>
          </div>

          {/* Section: Выкладка в тепловой шкаф */}
          <h2 className="text-[19px] font-extrabold text-[#212121] leading-tight mt-9 mb-5 pt-7 border-t-2 border-[#f2f1ef]">
            Выкладка в тепловой шкаф
          </h2>

          {/* Numbered steps */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">1</span>
            <div className="flex-1">
              <p className="text-sm leading-[1.7] mb-3">
                Положите решетки с ножками на поддон (из 8-голового HP/ Velocity PXE/ Winston) или переложите их щипцами на чистые решетки над поддоном (из 4-голового НР). Немедленной поместите решетки в вертикальный тепловой шкаф.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">2</span>
            <div className="flex-1">
              <p className="text-sm leading-[1.7] mb-3">
                Перед подачей гостю, выдержите куски в тепловом шкафу 7 минут, чтобы обеспечить удаление лишнего масла, повысить качество подаваемого продукта и обеспечить его безопасность. Для подтверждения безопасности осуществляется проверка температуры в центре (толще) готового продукта по окончании процесса приготовления. Температура в толще готового продукта должна быть не менее 85 С.
              </p>
            </div>
          </div>

          {/* Sub-section: Процедура контроля температуры */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Процедура контроля температуры:
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              После стекания масла, сразу переместите продукт на стол для готовой продукции. Проведите измерение температуры трех визуально самых больших кусков. Помещайте термометр в центр (толщу) продукта. Если температура выше 85 С, поместите куски на хранение. Дополнительные измерения не требуются.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              Если температура кусков ниже 85 С, проведите измерение повторно, поместив щуп термометра в другую часть этого куска также в центр продукта, чтобы исключить погрешность замера при попадании щупа в воздушную полость внутри продукта. Поместите куски на хранение.
            </li>
            <li className="text-sm leading-[1.7] relative pl-5">
              <span className="absolute left-0 text-kfc-red font-bold">•</span>
              Если температура выше 85 С, дополнительные измерения не требуются. Если температура ниже 85 С, проведите измерение тех же кусков по окончании выдержки в тепловом шкафу (через 7 минут). Если по окончании выдержки температура ниже 85 С, утилизируйте партию. Для дальнейших корректирующих действий используйте Рабочий лист HACCP №1.1.
            </li>
          </ul>

          <p className="text-sm leading-[1.7] mb-3">
            <strong>Рабочие листы HACCP</strong>
          </p>

          {/* Step 3 */}
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">3</span>
            <div className="flex-1">
              <p className="text-sm leading-[1.7] mb-3">
                Обозначьте общее время хранения куриных кусков (эл. таймером или картонной биркой-таймером): в тепловом шкафу - 90 минут. В эти 90 минут входят и 7 минут на выдержку готового продукта.
              </p>
            </div>
          </div>

          {/* Inline alert */}
          <div className="bg-[#fff0f0] border-l-4 border-kfc-red rounded p-3 mb-4 flex items-start gap-3">
            <div className="text-sm leading-[1.7]">
              Температура готового продукта, отдаваемого гостю, не должна быть ниже + 60°C
            </div>
          </div>

          {/* Section: Country Temperature Table */}
          <h2 className="text-[19px] font-extrabold text-[#212121] leading-tight mt-9 mb-5 pt-7 border-t-2 border-[#f2f1ef]">
            Таблица температур по странам
          </h2>
          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr className="bg-[#f07020] text-white">
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Страна</th>
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Температура внутри продукта</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Armenia', '60°C'],
                ['Таджикистан', '60°C'],
                ['Азербайджан', '60°C'],
                ['Грузия', '60°C'],
                ['Узбекистан', '65°C'],
                ['Казахстан', '65°C'],
                ['Кыргызстан', '60°C'],
              ].map(([country, temp], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f4' }}>
                  <td className="border border-[#e8ddd0] p-2.5">{country}</td>
                  <td className="border border-[#e8ddd0] p-2.5">{temp}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm leading-[1.7] mb-3">
            Ознакомиться со схемами раскладки продуктов в тепловых шкафах, стандартами хранения и сервировки блюд из курицы вы можете в CSL Хранение и сервировка блюд из курицы.
          </p>

          {/* Section: Просеивание панировочной смеси и замена погружной воды */}
          <h2 className="text-[19px] font-extrabold text-[#212121] leading-tight mt-9 mb-5 pt-7 border-t-2 border-[#f2f1ef]">
            Просеивание панировочной смеси и замена погружной воды
          </h2>
          <p className="text-sm leading-[1.7] mb-3">
            После каждого панирования нужно просеивать панировочную смесь и менять воду.
          </p>
          <p className="text-sm leading-[1.7] mb-3">
            Просеивание необходимо для равномерного распределения ингредиентов панировки по всей смеси. Благодаря этому корочка на готовом курином продукте будет иметь правильные вкус, текстуру и цвет.
          </p>
          <p className="text-sm leading-[1.7] mb-3">
            Единственным исключением из этого правила является случай, когда вы готовите несколько партий подряд, тогда можно панировать 4 партии подряд, прежде чем просеивать панировочную смесь и менять воду.
          </p>

          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">1</span>
            <div className="flex-1">
              <p className="text-sm leading-[1.7] mb-3">
                Вылейте воду для окунания в среднюю раковину трехсекционной мойки, или нижний уровень двухъярусной мойки, чтобы снизить возможность перекрестного заражения.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">2</span>
            <div className="flex-1">
              <p className="text-sm leading-[1.7] mb-3">
                Вымойте руки.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-kfc-red text-white font-extrabold text-sm flex items-center justify-center shrink-0">3</span>
            <div className="flex-1">
              <p className="text-sm leading-[1.7] mb-3">
                Очистите и продезинфицируйте панировочный стол, ручки корзин, ручки холодильника, чтобы снизить риск перекрестного заражения.
              </p>
            </div>
          </div>

          {/* Section: Решение проблем */}
          <h2 className="text-[19px] font-extrabold text-[#212121] leading-tight mt-9 mb-5 pt-7 border-t-2 border-[#f2f1ef]">
            Решение проблем
          </h2>

          {/* Sub-section: Продукт слишком светлого цвета */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Продукт слишком светлого цвета
          </h3>
          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr className="bg-[#f07020] text-white">
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Возможная причина</th>
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Решение</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Температура фритюра слишком низкая', 'Отбракуйте продукт. Отрегулируйте настройки тепловой обработки'],
                ['Не достаточно времени для тепловой обработки', 'Отрегулируйте настройки тепловой обработки. Обратитесь в техническую службу'],
                ['Неисправная работа таймера', 'Обратитесь в техническую службу'],
                ['Неисправная работа фритюра. Слишком большая загрузка', 'Повторно обратитесь к обучающим процедурам'],
                ['Фритюр предварительно не разогрет', 'Отбракуйте продукт. Отрегулируйте &quot;drop/ ready&quot;. Если температура корректна и установлена на &quot;drop/ready&quot;, повторно обратитесь к обучающим процедурам'],
              ].map(([cause, solution], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f4' }}>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{cause}</td>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{solution}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sub-section: Продукт слишком темного цвета */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Продукт слишком темного цвета
          </h3>
          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr className="bg-[#f07020] text-white">
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Возможная причина</th>
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Решение</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Продукт был подвержены тепловой обработке не сразу после панировки', 'Повторно обратиться к обучающим процедурам'],
                ['Масло использовалось слишком долго', 'Смените масло и еще раз обратитесь к руководству по работе с маслом'],
                ['Слишком продолжительное время тепловой обработки', 'Отрегулируйте настройки тепловой обработки'],
                ['Неисправная работа таймера', 'Отрегулируйте настройки тепловой обработки'],
                ['Температура фритюра слишком высокая', 'Отрегулируйте настройки тепловой обработки'],
                ['Хранение продукта за пределами сроков хранения', 'Удалите продукт в отходы. Повторно обратитесь к обучающим процедурам'],
                ['Слишком высокая температура во время хранения', 'Обратитесь в техническую службу'],
              ].map(([cause, solution], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f4' }}>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{cause}</td>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{solution}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sub-section: Продукт маслянистый */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Продукт маслянистый
          </h3>
          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr className="bg-[#f07020] text-white">
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Возможная причина</th>
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Решение</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Старое или разложившееся масло', 'Заменить масло при снижении прозрачности ниже стандарта'],
                ['Не достигнута рабочая температура тепловой обработки', 'Строго придерживайтесь процедуры тепловой обработки. Обязательно дождитесь, когда масло достигнет рабочей температуры'],
                ['Слишком низкая температура масла', 'Проверить установки и датчик'],
              ].map(([cause, solution], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f4' }}>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{cause}</td>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{solution}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sub-section: Продукт слишком сухой */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Продукт слишком сухой
          </h3>
          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr className="bg-[#f07020] text-white">
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Возможная причина</th>
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Решение</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Слишком продолжительное время тепловой обработки', 'Отрегулируйте настройки тепловой обработки'],
                ['Неисправная работа таймера', 'Отрегулируйте настройки тепловой обработки'],
                ['Слишком высокая температура во время хранения', 'Обратитесь в техническую службу'],
                ['Хранение продукта за пределами сроков хранения', 'Удалите продукт в отходы. Повторно обратитесь к обучающим процедурам'],
                ['Температура тепловой обработки слишком высокая', 'Отрегулируйте настройки тепловой обработки'],
              ].map(([cause, solution], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f4' }}>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{cause}</td>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{solution}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sub-section: Куски продукта слиплись */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Куски продукта слиплись
          </h3>
          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr className="bg-[#f07020] text-white">
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Возможная причина</th>
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Решение</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Куски продукта уложены на сетке слишком близко друг к другу', 'Повторно обратитесь к обучающим процедурам'],
                ['За раз приготовлено больше максимально допустимого количества', 'Повторно обратитесь к обучающим процедурам'],
              ].map(([cause, solution], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f4' }}>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{cause}</td>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{solution}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sub-section: Продукт холодный (выбросить) */}
          <h3 className="text-[16px] font-bold text-[#212121] mt-8 mb-3">
            Продукт холодный (выбросить)
          </h3>
          <table className="w-full border-collapse my-4 text-[13px]">
            <thead>
              <tr className="bg-[#f07020] text-white">
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Возможная причина</th>
                <th className="border border-[#e8ddd0] p-2.5 text-left font-bold">Решение</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Продукт не был помещен в тепловой шкаф сразу же после приготовления', 'Повторно обратитесь к обучающим процедурам'],
                ['Слишком низкая температура в тепловом шкафу', 'Проверьте настройки'],
                ['Хранение продукта за пределами срока хранения', 'Повторно обратитесь к обучающим процедурам'],
              ].map(([cause, solution], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fdf8f4' }}>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{cause}</td>
                  <td className="border border-[#e8ddd0] p-2.5 align-top">{solution}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
