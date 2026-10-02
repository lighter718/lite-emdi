import React from 'react';
import { FiCheckSquare, FiMessageSquare, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Workflow: React.FC = () => {
  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20ingin%20konsultasi%203%20Langkah%20Bermitra";

  const steps = [
    {
      number: "01",
      title: "Pilih Paket",
      desc: "Tentukan layanan yang paling pas dengan skala usahamu.",
      icon: FiCheckSquare,
    },
    {
      number: "02",
      title: "Quick Demo & Diskusi",
      desc: "Hubungi Sales Executive kami via WhatsApp untuk demo singkat & konsultasi gratis.",
      icon: FiMessageSquare,
    },
    {
      number: "03",
      title: "Eksekusi & Cuan!",
      desc: "Tim Lite EMDI langsung bergerak mengeksekusi strategi digital bisnismu.",
      icon: FiTrendingUp,
    },
  ];

  return (
    <section id="cara-kerja" className="relative bg-[#052752] text-white py-20 lg:py-24 border-b border-slate-800 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FCD816]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block bg-[#FCD816] text-[#052752] px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-widest shadow-md">
            WORKFLOW
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Hanya 3 Langkah Mudah untuk Memulai
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            Proses simpel tanpa ribet, dari konsultasi awal hingga strategi bisnismu berjalan.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-800/50 border border-slate-700/80 rounded-2xl p-8 transition-all duration-300 hover:border-[#FCD816]/50 hover:bg-slate-800/80 hover:shadow-[0_0_25px_rgba(252,216,22,0.1)] group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-[#FCD816]/40 group-hover:text-[#FCD816] transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-700/60 text-[#FCD816] flex items-center justify-center text-xl border border-slate-600 group-hover:bg-[#FCD816] group-hover:text-[#052752] transition-all duration-300">
                    <IconComponent />
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#FCD816] hover:bg-yellow-400 text-[#052752] font-extrabold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#FCD816]/20 transform hover:-translate-y-1 cursor-pointer group"
          >
            <FaWhatsapp className="text-xl" />
            <span>Mulai Langkah Pertama Sekarang</span>
            <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};