import React from 'react';
import { Smartphone, Cpu, ShieldCheck, ArrowRight, HardDrive, MicOff, CloudOff, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const PrivacySection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="privacy" className="px-4 sm:px-6 py-14 max-w-2xl mx-auto w-full">
      <div className="flex flex-col items-center text-center">
        {/* Header */}
        <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 ${
          isDark ? 'text-[#40e18a]' : 'text-emerald-600'
        }`}>
          Zero-Knowledge
        </span>
        <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
          isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
        }`}>
          Your conversations should stay yours.
        </h2>
        <p className={`font-sans text-sm mt-1.5 max-w-md leading-relaxed ${
          isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
        }`}>
          VocaShield is engineered with absolute cryptographic privacy. Speech is inspected in volatile RAM and immediately discarded.
        </p>

        {/* Visual Flow Diagram */}
        <div className={`w-full my-6 rounded-2xl p-4 sm:p-6 flex items-center justify-between relative border transition-colors duration-200 ${
          isDark
            ? 'bg-[#132030] border-white/[0.06] shadow-md'
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {/* Node 1 */}
          <div className="flex flex-col items-center gap-1.5 z-10">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs border ${
              isDark ? 'bg-[#1e2b3b] border-white/[0.08]' : 'bg-slate-100 border-slate-300'
            }`}>
              <Smartphone size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />
            </div>
            <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>Live Call</span>
          </div>

          <ArrowRight size={20} className={isDark ? "text-[#69e0ff] animate-pulse" : "text-[#0284c7] animate-pulse"} />

          {/* Node 2 */}
          <div className="flex flex-col items-center gap-1.5 z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#19c6e8] to-[#004e5d] text-[#061423] flex items-center justify-center shadow-lg shadow-[#19c6e8]/30">
              <Cpu size={22} className="text-white" />
            </div>
            <span className={`font-mono text-xs font-bold ${isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'}`}>Neural Engine</span>
          </div>

          <ArrowRight size={20} className="text-[#40e18a] animate-pulse" />

          {/* Node 3 */}
          <div className="flex flex-col items-center gap-1.5 z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#40e18a] to-[#00391d] text-white flex items-center justify-center shadow-lg shadow-[#40e18a]/30">
              <ShieldCheck size={24} className="text-white" />
            </div>
            <span className="font-mono text-xs text-[#40e18a] font-bold">Risk Score</span>
          </div>
        </div>

        {/* 4 Trust Badges */}
        <div className="grid grid-cols-2 gap-2.5 w-full text-left">
          <div className={`p-3 rounded-xl flex items-center gap-2.5 border transition-colors ${
            isDark ? 'bg-[#1e2b3b]/40 border-white/[0.04]' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <HardDrive size={20} className="text-[#40e18a] shrink-0" />
            <span className={`font-mono text-xs font-semibold ${isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}`}>
              100% On-Device
            </span>
          </div>

          <div className={`p-3 rounded-xl flex items-center gap-2.5 border transition-colors ${
            isDark ? 'bg-[#1e2b3b]/40 border-white/[0.04]' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <MicOff size={20} className="text-[#40e18a] shrink-0" />
            <span className={`font-mono text-xs font-semibold ${isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}`}>
              Zero Audio Saved
            </span>
          </div>

          <div className={`p-3 rounded-xl flex items-center gap-2.5 border transition-colors ${
            isDark ? 'bg-[#1e2b3b]/40 border-white/[0.04]' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <CloudOff size={20} className="text-[#40e18a] shrink-0" />
            <span className={`font-mono text-xs font-semibold ${isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}`}>
              No Cloud Uplink
            </span>
          </div>

          <div className={`p-3 rounded-xl flex items-center gap-2.5 border transition-colors ${
            isDark ? 'bg-[#1e2b3b]/40 border-white/[0.04]' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <Shield size={20} className="text-[#40e18a] shrink-0" />
            <span className={`font-mono text-xs font-semibold ${isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}`}>
              Volatile RAM Purge
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
