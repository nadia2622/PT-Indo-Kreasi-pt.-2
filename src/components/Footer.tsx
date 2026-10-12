import React from 'react';
import { Gamepad2, ArrowUp } from 'lucide-react';
import { playRetroClick } from '../utils/sound';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    playRetroClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Games', href: '#games' },
    { label: 'About Studio', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'Steam', href: 'https://store.steampowered.com' },
    { label: 'itch.io', href: 'https://itch.io' },
    { label: 'Discord', href: 'https://discord.com' },
    { label: 'X (Twitter)', href: 'https://x.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-[#050406] border-t-2 border-[#5B0E2D] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-xs text-[#A39B95]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3A091D]">
          
          {/* Brand & Manifesto (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#5B0E2D] border border-[#800020] flex items-center justify-center">
                <span className="font-pixel text-xs text-[#F2E9E4] font-bold">IK</span>
              </div>
              <span className="font-pixel text-base text-white font-bold tracking-widest">
                PT INDO KREASI
              </span>
            </div>

            <p className="text-xs text-[#C4BCB6] leading-relaxed max-w-sm">
              Independent game development studio berbasis di Jakarta, Indonesia. 
              Membangun dunia pixel art dengan gameplay presisi dan cerita mendalam.
            </p>

            <div className="text-[11px] text-[#A39B95] font-mono">
              Crafting Worlds, One Pixel at a Time.
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-pixel text-xs text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => playRetroClick()}
                    className="hover:text-[#FF4D79] transition-colors"
                  >
                    &gt; {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Platforms (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-pixel text-xs text-white uppercase tracking-wider">
              Komunitas & Distribusi
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#120d14] border border-[#3A091D] hover:border-[#800020] hover:text-white transition-colors font-pixel text-[11px]"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="text-[11px] text-[#A39B95] font-mono pt-2">
              Hubungi kami untuk kolaborasi penerbitan atau ulasan media pers.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8C847E]">
          <div>
            © {currentYear} PT Indo Kreasi. Seluruh hak cipta dilindungi undang-undang.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#A39B95] hover:text-[#FF4D79] transition-colors cursor-pointer"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
