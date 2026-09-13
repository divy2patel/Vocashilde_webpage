import { CallScenario, FaqItem, UseCaseItem, TimelineStep } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1XDsSitNGuOnj-FWZuo_EJXjFFO8b5XQIkRneHh1l8u1olYZFIysX3Ogt9GY_FQvLborzUaqAzGzvtW7MnHnNHgaWMfvSVLmYsujtZBkH_B1eKMZQbo_LmZGYpkhh2eKAqs3usgJCvGGIcMjM9aX1kkXifFm1qyDBvFjKgjMv5JkbV1n6oY7tIeljcyR4akpo-qBFrRSKXRaGyBvR4my-Z9ielpS2wo5prR8rVdlTPJ_FAxYrMa5PyjfNlb";

export const CALL_SCENARIOS: CallScenario[] = [
  {
    id: 'sarah-williams',
    name: 'Sarah Williams',
    phone: '+1 (555) 019-2831',
    avatarInitials: 'SW',
    time: '00:38',
    riskScore: 72,
    riskCategory: 'high',
    riskTitle: 'High Risk • Probabilistic',
    statusTag: 'AI-generated voice suspected',
    spectralJitter: 'Abnormal (84%)',
    prosodyMatch: 'Mismatch',
    speakerMatchPercent: 18,
    waveformPattern: [12, 28, 16, 32, 10, 24, 30, 18],
    advisoryNote: 'Advisory: Discontinue sensitive requests. Verify this contact immediately through an alternative channel or shared passphrase.',
    reasons: [
      'Synthetic spectral roll-off: High-frequency cuts characteristic of neural vocoder generation.',
      'Unnatural pitch contour: Absence of micro-tremors and natural human vocal cord fluctuations.',
      'Acoustic fingerprint mismatch: 82% divergence from known baseline speaker vectors.',
      'Temporal pause cadence: Mechanical timing between clause transitions.'
    ],
    telemetryFlags: [
      { name: 'Pitch Variance Consistency', value: 'Low Variance (Flag)', severity: 'critical' },
      { name: 'Speaker Vector Mismatch', value: 'Critical (91%)', severity: 'critical' },
      { name: 'Synthetic Spectral Artifacts', value: 'Detected @ 8kHz', severity: 'critical' },
      { name: 'Cadence & Unnatural Pauses', value: 'Present', severity: 'warning' }
    ]
  },
  {
    id: 'mom-personal',
    name: 'Mom (Personal)',
    phone: '+1 (555) 482-9912',
    avatarInitials: 'MP',
    time: '01:24',
    riskScore: 18,
    riskCategory: 'low',
    riskTitle: 'Low Risk • Verified Human',
    statusTag: 'Authentic human voice confirmed',
    spectralJitter: 'Nominal (12%)',
    prosodyMatch: 'Natural Match (98%)',
    speakerMatchPercent: 97,
    waveformPattern: [14, 18, 22, 19, 15, 20, 16, 12],
    advisoryNote: 'Safe to proceed: Authentic biometric acoustics and natural breathing intervals verified.',
    reasons: [
      'Natural sub-harmonic vocal cord resonance detected across 120Hz-2.4kHz range.',
      'Organic emotional inflection dynamics and conversational micro-hesitations.',
      'Biometric voiceprint matches verified personal profile with 97.4% confidence.'
    ],
    telemetryFlags: [
      { name: 'Pitch Variance Consistency', value: 'Dynamic / Organic', severity: 'nominal' },
      { name: 'Speaker Vector Mismatch', value: 'Nominal (2.6%)', severity: 'nominal' },
      { name: 'Synthetic Spectral Artifacts', value: 'None Detected', severity: 'nominal' },
      { name: 'Cadence & Unnatural Pauses', value: 'Natural Human Flow', severity: 'nominal' }
    ]
  },
  {
    id: 'chase-fraud',
    name: 'Chase Fraud Helpline',
    phone: '+1 (800) 935-9935',
    avatarInitials: 'CF',
    time: '00:51',
    riskScore: 87,
    riskCategory: 'high',
    riskTitle: 'Critical Risk • Spoofed Entity',
    statusTag: 'CRITICAL: Real-Time Clone Confirmed',
    spectralJitter: 'Severe Artifacts (94%)',
    prosodyMatch: 'Synthetic Model v4',
    speakerMatchPercent: 9,
    waveformPattern: [34, 30, 26, 36, 12, 34, 28, 32],
    advisoryNote: 'DANGER: Impersonation attack detected targeting banking credentials. Terminate call immediately.',
    reasons: [
      'Known ElevenLabs neural vocoder frequency fingerprint detected at 16.4 kHz.',
      'Robotic latency patterns between prompt inputs and acoustic responses.',
      'Caller ID spoofing signature detected alongside VoIP transmission anomalies.'
    ],
    telemetryFlags: [
      { name: 'Pitch Variance Consistency', value: 'Monotone Flattening', severity: 'critical' },
      { name: 'Speaker Vector Mismatch', value: 'Extreme (96%)', severity: 'critical' },
      { name: 'Synthetic Spectral Artifacts', value: 'Neural Model Match', severity: 'critical' },
      { name: 'Cadence & Unnatural Pauses', value: 'Synthetic Splicing', severity: 'critical' }
    ]
  },
  {
    id: 'unknown-recruiter',
    name: 'Unknown Recruiter',
    phone: '+1 (415) 890-1204',
    avatarInitials: 'UR',
    time: '00:42',
    riskScore: 56,
    riskCategory: 'medium',
    riskTitle: 'Medium Risk • Anomaly Detected',
    statusTag: 'Elevated acoustic irregularities',
    spectralJitter: 'Elevated (58%)',
    prosodyMatch: 'Uncertain Baseline',
    speakerMatchPercent: 44,
    waveformPattern: [16, 24, 18, 20, 22, 18, 24, 14],
    advisoryNote: 'Caution advised: High background noise or lossy cellular codec interfering with acoustic baseline.',
    reasons: [
      'Heavy GSM codec compression obscuring natural high-frequency breath signatures.',
      'Unusual sentence cadence that warrants caller challenge verification.',
      'Continuous acoustic monitoring engaged to establish baseline confidence.'
    ],
    telemetryFlags: [
      { name: 'Pitch Variance Consistency', value: 'Marginal Fluctuation', severity: 'warning' },
      { name: 'Speaker Vector Mismatch', value: 'Inconclusive (56%)', severity: 'warning' },
      { name: 'Synthetic Spectral Artifacts', value: 'Borderline Spike', severity: 'warning' },
      { name: 'Cadence & Unnatural Pauses', value: 'Unusual Rhythm', severity: 'warning' }
    ]
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNumber: 1,
    phase: 'Step 01 — Ingest',
    title: 'Secure Listen Hook',
    description: 'Securely taps the transient call stream locally using protected mobile operating system telephony hooks.'
  },
  {
    stepNumber: 2,
    phase: 'Step 02 — Scrub',
    title: 'Acoustic Clean',
    description: 'Strips ambient room reverb, cellular compression codecs, and network jitter to isolate the raw vocal tract signature.'
  },
  {
    stepNumber: 3,
    phase: 'Step 03 — Dissect',
    title: 'Feature Extraction',
    description: 'Deconstructs phonemes into spectral spectrograms, pitch harmonics, and subtle prosodic breathing rhythms.'
  },
  {
    stepNumber: 4,
    phase: 'Step 04 — Infer',
    title: 'Neural Detection',
    description: 'Runs audio frames through a quantized on-device neural network trained across 1.4M synthetic voice samples.'
  },
  {
    stepNumber: 5,
    phase: 'Step 05 — Shield',
    title: 'Live Risk Score & Alert',
    description: 'Synthesizes signals into a definitive 0–100 probabilistic score with non-intrusive haptic alerts.'
  }
];

