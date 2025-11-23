import React from "react";
import Image from 'next/image';
import Counter from "./components/Counter";

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
    <main className="min-h-screen bg-linear-to-b from-zinc-50 to-white font-sans text-slate-900">
      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Express Logistics" width={48} height={48} className="rounded-xl" />
          <div>
            <h1 className="text-lg font-semibold">Express Logistics</h1>
            <p className="text-sm text-slate-600">Логистика сложных грузов из ЕС — ВЭД и сертификация без рисков</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-700">
          <a href="#why" className="link-underline">Почему мы</a>
          <a href="#process" className="link-underline">Этапы</a>
          <a href="#stats" className="link-underline">Результаты</a>
          <a href="#contacts" className="link-underline">Контакты</a>
        </nav>
      </header>

      <section className="bg-white shadow-sm" id="stats">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Логистика сложных промышленных грузов из Европы — под ключ и без рисков</h2>
            <p className="mt-6 text-lg text-slate-700">Меняющиеся правила и задержки — обычная реальность, когда речь о поставках из ЕС. Наша команда с 2006 года берет эти риски на себя: сертификация, ВЭД, выкуп у производителя и гарантированная сохранность оборудования.</p>
            <ul className="mt-8 grid gap-3">
              <li className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold">✓</div>
                <div>
                  <div className="font-medium">Полное сертификационное сопровождение</div>
                  <div className="text-sm text-slate-600">Оформляем все документы, сертификаты происхождения — вы получаете «белый» груз без рисков.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">⏱</div>
                <div>
                  <div className="font-medium">Фиксированные сроки доставки</div>
                  <div className="text-sm text-slate-600">Сборные грузы — от 14 дней, онлайн-отслеживание 24/7. Вы всегда знаете, где ваш груз.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">🔒</div>
                <div>
                  <div className="font-medium">Защита инвестиций</div>
                  <div className="text-sm text-slate-600">Выкуп у производителей, сохранение заводской упаковки и специальные решения для чувствительного оборудования.</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:pavlov.anatoly@gmail.com" className="inline-block bg-sky-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-sky-700 transform transition active:scale-95 btn-shine">Запросить КП</a>
              <a href="tel:+79173555007" className="inline-block border border-slate-200 px-6 py-3 rounded-md text-slate-700 hover:bg-slate-50 transform transition active:scale-95 btn-shine">Позвонить: +7 (917) 355-50-07</a>
            </div>
          </div>

          <div className="relative p-6 rounded-xl bg-linear-to-br from-slate-50 to-white border border-slate-100">
            <div className="absolute -left-10 -top-10 w-36 h-36 bg-linear-to-br from-cyan-200 to-sky-400 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-linear-to-br from-amber-200 to-orange-300 opacity-30 rounded-full blur-3xl"></div>
            <div className="relative z-10">

              <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-slate-100 hover:shadow-2xl transition-shadow h-64">
          <Image src="/photo.opt.jpg" alt="Express Logistics - Грузовая логистика" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>

              <h3 className="text-xl font-semibold">Мы не просто перевозчики — Ваши партнёры</h3>
              <p className="mt-4 text-slate-600">С 2006 года — фокус на сложной логистике для промышленности: подшипники, чувствительное оборудование, крупногабаритные и комплектующие позиции.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm stat-hover card">
                  <Counter target={97} suffix="%" className="text-3xl font-bold text-sky-600" />
                  <div className="text-sm text-slate-600">грузов проходят таможню без задержек</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm stat-hover card">
                  <Counter target={420} suffix="+" className="text-3xl font-bold text-emerald-600" />
                  <div className="text-sm text-slate-600">успешных поставок таких позиций, как подшипники</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm stat-hover card">
                  <Counter target={47} className="text-3xl font-bold text-orange-500" />
                  <div className="text-sm text-slate-600">промышленных предприятий доверили нам поставки</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm stat-hover card">
                  <Counter target={24} suffix="h" className="text-3xl font-bold text-violet-600" />
                  <div className="text-sm text-slate-600">онлайн-отслеживание 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">Как мы работаем</h3>
          <p className="mt-3 text-lg text-slate-600">Простой и предсказуемый процесс в три этапа</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (hidden on mobile) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-linear-to-r from-sky-600 via-emerald-600 to-orange-500" style={{ transform: 'translateY(-50%)' }} />
          
          {/* Step 1 */}
          <div className="relative" style={{ animationDelay: '80ms' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-sky-600 to-sky-400 text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-6 stat-hover pulse-energy wave-number">
                1
              </div>
              <h4 className="text-xl font-semibold mb-3">Расчёт</h4>
              <p className="text-slate-600 leading-relaxed">За 24 часа: пришлите список позиций — мы даём расчёт и план доставки.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative" style={{ animationDelay: '140ms' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-600 to-emerald-400 text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-6 stat-hover pulse-energy wave-number">
                2
              </div>
              <h4 className="text-xl font-semibold mb-3">Выкуп и подготовка</h4>
              <p className="text-slate-600 leading-relaxed">Выкуп и подготовка документов за 3–5 дней. Мы заботимся о сертификации и сохранности упаковки.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-orange-500 to-orange-400 text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-6 stat-hover pulse-energy wave-number">
                3
              </div>
              <h4 className="text-xl font-semibold mb-3">Доставка и поддержка</h4>
              <p className="text-slate-600 leading-relaxed">Фиксированные сроки, онлайн-отслеживание и приоритетное решение экстренных вопросов.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-linear-to-tr from-white to-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">Почему выбирают нас</h3>
          <p className="mt-2 text-slate-600">Мы делаем сложную логистику предсказуемой: от сертификации до бережной доставки оборудования.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-lg card fade-up" style={{ animationDelay: '80ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center icon-bounce">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Белая поставка без рисков</h4>
                  <p className="mt-2 text-slate-600">Полное сертификационное сопровождение, оформление сертификатов происхождения и таможня «под ключ».</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg card fade-up" style={{ animationDelay: '140ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center icon-bounce">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Фиксированные сроки</h4>
                  <p className="mt-2 text-slate-600">Сборные грузы от 14 дней, приоритетные маршруты и онлайн-отслеживание 24/7.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center icon-bounce">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8l-9-5-9 5v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.27 6.96l8.73 5.01 8.73-5.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Защита инвестиций</h4>
                  <p className="mt-2 text-slate-600">Выкуп напрямую у производителей, сохранение заводской упаковки и специальные решения для чувствительного оборудования.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-4">Наша работа в действии</h3>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Реальные проекты, настоящие результаты и партнёрские отношения с нашими клиентами</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Photo 1 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
            <Image src="/photo-2.opt.jpg" alt="Логистика - Погрузка оборудования" fill className="object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-100 flex items-end p-6">
              <p className="text-white font-semibold">Профессиональная погрузка и крепление грузов</p>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
            <Image src="/photo-3.opt.jpg" alt="Логистика - Таможенное оформление" fill className="object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-100 flex items-end p-6">
              <p className="text-white font-semibold">Полное таможенное оформление и сертификация из EC</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-linear-to-r from-sky-50 to-cyan-50 rounded-2xl p-8 border border-sky-100">
          <h4 className="text-2xl font-bold text-center mb-6">Почему клиенты возвращаются к нам</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">18+</div>
              <p className="text-slate-700">лет опыта в международной логистике</p>
            </div>
            <div className="text-center border-l border-r border-slate-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <p className="text-slate-700">успешно доставленных грузов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">99%</div>
              <p className="text-slate-700">клиентов рекомендуют нас друзьям</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-linear-to-r from-slate-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="md:flex md:items-center md:gap-8">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold">AP</div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-lg font-semibold">Кейс: подшипники для крупного завода — решено без простоев</div>
              <p className="mt-3 text-slate-600">«Благодаря своевременной сертификации и слаженной работе команды, мы закрыли проект в срок и избежали потерь на простои — экономия составила сотни тысяч рублей.»</p>
              <div className="mt-4 text-sm text-slate-500">— Технический директор, промышленное предприятие</div>
            </div>
          </div>
        </div>
      </section>

   <section id="contacts" className="max-w-6xl mx-auto px-6 py-16">
  <div className="text-center mb-8">
    <h3 className="text-2xl font-bold">Связаться с нами</h3>
    <p className="mt-2 text-slate-600">Быстрый контакт — телефон, email или запрос прайса. Выберите удобный способ.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Центральный запрос */}
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition hover:scale-102 hover:cursor-pointer">
      <img
        src="/moscow.jpeg"
        alt="Центральный офис"
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
          ☎
        </div>
        <div>
          <h4 className="font-semibold">Центральный запрос</h4>
          <p className="text-sm text-slate-600 mt-1">
            Телефон и email для срочных и коммерческих вопросов
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <a className="text-sky-600 font-medium" href="tel:+79173555007">
              +7 (917) 355-50-07
            </a>
            <a className="text-sky-600 font-medium" href="mailto:pavlov.anatoly@gmail.com">
              pavlov.anatoly@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <a
          href="mailto:pavlov.anatoly@gmail.com?subject=Запрос%20с%20сайта"
          className="inline-block bg-sky-600 text-white px-4 py-2 rounded-md"
        >
          Написать
        </a>
      </div>
    </div>

    {/* Сочи */}
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition hover:scale-102 hover:cursor-pointer">
      <img
        src="/sochi.jpg"
        alt="Офис Сочи"
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
          С
        </div>
        <div>
          <h4 className="font-semibold">Сочи — офис</h4>
          <p className="text-sm text-slate-600 mt-1">ул. Голенева, 36</p>
          <div className="mt-3">
            <a className="text-sky-600 font-medium" href="tel:+79173887486">
              +7 (917) 388-74-86
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <a href="mailto:ozhiganova@express.ru" className="inline-block bg-emerald-600 text-white px-3 py-2 rounded-md">
          Написать
        </a>
        <a
          href="https://yandex.ru/maps/?text=%D1%83%D0%BB.%20%D0%93%D0%BE%D0%BB%D0%B5%D0%BD%D0%B5%D0%B2%D0%B0%2036%20%D0%A1%D0%BE%D1%87%D0%B8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-slate-200 px-3 py-2 rounded-md text-slate-700"
        >
          Показать на карте
        </a>
      </div>
    </div>

    {/* Уфа */}
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition hover:scale-102 hover:cursor-pointer">
      <img
        src="/Ufa.jpeg"
        alt="Офис Уфа"
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center font-bold">
          У
        </div>
        <div>
          <h4 className="font-semibold">Уфа — офис</h4>
          <p className="text-sm text-slate-600 mt-1">ул. Цюрупы, 128</p>
          <div className="mt-3">
            <a className="text-sky-600 font-medium" href="tel:+79174305323">
              +7 (917) 430-53-23
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <a href="mailto:ufa@express.ru" className="inline-block bg-orange-500 text-white px-3 py-2 rounded-md">
          Написать
        </a>
        <a
          href="https://yandex.ru/maps/?text=%D1%83%D0%BB.%20%D0%A6%D1%8E%D1%80%D1%83%D0%BF%D1%8B%2C%20128%20%D0%A3%D1%84%D0%B0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-slate-200 px-3 py-2 rounded-md text-slate-700"
        >
          Показать на карте
        </a>
      </div>
    </div>

  </div>
</section>



      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Express Logistics — ВЭД, сертификация и сложная логистика.</div>
          <div>Контакты: <a className="text-sky-600" href="tel:+79173555007">+7 (917) 355-50-07</a> • <a className="text-sky-600" href="mailto:pavlov.anatoly@gmail.com">pavlov.anatoly@gmail.com</a></div>
        </div>
      </footer>
    </main>
  );
}