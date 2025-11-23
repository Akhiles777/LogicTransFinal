import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-100 py-6 sm:py-8 bg-white">
            <div
                className="max-w-6xl mx-auto px-6 text-xs sm:text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
                <div>© {new Date().getFullYear()} Express Logistics — ВЭД, сертификация и сложная логистика.</div>
                <div>Контакты: <a className="text-blue-600 hover:underline" href="tel:+79173555007">+7 (917)
                    355-50-07</a> • <a className="text-blue-600 hover:underline"
                                       href="mailto:pavlov.anatoly@gmail.com">pavlov.anatoly@gmail.com</a></div>
            </div>
        </footer>
    )
}