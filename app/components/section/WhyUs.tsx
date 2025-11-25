import React from "react";
import Image from "next/image";

export default function WhyUs() {
    return (
        <section id="why" className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white">

            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4">Почему выбирают Express Logistics</h3>
            <p className="text-center text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Мы делаем сложную логистику предсказуемой: от сертификации до бережной доставки оборудования.
            </p>

            <div className="grid gap-y-16">

                {/* --------------------- 1 БЛОК --------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Изображение */}
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
                        <Image
                            src="/WhyUs.png"
                            alt="Автомобильная перевозка груза"
                            fill
                            priority   // <-- ускоряет загрузку первого изображения
                            placeholder="blur"
                            blurDataURL="/blur/WhyUs-blur.png"
                            className="object-cover transition-transform duration-500 group-hover:scale-102"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Текст */}
                    <div className="flex flex-col justify-center p-4 md:p-0">
                        <h4 className="font-bold text-xl sm:text-2xl mb-3 text-slate-900 uppercase tracking-wider">
                            Автомобильные перевозки
                        </h4>
                        <p className="text-slate-700 leading-relaxed text-base mb-6">
                            Полное сертификационное сопровождение, оформление сертификатов происхождения и таможня «под ключ». Мы берем эти риски на себя.
                        </p>
                        <a
                            href="#contacts"
                            className="bg-blue-600 inline-block border border-slate-300 text-white px-4 py-2 rounded-full text-sm font-semibold transition self-start"
                        >
                            Узнать больше
                        </a>
                    </div>
                </div>

                {/* --------------------- 2 БЛОК --------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Изображение */}
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group md:order-2">
                        <Image
                            src="/WhyUs-2.png"
                            alt="Загрузка контейнеров в порту"
                            fill
                            placeholder="blur"
                            blurDataURL="/blur/WhyUs-2-blur.png"
                            className="object-cover transition-transform duration-500 group-hover:scale-102"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Текст */}
                    <div className="flex flex-col justify-center p-4 md:p-0">
                        <h4 className="font-bold text-xl sm:text-2xl mb-3 text-slate-900 uppercase tracking-wider">
                            Морские и воздушные перевозки
                        </h4>
                        <p className="text-slate-700 leading-relaxed text-base mb-6">
                            Сборные грузы от 14 дней. Приоритетные маршруты и онлайн-отслеживание 24/7. Гарантия сроков по договору.
                        </p>
                        <a
                            href="#contacts"
                            className="bg-blue-600 inline-block border border-slate-300  px-4 py-2 rounded-full text-sm font-semibold text-white transition self-start"
                        >
                            Посмотреть тарифы
                        </a>
                    </div>
                </div>

                {/* --------------------- 3 БЛОК --------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Изображение */}
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
                        <Image
                            src="/WhyUs-3.png"
                            alt="Складское хранение сложного оборудования"
                            fill
                            placeholder="blur"
                            blurDataURL="/blur/WhyUs-3-blur.png"
                            className="object-cover transition-transform duration-500 group-hover:scale-102"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Текст */}
                    <div className="flex flex-col justify-center p-4 md:p-0">
                        <h4 className="font-bold text-xl sm:text-2xl mb-3 text-slate-900 uppercase tracking-wider">
                            Комплексные ВЭД-услуги
                        </h4>
                        <p className="text-slate-700 leading-relaxed text-base mb-6">
                            Выкуп напрямую у производителей, сохранение заводской упаковки и специальные решения для чувствительного оборудования.
                        </p>
                        <a
                            href="#contacts"
                            className="bg-blue-600 text-white inline-block border border-slate-300  px-4 py-2 rounded-full text-sm font-semibold transition self-start"
                        >
                            Получить консультацию
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
