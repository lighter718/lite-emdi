import React from 'react';
import { FiLayers, FiDollarSign, FiZap, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Hero: React.FC = () => {
  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20ingin%20Konsultasi%20Gratis";

  return (
    <section className="relative bg-[#052752] text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Tag (Tanpa Icon & Tanpa Titik Bulat) */}
            

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-[1.18] tracking-tight">
              Ekosistem Media Digital Integrated UMKM:{' '}
              <span className="text-[#FCD816]">Bantu Bisnis Naik Level</span> Dari Nol Sampai Cuan
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Solusi pemasaran dan teknologi digital berkinerja tinggi. Kami siap kelola strategi branding, marketing, hingga penjualan bisnismu!
            </p>

            {/* 3 Pillar Icons */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
                <FiLayers className="text-[#FCD816] text-xl mb-1" />
                <p className="text-xs font-bold text-white">Integrated</p>
                <p className="text-[10px] text-slate-400">Satu Pintu</p>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
                <FiDollarSign className="text-emerald-400 text-xl mb-1" />
                <p className="text-xs font-bold text-white">Terjangkau</p>
                <p className="text-[10px] text-slate-400">Ramah UMKM</p>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
                <FiZap className="text-[#FCD816] text-xl mb-1" />
                <p className="text-xs font-bold text-white">Hasil Cepat</p>
                <p className="text-[10px] text-slate-400">Terukur</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 space-y-3">
              <a 
                href={waUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#FCD816] hover:bg-yellow-400 text-[#052752] font-extrabold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#FCD816]/20 cursor-pointer group"
              >
                <FaWhatsapp className="text-xl" />
                <span>KONSULTASI GRATIS VIA WHATSAPP</span>
                <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-1.5">
                <span>Respons cepat langsung oleh Human Sales Executive.</span>
              </p>
            </div>

          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 p-2 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" 
                  alt="Pemilik UMKM" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052752] via-[#052752]/20 to-transparent" />
              </div>

              {/* Overlay Stat */}
              <div className="p-3 text-left flex items-center justify-between border-t border-slate-800">
                <div>
                  <p className="text-[10px] text-[#FCD816] font-bold uppercase tracking-wider">LITE EMDI ECOSYSTEM</p>
                  <p className="text-xs font-bold text-white">Solusi Digital Lengkap untuk UMKM</p>
                </div>
            
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};