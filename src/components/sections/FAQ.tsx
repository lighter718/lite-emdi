import React from 'react';
import { FAQS } from '../../data/landingData';
import { FAQItem } from '../ui/FAQItem';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#052752]">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="w-20 h-1.5 bg-[#FCD816] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>

      </div>
    </section>
  );
};