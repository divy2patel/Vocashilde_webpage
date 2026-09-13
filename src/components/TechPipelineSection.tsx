import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const TechPipelineSection: React.FC = () => {
  const { isDark } = useTheme();

  const steps = [
    { num: '1', name: 'Mel-Frequency Cepstral (MFCC)', metric: 'Acoustic Shape', color: isDark ? 'bg-[#69e0ff]' : 'bg-sky-500' },
    { num: '2', name: 'Constant-Q Spectrogram', metric: 'Vocoder Noise', color: isDark ? 'bg-[#69e0ff]' : 'bg-sky-500' },
    { num: '3', name: 'Prosodic Rhythm Extraction', metric: 'Breath Cadence', color: isDark ? 'bg-[#69e0ff]' : 'bg-sky-500' },
    { num: '4', name: 'Speaker Embedding Fusion', metric: 'Vector Distance', color: isDark ? 'bg-[#40e18a]' : 'bg-emerald-500' },
    { num: '5', name: 'Deep Ensemble Inference', metric: '0–100 Unified', color: isDark ? 'bg-[#19c6e8]' : 'bg-teal-500' }
  ];

  return (
    <section className="px-4 sm:px-6 py-14 max-w-2xl mx-auto w-full">
      <div className="flex flex-col text-left mb-6">
        <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 ${
          isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
        }`}>
          Under The Hood
        </span>
        <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
          isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
        }`}>
          The technology behind the score.
        </h2>
        <p className={`font-sans text-sm mt-1.5 leading-relaxed ${
          isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
        }`}>
          High-dimensional tensor operations executed locally on your smartphone's Neural Processing Unit (NPU).
        </p>
      </div>

      <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col gap-3.5 transition-colors duration-200 ${
        isDark
          ? 'bg-[#132030] border-white/[0.06] shadow-lg'
          : 'bg-white border-slate-200 shadow-md'
      }`}>
        <div className={`flex items-center justify-between pb-2 border-b ${
          isDark ? 'border-white/[0.06]' : 'border-slate-100'
        }`}>
          <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>SIGNAL STACK</span>
          <span className="font-mono text-xs text-[#40e18a] font-bold">LATENCY: ~85ms</span>
        </div>

        <div className="flex flex-col gap-2">
          {steps.map((item) => (
            <div
              key={item.num}
              className={`p-3 rounded-xl flex items-center justify-between border transition-colors ${
                isDark
                  ? 'bg-[#0f1c2c] border-white/[0.04]'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                <span className={`font-mono text-xs sm:text-sm font-semibold ${
                  isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
                }`}>
                  {item.num}. {item.name}
                </span>
              </div>
              <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
                {item.metric}
              </span>
            </div>
          ))}
        </div>

        {/* Technical Tags Cloud */}
        <div className={`flex flex-wrap gap-2 pt-2 border-t ${
          isDark ? 'border-white/[0.04]' : 'border-slate-100'
        }`}>
          {['INT8 Quantized', 'CoreML / NNAPI', 'Raw Audio Hook', 'Hexagon DSP', 'Zero Cloud Egress'].map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-md font-mono text-xs border ${
                isDark
                  ? 'bg-[#1e2b3b] text-[#bbc9cd] border-white/[0.04]'
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
