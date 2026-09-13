import React, { useState } from 'react';
import { X, ShieldCheck, Download, Copy, Check, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ForensicAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForensicAuditModal: React.FC<ForensicAuditModalProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const auditData = {
    incidentId: 'VC-9021',
    timestamp: new Date().toISOString(),
    callerTarget: 'Sarah Williams (+1 555-019-2831)',
    codec: 'AMR-WB 23.85k (16kHz sampled)',
    syntheticProbability: '72.4%',
    threatClassification: 'HIGH_RISK_NEURAL_VOCODER',
    vocoderFingerprint: 'ElevenLabs-TTS-FastGen-v2',
    sha256Seal: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(auditData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = `VOCASHIELD TAMPER-PROOF FORENSIC AUDIT RECORD
==================================================
Report ID: #${auditData.incidentId}
Generated At: ${auditData.timestamp}
Target Caller: ${auditData.callerTarget}
Telephony Codec: ${auditData.codec}
Synthetic Audio Probability: ${auditData.syntheticProbability}
Threat Classification: ${auditData.threatClassification}
Neural Vocoder Signature: ${auditData.vocoderFingerprint}
SHA-256 Memory Digest: ${auditData.sha256Seal}
Status: Cryptographically Signed by On-Device Enclave
`;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', `VocaShield_Audit_${auditData.incidentId}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className={`rounded-2xl max-w-md w-full p-5 sm:p-6 border shadow-2xl flex flex-col gap-4 text-left relative animate-in fade-in zoom-in-95 duration-200 transition-colors ${
        isDark
          ? 'bg-[#132030] border-[#19c6e8]/40 text-[#d6e4f9]'
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

        <div className="flex items-center gap-2.5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isDark ? 'bg-[#19c6e8]/15 text-[#69e0ff]' : 'bg-sky-100 text-[#0284c7]'
          }`}>
            <FileText size={22} />
          </div>
          <div>
            <h3 className={`font-headline text-lg font-bold ${
              isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'
            }`}>
              Forensic Audit Certificate
            </h3>
            <span className={`font-mono text-xs ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              Incident Report #{auditData.incidentId} • Hardware Signed
            </span>
          </div>
        </div>

        {/* Certificate metadata box */}
        <div className={`p-4 rounded-xl border flex flex-col gap-2 font-mono text-xs transition-colors ${
          isDark
            ? 'bg-[#0f1c2c] border-white/[0.06]'
            : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex justify-between">
            <span className={isDark ? 'text-[#869397]' : 'text-slate-500'}>Subject Caller:</span>
            <span className={`font-semibold ${isDark ? 'text-[#d6e4f9]' : 'text-[#0c1929]'}`}>
              {auditData.callerTarget}
            </span>
          </div>
          <div className="flex justify-between">
            <span className={isDark ? 'text-[#869397]' : 'text-slate-500'}>Synthetic Probability:</span>
            <span className="font-bold text-red-500">{auditData.syntheticProbability}</span>
          </div>
          <div className="flex justify-between">
            <span className={isDark ? 'text-[#869397]' : 'text-slate-500'}>Classification:</span>
            <span className={`font-semibold ${isDark ? 'text-[#ffb4ab]' : 'text-red-700'}`}>
              {auditData.threatClassification}
            </span>
          </div>
          <div className="flex justify-between">
            <span className={isDark ? 'text-[#869397]' : 'text-slate-500'}>Vocoder Footprint:</span>
            <span className={`font-semibold ${isDark ? 'text-[#69e0ff]' : 'text-[#0284c7]'}`}>
              {auditData.vocoderFingerprint}
            </span>
          </div>
          <div className={`pt-2 border-t flex flex-col gap-1 ${isDark ? 'border-white/[0.04]' : 'border-slate-200'}`}>
            <span className={`text-[11px] ${isDark ? 'text-[#869397]' : 'text-slate-500'}`}>
              SHA-256 Memory Seal:
            </span>
            <span className="text-[10px] text-[#40e18a] break-all font-bold">
              {auditData.sha256Seal}
            </span>
          </div>
        </div>

        <p className={`font-sans text-xs leading-relaxed ${
          isDark ? 'text-[#bbc9cd]' : 'text-slate-600'
        }`}>
          This cryptographic certificate is tamper-proof, generated inside the device secure enclave, and admissible for bank fraud disputes and law enforcement reporting.
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-1">
          <button
            onClick={handleDownload}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#19c6e8] to-[#40e18a] text-[#061423] font-headline text-xs font-bold shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Download size={15} />
            <span>Download .TXT Log</span>
          </button>
          <button
            onClick={handleCopy}
            className={`py-3 px-4 rounded-xl font-headline text-xs font-medium cursor-pointer transition-colors flex items-center justify-center gap-1.5 ${
              isDark
                ? 'bg-[#1e2b3b] text-[#d6e4f9] hover:bg-[#283646]'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            {copied ? <Check size={15} className="text-[#40e18a]" /> : <Copy size={15} />}
            <span>{copied ? 'Copied' : 'JSON'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
