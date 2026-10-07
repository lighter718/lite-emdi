import React, { useState, useEffect } from 'react';
import { FiLayers, FiDollarSign, FiZap, FiArrowUpRight, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

// Import 3 Gambar Lokal dari folder assets/images/
import heroImg1 from '../../assets/images/meeting2.webp';
import heroImg2 from '../../assets/images/meeting.webp';
import heroImg3 from '../../assets/images/meeting3.webp';

export const Hero: React.FC = () => {
  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20ingin%20Konsultasi%20Gratis";

  // Array gambar slider
  const images = [heroImg1, heroImg2, heroImg3];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide bergantian secara smooth tiap 4 detik
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative bg-[#052752] text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800/80">
      
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FCD816]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            
            {/* Tagline Badge Minimalis */}
            <div className="inline-flex items-center gap-2 bg-[#FCD816]/10 border border-[#FCD816]/20 px-3.5 py-1 rounded-full">
              
              <span className="text-[#FCD816] font-mono text-xs font-semibold uppercase tracking-widest">
                Integrated Digital Media Ecosystem
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-[1.18] tracking-tight">
              Ekosistem Media Digital UMKM:{' '}
              <span className="text-[#FCD816]">Bantu Bisnis Naik Level</span> Dari Nol Sampai Cuan
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Solusi pemasaran dan teknologi digital berkinerja tinggi. Kami siap kelola strategi branding, marketing, hingga penjualan bisnismu!
            </p>

            {/* 3 Pillar Editorial Items */}
            <div className="grid grid-cols-3 gap-4 pt-2 pb-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="pl-3 border-l-2 border-[#FCD816]">
                <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                  <FiLayers className="text-[#FCD816] text-base" />
                  <span>Integrated</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Satu Pintu</p>
              </div>

              <div className="pl-3 border-l-2 border-slate-700">
                <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                  <FiDollarSign className="text-emerald-400 text-base" />
                  <span>Terjangkau</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Ramah UMKM</p>
              </div>

              <div className="pl-3 border-l-2 border-slate-700">
                <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                  <FiZap className="text-[#FCD816] text-base" />
                  <span>Hasil Cepat</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Terukur & Presisi</p>
              </div>
            </div>

            {/* CTA Section (Clean Solid White di Mobile & Desktop) */}
            <div className="pt-2 space-y-4">
              <a 
                href={waUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-white hover:bg-[#FCD816] text-[#052752] font-extrabold text-sm px-8 py-4 rounded-full border border-white transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(252,216,22,0.4)] transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <FiMessageSquare className="text-base text-[#052752]" />
                <span>Mulai Konsultasi Gratis</span>
                <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <p className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Respons cepat langsung oleh Human Sales Executive.</span>
              </p>
            </div>

          </div>

          {/* Right Visual Carousel 3 Foto */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden bg-slate-900 shadow-2xl group border border-slate-800"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Hero Slide ${index + 1}`} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Gradient Overlay bawah gambar */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#052752] via-transparent to-transparent z-10 pointer-events-none opacity-80" />

                {/* Tombol Panah Navigasi */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#FCD816] hover:text-[#052752] cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <FiChevronLeft className="text-lg" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#FCD816] hover:text-[#052752] cursor-pointer"
                  aria-label="Next Slide"
                >
                  <FiChevronRight className="text-lg" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentSlide ? 'w-6 bg-[#FCD816]' : 'w-1.5 bg-white/40'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-4 z-20 text-left">
                  <p className="text-[10px] text-[#FCD816] font-mono font-bold uppercase tracking-wider">LITE EMDI ECOSYSTEM</p>
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