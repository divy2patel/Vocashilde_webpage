import React, { useState, useEffect } from 'react';
import { CallScenario } from '../types';
import { CALL_SCENARIOS } from '../data/mockData';
import { ShieldCheck, Lock, Sparkles, CheckCircle, AlertTriangle, PhoneOff, PhoneCall, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  onVerifyCaller: (scenario: CallScenario) => void;
  onOpenDownload: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onVerifyCaller, onOpenDownload }) => {
  const { isDark } = useTheme();
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);
  const [isCallActive, setIsCallActive] = useState<boolean>(true);
  const [callSeconds, setCallSeconds] = useState<number>(38);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  const currentScenario = CALL_SCENARIOS[selectedScenarioIndex];

  // Call timer simulation
  useEffect(() => {
    if (!isCallActive) return;
    const interval = setInterval(() => {
      setCallSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCallActive]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const isHighRisk = currentScenario.riskScore >= 70;
  const isMediumRisk = currentScenario.riskScore >= 31 && currentScenario.riskScore < 70;

  return (
    <section id="overview" className={`px-4 sm:px-6 pt-6 pb-14 flex flex-col items-center text-center relative overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#061423]' : 'bg-[#f8fafc]'
    }`}>
      {/* Ambient Background Glow */}
      <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
        isDark ? 'bg-[#69e0ff]/10' : 'bg-sky-400/10'
      }`}></div>

      {/* Pill Badge */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-xs mb-4 transition-colors ${
        isDark
          ? 'bg-[#1e2b3b] text-[#69e0ff] border-white/[0.08]'
          : 'bg-sky-50 text-[#0284c7] border-sky-200'
      }`}>
        <span className={`w-2 h-2 rounded-full animate-ping ${
          isDark ? 'bg-[#69e0ff]' : 'bg-[#0284c7]'
        }`}></span>
        <span className="font-mono text-xs uppercase tracking-wider font-semibold">Real-Time Voice Protection</span>
      </div>

      {/* Main Headline */}
      <h1 className={`font-headline text-4xl sm:text-5xl lg:text-6xl tracking-tight font-extrabold max-w-xl leading-tight ${
        isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
      }`}>
        Know who's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19c6e8] via-[#00a3c4] to-[#40e18a]">really</span> speaking.
      </h1>

      {/* Supporting Copy */}
      <p className={`font-sans text-base sm:text-lg mt-3 max-w-md leading-relaxed ${
        isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
      }`}>
        Real-time AI voice risk scoring that detects deepfakes, synthetic clones, and spoofed callers during live phone calls.
      </p>

      {/* CTAs */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 max-w-sm">
        <button
          onClick={onOpenDownload}
          className="h-12 w-full rounded-xl bg-gradient-to-r from-[#19c6e8] to-[#40e18a] flex items-center justify-center font-headline text-base font-bold text-[#061423] shadow-lg shadow-[#19c6e8]/20 hover:shadow-[#19c6e8]/35 active:scale-[0.98] transition-all cursor-pointer"
        >
          Download App
        </button>
        <a
          href="#how-it-works"
          className={`h-12 w-full rounded-xl border flex items-center justify-center font-headline text-base font-medium transition-all ${
            isDark
              ? 'bg-[#132030] border-white/[0.08] hover:bg-[#1e2b3b] text-[#d6e4f9]'
              : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800 shadow-xs'
          }`}
        >
          See How It Works
        </a>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-left">
        <div className="flex items-center gap-2">
          <CheckCircle size={16} className={isDark ? 'text-[#40e18a]' : 'text-emerald-600'} />
          <span className={`font-mono text-xs ${isDark ? 'text-[#bbc9cd]' : 'text-slate-600'}`}>Real-time analysis</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock size={16} className={isDark ? 'text-[#40e18a]' : 'text-emerald-600'} />
          <span className={`font-mono text-xs ${isDark ? 'text-[#bbc9cd]' : 'text-slate-600'}`}>Privacy-first sandbox</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles size={16} className={isDark ? 'text-[#40e18a]' : 'text-emerald-600'} />
          <span className={`font-mono text-xs ${isDark ? 'text-[#bbc9cd]' : 'text-slate-600'}`}>Explainable scoring</span>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-md">
        <span className={`font-mono text-[11px] uppercase tracking-wider mr-1 ${
          isDark ? 'text-[#869397]' : 'text-slate-500'
        }`}>
          Test Scenario:
        </span>
        {CALL_SCENARIOS.map((scenario, idx) => (
          <button
            key={scenario.id}
            onClick={() => {
              setSelectedScenarioIndex(idx);
              setCallSeconds(20);
              setIsDismissed(false);
              setIsCallActive(true);
            }}
            className={`px-3 py-1 text-xs rounded-full font-mono transition-all border cursor-pointer ${
              selectedScenarioIndex === idx
                ? isDark
                  ? 'bg-[#19c6e8]/20 border-[#19c6e8] text-[#69e0ff] font-semibold'
                  : 'bg-sky-100 border-sky-400 text-sky-800 font-semibold'
                : isDark
                ? 'bg-[#0f1c2c] border-white/[0.08] text-[#bbc9cd] hover:border-white/[0.2]'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            {scenario.name.split(' ')[0]} ({scenario.riskScore}%)
          </button>
        ))}
      </div>

      {/* Interactive Phone Mockup */}
      <div className="w-full max-w-[340px] mt-6 relative flex flex-col items-center">
        {/* Dynamic Risk Ambient Glow */}
        <div
          className={`absolute inset-0 blur-2xl rounded-full scale-90 pointer-events-none transition-colors duration-500 ${
            isHighRisk
              ? 'bg-red-500/20'
              : isMediumRisk
              ? 'bg-amber-500/15'
              : 'bg-emerald-500/20'
          }`}
        ></div>

        {/* Phone Frame Chassis (Maintains authentic device chassis) */}
        <div className="w-full bg-[#020f1e] rounded-[40px] p-3.5 shadow-2xl border border-white/[0.12] relative z-10">
          {/* Inner Glass Display Screen */}
          <div className="w-full bg-[#0f1c2c] rounded-[30px] p-4 flex flex-col items-center relative overflow-hidden border border-white/[0.04]">
            {/* Dynamic Island / Speaker Pill */}
            <div className="w-28 h-4 bg-[#020f1e] rounded-full mb-3 flex items-center justify-end px-2.5">
              <span className={`w-2 h-2 rounded-full ${isCallActive ? 'bg-[#69e0ff] animate-pulse' : 'bg-[#869397]'}`}></span>
            </div>

            {/* Live Status Tag */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#132030] border border-white/[0.06] text-[#bbc9cd] mb-2">
              <span
                className={`w-2 h-2 rounded-full animate-pulse ${
                  isHighRisk ? 'bg-[#ffb4ab]' : isMediumRisk ? 'bg-[#ff999c]' : 'bg-[#40e18a]'
                }`}
              ></span>
              <span className="font-mono text-[10px] uppercase text-[#869397] tracking-wider">
                {isCallActive ? 'Live Voice Analysis' : 'Call Ended'}
              </span>
            </div>

            {/* Caller Identity & Call Timer */}
            <h2 className="font-headline text-lg text-[#d6e4f9] font-bold mt-1">{currentScenario.name}</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="font-mono text-xs text-[#869397]">{currentScenario.phone}</span>
              <span className="font-mono text-xs text-[#869397]">•</span>
              <span className="font-mono text-xs text-[#69e0ff]">{formatTimer(callSeconds)}</span>
            </div>

            {/* Prominent Risk Meter Centerpiece */}
            <div className="my-3.5 w-full py-3.5 px-3 bg-[#132030] rounded-2xl flex flex-col items-center border border-white/[0.06] shadow-inner relative">
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className={`font-mono text-xs uppercase font-bold tracking-wider ${
                    isHighRisk ? 'text-[#ffb4ab]' : isMediumRisk ? 'text-[#ffc2c2]' : 'text-[#40e18a]'
                  }`}
                >
                  {isHighRisk ? 'High Risk' : isMediumRisk ? 'Medium Risk' : 'Low Risk'}
                </span>
                <span className="font-mono text-[10px] text-[#869397]">• On-Device Tensor</span>
              </div>

              <div
                className={`font-mono text-4xl font-extrabold tracking-tight ${
                  isHighRisk ? 'text-[#ffb4ab]' : isMediumRisk ? 'text-[#ffc2c2]' : 'text-[#40e18a]'
                }`}
              >
                {currentScenario.riskScore}
                <span className="text-sm text-[#869397] font-normal">/100</span>
              </div>

              <p
                className={`font-mono text-[11px] font-medium mt-1 text-center ${
                  isHighRisk ? 'text-[#ffb4ab]/90' : isMediumRisk ? 'text-[#ffc2c2]' : 'text-[#40e18a]'
                }`}
              >
                {currentScenario.statusTag}
              </p>

              {/* Live Animated Waveform Bars */}
              <div className="flex items-end justify-center gap-1.5 h-9 mt-3 w-full px-2">
                {currentScenario.waveformPattern.map((h, i) => (
                  <span
                    key={i}
                    className={`w-1.5 rounded-full transition-all duration-300 ${
                      isHighRisk
                        ? 'bg-[#ffb4ab]'
                        : isMediumRisk
                        ? 'bg-[#ff999c]'
                        : 'bg-[#40e18a]'
                    }`}
                    style={{
                      height: isCallActive ? `${Math.max(6, (h / 100) * 36)}px` : '4px',
                      opacity: isCallActive ? 0.7 + (h % 30) / 100 : 0.3
                    }}
                  ></span>
                ))}
              </div>
            </div>

            {/* Diagnostic Details */}
            {!isDismissed && (
              <div className="w-full text-left bg-[#132030]/60 p-2.5 rounded-xl border border-white/[0.04] mb-3">
                <div className="flex items-center gap-1 text-[11px] text-[#869397] font-mono mb-1">
                  <AlertTriangle size={12} className={isHighRisk ? 'text-[#ffb4ab]' : 'text-[#40e18a]'} />
                  <span>Spectral Diagnosis:</span>
                </div>
                <p className="text-[11px] text-[#bbc9cd] font-sans leading-tight">
                  {currentScenario.reasons[0]}
                </p>
              </div>
            )}

            {/* Action Buttons inside Phone Screen */}
            <div className="w-full flex gap-2">
              <button
                onClick={() => onVerifyCaller(currentScenario)}
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#19c6e8] text-[#061423] font-headline text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer flex items-center justify-center gap-1"
              >
                <ShieldCheck size={14} />
                <span>Verify Caller</span>
              </button>

              <button
                onClick={() => setIsDismissed(!isDismissed)}
                className="py-2.5 px-3 rounded-xl bg-[#1e2b3b] text-[#bbc9cd] font-headline text-xs font-semibold hover:text-[#d6e4f9] transition-colors cursor-pointer"
              >
                {isDismissed ? 'Show Info' : 'Dismiss'}
              </button>
            </div>

            {/* Phone In-Call Controls */}
            <div className="flex items-center justify-around w-full mt-3 pt-2 border-t border-white/[0.04]">
              <button
                onClick={() => setIsCallActive(!isCallActive)}
                className={`p-2.5 rounded-full transition-all cursor-pointer ${
                  isCallActive
                    ? 'bg-[#93000a] text-[#ffdad6] hover:bg-red-700'
                    : 'bg-[#004a27] text-[#64fea4] hover:bg-green-700'
                }`}
                title={isCallActive ? "End Call" : "Resume Call"}
              >
                {isCallActive ? <PhoneOff size={16} /> : <PhoneCall size={16} />}
              </button>

              <button
                onClick={() => {
                  setSelectedScenarioIndex((prev) => (prev + 1) % CALL_SCENARIOS.length);
                  setCallSeconds(15);
                  setIsDismissed(false);
                  setIsCallActive(true);
                }}
                className="p-2.5 rounded-full bg-[#1e2b3b] text-[#bbc9cd] hover:text-[#69e0ff] transition-colors cursor-pointer"
                title="Switch Caller Scenario"
              >
                <RefreshCw size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Telemetry Chips - adaptive light/dark mode */}
        <div className={`hidden sm:flex absolute -left-12 top-1/3 z-20 backdrop-blur-md px-3 py-2 rounded-xl border flex-col items-start gap-0.5 transition-all ${
          isDark
            ? 'bg-[#1e2b3b]/90 border-white/[0.08] shadow-xl'
            : 'bg-white/95 border-slate-200 shadow-xl'
        }`}>
          <span className={`font-mono text-[10px] ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>Latency</span>
          <span className="font-mono text-xs font-bold text-[#40e18a]">38ms</span>
        </div>

        <div className={`hidden sm:flex absolute -right-12 bottom-1/4 z-20 backdrop-blur-md px-3 py-2 rounded-xl border flex-col items-start gap-0.5 transition-all ${
          isDark
            ? 'bg-[#1e2b3b]/90 border-white/[0.08] shadow-xl'
            : 'bg-white/95 border-slate-200 shadow-xl'
        }`}>
          <span className={`font-mono text-[10px] ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>Jitter Delta</span>
          <span className={`font-mono text-xs font-bold ${
            isHighRisk ? 'text-red-500' : 'text-emerald-500'
          }`}>
            {currentScenario.spectralJitter}
          </span>
        </div>
      </div>
    </section>
  );
};
