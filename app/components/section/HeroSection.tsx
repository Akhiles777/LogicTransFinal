import React from "react";

export default function HeroSection(){
    return (
        <section
            className="relative h-screen max-h-[800px] flex items-center bg-cover bg-center"
            style={{backgroundImage: "url('/photo.opt.jpg')"}}
        >
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
            <div className="max-w-6xl mx-auto px-6 relative z-10 text-white text-center">
                {/* Уменьшенный шрифт для мобильных: text-4xl sm:text-5xl */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    Логистика сложных промышленных грузов из Европы — под ключ и <span className='text-blue-600'>без рисков</span>
                </h2>
                <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto">
                    Меняющиеся правила и задержки — обычная реальность, когда речь о поставках из ЕС. Наша команда с
                    2006 года берет эти риски на себя: сертификация, ВЭД, выкуп у производителя и гарантированная
                    сохранность оборудования.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center">

                    {/* Кнопка 1: Уменьшен текст (text-base) и вертикальный отступ (py-2.5) для моб. */}
                    <a
                        href="mailto:pavlov.anatoly@gmail.com"
                        className="inline-block bg-blue-600 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-full text-base sm:text-xl font-semibold shadow-2xl hover:bg-blue-700 transform transition active:scale-95 btn-shine tracking-wider"
                    >
                        Запросить расчёт стоимости
                    </a>

                    {/* Кнопка 2: Уменьшен текст (text-base) и вертикальный отступ (py-2.5) для моб. */}
                    <a
                        href="#contacts"
                        className="inline-block border-2 border-white text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-full text-base sm:text-xl font-semibold hover:bg-white/10 transition active:scale-95 tracking-wider"
                    >
                        Посмотреть наши кейсы
                    </a>
                </div>
            </div>
        </section>
    )
}