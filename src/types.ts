export type RiskLevel = 'low' | 'medium' | 'high';

export interface CallScenario {
  id: string;
  name: string;
  phone: string;
  avatarInitials: string;
  time: string;
  riskScore: number;
  riskCategory: RiskLevel;
  riskTitle: string;
  statusTag: string;
  spectralJitter: string;
  prosodyMatch: string;
  speakerMatchPercent: number;
  telemetryFlags: {
    name: string;
    value: string;
    severity: 'nominal' | 'warning' | 'critical';
  }[];
  waveformPattern: number[];
  advisoryNote: string;
  reasons: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface UseCaseItem {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  stepNumber: number;
  phase: string;
  title: string;
  description: string;
  badgeColor?: string;
}
