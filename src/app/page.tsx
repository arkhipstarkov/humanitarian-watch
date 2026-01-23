import React from 'react';
import { Newspaper, Calendar, Heart, ArrowRight, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Типизация для карточек
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
  variant?: 'light' | 'dark' | 'copper';
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-[#1A1C20] font-sans">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image 
                src="/dozor01.png" 
                alt="Гуманитарный Дозор" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-[950] tracking-tighter uppercase leading-none">
                Гуманитарный <span className="text-blue-600 italic">дозор</span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#B35B2A] mt-1">
                Система поддержки
              </span>
            </div>
          </div>
          <button className="bg-[#1A1C20] text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#B35B2A] transition-all shadow-xl active:scale-95">
            Связаться
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-48 pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-[100px] font-[950] leading-[0.9] tracking-tighter mb-10 uppercase italic">
              Защищаем тех, кто <br />
              <span className="text-blue-600">защищает нас.</span>
            </h1>
            <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Современная экосистема поддержки ветеранов. Мы объединяем технологии, людей и стальную волю для достойного возвращения домой.
            </p>
          </div>
          
          {/* Мини-виджет статуса (Акцент на медном цвете) */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-[0_40px_80px_rgba(0,0,0,0.06)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#B35B2A]/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <Target className="text-[#B35B2A] mb-6" size={32} />
              <h4 className="text-sm font-black uppercase tracking-widest mb-2">Активный сбор</h4>
              <p className="text-2xl font-bold tracking-tight mb-6 leading-tight">Реабилитационный центр «Восток»</p>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-blue-600 w-[65%] shadow-[0_0_10px_rgba(179,91,42,0.3)]" />
              </div>
              <Link href="/events" className="text-xs font-black uppercase tracking-widest text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                Подробнее <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Сетка категорий */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            link="/news"
            icon={<Newspaper size={32} />}
            title="Журнал"
            desc="Главные новости, аналитика и важные изменения в правовом поле."
          />
          <FeatureCard 
            link="/events"
            icon={<Calendar size={32} />}
            title="Миссии"
            desc="Действующие сборы, гуманитарные конвои и отчеты о проделанной работе."
            variant="copper"
          />
          <FeatureCard 
            link="/support"
            icon={<Heart size={32} />}
            title="Ресурс"
            desc="Прямая связь с психологами, юристами и кураторами фонда."
            variant="dark"
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, desc, link, variant = 'light' }: FeatureCardProps) {
  const styles = {
    light: 'bg-white text-[#1A1C20] border border-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-blue-100',
    dark: 'bg-[#1A1C20] text-white shadow-2xl shadow-slate-300',
    copper: 'bg-blue-600 text-white shadow-2xl shadow-blue-200'
  };

  const iconColors = {
    light: 'text-blue-600',
    dark: 'text-blue-400',
    copper: 'text-blue-100'
  };

  return (
    <Link href={link} className="block group">
      <div className={`
        relative overflow-hidden p-10 rounded-[48px] h-[340px] flex flex-col justify-between transition-all duration-500
        ${styles[variant]}
        group-hover:-translate-y-4
      `}>
        <div className={`${iconColors[variant]} transition-transform duration-500 group-hover:scale-110`}>
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-[900] mb-4 tracking-tight uppercase italic">{title}</h3>
          <p className={`text-sm font-medium leading-relaxed ${variant === 'light' ? 'text-slate-500' : 'text-white/70'}`}>
            {desc}
          </p>
        </div>
        <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500">
          <ArrowRight size={24} />
        </div>
      </div>
    </Link>
  );
}