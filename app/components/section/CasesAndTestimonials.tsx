import Image from "next/image";
import React from "react";

export default function CasesAndTestimonials(){
    return (
        <section id="cases" className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4">Примеры нашей работы</h3>
                <p className="text-center text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
                    Реальные проекты, настоящие результаты и партнёрские отношения с нашими клиентами
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">

                    {/* Photo 1 with text overlay */}
                    <div
                        className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64 sm:h-80">
                        <Image src="/photo6.jpeg" alt="Логистика - Погрузка оборудования" fill
                               className="object-cover transition-transform duration-500"
                               loading="lazy"/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-4 sm:p-6">
                            <p className="text-white font-semibold text-lg sm:text-xl">Профессиональная погрузка и
                                крепление грузов</p>
                        </div>
                    </div>

                    {/* Photo 2 with text overlay */}
                    <div
                        className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64 sm:h-80">
                        <Image src="/photo-7.jpeg" alt="Логистика - Таможенное оформление" fill
                               className="object-cover  transition-transform duration-500"
                               loading="lazy"/>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-4 sm:p-6">
                            <p className="text-white font-semibold text-lg sm:text-xl">Полное таможенное оформление и
                                сертификация из EC</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial/Case */}
                <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
                    <div className="md:flex md:items-center md:gap-8">
                        <div className="shrink-0">
                            <div
                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-blue-600 flex items-center justify-center text-2xl sm:text-3xl font-bold">
                                <img src={'/photo-8.jpeg'} alt={''}  className='rounded-xl object-cover'/>

                            </div>

                        </div>
                        <div className="mt-4 md:mt-0">
                            <div className="text-xl sm:text-2xl font-bold">Кейс: подшипники для крупного завода — решено
                                без простоев
                            </div>
                            <p className="mt-3 text-blue-100 leading-relaxed text-base">
                                «Благодаря своевременной сертификации и слаженной работе команды Express Logistics, мы
                                закрыли проект в срок и избежали потерь на простои...»
                            </p>
                            <div className="mt-4 text-xs sm:text-sm text-blue-200">— Технический директор, промышленное
                                предприятие
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}