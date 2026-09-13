import React from 'react';
import { ShieldCheck, Eye, Activity, Lock, Users, HelpCircle, Smartphone, Layers, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, onNavigate }) => {
  const { isDark, toggleTheme } = useTheme();

  if (!isOpen) return null;

  const links = [
    { id: 'overview', label: 'Features & Demo', icon: <Eye size={18} /> },
    { id: 'how-it-works', label: 'How It Works', icon: <Activity size={18} /> },
    { id: 'risk-analysis', label: 'Risk Score & Gauge', icon: <ShieldCheck size={18} /> },
    { id: 'screens', label: 'Mobile App Screens', icon: <Smartphone size={18} /> },
    { id: 'defense-matrix', label: 'Defense Matrix', icon: <Layers size={18} /> },
    { id: 'privacy', label: 'Zero-Knowledge Privacy', icon: <Lock size={18} /> },
    { id: 'use-cases', label: 'Protection Use Cases', icon: <Users size={18} /> },
    { id: 'faq', label: 'FAQ & Support', icon: <HelpCircle size={18} /> },
  ];

  return (
    <div className={`fixed inset-0 z-40 backdrop-blur-2xl flex flex-col pt-24 px-4 sm:px-6 pb-safe animate-in fade-in duration-200 ${
      isDark ? 'bg-[#061423]/95 text-[#d6e4f9]' : 'bg-white/95 text-[#0c1929]'
    }`}>
      {/* Theme Switch Row */}
      <div className={`p-3 rounded-xl max-w-md mx-auto w-full flex items-center justify-between border ${
        isDark ? 'bg-[#132030] border-white/[0.08]' : 'bg-slate-100 border-slate-200'
      }`}>
        <span className="font-mono text-xs font-semibold">Theme Mode</span>
        <button
          onClick={toggleTheme}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold cursor-pointer border ${
            isDark
              ? 'bg-[#1e2b3b] text-[#69e0ff] border-white/[0.08]'
              : 'bg-white text-slate-800 border-slate-300 shadow-xs'
          }`}
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
          <span>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>

      <div className="flex flex-col gap-1.5 mt-3 max-w-md mx-auto w-full overflow-y-auto">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              onNavigate(link.id);
              onClose();
            }}
            className={`min-h-[46px] flex items-center gap-3 px-4 py-2.5 rounded-xl font-headline text-base border transition-all text-left cursor-pointer ${
              isDark
                ? 'text-[#d6e4f9] hover:text-[#69e0ff] hover:bg-[#132030] border-transparent hover:border-white/[0.08]'
                : 'text-[#0c1929] hover:text-[#0284c7] hover:bg-slate-100 border-transparent hover:border-slate-200'
            }`}
          >
            <span className={isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'}>{link.icon}</span>
            <span>{link.label}</span>
          </button>
        ))}
      </div>

      <div className={`mt-auto mb-8 p-4 rounded-xl border flex flex-col gap-1.5 max-w-md mx-auto w-full ${
        isDark ? 'bg-[#0f1c2c] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#40e18a] animate-pulse"></span>
          <span className="font-mono text-xs text-[#40e18a] uppercase font-semibold">Active Acoustic Shield</span>
        </div>
        <p className={`font-sans text-xs leading-relaxed ${isDark ? 'text-[#bbc9cd]' : 'text-slate-600'}`}>
          Zero-trust acoustic surveillance active on device hardware. No cloud audio uplink.
        </p>
      </div>
    </div>
  );
};
