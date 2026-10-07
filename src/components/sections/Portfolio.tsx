import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

// Import gambar portofolio
import porto1 from '../../assets/images/all-day.webp';
import porto2 from '../../assets/images/baju-tasogare.jpeg';
import porto3 from '../../assets/images/bubur.webp';
import porto4 from '../../assets/images/keripik-tempe.jpeg';
import porto5 from '../../assets/images/la-flyderm.jpeg';
import porto6 from '../../assets/images/chimpinro.jpeg';

const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Branding & Visual UMKM', category: 'Social Media Marketing', image: porto1 },
  { id: 2, title: 'Website E-Commerce', category: 'Web Development', image: porto2 },
  { id: 3, title: 'Digital Ads Campaign', category: 'Performance Marketing', image: porto3 },
  { id: 4, title: 'AI Customer Service System', category: 'Automation Tech', image: porto4 },
  { id: 5, title: 'Content Creator Network', category: 'Influencer Marketing', image: porto5 },
  { id: 6, title: 'E-Commerce Strategy', category: 'Digital Marketing', image: porto6 },
];

export const Portfolio: React.FC = () => {
  const duplicatedItems = [...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS];
  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20ingin%20melihat%20portofolio%20lainnya";

  return (
    <section id="portofolio" className="py-16 lg:py-28 bg-[#052752] text-white overflow-hidden scroll-mt-24 relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#FCD816]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center relative z-10">
        <div className="inline-block bg-[#FCD816]/15 border border-[#FCD816]/30 text-[#FCD816] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Hasil Kerja & Project
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Portofolio Karya <span className="text-[#FCD816]">LITE EMDI</span>
        </h2>
        <p className="mt-4 text-slate-300 font-medium text-base sm:text-lg max-w-2xl mx-auto">
          Intip beberapa hasil karya branding, strategi konten, dan ekosistem digital yang telah membantu pertumbuhan bisnis klien kami.
        </p>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1. TAMPILAN KHUSUS MOBILE (block sm:hidden)                   */}
      {/* Full Photo Feed, Tanpa Tulisan Overlay                        */}
      {/* ------------------------------------------------------------- */}
      <div className="block sm:hidden space-y-8 relative z-10 px-4">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            key={`mobile-${item.id}`}
            className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-slate-900 border border-slate-700/60"
          >
            {/* Foto Full Size */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. TAMPILAN DESKTOP & TABLET (hidden sm:block)                */}
      {/* Animasi Infinite Marquee & Efek Pop-Out Hover Utuh            */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden sm:block relative w-full overflow-hidden py-24">
        
        {/* Soft Vignette Mask Overlay */}
        <div className="absolute top-0 left-0 w-24 sm:w-48 h-full bg-gradient-to-r from-[#052752] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 sm:w-48 h-full bg-gradient-to-l from-[#052752] to-transparent z-20 pointer-events-none" />

        {/* Moving Track */}
        <div className="animate-marquee gap-6 sm:gap-8 px-4 flex">
          {duplicatedItems.map((item, index) => (
            <div
              key={`desktop-${item.id}-${index}`}
              className="relative w-[360px] lg:w-[420px] h-[270px] rounded-2xl group border border-slate-700/60 shadow-2xl bg-slate-900 flex-shrink-0 cursor-pointer transition-all duration-300 z-10 hover:z-50"
            >
              {/* Kartu Utama dengan Efek Pop-Out */}
              <div className="w-full h-full rounded-2xl overflow-hidden group-hover:overflow-visible transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:w-auto group-hover:h-auto group-hover:max-w-[480px] group-hover:max-h-[420px] group-hover:scale-110 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] group-hover:border-2 group-hover:border-[#FCD816] group-hover:rounded-2xl group-hover:z-30"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. BOTTOM CALL TO ACTION (CTA)                                 */}
      {/* ------------------------------------------------------------- */}
      <div className="mt-10 sm:mt-14 text-center max-w-2xl mx-auto px-4 relative z-10">
        <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white font-display">
            Tertarik melihat portofolio kami yang lain?
          </h3>
          
          <div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#FCD816] hover:bg-yellow-400 text-[#052752] font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-[#FCD816]/15 hover:scale-105 group cursor-pointer"
            >
              <FaWhatsapp className="text-xl" />
              <span>HUBUNGI KAMI SEKARANG</span>
              <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};