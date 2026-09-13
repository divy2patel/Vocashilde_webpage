import React, { useState } from 'react';
import { X, Apple, Check, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TestFlightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TestFlightModal: React.FC<TestFlightModalProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className={`rounded-2xl max-w-md w-full p-5 sm:p-6 border shadow-2xl flex flex-col gap-4 text-left relative animate-in fade-in zoom-in-95 duration-200 transition-colors ${
        isDark
          ? 'bg-[#132030] border-[#69e0ff]/30 text-[#d6e4f9]'
          : 'bg-white border-slate-200 text-[#0c1929]'
      }`}>
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

        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isDark ? 'bg-white/10 text-[#d6e4f9]' : 'bg-slate-100 text-slate-800'
          }`}>
            <Apple size={22} />
          </div>
          <div>
            <h3 className={`font-headline text-lg font-bold ${
              isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
            }`}>
              iOS TestFlight Early Access
            </h3>
            <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Build 1.4.2 (108) • CoreML Neural Engine
            </span>
          </div>
        </div>

        {submitted ? (
          <div className={`p-4 rounded-xl border flex flex-col gap-2 text-center ${
            isDark ? 'bg-[#004a27]/30 border-[#64fea4]/40' : 'bg-emerald-50 border-emerald-200'
          }`}>
            <div className="w-10 h-10 rounded-full bg-[#40e18a]/20 text-[#40e18a] flex items-center justify-center mx-auto">
              <Check size={22} />
            </div>
            <h4 className={`font-headline text-sm font-bold ${isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}`}>
              Invitation Sent to {email}
            </h4>
            <p className={`font-sans text-xs ${isDark ? 'text-[#bbc9cd]' : 'text-slate-600'}`}>
              Check your inbox for the Apple TestFlight redeem link. Install TestFlight on iOS 17+ and tap the link to begin testing.
            </p>
            <button
              onClick={onClose}
              className={`mt-2 py-2 px-4 rounded-xl text-xs font-mono transition-colors ${
                isDark ? 'bg-[#1e2b3b] text-[#d6e4f9] hover:bg-[#283646]' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
              }`}
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <p className={`font-sans text-xs leading-relaxed ${
              isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
            }`}>
              Join 850+ beta testers using VocaShield's on-device CoreML neural engine for iOS 17 CallKit integration.
            </p>

            <div className="flex flex-col gap-1.5">
              <label className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
                Apple ID Email Address:
              </label>
              <input
                type="email"
                required
                placeholder="name@icloud.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border font-sans text-sm focus:outline-none transition-all ${
                  isDark
                    ? 'bg-[#0f1c2c] border-white/[0.1] text-[#d6e4f9] focus:border-[#69e0ff]'
                    : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-500'
                }`}
              />
            </div>

            <button
              type="submit"
              className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#19c6e8] to-[#40e18a] text-[#061423] font-headline text-xs font-bold shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5 mt-1"
            >
              <Send size={14} />
              <span>Request TestFlight Invite</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
