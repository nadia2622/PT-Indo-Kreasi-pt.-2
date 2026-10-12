import React from 'react';
import { Gamepad2, Compass, Play, ChevronDown } from 'lucide-react';
import { playRetroClick, playRetroSelect } from '../utils/sound';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    playRetroSelect();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 pixel-grid-bg overflow-hidden border-b-2 border-[#3A091D]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#5B0E2D]/20 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Quiet Metadata Kicker */}
            <div className="flex items-center gap-3 text-xs tracking-widest text-[#A39B95] font-pixel uppercase">
              <span className="text-[#9E0028] font-bold">Studio Independen</span>
              <span aria-hidden="true">·</span>
              <span>Est. Jakarta, Indonesia</span>
              <span aria-hidden="true">·</span>
              <span>16-Bit Artisans</span>
            </div>

            {/* Dominant Headline (PRD Suggested) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-tight font-pixel">
              Crafting Worlds,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E0028] via-[#FF4D79] to-[#F2E9E4]">
                One Pixel
              </span>{' '}
              at a Time.
            </h1>

            {/* Subtitle / Studio Bio */}
            <p className="text-base sm:text-lg text-[#D0C7C1] max-w-2xl leading-relaxed font-normal">
              PT Indo Kreasi adalah studio pengembang game independen yang berdedikasi memadukan 
              estetika pixel art abadi dengan mekanik gameplay modern yang tajam, narasi emosional, 
              dan pengalaman bermain yang membekas di hati para pemain.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('games')}
                className="pixel-btn-primary px-6 py-3.5 text-xs sm:text-sm tracking-wider font-semibold flex items-center gap-2 cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Explore Our Games</span>
              </button>

              <button
                onClick={() => scrollTo('about')}
                className="pixel-btn-secondary px-6 py-3.5 text-xs sm:text-sm tracking-wider font-semibold flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#A39B95]" />
                <span>About Our Studio</span>
              </button>
            </div>

            {/* Quiet Trust / Studio Highlights (Adheres to zero-pill discipline) */}
            <div className="pt-6 border-t border-[#3A091D]/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="font-pixel text-xl sm:text-2xl font-bold text-white tabular-nums">4+</p>
                <p className="text-xs text-[#A39B95] tracking-wide mt-1">Judul Portofolio</p>
              </div>
              <div>
                <p className="font-pixel text-xl sm:text-2xl font-bold text-[#FF4D79] tabular-nums">100%</p>
                <p className="text-xs text-[#A39B95] tracking-wide mt-1">Handcrafted Art</p>
              </div>
              <div>
                <p className="font-pixel text-xl sm:text-2xl font-bold text-white tabular-nums">60 FPS</p>
                <p className="text-xs text-[#A39B95] tracking-wide mt-1">Precision Physics</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Retro Game Frame & Pixel Art Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="pixel-card p-3 bg-[#110c14] border-2 border-[#5B0E2D] shadow-[6px_6px_0px_#3A091D] group">
              
              {/* Retro Pixel Corners */}
              <div className="pixel-corner-tl" />
              <div className="pixel-corner-tr" />
              <div className="pixel-corner-bl" />
              <div className="pixel-corner-br" />

              {/* Console Monitor Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#1b121f] border-b border-[#3A091D] mb-2 text-[11px] font-pixel text-[#A39B95]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#800020] border border-[#FF4D79]" />
                  <span className="text-white">IK-CORE DISPLAY</span>
                </div>
                <span>RGB 16-BIT</span>
              </div>

              {/* Main Pixel Art Showcase Screen */}
              <div className="relative aspect-video overflow-hidden border border-[#3A091D] bg-black">
                <img
                  src="/src/assets/images/hero_pixel_studio_world_1791777226121.jpg"
                  alt="Aethelgard World - PT Indo Kreasi Pixel Art Concept"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* In-Screen Overlay Badge */}
                <div className="absolute bottom-2 left-2 right-2 p-2 bg-[#080808]/85 backdrop-blur-sm border border-[#5B0E2D] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-pixel text-[11px] text-white">WORLD SHOWCASE</p>
                    <p className="text-[10px] text-[#A39B95]">Aethelgard: Kingdom of Ashes</p>
                  </div>
                  <button
                    onClick={() => scrollTo('games')}
                    className="p-1.5 bg-[#800020] text-white hover:bg-[#9E0028] transition-colors"
                    title="Lihat Detail Game"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>

              {/* Monitor Footer Info */}
              <div className="flex items-center justify-between pt-2 px-1 text-[10px] text-[#A39B95] font-mono">
                <span>V-SYNC: LOCKED</span>
                <span>ORIGINAL SOUNDTRACK PREVIEW</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-12">
          <button
            onClick={() => scrollTo('games')}
            className="flex flex-col items-center gap-2 text-xs font-pixel text-[#A39B95] hover:text-[#F2E9E4] transition-colors focus:outline-none cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#FF4D79]" />
          </button>
        </div>

      </div>
    </section>
  );
};
