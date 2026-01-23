import React from 'react';
import { ArrowLeft, Target, MapPin, CalendarDays, ArrowRight, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  // Данные для НОВОГО активного сбора (Инструменты)
  const activeGoal = 850000; 
  const activeCurrent = 127500; 
  const activeProgress = (activeCurrent / activeGoal) * 100;

  const pastEvents = [
    {
      id: "tools-mission", // Будущий ID для страницы инструментов
      status: "В процессе",
      title: "Инженерное обеспечение: Инструменты",
      location: "Донецкое направление",
      impact: "Сварочные аппараты, генераторы, шанцевый инструмент",
      date: "Январь, 2026",
      color: "bg-orange-500"
    },
    {
      id: "patriot-pickup", 
      status: "Завершено",
      title: "Спецмиссия «Стальной Дозор»",
      location: "Северное направление",
      impact: "УАЗ Патриот Пикап передан подразделению",
      date: "Декабрь, 2025",
      color: "bg-blue-600"
    },
    {
      id: "krugly-stol",
      status: "Встреча",
      title: "Круглый стол по реабилитации",
      location: "Центральный офис, Краснодар",
      impact: "Участвовало 15 профильных клиник",
      date: "25 Января, 2026",
      color: "bg-slate-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-24 font-sans">
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-blue-600 font-bold text-xs tracking-widest uppercase transition mb-8 group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          На главную
        </Link>
        <h1 className="text-5xl md:text-8xl font-[950] tracking-tighter text-slate-900 uppercase italic leading-none">
          Миссии <span className="text-blue-600">&</span> Сборы
        </h1>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-20">
        
        {/* БЛОК 1: АКТУАЛЬНЫЙ СБОР (ИНСТРУМЕНТЫ) */}
        <section>
          <div className="flex items-center gap-2 text-orange-600 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
            <Target size={14} /> Срочный сбор: Инженерное обеспечение
          </div>
          
          <div className="bg-white rounded-[48px] p-8 md:p-14 border border-orange-100 shadow-[0_40px_80px_rgba(249,115,22,0.08)] relative overflow-hidden">
            {/* Декоративная иконка на фоне */}
            <Wrench className="absolute -right-10 -top-10 text-orange-50/50" size={300} strokeWidth={1} />
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight max-w-2xl relative z-10">
              Сварка, генераторы и шанцевый инструмент
            </h2>
            
            <div className="mb-12 relative z-10">
              <div className="flex justify-between items-end mb-6">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Собрано сейчас</span>
                  <span className="text-5xl md:text-6xl font-[900] text-slate-900 tracking-tighter">
                    {activeCurrent.toLocaleString()} ₽
                  </span>
                </div>
                <div className="text-right">
                   <span className="block text-slate-400 font-bold italic text-xl leading-none">
                     из {activeGoal.toLocaleString()} ₽
                   </span>
                </div>
              </div>
              
              <div className="w-full h-6 bg-slate-50 rounded-full overflow-hidden p-1.5 border border-slate-100">
                <div 
                  className="h-full bg-orange-500 rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                  style={{ width: `${activeProgress}%` }}
                />
              </div>
              <div className="mt-6">
                <p className="text-xs font-black text-orange-600 uppercase tracking-widest">
                  {activeProgress.toFixed(0)}% ресурсов подготовлено
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              <button className="bg-orange-500 text-white py-6 rounded-[28px] font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all duration-500 shadow-xl shadow-orange-100">
                Поддержать закупку
              </button>
              <Link href="/events/tools-mission" className="bg-white border-2 border-slate-100 text-slate-900 py-6 rounded-[28px] font-black uppercase tracking-widest text-xs hover:border-orange-600 transition-all duration-500 flex items-center justify-center gap-2">
                Техническая смета
              </Link>
            </div>
          </div>
        </section>

        {/* БЛОК 2: ЛЕНТА СОБЫТИЙ (ХРОНИКА) */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">
              <CalendarDays size={14} /> Хроника деятельности
            </div>
          </div>

          <div className="space-y-4">
            {pastEvents.map((event) => (
              <Link 
                href={`/events/${event.id}`} 
                key={event.id} 
                className="group block bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${event.color}`}>
                        {event.status}
                      </span>
                      <span className="text-slate-400 text-[10px] font-black flex items-center gap-1 uppercase tracking-widest">
                        <MapPin size={12} className="text-blue-500" /> {event.location}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-400 font-medium text-lg">{event.impact}</p>
                  </div>

                  <div className="flex items-center gap-8 min-w-fit border-t md:border-t-0 md:border-l border-slate-50 pt-6 md:pt-0 md:pl-10 w-full md:w-auto">
                    <div className="text-left md:text-right">
                      <p className="text-[10px] font-black text-slate-300 uppercase mb-1 tracking-widest">Дата отчета</p>
                      <p className="text-xl font-bold text-slate-900 tracking-tighter">{event.date}</p>
                    </div>
                    <div className="ml-auto w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}