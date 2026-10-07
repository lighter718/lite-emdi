import React from 'react';
import { FiZap, FiCheckSquare, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';

export const Workflow: React.FC = () => {
  const steps = [
    {
      phase: "Langkah 01",
      category: "// STRATEGI & SKALA",
      title: "Pilih Paket Layanan yang Tepat",
      description: "Tentukan opsi paket layanan yang paling presisi dengan kebutuhan bisnis, skala operasional, dan target pencapaian bisnismu tanpa biaya tersembunyi.",
      focus: "Targeting, Custom Plan, Resource Optimization",
      icon: FiCheckSquare,
      active: true,
    },
    {
      phase: "Langkah 02",
      category: "// KONSULTASI & DEMO",
      title: "Quick Demo & Diskusi Strategis",
      description: "Hubungi Sales Executive kami via WhatsApp untuk demo singkat, bedah ekosistem digital, serta konsultasi gratis mengenai arah eksekusi.",
      focus: "Interactive Demo, Strategy Alignment, Fast Onboarding",
      icon: FiMessageSquare,
      active: false,
    },
    {
      phase: "Langkah 03",
      category: "// EKSEKUSI & PERTUMBUHAN",
      title: "Eksekusi & Siap Hasilkan Cuan",
      description: "Tim ahli Lite EMDI langsung bergerak memproses dan mengeksekusi strategi digital bisnismu secara presisi hingga siap beroperasi penuh.",
      focus: "Full Implementation, Growth Acceleration, Real-time Review",
      icon: FiTrendingUp,
      active: false,
    },
  ];

  return (
    <section id="cara-kerja" className="relative bg-[#052752] text-white py-20 lg:py-28 border-b border-slate-800/80 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FCD816]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-20 space-y-4 border-l-2 border-[#FCD816] pl-6">
          <div className="inline-flex items-center gap-2 text-[#FCD816] font-mono text-xs font-bold uppercase tracking-widest">
            <FiZap className="text-sm" />
            <span>Workflow & Alur Kemitraan</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Perjalanan 3 Langkah <br className="hidden sm:inline" />
            <span className="text-[#FCD816]">Transformasi Digital</span> Bisnismu
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Proses kolaborasi yang ringkas, transparan, dan terarah dari titik awal konsultasi hingga strategi bisnismu siap mengudara.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12 lg:space-y-16">
          
          {/* Main Continuous Vertical Line */}
          <div className="absolute top-3 bottom-3 left-[11px] sm:left-[19px] w-[2px] bg-gradient-to-b from-[#FCD816] via-slate-700 to-slate-800" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={idx} className="relative group pl-6 sm:pl-8">
                
                {/* Glowing Node Circle on Line */}
                <div className={`absolute -left-[23px] sm:-left-[31px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  step.active 
                    ? 'bg-[#FCD816] border-[#FCD816] text-[#052752] shadow-[0_0_15px_rgba(252,216,22,0.6)]' 
                    : 'bg-[#052752] border-slate-600 text-slate-400 group-hover:border-[#FCD816] group-hover:text-[#FCD816]'
                }`}>
                  <IconComponent className="text-xs sm:text-sm" />
                </div>

                {/* Phase Tag & Sub-category */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="bg-[#FCD816] text-[#052752] font-black text-xs px-3 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                    {step.phase}
                  </span>
                  <span className="font-mono text-xs text-slate-400 font-semibold tracking-widest uppercase">
                    {step.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FCD816] transition-colors leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {step.description}
                </p>

                {/* Focus Area Footer Line */}
                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Focus Areas:</span>
                  <span className="font-mono text-slate-400">{step.focus}</span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};