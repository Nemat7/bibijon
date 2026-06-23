import { useState } from 'react'
import { Link } from 'react-router'
import { Heart } from 'lucide-react'
import Topbar from '@/components/Topbar'

interface ArticleCard {
  title: string
  description: string
  tags: { label: string; isMore?: boolean }[]
  href?: string
}

const articles: ArticleCard[] = [
  // === ROW 1 ===
  {
    title: 'Рис Барбекю - Таджикистан',
    description: 'Рис Барбекю – это сочетание гарнира из тёплого риса и соусных ...',
    tags: [{ label: '#Рисбарбекю' }, { label: '#Рис' }, { label: '+4', isMore: true }],
    href: '/pdfs/product/Рис Барбекю - Таджикистан.pdf',
  },
  {
    title: 'Куринные куски OR',
    description: 'Полковник Харланд Сандерс представил курицу Original Rec...',
    tags: [{ label: '#оригинальная курица' }, { label: '+4', isMore: true }],
    href: '/pdfs/product/Куринные куски OR.pdf',
  },
  {
    title: 'ШЕФБУРГЕР ПИКЛ РАНЧ',
    description: 'Сочное куриное филе в хрустящей панировке под соусом Пи...',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/ШЕФБУРГЕР ПИКЛ РАНЧ.pdf',
  },
  // === ROW 2 ===
  {
    title: 'ШЕФБУРГЕР БУФФАЛО РАНЧ',
    description: 'Сочное куриное филе в хрустящей панировке под пикантным...',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/ШЕФБУРГЕР БУФФАЛО РАНЧ.pdf',
  },
  {
    title: 'Крылья H&S Чили Лайм',
    description: 'Острые крылышки Hot & Spicy Chili Lime - это популярные кр...',
    tags: [{ label: '#Armenia' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Крылья H&S Чили Лайм.pdf',
  },
  {
    title: 'Шефбургер OR (Бриошь булочка)',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Armenia' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Шефбургер OR ( Бриошь булочка).pdf',
  },
  // === ROW 3 ===
  {
    title: 'Шефбургер H&S (Бриошь булочка)',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Armenia' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Шефбургер H&S ( Бриошь булочка).pdf',
  },
  {
    title: 'Боксмастер OR/HS',
    description: 'Пшеничная тортилья с цельным филе, нежным соусом, больш...',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Боксмастер OR:HS.pdf',
  },
  {
    title: 'Мега Ролл (Кыргызстан)',
    description: 'Пшеничная тортилья с большим количеством сочного мяса, о...',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Мега Ролл (Кыргызстан).pdf',
  },
  // === ROW 4 ===
  {
    title: 'Наггетсы',
    description: 'Снеки из филе куриной грудки, запанированные в оригиналь...',
    tags: [{ label: '#Продукт' }, { label: '#KG' }, { label: '+17', isMore: true }],
    href: '/pdfs/product/Наггетсы.pdf',
  },
  {
    title: 'Шефбургер Острый',
    description: 'Сандвичи в булочках',
    tags: [{ label: '#product' }, { label: '#UZ' }, { label: '+2', isMore: true }],
    href: '/pdfs/product/Шефбургер Острый.pdf',
  },
  {
    title: 'Шефбургер острый',
    description: 'Аппетитный сэндвич с сочным куриным филе, с соусом бургер ...',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
  },
  // === ROW 5 ===
  {
    title: 'Чизбургер Де Люкс',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Чизбургер Де Люкс.pdf',
  },
  {
    title: 'Молочные коктейли',
    description: 'В этой статье вы найдете информацию о том как приготовить ...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+20', isMore: true }],
    href: '/pdfs/product/Молочные коктейли.pdf',
  },
  {
    title: 'Мороженое с ТОППИНГОМ',
    description: 'В этом CSL вы найдете информацию о приготовлении морожен...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+20', isMore: true }],
    href: '/pdfs/product/Мороженое с топпингом.pdf',
  },
  // === ROW 6 ===
  {
    title: 'Острый Шефбургер Де Люкс',
    description: 'Навекуснейшая булочка империт с нежным соусом бургер,...',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Острый Шефбургер Де Люкс.pdf',
  },
  {
    title: 'Шефбургер Де Люкс Оригинальный',
    description: 'Булочка Империт с нежным соусом цезарь, двойным сыром, ...',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Шефбургер Де Люкс Оригинальный.pdf',
  },
  {
    title: 'Получение продуктов и упаковки от поста...',
    description: 'Получение и хранение в ресторане продуктов от поставщиков',
    tags: [{ label: '#Продукт' }, { label: '+11', isMore: true }],
    href: '/pdfs/product/Получение продуктов и упаковки от поставщиков и хранение их в ресторанах.pdf',
  },
  // === ROW 7 ===
  {
    title: 'Мега Твистер Сырный (без лука)',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Таджикистан' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Мега Твистер Сырный (без лука).pdf',
  },
  {
    title: 'Куриные ножки HS',
    description: 'Острые ножки Hot & Spicy ™ KFC ® - это куриные ножки, которые...',
    tags: [{ label: '#Продукт' }, { label: '+23', isMore: true }],
    href: '/pdfs/product/Куриные ножки HS.pdf',
  },
  {
    title: 'Хранение и сервировка блюд из курицы',
    description: 'В этом CSL вы найдете схемы раскладки продуктов в тепловых ...',
    tags: [{ label: '#Продукт' }, { label: '+24', isMore: true }],
    href: '/pdfs/product/Хранение и сервировка блюд из курицы.pdf',
  },
  // === ROW 8 ===
  {
    title: 'Твистер Джуниор Спешл',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Продукт' }, { label: '#AM' }, { label: '+7', isMore: true }],
    href: '/pdfs/product/Твистер Джуниор Спешл.pdf',
  },
  {
    title: 'Салат Коул Слоу',
    description: 'В этом CSL вы найдете информацию по приготовлению салата ...',
    tags: [{ label: '#Продукт' }, { label: '#UZ' }, { label: '+2', isMore: true }],
    href: '/pdfs/product/Салат Коул Слоу.pdf',
  },
  {
    title: 'Мега Твистер HS/OR (с Коул Слоу)',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Мега Твистер HS:OR (с коул слоу).pdf',
  },
  // === ROW 9 ===
  {
    title: 'Боксмастер Чиз',
    description: 'Пшеничная тортилья с большим количеством овощей и с наив...',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Боксмастер Чиз.pdf',
  },
  {
    title: 'Подготовка и хранение ИНГРЕДИЕНТОВ',
    description: 'В этой статье вы найдете информацию как подготавливать все ...',
    tags: [{ label: '#UZ' }, { label: '#Uzbekistan' }, { label: '+2', isMore: true }],
    href: '/pdfs/product/Подготовка и хранение ингредиентов.pdf',
  },
  {
    title: 'FSCC 5.03 Растарка продуктов',
    description: 'Растарка продуктов — нормы выхода и расход продуктов при приготовлении.',
    tags: [{ label: '#FSCC' }, { label: '#Продукт' }],
    href: '/pdfs/product/FSCC 5.03 Растарка продуктов 06.24_0.pdf',
  },
  {
    title: 'Сандерс Шеф Пита оригинальная',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Сандерс Шеф Пита оригинальная.pdf',
  },
  // === ROW 10 ===
  {
    title: 'Параметры приготовления',
    description: 'Настройки тепловой обработки (жарки)',
    tags: [{ label: '#Продукт' }, { label: '+25', isMore: true }],
    href: '/pdfs/product/Параметры приготовления.pdf',
  },
  {
    title: 'Стрипсы OR',
    description: 'Полковник Харланд Сандерс представил курицу Original Rec...',
    tags: [{ label: '+23 теги', isMore: true }],
    href: '/pdfs/product/Стрипсы OR.pdf',
  },
  {
    title: 'Сандерс Чиз Бургер',
    description: 'Воздушная булочка Бриошь с куриным филе OR/HS со свежим ...',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Сандерс Чиз Бургер.pdf',
  },
  // === ROW 11 ===
  {
    title: 'Ай Бургер - Таджикистан',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '#Tajikistan' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Ай Бургер - Таджикистан.pdf',
  },
  {
    title: 'Сандерс бургер OR/HS',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Сандерс бургер OR:HS.pdf',
  },
  {
    title: 'Твистер Джуниор Узбекистан',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Твистер Джуниор Узбекистан.pdf',
  },
  // === ROW 12 ===
  {
    title: 'Байтсы Барбекю - Таджикистан',
    description: 'Байтсы Барбекю – это сочные кусочки куриного филе, обжарен...',
    tags: [{ label: '#байтсыбарбекю' }, { label: '+4', isMore: true }],
    href: '/pdfs/product/Байтсы Барбекю - Таджикистан.pdf',
  },
  {
    title: 'Острый Шефбургер Барбекко - Таджикис...',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Шефбургербарбекю' }, { label: '+2', isMore: true }],
    href: '/pdfs/product/Острый Шефбургер Барбекю - Таджикистан.pdf',
  },
  {
    title: 'Шефбургер Барбекю - Таджикистан',
    description: 'Сандвичи в булках',
    tags: [{ label: '#bbq' }, { label: '+2', isMore: true }],
    href: '/pdfs/product/Шефбургер Барбекю - Таджикистан.pdf',
  },
  // === ROW 13 ===
  {
    title: 'Картофель Крокетс',
    description: 'Фирменные крокеты – это золотистые цилиндры из тертого к...',
    tags: [{ label: '#KZ' }, { label: '#Kazakhstan' }, { label: '+3', isMore: true }],
    href: '/pdfs/product/Картофель Крокетс.pdf',
  },
  {
    title: 'Рисовые шарики в томатном соусе и сли...',
    description: 'Фирменные рисовые шарики представляют собой шарики в т...',
    tags: [{ label: '#Продукт' }, { label: '#Tajikistan' }, { label: '+1', isMore: true }],
    href: '/pdfs/product/Рисовые шарики в томатном соусе и сливочно-сырной начинкой.pdf',
  },
  {
    title: 'Твистер Джуниор Спешл -Tajik',
    description: 'Сандвич дар тортилияхо',
    tags: [{ label: '#Продукт' }, { label: '#Tajikistan' }, { label: '+1', isMore: true }],
    href: '/pdfs/product/Твистер Джуниор Спешл -Tajik.pdf',
  },
  // === ROW 14 ===
  {
    title: 'Байтсы HS ETC',
    description: 'Байтсы из куриного филе KFC ® - это куски из куриного филе, за...',
    tags: [{ label: '#Продукт' }, { label: '#AZ' }, { label: '+9', isMore: true }],
    href: '/pdfs/product/Байтсы HS ETC.pdf',
  },
  {
    title: 'Картофель по-деревенски',
    description: 'Дольки рассыпчатого и хрустящего картофеля в кожуре со сп...',
    tags: [{ label: '#Продукт' }, { label: '+19', isMore: true }],
    href: '/pdfs/product/Картофель по-деревенски.pdf',
  },
  {
    title: 'Картофель фри 6x6',
    description: 'Соломка из картофеля обжаренная во фритюре с аппетитно х...',
    tags: [{ label: '#Продукт' }, { label: '#KZ' }, { label: '+12', isMore: true }],
    href: '/pdfs/product/Картофель фри 6х6.pdf',
  },
  // === ROW 15 ===
  {
    title: 'Куринные ножки OR',
    description: 'Полковник Харланд Сандерс представил курицу Original Rec...',
    tags: [{ label: '#оригинальная курица' }, { label: '+2', isMore: true }],
    href: '/pdfs/product/Куринные ножки OR.pdf',
  },
  {
    title: 'Айтвистер сырный',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+1', isMore: true }],
    href: '/pdfs/product/Айтвистер сырный.pdf',
  },
  {
    title: 'Стандарты работы с панировочной сме...',
    description: 'Подготовка и работа панировочной смесью и погружной водой',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+21', isMore: true }],
    href: '/pdfs/product/Cтандарты работы с панировочной смесью и погружной водой.pdf',
  },
  // === ROW 16 (PAGE 2) ===
  {
    title: 'Картофель Крисперс (Армения)',
    description: 'Картофель КРИСПЕРС представляют собой золотистые дольки...',
    tags: [{ label: '#Продукт' }, { label: '#Armenia' }, { label: '+1', isMore: true }],
  },
  {
    title: 'I - Твистер (HS, Казахстан)',
    description: 'Сандвичи в лепешках',
    tags: [{ label: '#Продукт' }, { label: '#Kazakhstan' }, { label: '+2', isMore: true }],
  },
  {
    title: 'I - твистер (OR,Казахстан)',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Продукт' }, { label: '#KZ' }, { label: '+2', isMore: true }],
  },
  // === ROW 17 ===
  {
    title: 'Луковые кольца',
    description: 'Нежнейшие луковые кольца, обжаренные в хрустящей панир...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+4', isMore: true }],
  },
  {
    title: 'Мега Ролл - Tajik',
    description: 'Сандвичхо дар тортилияхо',
    tags: [{ label: '#Продукт' }, { label: '#Tajikistan' }, { label: '+3', isMore: true }],
  },
  {
    title: 'Сырные подушечки',
    description: 'Нежнейшие сырные подушечки, обжаренные в хрустящей пан...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+7', isMore: true }],
  },
  // === ROW 18 ===
  {
    title: 'Пойхои мург OR - Tajik',
    description: 'Полковник Харланд Сандерс дар соли 1939 мурғхои Original Rec...',
    tags: [{ label: '#оригинальная курица' }, { label: '+4', isMore: true }],
  },
  {
    title: 'Бустер Джуниор',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '+3', isMore: true }],
  },
  {
    title: 'Бустер',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '#UZ' }, { label: '+2', isMore: true }],
  },
  // === ROW 19 ===
  {
    title: 'Мохито и Лимонад Маракуйя/Арбуз',
    description: 'Охлажденные безалкогольные напитки ...',
    tags: [{ label: '#AZ' }, { label: '#product' }, { label: '+1', isMore: true }],
  },
  {
    title: 'Пирожки',
    description: 'Хрустящие пирожки с различными ягодно-фруктовыми мягким...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+16', isMore: true }],
  },
  {
    title: 'Донаты Новые',
    description: 'Десерты - новые донаты карамельный вкус и клубничка',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+11', isMore: true }],
  },
  // === ROW 20 ===
  {
    title: 'Твистер Чиз Дуэт (HS)-Армения',
    description: 'Сандвичи в лепешках',
    tags: [{ label: '#Продукт' }, { label: '#Армения' }, { label: '+1', isMore: true }],
  },
  {
    title: 'Твистер Чиз Дуэт OR (Армения)',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Продукт' }, { label: '#Armenia' }, { label: '+1', isMore: true }],
  },
  {
    title: 'Твистер Халапеньо Чиз (HS)-Армения',
    description: 'Сандвичи в лепешках',
    tags: [{ label: '#Продукт' }, { label: '#Армения' }, { label: '+1', isMore: true }],
  },
  // === ROW 21 ===
  {
    title: 'Получение продуктов и упаковки от поста...',
    description: 'Получение и хранение в ресторане продуктов от поставщиков',
    tags: [{ label: '#Продукт' }, { label: '+11', isMore: true }],
    href: '/pdfs/product/Получение продуктов и упаковки от поставщиков и хранение их в ресторанах.pdf',
  },
  {
    title: 'Зингер',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+2', isMore: true }],
  },
  {
    title: 'Байтсы из куриного филе',
    description: 'Байтсы из куриного филе KFC ® - это кусочки из куриного филе, зам...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+18', isMore: true }],
  },
  // === ROW 22 ===
  {
    title: 'Кукуруза',
    description: 'Золотистая, мягкая кукуруза с отличным вкусом. Это замечател...',
    tags: [{ label: '#Azerbaijan' }, { label: '+1', isMore: true }],
  },
  {
    title: 'Напитки POST MIX - Cloned',
    description: 'В этом CSL вы найдете информацию как готовить напитки из си...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Маффины - Cloned',
    description: 'В этом CSL вы найдете информацию по размораживанию и сер...',
    tags: [{ label: '#Продукт' }, { label: '#AZ' }, { label: '+14', isMore: true }],
  },
  // === ROW 23 ===
  {
    title: 'Сандерс бургер OR/HS (с сыром Чеддер) ...',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '#Грузия' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Мороженое Попкорн - Cloned',
    description: 'Мягкое мороженое',
    tags: [{ label: '#Продукт' }],
  },
  {
    title: 'Карри бургер OR/HS LTO - Cloned',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '+1', isMore: true }],
  },
  // === ROW 24 ===
  {
    title: 'Мороженое Попкорн',
    description: 'Мягкое мороженое',
    tags: [{ label: '#Продукт' }],
  },
  {
    title: 'Горячие напитки',
    description: 'В этом CSL вы найдете всю информацию по приготовлению г...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Карри бургер OR/HS LTO',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '+1', isMore: true }],
  },
  // === ROW 25 ===
  {
    title: 'Маффины',
    description: 'В этом CSL вы найдете информацию по размораживанию и сер...',
    tags: [{ label: '#Продукт' }, { label: '#AZ' }, { label: '+14', isMore: true }],
  },
  {
    title: 'Маффины',
    description: 'В этом CSL вы найдете информацию по размораживанию и сер...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+11', isMore: true }],
  },
  {
    title: 'Сандерс картофель по-деревенски',
    description: 'Картофель по-деревенски с соусом бургер',
    tags: [{ label: '#Продукт' }, { label: '#KG' }, { label: '+5', isMore: true }],
  },
  // === ROW 26 ===
  {
    title: 'Сандерс картофель фри',
    description: 'Картофель фри с соусом бургер',
    tags: [{ label: '#Продукт' }, { label: '#KG' }, { label: '+5', isMore: true }],
  },
  {
    title: 'Биг Сандерс бургер OR/ HS',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+18', isMore: true }],
  },
  {
    title: 'Бракераж',
    description: 'В этой статье ты найдешь всю информацию о том как прово...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  // === ROW 27 ===
  {
    title: 'Управление качеством масла',
    description: 'В этой статье вы найдете всю информацию по работе с фритюр...',
    tags: [{ label: '#Продукт' }, { label: '+25', isMore: true }],
  },
  {
    title: 'Мороженое Рожок',
    description: 'В этом CSL вы найдете информацию о подготовке вафельных р...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Филе острое Зингер',
    description: 'Филе Зингер Hot & Spicy KFC ® - это куриное филе, замаринова...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+21', isMore: true }],
  },
  // === ROW 28 ===
  {
    title: 'Филе оригинальное Классик',
    description: 'Филе Классик Original Recipe ® маринуется и панируется по с...',
    tags: [{ label: '+23 теги', isMore: true }],
  },
  {
    title: 'Стрипсы HS',
    description: 'Стрипсы Hot & Spicy KFC ® - это полоски из куриного филе, зам...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+21', isMore: true }],
  },
  {
    title: 'Острые крылышки',
    description: 'Острые крылышки KFC ® - это мясистые кусочки куриных кр...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+21', isMore: true }],
  },
  // === ROW 29 ===
  {
    title: 'Размораживание куриных полуфабрик...',
    description: 'В этой главе вы узнаете о том, как правильно разморозить з...',
    tags: [{ label: '+26 теги', isMore: true }],
  },
  {
    title: 'Шефбургер Джуниор острый',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '+26', isMore: true }],
  },
  {
    title: 'Шефбургер Джуниор оригинальный',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '+26', isMore: true }],
  },
  // === ROW 30 ===
  {
    title: 'Твистер из тостера OR / HS',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+23', isMore: true }],
  },
  {
    title: 'Айс Кофе LTO',
    description: 'Охлажденный кофе',
    tags: [{ label: '#Продукт' }, { label: '#KG' }, { label: '+17', isMore: true }],
  },
  {
    title: 'Шефбургер Новый',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '#AM' }, { label: '+20', isMore: true }],
  },
  // === ROW 31 (PAGE 3) ===
  {
    title: 'Напитки POST MIX',
    description: 'В этом CSL вы найдете информацию как готовить напитки из си...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+20', isMore: true }],
  },
  {
    title: 'Куриные ножки OR',
    description: 'Полковник Харланд Сандерс представил курицу Original Rec...',
    tags: [{ label: '+24 теги', isMore: true }],
  },
  {
    title: 'Общие правила сборки сандвичей',
    description: 'В этой статье вы найдете стандарты сборки сандвичей, а та...',
    tags: [{ label: '#Продукт' }, { label: '#GE' }, { label: '+21', isMore: true }],
  },
  // === ROW 32 ===
  {
    title: 'Чизбургер с луком',
    description: 'Сандвичи в булках',
    tags: [{ label: '#Продукт' }, { label: '#KZ' }, { label: '+13', isMore: true }],
  },
  {
    title: 'Таблица "Сроки и условия хранения в...',
    description: 'В этом CSL вы найдете таблицу со сроками и условиями хране...',
    tags: [{ label: '#GE' }, { label: '#Georgia' }, { label: '+19', isMore: true }],
  },
  {
    title: 'Донаты',
    description: 'Десерты - донаты с яблочной начинкой и ореховой начинкой, ...',
    tags: [{ label: '#Продукт' }, { label: '#KZ' }, { label: '+11', isMore: true }],
  },
  // === ROW 33 ===
  {
    title: 'Лонгер спешл',
    description: 'Сандвичи в булках',
    tags: [{ label: '#KG' }, { label: '#Kyrgyzstan' }, { label: '+8', isMore: true }],
  },
  {
    title: 'Чикен Пита новая LTO',
    description: 'Сандвичи в тортильях',
    tags: [{ label: '#Продукт' }, { label: '#UZ' }, { label: '+11', isMore: true }],
  },
]

