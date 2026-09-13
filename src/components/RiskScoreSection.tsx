import React, { useState } from 'react';
import { AlertCircle, ShieldAlert, CheckCircle2, Sliders, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const RiskScoreSection: React.FC = () => {
  const { isDark } = useTheme();
  const [score, setScore] = useState<number>(72);

  // Geometry for 180-degree semicircular gauge
  // Center is at (110, 110), radius is 75
  const centerX = 110;
  const centerY = 110;
  const radius = 75;
  const needleLength = 64;

  const angleRad = Math.PI - (score / 100) * Math.PI;
  const needleX2 = centerX + needleLength * Math.cos(angleRad);
  const needleY2 = centerY - needleLength * Math.sin(angleRad);

  const isLow = score <= 30;
  const isMedium = score > 30 && score < 70;
  const isHigh = score >= 70;

  // Adaptive colors for Dark vs Light mode
  const cleanColor = isDark ? '#40e18a' : '#16a34a';
  const warningColor = isDark ? '#ffc2c2' : '#f59e0b';
  const errorColor = isDark ? '#ffb4ab' : '#dc2626';

  const scoreColor = isHigh ? errorColor : isMedium ? warningColor : cleanColor;
  const badgeText = isHigh ? 'High Risk Deepfake' : isMedium ? 'Suspicious Anomaly' : 'Authentic Human Speaker';

  const badgeClass = isDark
    ? isHigh
      ? 'bg-[#93000a] text-[#ffdad6] border border-[#ffb4ab]/40'
      : isMedium
      ? 'bg-[#ff999c]/20 text-[#ffc2c2] border border-[#ff999c]/30'
      : 'bg-[#40e18a]/15 text-[#40e18a] border border-[#40e18a]/30'
    : isHigh
    ? 'bg-red-50 text-red-700 border border-red-200'
    : isMedium
    ? 'bg-amber-50 text-amber-800 border border-amber-200'
    : 'bg-emerald-50 text-emerald-700 border border-emerald-200';

  return (
    <section id="risk-analysis" className={`px-4 sm:px-6 py-14 border-y transition-colors duration-200 ${
      isDark ? 'bg-[#0f1c2c] border-white/[0.04]' : 'bg-[#f0f5fa] border-slate-200'
    }`}>
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <span className={`font-mono text-xs uppercase font-bold tracking-widest mb-1.5 block ${
          isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'
        }`}>
          Unified Index
        </span>
        <h2 className={`font-headline text-2xl sm:text-3xl font-bold ${
          isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
        }`}>
          One score. Clearer decisions.
        </h2>
        <p className={`font-sans text-sm mt-1.5 max-w-sm leading-relaxed ${
          isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
        }`}>
          No ambiguous waveforms to interpret under pressure. A single, mathematically grounded index.
        </p>

        {/* Interactive Gauge Presets */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className={`font-mono text-xs flex items-center gap-1 ${
            isDark ? 'text-[#869397]' : 'text-slate-500'
          }`}>
            <Sliders size={13} /> Quick Presets:
          </span>
          <button
            onClick={() => setScore(18)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all border cursor-pointer ${
              score === 18
                ? isDark
                  ? 'bg-[#40e18a]/20 border-[#40e18a] text-[#40e18a] font-bold'
                  : 'bg-emerald-100 border-emerald-500 text-emerald-800 font-bold'
                : isDark
                ? 'bg-[#132030] text-[#bbc9cd] border-white/[0.06]'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            18 (Clean)
          </button>
          <button
            onClick={() => setScore(56)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all border cursor-pointer ${
              score === 56
                ? isDark
                  ? 'bg-[#ff999c]/20 border-[#ff999c] text-[#ffc2c2] font-bold'
                  : 'bg-amber-100 border-amber-500 text-amber-800 font-bold'
                : isDark
                ? 'bg-[#132030] text-[#bbc9cd] border-white/[0.06]'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            56 (Suspicious)
          </button>
          <button
            onClick={() => setScore(72)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all border cursor-pointer ${
              score === 72
                ? isDark
                  ? 'bg-[#ffb4ab]/20 border-[#ffb4ab] text-[#ffb4ab] font-bold'
                  : 'bg-red-100 border-red-500 text-red-700 font-bold'
                : isDark
                ? 'bg-[#132030] text-[#bbc9cd] border-white/[0.06]'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            72 (Deepfake)
          </button>
          <button
            onClick={() => setScore(87)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all border cursor-pointer ${
              score === 87
                ? isDark
                  ? 'bg-[#93000a] border-[#ffb4ab] text-[#ffdad6] font-bold'
                  : 'bg-red-600 border-red-700 text-white font-bold'
                : isDark
                ? 'bg-[#132030] text-[#bbc9cd] border-white/[0.06]'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            87 (Critical)
          </button>
        </div>

        {/* 100% Fully Visible Semicircular Risk Gauge */}
        <div className={`mt-8 w-full max-w-[360px] p-5 sm:p-6 rounded-3xl border flex flex-col items-center relative transition-colors duration-200 ${
          isDark
            ? 'bg-[#132030] border-white/[0.08] shadow-xl'
            : 'bg-white border-slate-200 shadow-lg'
        }`}>
          {/* Gauge SVG with ample viewBox margins so NO element is clipped */}
          <div className="w-full flex justify-center items-center py-2">
            <svg
              className="w-full max-w-[320px] h-auto overflow-visible select-none"
              viewBox="0 5 220 128"
            >
              <defs>
                {/* Needle Glow filter */}
                <filter id="needle-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor={scoreColor} floodOpacity="0.5" />
                </filter>
              </defs>

              {/* Full Background Track Arc (180 to 0 degrees) */}
              <path
                d="M 35 110 A 75 75 0 0 1 185 110"
                fill="none"
                stroke={isDark ? '#1e2b3b' : '#e2e8f0'}
                strokeLinecap="round"
                strokeWidth="15"
              />

              {/* Low Risk Zone Arc (0–30): from 180° to 126° */}
              {/* x = 110 - 75*cos(0) = 35, y = 110 */}
              {/* end at theta = 126° (0.7*PI rad): x = 110 + 75*cos(0.7*PI) = 65.9, y = 110 - 75*sin(0.7*PI) = 49.2 */}
              <path
                d="M 35 110 A 75 75 0 0 1 65.9 49.2"
                fill="none"
                opacity={isLow ? 1 : 0.45}
                stroke={cleanColor}
                strokeLinecap="round"
                strokeWidth="15"
                className="transition-all duration-300"
              />

              {/* Medium Risk Zone Arc (30–70): from 126° to 54° */}
              {/* end at theta = 54° (0.3*PI rad): x = 110 + 75*cos(0.3*PI) = 154.1, y = 110 - 75*sin(0.3*PI) = 49.2 */}
              <path
                d="M 65.9 49.2 A 75 75 0 0 1 154.1 49.2"
                fill="none"
                opacity={isMedium ? 1 : 0.45}
                stroke={warningColor}
                strokeWidth="15"
                className="transition-all duration-300"
              />

              {/* High Risk Zone Arc (70–100): from 54° to 0° */}
              {/* end at x = 185, y = 110 */}
              <path
                d="M 154.1 49.2 A 75 75 0 0 1 185 110"
                fill="none"
                opacity={isHigh ? 1 : 0.45}
                stroke={errorColor}
                strokeLinecap="round"
                strokeWidth="15"
                className="transition-all duration-300"
              />

              {/* Scale Tick Markers and Numerical Labels around the Arc */}
              <text x="24" y="114" fill={isDark ? '#869397' : '#64748b'} fontSize="9" fontFamily="JetBrains Mono" textAnchor="end" fontWeight="600">0</text>
              <text x="52" y="38" fill={isDark ? '#869397' : '#64748b'} fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="600">30</text>
              <text x="110" y="24" fill={isDark ? '#869397' : '#64748b'} fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="600">50</text>
              <text x="168" y="38" fill={isDark ? '#869397' : '#64748b'} fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="600">70</text>
              <text x="196" y="114" fill={isDark ? '#869397' : '#64748b'} fontSize="9" fontFamily="JetBrains Mono" textAnchor="start" fontWeight="600">100</text>

              {/* Ticks */}
              <line x1="110" y1="35" x2="110" y2="42" stroke={isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'} strokeWidth="1.5" />
              <line x1="65.9" y1="49.2" x2="70" y2="54" stroke={isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'} strokeWidth="1.5" />
              <line x1="154.1" y1="49.2" x2="150" y2="54" stroke={isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'} strokeWidth="1.5" />

              {/* Needle Line */}
              <line
                stroke={scoreColor}
                strokeLinecap="round"
                strokeWidth="4.5"
                x1={centerX}
                y1={centerY}
                x2={needleX2}
                y2={needleY2}
                filter="url(#needle-glow)"
                className="transition-all duration-300 ease-out"
              />

              {/* Center Pivot Hub */}
              <circle cx={centerX} cy={centerY} fill={scoreColor} r="8.5" />
              <circle cx={centerX} cy={centerY} fill={isDark ? '#061423' : '#ffffff'} r="3.5" />
            </svg>
          </div>

          {/* Dynamic Numeric Score readout - with comfortable margin */}
          <div className="mt-2 flex flex-col items-center">
            <div className="flex items-center gap-1.5">
              <span
                className="font-mono text-4xl sm:text-5xl font-extrabold tracking-tight transition-colors duration-300"
                style={{ color: scoreColor }}
              >
                {score}
              </span>
              <span className={`font-headline text-lg font-semibold ${
                isDark ? 'text-[#869397]' : 'text-slate-400'
              }`}>
                /100
              </span>
            </div>
            <div className={`px-3.5 py-1 rounded-full font-mono text-xs font-bold uppercase mt-1.5 transition-all ${badgeClass}`}>
              {badgeText}
            </div>
          </div>

          {/* Gauge Legend Ticks */}
          <div className={`w-full flex justify-between px-2 mt-4 font-mono text-xs pt-3 border-t ${
            isDark ? 'border-white/[0.06]' : 'border-slate-100'
          }`}>
            <span className={cleanColor + ' font-bold'}>0–30 Clean</span>
            <span className={warningColor + ' font-semibold'}>31–69 Suspicious</span>
            <span className={errorColor + ' font-bold'}>70+ AI Clone</span>
          </div>

          {/* Interactive Range Slider */}
          <div className="w-full mt-4 flex flex-col gap-1.5">
            <input
              type="range"
              min="0"
              max="100"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className="w-full accent-[#19c6e8] cursor-pointer h-2 bg-slate-200 rounded-lg dark:bg-slate-700"
            />
            <span className={`font-mono text-[11px] ${
              isDark ? 'text-[#869397]' : 'text-slate-500'
            }`}>
              Drag slider to test live detection dynamics
            </span>
          </div>
        </div>

        {/* Explainability Diagnostics Breakdown Panel */}
        <div className={`w-full mt-8 rounded-2xl p-4 sm:p-6 text-left flex flex-col gap-3.5 border transition-colors duration-200 ${
          isDark
            ? 'bg-[#132030] border-white/[0.06] shadow-md'
            : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className={`flex items-center justify-between pb-2 border-b ${
            isDark ? 'border-white/[0.06]' : 'border-slate-100'
          }`}>
            <span className={`font-headline text-base sm:text-lg font-bold ${
              isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
            }`}>
              Risk Attribution: Why?
            </span>
            <span className="font-mono text-xs font-bold" style={{ color: scoreColor }}>
              Confidence: {isHigh ? '94.2%' : isMedium ? '81.5%' : '98.7%'}
            </span>
          </div>

          <ul className={`flex flex-col gap-3 font-sans text-xs sm:text-sm ${
            isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
          }`}>
            <li className="flex items-start gap-2.5">
              {isHigh ? (
                <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-500" />
              ) : isMedium ? (
                <AlertCircle size={18} className="shrink-0 mt-0.5 text-amber-500" />
              ) : (
                <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-500" />
              )}
              <span>
                <strong className={isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}>
                  {isHigh
                    ? 'Synthetic spectral roll-off:'
                    : isMedium
                    ? 'Bandwidth compression artifact:'
                    : 'Natural full-spectrum resonance:'}
                </strong>{' '}
                {isHigh
                  ? 'High-frequency cuts characteristic of neural vocoder generation.'
                  : isMedium
                  ? 'Lossy cellular compression detected causing transient treble loss.'
                  : 'Harmonic frequency distributions consistent with human lung and vocal cord acoustics.'}
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              {isHigh ? (
                <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-500" />
              ) : isMedium ? (
                <AlertCircle size={18} className="shrink-0 mt-0.5 text-amber-500" />
              ) : (
                <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-500" />
              )}
              <span>
                <strong className={isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}>
                  {isHigh
                    ? 'Unnatural pitch contour:'
                    : isMedium
                    ? 'Slight pitch stabilization:'
                    : 'Micro-tremors & pitch jitter:'}
                </strong>{' '}
                {isHigh
                  ? 'Absence of micro-tremors and natural human vocal cord fluctuations.'
                  : isMedium
                  ? 'Pitch contour exhibits minor synthetic flatness during vowel elongation.'
                  : 'Healthy organic tremor micro-deviations (0.8–1.4%) present throughout speech.'}
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              {isHigh ? (
                <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-500" />
              ) : isMedium ? (
                <AlertCircle size={18} className="shrink-0 mt-0.5 text-amber-500" />
              ) : (
                <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-500" />
              )}
              <span>
                <strong className={isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}>
                  {isHigh
                    ? 'Acoustic fingerprint mismatch:'
                    : isMedium
                    ? 'Baseline deviation:'
                    : 'Biometric voiceprint match:'}
                </strong>{' '}
                {isHigh
                  ? '82% divergence from known baseline speaker vectors.'
                  : isMedium
                  ? 'Moderate distance from caller historical profile.'
                  : 'Vector cosine similarity score 0.984 matches authentic contact profile.'}
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              {isHigh ? (
                <AlertCircle size={18} className="shrink-0 mt-0.5 text-amber-500" />
              ) : isMedium ? (
                <AlertCircle size={18} className="shrink-0 mt-0.5 text-amber-500" />
              ) : (
                <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-500" />
              )}
              <span>
                <strong className={isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}>
                  {isHigh
                    ? 'Temporal pause cadence:'
                    : isMedium
                    ? 'Cadence regularity:'
                    : 'Natural breathing rhythm:'}
                </strong>{' '}
                {isHigh
                  ? 'Mechanical timing between clause transitions typical of text-to-speech inference.'
                  : isMedium
                  ? 'Cadence shows minor unnatural pause timing.'
                  : 'Organic pulmonary pauses and spontaneous conversational pacing.'}
              </span>
            </li>
          </ul>

          {/* Action Advisory Banner */}
          <div
            className={`mt-2 p-3.5 rounded-xl flex items-start gap-2.5 border transition-all ${
              isHigh
                ? isDark
                  ? 'bg-[#93000a]/25 border-[#ffb4ab]/30 text-[#ffb4ab]'
                  : 'bg-red-50 border-red-200 text-red-700'
                : isMedium
                ? isDark
                  ? 'bg-[#ff999c]/10 border-[#ffc2c2]/25 text-[#ffc2c2]'
                  : 'bg-amber-50 border-amber-200 text-amber-800'
                : isDark
                ? 'bg-[#40e18a]/10 border-[#40e18a]/25 text-[#40e18a]'
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}
          >
            {isHigh ? (
              <ShieldAlert size={20} className="shrink-0 mt-0.5 text-red-500" />
            ) : isMedium ? (
              <AlertCircle size={20} className="shrink-0 mt-0.5 text-amber-500" />
            ) : (
              <Shield size={20} className="shrink-0 mt-0.5 text-emerald-500" />
            )}
            <p className="font-mono text-xs font-medium leading-relaxed">
              {isHigh
                ? 'Advisory: Discontinue sensitive requests. Verify this contact immediately through an alternative channel or shared passphrase.'
                : isMedium
                ? 'Advisory: Exercise caution if caller requests sensitive credentials, passwords, or immediate banking wire transfers.'
                : 'Advisory: Acoustic perimeter confirms authentic human contact. No anomalous neural vocoder artifacts detected.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
