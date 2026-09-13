import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const FAQSection: React.FC = () => {
  const { isDark } = useTheme();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="px-4 sm:px-6 py-14 max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col text-left mb-6">
        <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 ${
          isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
        }`}>
          Knowledge Base
        </span>
        <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
          isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
        }`}>
          Frequently Asked Questions
        </h2>
        <p className={`font-sans text-sm mt-1.5 leading-relaxed ${
          isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
        }`}>
          Transparent answers regarding our neural models, acoustic science, and privacy guarantees.
        </p>
      </div>

      {/* Accordion list */}
      <div className="flex flex-col gap-2.5">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-xl overflow-hidden border transition-all ${
                isDark
                  ? 'bg-[#132030] border-white/[0.04]'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className={`w-full p-4 text-left flex justify-between items-center font-headline text-sm sm:text-base font-semibold transition-colors cursor-pointer ${
                  isDark
                    ? 'text-[#d6e4f9] hover:text-[#69e0ff]'
                    : 'text-[#0c1929] hover:text-[#0284c7]'
                }`}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 shrink-0 ml-2 ${
                    isOpen ? (isDark ? 'rotate-180 text-[#69e0ff]' : 'rotate-180 text-[#0284c7]') : (isDark ? 'text-[#869397]' : 'text-slate-400')
                  }`}
                />
              </button>
              {isOpen && (
                <div className={`px-4 pb-4 font-sans text-xs sm:text-sm leading-relaxed border-t pt-3 text-left ${
                  isDark
                    ? 'text-[#bbc9cd] border-white/[0.03]'
                    : 'text-slate-600 border-slate-100'
                }`}>
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
