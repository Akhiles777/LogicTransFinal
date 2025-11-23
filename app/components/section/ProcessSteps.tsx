import React from "react";

export default function ProcessSteps(){
    return (
        <section id="process" className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white">
            <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-3xl sm:text-4xl font-bold">Простой и предсказуемый процесс</h3>
                <p className="mt-3 text-lg text-slate-600">Ваша поставка из Европы в три прозрачных этапа</p>
            </div>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">

                {/* Connecting line (hidden on mobile) */}
                <div
                    className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500"
                    style={{transform: 'translateY(-50%)'}}/>

                {/* Step 1 */}
                <div
                    className="relative text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md mx-auto mb-4 sm:mb-6">
                        1
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-3">Расчёт</h4>
                    <p className="text-slate-700 leading-relaxed text-base">
                        За 24 часа: пришлите список позиций — мы даём детальный расчёт, включая ВЭД и сертификацию.
                    </p>
                </div>

                {/* Step 2 */}
                <div
                    className="relative text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md mx-auto mb-4 sm:mb-6">
                        2
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-3">Выкуп и подготовка</h4>
                    <p className="text-slate-700 leading-relaxed text-base">
                        Выкуп у производителя и подготовка всех документов за 3–5 дней. Мы заботимся о сохранении
                        заводской упаковки.
                    </p>
                </div>

                {/* Step 3 */}
                <div
                    className="relative text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md mx-auto mb-4 sm:mb-6">
                        3
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-3">Доставка и поддержка</h4>
                    <p className="text-slate-700 leading-relaxed text-base">
                        Фиксированные сроки, таможня и онлайн-отслеживание до вашего склада.
                    </p>
                </div>
            </div>
        </section>

    )
}