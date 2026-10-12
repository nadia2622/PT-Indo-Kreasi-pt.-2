import React, { useState, useEffect, useRef } from 'react';
import { Gamepad2, Play, Sparkles, RefreshCw, Volume2 } from 'lucide-react';
import { playRetroClick, playRetroSelect } from '../utils/sound';

type CharacterType = 'Knight' | 'Mage' | 'Cyber Agent' | 'Rogue';
type ActionType = 'Idle' | 'Attack' | 'Defend' | 'Cast';

export const InteractivePixelTester: React.FC = () => {
  const [character, setCharacter] = useState<CharacterType>('Knight');
  const [action, setAction] = useState<ActionType>('Idle');
  const [frame, setFrame] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animation cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4);
    }, 180);
    return () => clearInterval(timer);
  }, []);

  // Draw pixel sprite on HTML5 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;

    // Palette
    const black = '#080808';
    const maroon = '#5B0E2D';
    const crimson = '#800020';
    const highlight = '#FF4D79';
    const gold = '#F4B236';
    const skin = '#F2C6A0';
    const white = '#F2E9E4';
    const steel = '#7A8499';
    const cyan = '#2EE6D6';

    const pSize = 5; // pixel unit size
    const startX = 22;
    const startY = 16 + (action === 'Idle' ? (frame % 2) * 1 : 0);

    const drawPixel = (x: number, y: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect((startX + x) * pSize, (startY + y) * pSize, pSize, pSize);
    };

    // Draw shadow under character
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(32 * pSize, (startY + 24) * pSize, 14 * pSize, 3 * pSize, 0, 0, Math.PI * 2);
    ctx.fill();

    // Render character based on type
    if (character === 'Knight') {
      // Helmet / Horns
      drawPixel(7, 3, gold);
      drawPixel(8, 2, gold);
      drawPixel(13, 2, gold);
      drawPixel(14, 3, gold);

      // Helm & Visor
      for (let x = 8; x <= 13; x++) {
        for (let y = 4; y <= 8; y++) {
          drawPixel(x, y, steel);
        }
      }
      // Visor slit
      drawPixel(9, 6, crimson);
      drawPixel(10, 6, highlight);
      drawPixel(11, 6, highlight);
      drawPixel(12, 6, crimson);

      // Cloak (Maroon)
      for (let y = 9; y <= 18; y++) {
        drawPixel(6, y, maroon);
        drawPixel(7, y, maroon);
      }

      // Torso Armor
      for (let x = 8; x <= 13; x++) {
        for (let y = 9; y <= 15; y++) {
          drawPixel(x, y, steel);
        }
      }
      drawPixel(10, 11, highlight);
      drawPixel(11, 11, highlight);

      // Legs / Greaves
      for (let y = 16; y <= 21; y++) {
        drawPixel(8, y, steel);
        drawPixel(9, y, steel);
        drawPixel(12, y, steel);
        drawPixel(13, y, steel);
      }

      // Weapon / Action pose
      if (action === 'Attack') {
        // Glowing Broadsword swung forward
        const swordX = 14 + frame * 2;
        for (let i = 0; i < 9; i++) {
          drawPixel(swordX + i, 11 - i, cyan);
          drawPixel(swordX + i + 1, 11 - i, white);
        }
        drawPixel(swordX - 1, 12, gold);
      } else if (action === 'Defend') {
        // Shield
        for (let sx = 14; sx <= 17; sx++) {
          for (let sy = 8; sy <= 16; sy++) {
            drawPixel(sx, sy, crimson);
          }
        }
        drawPixel(15, 12, gold);
        drawPixel(16, 12, gold);
      } else {
        // Sword rested
        for (let y = 9; y <= 19; y++) {
          drawPixel(14, y, steel);
        }
        drawPixel(14, 13, gold);
      }
    } else if (character === 'Mage') {
      // Wizard Hat
      drawPixel(10, 2, maroon);
      drawPixel(9, 3, maroon);
      drawPixel(10, 3, maroon);
      for (let x = 7; x <= 14; x++) drawPixel(x, 4, crimson);

      // Face
      for (let x = 8; x <= 13; x++) {
        for (let y = 5; y <= 8; y++) drawPixel(x, y, skin);
      }
      drawPixel(9, 6, cyan);
      drawPixel(12, 6, cyan);

      // Robe
      for (let x = 7; x <= 14; x++) {
        for (let y = 9; y <= 21; y++) drawPixel(x, y, maroon);
      }

      // Staff
      const staffX = 16;
      for (let y = 5; y <= 21; y++) drawPixel(staffX, y, gold);
      // Gem orb
      drawPixel(staffX - 1, 4, cyan);
      drawPixel(staffX, 3, white);
      drawPixel(staffX + 1, 4, cyan);
      drawPixel(staffX, 5, highlight);

      if (action === 'Cast' || action === 'Attack') {
        // Magical sparks
        for (let i = 0; i < 5; i++) {
          drawPixel(staffX + 3 + i * 2, 4 + (i % 3) * 2, (i + frame) % 2 === 0 ? cyan : highlight);
        }
      }
    } else if (character === 'Cyber Agent') {
      // Visor & Cyber Helmet
      for (let x = 8; x <= 13; x++) {
        for (let y = 4; y <= 8; y++) drawPixel(x, y, black);
      }
      drawPixel(9, 6, highlight);
      drawPixel(10, 6, highlight);
      drawPixel(11, 6, highlight);

      // Trenchcoat
      for (let x = 7; x <= 14; x++) {
        for (let y = 9; y <= 20; y++) drawPixel(x, y, maroon);
      }

      // Pistol / Cyber Weapon
      if (action === 'Attack') {
        for (let x = 14; x <= 19; x++) drawPixel(x, 11, steel);
        if (frame % 2 === 0) {
          drawPixel(20, 11, highlight);
          drawPixel(21, 11, gold);
        }
      } else {
        drawPixel(14, 13, steel);
      }
    } else {
      // Rogue
      // Hood
      for (let x = 7; x <= 14; x++) {
        for (let y = 4; y <= 8; y++) drawPixel(x, y, maroon);
      }
      drawPixel(9, 6, white);
      drawPixel(12, 6, white);

      // Leather armor
      for (let x = 8; x <= 13; x++) {
        for (let y = 9; y <= 20; y++) drawPixel(x, y, '#2B111A');
      }

      // Daggers
      if (action === 'Attack') {
        drawPixel(15 + frame, 10, steel);
        drawPixel(16 + frame, 10, white);
        drawPixel(5 - frame, 12, steel);
      }
    }
  }, [character, action, frame]);

  const handleAction = (newAction: ActionType) => {
    playRetroClick();
    setAction(newAction);
  };

  const handleCharSelect = (newChar: CharacterType) => {
    playRetroSelect();
    setCharacter(newChar);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#3A091D] bg-[#0d0912]">
      <div className="max-w-7xl mx-auto">
        
        <div className="pixel-card p-6 sm:p-10 bg-[#120d15] border-2 border-[#5B0E2D] shadow-[6px_6px_0px_#3A091D]">
          <div className="pixel-corner-tl" />
          <div className="pixel-corner-tr" />
          <div className="pixel-corner-bl" />
          <div className="pixel-corner-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Info & Description */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-pixel text-[#FF4D79] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Interactive Studio Forge</span>
              </div>
              <h3 className="font-pixel text-xl sm:text-2xl text-white font-bold">
                Uji Coba Sprite & Pipeline Karakter
              </h3>
              <p className="text-xs sm:text-sm text-[#C4BCB6] leading-relaxed">
                Di balik setiap game kami terdapat ratusan jam perancangan sprite buatan tangan. 
                Pilih karakter dan picu aksi animasi untuk melihat presisi visual engine 2D kami secara real-time.
              </p>

              {/* Character Selector */}
              <div className="pt-2 space-y-2">
                <span className="text-[11px] font-pixel text-[#A39B95] uppercase block">
                  Pilih Karakter Arketiper:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(['Knight', 'Mage', 'Cyber Agent', 'Rogue'] as CharacterType[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => handleCharSelect(c)}
                      className={`px-3 py-1.5 text-xs font-pixel transition-all cursor-pointer ${
                        character === c
                          ? 'bg-[#800020] text-white border border-[#9E0028] shadow-[2px_2px_0px_#3A091D]'
                          : 'bg-[#18111e] text-[#A39B95] border border-[#3A091D] hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <span className="text-[11px] font-pixel text-[#A39B95] uppercase block">
                  Picu Siklus Animasi:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(['Idle', 'Attack', 'Defend', 'Cast'] as ActionType[]).map((act) => (
                    <button
                      key={act}
                      onClick={() => handleAction(act)}
                      className={`px-3.5 py-1.5 text-xs font-pixel transition-all cursor-pointer ${
                        action === act
                          ? 'bg-[#5B0E2D] text-white border border-[#FF4D79]'
                          : 'bg-[#18111e] text-[#A39B95] border border-[#3A091D] hover:text-white'
                      }`}
                    >
                      {act}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Retro CRT Frame & Real-time Canvas */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm bg-[#080808] border-2 border-[#5B0E2D] p-4 shadow-[4px_4px_0px_#800020] text-center">
                
                {/* CRT Screen Title */}
                <div className="flex items-center justify-between text-[10px] font-pixel text-[#A39B95] border-b border-[#3A091D] pb-2 mb-3">
                  <span>SPRITE VIEWER</span>
                  <span className="text-[#FF4D79]">FRAME: 0{frame + 1}/04</span>
                </div>

                {/* Canvas Canvas Element */}
                <div className="bg-[#140e18] border border-[#3A091D] py-4 flex items-center justify-center relative overflow-hidden">
                  <canvas
                    ref={canvasRef}
                    width={320}
                    height={180}
                    className="w-full h-auto max-h-[180px] object-contain"
                  />
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-[#A39B95]">
                    {character.toUpperCase()} [{action.toUpperCase()}]
                  </div>
                </div>

                {/* Console Stats */}
                <div className="flex items-center justify-between pt-3 text-[10px] font-mono text-[#A39B95]">
                  <span>RENDER: 60 FPS NATIVE</span>
                  <span className="text-white">PALETTE: INDO KREASI 16</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
