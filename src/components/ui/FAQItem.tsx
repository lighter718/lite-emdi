import React, { useState } from 'react';
import type { FAQItem as FAQItemType } from '../../types/landing';

interface FAQItemProps {
  faq: FAQItemType;
}

export const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 font-bold text-[#052752] bg-[#F4F7FA] flex justify-between items-center focus:outline-none"
      >
        <span>{faq.question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="p-5 text-slate-600 text-sm border-t border-slate-100 bg-white">
          {faq.answer}
        </div>
      )}
    </div>
  );
};