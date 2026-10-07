import React from 'react';
import { FiXCircle, FiCheck, FiTrendingUp, FiZap } from 'react-icons/fi';
import { PAIN_POINTS } from '../../data/landingData';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Problem */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#052752]">
            Sering Ngalamin Masalah Ini di Bisnismu?
          </h2>
          <div className="w-20 h-1.5 bg-[#FCD816] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Pain Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((point) => (
            <div 
              key={point.id} 
              className="p-8 rounded-2xl bg-red-50/50 border border-red-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-2xl font-bold mb-6">
                <FiXCircle />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Banner "Jangan Biarkan Bisnismu Stagnan" */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#052752] via-[#031b3a] to-[#010e21] text-white p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#052752]/40 border border-[#FCD816]/20 my-12">
          
          {/* Glowing Ambient Background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FCD816]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#052752] rounded-full blur-2xl pointer-events-none" />

          {/* Content Layout */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FCD816]/15 border border-[#FCD816]/40 px-4 py-1.5 rounded-full mb-6">
                <span className="text-[#FCD816] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
                  Saatnya Melangkah Maju
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                Jangan Biarkan Bisnismu <span className="text-[#FCD816] underline decoration-[#FCD816]/40 underline-offset-8">Stagnan</span> di Tempat!
              </h2>

              <p className="mt-6 text-slate-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">
                Setiap hari tanpa strategi digital yang tepat adalah kesempatan pasar yang diambil kompetitor. LITE EMDI hadir memberikan solusinya secara terukur.
              </p>

              {/* Value Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-slate-700/60 pt-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#FCD816]/20 text-[#FCD816] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    <FiCheck />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">Strategi Praktis</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#FCD816]/20 text-[#FCD816] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    <FiCheck />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">Biaya Terjangkau</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#FCD816]/20 text-[#FCD816] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    <FiCheck />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">Hasil Terukur</span>
                </div>
              </div>
            </div>

            {/* Right Side: Solution Statement Card (Menggantikan Tombol WA) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/80 border border-[#FCD816]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FCD816]/10 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-110" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FCD816]/20 text-[#FCD816] flex items-center justify-center text-xl font-bold">
                    <FiTrendingUp />
                  </div>
                  <span className="text-xs font-extrabold text-[#FCD816] uppercase tracking-wider">
                    Solusi Terintegrasi
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  Ubah Hambatan Menjadi Peluang Pertumbuhan
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Kami tidak sekadar membuat konten atau website, tapi merancang <span className="text-white font-semibold">ekosistem pemasaran digital</span> yang siap membawa bisnis Anda bersaing di level berikutnya.
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FCD816] bg-[#FCD816]/10 border border-[#FCD816]/20 px-3 py-1.5 rounded-lg">
                  <FiZap />
                  <span>100% Ekosistem Siap Jalan</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};