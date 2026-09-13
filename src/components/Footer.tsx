import React from 'react';
import { LOGO_URL } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`w-full pt-14 pb-28 px-4 sm:px-6 flex flex-col gap-6 border-t shadow-xs transition-colors duration-200 ${
      isDark
        ? 'bg-[#020f1e] border-white/[0.06] text-[#d6e4f9]'
        : 'bg-slate-100 border-slate-200 text-[#0c1929]'
    }`}>
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-6 text-left">
        {/* Brand Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <img
              alt="VocaShield Logo"
              className="h-7 w-auto object-contain drop-shadow-[0_0_8px_rgba(25,198,232,0.3)]"
              src={LOGO_URL}
            />
            <span className={`font-headline text-lg font-bold ${
              isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
            }`}>
              VocaShield
            </span>
          </div>
          <p className={`font-sans text-xs sm:text-sm mt-1 max-w-md leading-relaxed ${
            isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
          }`}>
            Protecting trust in every conversation with real-time acoustic neural defense.
          </p>
          <div className={`inline-flex items-center gap-2 mt-2 self-start px-3 py-1 rounded-full border font-mono text-[11px] ${
            isDark
              ? 'bg-[#132030] border-white/[0.06] text-[#40e18a]'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#40e18a] animate-pulse"></span>
            <span>EARLY ACCESS V2.4 SECURED</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className={`grid grid-cols-2 gap-6 pt-3 border-t ${
          isDark ? 'border-white/[0.04]' : 'border-slate-200'
        }`}>
          <div className="flex flex-col gap-2">
            <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
            }`}>
              Platform
            </span>
            <a href="#how-it-works" className={`font-sans text-xs transition-colors py-0.5 ${
              isDark ? 'text-[#bbc9cd] hover:text-[#d6e4f9]' : 'text-slate-600 hover:text-slate-900'
            }`}>
              Neural Engine
            </a>
            <a href="#privacy" className={`font-sans text-xs transition-colors py-0.5 ${
              isDark ? 'text-[#bbc9cd] hover:text-[#d6e4f9]' : 'text-slate-600 hover:text-slate-900'
            }`}>
              Voice Vault Sandbox
            </a>
            <a href="#defense-matrix" className={`font-sans text-xs transition-colors py-0.5 ${
              isDark ? 'text-[#bbc9cd] hover:text-[#d6e4f9]' : 'text-slate-600 hover:text-slate-900'
            }`}>
              Zero-Trust Acoustic API
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
            }`}>
              Compliance
            </span>
            <a href="#privacy" className={`font-sans text-xs transition-colors py-0.5 ${
              isDark ? 'text-[#bbc9cd] hover:text-[#d6e4f9]' : 'text-slate-600 hover:text-slate-900'
            }`}>
              Privacy Policy
            </a>
            <a href="#faq" className={`font-sans text-xs transition-colors py-0.5 ${
              isDark ? 'text-[#bbc9cd] hover:text-[#d6e4f9]' : 'text-slate-600 hover:text-slate-900'
            }`}>
              Terms of Service
            </a>
            <span className={`font-sans text-xs py-0.5 ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              SOC2 & ISO 27001 Validated
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-4 border-t ${isDark ? 'border-white/[0.04]' : 'border-slate-200'}`}>
          <p className={`font-mono text-[11px] ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
            © {new Date().getFullYear()} VocaShield Global CyberDefense Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