const ARTICLES_PER_PAGE = 30

function ArticleCardComponent({ article }: { article: ArticleCard }) {
  const [fav, setFav] = useState(false)

  const sharedStyle: React.CSSProperties = {
    border: '1.5px solid #f2f1ef',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'box-shadow 0.18s ease, border-color 0.18s ease',
  }

  const inner = (
    <>
      {/* Top row: category tag + heart */}
      <div className="flex items-center justify-between gap-2 mb-[10px]">
        <span
          className="inline-block text-xs font-semibold whitespace-nowrap"
          style={{
            background: '#f4f4f4',
            border: '1.5px solid #dad6cf',
            borderRadius: '20px',
            padding: '3px 10px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#e4002b',
            lineHeight: '1',
          }}
        >
          Продукт
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setFav(!fav)
          }}
          className="flex-shrink-0 leading-none transition-transform duration-150 hover:scale-[1.15]"
          style={{ padding: '2px' }}
          aria-label="В избранное"
        >
          <Heart
            size={22}
            strokeWidth={1.8}
            className={fav ? 'text-[#e4002b] fill-[#e4002b]' : 'text-[#e4002b] fill-none'}
          />
        </button>
      </div>

      {/* Title */}
      <h3 className="text-[#212121] font-bold flex-1" style={{ fontSize: '18px', lineHeight: 1.3 }}>
        {article.title}
      </h3>

      {/* Description */}
      <p className="text-[#656565] line-clamp-3" style={{ fontSize: '13px', lineHeight: 1.55, marginTop: '8px' }}>
        {article.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-[6px] mt-[10px]">
        {article.tags.map((tag, idx) =>
          tag.isMore ? (
            <span key={idx} style={{ background: '#f4f4f4', border: '1.5px solid #dad6cf', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 700, color: '#656565', lineHeight: '1' }}>
              {tag.label}
            </span>
          ) : (
            <span key={idx} style={{ background: '#f4f4f4', border: '1.5px solid #dad6cf', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', fontWeight: 600, color: '#e4002b', lineHeight: '1' }}>
              {tag.label}
            </span>
          ),
        )}
      </div>
    </>
  )

  if (article.href) {
    return (
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col bg-white rounded-[12px] overflow-hidden no-underline"
        style={{ ...sharedStyle, cursor: 'pointer' }}
      >
        {inner}
      </a>
    )
  }

  return (
    <div
      className="group flex flex-col bg-white rounded-[12px] overflow-hidden"
      style={sharedStyle}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)'; e.currentTarget.style.borderColor = '#dad6cf' }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#f2f1ef' }}
    >
      {inner}
    </div>
  )
}

