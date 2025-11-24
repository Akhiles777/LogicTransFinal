import React from "react";
import Image from "next/image";

export default function WhyUs() {
    return (

        <section id="why" className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white">
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4">Почему выбирают Express Logistics</h3>
            <p className="text-center text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Мы делаем сложную логистику предсказуемой: от сертификации до бережной доставки оборудования.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

                {/* Уменьшенный padding для мобильных: p-6 sm:p-8 */}
                <div className="p-6 sm:p-8 border border-blue-100 rounded-2xl shadow-lg  bg-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full  text-blue-600 flex items-center justify-center text-3xl sm:text-4xl font-bold mx-auto mb-4 sm:mb-6">
                        <img src={'/icon3.png'} alt={'ff'} className="object-cover rounded-4xl"/>

                    </div>
                    <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Белая поставка без рисков</h4>
                    <p className="text-slate-700 leading-relaxed text-base">
                        Полное сертификационное сопровождение, оформление сертификатов происхождения и таможня «под ключ».
                    </p>
                </div>

                <div className="p-6 sm:p-8 border border-blue-100 rounded-2xl shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full  text-blue-600 flex items-center justify-center text-3xl sm:text-4xl font-bold mx-auto mb-4 sm:mb-6">
                        <img src={'/icon2.png'} alt={'ff'} className="object-cover rounded-4xl"/>

                    </div>
                    <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Фиксированные сроки</h4>
                    <p className="text-slate-700 leading-relaxed text-base">
                        Сборные грузы от 14 дней. Приоритетные маршруты и онлайн-отслеживание 24/7.
                    </p>
                </div>

                <div className="p-6 sm:p-8 border border-blue-100 rounded-2xl shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl sm:text-4xl font-bold mx-auto mb-4 sm:mb-6">
                       <img src={'/icon.png'} alt={'ff'}  className="object-cover rounded-4xl" />
                    </div>
                    <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Защита инвестиций</h4>
                    <p className="text-slate-700 leading-relaxed text-base">
                        Выкуп напрямую у производителей, сохранение заводской упаковки и специальные решения для чувствительного оборудования.
                    </p>
                </div>
            </div>
        </section>

    )
}