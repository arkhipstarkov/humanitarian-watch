"use client"; // Добавляем, так как в будущем тут будет логика кнопок

import React from 'react';
import { ArrowLeft, Scale, HeartPulse, Brain, PhoneCall, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  const services = [
    {
      icon: <Scale size={32} />,
      title: "Юридический щит",
      desc: "Помощь в оформлении выплат, статусов и решении земельных вопросов.",
      color: "bg-amber-50 text-amber-600",
      accent: "group-hover:bg-amber-600"
    },
    {
      icon: <Brain size={32} />, // Исправленная иконка
      title: "Психологическая опора",
      desc: "Конфиденциальные консультации по ПТСР и адаптации к мирной жизни.",
      color: "bg-rose-50 text-rose-600",
      accent: "group-hover:bg-rose-600"
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Медицинский навигатор",
      desc: "Поиск профильных центров реабилитации и протезирования.",
      color: "bg-blue-50 text-blue-600",
      accent: "group-hover:bg-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-24 font-sans">
      <header className="max-w-7xl mx-auto px-8 py-20 text-center">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-blue-600 font-bold text-xs tracking-[0.2em] uppercase transition-all mb-12 group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Вернуться назад
        </Link>
        <h1 className="text-6xl md:text-[100px] font-[950] tracking-[-0.05em] text-slate-900 uppercase italic leading-none mb-8">
          Центр <span className="text-blue-600 underline decoration-blue-100 underline-offset-[12px]">Ресурса</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Проверенные контакты и инструменты поддержки для возвращения к мирной жизни.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-8">
        {/* Сетка сервисов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {services.map((s, i) => (
            <div key={i} className="group p-10 rounded-[48px] border border-slate-100 bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all duration-700 relative overflow-hidden">
              <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {s.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-10 text-lg">{s.desc}</p>
              
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-blue-600 transition-colors">
                Узнать больше <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Форма связи — Премиум блок */}
        <div className="bg-[#1A1C20] rounded-[60px] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-blue-200/20">
          {/* Декоративное свечение */}
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px] opacity-15" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                <CheckCircle size={14} /> Линия поддержки 24/7
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter italic leading-[0.9]">
                НУЖНА <br/> <span className="text-blue-500">ПОМОЩЬ?</span>
              </h2>
              <p className="text-slate-400 text-xl mb-12 font-medium leading-relaxed">
                Наши координаторы — это люди с опытом, которые поймут вас без лишних слов. Оставьте заявку.
              </p>
              
              <div className="inline-flex flex-col">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 text-left">Горячая линия</span>
                <div className="flex items-center gap-4 text-3xl font-black tracking-tighter text-white hover:text-blue-500 transition-colors cursor-pointer">
                  <PhoneCall size={32} className="text-blue-500" /> 8 (928) 881-88-11 / 8 (918) 440-22-20
                </div>
              </div>
            </div>

            <form className="bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 rounded-[48px] border border-white/10 space-y-5 shadow-inner">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Имя представителя</label>
                <input type="text" placeholder="Александр" className="w-full bg-white/5 border border-white/10 rounded-[24px] p-6 focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-700" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Контактный телефон</label>
                <input type="tel" placeholder="+7 (900) 000-00-00" className="w-full bg-white/5 border border-white/10 rounded-[24px] p-6 focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-700" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Краткая суть вопроса</label>
                <textarea placeholder="Опишите ситуацию..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-[24px] p-6 focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-700 resize-none" />
              </div>

              <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 py-6 rounded-[24px] font-[900] uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98] mt-4">
                Отправить запрос
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}