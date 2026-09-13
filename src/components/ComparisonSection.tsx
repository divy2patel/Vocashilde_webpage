import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ComparisonSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className={`px-4 sm:px-6 py-14 border-y transition-colors duration-200 ${
      isDark ? 'bg-[#020f1e] border-white/[0.04]' : 'bg-[#f4f7fb] border-slate-200'
    }`}>
      <div className="max-w-2xl mx-auto flex flex-col">
        {/* Header */}
        <div className="flex flex-col text-left mb-6">
          <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 ${
            isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
          }`}>
            Paradigm Shift
          </span>
          <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
            isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
          }`}>
            More than caller identification.
          </h2>
          <p className={`font-sans text-sm mt-1.5 leading-relaxed ${
            isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
          }`}>
            Traditional caller ID checks metadata that spoofers easily fake. VocaShield analyzes the physical sound itself.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {/* Traditional Caller ID Card */}
          <div className={`p-5 rounded-2xl flex flex-col gap-3.5 border transition-colors ${
            isDark
              ? 'bg-[#0f1c2c] border-white/[0.04] opacity-80'
              : 'bg-slate-100 border-slate-200 text-slate-700'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`font-headline text-base sm:text-lg font-bold ${
                isDark ? 'text-[#869397]' : 'text-slate-600'
              }`}>
                Traditional Caller ID
              </span>
              <span className={`px-2.5 py-0.5 rounded font-mono text-xs ${
                isDark ? 'bg-[#1e2b3b] text-[#869397]' : 'bg-slate-200 text-slate-600'
              }`}>
                Legacy
              </span>
            </div>
            <ul className={`flex flex-col gap-2.5 font-sans text-xs sm:text-sm ${
              isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
            }`}>
              <li className="flex items-center gap-2.5 text-left">
                <X size={16} className="text-red-400 shrink-0" />
                <span>Static database lookup only</span>
              </li>
              <li className="flex items-center gap-2.5 text-left">
                <X size={16} className="text-red-400 shrink-0" />
                <span>Trivially bypassed via caller ID spoofing</span>
              </li>
              <li className="flex items-center gap-2.5 text-left">
                <X size={16} className="text-red-400 shrink-0" />
                <span>Blind to live voice clones and deepfakes</span>
              </li>
              <li className="flex items-center gap-2.5 text-left">
                <X size={16} className="text-red-400 shrink-0" />
                <span>No continuous in-call security</span>
              </li>
            </ul>
          </div>

          {/* VocaShield Neural Defense Card */}
          <div className={`p-5 rounded-2xl flex flex-col gap-3.5 shadow-xl border relative overflow-hidden transition-colors ${
            isDark
              ? 'bg-[#132030] border-[#69e0ff]/30'
              : 'bg-white border-sky-300 shadow-md ring-1 ring-sky-200'
          }`}>
            <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none ${
              isDark ? 'bg-[#69e0ff]/10' : 'bg-sky-400/10'
            }`}></div>

            <div className="flex items-center justify-between">
              <span className={`font-headline text-base sm:text-lg font-bold ${
                isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
              }`}>
                VocaShield Acoustic Shield
              </span>
              <span className={`px-3 py-0.5 rounded-full font-mono text-xs font-bold border ${
                isDark
                  ? 'bg-[#19c6e8]/15 text-[#69e0ff] border-[#19c6e8]/30'
                  : 'bg-sky-50 text-[#0284c7] border-sky-200'
              }`}>
                Active AI Defense
              </span>
            </div>

            <ul className={`flex flex-col gap-2.5 font-sans text-xs sm:text-sm ${
              isDark ? 'text-[#d6e4f9]' : 'text-slate-700'
            }`}>
              <li className="flex items-center gap-2.5 text-left">
                <CheckCircle2 size={16} className="text-[#40e18a] shrink-0" />
                <span>Continuous acoustic micro-structural analysis</span>
              </li>
              <li className="flex items-center gap-2.5 text-left">
                <CheckCircle2 size={16} className="text-[#40e18a] shrink-0" />
                <span>Instant detection of AI neural vocoders & synthetic clones</span>
              </li>
              <li className="flex items-center gap-2.5 text-left">
                <CheckCircle2 size={16} className="text-[#40e18a] shrink-0" />
                <span>Zero reliance on carrier metadata or unverified caller numbers</span>
              </li>
              <li className="flex items-center gap-2.5 text-left">
                <CheckCircle2 size={16} className="text-[#40e18a] shrink-0" />
                <span>Privacy-preserving on-device NPU inference (Zero Cloud)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
