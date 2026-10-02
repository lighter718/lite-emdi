import React from 'react';

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
      {/* Full Photo Feed, Tanpa Grid Card, Tulisan Overlay Halus        */}
      {/* ------------------------------------------------------------- */}
      <div className="block sm:hidden space-y-8 relative z-10">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            key={`mobile-${item.id}`}
            className="relative w-full overflow-hidden"
          >
            {/* Foto Full Size */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover"
            />

            {/* Overlay Gradasi Gelap di Bawah Foto + Tulisan */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#052752] via-[#052752]/80 to-transparent pt-12 pb-5 px-6">
              <span className="text-[11px] font-extrabold text-[#FCD816] uppercase tracking-wider block mb-1 drop-shadow-sm">
                {item.category}
              </span>
              <h3 className="font-display font-bold text-xl text-white drop-shadow-md">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. TAMPILAN DESKTOP & TABLET (hidden sm:block)                */}
      {/* Tetap menggunakan animasi Infinite Marquee                     */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden sm:block relative w-full overflow-hidden py-24">
        
        {/* Soft Vignette Mask Overlay */}
        <div className="absolute top-0 left-0 w-24 sm:w-48 h-full bg-gradient-to-r from-[#052752] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 sm:w-48 h-full bg-gradient-to-l from-[#052752] to-transparent z-20 pointer-events-none" />

        {/* Moving Track */}
        <div className="animate-marquee gap-6 sm:gap-8 px-4">
          {duplicatedItems.map((item, index) => (
            <div
              key={`desktop-${item.id}-${index}`}
              className="relative w-[360px] lg:w-[420px] h-[270px] rounded-2xl group border border-slate-700/60 shadow-2xl bg-slate-900 flex-shrink-0 cursor-pointer transition-all duration-300 z-10 hover:z-50"
            >
              {/* Kartu Utama */}
              <div className="w-full h-full rounded-2xl overflow-hidden group-hover:overflow-visible transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:w-auto group-hover:h-auto group-hover:max-w-[480px] group-hover:max-h-[420px] group-hover:scale-110 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] group-hover:border-2 group-hover:border-[#FCD816] group-hover:rounded-2xl group-hover:z-30"
                />
              </div>

              {/* Overlay Text & Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#052752]/90 via-[#052752]/20 to-transparent opacity-90 group-hover:opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none z-20">
                <span className="text-[11px] font-extrabold text-[#FCD816] uppercase tracking-wider mb-1 drop-shadow-md">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};