export const USE_CASES: UseCaseItem[] = [
  {
    icon: 'diversity_1',
    title: 'Family Scam Defense',
    description: 'Neutralizes distress calls where an attacker clones your child or sibling\'s voice demanding instant bail or crypto transfers.'
  },
  {
    icon: 'account_balance',
    title: 'Financial Wire Fraud',
    description: 'Flags spoofed banker and relationship manager audio attempting to authorize account overrides or OTP disclosures.'
  },
  {
    icon: 'badge',
    title: 'Executive Impersonation',
    description: 'Shields accounting teams from real-time CEO deepfakes directing urgent after-hours vendor payments.'
  },
  {
    icon: 'local_police',
    title: 'Official & Agency Spoofing',
    description: 'Unmasks robocalls and automated agents falsely posing as tax departments, law enforcement, or border security.'
  },
  {
    icon: 'elderly',
    title: 'Senior Relative Safeguard',
    description: 'Equips vulnerable older family members with a clear visual red/green screen HUD so they never make high-risk choices alone.'
  },
  {
    icon: 'headset_mic',
    title: 'Call Center Trust Layer',
    description: 'Gives enterprise support agents an instant biometric risk check when handling high-risk password and credential resets.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is an AI-cloned voice?',
    answer: 'An AI-cloned voice is synthetic audio generated by a neural network trained on snippets of a person\'s real voice. Modern tools require as little as 3 seconds of audio to convincingly reproduce timbre, accent, and emotional inflection.'
  },
  {
    id: 'faq-2',
    question: 'How does VocaShield detect AI voices?',
    answer: 'While generative AI sounds human to the ear, it leaves distinct acoustic artifacts: phase inconsistencies, artificial pitch stability, absent micro-tremors, and synthetic spectral roll-offs. VocaShield deconstructs these micro-features in real time.'
  },
  {
    id: 'faq-3',
    question: 'What does the 0–100 score mean?',
    answer: '0–30 indicates a high-confidence authentic human speaker. 31–69 indicates unusual audio traits (low cellular bitrate or suspicious frequency distributions). 70–100 indicates active synthetic voice characteristics.'
  },
  {
    id: 'faq-4',
    question: 'Does VocaShield record or store my calls?',
    answer: 'No. VocaShield never stores audio files or transmits voice recordings to cloud servers. Audio buffers are processed purely in volatile device RAM and instantly discarded after mathematical feature extraction.'
  },
  {
    id: 'faq-5',
    question: 'Can VocaShield guarantee 100% detection?',
    answer: 'No security system is infallible. VocaShield provides probabilistic confidence metrics (typically over 99% accuracy against state-of-the-art TTS models), but should always be paired with common-sense verification on financial matters.'
  },
  {
    id: 'faq-6',
    question: 'Does it work with unknown callers?',
    answer: 'Yes. VocaShield does not require a prior voice sample to detect AI synthesis artifacts. Universal vocoder and acoustic anomaly detectors operate independently of caller identity.'
  },
  {
    id: 'faq-7',
    question: 'Can it work completely offline?',
    answer: 'Yes. The quantized neural engine resides permanently on your device\'s storage and runs via local NPU/GPU acceleration without requiring an active internet connection.'
  },
  {
    id: 'faq-8',
    question: 'Does it replace bank OTP or 2FA?',
    answer: 'No. VocaShield acts as an early warning acoustic perimeter to prevent social engineering. It complements standard two-factor authentication and bank security policies.'
  }
];

