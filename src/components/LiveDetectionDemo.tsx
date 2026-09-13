import React, { useState, useEffect } from 'react';
import { DETECT_TIMELINE_STAGES, TELEMETRY_FLAGS } from '../data/mockData';
import { Activity, ShieldAlert, Cpu, Radio, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const LiveDetectionDemo: React.FC = () => {
  const { isDark } = useTheme();
  const [activeStage, setActiveStage] = useState<number>(2);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Auto-cycle simulation stages
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % DETECT_TIMELINE_STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const current = DETECT_TIMELINE_STAGES[activeStage];

  const primaryAccent = isDark ? '#69e0ff' : '#0284c7';
  const errorAccent = isDark ? '#ffb4ab' : '#dc2626';
  const successAccent = isDark ? '#40e18a' : '#16a34a';

  return (
    <section id="how-it-works" className={`px-4 sm:px-6 py-14 border-b transition-colors duration-200 ${
      isDark ? 'bg-[#020f1e] border-white/[0.04]' : 'bg-[#f4f8fc] border-slate-200'
    }`}>
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col text-left">
          <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 ${
            isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
          }`}>
            Acoustic Telemetry
          </span>
          <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
            isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
          }`}>
            Security that listens while you talk.
          </h2>
          <p className={`font-sans text-sm mt-1.5 leading-relaxed ${
            isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
          }`}>
            Multi-signal deepfake verification running concurrently with live cellular and VoIP streams.
          </p>
        </div>

        {/* Live Call Analysis Card */}
        <div className={`rounded-2xl p-4 sm:p-6 shadow-xl border flex flex-col gap-5 transition-colors duration-200 ${
          isDark
            ? 'bg-[#132030] border-white/[0.08]'
            : 'bg-white border-slate-200 shadow-md'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-headline text-sm font-bold border ${
                isDark
                  ? 'bg-[#1e2b3b] text-[#69e0ff] border-white/[0.08]'
                  : 'bg-sky-50 text-[#0284c7] border-sky-200'
              }`}>
                SW
              </div>
              <div className="flex flex-col text-left">
                <span className={`font-headline text-sm sm:text-base font-semibold ${
                  isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
                }`}>
                  Sarah Williams
                </span>
                <span className={`font-mono text-xs ${
                  isDark ? 'text-[#869397]' : 'text-slate-500'
                }`}>
                  Stream Duration: {current.duration}
                </span>
              </div>
            </div>
            <span className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold uppercase transition-colors ${
              activeStage >= 2
                ? isDark
                  ? 'bg-[#93000a]/40 text-[#ffdad6] border border-[#ffb4ab]/30'
                  : 'bg-red-100 text-red-700 border border-red-200'
                : isDark
                ? 'bg-[#004a27]/40 text-[#64fea4] border border-[#40e18a]/30'
                : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
            }`}>
              {current.status}
            </span>
          </div>

          {/* Fully Visible Frequency Waveform Canvas Emulation */}
          <div className={`w-full rounded-xl p-3.5 sm:p-4 border flex flex-col gap-2.5 transition-colors duration-200 ${
            isDark
              ? 'bg-[#0f1c2c] border-white/[0.04]'
              : 'bg-slate-50 border-slate-200'
          }`}>
            <div className={`flex justify-between items-center font-mono text-xs ${
              isDark ? 'text-[#869397]' : 'text-slate-500'
            }`}>
              <span className="flex items-center gap-1.5 font-semibold">
                <Activity size={14} className={activeStage >= 2 ? (isDark ? 'text-[#ffb4ab]' : 'text-red-500') : primaryAccent} />
                Spectral Distribution Graph
              </span>
              <span className={`font-mono font-bold transition-colors ${
                activeStage >= 2
                  ? isDark ? 'text-[#ffb4ab]' : 'text-red-600'
                  : isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
              }`}>
                {current.artifact}
              </span>
            </div>

            {/* SVG Graph with ample height and margins so peaks are 100% visible */}
            <div className="w-full relative py-1">
              <svg
                className="w-full h-20 overflow-visible"
                viewBox="0 0 300 70"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="waveGradDark" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#19c6e8" />
                    <stop offset="60%" stopColor={activeStage >= 2 ? '#ffb4ab' : '#69e0ff'} />
                    <stop offset="100%" stopColor={activeStage >= 2 ? '#ff5364' : '#40e18a'} />
                  </linearGradient>
                  <linearGradient id="waveGradLight" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="60%" stopColor={activeStage >= 2 ? '#dc2626' : '#0284c7'} />
                    <stop offset="100%" stopColor={activeStage >= 2 ? '#b91c1c' : '#16a34a'} />
                  </linearGradient>
                </defs>

                {/* Subtle Grid Lines */}
                <line x1="0" y1="35" x2="300" y2="35" stroke={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'} strokeWidth="1" strokeDasharray="2 2" />
                <line x1="75" y1="0" x2="75" y2="70" stroke={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} strokeWidth="1" strokeDasharray="2 2" />
                <line x1="150" y1="0" x2="150" y2="70" stroke={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} strokeWidth="1" strokeDasharray="2 2" />
                <line x1="225" y1="0" x2="225" y2="70" stroke={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} strokeWidth="1" strokeDasharray="2 2" />

                {/* Reference baseline human wave */}
                <path
                  d="M0,35 Q20,46 40,35 T80,35 T120,24 T160,46 T200,30 T240,40 T280,32 T300,35"
                  fill="none"
                  opacity={isDark ? 0.35 : 0.25}
                  stroke={isDark ? '#40e18a' : '#16a34a'}
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />

                {/* Live stream wave - completely bounded within 0 to 70 */}
                <path
                  d={
                    activeStage === 3
                      ? "M0,35 Q15,10 30,35 T60,35 T90,10 T120,60 T150,22 T180,48 T210,12 T240,55 T270,18 T300,35"
                      : activeStage === 2
                      ? "M0,35 Q20,16 40,35 T80,26 T120,52 T160,28 T200,44 T240,18 T280,35 T300,35"
                      : "M0,35 Q25,26 50,35 T100,31 T150,39 T200,33 T250,37 T300,35"
                  }
                  fill="none"
                  stroke={isDark ? 'url(#waveGradDark)' : 'url(#waveGradLight)'}
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
            </div>

            {/* Frequency Axis Labels */}
            <div className={`flex justify-between text-[11px] font-mono font-medium ${
              isDark ? 'text-[#869397]' : 'text-slate-500'
            }`}>
              <span>20 Hz</span>
              <span>1 kHz</span>
              <span>8 kHz</span>
              <span>16 kHz</span>
            </div>
          </div>

          {/* Stepping Risk Progression */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
              <span className={`font-mono text-xs font-semibold flex items-center gap-1.5 ${
                isDark ? 'text-[#bbc9cd]' : 'text-slate-700'
              }`}>
                <Activity size={14} className={isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'} />
                Confidence Progression
              </span>
              <span className={`font-mono text-xs font-bold transition-colors ${
                current.score >= 70
                  ? isDark ? 'text-[#ffb4ab]' : 'text-red-600'
                  : current.score >= 35
                  ? isDark ? 'text-[#ffc2c2]' : 'text-amber-600'
                  : isDark ? 'text-[#40e18a]' : 'text-emerald-600'
              }`}>
                {current.score} / 100 {current.score >= 70 ? 'HIGH RISK' : current.score >= 35 ? 'SUSPICIOUS' : 'NOMINAL'}
              </span>
            </div>

            {/* Stepped Progress Indicator */}
            <div className="grid grid-cols-4 gap-2">
              {DETECT_TIMELINE_STAGES.map((stage, idx) => {
                const isActive = idx === activeStage;
                const isPassed = idx < activeStage;
                return (
                  <button
                    key={stage.id}
                    onClick={() => {
                      setActiveStage(idx);
                      setIsSimulating(false);
                    }}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? stage.score >= 70
                          ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'
                          : stage.score >= 35
                          ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                          : 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]'
                        : isPassed
                        ? isDark ? 'bg-slate-600' : 'bg-slate-300'
                        : isDark ? 'bg-slate-800' : 'bg-slate-200'
                    }`}
                  />
                );
              })}
            </div>

            {/* Active Stage Details */}
            <div className={`p-3 rounded-xl border flex items-center justify-between ${
              isDark ? 'bg-[#0f1c2c] border-white/[0.04]' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex flex-col text-left">
                <span className={`font-headline text-xs font-bold ${
                  isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
                }`}>
                  Phase {activeStage + 1}: {current.label} ({current.duration})
                </span>
                <span className={`font-mono text-[11px] ${
                  isDark ? 'text-[#869397]' : 'text-slate-500'
                }`}>
                  Artifact: {current.artifact}
                </span>
              </div>
              <button
                onClick={() => setIsSimulating(!isSimulating)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer border ${
                  isSimulating
                    ? isDark
                      ? 'bg-[#19c6e8]/20 border-[#19c6e8] text-[#69e0ff]'
                      : 'bg-sky-100 border-sky-300 text-sky-800'
                    : isDark
                    ? 'bg-[#1e2b3b] border-white/[0.08] text-[#869397]'
                    : 'bg-white border-slate-300 text-slate-600'
                }`}
              >
                {isSimulating ? 'Simulating' : 'Paused'}
              </button>
            </div>
          </div>

          {/* Telemetry Vector Flags */}
          <div className="grid grid-cols-2 gap-2 text-left">
            {TELEMETRY_FLAGS.map((flag, index) => {
              const isAlert = flag.status === 'alert';
              return (
                <div
                  key={index}
                  className={`p-2.5 rounded-xl border flex flex-col gap-1 transition-colors ${
                    isAlert
                      ? isDark
                        ? 'bg-[#93000a]/20 border-[#ffb4ab]/30'
                        : 'bg-red-50 border-red-200'
                      : isDark
                      ? 'bg-[#0f1c2c] border-white/[0.04]'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[11px] ${
                      isDark ? 'text-[#869397]' : 'text-slate-500'
                    }`}>
                      {flag.name}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isAlert ? 'bg-red-500 animate-ping' : 'bg-emerald-500'
                      }`}
                    />
                  </div>
                  <span className={`font-mono text-xs font-bold ${
                    isAlert
                      ? isDark ? 'text-[#ffdad6]' : 'text-red-700'
                      : isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
                  }`}>
                    {flag.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
