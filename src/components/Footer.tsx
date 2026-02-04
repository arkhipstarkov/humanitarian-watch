"use client";

import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Youtube, Send, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Декоративный логотип на фоне для стиля */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none">
        <Shield size={600} />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Блок 1: О фонде */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center italic font-black text-xl shadow-lg shadow-blue-500/20">
                ГД
              </div>
              <span className="text-2xl font-[950] tracking-tighter uppercase italic">
                Гуманитарный <span className="text-blue-500 underline decoration-2 underline-offset-4">Дозор</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mb-10">
              Прозрачность, оперативность и адресная помощь ветеранам. Мы создаем систему, где важен каждый голос.
            </p>
            <div className="flex gap-4">
              {/* ПРАВКА: Ссылка на Telegram */}
              <a 
                href="https://t.me/+FXAPtHfchaUwNDky" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-500 group"
              >
                <Send size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              
              <Link href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-500">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-500">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Блок 2: Навигация */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Навигация</h4>
            <ul className="space-y-4">
              {['Главная', 'Журнал новостей', 'Миссии и сборы', 'Документы', 'Контакты'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-300 hover:text-white font-bold transition-colors uppercase text-sm tracking-tight italic">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Блок 3: Контакты */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Связь с Дозором</h4>
            <div className="space-y-6">
              
              {/* ПРАВКА: Ссылка на Google Карты для адреса */}
              <a 
                href="https://yandex.ru/maps/?text=Краснодар+Айвазовского+44" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 group cursor-pointer"
              >
                <MapPin className="text-slate-600 group-hover:text-blue-500 transition-colors shrink-0" size={20} />
                <p className="text-slate-300 group-hover:text-white transition-colors font-medium text-sm">
                  350040, Краснодар, ул Айвазовского 44/Свободная 45<br/>
                  <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">Открыть на карте</span>
                </p>
              </a>

              <div className="flex items-center gap-4">
                <Mail className="text-slate-600 shrink-0" size={20} />
                <p className="text-slate-300 font-bold">gumanitarnyidozor@yandex.ru</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-slate-600 shrink-0" size={20} />
                <p className="text-slate-300 font-black text-xl tracking-tighter">8 (928) 881-88-11 / 8 (918) 440-22-20</p>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя планка */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            © 2026 ГУМАНИТАРНЫЙ ДОЗОР. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition">Политика конфиденциальности</Link>
            <Link href="#" className="text-slate-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition">Устав фонда</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}