import React from 'react';
import type { PricingPlan } from '../../types/landing';

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const waUrl = `https://wa.me/6287894942351?text=${encodeURIComponent(plan.waMessage)}`;

  return (
    <div className={`bg-white rounded-2xl p-6 flex flex-col justify-between transition-all ${
      plan.isPopular 
        ? 'border-2 border-[#FCD816] shadow-2xl relative transform hover:-translate-y-1' 
        : 'border border-slate-200 shadow-md hover:shadow-xl'
    }`}>
      
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FCD816] text-[#052752] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
          {plan.badge}
        </div>
      )}

      <div>
        {!plan.isPopular && (
          <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            {plan.badge}
          </span>
        )}
        
        <h3 className={`font-bold text-xl text-[#052752] mb-2 ${plan.isPopular ? 'mt-2' : ''}`}>
          {plan.title}
        </h3>
        
        <div className="mb-6">
          <div className="text-2xl font-black text-[#052752]">{plan.price}</div>
          <div className="text-xs text-slate-400 line-through">{plan.normalPrice}</div>
        </div>

        <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-slate-100 pt-4">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a 
        href={waUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`w-full text-center font-extrabold py-3 rounded-xl transition-all text-sm shadow-sm ${
          plan.isPopular 
            ? 'bg-[#FCD816] hover:bg-yellow-400 text-[#052752]' 
            : 'bg-[#052752] hover:bg-slate-900 text-white'
        }`}
      >
        {plan.buttonText}
      </a>
    </div>
  );
};