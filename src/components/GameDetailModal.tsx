import React, { useEffect } from 'react';
import { X, ExternalLink, Monitor, Cpu, CheckCircle2, Gamepad2 } from 'lucide-react';
import { GameItem } from '../data/games';
import { playRetroClick, playRetroClose } from '../utils/sound';

interface GameDetailModalProps {
  game: GameItem | null;
  onClose: () => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({ game, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playRetroClose();
        onClose();
      }
    };
    if (game) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [game, onClose]);

  if (!game) return null;

  const handleClose = () => {
    playRetroClose();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-game-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="pixel-card bg-[#120d15] border-2 border-[#800020] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-[8px_8px_0px_#3A091D] p-5 sm:p-7 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pixel corners */}
        <div className="pixel-corner-tl" />
        <div className="pixel-corner-tr" />
        <div className="pixel-corner-bl" />
        <div className="pixel-corner-br" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-[#3A091D] pb-4 mb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A39B95] mb-1">
              <span className="text-[#FF4D79] font-pixel text-[10px]">{game.genre}</span>
              <span aria-hidden="true">·</span>
              <span>Status: {game.status}</span>
              <span aria-hidden="true">·</span>
              <span>Target: {game.releaseYear}</span>
            </div>
            <h2 id="modal-game-title" className="font-pixel text-xl sm:text-2xl text-white font-bold">
              {game.title}
            </h2>
          </div>

          <button
            onClick={handleClose}
            aria-label="Tutup Detail"
            className="p-1.5 bg-[#1f1322] border border-[#5B0E2D] hover:bg-[#800020] text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Game Banner Image */}
        <div className="aspect-video w-full overflow-hidden border-2 border-[#3A091D] mb-6 bg-black relative">
          <img
            src={game.image}
            alt={game.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-[#080808]/90 px-3 py-1 border border-[#5B0E2D] text-xs font-pixel text-[#F2E9E4]">
            IN-GAME RESOLUTION: 16-BIT RETRO
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6">
          
          {/* Synopsis */}
          <div>
            <h3 className="font-pixel text-xs text-[#FF4D79] tracking-wider uppercase mb-2">
              Sinopsis & Konsep Permainan
            </h3>
            <p className="text-sm sm:text-base text-[#D0C7C1] leading-relaxed">
              {game.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-pixel text-xs text-[#FF4D79] tracking-wider uppercase mb-3">
              Fitur Utama Game
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {game.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 bg-[#17101b] border border-[#3A091D] text-xs text-[#E2DAD4]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#800020] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs & Platforms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#3A091D]">
            <div className="p-3 bg-[#17101b] border border-[#3A091D]">
              <div className="flex items-center gap-2 text-xs font-pixel text-white mb-2">
                <Cpu className="w-4 h-4 text-[#FF4D79]" />
                <span>Teknologi & Engine</span>
              </div>
              <p className="text-xs text-[#A39B95] font-mono">{game.engine}</p>
            </div>

            <div className="p-3 bg-[#17101b] border border-[#3A091D]">
              <div className="flex items-center gap-2 text-xs font-pixel text-white mb-2">
                <Monitor className="w-4 h-4 text-[#FF4D79]" />
                <span>Dukungan Platform</span>
              </div>
              <p className="text-xs text-[#A39B95] font-mono">
                {game.platforms.join(' · ')}
              </p>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#3A091D]">
            <p className="text-[11px] text-[#A39B95] font-mono">
              *Hak Cipta Portofolio & Desain Terdaftar oleh PT Indo Kreasi.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playRetroClick();
                  alert(`Informasi wishlist untuk "${game.title}" telah disiapkan.`);
                }}
                className="pixel-btn-primary px-4 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Wishlist Game</span>
              </button>

              <button
                onClick={handleClose}
                className="pixel-btn-secondary px-4 py-2.5 text-xs font-semibold cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
