import React, { useState } from 'react';
import { TIMELINE_STEPS } from '../data/mockData';
import { Radio, Filter, Cpu, BrainCircuit, ShieldAlert } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ArchitectureTimeline: React.FC = () => {
  const { isDark } = useTheme();
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepIcons = [
    <Radio size={16} key="1" />,
    <Filter size={16} key="2" />,
    <Cpu size={16} key="3" />,
    <BrainCircuit size={16} key="4" />,
    <ShieldAlert size={16} key="5" />
  ];

  const stepDetails = [
    "Android Telephony / CallScreeningService hook isolates downlink audio stream into a ring buffer without requiring root access.",
    "Dual-path spectral subtraction and Wiener filtering strip 8kHz GSM/AMR voice codec distortion and background transit noise.",
    "Mel-frequency cepstral coefficients (MFCC), fundamental frequency (F0) contour, and 128-band constant-Q spectrogram generated in 18ms.",
    "INT8 quantized MobileNet-Voice Transformer runs on Qualcomm Hexagon NPU / Apple Neural Engine in 35ms.",
    "Multi-head fusion layer evaluates Bayesian threat probability, issuing haptic alerts and caller challenge triggers."
  ];

  return (
    <section id="how-it-works" className={`px-4 sm:px-6 py-14 max-w-2xl mx-auto w-full transition-colors duration-200 ${
      isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
    }`}>
      <div className="flex flex-col">
        {/* Header */}
        <div className="text-left mb-8">
          <span className={`font-mono text-xs uppercase font-bold tracking-widest block mb-1.5 ${
            isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
          }`}>
            Architecture
          </span>
          <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
            isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
          }`}>
            From live audio to a clear decision.
          </h2>
          <p className={`font-sans text-sm mt-1.5 leading-relaxed ${
            isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
          }`}>
            How VocaShield deconstructs audio packets on-device in under 120 milliseconds.
          </p>
        </div>

        {/* 5-Step Timeline */}
        <div className="relative flex flex-col gap-4 pl-3 sm:pl-4">
          {/* Connecting Vertical Rail */}
          <div className={`absolute left-[1.625rem] sm:left-[1.875rem] top-5 bottom-8 w-0.5 ${
            isDark ? 'bg-[#283646]' : 'bg-slate-300'
          }`}></div>

          {TIMELINE_STEPS.map((step, idx) => {
            const isSelected = activeStep === step.stepNumber;
            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className="flex items-start gap-4 relative z-10 cursor-pointer group"
              >
                {/* Step Circle Badge */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-all ${
                    isSelected
                      ? step.stepNumber === 5
                        ? 'bg-[#40e18a] text-[#00391d] shadow-[0_0_12px_rgba(64,225,138,0.5)] scale-110'
                        : 'bg-[#19c6e8] text-[#003641] shadow-[0_0_12px_rgba(25,198,232,0.5)] scale-110'
                      : isDark
                      ? 'bg-[#1e2b3b] text-[#69e0ff] group-hover:bg-[#283646]'
                      : 'bg-slate-100 text-[#0284c7] border border-slate-300 group-hover:bg-slate-200'
                  }`}
                >
                  {step.stepNumber}
                </div>

                {/* Step Card */}
                <div
                  className={`flex-1 rounded-xl p-4 border text-left transition-all ${
                    isSelected
                      ? isDark
                        ? 'bg-[#132030] border-[#69e0ff]/30 shadow-lg'
                        : 'bg-white border-sky-300 shadow-md ring-1 ring-sky-200'
                      : isDark
                      ? 'bg-[#0f1c2c] border-white/[0.04] group-hover:border-white/[0.08]'
                      : 'bg-white/80 border-slate-200 group-hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={isSelected ? (isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]') : (isDark ? 'text-[#869397]' : 'text-slate-400')}>
                        {stepIcons[idx]}
                      </span>
                      <h3 className={`font-headline text-base font-bold ${
                        isSelected
                          ? isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
                          : isDark ? 'text-[#bbc9cd]' : 'text-slate-700'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#40e18a] font-medium bg-[#40e18a]/10 px-2 py-0.5 rounded">
                      {step.phase}
                    </span>
                  </div>

                  <p className={`font-sans text-xs sm:text-sm mt-1 leading-relaxed ${
                    isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
                  }`}>
                    {step.description}
                  </p>

                  {/* Expanded detail on selected */}
                  {isSelected && (
                    <div className={`mt-3 pt-2.5 border-t font-mono text-xs leading-relaxed animate-in fade-in duration-200 ${
                      isDark
                        ? 'border-white/[0.06] text-[#69e0ff]/90'
                        : 'border-slate-100 text-[#0284c7]'
                    }`}>
                      <span className="font-bold">Hardware Vector:</span> {stepDetails[idx]}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