export interface DetectionStage {
  id: string;
  duration: string;
  status: string;
  artifact: string;
  score: number;
  label: string;
}

export const DETECT_TIMELINE_STAGES: DetectionStage[] = [
  {
    id: 'stage-1',
    duration: '00:04',
    status: 'Buffering & Scrubbing',
    artifact: 'GSM Codec Filtering',
    score: 12,
    label: 'Call Stream Ingest'
  },
  {
    id: 'stage-2',
    duration: '00:14',
    status: 'Baseline Established',
    artifact: 'Organic Phoneme Spans',
    score: 28,
    label: 'Harmonic Extraction'
  },
  {
    id: 'stage-3',
    duration: '00:26',
    status: 'Acoustic Anomaly',
    artifact: 'Neural Vocoder Cutoff @ 8kHz',
    score: 64,
    label: 'Spectrogram Drift'
  },
  {
    id: 'stage-4',
    duration: '00:38',
    status: 'Deepfake Confirmed',
    artifact: 'Phase Splicing & Synthetic Jitter',
    score: 87,
    label: 'High-Risk Tensor Fusion'
  }
];

export interface TelemetryFlagItem {
  name: string;
  value: string;
  status: 'nominal' | 'alert';
}

export const TELEMETRY_FLAGS: TelemetryFlagItem[] = [
  { name: 'Phase Continuity', value: '42.1ms (Disrupted)', status: 'alert' },
  { name: 'Breathing Interval', value: 'None Detected', status: 'alert' },
  { name: 'Vocoder Footprint', value: 'ElevenLabs FastGen', status: 'alert' },
  { name: 'Hardware NPU Latency', value: '38ms (Real-Time)', status: 'nominal' }
];
