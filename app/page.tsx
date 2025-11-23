import React from "react";
import Image from 'next/image';
import Counter from "./components/Counter";
import Header from "./components/Header";

// Ваши метаданные остались без изменений
export const metadata = {
  title: 'Логистика сложных грузов из ЕС — Express Logistics',
  description: 'Полное ВЭД, сертификация и безопасные поставки промышленного оборудования из Европы. Выкуп у производителя, фиксированные сроки, онлайн-отслеживание 24/7.',
  keywords: ['логистика', 'ВЭД', 'сертификация', 'поставка из ЕС', 'промышленное оборудование', 'подшипники'],
  openGraph: {
    title: 'Логистика сложных грузов из ЕС — Express Logistics',
    description: 'Полное ВЭД, сертификация и безопасные поставки промышленного оборудования из Европы. Выкуп у производителя, фиксированные сроки, онлайн-отслеживание 24/7.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Express Logistics",
  "url": "https://example.com",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+7-917-355-50-07",
      "contactType": "customer service",
      "areaServed": "RU"
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Сочи",
      "streetAddress": "ул. Голенева, 36"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Уфа",
      "streetAddress": "ул. Цюрупы, 128"
    }
  ]
};

export default function Home() {
  return (
      <main className="min-h-screen bg-white font-sans text-slate-900">
        {/* Structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <Header />

        {/* 1. HERO SECTION (Главный экран) */}
        <section
            className="relative h-screen max-h-[800px] flex items-center bg-cover bg-center"
            style={{backgroundImage: "url('/photo.opt.jpg')"}}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-white text-center">
            {/* Уменьшенный шрифт для мобильных: text-4xl sm:text-5xl */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Логистика сложных промышленных грузов из Европы — под ключ и без рисков
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto">
              Меняющиеся правила и задержки — обычная реальность, когда речь о поставках из ЕС. Наша команда с 2006 года берет эти риски на себя: сертификация, ВЭД, выкуп у производителя и гарантированная сохранность оборудования.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 justify-center">
              <a
                  href="mailto:pavlov.anatoly@gmail.com"
                  className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold shadow-2xl hover:bg-blue-700 transform transition active:scale-95 btn-shine tracking-wider"
              >
                Запросить расчёт стоимости
              </a>
              <a
                  href="#contacts"
                  className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-white/10 transition active:scale-95 tracking-wider"
              >
                Посмотреть наши кейсы
              </a>
            </div>
          </div>
        </section>

        {/* 2. WHY US SECTION (#why) */}
        <section id="why" className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4">Почему выбирают Express Logistics</h3>
          <p className="text-center text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Мы делаем сложную логистику предсказуемой: от сертификации до бережной доставки оборудования.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* Уменьшенный padding для мобильных: p-6 sm:p-8 */}
            <div className="p-6 sm:p-8 border border-blue-100 rounded-2xl shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl sm:text-4xl font-bold mx-auto mb-4 sm:mb-6">
                ✓
              </div>
              <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Белая поставка без рисков</h4>
              <p className="text-slate-700 leading-relaxed text-base">
                Полное сертификационное сопровождение, оформление сертификатов происхождения и таможня «под ключ».
              </p>
            </div>

            <div className="p-6 sm:p-8 border border-blue-100 rounded-2xl shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl sm:text-4xl font-bold mx-auto mb-4 sm:mb-6">
                ⏱
              </div>
              <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Фиксированные сроки</h4>
              <p className="text-slate-700 leading-relaxed text-base">
                Сборные грузы от 14 дней. Приоритетные маршруты и онлайн-отслеживание 24/7.
              </p>
            </div>

            <div className="p-6 sm:p-8 border border-blue-100 rounded-2xl shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl sm:text-4xl font-bold mx-auto mb-4 sm:mb-6">
                🔒
              </div>
              <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Защита инвестиций</h4>
              <p className="text-slate-700 leading-relaxed text-base">
                Выкуп напрямую у производителей, сохранение заводской упаковки и специальные решения для чувствительного оборудования.
              </p>
            </div>
          </div>
        </section>

        {/* Разделитель */}
        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200" />
        </div>

        {/* 3. PROCESS SECTION (#process) */}
        <section id="process" className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold">Простой и предсказуемый процесс</h3>
            <p className="mt-3 text-lg text-slate-600">Ваша поставка из Европы в три прозрачных этапа</p>
          </div>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">

            {/* Connecting line (hidden on mobile) */}
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500" style={{ transform: 'translateY(-50%)' }} />

            {/* Step 1 */}
            <div className="relative text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md mx-auto mb-4 sm:mb-6">
                1
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">Расчёт</h4>
              <p className="text-slate-700 leading-relaxed text-base">
                За 24 часа: пришлите список позиций — мы даём детальный расчёт, включая ВЭД и сертификацию.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md mx-auto mb-4 sm:mb-6">
                2
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">Выкуп и подготовка</h4>
              <p className="text-slate-700 leading-relaxed text-base">
                Выкуп у производителя и подготовка всех документов за 3–5 дней. Мы заботимся о сохранении заводской упаковки.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md mx-auto mb-4 sm:mb-6">
                3
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">Доставка и поддержка</h4>
              <p className="text-slate-700 leading-relaxed text-base">
                Фиксированные сроки, таможня и онлайн-отслеживание до вашего склада.
              </p>
            </div>
          </div>
        </section>

        {/* Разделитель */}
        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200" />
        </div>

        {/* 4. STATISTICS & DETAILS SECTION (#stats) */}
        <section id="stats" className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">

            {/* Left Block: Text and List */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight">Мы не просто перевозчики — Ваши надёжные партнёры</h3>
              <p className="mt-4 text-lg text-slate-700">
                С 2006 года — фокус на сложной логистике для промышленности: подшипники, чувствительное оборудование, крупногабаритные и комплектующие позиции.
              </p>
              <ul className="mt-6 sm:mt-8 grid gap-3 sm:gap-4">
                <li className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg sm:text-xl shrink-0">✓</div>
                  <div>
                    <div className="font-bold text-base sm:text-lg">Опыт 18+ лет</div>
                    <div className="text-xs sm:text-sm text-slate-700">Знаем все тонкости ВЭД, сертификации и международных правил поставки промышленных грузов.</div>
                  </div>
                </li>
                <li className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg sm:text-xl shrink-0">✓</div>
                  <div>
                    <div className="font-bold text-base sm:text-lg">Персональный менеджер 24/7</div>
                    <div className="text-xs sm:text-sm text-slate-700">Всегда на связи для решения любых экстренных вопросов и оперативного информирования о статусе груза.</div>
                  </div>
                </li>
                <li className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg sm:text-xl shrink-0">✓</div>
                  <div>
                    <div className="font-bold text-base sm:text-lg">Работа по договору с гарантиями</div>
                    <div className="text-xs sm:text-sm text-slate-700">Юридические гарантии сроков, сохранности груза и финансовой ответственности на каждом этапе.</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Block: Counters with image */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-xl">
              <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-white h-56 sm:h-64">
                <Image src="/photo-3.opt.jpg" alt="Express Logistics - Грузовая логистика" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-900">Наши достижения в цифрах</h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-slate-100 stat-hover card">
                  <Counter target={97} suffix="%" className="text-3xl sm:text-4xl font-bold text-blue-600" />
                  <div className="text-xs sm:text-sm text-slate-700">грузов проходят таможню без задержек</div>
                </div>
                <div className="p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-slate-100 stat-hover card">
                  <Counter target={420} suffix="+" className="text-3xl sm:text-4xl font-bold text-blue-600" />
                  <div className="text-xs sm:text-sm text-slate-700">успешных поставок подшипников и оборудования</div>
                </div>
                <div className="p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-slate-100 stat-hover card">
                  <Counter target={47} className="text-3xl sm:text-4xl font-bold text-blue-600" />
                  <div className="text-xs sm:text-sm text-slate-700">промышленных предприятий доверили нам поставки</div>
                </div>
                <div className="p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-slate-100 stat-hover card">
                  <Counter target={24} suffix="h" className="text-3xl sm:text-4xl font-bold text-blue-600" />
                  <div className="text-xs sm:text-sm text-slate-700">онлайн-отслеживание 24/7</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. WORK IN ACTION & TESTIMONIALS */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4">Примеры нашей работы</h3>
            <p className="text-center text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Реальные проекты, настоящие результаты и партнёрские отношения с нашими клиентами
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">

              {/* Photo 1 with text overlay */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64 sm:h-80">
                <Image src="/photo-2.opt.jpg" alt="Логистика - Погрузка оборудования" fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-4 sm:p-6">
                  <p className="text-white font-semibold text-lg sm:text-xl">Профессиональная погрузка и крепление грузов</p>
                </div>
              </div>

              {/* Photo 2 with text overlay */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64 sm:h-80">
                <Image src="/photo.opt.jpg" alt="Логистика - Таможенное оформление" fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-4 sm:p-6">
                  <p className="text-white font-semibold text-lg sm:text-xl">Полное таможенное оформление и сертификация из EC</p>
                </div>
              </div>
            </div>

            {/* Testimonial/Case */}
            <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="md:flex md:items-center md:gap-8">
                <div className="shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-blue-600 flex items-center justify-center text-2xl sm:text-3xl font-bold">"</div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-xl sm:text-2xl font-bold">Кейс: подшипники для крупного завода — решено без простоев</div>
                  <p className="mt-3 text-blue-100 leading-relaxed text-base">
                    «Благодаря своевременной сертификации и слаженной работе команды Express Logistics, мы закрыли проект в срок и избежали потерь на простои...»
                  </p>
                  <div className="mt-4 text-xs sm:text-sm text-blue-200">— Технический директор, промышленное предприятие</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONTACTS SECTION (#contacts) */}
        <section id="contacts" className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold">Связаться с нами</h3>
            <p className="mt-2 text-lg text-slate-600">Быстрый контакт — телефон, email или запрос прайса. Выберите удобный способ.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* Центральный запрос */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border border-blue-100 text-center hover:shadow-2xl transition hover:scale-102 hover:cursor-pointer">
              <img
                  src="/moscow.jpeg"
                  alt="Центральный офис"
                  className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4 sm:mb-6 shadow-md"
              />
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6">
                ☎
              </div>
              <h4 className="font-bold text-lg sm:text-xl mb-3">Центральный запрос</h4>
              <p className="text-xs sm:text-sm text-slate-700">Телефон и email для срочных и коммерческих вопросов</p>
              <div className="mt-4 sm:mt-5 flex flex-col gap-2 sm:gap-3">
                <a className="text-blue-600 font-bold text-base sm:text-lg hover:underline" href="tel:+79173555007">
                  +7 (917) 355-50-07
                </a>
                <a className="text-blue-600 font-bold text-base sm:text-lg hover:underline" href="mailto:pavlov.anatoly@gmail.com">
                  pavlov.anatoly@gmail.com
                </a>
              </div>
              <div className="mt-6 sm:mt-8">
                <a
                    href="mailto:pavlov.anatoly@gmail.com?subject=Запрос%20с%20сайта"
                    className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  Написать нам
                </a>
              </div>
            </div>

            {/* Сочи */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border border-blue-100 text-center hover:shadow-2xl transition hover:scale-102 hover:cursor-pointer">
              <img
                  src="/sochi.jpg"
                  alt="Офис Сочи"
                  className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4 sm:mb-6 shadow-md"
              />
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6">
                С
              </div>
              <h4 className="font-bold text-lg sm:text-xl mb-3">Сочи — офис</h4>
              <p className="text-xs sm:text-sm text-slate-700">ул. Голенева, 36</p>
              <div className="mt-4 sm:mt-5">
                <a className="text-blue-600 font-bold text-base sm:text-lg hover:underline" href="tel:+79173887486">
                  +7 (917) 388-74-86
                </a>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                <a href="mailto:ozhiganova@express.ru" className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                  Написать
                </a>
                <a
                    href="https://yandex.ru/maps/?text=%D1%83%D0%BB.%20%D0%93%D0%BE%D0%BB%D0%B5%D0%BD%D0%B5%D0%B2%D0%B0%2036%20%D0%A1%D0%BE%D1%87%D0%B8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-blue-300 text-blue-700 px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-50 transition"
                >
                  На карте
                </a>
              </div>
            </div>

            {/* Уфа */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border border-blue-100 text-center hover:shadow-2xl transition hover:scale-102 hover:cursor-pointer">
              <img
                  src="/Ufa.jpeg"
                  alt="Офис Уфа"
                  className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4 sm:mb-6 shadow-md"
              />
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6">
                У
              </div>
              <h4 className="font-bold text-lg sm:text-xl mb-3">Уфа — офис</h4>
              <p className="text-xs sm:text-sm text-slate-700">ул. Цюрупы, 128</p>
              <div className="mt-4 sm:mt-5">
                <a className="text-blue-600 font-bold text-base sm:text-lg hover:underline" href="tel:+79174305323">
                  +7 (917) 430-53-23
                </a>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                <a href="mailto:ufa@express.ru" className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                  Написать
                </a>
                <a
                    href="https://yandex.ru/maps/?text=%D1%83%D0%BB.%20%D0%A6%D1%8E%D1%80%D1%83%D0%BF%D1%8B%2C%20128%20%D0%A3%D1%84%D0%B0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-blue-300 text-blue-700 px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-50 transition"
                >
                  На карте
                </a>
              </div>
            </div>

          </div>
        </section>

        <footer className="border-t border-slate-100 py-6 sm:py-8 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-xs sm:text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
            <div>© {new Date().getFullYear()} Express Logistics — ВЭД, сертификация и сложная логистика.</div>
            <div>Контакты: <a className="text-blue-600 hover:underline" href="tel:+79173555007">+7 (917) 355-50-07</a> • <a className="text-blue-600 hover:underline" href="mailto:pavlov.anatoly@gmail.com">pavlov.anatoly@gmail.com</a></div>
          </div>
        </footer>
      </main>
  );
}