export default function ProduktPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const paginatedArticles = articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE)

  return (
    <div>
      <Topbar
        showBreadcrumb
        breadcrumbItems={[
          { label: 'Главная', href: '/' },
          { label: 'Стандарты', href: '/standards' },
          { label: 'Продукт' },
        ]}
      />
      <div className="px-4 pt-5 pb-12 sm:px-8 sm:pt-7">
        {/* Page title */}
        <h1
          className="text-[#212121] font-extrabold"
          style={{
            fontSize: '36px',
            letterSpacing: '-0.02em',
            marginBottom: '14px',
            lineHeight: 1.1,
          }}
        >
          Продукт
        </h1>

        {/* See other roles link */}
        <Link
          to="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#e4002b] hover:text-[#87041e] transition-colors duration-150"
          style={{ marginBottom: '24px' }}
        >
          <span
            className="inline-block flex-shrink-0 rounded-sm"
            style={{
              width: '3px',
              height: '16px',
              background: '#e4002b',
            }}
          />
          См. Другие роли
        </Link>

        {/* Section search */}
        <div style={{ marginBottom: '24px' }}>
          <label
            className="block text-[#212121] font-bold"
            style={{
              fontSize: '16px',
              marginBottom: '10px',
            }}
          >
            Поиск
          </label>
          <input
            type="text"
            placeholder="Поиск"
            className="block outline-none text-sm text-[#212121] placeholder:text-[#656565] transition-colors duration-150 focus:border-[#656565]"
            style={{
              width: '100%',
              maxWidth: '320px',
              border: '1.5px solid #dad6cf',
              borderRadius: '8px',
              padding: '10px 14px',
              fontSize: '14px',
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedArticles.map((article, index) => (
            <ArticleCardComponent key={`${article.title}-${index}`} article={article} />
          ))}
        </div>

        {/* Pagination */}
        <div
          className="flex items-center justify-center gap-1 mt-8"
          style={{ fontSize: '13px' }}
        >
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-2 py-1 text-[#e4002b] hover:text-[#87041e] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            style={{ fontSize: '13px' }}
          >
            &laquo; Первая
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 text-[#e4002b] hover:text-[#87041e] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            style={{ fontSize: '13px' }}
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="px-3 py-1 rounded transition-colors"
              style={{
                fontSize: '13px',
                fontWeight: currentPage === page ? 700 : 400,
                color: currentPage === page ? '#fff' : '#e4002b',
                background: currentPage === page ? '#e4002b' : 'transparent',
              }}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-2 py-1 text-[#e4002b] hover:text-[#87041e] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            style={{ fontSize: '13px' }}
          >
            &raquo;
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 text-[#e4002b] hover:text-[#87041e] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            style={{ fontSize: '13px' }}
          >
            Последняя &raquo;
          </button>
        </div>
      </div>
    </div>
  )
}
