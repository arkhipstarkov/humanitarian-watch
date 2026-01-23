import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"; // Импортируем наш новый компонент

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ГУМАНИТАРНЫЙ ДОЗОР | Платформа поддержки ветеранов",
  description: "Единая экосистема для реабилитации, социальной поддержки и координации помощи ветеранам.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#FDFDFF] text-[#1A1C20] min-h-screen flex flex-col`}
      >
        {/* Контент страницы */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Общий подвал для всех страниц */}
        <Footer />
      </body>
    </html>
  );
}