// Game Portfolio Data for PT Indo Kreasi
// Static Data Model adhering to PRD specifications

export interface GameItem {
  id: string;
  title: string;
  genre: 'Action RPG' | 'Cyberpunk Adventure' | 'Roguelike' | 'Tactical RPG';
  shortDescription: string;
  fullDescription: string;
  image: string;
  status: 'In Development' | 'Early Access' | 'Upcoming Alpha' | 'Prototype';
  releaseYear: string;
  platforms: string[];
  features: string[];
  engine: string;
  steamUrl?: string;
  itchUrl?: string;
  trailerAvailable: boolean;
}

export const gamesData: GameItem[] = [
  {
    id: 'crimson-blade',
    title: 'The Shadowed Sanctuary: Crimson Blade',
    genre: 'Action RPG',
    shortDescription: 'Metroidvania aksi bernuansa gotik dengan mekanik pedang presisi, eksplorasi non-linear, dan visual pixel art atmosferik.',
    fullDescription: 'Sebagai ksatria bayangan terakhir di biara runtuh Eldoria, pemain harus menjelajahi koridor batu yang dipenuhi reruntuhan katedral, monster purba, dan teka-teki rahasia. Memadukan kontrol responsif 60fps dengan animasi pixel art buatan tangan bingkai demi bingkai.',
    image: '/src/assets/images/game_crimson_blade_1791777241107.jpg',
    status: 'In Development',
    releaseYear: 'Q4 2026',
    platforms: ['Steam (PC)', 'Nintendo Switch', 'PlayStation 5'],
    features: [
      'Sistem pertarungan pedang presisi parry & dash',
      'Peta interconnected dengan ratusan ruang rahasia',
      'Soundtrack synth-orchestral 16-bit retro orisinal',
      'Lebih dari 24 pertarungan bos berpola unik'
    ],
    engine: 'Godot Engine 4 (Custom C# Pixel Pipeline)',
    steamUrl: 'https://store.steampowered.com',
    itchUrl: 'https://itch.io',
    trailerAvailable: true
  },
  {
    id: 'shadow-protocol',
    title: 'Neon Syndicate: Protocol Zero',
    genre: 'Cyberpunk Adventure',
    shortDescription: 'Game siluman taktis bernuansa neo-noir di megalopolis dystopia basah berhujan dengan narasi multi-cabang.',
    fullDescription: 'Menembus dinding korporasi megah New Nusantara di bawah guyuran hujan asam malam hari. Gunakan perangkat cloaking portabel, hack jaringan CCTV retro, dan ungkap konspirasi kartel teknologi dalam petualangan berbalut estetika pixel maroon-neon.',
    image: '/src/assets/images/game_shadow_protocol_1791777254687.jpg',
    status: 'Early Access',
    releaseYear: '2026',
    platforms: ['Steam (PC)', 'GOG Galaxy'],
    features: [
      'Mekanisme stealth dinamis dengan garis pandang musuh nyata',
      'Interaksi hacking berbasis puzzle logika terminal',
      'Dialog interaktif bercabang dengan multi-ending',
      'Lighting pixel realtime dengan pantulan genangan air'
    ],
    engine: 'Unity 2D (URP Pixel Shader Suite)',
    steamUrl: 'https://store.steampowered.com',
    itchUrl: 'https://itch.io',
    trailerAvailable: true
  },
  {
    id: 'relic-delvers',
    title: 'Relic Delvers: Cavern of the Ancients',
    genre: 'Roguelike',
    shortDescription: 'Top-down dungeon crawler dengan dungeon prosedural, artefak kuno berkekuatan magis, dan tantangan permadeath adiktif.',
    fullDescription: 'Menjelajahi kedalaman Gua B2 yang legendaris demi mencari harta karun peninggalan peradaban masa lalu. Setiap run menyajikan tata letak ruang baru, jebakan mematikan, serta sinergi artefak tak terbatas untuk bereksperimen gaya bermain.',
    image: '/src/assets/images/game_relic_delvers_1791777269275.jpg',
    status: 'Upcoming Alpha',
    releaseYear: '2027',
    platforms: ['Steam (PC)', 'iOS', 'Android'],
    features: [
      'Generasi ruang bawah tanah prosedural tak berujung',
      'Koleksi 150+ peninggalan kuno & ramuan mistis',
      'Mode co-op lokal 2 pemain',
      'Pilihan tingkat kesulitan adaptif retro'
    ],
    engine: 'Custom 2D Engine (TypeScript / WebGL)',
    steamUrl: 'https://store.steampowered.com',
    itchUrl: 'https://itch.io',
    trailerAvailable: false
  },
  {
    id: 'aethelgard',
    title: 'Aethelgard: Chronicles of Dusk',
    genre: 'Tactical RPG',
    shortDescription: 'RPG taktik berbasis giliran yang memadukan strategi penempatan formasi, sihir elemen, dan drama kerajaan megah.',
    fullDescription: 'Mengisahkan perjuangan para pengelana di perbatasan benteng kegelapan. Pemain memimpin kelompok pejuang melintasi lembah pegunungan berkabut senja, membangun aliansi antarfaksi, dan membalikkan arus perang takdir.',
    image: '/src/assets/images/hero_pixel_studio_world_1791777226121.jpg',
    status: 'Prototype',
    releaseYear: 'TBA',
    platforms: ['PC', 'Nintendo Switch'],
    features: [
      'Sistem pertarungan grid isometrik 16-bit klasik',
      'Kustomisasi pohon keahlian mendalam untuk 12 kelas karakter',
      'Kisah persahabatan dan pengorbanan dramatis',
      'Ilustrasi panorama pixel art resolusi tinggi'
    ],
    engine: 'Godot Engine 4',
    steamUrl: 'https://store.steampowered.com',
    itchUrl: 'https://itch.io',
    trailerAvailable: false
  }
];

export const gameGenres = ['All', 'Action RPG', 'Cyberpunk Adventure', 'Roguelike', 'Tactical RPG'] as const;
