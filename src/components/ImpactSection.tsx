import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ImpactSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className="px-4 sm:px-6 py-14 max-w-2xl mx-auto w-full">
      <div className="flex flex-col text-center items-center">
        <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 ${
          isDark ? 'text-[#40e18a]' : 'text-emerald-600'
        }`}>
          Human-Centric Impact
        </span>
        <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
          isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
        }`}>
          Voice can be cloned. Trust shouldn't be.
        </h2>
        <p className={`font-sans text-sm mt-1.5 max-w-md leading-relaxed ${
          isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
        }`}>
          As generative audio becomes indistinguishable from reality, VocaShield restores certainty to human dialogue.
        </p>

        <div className="grid grid-cols-2 gap-3 w-full mt-8 text-left">
          <div className={`p-4 rounded-xl border flex flex-col gap-1 transition-colors ${
            isDark
              ? 'bg-[#132030] border-white/[0.06] shadow-md'
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <span className="font-mono text-2xl sm:text-3xl text-[#40e18a] font-bold">99.2%</span>
            <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Synthetic Model Catch Rate
            </span>
          </div>

          <div className={`p-4 rounded-xl border flex flex-col gap-1 transition-colors ${
            isDark
              ? 'bg-[#132030] border-white/[0.06] shadow-md'
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <span className={`font-mono text-2xl sm:text-3xl font-bold ${isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'}`}>
              &lt; 120ms
            </span>
            <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Decision Inference Speed
            </span>
          </div>

          <div className={`p-4 rounded-xl border flex flex-col gap-1 transition-colors ${
            isDark
              ? 'bg-[#132030] border-white/[0.06] shadow-md'
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <span className="font-mono text-2xl sm:text-3xl text-[#40e18a] font-bold">0 Bytes</span>
            <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Speech Kept in Cloud
            </span>
          </div>

          <div className={`p-4 rounded-xl border flex flex-col gap-1 transition-colors ${
            isDark
              ? 'bg-[#132030] border-white/[0.06] shadow-md'
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <span className={`font-mono text-2xl sm:text-3xl font-bold ${isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'}`}>
              1.4M+
            </span>
            <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Deepfakes in Trainset
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
