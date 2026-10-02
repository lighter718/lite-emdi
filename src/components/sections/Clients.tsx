import React from 'react';

// Import logo/gambar klien dari folder assets/images/
import client1 from '../../assets/images/ardan.png';
import client2 from '../../assets/images/auto.png';
import client3 from '../../assets/images/ini.png';
import client4 from '../../assets/images/nacific.png';
import client5 from '../../assets/images/Orson.png';
import client6 from '../../assets/images/padimas.png'; 
import client7 from '../../assets/images/pw.png';
import client8 from '../../assets/images/wuling.png';

const CLIENTS = [
  { id: 1, name: 'Ardan Radio', logo: client1 },
  { id: 2, name: 'Auto2000', logo: client2 },
  { id: 3, name: 'Ini', logo: client3 },
  { id: 4, name: 'Nacific', logo: client4 },
  { id: 5, name: 'Orson', logo: client5 },
  { id: 6, name: 'Padimas', logo: client6 },
  { id: 7, name: 'PW', logo: client7 },
  { id: 8, name: 'Wuling Motors', logo: client8 },
];

export const Clients: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#031936] border-t border-b border-slate-800/80 relative overflow-hidden">
      {/* Background Ambient Glow Halus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#FCD816]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header / Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#FCD816] mb-3">
            Trusted Partners
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Dipercaya Oleh Berbagai Brand & UMKM Berkembang
          </h3>
        </div>

        {/* Grid Clean Client Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 sm:gap-6 items-center justify-items-center">
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="group relative flex items-center justify-center w-full h-20 sm:h-24 lg:h-28 cursor-pointer p-2"
            >
              {/* Lingkaran Light Spotlight Soft di Belakang Logo (Khusus Mobile) */}
              <div className="absolute w-16 h-16 rounded-full bg-[#FCD816]/10 border border-[#FCD816]/20 blur-[2px] sm:hidden pointer-events-none" />

              {/* Logo Klien */}
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain relative z-10 transition-all duration-300
                  /* Mobile Style: Full Color, Tanpa Drop Shadow Terlalu Terang */
                  grayscale-0 opacity-90 drop-shadow-sm
                  /* Desktop / Tablet Style Override */
                  sm:filter sm:grayscale sm:opacity-50 sm:brightness-125 
                  sm:group-hover:grayscale-0 sm:group-hover:opacity-100 sm:group-hover:brightness-100 sm:group-hover:scale-110 sm:group-hover:drop-shadow-[0_0_18px_rgba(252,216,22,0.45)]"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};