import Image from "next/image";
import Counter from "@/app/components/Counter";
import React from "react";

export default function StatsDetails(){
    return (
        <section id="stats" className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">

                {/* Left Block: Text and List */}
                <div>
                    <h3 className="text-3xl sm:text-4xl font-bold leading-tight">Мы не просто перевозчики — Ваши
                        надёжные партнёры</h3>
                    <p className="mt-4 text-lg text-slate-700">
                        С 2006 года — фокус на сложной логистике для промышленности: подшипники, чувствительное
                        оборудование, крупногабаритные и комплектующие позиции.
                    </p>
                    <ul className="mt-6 sm:mt-8 grid gap-3 sm:gap-4">
                        <li className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg sm:text-xl shrink-0">✓
                            </div>
                            <div>
                                <div className="font-bold text-base sm:text-lg">Опыт 18+ лет</div>
                                <div className="text-xs sm:text-sm text-slate-700">Знаем все тонкости ВЭД, сертификации
                                    и международных правил поставки промышленных грузов.
                                </div>
                            </div>
                        </li>
                        <li className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg sm:text-xl shrink-0">✓
                            </div>
                            <div>
                                <div className="font-bold text-base sm:text-lg">Персональный менеджер 24/7</div>
                                <div className="text-xs sm:text-sm text-slate-700">Всегда на связи для решения любых
                                    экстренных вопросов и оперативного информирования о статусе груза.
                                </div>
                            </div>
                        </li>
                        <li className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg sm:text-xl shrink-0">✓
                            </div>
                            <div>
                                <div className="font-bold text-base sm:text-lg">Работа по договору с гарантиями</div>
                                <div className="text-xs sm:text-sm text-slate-700">Юридические гарантии сроков,
                                    сохранности груза и финансовой ответственности на каждом этапе.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right Block: Counters with image */}
                <div
                    className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-xl">
                    <div
                        className="relative mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-white h-56 sm:h-64">
                        <Image src="/photo-5.png" alt="Express Logistics - Грузовая логистика" fill
                               className="object-cover" priority/>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-900">Наши достижения в
                        цифрах</h4>
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        <div
                            className="p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-slate-100 stat-hover card">
                            <Counter target={97} suffix="%" className="text-3xl sm:text-4xl font-bold text-blue-600"/>
                            <div className="text-xs sm:text-sm text-slate-700">грузов проходят таможню без задержек
                            </div>
                        </div>
                        <div
                            className="p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-slate-100 stat-hover card">
                            <Counter target={420} suffix="+" className="text-3xl sm:text-4xl font-bold text-blue-600"/>
                            <div className="text-xs sm:text-sm text-slate-700">успешных поставок подшипников и
                                оборудования
                            </div>
                        </div>
                        <div
                            className="p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-slate-100 stat-hover card">
                            <Counter target={47} className="text-3xl sm:text-4xl font-bold text-blue-600"/>
                            <div className="text-xs sm:text-sm text-slate-700">промышленных предприятий доверили нам
                                поставки
                            </div>
                        </div>
                        <div
                            className="p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-slate-100 stat-hover card">
                            <Counter target={24} suffix="h" className="text-3xl sm:text-4xl font-bold text-blue-600"/>
                            <div className="text-xs sm:text-sm text-slate-700">онлайн-отслеживание 24/7</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}