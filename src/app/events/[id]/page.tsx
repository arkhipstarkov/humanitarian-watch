"use client";

import React, { use } from 'react';
import { ArrowLeft, ShieldCheck, Download, Box, Target, Settings, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const EVENTS_DATABASE = [
  {
    id: "patriot-pickup",
    status: "Завершено",
    title: "Спецмиссия «Стальной Дозор»",
    fullDesc: "Для выполнения оперативных задач на Северном направлении был реализован проект по закупке и подготовке внедорожника УАЗ Патриот Пикап. Это не просто машина, а мобильная платформа для эвакуации и доставки БК в условиях полного бездорожья. Мы провели полное техническое перевооружение: от усиления подвески до закупки специализированной грязевой резины и комплекта запчастей на первые 10 000 км фронтовых дорог.",
    date: "Декабрь, 2025",
    location: "Северное направление",
    stats: [
      { label: "Цель сбора", value: "2.0 млн ₽", icon: <Target size={18} /> },
      { label: "Подготовка", value: "14 дней", icon: <Settings size={18} /> },
      { label: "Результат", value: "На посту", icon: <ShieldCheck size={18} /> }
    ],
    color: "bg-blue-600",
    coverImage: "/images/patriot_pikap.png",
    gallery: [
      "/images/patriot_zap01.png",
      "/images/patriot_zap02.png",
      "/images/patriot_zap03.png",
      "/images/patriot_zap04.png"
    ],
    videos: [
      "/video/patriot_test.mp4",
      "/video/patriot_delivery.mp4"
    ]
  },
  {
    id: "tools-mission",
    status: "Сбор средств",
    title: "Инженерное обеспечение: Инструменты",
    fullDesc: "Формируем мобильные ремонтные комплекты для передовой. В состав входят профессиональные инверторные сварочные аппараты, бензогенераторы, болгарки, а также базовый шанцевый инструмент (лопаты, кирки, ломы). Качественный инструмент — это скорость возведения укреплений и возможность восстановить технику в полевых условиях.",
    date: "Январь, 2026",
    location: "Донецкое направление",
    stats: [
      { label: "Цель", value: "850 000 ₽", icon: <Target size={18} /> },
      { label: "Приоритет", value: "Критический", icon: <ShieldCheck size={18} /> },
      { label: "Собрано", value: "15%", icon: <Box size={18} /> }
    ],
    color: "bg-orange-500",
    coverImage: "/images/tools_cover.png",
    gallery: [
      "/images/dozor_tools01.png",
      "/images/dozor_tools02.png",
      "/images/dozor_tools03.png",
      "/images/dozor_tools04.png"
    ],
    videos: [
      "/video/tools01.mp4"
    ]
  }
];

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const event = EVENTS_DATABASE.find(item => item.id === id);

  if (!event) return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <div className="text-center">
        <h1 className="text-2xl font-black mb-4 uppercase">Миссия не найдена</h1>
        <Link href="/events" className="text-blue-600 font-bold hover:underline">Назад к списку</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      {/* Шапка */}
      <div className="h-[65vh] bg-slate-900 relative flex items-end overflow-hidden">
        {event.coverImage && (
          <Image src={event.coverImage} alt={event.title} fill className="object-cover opacity-60" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
        <div className="max-w-6xl mx-auto px-8 w-full mb-16 relative z-20">
          <Link href="/events" className="inline-flex items-center text-white/70 hover:text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-8 transition group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Назад к миссиям
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${event.color}`}>
              {event.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-8xl font-[950] text-white tracking-tighter italic uppercase leading-[0.85] max-w-4xl">
            {event.title}
          </h1>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          
          {/* Статистика */}
          <div className="grid grid-cols-3 gap-4 mb-16 py-10 border-b border-slate-100">
            {event.stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-blue-600">{s.icon}</div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{s.label}</p>
                <p className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-sm font-black text-blue-600 mb-6 uppercase tracking-[0.3em]">Хроника деятельности</h3>
            <p className="text-2xl text-slate-700 leading-relaxed font-medium italic mb-12">
              {event.fullDesc}
            </p>

            {/* Блок видео */}
            {event.videos && event.videos.length > 0 && (
              <div className="mb-16 bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                  <Play size={14} fill="currentColor"/> Видеоотчеты
                </h4>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
                  {event.videos.map((vid, idx) => (
                    <div key={idx} className="relative w-64 aspect-[9/16] shrink-0 snap-start rounded-3xl overflow-hidden shadow-2xl bg-black border border-slate-200">
                      <video 
                        controls 
                        playsInline 
                        muted 
                        preload="metadata"
                        poster={event.coverImage} 
                        className="w-full h-full object-cover"
                      >
                        <source src={vid} type="video/mp4" />
                        <source src={vid} type="video/quicktime" />
                        Браузер не поддерживает видео.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Галерея */}
            <h3 className="text-sm font-black text-blue-600 mb-6 uppercase tracking-[0.3em]">Фотоархив</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {event.gallery.map((img, index) => (
                <div key={index} className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 group border border-slate-100">
                  <Image 
                    src={img} 
                    alt={`Фото ${index + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Сайдбар */}
        <div className="lg:col-span-4">
          <div className="bg-slate-50 rounded-[40px] p-8 sticky top-32 border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <ShieldCheck className="text-blue-600" size={24} />
               </div>
               <span className="font-black text-[10px] uppercase tracking-widest leading-tight text-slate-900">
                 Отчетность <br/> подтверждена
               </span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm py-2 border-b border-slate-200">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Дата:</span>
                <span className="font-black text-slate-900">{event.date}</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b border-slate-200">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Регион:</span>
                <span className="font-black text-slate-900 text-right ml-4">{event.location}</span>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg">
              <Download size={18} /> Скачать отчет (PDF)
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}