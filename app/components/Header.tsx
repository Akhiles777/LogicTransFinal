"use client";

import React, { useState } from "react";
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-6xl mx-auto px-6 py-8 relative bg-transparent">
      <div className="flex items-center justify-between relative z-20">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Express Logistics" width={48} height={48} className="rounded-xl" />
          <div>
            <h1 className="text-lg font-semibold">Express Logistics</h1>
            <p className="text-sm text-slate-600">Логистика сложных грузов из ЕС — ВЭД и сертификация без рисков</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-base text-slate-700">
          <a href="#why" className="link-underline hover:text-sky-600 transition-colors">Почему мы</a>
          <a href="#process" className="link-underline hover:text-sky-600 transition-colors">Этапы</a>
          <a href="#stats" className="link-underline hover:text-sky-600 transition-colors">Результаты</a>
          <a href="#contacts" className="link-underline hover:text-sky-600 transition-colors">Контакты</a>
        </nav>

        {/* Mobile Burger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-slate-700 focus:outline-none"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-slate-800 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block h-0.5 w-full bg-slate-800 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-slate-800 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden z-10 ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
        <nav className="flex flex-col px-6 gap-4 text-slate-700">
          <a href="#why" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2 border-b border-slate-50">Почему мы</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2 border-b border-slate-50">Этапы</a>
          <a href="#stats" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2 border-b border-slate-50">Результаты</a>
          <a href="#contacts" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2">Контакты</a>
        </nav>
      </div>
    </header>
  );
}