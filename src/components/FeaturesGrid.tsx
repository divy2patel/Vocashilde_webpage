import React from 'react';
import { Zap, Gauge, Brain, AudioWaveform, ShieldCheck, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const FeaturesGrid: React.FC = () => {
  const { isDark } = useTheme();

  const features = [
    {
      icon: <Zap size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />,
      bg: isDark ? 'bg-[#19c6e8]/10' : 'bg-sky-50',
      title: 'Zero-Latency Detection',
      desc: 'Real-time inference occurs concurrently with calls in under 120ms with zero perceptible audio delay.'
    },
    {
      icon: <Gauge size={22} className={isDark ? "text-[#40e18a]" : "text-emerald-600"} />,
      bg: isDark ? 'bg-[#40e18a]/10' : 'bg-emerald-50',
      title: 'Unified 0–100 Index',
      desc: 'Translates billions of spectral vector calculations into a calm, instant color-coded threat barometer.'
    },
    {
      icon: <Brain size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />,
      bg: isDark ? 'bg-[#19c6e8]/10' : 'bg-sky-50',
      title: 'Explainable Alerts',
      desc: 'Never leaves you guessing. Details precise anomalies from vocoder artifacts to missing breathing pauses.'
    },
    {
      icon: <AudioWaveform size={22} className={isDark ? "text-[#40e18a]" : "text-emerald-600"} />,
      bg: isDark ? 'bg-[#40e18a]/10' : 'bg-emerald-50',
      title: 'Multi-Signal Intelligence',
      desc: 'Examines phase continuity, pitch micro-variance, and synthetic vocal tract acoustic models simultaneously.'
    },
    {
      icon: <ShieldCheck size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />,
      bg: isDark ? 'bg-[#19c6e8]/10' : 'bg-sky-50',
      title: 'Privacy-Preserving Sandbox',
      desc: 'Local volatile memory processing. Your voice and your caller\'s speech are never recorded or exported.'
    },
    {
      icon: <RefreshCw size={22} className={isDark ? "text-[#40e18a]" : "text-emerald-600"} />,
      bg: isDark ? 'bg-[#40e18a]/10' : 'bg-emerald-50',
      title: 'Dynamic Adaptation',
      desc: 'Score refines as conversation unfolds, adapting to background street ambiance and varied cellular handoffs.'
    }
  ];

  return (
    <section id="defense-matrix" className={`px-4 sm:px-6 py-14 border-y transition-colors duration-200 ${
      isDark ? 'bg-[#020f1e] border-white/[0.04]' : 'bg-[#f4f7fb] border-slate-200'
    }`}>
      <div className="max-w-2xl mx-auto flex flex-col">
        {/* Header */}
        <div className="flex flex-col text-left mb-8">
          <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 ${
            isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
          }`}>
            Defense Matrix
          </span>
          <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
            isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
          }`}>
            Enterprise defense on personal hardware.
          </h2>
          <p className={`font-sans text-sm mt-1.5 leading-relaxed ${
            isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
          }`}>
            Precision acoustic capabilities engineered without cloud dependencies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {features.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 sm:p-5 border flex flex-col gap-2.5 text-left transition-all ${
                isDark
                  ? 'bg-[#132030] border-white/[0.06] hover:border-[#69e0ff]/30 shadow-md'
                  : 'bg-white border-slate-200 hover:border-sky-300 shadow-sm'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                {item.icon}
              </div>
              <h3 className={`font-headline text-base font-bold ${
                isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
              }`}>
                {item.title}
              </h3>
              <p className={`font-sans text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
              }`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
