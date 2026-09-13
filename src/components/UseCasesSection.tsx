import React from 'react';
import { Users, Landmark, BadgeCheck, ShieldAlert, HeartHandshake, Headphones } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const UseCasesSection: React.FC = () => {
  const { isDark } = useTheme();

  const useCases = [
    {
      icon: <Users size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />,
      title: 'Family Scam Defense',
      desc: 'Neutralizes distress calls where an attacker clones your child or sibling\'s voice demanding instant bail or crypto transfers.'
    },
    {
      icon: <Landmark size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />,
      title: 'Financial Wire Fraud',
      desc: 'Flags spoofed banker and relationship manager audio attempting to authorize account overrides or OTP disclosures.'
    },
    {
      icon: <BadgeCheck size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />,
      title: 'Executive Impersonation',
      desc: 'Shields accounting teams from real-time CEO deepfakes directing urgent after-hours vendor payments.'
    },
    {
      icon: <ShieldAlert size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />,
      title: 'Official & Agency Spoofing',
      desc: 'Unmasks robocalls and automated agents falsely posing as tax departments, law enforcement, or border security.'
    },
    {
      icon: <HeartHandshake size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />,
      title: 'Senior Relative Safeguard',
      desc: 'Equips vulnerable older family members with a clear visual red/green screen HUD so they never make high-risk choices alone.'
    },
    {
      icon: <Headphones size={22} className={isDark ? "text-[#69e0ff]" : "text-[#0284c7]"} />,
      title: 'Call Center Trust Layer',
      desc: 'Gives enterprise support agents an instant biometric risk check when handling high-risk password and credential resets.'
    }
  ];

  return (
    <section id="use-cases" className={`px-4 sm:px-6 py-14 border-y transition-colors duration-200 ${
      isDark ? 'bg-[#020f1e] border-white/[0.04]' : 'bg-[#f4f7fb] border-slate-200'
    }`}>
      <div className="max-w-2xl mx-auto flex flex-col">
        {/* Header */}
        <div className="flex flex-col text-left mb-6">
          <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 ${
            isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
          }`}>
            Applications
          </span>
          <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
            isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
          }`}>
            Built for the moments that matter.
          </h2>
          <p className={`font-sans text-sm mt-1.5 leading-relaxed ${
            isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
          }`}>
            Synthetic audio attacks have crossed consumer and enterprise thresholds. VocaShield protects every scenario.
          </p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className={`p-4 sm:p-5 rounded-2xl flex flex-col gap-2 border text-left transition-all ${
                isDark
                  ? 'bg-[#132030] border-white/[0.06] hover:border-[#69e0ff]/30 shadow-md'
                  : 'bg-white border-slate-200 hover:border-sky-300 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-xl ${isDark ? 'bg-[#1e2b3b]' : 'bg-sky-50'}`}>
                  {uc.icon}
                </div>
                <h3 className={`font-headline text-base font-bold ${
                  isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
                }`}>
                  {uc.title}
                </h3>
              </div>
              <p className={`font-sans text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
              }`}>
                {uc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
