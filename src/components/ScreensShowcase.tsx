import React, { useState } from 'react';
import { Phone, PhoneOff, ShieldCheck, AlertTriangle, AlertOctagon, Share2, Check, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ScreensShowcaseProps {
  onOpenAuditModal: () => void;
}

export const ScreensShowcase: React.FC<ScreensShowcaseProps> = ({ onOpenAuditModal }) => {
  const { isDark } = useTheme();
  const [callState, setCallState] = useState<'ringing' | 'accepted' | 'declined'>('ringing');
  const [challengeState, setChallengeState] = useState<'idle' | 'challenging' | 'verified'>('idle');
  const [terminateState, setTerminateState] = useState<boolean>(false);

  const cardBg = isDark
    ? 'bg-[#132030] border-white/[0.06] shadow-lg'
    : 'bg-white border-slate-200 shadow-md';

  return (
    <section id="screens" className="px-4 sm:px-6 py-14 max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col text-left mb-6">
        <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 ${
          isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
        }`}>
          In-Call Experience
        </span>
        <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
          isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
        }`}>
          Protection that fits naturally into every call.
        </h2>
        <p className={`font-sans text-sm mt-1.5 leading-relaxed ${
          isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
        }`}>
          A seamless system HUD designed to give immediate certainty without interrupting normal conversation.
        </p>
      </div>

      {/* Screen Cards Stack */}
      <div className="flex flex-col gap-4">
        {/* Screen 1: Incoming Call */}
        <div className={`${cardBg} rounded-2xl p-4 sm:p-5 border flex flex-col gap-3 transition-colors duration-200`}>
          <div className="flex items-center justify-between">
            <span className={`font-mono text-xs uppercase ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              01 / Incoming Call
            </span>
            <span className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] border ${
              isDark
                ? 'bg-[#1e2b3b] text-[#69e0ff] border-white/[0.04]'
                : 'bg-sky-50 text-sky-700 border-sky-200'
            }`}>
              Active Shield
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
              isDark
                ? 'bg-[#1e2b3b] text-[#69e0ff] border-white/[0.06]'
                : 'bg-sky-50 text-[#0284c7] border-sky-200'
            }`}>
              <Phone size={22} className={callState === 'ringing' ? 'animate-bounce' : ''} />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-headline text-base sm:text-lg font-bold ${
                isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
              }`}>
                +1 (555) 019-2831
              </span>
              <span className="font-mono text-xs text-[#40e18a] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#40e18a] animate-pulse"></span>
                {callState === 'accepted' ? 'Call in progress — scanning active' : callState === 'declined' ? 'Call declined & blocked' : 'Pre-call neural scan ready'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mt-1">
            <button
              onClick={() => setCallState('declined')}
              className={`py-2.5 rounded-xl font-headline text-xs font-bold transition-all cursor-pointer ${
                callState === 'declined'
                  ? 'bg-red-800 text-red-100'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {callState === 'declined' ? 'Declined' : 'Decline'}
            </button>
            <button
              onClick={() => setCallState('accepted')}
              className={`py-2.5 rounded-xl font-headline text-xs font-bold transition-all cursor-pointer ${
                callState === 'accepted'
                  ? 'bg-emerald-800 text-emerald-100'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              }`}
            >
              {callState === 'accepted' ? 'Connected' : 'Answer with Shield'}
            </button>
          </div>
        </div>

        {/* Screen 2: Verified Caller */}
        <div className={`${cardBg} rounded-2xl p-4 sm:p-5 border flex flex-col gap-3 transition-colors duration-200`}>
          <div className="flex items-center justify-between">
            <span className={`font-mono text-xs uppercase ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              02 / Verified Authentic
            </span>
            <span className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] border ${
              isDark
                ? 'bg-[#004a27] text-[#64fea4] border-[#40e18a]/30'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
            }`}>
              Biometric Confirmed
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
              isDark
                ? 'bg-[#004a27] text-[#40e18a] border-[#40e18a]/20'
                : 'bg-emerald-50 text-emerald-600 border-emerald-200'
            }`}>
              <ShieldCheck size={22} />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-headline text-base sm:text-lg font-bold ${
                isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
              }`}>
                David Miller (Father)
              </span>
              <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
                Risk Score: <strong className="text-emerald-500">18/100 (Safe)</strong> • Harmonic match 98.4%
              </span>
            </div>
          </div>

          {/* Clean Progress Bar */}
          <div className="w-full bg-slate-200 dark:bg-[#0f1c2c] h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[18%] transition-all duration-500"></div>
          </div>
        </div>

        {/* Screen 3: Anomaly Detected */}
        <div className={`${cardBg} rounded-2xl p-4 sm:p-5 border flex flex-col gap-3 transition-colors duration-200`}>
          <div className="flex items-center justify-between">
            <span className={`font-mono text-xs uppercase ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              03 / Anomaly Detected
            </span>
            <span className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] border ${
              isDark
                ? 'bg-[#ff999c]/20 text-[#ffc2c2] border-[#ff999c]/30'
                : 'bg-amber-50 text-amber-800 border-amber-200'
            }`}>
              Elevated Risk 56/100
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
              isDark
                ? 'bg-[#ff999c]/15 text-[#ffc2c2] border-[#ff999c]/30'
                : 'bg-amber-50 text-amber-600 border-amber-200'
            }`}>
              <AlertTriangle size={22} />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-headline text-base sm:text-lg font-bold ${
                isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
              }`}>
                Chase Fraud Alert Center
              </span>
              <span className={`font-mono text-xs ${isDark ? 'text-[#ffc2c2]' : 'text-amber-700'}`}>
                Lossy vocoder compression • Latency discrepancy 240ms
              </span>
            </div>
          </div>

          <div className="w-full bg-slate-200 dark:bg-[#0f1c2c] h-2 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full w-[56%] transition-all duration-500"></div>
          </div>

          <button
            onClick={() => {
              setChallengeState('challenging');
              setTimeout(() => setChallengeState('verified'), 1200);
            }}
            className={`w-full py-2.5 rounded-xl border font-headline text-xs font-bold transition-all cursor-pointer ${
              challengeState === 'verified'
                ? isDark ? 'bg-[#004a27] text-[#64fea4] border-[#40e18a]/30' : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : challengeState === 'challenging'
                ? 'bg-amber-500 text-white border-amber-600'
                : isDark ? 'bg-[#1e2b3b] text-[#ffc2c2] border-[#ff999c]/30 hover:bg-[#283646]' : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
            }`}
          >
            {challengeState === 'verified'
              ? '✓ Voice Challenge Sent to Bank Line'
              : challengeState === 'challenging'
              ? 'Transmitting Challenge Protocol...'
              : 'Trigger In-Call Biometric Challenge'}
          </button>
        </div>

        {/* Screen 4: High-Risk Threat Neutralization */}
        <div className={`${cardBg} rounded-2xl p-4 sm:p-5 border flex flex-col gap-3 transition-colors duration-200`}>
          <div className="flex items-center justify-between">
            <span className={`font-mono text-xs uppercase ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              04 / Threat Neutralization
            </span>
            <span className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] border ${
              isDark
                ? 'bg-[#93000a] text-[#ffdad6] border-[#ffb4ab]/40'
                : 'bg-red-50 text-red-700 border-red-200'
            }`}>
              AI Clone Detected (87/100)
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
              isDark
                ? 'bg-[#93000a]/20 text-[#ffb4ab] border-[#ffb4ab]/30'
                : 'bg-red-50 text-red-600 border-red-200'
            }`}>
              <AlertOctagon size={22} className="animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-headline text-base sm:text-lg font-bold ${
                isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
              }`}>
                Unknown Executive Caller
              </span>
              <span className={`font-mono text-xs ${isDark ? 'text-[#ffb4ab]' : 'text-red-600'}`}>
                Identified: ElevenLabs TTS FastGen model
              </span>
            </div>
          </div>

          <div className="w-full bg-slate-200 dark:bg-[#0f1c2c] h-2 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full w-[87%] transition-all duration-500"></div>
          </div>

          <button
            onClick={() => setTerminateState(true)}
            className={`w-full py-3 rounded-xl font-headline text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 ${
              terminateState
                ? 'bg-slate-700 text-slate-300'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            <PhoneOff size={15} />
            {terminateState ? 'Call Terminated & Logged' : 'Terminate Call & Record Incident'}
          </button>
        </div>

        {/* Screen 5: Post-Call Forensic Summary */}
        <div className={`${cardBg} rounded-2xl p-4 sm:p-5 border flex flex-col gap-3 transition-colors duration-200`}>
          <div className="flex items-center justify-between">
            <span className={`font-mono text-xs uppercase ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              05 / Forensic Summary
            </span>
            <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Session #VC-9021
            </span>
          </div>

          <div className={`rounded-xl p-3 border flex flex-col gap-2 font-mono text-xs ${
            isDark ? 'bg-[#0f1c2c] border-white/[0.04]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex justify-between">
              <span className={isDark ? 'text-[#869397]' : 'text-slate-500'}>Call Duration:</span>
              <span className={`font-bold ${isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}`}>2m 14s</span>
            </div>
            <div className="flex justify-between">
              <span className={isDark ? 'text-[#869397]' : 'text-slate-500'}>Peak Risk Score:</span>
              <span className="font-bold text-red-500">72/100 (Deepfake)</span>
            </div>
            <div className="flex justify-between">
              <span className={isDark ? 'text-[#869397]' : 'text-slate-500'}>Codec:</span>
              <span className={isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}>AMR-WB 23.85k</span>
            </div>
            <div className="flex justify-between">
              <span className={isDark ? 'text-[#869397]' : 'text-slate-500'}>SHA-256 Seal:</span>
              <span className="text-[#40e18a] font-bold truncate max-w-[150px]">e3b0c44298fc1c14...</span>
            </div>
          </div>

          <button
            onClick={onOpenAuditModal}
            className={`w-full py-2.5 rounded-xl border font-headline text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              isDark
                ? 'bg-[#1e2b3b] text-[#69e0ff] border-white/[0.08] hover:bg-[#283646]'
                : 'bg-sky-50 text-[#0284c7] border-sky-200 hover:bg-sky-100'
            }`}
          >
            <Share2 size={14} /> Export Tamper-Proof Audit Certificate
          </button>
        </div>
      </div>
    </section>
  );
};
