import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileDrawer } from './components/MobileDrawer';
import { HeroSection } from './components/HeroSection';
import { LiveDetectionDemo } from './components/LiveDetectionDemo';
import { ArchitectureTimeline } from './components/ArchitectureTimeline';
import { RiskScoreSection } from './components/RiskScoreSection';
import { ScreensShowcase } from './components/ScreensShowcase';
import { FeaturesGrid } from './components/FeaturesGrid';
import { PrivacySection } from './components/PrivacySection';
import { UseCasesSection } from './components/UseCasesSection';
import { TechPipelineSection } from './components/TechPipelineSection';
import { ComparisonSection } from './components/ComparisonSection';
import { ImpactSection } from './components/ImpactSection';
import { DownloadCTA } from './components/DownloadCTA';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { VerifyCallerModal } from './components/VerifyCallerModal';
import { ForensicAuditModal } from './components/ForensicAuditModal';
import { TestFlightModal } from './components/TestFlightModal';
import { CallScenario } from './types';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { isDark } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [currentSectionLabel, setCurrentSectionLabel] = useState<string>('Overview');

  // Modals state
  const [selectedScenarioForVerify, setSelectedScenarioForVerify] = useState<CallScenario | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [isTestFlightOpen, setIsTestFlightOpen] = useState<boolean>(false);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll listener to update active tab and subheader label
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'risk-analysis', label: 'Risk Score' },
        { id: 'screens', label: 'App Screens' },
        { id: 'defense-matrix', label: 'Features' },
        { id: 'privacy', label: 'Privacy & Security' },
        { id: 'use-cases', label: 'Use Cases' },
        { id: 'download', label: 'Early Access' },
        { id: 'faq', label: 'FAQ & Support' }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentSectionLabel(sections[i].label);
          if (['overview', 'how-it-works', 'risk-analysis', 'use-cases', 'faq'].includes(sections[i].id)) {
            setActiveTab(sections[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 relative ${
      isDark
        ? 'bg-[#061423] text-[#d6e4f9] selection:bg-[#69e0ff] selection:text-[#003641]'
        : 'bg-[#f8fafc] text-[#0c1929] selection:bg-sky-200 selection:text-sky-950'
    }`}>
      {/* Header */}
      <Header
        onOpenDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
        isDrawerOpen={isDrawerOpen}
        onOpenDownload={() => setIsTestFlightOpen(true)}
        currentSection={currentSectionLabel}
      />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full pt-20">
        {/* 1. Hero Section with Interactive Phone Mockup */}
        <HeroSection
          onVerifyCaller={(scenario) => setSelectedScenarioForVerify(scenario)}
          onOpenDownload={() => setIsTestFlightOpen(true)}
        />

        {/* 2. Live Detection Demo Section with Waveforms */}
        <LiveDetectionDemo />

        {/* 3. Architecture Timeline (5 steps) */}
        <ArchitectureTimeline />

        {/* 4. Unified Risk Score Section (with interactive dial gauge) */}
        <RiskScoreSection />

        {/* 5. Mobile App Screens Showcase (5 in-call experiences) */}
        <ScreensShowcase
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        />

        {/* 6. Features Grid (Defense Matrix) */}
        <FeaturesGrid />

        {/* 7. Privacy & On-Device Security */}
        <PrivacySection />

        {/* 8. Use Cases */}
        <UseCasesSection />

        {/* 9. Technology Pipeline (Tensor stack) */}
        <TechPipelineSection />

        {/* 10. Comparison (Traditional vs VocaShield) */}
        <ComparisonSection />

        {/* 11. Social Impact & Metrics */}
        <ImpactSection />

        {/* 12. Download & Early Access CTA */}
        <DownloadCTA
          onOpenTestFlight={() => setIsTestFlightOpen(true)}
        />

        {/* 13. FAQ Accordion */}
        <FAQSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Fixed Bottom Navigation Dock */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={scrollToSection}
      />

      {/* Interactive Modals */}
      <VerifyCallerModal
        scenario={selectedScenarioForVerify}
        isOpen={!!selectedScenarioForVerify}
        onClose={() => setSelectedScenarioForVerify(null)}
      />

      <ForensicAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      <TestFlightModal
        isOpen={isTestFlightOpen}
        onClose={() => setIsTestFlightOpen(false)}
      />
    </div>
  );
}
