"use client";

import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Youtube, Send, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F1115] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Декоративный фоновый элемент */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.02] pointer-events-none">
        <Shield size={600} />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Блок 1: О фонде */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center italic font-black text-xl shadow-xl shadow-blue-500/20">
                ГД
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-[950] tracking-tighter uppercase italic leading-none">
                  Гуманитарный <span className="text-blue-500">Дозор</span>
                </span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-500 mt-1">
                  Система безопасности и помощи
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mb-10 italic">
              «Прозрачность, оперативность и адресная помощь. Мы создаем систему, где важен каждый голос».
            </p>
            <div className="flex gap-4">
              <a 
                href="https://t.me/+FXAPtHfchaUwNDky" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 group"
              >
                <Send size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center justify-center hover:bg-red-600 hover:border-red-500 transition-all duration-500">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center justify-center hover:bg-gradient-to-tr from-yellow-500 to-purple-600 hover:border-transparent transition-all duration-500">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Блок 2: Навигация */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Навигация</h4>
            <ul className="space-y-4">
              {['Главная', 'Журнал новостей', 'Миссии и сборы', 'Документы', 'Контакты'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-white font-bold transition-all uppercase text-sm tracking-tight italic flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-blue-500 group-hover:w-4 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Блок 3: Контакты (Телефоны поправлены здесь) */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Связь с Дозором</h4>
            <div className="space-y-8">
              
              {/* Адрес */}
              <a 
                href="https://yandex.ru/maps/?text=Краснодар+Айвазовского+44" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <MapPin className="text-slate-500 group-hover:text-blue-500 transition-colors" size={20} />
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-300 group-hover:text-white transition-colors font-bold text-sm leading-tight">
                    350040, Краснодар, <br/>ул Айвазовского 44 / Свободная 45
                  </p>
                  <span className="text-blue-500 text-[9px] font-black uppercase tracking-[0.2em] mt-2 flex items-center gap-1">
                    Открыть карты <ArrowUpRight size={10} />
                  </span>
                </div>
              </a>

              {/* Почта */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0">
                  <Mail className="text-slate-500 group-hover:text-blue-500 transition-colors" size={18} />
                </div>
                <a href="mailto:gumanitarnyidozor@yandex.ru" className="text-slate-300 hover:text-white font-bold transition-colors">
                  gumanitarnyidozor@yandex.ru
                </a>
              </div>

              {/* Телефоны */}
              <div className="space-y-3">
                <div className="flex flex-col gap-3">
                  <a href="tel:+79288818811" className="flex items-center gap-4 group w-fit">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/5">
                      <Phone className="text-blue-500 group-hover:text-white transition-colors" size={18} />
                    </div>
                    <span className="text-white text-2xl font-[950] tracking-tighter group-hover:text-blue-400 transition-colors">
                      8 (928) 881-88-11
                    </span>
                  </a>

                  <a href="tel:+79184402220" className="flex items-center gap-4 group w-fit">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all">
                      <Phone className="text-blue-500 group-hover:text-white transition-colors" size={18} />
                    </div>
                    <span className="text-white text-2xl font-[950] tracking-tighter group-hover:text-blue-400 transition-colors">
                      8 (918) 440-22-20
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Нижняя планка */}
        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:grid md:grid-cols-3 items-center gap-8">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 ГУМАНИТАРНЫЙ ДОЗОР
          </p>
          
          <div className="flex justify-center gap-6">
            <Link href="#" className="text-slate-500 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Политика</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Устав</Link>
          </div>

          <p className="text-slate-700 text-[9px] font-bold uppercase tracking-widest md:text-right">
            Сделано для своих. С верой в победу.
          </p>
        </div>
      </div>
    </footer>
  );
}