import React, { useState, useMemo } from 'react';
import { Gamepad2, Filter } from 'lucide-react';
import { gamesData, gameGenres, GameItem } from '../data/games';
import { GameCard } from './GameCard';
import { GameDetailModal } from './GameDetailModal';
import { playRetroClick } from '../utils/sound';

export const GameShowcase: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [activeModalGame, setActiveModalGame] = useState<GameItem | null>(null);

  const filteredGames = useMemo(() => {
    if (selectedGenre === 'All') return gamesData;
    return gamesData.filter((game) => game.genre === selectedGenre);
  }, [selectedGenre]);

  const handleGenreChange = (genre: string) => {
    playRetroClick();
    setSelectedGenre(genre);
  };

  return (
    <section id="games" className="py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#3A091D] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-pixel text-[#FF4D79] uppercase tracking-wider">
              <Gamepad2 className="w-4 h-4" />
              <span>Etalase Portofolio & Proyek</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-pixel text-white">
              Koleksi Game Kami
            </h2>
            <p className="text-sm sm:text-base text-[#C4BCB6] max-w-2xl">
              Jelajahi portofolio game dan proyek yang kami kembangkan. Setiap judul dirancang 
              dengan keunikan mekanik, narasi berkarakter, dan pengerjaan pixel art yang teliti.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button Segmented Control adhering to Frontend Constitution) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#140e18] border-2 border-[#3A091D] overflow-x-auto max-w-full">
            <div className="px-2 text-xs text-[#A39B95] flex items-center gap-1 font-pixel hidden sm:flex shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {gameGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreChange(genre)}
                className={`px-3 py-1.5 text-xs font-pixel whitespace-nowrap transition-all cursor-pointer ${
                  selectedGenre === genre
                    ? 'bg-[#800020] text-white border border-[#9E0028] shadow-[2px_2px_0px_#3A091D]'
                    : 'text-[#A39B95] hover:text-[#F2E9E4] hover:bg-[#1f1424] border border-transparent'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Game Cards Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onOpenDetails={(item) => setActiveModalGame(item)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 border-2 border-dashed border-[#3A091D] bg-[#120d14]">
            <p className="font-pixel text-sm text-[#A39B95] mb-2">
              Tidak ada game pada kategori "{selectedGenre}"
            </p>
            <button
              onClick={() => handleGenreChange('All')}
              className="pixel-btn-secondary px-4 py-2 text-xs font-pixel mt-2"
            >
              Tampilkan Semua Game
            </button>
          </div>
        )}

        {/* Section Bottom Note */}
        <div className="mt-12 p-4 bg-[#110c14] border border-[#3A091D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A39B95]">
          <span className="font-mono">
            *Semua game dikembangkan menggunakan engine modern dengan pipeline aset 2D in-house.
          </span>
          <span className="font-pixel text-[11px] text-[#FF4D79]">
            {filteredGames.length} Judul Ditampilkan
          </span>
        </div>

      </div>

      {/* Game Details Modal */}
      <GameDetailModal
        game={activeModalGame}
        onClose={() => setActiveModalGame(null)}
      />
    </section>
  );
};
