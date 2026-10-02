import React from 'react';
import { FiCheck, FiStar, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Pricing: React.FC = () => {
  const waBaseUrl = "https://wa.me/6287894942351?text=";

  const plans = [
    {
      name: "CS AI System",
      badge: "OTOMATISASI CHAT 24/7",
      price: "Rp 299.000",
      normalPrice: "Rp 423.000",
      features: [
        "Pemasangan CS / Sales AI 24 Jam",
        "Sudah termasuk Credit AI",
        "Otomatisasi balasan chat & respons toko",
      ],
      popular: false,
      ctaText: "Pilih Paket CS AI",
      waText: "Halo Lite EMDI, saya mau pilih Paket CS AI System (Rp 299.000)",
    },
    {
      name: "Digital Marketing UMKM",
      badge: "SPECIAL PROMO — MOST POPULAR",
      price: "Rp 1.500.000",
      normalPrice: "Rp 2.000.000",
      features: [
        "Pembuatan Konten (5 Foto + 5 Video)",
        "Market Research, Branding & Selling Strategy",
        "Sudah Termasuk Budget Iklan Rp 300.000",
      ],
      popular: true,
      ctaText: "Pilih Paket Marketing",
      waText: "Halo Lite EMDI, saya mau pilih Paket Digital Marketing UMKM (Rp 1.500.000)",
    },
    {
      name: "Campaign Affiliate MCN",
      badge: "BOOST SALES",
      price: "Rp 1.500.000",
      normalPrice: "Rp 2.000.000",
      features: [
        "Pencarian & Manajemen 30 Affiliate Creator",
        "Briefing & Penyusunan Arahan Konten",
        "Monitoring, Evaluasi & Laporan Performa",
      ],
      popular: false,
      ctaText: "Pilih Paket Affiliate",
      waText: "Halo Lite EMDI, saya mau pilih Paket Campaign Affiliate MCN (Rp 1.500.000)",
    },
    {
      name: "Digital Marketing AI",
      badge: "BEST VALUE",
      price: "Rp 1.500.000",
      normalPrice: "Rp 1.800.000",
      features: [
        "Pembuatan 15 Konten Foto AI",
        "Manajemen 5 Affiliator/Influencer Visit",
        "Strategi Iklan & Budget Iklan Rp 300.000",
      ],
      popular: false,
      ctaText: "Pilih Paket Marketing AI",
      waText: "Halo Lite EMDI, saya mau pilih Paket Digital Marketing AI (Rp 1.500.000)",
    },
  ];

  return (
    <section id="layanan" className="relative bg-[#052752] text-white py-20 lg:py-28 border-b border-slate-800 overflow-hidden">
      
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FCD816]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Pilih Paket Layanan Sesuai Kebutuhan Bisnismu
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Harga transparan, hemat hingga 50%, tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Grid 4 Kartu Paket Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-slate-800 to-[#052752] border-2 border-[#FCD816] shadow-[0_0_30px_rgba(252,216,22,0.15)] transform lg:-translate-y-2'
                  : 'bg-slate-800/50 border border-slate-700/80 hover:border-slate-600 hover:bg-slate-800/70'
              }`}
            >
              {/* Badge Top Card */}
              <div className="mb-4">
                <span
                  className={`inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                    plan.popular
                      ? 'bg-[#FCD816] text-[#052752] shadow-md'
                      : 'bg-slate-700/80 text-[#FCD816] border border-slate-600'
                  }`}
                >
                  {plan.popular && <FiStar className="fill-current text-xs" />}
                  {plan.badge}
                </span>
              </div>

              <div>
                {/* Title & Price */}
                <h3 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-center">
                  {plan.name}
                </h3>

                <div className="border-b border-slate-700/60 pb-5 mb-5">
                  <p className="text-xs text-slate-400 line-through mb-1">
                    Harga Normal {plan.normalPrice}
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-[#FCD816] tracking-tight">
                    {plan.price}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-[#FCD816]/20 text-[#FCD816] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="text-[10px] font-bold" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={`${waBaseUrl}${encodeURIComponent(plan.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md ${
                  plan.popular
                    ? 'bg-[#FCD816] hover:bg-yellow-400 text-[#052752] shadow-[#FCD816]/20'
                    : 'bg-slate-700/80 hover:bg-slate-600 text-white border border-slate-600'
                }`}
              >
                <FaWhatsapp className="text-base" />
                <span>{plan.ctaText}</span>
                <FiArrowRight className="text-sm" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};