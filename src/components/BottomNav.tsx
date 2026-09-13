import React from 'react';
import { Shield, Cpu, Radar, CheckSquare, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BottomNavProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const { isDark } = useTheme();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Shield size={20} /> },
    { id: 'how-it-works', label: 'Process', icon: <Cpu size={20} /> },
    { id: 'risk-analysis', label: 'Score', icon: <Radar size={20} /> },
    { id: 'use-cases', label: 'Cases', icon: <CheckSquare size={20} /> },
    { id: 'faq', label: 'FAQ', icon: <HelpCircle size={20} /> },
  ];

  return (
    <nav className={`fixed bottom-0 inset-x-0 z-50 pb-safe backdrop-blur-xl border-t transition-colors duration-200 ${
      isDark
        ? 'bg-[#061423]/90 border-white/[0.06] shadow-[0_-2px_10px_rgba(0,0,0,0.3)]'
        : 'bg-white/90 border-slate-200 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]'
    }`}>
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-12 min-h-[44px] min-w-[44px] transition-all cursor-pointer ${
                isActive
                  ? isDark
                    ? 'text-[#69e0ff] scale-105'
                    : 'text-[#0284c7] scale-105'
                  : isDark
                  ? 'text-[#bbc9cd] hover:text-[#d6e4f9]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className={`transition-transform duration-200 ${
                isActive ? (isDark ? 'drop-shadow-[0_0_6px_rgba(105,224,255,0.6)]' : 'drop-shadow-[0_0_4px_rgba(2,132,199,0.4)]') : ''
              }`}>
                {tab.icon}
              </span>
              <span className="font-mono text-[10px] tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
