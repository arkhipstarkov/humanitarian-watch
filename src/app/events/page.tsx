"use client";

import React, { useState } from 'react';
import { ArrowLeft, Target, MapPin, CalendarDays, ArrowRight, Wrench, X, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Импортируем данные для синхронизации. 
import { TOOLS_MISSION_DATA } from './[id]/page'; 

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Данные теперь берутся из общего источника
  const activeGoal = TOOLS_MISSION_DATA.goal; 
  const activeCurrent = TOOLS_MISSION_DATA.current; 
  const activeProgress = (activeCurrent / activeGoal) * 100;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const pastEvents = [
    {
      id: "tools-mission",
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
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-24 font-sans relative">
      
      {/* МОДАЛЬНОЕ ОКНО РЕКВИЗИТОВ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="bg-white rounded-[40px] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl border border-slate-100">
            <div className="sticky top-0 bg-white/80 backdrop-blur-md p-8 border-b border-slate-50 flex justify-between items-center z-20">
              <h2 className="text-2xl font-[950] italic uppercase tracking-tighter text-slate-900">Реквизиты организации</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">Название организации</p>
                <p className="font-bold text-slate-900 leading-tight">
                  АНО ЦЕНТР ПРИЕМА ГУМАНИТАРНОЙ ПОМОЩИ &quot;ГУМАНИТАРНЫЙ ДОЗОР&quot;
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "ИНН", value: "2309188168" },
                  { label: "КПП", value: "230901001" },
                  { label: "ОГРН", value: "1252300058625" },
                  { label: "БИК", value: "044525974" }
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-white border border-slate-100 rounded-2xl flex justify-between items-center group">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase">{item.label}</p>
                      <p className="font-bold text-slate-900">{item.value}</p>
                    </div>
                    <button onClick={() => copyToClipboard(item.value, item.label)} className="text-slate-300 hover:text-blue-600 transition-colors">
                      {copiedField === item.label ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-3xl relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">Расчетный счет</p>
                  <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">40703810700000749585</p>
                  <button 
                    onClick={() => copyToClipboard("40703810700000749585", "RS")}
                    className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase text-blue-600 hover:text-slate-900 transition-colors"
                  >
                    {copiedField === "RS" ? "Скопировано!" : "Скопировать счет"} <Copy size={14} />
                  </button>
                </div>
              </div>

              <div className="space-y-4 text-sm font-medium text-slate-500 pb-4">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span>Банк:</span>
                  <span className="text-slate-900 font-bold">АО «ТБанк»</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span>Корр. счет:</span>
                  <span className="text-slate-900 font-bold">30101810145250000974</span>
                </div>
                <div>
                  <span className="block mb-1">Юр. адрес:</span>
                  <span className="text-slate-700 leading-tight block">350040, г. Краснодар, ул. им. Айвазовского, д. 44</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ШАПКА */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-blue-600 font-bold text-xs tracking-widest uppercase transition mb-8 group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          На главную
        </Link>
        <h1 className="text-5xl md:text-8xl font-[950] tracking-tighter text-slate-900 uppercase italic leading-none">
          Миссии <span className="text-blue-600">&amp;</span> Сборы
        </h1>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-20">
        <section>
          <div className="flex items-center gap-2 text-orange-600 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
            <Target size={14} /> Срочный сбор: Инженерное обеспечение
          </div>
          
          <div className="bg-white rounded-[48px] p-8 md:p-14 border border-orange-100 shadow-[0_40px_80px_rgba(249,115,22,0.08)] relative overflow-hidden">
            <Wrench className="absolute -right-10 -top-10 text-orange-50/50" size={300} strokeWidth={1} />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
              <div className="lg:col-span-8">
                <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-none uppercase italic">
                  Сварка, генераторы и инструмент
                </h2>
                
                <div className="mb-12">
                  <div className="flex justify-between items-end mb-6">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Собрано сейчас</span>
                      <span className="text-5xl md:text-7xl font-[900] text-slate-900 tracking-tighter">
                        {activeCurrent.toLocaleString()} ₽
                      </span>
                    </div>
                    <div className="text-right">
                       <span className="block text-slate-400 font-bold italic text-xl">
                         из {activeGoal.toLocaleString()} ₽
                       </span>
                    </div>
                  </div>
                  
                  <div className="w-full h-4 bg-slate-50 rounded-full overflow-hidden p-1 border border-slate-100">
                    <div 
                      className="h-full bg-orange-500 rounded-full transition-all duration-1000"
                      style={{ width: `${activeProgress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-orange-500 text-white py-6 rounded-[28px] font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl shadow-orange-100"
                  >
                    Поддержать закупку
                  </button>
                  <Link href="/events/tools-mission" className="bg-white border-2 border-slate-100 text-slate-900 py-6 rounded-[28px] font-black uppercase tracking-widest text-xs hover:border-orange-600 transition-all flex items-center justify-center gap-2">
                    Техническая смета
                  </Link>
                </div>
              </div>

              {/* БЛОК С QR-КОДОМ - ИСПРАВЛЕН ФОРМАТ И ДОБАВЛЕН КЭШ-БАСТИНГ */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center bg-slate-50 rounded-[40px] p-8 border border-slate-100">
                <div className="relative w-48 h-48 bg-white p-4 rounded-3xl shadow-inner mb-6">
                   <Image 
                     src="/images/qr-sbp.webp?v=2" 
                     alt="QR для оплаты СБП" 
                     fill 
                     className="object-contain p-2" 
                     priority
                   />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-center text-slate-400 leading-tight">
                  Сканируйте QR-код <br/> для быстрого перевода через СБП
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-10">
            <CalendarDays size={14} /> Хроника деятельности
          </div>

          <div className="space-y-4">
            {pastEvents.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id} className="group block bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 hover:border-blue-100 transition-all duration-500">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${event.color}`}>{event.status}</span>
                      <span className="text-slate-400 text-[10px] font-black flex items-center gap-1 uppercase tracking-widest"><MapPin size={12}/> {event.location}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{event.title}</h3>
                    <p className="text-slate-400 font-medium text-lg">{event.impact}</p>
                  </div>
                  <div className="ml-auto w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={24} />
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