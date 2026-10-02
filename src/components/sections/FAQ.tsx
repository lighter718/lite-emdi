import React, { useState } from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default item pertama terbuka

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "Apakah ada biaya tersembunyi selain harga paket?",
      answer: "Tidak ada. Semua harga yang tercantum bersifat transparan dan sudah mencakup inklusi yang tertera.",
    },
    {
      question: "Bagaimana jika saya bingung memilih paket yang cocok?",
      answer: "Anda bisa langsung berkonsultasi gratis dengan Sales Executive kami via WhatsApp untuk menganalisis kebutuhan bisnismu terlebih dahulu.",
    },
    {
      question: "Berapa lama proses pengerjaannya?",
      answer: "Eksekusi dilakukan secara cepat tepat setelah sesi diskusi dan kesepakatan paket selesai.",
    },
  ];

  const waUrl = "https://wa.me/6287894942351?text=Halo%20Lite%20EMDI,%20saya%20ingin%20konsultasi%20mengenai%20paket%20layanan";

  return (
    <section id="faq" className="relative bg-[#052752] text-white py-20 lg:py-28 border-b border-slate-800 overflow-hidden">
      
      {/* Background Ambient Spotlights (Glow Halus Emas & Biru) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FCD816]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FCD816] text-[#052752] px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-widest shadow-md">
            <FiHelpCircle className="text-sm" />
            <span>FAQ</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Jawaban cepat untuk hal-hal yang sering ditanyakan sebelum memulai.
          </p>
        </div>

        {/* FAQ Accordion List (3 Questions) */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-800/90 border-[#FCD816] shadow-[0_0_25px_rgba(252,216,22,0.12)]'
                    : 'bg-slate-800/40 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800/60'
                }`}
              >
                {/* Accordion Header / Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-white pr-2 flex items-center gap-2">
                    <span className="text-[#FCD816] font-extrabold">Q:</span>
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#FCD816] text-[#052752] rotate-180'
                        : 'bg-slate-700/60 text-[#FCD816]'
                    }`}
                  >
                    <FiChevronDown className="text-lg" />
                  </div>
                </button>

                {/* Accordion Body / Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 sm:p-6 pt-0 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-700/50 mt-1 flex items-start gap-2">
                      <span className="text-[#FCD816] font-bold text-base">A:</span>
                      <span>{item.answer}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-12 text-center bg-slate-800/50 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="font-bold text-base sm:text-lg text-white">Masih Ada Pertanyaan Lain?</h3>
            <p className="text-xs sm:text-sm text-slate-300">Konsultasikan langsung kebutuhan bisnismu secara gratis.</p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#FCD816] hover:bg-yellow-400 text-[#052752] font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#FCD816]/20 flex-shrink-0 cursor-pointer"
          >
            <FaWhatsapp className="text-lg" />
            <span>Tanyakan via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};