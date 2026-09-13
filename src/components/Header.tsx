import React from 'react';
import { LOGO_URL } from '../data/mockData';
import { Menu, X, User, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenDrawer: () => void;
  isDrawerOpen: boolean;
  onOpenDownload: () => void;
  currentSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDrawer,
  isDrawerOpen,
  onOpenDownload,
  currentSection
}) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b pt-safe transition-colors duration-200 ${
      isDark
        ? 'bg-[#061423]/85 border-white/[0.06] text-[#d6e4f9]'
        : 'bg-white/90 border-slate-200/90 text-[#0c1929] shadow-xs'
    }`}>
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div
          className="flex items-center gap-2.5 cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            alt="VocaShield Logo"
            className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(25,198,232,0.3)]"
            src={LOGO_URL}
          />
          <span className={`font-headline text-xl tracking-tight font-bold hidden xs:inline ${
            isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
          }`}>
            VocaShield
          </span>
        </div>

        {/* Desktop Quick Nav */}
        <nav className={`hidden md:flex items-center gap-6 text-sm font-medium ${
          isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
        }`}>
          <a href="#overview" className={`transition-colors ${isDark ? 'hover:text-[#69e0ff]' : 'hover:text-[#0284c7]'}`}>Overview</a>
          <a href="#how-it-works" className={`transition-colors ${isDark ? 'hover:text-[#69e0ff]' : 'hover:text-[#0284c7]'}`}>How It Works</a>
          <a href="#risk-analysis" className={`transition-colors ${isDark ? 'hover:text-[#69e0ff]' : 'hover:text-[#0284c7]'}`}>Risk Score</a>
          <a href="#screens" className={`transition-colors ${isDark ? 'hover:text-[#69e0ff]' : 'hover:text-[#0284c7]'}`}>Screens</a>
          <a href="#privacy" className={`transition-colors ${isDark ? 'hover:text-[#69e0ff]' : 'hover:text-[#0284c7]'}`}>Privacy</a>
          <a href="#use-cases" className={`transition-colors ${isDark ? 'hover:text-[#69e0ff]' : 'hover:text-[#0284c7]'}`}>Use Cases</a>
          <a href="#faq" className={`transition-colors ${isDark ? 'hover:text-[#69e0ff]' : 'hover:text-[#0284c7]'}`}>FAQ</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all cursor-pointer border ${
              isDark
                ? 'bg-[#132030] text-[#69e0ff] border-white/[0.08] hover:bg-[#1e2b3b]'
                : 'bg-slate-100 text-amber-500 border-slate-200 hover:bg-slate-200'
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Download CTA */}
          <button
            onClick={onOpenDownload}
            className="min-h-[40px] px-4 py-1.5 rounded-full bg-gradient-to-r from-[#19c6e8] to-[#40e18a] flex items-center justify-center font-headline text-xs text-[#061423] font-bold transition-all shadow-[0_4px_12px_rgba(25,198,232,0.25)] hover:shadow-[0_4px_20px_rgba(25,198,232,0.4)] active:scale-95 cursor-pointer"
          >
            <span>Download</span>
          </button>

          {/* Drawer Toggle */}
          <button
            aria-label="Toggle Navigation Menu"
            onClick={onOpenDrawer}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer border ${
              isDark
                ? 'bg-[#132030] text-[#bbc9cd] hover:text-[#69e0ff] hover:bg-[#1e2b3b] border-white/[0.06]'
                : 'bg-slate-100 text-slate-700 hover:text-[#0284c7] hover:bg-slate-200 border-slate-200'
            }`}
          >
            {isDrawerOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Profile Beacon */}
          <div className="w-8 h-8 rounded-full bg-[#19c6e8] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(25,198,232,0.3)]">
            <User size={16} className="text-[#061423]" />
          </div>
        </div>
      </div>

      {/* Subheader tracking */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-2 flex items-center justify-between">
        <span className={`font-mono text-[11px] uppercase tracking-wider block ${
          isDark ? 'text-[#869397]' : 'text-slate-500'
        }`}>
          {currentSection || 'Overview'}
        </span>
        <div className="flex items-center gap-1.5 text-[11px] text-[#40e18a] font-mono font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#40e18a] animate-pulse"></span>
          <span>Acoustic Engine Active</span>
        </div>
      </div>
    </header>
  );
};
