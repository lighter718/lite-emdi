import React from 'react';

export const Footer: React.FC = () => {
  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20siap%20konsultasi%20sekarang";

  return (
    <footer className="bg-[#031733] text-slate-400 py-12 border-t border-slate-800 pb-24 sm:pb-12">
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-[#052752] to-slate-900 border border-[#FCD816]/40 rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-4">
            Siap Bikin Bisnismu Naik Level & Cuan Dari Nol?
          </h3>
          <a 
            href={waUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FCD816] hover:bg-yellow-400 text-[#052752] font-extrabold px-6 py-3 rounded-xl text-sm transition-all transform hover:scale-105 shadow-lg"
          >
            <span>KONSULTASI GRATIS SEKARANG VIA WHATSAPP</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-400">
        <p>© 2026 Lite EMDI — Second Brand of Lighter Media Group (LMG). All Rights Reserved.</p>
      </div>
    </footer>
  );
};