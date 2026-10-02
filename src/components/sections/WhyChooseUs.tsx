import React from 'react';
import { 
  HiOutlineSquaresPlus, 
  HiOutlineBanknotes, 
  HiOutlineAdjustmentsHorizontal, 
  HiOutlineCpuChip 
} from 'react-icons/hi2';
import { VALUE_PILLARS } from '../../data/landingData';

// Map icon ID dari landingData ke komponen react-icons
const getIcon = (id: string) => {
  switch (id) {
    case '1':
    case 'integrated':
      return <HiOutlineSquaresPlus className="w-6 h-6 text-[#052752]" />;
    case '2':
    case 'affordable':
      return <HiOutlineBanknotes className="w-6 h-6 text-[#052752]" />;
    case '3':
    case 'practical':
      return <HiOutlineAdjustmentsHorizontal className="w-6 h-6 text-[#052752]" />;
    case '4':
    case 'ai-human':
      return <HiOutlineCpuChip className="w-6 h-6 text-[#052752]" />;
    default:
      return <HiOutlineSquaresPlus className="w-6 h-6 text-[#052752]" />;
  }
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="keunggulan" className="py-16 lg:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#052752]">
            Mengapa Puluhan UMKM Memilih Lite EMDI?
          </h2>
          <div className="w-20 h-1.5 bg-[#FCD816] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PILLARS.map((pillar) => (
            <div 
              key={pillar.id} 
              className="p-6 rounded-2xl bg-[#F4F7FA] border border-slate-100 hover:border-[#052752]/20 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FCD816] flex items-center justify-center mb-4 shadow-md shadow-[#FCD816]/30 group-hover:scale-110 transition-transform">
                {getIcon(String(pillar.id))}
              </div>
              <h3 className="font-bold text-lg text-[#052752] mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};