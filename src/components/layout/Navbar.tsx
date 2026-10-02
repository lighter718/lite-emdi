import React from 'react';

export const Navbar: React.FC = () => {
  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20ingin%20konsultasi";

  // Fungsi Animasi Smooth Scroll Kustom (Duration-based Ease-InOut)
  const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    // Easing Function (Ease In-Out Quad) untuk gerakan meluncur mulus
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
    smoothScrollTo(0, 800);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarOffset = 80; // tinggi navbar sticky
      const elementPosition = element.getBoundingClientRect().top;
      const targetPosition = elementPosition + window.pageYOffset - navbarOffset;

      // Jalankan animasi kustom selama 800ms (0.8 detik)
      smoothScrollTo(targetPosition, 800);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#052752]/95 backdrop-blur-md border-b border-slate-700/50 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo - Klik untuk kembali ke paling atas */}
        <a 
          href="#"
          onClick={handleScrollToTop}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div>
            <div className="font-display font-bold text-lg lg:text-xl leading-tight tracking-wide text-white group-hover:opacity-90 transition-opacity">
              LITE <span className="text-[#FCD816]">EMDI</span>
            </div>
            <p className="text-[10px] text-slate-300 tracking-wider font-medium uppercase">
              Powered by Lighter Media Group (LMG)
            </p>
          </div>
        </a>

        {/* Menu Navigasi */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-200">
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

        {/* Header Button */}
        <a 
          href={waUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FCD816] hover:bg-yellow-400 text-[#052752] font-bold px-4 py-2.5 rounded-full text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#FCD816]/20"
        >
          <span>Konsultasi WA</span>
          <span className="font-extrabold">+62 878-9494-2351</span>
        </a>

      </div>
    </header>
  );
};