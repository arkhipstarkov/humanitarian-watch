"use client";

import React from 'react';
import { ArrowLeft, Clock, Share2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const articles = [
    {
      id: "1", // Используем строки для ID
      category: "Законодательство",
      date: "22 Января, 2026",
      title: "Новые льготы для участников СВО: подробный разбор указа",
      excerpt: "Сегодня были опубликованы уточнения по программе социальной газификации и земельным наделам...",
      image: "bg-blue-600"
    },
    {
      id: "2",
      category: "События",
      date: "20 Января, 2026",
      title: "Открытие филиала в Ростове-на-Дону",
      excerpt: "Новый центр координации помощи начнет работу уже в следующий понедельник.",
      image: "bg-slate-800"
    },
    {
      id: "3",
      category: "Истории",
      date: "18 Января, 2026",
      title: "Как спорт помогает вернуться к мирной жизни",
      excerpt: "Интервью с мастером спорта, который открыл школу единоборств для ветеранов.",
      image: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-20 font-sans">
      <header className="max-w-7xl mx-auto px-8 py-16">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-blue-600 font-bold text-[10px] tracking-[0.2em] uppercase transition mb-12 group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          На главную
        </Link>
        <h1 className="text-6xl md:text-8xl font-[950] tracking-tight text-slate-900 mb-4 italic uppercase leading-none">
          Журнал <span className="text-blue-600">дозора</span>
        </h1>
        <p className="text-xl text-slate-400 font-medium">Актуальная информация и летопись наших достижений.</p>
      </header>

      <main className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((post, index) => (
            /* Теперь вся карточка — это ссылка */
            <Link 
              href={`/news/${post.id}`} 
              key={post.id} 
              className={`group block bg-white rounded-[48px] border border-slate-100 overflow-hidden shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-700 ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <article className={`flex flex-col ${index === 0 ? 'md:flex-row' : ''} h-full`}>
                {/* Изображение */}
                <div className={`${index === 0 ? 'md:w-1/2 h-[450px]' : 'h-72'} ${post.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Контент */}
                <div className={`p-10 flex flex-col justify-center ${index === 0 ? 'md:w-1/2' : 'flex-1'}`}>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-8">
                    <span>{post.category}</span>
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock size={14} /> {post.date}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-blue-600 transition-all">
                      Читать статью <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                    
                    {/* Кнопка поделиться (предотвращаем переход по ссылке при клике на неё) */}
                    <button 
                      onClick={(e) => { e.preventDefault(); /* логика шаринга */ }}
                      className="p-4 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all text-slate-400"
                    >
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}