"use client";

import React, { use } from 'react';
import { ArrowLeft, Clock, Share2, Bookmark, CheckCircle2 } from 'lucide-react'; 
import Link from 'next/link';

const NEWS_DATABASE = [
  {
    id: "1",
    category: "Выплаты",
    date: "24 Января, 2026",
    title: "Индексация выплат по инвалидности в 2026 году",
    content: [
      "В 2026 году участники СВО, получившие инвалидность, могут рассчитывать на комплексную поддержку. Основные изменения включают ежемесячные компенсации (КВЗ), ЕДВ с индексацией и социальные пенсии. С 1 февраля 2026 года ожидается индексация ЕДВ на 6,8%, а страховые пенсии будут проиндексированы уже в январе.",
      "Размеры ежемесячных компенсаций за военную травму в начале года составляют:",
      "• I группа: 25 782,85 руб.",
      "• II группа: 12 891,40 руб.",
      "• III группа: 5 156,57 руб.",
      "Помимо этого, предусмотрена разовая выплата в размере 1 млн рублей в качестве доплаты к уже полученным суммам (оформляется через Фонд «Защитники Отечества»)."
    ],
    quote: "В 2026 году мы переходим на проактивное начисление льгот, чтобы ветеранам не приходилось собирать лишние справки."
  },
  {
    id: "2",
    category: "Развитие",
    date: "23 Января, 2026",
    title: "Открытие филиала Гуманитарного дозора в Донецке",
    content: [
      "Мы официально объявляем об открытии полномасштабного представительства «Гуманитарного дозора» в столице ДНР. Донецкий филиал станет ключевым логистическим узлом для распределения помощи по всей линии фронта.",
      "Штаб включает в себя склад высокотехнологичного оборудования (РЭБ, дроны), центр распределения медицины и юридический отдел для помощи бойцам на местах. Теперь сроки доставки необходимых средств сократятся втрое.",
      "Прием волонтеров и обработка заявок от подразделений начнутся немедленно."
    ],
    quote: "Быть рядом с теми, кто на передовой — единственный способ работать эффективно."
  },
  {
    id: "3",
    category: "Земля",
    date: "21 Января, 2026",
    title: "Земельный вопрос: новые правила получения участков",
    content: [
      "В 2026 году процедура получения земли участниками СВО становится более гибкой. Главное нововведение — возможность выбора между физическим участком и денежной компенсацией (земельным сертификатом). Это особенно актуально для регионов с дефицитом свободных земель.",
      "Для контрактников в Ленинградской области сертификаты выдаются без привязки к прописке. Также рассматривается инициатива упрощенного получения земли без проведения аукционов при стаже службы в зоне СВО более 3 лет.",
      "Для оформления необходимо подтвердить статус ветерана и подать заявление через Госуслуги или МФЦ."
    ],
    quote: "Земельный сертификат — это свобода выбора: построить дом или вложить средства в будущее семьи."
  }
];

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const article = NEWS_DATABASE.find(item => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Новость не найдена</h1>
          <Link href="/news" className="text-blue-600 underline font-bold">Вернуться к списку</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white pb-20 font-sans">
      <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-50 z-50">
        <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 w-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
      </div>

      <header className="max-w-4xl mx-auto px-8 pt-16">
        <Link href="/news" className="inline-flex items-center text-slate-400 hover:text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] transition mb-12 group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Назад в журнал
        </Link>
        
        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-8">
          <span>{article.category}</span>
          <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
          <span className="text-slate-400 flex items-center gap-1.5 italic font-bold">
            <Clock size={14} /> {article.date}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-[950] tracking-[-0.04em] text-slate-900 leading-[0.95] mb-12 italic uppercase">
          {article.title}
        </h1>

        <div className="flex items-center justify-between py-10 border-y border-slate-100 mb-16">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl italic shadow-xl">ГД</div>
            <div>
              <p className="text-sm font-black uppercase tracking-tight text-slate-900">Редакция Дозора</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">Official Press</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Share2 size={20} /></button>
            <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Bookmark size={20} /></button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-8">
        <div className="text-slate-600 leading-[1.8] font-medium text-lg md:text-xl">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className={`mb-8 ${paragraph.startsWith('•') ? 'pl-6 text-slate-900 font-bold' : ''}`}>
              {paragraph}
            </p>
          ))}

          <div className="my-16 p-10 bg-slate-50 rounded-[48px] border-l-[12px] border-blue-600 italic text-2xl text-slate-800 font-bold leading-relaxed relative">
            <span className="absolute top-4 left-4 text-blue-100 text-8xl font-serif select-none tracking-tighter">&ldquo;</span>
            <p className="relative z-10">{article.quote}</p>
          </div>
          
          <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex items-start gap-4">
            <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
            <p className="text-sm text-blue-900 font-bold uppercase tracking-wide">
              Оформляйте выплаты и льготы через Социальный фонд России (СФР) или фонд «Защитники Отечества».
            </p>
          </div>
        </div>
      </main>
    </article>
  );
}