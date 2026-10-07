import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronRight, FiArrowUpRight, FiMessageSquare } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20ingin%20konsultasi";

  // Fungsi Animasi Smooth Scroll Kustom (Duration-based Ease-InOut)
  const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // Handler Scroll ke Atas saat Logo diklik
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    smoothScrollTo(0, 800);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Tutup drawer mobile saat menu diklik
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const targetPosition = elementPosition + window.pageYOffset - navbarOffset;

      smoothScrollTo(targetPosition, 800);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#052752]/90 backdrop-blur-md border-b border-slate-700/50 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        
        {/* 1. LOGO */}
        <a 
          href="#"
          onClick={handleScrollToTop}
          className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
        >
          <div>
            <div className="font-display font-bold text-base sm:text-lg lg:text-xl leading-tight tracking-wide text-white group-hover:opacity-90 transition-opacity">
              LITE <span className="text-[#FCD816]">EMDI</span>
            </div>
            <p className="text-[8px] sm:text-[10px] text-slate-300 tracking-wider font-medium uppercase">
              Powered by Lighter Media Group (LMG)
            </p>
          </div>
        </a>

        {/* 2. DESKTOP NAV MENU */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm text-slate-200">
          <a 
            href="#layanan" 
            onClick={(e) => handleNavClick(e, 'layanan')}
            className="hover:text-[#FCD816] transition-all transform hover:scale-105 cursor-pointer"
          >
            Layanan & Harga
          </a>
          <a 
            href="#keunggulan" 
            onClick={(e) => handleNavClick(e, 'keunggulan')}
            className="hover:text-[#FCD816] transition-all transform hover:scale-105 cursor-pointer"
          >
            Keunggulan
          </a>
          <a 
            href="#cara-kerja" 
            onClick={(e) => handleNavClick(e, 'cara-kerja')}
            className="hover:text-[#FCD816] transition-all transform hover:scale-105 cursor-pointer"
          >
            Cara Kerja
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleNavClick(e, 'faq')}
            className="hover:text-[#FCD816] transition-all transform hover:scale-105 cursor-pointer"
          >
            FAQ
          </a>
        </nav>

        {/* 3. CTA BUTTON & HAMBURGER TOGGLE */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Tombol Konsultasi Minimalis */}
          <a 
            href={waUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white hover:bg-[#FCD816] text-[#052752] font-bold px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-[0_0_20px_rgba(252,216,22,0.3)] flex-shrink-0 group/btn cursor-pointer"
          >
            <FiMessageSquare className="text-xs sm:text-sm text-[#052752]"/>
            <span>Contact</span>
            <FiArrowUpRight className="text-xs sm:text-sm transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"/>
          </a>

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/80 text-white hover:text-[#FCD816] border border-slate-700/80 focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <FiX className="text-xl"/> : <FiMenu className="text-xl"/>}
          </button>

        </div>

      </div>

      {/* 4. DRAWER MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#052752] border-b border-slate-700/80 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <a 
            href="#layanan" 
            onClick={(e) => handleNavClick(e, 'layanan')}
            className="flex items-center justify-between p-3 rounded-xl text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-[#FCD816] transition-all"
          >
            <span>Layanan & Harga</span>
            <FiChevronRight className="text-slate-400 text-xs"/>
          </a>
          <a 
            href="#keunggulan" 
            onClick={(e) => handleNavClick(e, 'keunggulan')}
            className="flex items-center justify-between p-3 rounded-xl text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-[#FCD816] transition-all"
          >
            <span>Keunggulan</span>
            <FiChevronRight className="text-slate-400 text-xs"/>
          </a>
          <a 
            href="#cara-kerja" 
            onClick={(e) => handleNavClick(e, 'cara-kerja')}
            className="flex items-center justify-between p-3 rounded-xl text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-[#FCD816] transition-all"
          >
            <span>Cara Kerja</span>
            <FiChevronRight className="text-slate-400 text-xs"/>
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleNavClick(e, 'faq')}
            className="flex items-center justify-between p-3 rounded-xl text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-[#FCD816] transition-all"
          >
            <span>FAQ</span>
            <FiChevronRight className="text-slate-400 text-xs"/>
          </a>
        </div>
      )}
    </header>
  );
};