// src/components/sections/About.tsx
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-16 lg:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Kolom Kiri: SIAPA KAMI? */}
          <div className="bg-[#F4F7FA] p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 transform transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="inline-block bg-[#052752] text-[#FCD816] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Profil
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#052752] leading-tight mb-6">
              SIAPA KAMI?
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 font-medium leading-relaxed space-y-4">
              <p>
                <strong className="text-[#052752]">Lite EMDI</strong> adalah ekosistem media digital terintegrasi yang dirancang khusus untuk <strong className="text-[#052752]">UMKM dan bisnis yang sedang berkembang</strong>.
              </p>
              <p>
                Kami memahami tantangan bisnis lokal dan startup. Oleh karena itu, kami hadir untuk membantu membangun, mengelola, dan mengembangkan kehadiran digital Anda melalui solusi yang <strong className="text-[#052752]">praktis, terjangkau, dan ramah kantong</strong>.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: APA YANG KAMI LAKUKAN? */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/30 transform transition-all hover:shadow-2xl hover:-translate-y-1">
             <div className="inline-block bg-[#FCD816] text-[#052752] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Layanan Utama
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#052752] leading-tight mb-6">
              APA YANG KAMI LAKUKAN?
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 font-medium leading-relaxed space-y-4">
              <p>
                Kami menghubungkan <strong className="text-[#052752]">strategi, konten, pemasaran digital, creator network, dan teknologi AI</strong> dalam satu ekosistem yang praktis.
              </p>
              <p>
                Mulai dari perencanaan strategi, pembuatan konten, <strong className="text-[#052752]">digital advertising</strong>, pengelolaan creator/affiliate, hingga <strong className="text-[#052752]">otomatisasi CS dengan AI</strong>, semuanya dirancang untuk membantu bisnis bekerja lebih efektif, menjangkau lebih banyak pelanggan, dan mendorong pertumbuhan serta penjualan.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};