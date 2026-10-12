import React, { useState } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { playRetroClick, playRetroSelect } from '../utils/sound';

interface NavbarProps {
  soundOn: boolean;
  onToggleSound: () => void;
  scanlinesOn: boolean;
  onToggleScanlines: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundOn,
  onToggleSound,
  scanlinesOn,
  onToggleScanlines
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Games', href: '#games' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    playRetroClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    playRetroSelect();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b-2 border-[#5B0E2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Brand Wordmark (Single Element with pixel emblem) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-3 text-white tracking-wider group shrink-0 focus:outline-none"
          >
            {/* 8-bit Pixel Studio Crest */}
            <div className="w-10 h-10 bg-[#5B0E2D] border-2 border-[#800020] flex items-center justify-center shadow-[2px_2px_0px_#800020] group-hover:bg-[#800020] transition-colors">
              <span className="font-pixel text-xs text-[#F2E9E4] font-bold">IK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-pixel text-sm sm:text-base text-white tracking-widest font-bold group-hover:text-[#F2E9E4] transition-colors whitespace-nowrap">
                PT INDO KREASI
              </span>
              <span className="text-[10px] text-[#A39B95] tracking-wider uppercase">
                Game Development Studio
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-pixel text-xs tracking-wider text-[#A39B95] hover:text-[#F2E9E4] hover:underline decoration-[#800020] decoration-2 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Action Controls (Sound, CRT Toggle, Primary CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* CRT Scanline Toggle */}
            <button
              onClick={() => {
                playRetroClick();
                onToggleScanlines();
              }}
              title={scanlinesOn ? 'Matikan Efek CRT Scanline' : 'Aktifkan Efek CRT Scanline'}
              aria-label="Toggle CRT Scanlines"
              className={`p-2 border border-[#3A091D] hover:border-[#800020] transition-colors text-xs ${
                scanlinesOn ? 'bg-[#5B0E2D] text-white' : 'bg-[#120d14] text-[#A39B95]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
            </button>

            {/* Sound Effects Toggle */}
            <button
              onClick={() => {
                onToggleSound();
                if (!soundOn) playRetroClick();
              }}
              title={soundOn ? 'Matikan Suara SFX' : 'Aktifkan Suara SFX'}
              aria-label="Toggle Retro SFX"
              className={`p-2 border border-[#3A091D] hover:border-[#800020] transition-colors text-xs ${
                soundOn ? 'bg-[#5B0E2D] text-white' : 'bg-[#120d14] text-[#A39B95]'
              }`}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={handleCtaClick}
              className="hidden sm:inline-flex pixel-btn-primary px-4 py-2 text-xs tracking-wider font-semibold whitespace-nowrap shrink-0"
            >
              Hubungi Kami
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                playRetroClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Menu"
              className="md:hidden p-2 text-[#F2E9E4] bg-[#120d14] border border-[#5B0E2D] hover:bg-[#5B0E2D] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0a0e] border-b-2 border-[#5B0E2D] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-pixel text-sm text-[#F2E9E4] hover:text-white py-2 px-3 border border-transparent hover:border-[#5B0E2D] hover:bg-[#161019] transition-colors block"
              >
                &gt; {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#3A091D]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full pixel-btn-primary py-3 text-xs tracking-wider text-center block"
            >
              Hubungi Studio Kami
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
