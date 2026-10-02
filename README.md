# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
# Documentation - Hero Section Component (`src/components/sections/Hero.tsx`)

Dokumentasi ini merangkum pengembangan dan penyesuaian komponen **Hero Section** untuk landing page **Lite EMDI** (Ekosistem Media Digital Integrated UMKM).

---

## 📌 Ringkasan Komponen

Hero section menggunakan layout **2 Kolom (Teks Kiri + Visual Foto Kanan)** dengan nuansa *modern tech/digital agency*, dirancang khusus untuk meningkatkan konversi (*conversion rate*) audiens UMKM & Startup.

### Key Features:
1. **Top Tag / Badge Clean:** Teks bold `SPESIAL UNTUK UMKM & STARTUP` dengan latar warna kuning emas tanpa ikon dekoratif.
2. **Typography Kontras:** Highlight warna emas (`#FCD816`) pada kalimat kunci headline.
3. **Pilar Keunggulan (3 Value Cards):** Menggunakan ikon dari `react-icons/fi` (*Integrated*, *Terjangkau*, *Hasil Cepat*).
4. **Call to Action (CTA):** Tombol utama terintegrasi dengan WhatsApp API lengkap dengan ikon `FaWhatsapp` dan petunjuk ketersediaan tim Sales Executive.
5. **Visual Frame:** Foto profil UMKM/produk dengan border rapi, efek overlay gradient halus, dan *caption footer card* tanpa status badge tambahan.

---

## 🛠️ Dependensi Library

Pastikan proyek React Anda telah terinstall library ikon berikut:

```bash
npm install react-icons
# atau
yarn add react-icons

import React from 'react';
import { FiLayers, FiDollarSign, FiZap, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Hero: React.FC = () => {
  const waUrl = "[https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20ingin%20Konsultasi%20Gratis](https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20ingin%20Konsultasi%20Gratis)";

  return (
    <section className="relative bg-[#052752] text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Tag */}
            <div className="inline-block bg-[#FCD816] text-[#052752] px-3.5 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-md">
              SPESIAL UNTUK UMKM & STARTUP
            </div>

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
                <FiLayers className="text-[#FCD816] text-xl mb-1"/>
                <p className="text-xs font-bold text-white">Integrated</p>
                <p className="text-[10px] text-slate-400">Satu Pintu</p>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
                <FiDollarSign className="text-emerald-400 text-xl mb-1"/>
                <p className="text-xs font-bold text-white">Terjangkau</p>
                <p className="text-[10px] text-slate-400">Ramah UMKM</p>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
                <FiZap className="text-[#FCD816] text-xl mb-1"/>
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
                <FaWhatsapp className="text-xl"/>
                <span>KONSULTASI GRATIS VIA WHATSAPP</span>
                <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1"/>
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
                  src="[https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80)" 
                  alt="Pemilik UMKM" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052752] via-[#052752]/20 to-transparent" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="p-3 text-left border-t border-slate-800">
                <p className="text-[10px] text-[#FCD816] font-bold uppercase tracking-wider">LITE EMDI ECOSYSTEM</p>
                <p className="text-xs font-bold text-white">Solusi Digital Lengkap untuk UMKM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};