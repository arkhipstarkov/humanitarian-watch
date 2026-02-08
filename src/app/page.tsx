'use client';

import React, { useState } from 'react';
import { Newspaper, Heart, ArrowRight, Target, ShieldCheck, Zap, MapPin, Phone, X } from 'lucide-react';
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
  // Состояние для модального окна (всплывающее фото)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

      <main className="pt-48 pb-24 px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-[100px] font-[950] leading-[0.9] tracking-tighter mb-10 uppercase italic">
              Защищаем тех, кто <br />
              <span className="text-blue-600">защищает нас.</span>
            </h1>
            <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Единый центр оперативной помощи. От снабжения передовой до комплексной реабилитации и правовой поддержки ветеранов дома.
            </p>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-[0_40px_80px_rgba(0,0,0,0.06)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#B35B2A]/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <Target className="text-[#B35B2A] mb-6" size={32} />
              <h4 className="text-sm font-black uppercase tracking-widest mb-2">Активный сбор</h4>
              <p className="text-2xl font-bold tracking-tight mb-6 leading-tight">Сварка, генераторы и инструменты для передовой</p>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-blue-600 w-[78%] shadow-[0_0_10px_rgba(37,99,235,0.3)]" />
              </div>
              <Link href="/events" className="text-xs font-black uppercase tracking-widest text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                Помочь подразделению <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Секция ФОТО деятельности */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-5xl font-[950] uppercase italic tracking-tighter leading-none">
              Дозор в <span className="text-blue-600">действии</span>
            </h2>
            <p className="text-slate-400 font-medium max-w-sm text-right italic">
              Нажмите на фото, чтобы рассмотреть детали.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
            <div 
              onClick={() => setSelectedImage('/images/gumanitarka_01.webp')}
              className="md:col-span-2 relative rounded-[40px] overflow-hidden group cursor-zoom-in"
            >
              <Image 
                src="/images/gumanitarka_01.webp" 
                alt="Фронт" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 text-white">
                <span className="text-sm font-black uppercase tracking-widest italic">Поставки на ЛБС</span>
              </div>
            </div>

            <div 
              onClick={() => setSelectedImage('/images/gumanitarka_02.webp')}
              className="relative rounded-[40px] overflow-hidden group cursor-zoom-in"
            >
              <Image 
                src="/images/gumanitarka_02.webp" 
                alt="Груз доставлен" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 text-white">
                <span className="text-sm font-black uppercase tracking-widest italic">Груз доставлен</span>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-4">
              <div 
                onClick={() => setSelectedImage('/images/gumanitarka_03.webp')}
                className="relative rounded-[32px] overflow-hidden group cursor-zoom-in"
              >
                <Image 
                  src="/images/gumanitarka_03.webp" 
                  alt="Логистика" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="relative rounded-[32px] overflow-hidden group bg-blue-600 flex flex-col justify-center p-6 text-white text-center">
                <Zap className="mx-auto mb-2" size={24} />
                <p className="text-lg font-black uppercase leading-tight italic">Быстрая логистика</p>
              </div>
            </div>
          </div>
        </div>

        {/* СЕКЦИЯ: Пункт приема */}
        <div className="mb-32 bg-white rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.04)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                <MapPin size={16} className="animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest">Локация штаба</span>
              </div>
              
              <h2 className="text-5xl font-[950] uppercase italic tracking-tighter leading-tight mb-6">
                Пункт приема <br />
                <span className="text-blue-600">гуманитарной помощи</span>
              </h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex flex-col border-l-4 border-blue-600 pl-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Адрес в Краснодаре:</span>
                  <p className="text-3xl font-bold text-[#1A1C20] leading-tight">
                    ул. Айвазовского 44 <br /> 
                    <span className="text-slate-400 font-medium">/ Свободная 45</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <a href="tel:+79288818811" className="group flex flex-col p-4 rounded-3xl bg-slate-50 hover:bg-blue-600 transition-all">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-100 mb-2">Куратор 1</span>
                      <span className="text-xl font-black group-hover:text-white flex items-center gap-2">
                        <Phone size={18} /> 8 928 881-88-11
                      </span>
                   </a>
                   <a href="tel:+79184340008" className="group flex flex-col p-4 rounded-3xl bg-slate-50 hover:bg-blue-600 transition-all">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-100 mb-2">Куратор 2</span>
                      <span className="text-xl font-black group-hover:text-white flex items-center gap-2">
                        <Phone size={18} /> 8 918 434-00-08
                      </span>
                   </a>
                </div>
              </div>

              <a 
                href="https://yandex.ru/maps/?text=Краснодар+Айвазовского+44" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#1A1C20] text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl active:scale-95 group"
              >
                Проложить маршрут <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div 
              onClick={() => setSelectedImage('/images/punkt_priema.webp')}
              className="relative h-[450px] rounded-[40px] overflow-hidden border-8 border-slate-50 shadow-2xl group cursor-zoom-in"
            >
              <Image 
                src="/images/punkt_priema.webp" 
                alt="Пункт приема Краснодар" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
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
            icon={<ShieldCheck size={32} />}
            title="Миссии"
            desc="Сборы спецсредств, гуманитарные конвои и отчеты из зон выполнения задач."
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

      {/* ВСПЛЫВАЮЩЕЕ ОКНО (MODAL) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={48} />
          </button>
          
          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center animate-in zoom-in-95 duration-300">
            <Image 
              src={selectedImage} 
              alt="Увеличенное изображение" 
              fill
              className="object-contain rounded-xl shadow-2xl"
              unoptimized
              priority
            />
          </div>
        </div>
      )}
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