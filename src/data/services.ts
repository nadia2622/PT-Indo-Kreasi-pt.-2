// Studio Services Data for PT Indo Kreasi
// Adheres strictly to PRD Section 3.5 (FR-05)

export interface ServiceItem {
  id: string;
  title: string;
  iconName: 'Gamepad2' | 'Code2' | 'Palette' | 'Layout';
  tagline: string;
  description: string;
  deliverables: string[];
  benefits: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'game-design-prototyping',
    title: 'Game Design & Prototyping',
    iconName: 'Gamepad2',
    tagline: 'Memvalidasi ide gameplay cepat dengan siklus prototipe iteratif',
    description: 'Kami merancang game design document (GDD) komprehensif, core game loop, kalkulasi balancing sistem, dan playable prototype untuk menguji keseruan mekanik sebelum masuk fase produksi skala penuh.',
    deliverables: [
      'Core Loop & Gameplay Mechanics Specification',
      'Playable Greybox Prototype (Web / PC build)',
      'Balancing Spreadsheet & Progression Curve',
      'Pitch Deck & Game Bible untuk Publisher'
    ],
    benefits: 'Mengurangi risiko produksi dan menghemat anggaran dengan memvalidasi fun factor sejak fase pra-produksi.'
  },
  {
    id: 'full-cycle-development',
    title: 'Full-Cycle Game Development',
    iconName: 'Code2',
    tagline: 'Pengembangan game end-to-end dari konsep hingga rilis multi-platform',
    description: 'Tim engineer kami membangun arsitektur game yang kokoh, performa stabil 60fps, optimasi memori, serta integrasi platform SDK (Steamworks, konsol, dan mobile storefronts).',
    deliverables: [
      'Multiplatform Engineering (PC, Mobile, Switch)',
      'Physics, AI Pathfinding & Combat State Machines',
      'Save System, Audio Middleware & Game Analytics',
      'QA Testing, Bug Squashing & Performance Profiling'
    ],
    benefits: 'Kode bersih, modular, teruji, dan siap dipublikasikan ke etalase toko digital internasional.'
  },
  {
    id: 'pixel-art-asset-production',
    title: 'Pixel Art & 2D Asset Production',
    iconName: 'Palette',
    tagline: 'Visual retro autentik dengan disiplin estetika frame-by-frame',
    description: 'Spesialisasi utama kami dalam crafting pixel art berstandar tinggi: sprite karakter dinamis, animasi ekspresif, tileset lingkungan mulus, dan background parallax atmosferik bernuansa misterius.',
    deliverables: [
      'Character Sprite Sheets (Idle, Run, Attack, Hurt, Death)',
      'Modular 16x16 / 32x32 Tilesets & Props',
      'Multi-Layer Parallax Backgrounds',
      'VFX Partikel 2D Pixel (Ledakan, Sihir, Percikan Darah)'
    ],
    benefits: 'Memberikan identitas visual yang khas, bernilai seni tinggi, dan berkesan mendalam bagi para gamer.'
  },
  {
    id: 'game-ui-ux-design',
    title: 'Game UI/UX Design & Retro Styling',
    iconName: 'Layout',
    tagline: 'Antarmuka retro intuitif yang memanjakan mata dan mudah dinavigasi',
    description: 'Menciptakan HUD, layout inventori, dialog box, dan navigation menu yang imersif sesuai tema game tanpa mengorbankan kenyamanan pembacaan dan aksesibilitas kontrol pemain.',
    deliverables: [
      'In-Game HUD & Health/Mana Gauges Retro',
      'Inventory, Equipment & Skill Tree Interfaces',
      'Responsive Menu System (Gamepad & Keyboard Support)',
      'Typography & Custom Pixel Icon Packs'
    ],
    benefits: 'Memastikan pemain langsung memahami kontrol dan informasi game secara intuitif tanpa distraksi.'
  }
];
