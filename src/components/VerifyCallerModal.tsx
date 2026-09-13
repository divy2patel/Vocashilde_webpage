import React, { useState } from 'react';
import { CallScenario } from '../types';
import { X, ShieldAlert, KeyRound, Radio, Smartphone, CheckCircle, AlertTriangle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface VerifyCallerModalProps {
  scenario: CallScenario | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VerifyCallerModal: React.FC<VerifyCallerModalProps> = ({ scenario, isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [testMethod, setTestMethod] = useState<'passphrase' | 'watermark' | 'out-of-band'>('passphrase');
  const [challengeResult, setChallengeResult] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');

  if (!isOpen || !scenario) return null;

  const handleRunChallenge = () => {
    setChallengeResult('testing');
    setTimeout(() => {
      if (scenario.riskCategory === 'high') {
        setChallengeResult('failed');
      } else {
        setChallengeResult('success');
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className={`rounded-2xl max-w-md w-full p-5 sm:p-6 border shadow-2xl flex flex-col gap-4 text-left relative animate-in fade-in zoom-in-95 duration-200 transition-colors ${
        isDark
          ? 'bg-[#132030] border-[#69e0ff]/30 text-[#d6e4f9]'
          : 'bg-white border-slate-200 text-[#0c1929]'
      }`}>
        {/* Close */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors cursor-pointer ${
            isDark
              ? 'bg-[#1e2b3b] text-[#869397] hover:text-[#d6e4f9]'
              : 'bg-slate-100 text-slate-500 hover:text-slate-800'
          }`}
        >
          <X size={18} />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isDark ? 'bg-[#19c6e8]/15 text-[#69e0ff]' : 'bg-sky-100 text-[#0284c7]'
          }`}>
            <ShieldAlert size={22} />
          </div>
          <div>
            <h3 className={`font-headline text-lg font-bold ${
              isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
            }`}>
              In-Call Biometric Verification
            </h3>
            <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Challenge Target: {scenario.name} ({scenario.phone})
            </span>
          </div>
        </div>

        {/* Threat State Summary */}
        <div className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
          isDark
            ? 'bg-[#0f1c2c] border-white/[0.04]'
            : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <span className={`font-mono text-[11px] ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Live Risk Index
            </span>
            <div className="font-mono text-xl font-bold text-red-500">
              {scenario.riskScore}/100 ({scenario.riskCategory.toUpperCase()})
            </div>
          </div>
          <div className="text-right">
            <span className={`font-mono text-[11px] ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Vector Distance
            </span>
            <div className={`font-mono text-sm font-semibold ${isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}`}>
              {scenario.spectralJitter}
            </div>
          </div>
        </div>

        {/* Verification Methods */}
        <div className="flex flex-col gap-2">
          <span className={`font-mono text-xs uppercase tracking-wider font-semibold ${
            isDark ? 'text-[#869397]' : 'text-slate-500'
          }`}>
            Select Challenge Protocol
          </span>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => { setTestMethod('passphrase'); setChallengeResult('idle'); }}
              className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer text-left transition-all ${
                testMethod === 'passphrase'
                  ? isDark
                    ? 'bg-[#1e2b3b] border-[#69e0ff] text-[#d6e4f9]'
                    : 'bg-sky-50 border-sky-400 text-sky-900 ring-1 ring-sky-300'
                  : isDark
                  ? 'bg-[#0f1c2c] border-white/[0.04] text-[#bbc9cd]'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <KeyRound size={18} className={isDark ? "text-[#69e0ff] shrink-0" : "text-[#0284c7] shrink-0"} />
              <div>
                <div className="font-headline text-xs font-bold">Shared Memory Passphrase</div>
                <div className={`font-mono text-[11px] ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
                  Prompts caller for pre-registered shared family or executive secret
                </div>
              </div>
            </button>

            <button
              onClick={() => { setTestMethod('watermark'); setChallengeResult('idle'); }}
              className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer text-left transition-all ${
                testMethod === 'watermark'
                  ? isDark
                    ? 'bg-[#1e2b3b] border-[#69e0ff] text-[#d6e4f9]'
                    : 'bg-sky-50 border-sky-400 text-sky-900 ring-1 ring-sky-300'
                  : isDark
                  ? 'bg-[#0f1c2c] border-white/[0.04] text-[#bbc9cd]'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <Radio size={18} className="text-[#40e18a] shrink-0" />
              <div>
                <div className="font-headline text-xs font-bold">Sub-Audible Acoustic Chirp</div>
                <div className={`font-mono text-[11px] ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
                  Sends ultrasonic pulse through downlink to detect vocoder echo-back latency
                </div>
              </div>
            </button>

            <button
              onClick={() => { setTestMethod('out-of-band'); setChallengeResult('idle'); }}
              className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer text-left transition-all ${
                testMethod === 'out-of-band'
                  ? isDark
                    ? 'bg-[#1e2b3b] border-[#69e0ff] text-[#d6e4f9]'
                    : 'bg-sky-50 border-sky-400 text-sky-900 ring-1 ring-sky-300'
                  : isDark
                  ? 'bg-[#0f1c2c] border-white/[0.04] text-[#bbc9cd]'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <Smartphone size={18} className={isDark ? "text-[#69e0ff] shrink-0" : "text-[#0284c7] shrink-0"} />
              <div>
                <div className="font-headline text-xs font-bold">Out-of-Band Hardware Ping</div>
                <div className={`font-mono text-[11px] ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
                  Pings SIM secure enclave on caller's genuine registered device
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Results output */}
        {challengeResult === 'testing' && (
          <div className={`p-3 rounded-xl border text-center font-mono text-xs animate-pulse ${
            isDark
              ? 'bg-[#0f1c2c] border-[#69e0ff]/30 text-[#69e0ff]'
              : 'bg-sky-50 border-sky-200 text-sky-700'
          }`}>
            Transmitting verification payload over telephony downlink...
          </div>
        )}

        {challengeResult === 'failed' && (
          <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 flex items-start gap-2.5 text-left">
            <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-headline text-xs font-bold text-red-500">
                CHALLENGE FAILED — SYNTHETIC ACTOR DETECTED
              </div>
              <div className={`font-mono text-[11px] mt-0.5 ${isDark ? 'text-[#ffdad6]' : 'text-red-700'}`}>
                Downlink response latency was 480ms (typical of cloud generative neural model). No acoustic chirp reflection.
              </div>
            </div>
          </div>
        )}

        {challengeResult === 'success' && (
          <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-2.5 text-left">
            <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-headline text-xs font-bold text-emerald-600 dark:text-emerald-400">
                CHALLENGE PASSED — AUTHENTIC BIOMETRICS
              </div>
              <div className={`font-mono text-[11px] mt-0.5 ${isDark ? 'text-[#d6e4f9]' : 'text-slate-700'}`}>
                Physical hardware acoustic reflection confirmed. Caller verified as authentic contact.
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-1">
          <button
            onClick={handleRunChallenge}
            disabled={challengeResult === 'testing'}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#19c6e8] to-[#40e18a] text-[#061423] font-headline text-xs font-bold shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer disabled:opacity-50"
          >
            {challengeResult === 'testing' ? 'Testing...' : 'Execute Challenge'}
          </button>
          <button
            onClick={onClose}
            className={`py-3 px-4 rounded-xl font-headline text-xs font-medium cursor-pointer transition-colors ${
              isDark
                ? 'bg-[#1e2b3b] text-[#d6e4f9] hover:bg-[#283646]'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
