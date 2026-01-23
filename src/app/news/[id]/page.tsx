"use client";

import React, { use } from 'react';
// Оставляем иконки и обязательно используем их ниже
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react'; 
import Link from 'next/link';

const NEWS_DATABASE = [
  {
    id: "1",
    category: "Законодательство",
    date: "22 Января, 2026",
    title: "Новые льготы для участников СВО: подробный разбор указа",
    content: "Президент подписал новый указ, расширяющий меры социальной поддержки. Основные изменения коснутся порядка предоставления земельных участков и компенсации затрат на ЖКХ. Юристы фонда подготовили подробную инструкцию по оформлению документов...",
    quote: "Наша задача — сделать так, чтобы юридическая помощь была доступна в один клик без бюрократических проволочек."
  },
  {
    id: "2",
    category: "События",
    date: "20 Января, 2026",
    title: "Открытие нового филиала фонда в Ростове-на-Дону",
    content: "Мы расширяем географию присутствия. Новый офис оснащен современным оборудованием для первичной реабилитации и кабинетами психологической помощи. Прием граждан начнется уже со следующего понедельника...",
    quote: "Каждый регион должен иметь точку опоры для ветеранов и их семей."
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
            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl italic shadow-xl">
              ГД
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-tight text-slate-900">Редакция Дозора</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">Official Press</p>
            </div>
          </div>
          
          {/* ВОТ ЗДЕСЬ МЫ ИСПОЛЬЗУЕМ Share2 И Bookmark, ЧТОБЫ ESLINT НЕ РУГАЛСЯ */}
          <div className="flex gap-3">
            <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
              <Share2 size={20} />
            </button>
            <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
              <Bookmark size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-8">
        <div className="prose prose-slate prose-xl text-slate-600 leading-[1.8] font-medium">
          <p className="mb-10 text-lg md:text-xl text-slate-900 font-semibold leading-relaxed">
            {article.content.split('.')[0]}.
          </p>
          <p className="mb-10 text-lg md:text-xl">
            {article.content}
          </p>

          <div className="my-16 p-10 bg-slate-50 rounded-[48px] border-l-[12px] border-blue-600 italic text-2xl text-slate-800 font-bold leading-relaxed relative">
            <span className="absolute top-4 left-4 text-blue-100 text-8xl font-serif select-none tracking-tighter">&ldquo;</span>
            <p className="relative z-10">{article.quote}</p>
          </div>
        </div>
      </main>
    </article>
  );
}