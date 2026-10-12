import React from 'react';
import { Target, Compass, Sparkles, Shield, HeartHandshake, Award } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Masteri Pixel Art',
      desc: 'Setiap frame animasi dan tileset digambar tangan dengan ketelitian piksel ekstrem untuk melahirkan estetika retro yang otentik dan bernyawa.',
    },
    {
      index: '02',
      title: 'Mekanik Presisi 60 FPS',
      desc: 'Kami percaya gameplay adalah inti dari sebuah game. Kontrol responsif, hit-box akurat, dan pacing yang memuaskan adalah prioritas utama setiap rilis.',
    },
    {
      index: '03',
      title: 'Worldbuilding Mendalam',
      desc: 'Menciptakan jagat permainan yang kaya dengan misteri, lore tersembunyi, dan soundtrack bernuansa emosional yang menyatu sempurna dengan visual.',
    },
    {
      index: '04',
      title: 'Pendekatan Kolaboratif',
      desc: 'Bekerja erat dengan penerbit (publishers), mitra industri, dan komunitas gamer untuk menyempurnakan game melalui iterasi playtesting terbuka.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#3A091D] bg-[#09070b] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Top Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-pixel text-[#FF4D79] uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Tentang Studio Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-pixel text-white leading-tight">
            Mendedikasikan Diri untuk Kreasi Game Indie Berkualitas
          </h2>
          <p className="text-base sm:text-lg text-[#C4BCB6] leading-relaxed">
            PT Indo Kreasi lahir dari kecintaan mendalam terhadap masa keemasan video game 16-bit. 
            Kami adalah studio pengembang game independen yang berbasis di Jakarta, menggabungkan 
            jiwa seni retro dengan teknologi modern untuk menghadirkan karya yang menghibur 
            dan meninggalkan impresi abadi.
          </p>
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Visi */}
          <div className="pixel-card p-6 sm:p-8 bg-[#120d15] border-2 border-[#5B0E2D]">
            <div className="pixel-corner-tl" />
            <div className="pixel-corner-tr" />
            <div className="pixel-corner-bl" />
            <div className="pixel-corner-br" />

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-[#3A091D] border border-[#800020] text-[#FF4D79]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-pixel text-lg sm:text-xl text-white font-bold">
                Visi Perusahaan
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-[#D0C7C1] leading-relaxed">
              Menjadi studio game development terdepan asal Indonesia yang diakui secara global 
              atas orisinalitas karya, keunggulan seni pixel art, dan pengalaman bermain yang 
              bermakna bagi komunitas gamer internasional.
            </p>
          </div>

          {/* Misi */}
          <div className="pixel-card p-6 sm:p-8 bg-[#120d15] border-2 border-[#5B0E2D]">
            <div className="pixel-corner-tl" />
            <div className="pixel-corner-tr" />
            <div className="pixel-corner-bl" />
            <div className="pixel-corner-br" />

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-[#3A091D] border border-[#800020] text-[#FF4D79]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-pixel text-lg sm:text-xl text-white font-bold">
                Misi Perusahaan
              </h3>
            </div>

            <ul className="text-sm sm:text-base text-[#D0C7C1] space-y-2.5 list-disc list-inside">
              <li>Menciptakan game dengan gameplay berbobot dan visual pixel art kelas dunia.</li>
              <li>Menumbuhkan talenta kreator, artis, dan game programmer lokal berstandar global.</li>
              <li>Membangun ekosistem kolaborasi yang sehat dengan publisher dan komunitas gamer.</li>
              <li>Menjaga integritas kreatif dan kebebasan artistik dalam setiap proyek yang dirilis.</li>
            </ul>
          </div>

        </div>

        {/* 4 Pillars / Core Values Grid */}
        <div>
          <div className="border-b border-[#3A091D] pb-4 mb-8">
            <h3 className="font-pixel text-xl sm:text-2xl text-white">
              Prinsip & Nilai Dasar Studio
            </h3>
            <p className="text-sm text-[#A39B95] mt-1">
              Prinsip yang memandu setiap keputusan desain, baris kode, dan goresan piksel kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="p-5 bg-[#120d14] border border-[#3A091D] hover:border-[#800020] transition-colors relative group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-pixel text-xs text-[#FF4D79] tabular-nums font-bold">
                    {pillar.index}
                  </span>
                  <div className="w-2 h-2 bg-[#5B0E2D] group-hover:bg-[#800020] transition-colors" />
                </div>
                <h4 className="font-pixel text-sm sm:text-base text-white font-bold mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#A39B95] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
