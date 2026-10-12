import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GameShowcase } from './components/GameShowcase';
import { About } from './components/About';
import { InteractivePixelTester } from './components/InteractivePixelTester';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { toggleSound, isSoundEnabled } from './utils/sound';

export default function App() {
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [scanlinesOn, setScanlinesOn] = useState<boolean>(true);
  const [inquiryService, setInquiryService] = useState<string>('');

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const handleToggleScanlines = () => {
    setScanlinesOn((prev) => !prev);
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2E9E4] selection:bg-[#800020] selection:text-white flex flex-col relative font-sans">
      
      {/* Optional CRT Scanlines Layer */}
      {scanlinesOn && (
        <div 
          className="fixed inset-0 z-40 pointer-events-none scanlines-overlay opacity-35" 
          aria-hidden="true" 
        />
      )}

      {/* Primary Top Navigation Bar */}
      <Navbar
        soundOn={soundOn}
        onToggleSound={handleToggleSound}
        scanlinesOn={scanlinesOn}
        onToggleScanlines={handleToggleScanlines}
      />

      {/* Main Page Flow following PRD Navigation Hierarchy */}
      <main className="flex-1">
        {/* FR-02: Hero Section */}
        <Hero />

        {/* FR-03: Game Showcase */}
        <GameShowcase />

        {/* FR-04: About Studio */}
        <About />

        {/* Interactive Pixel Forge / Sprite Animator */}
        <InteractivePixelTester />

        {/* FR-05: Services */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* FR-06: Contact & Inquiries */}
        <Contact prefilledService={inquiryService} />
      </main>

      {/* FR-07: Footer */}
      <Footer />

    </div>
  );
}
