import React from "react";

export default function ContactSection() {
    return (
        <section id="contacts" className="max-w-6xl mx-auto px-6 py-12 sm:py-16 bg-white">
            <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-3xl sm:text-4xl font-bold">Связаться с нами</h3>
                <p className="mt-2 text-lg text-slate-600">Быстрый контакт — телефон, email или запрос прайса. Выберите
                    удобный способ.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

                {/* Центральный запрос */}
                <div
                    className="p-6 hover:-translate-y-5 sm:p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border border-blue-100 text-center  transition  hover:cursor-pointer">
                    <img
                        src="/moscow.jpeg"
                        alt="Центральный офис"
                        className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4 sm:mb-6 shadow-md"
                    />
                    <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6">
                        ☎
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl mb-3">Центральный запрос</h4>
                    <p className="text-xs sm:text-sm text-slate-700">Телефон и email для срочных и коммерческих
                        вопросов</p>
                    <div className="mt-4 sm:mt-5 flex flex-col gap-2 sm:gap-3">
                        <a className="text-blue-600 font-bold text-base sm:text-lg hover:underline"
                           href="tel:+79173555007">
                            +7 (917) 355-50-07
                        </a>
                        <a className="text-blue-600 font-bold text-base sm:text-lg hover:underline"
                           href="mailto:pavlov.anatoly@gmail.com">
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
                <div
                    className="p-6 hover:-translate-y-5 sm:p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border border-blue-100 text-center transition  hover:cursor-pointer">
                    <img
                        src="/sochi.jpg"
                        alt="Офис Сочи"
                        className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4 sm:mb-6 shadow-md"
                    />
                    <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6">
                        С
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl mb-3">Сочи — офис</h4>
                    <p className="text-xs sm:text-sm text-slate-700">ул. Голенева, 36</p>
                    <div className="mt-4 sm:mt-5">
                        <a className="text-blue-600 font-bold text-base sm:text-lg hover:underline"
                           href="tel:+79173887486">
                            +7 (917) 388-74-86
                        </a>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                        <a href="mailto:ozhiganova@express.ru"
                           className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
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
                <div
                    className="p-6 hover:-translate-y-5 sm:p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border border-blue-100 text-center  transition  hover:cursor-pointer">
                    <img
                        src="/Ufa.jpeg"
                        alt="Офис Уфа"
                        className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4 sm:mb-6 shadow-md"
                    />
                    <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6">
                        У
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl mb-3">Уфа — офис</h4>
                    <p className="text-xs sm:text-sm text-slate-700">ул. Цюрупы, 128</p>
                    <div className="mt-4 sm:mt-5">
                        <a className="text-blue-600 font-bold text-base sm:text-lg hover:underline"
                           href="tel:+79174305323">
                            +7 (917) 430-53-23
                        </a>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                        <a href="mailto:ufa@express.ru"
                           className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
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
    )
}