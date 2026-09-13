import React, { useState } from 'react';
import { Smartphone, Apple, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DownloadCTAProps {
  onOpenTestFlight: () => void;
}

export const DownloadCTA: React.FC<DownloadCTAProps> = ({ onOpenTestFlight }) => {
  const { isDark } = useTheme();
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('VocaShield Beta Client v1.4 Manifest'));
      element.setAttribute('download', 'VocaShield_v1.4_Beta.apk');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 600);
  };

  return (
    <section id="download" className={`px-4 sm:px-6 py-14 border-y transition-colors duration-200 ${
      isDark ? 'bg-[#020f1e] border-white/[0.04]' : 'bg-[#f0f5fa] border-slate-200'
    }`}>
      <div className={`max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center border relative overflow-hidden transition-colors ${
        isDark
          ? 'bg-gradient-to-b from-[#132030] to-[#0f1c2c] border-white/[0.08] shadow-2xl'
          : 'bg-gradient-to-b from-white to-slate-50 border-slate-200 shadow-xl'
      }`}>
        {/* Top Glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-[#19c6e8]/15' : 'bg-sky-400/15'
        }`}></div>

        {/* Top Pill */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-3 ${
          isDark
            ? 'bg-[#1e2b3b] text-[#40e18a] border-white/[0.06]'
            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#40e18a] animate-pulse"></span>
          <span className="font-mono text-xs font-semibold uppercase">v1.4 Beta • Early Access Live</span>
        </div>

        {/* Headline */}
        <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
          isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
        }`}>
          Protect every conversation.
        </h2>
        <p className={`font-sans text-sm mt-2 max-w-sm leading-relaxed ${
          isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
        }`}>
          Download VocaShield and eliminate voice fraud anxiety. Setup takes less than 60 seconds.
        </p>

        {/* Primary Action CTA */}
        <button
          onClick={handleDownload}
          className="h-14 w-full max-w-xs rounded-2xl bg-gradient-to-r from-[#19c6e8] to-[#40e18a] flex items-center justify-center gap-2.5 font-headline text-base font-bold text-[#061423] shadow-xl shadow-[#19c6e8]/25 mt-6 hover:shadow-[#19c6e8]/40 active:scale-95 transition-all cursor-pointer"
        >
          {downloaded ? (
            <>
              <Check size={22} className="text-[#061423]" />
              <span>Downloaded APK Ready</span>
            </>
          ) : (
            <>
              <Smartphone size={22} className="text-[#061423]" />
              <span>Download for Android</span>
            </>
          )}
        </button>

        {/* iOS TestFlight Sub-Action */}
        <button
          onClick={onOpenTestFlight}
          className={`flex items-center gap-1.5 font-mono text-xs mt-3.5 transition-colors cursor-pointer ${
            isDark ? 'text-[#bbc9cd] hover:text-[#69e0ff]' : 'text-slate-600 hover:text-sky-600'
          }`}
        >
          <Apple size={15} />
          <span>iOS TestFlight invitations available here →</span>
        </button>

        {/* Meta Guarantee Details */}
        <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 pt-5 border-t w-full text-center ${
          isDark ? 'border-white/[0.04]' : 'border-slate-200'
        }`}>
          <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>Requires Android 11+ or iOS 17+</span>
          <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>Zero Cloud Audio Storage</span>
          <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>Free Tier Available</span>
        </div>
      </div>
    </section>
  );
};
