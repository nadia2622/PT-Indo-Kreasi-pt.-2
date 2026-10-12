import React, { useState } from 'react';
import { ExternalLink, Layers, Monitor, ChevronRight } from 'lucide-react';
import { GameItem } from '../data/games';
import { playRetroClick, playRetroSelect } from '../utils/sound';

interface GameCardProps {
  game: GameItem;
  onOpenDetails: (game: GameItem) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onOpenDetails }) => {
  const [imageError, setImageError] = useState(false);

  const getStatusBadgeStyle = (status: GameItem['status']) => {
    switch (status) {
      case 'In Development':
        return 'text-[#FF4D79] border-[#800020] bg-[#3A091D]/40';
      case 'Early Access':
        return 'text-emerald-400 border-emerald-900 bg-emerald-950/40';
      case 'Upcoming Alpha':
        return 'text-amber-300 border-amber-900 bg-amber-950/40';
      case 'Prototype':
        return 'text-purple-300 border-purple-900 bg-purple-950/40';
      default:
        return 'text-white border-[#5B0E2D] bg-[#120d14]';
    }
  };

  const handleClick = () => {
    playRetroSelect();
    onOpenDetails(game);
  };

  return (
    <div className="pixel-card group flex flex-col h-full bg-[#110c14] border-2 border-[#3A091D] hover:border-[#800020] transition-all duration-200 shadow-[4px_4px_0px_#1b0a14]">
      {/* Pixel corners */}
      <div className="pixel-corner-tl" />
      <div className="pixel-corner-tr" />
      <div className="pixel-corner-bl" />
      <div className="pixel-corner-br" />

      {/* Game Thumbnail with Fallback */}
      <div className="relative aspect-video overflow-hidden border-b-2 border-[#3A091D] bg-[#0c090e]">
        {!imageError ? (
          <img
            src={game.image}
            alt={game.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#180f1d] text-[#A39B95]">
            <Layers className="w-8 h-8 text-[#FF4D79] mb-2" />
            <span className="font-pixel text-xs text-white">{game.title}</span>
            <span className="text-[10px] text-[#A39B95]">Pixel Art Preview</span>
          </div>
        )}

        {/* Status indicator unboxed badge */}
        <div className="absolute top-2.5 right-2.5">
          <span className={`text-[10px] font-pixel px-2 py-0.5 border ${getStatusBadgeStyle(game.status)}`}>
            {game.status}
          </span>
        </div>

        {/* Genre label */}
        <div className="absolute bottom-2.5 left-2.5 bg-[#080808]/90 px-2 py-0.5 border border-[#5B0E2D]">
          <span className="font-pixel text-[10px] text-[#F2E9E4]">
            {game.genre}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          
          {/* Metadata line */}
          <div className="flex items-center gap-2 text-[11px] text-[#A39B95] font-mono">
            <span>Rilis: {game.releaseYear}</span>
            <span aria-hidden="true">·</span>
            <span>{game.platforms[0]}</span>
          </div>

          {/* Title */}
          <h3 className="font-pixel text-base sm:text-lg text-white font-bold group-hover:text-[#FF4D79] transition-colors leading-snug">
            {game.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#C4BCB6] line-clamp-2 leading-relaxed">
            {game.shortDescription}
          </p>
        </div>

        {/* Action Bar */}
        <div className="pt-3 border-t border-[#3A091D] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-[#A39B95]">
            <Monitor className="w-3.5 h-3.5 text-[#800020]" />
            <span className="truncate max-w-[130px]">{game.platforms.length} Platform</span>
          </div>

          <button
            onClick={handleClick}
            className="font-pixel text-xs text-[#FF4D79] hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-all focus:outline-none cursor-pointer"
          >
            <span>Detail</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
