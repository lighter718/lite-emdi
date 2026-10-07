import React from 'react';
import { FiArrowUpRight, FiMessageSquare } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20siap%20konsultasi%20sekarang";

  return (
    <footer className="bg-[#020b18] text-slate-300 py-16 border-t border-slate-800/80 pb-28 sm:pb-16 relative overflow-hidden">
      
      {/* Glow Ambient Halus di Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#FCD816]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section - Cardless / Zero Box */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          
          

          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Siap Mentransformasi Skala <br />
            <span className="text-[#FCD816]">Pertumbuhan Bisnismu?</span>
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Diskusi terbuka tanpa komitmen. Mari bedah ekosistem digital bisnismu dan temukan strategi paling efisien bersama tim kami.
          </p>

          {/* Tombol Konsultasi Sleek & Minimalis */}
          <div className="pt-2">
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-[#FCD816] text-[#052752] font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[0_0_25px_rgba(252,216,22,0.3)] cursor-pointer group"
            >
              <FiMessageSquare className="text-base text-[#052752]" />
              <span>Mulai Konsultasi Gratis</span>
              <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright Line (Perbaikan Kontras & Kejelasan) */}
        <div className="pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-medium text-slate-300">
          <p className="text-center sm:text-left leading-relaxed">
            © 2026 <span className="text-white font-bold">Lite EMDI</span> —  <span className="text-slate-200">Lighter Media Group (LMG)</span>.
          </p>
          <p className="text-slate-400 font-semibold text-xs tracking-wider uppercase">
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};