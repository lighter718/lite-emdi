import React from 'react';
import { FiXCircle, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { PAIN_POINTS } from '../../data/landingData';

export const ProblemSolution: React.FC = () => {
  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20tidak%20ingin%20bisnis%20saya%20stagnan.%20Mohon%20info%20konsultasi";

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
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FCD816]/15 border border-[#FCD816]/40 px-4 py-1.5 rounded-full mb-6">
                <span className="text-[#FCD816] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
                  Saatnya Melangkah Maju
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                Jangan Biarkan Bisnismu <span className="text-[#FCD816] underline decoration-[#FCD816]/40 underline-offset-8">Stagnan</span> di Tempat!
              </h2>

              <p className="mt-6 text-slate-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">
                Setiap hari tanpa strategi digital yang tepat adalah kesempatan pasar yang diambil kompetitor. Yuk, akselerasi branding dan penjualan bisnismu sekarang!
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

            {/* Right CTA Button */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FCD816] hover:bg-yellow-400 text-[#052752] font-extrabold text-base sm:text-lg px-8 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FCD816]/30 group cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                <span>Konsultasi Sekarang</span>
                <FiArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-xs text-slate-400 font-medium text-center lg:text-right">
                Gratis Diskusi & Konsultasi Awal
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};