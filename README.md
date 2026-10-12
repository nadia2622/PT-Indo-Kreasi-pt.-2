# Website Resmi PT Indo Kreasi

Website company profile dan game development portfolio resmi untuk **PT Indo Kreasi**, dikembangkan dengan tema visual **Black & Maroon Pixel Art** berbasis React + Vite.

---

## 🎮 Identitas Visual & Tema

- **Obsidian Black (`#080808`)**: Latar belakang dominan retro.
- **Deep Maroon (`#5B0E2D`)**: Aksen struktural, kartu, dan border berundak.
- **Crimson Accent (`#800020`)**: Tombol utama, highlight interaktif, dan status aktif.
- **Warm Off-White (`#F2E9E4`)**: Teks isi dengan rasio kontras tinggi dan mudah dibaca.
- **Tipografi**: Silkscreen & Press Start 2P untuk aksen retro pixel, dipadukan dengan Plus Jakarta Sans untuk keterbacaan paragraf.

---

## 📂 Struktur Proyek

```text
/
├── index.html                      # Entry point HTML dengan Google Fonts & SEO Schema
├── metadata.json                   # Metadata aplikasi AI Studio
├── package.json                    # Dependensi frontend React + Vite + Tailwind
├── src/
│   ├── assets/
│   │   └── images/                 # Aset pixel art resolusi tinggi
│   ├── components/
│   │   ├── Navbar.tsx              # Navigasi responsif + audio SFX & CRT toggle
│   │   ├── Hero.tsx                # Hero section dengan headline dan CTA
│   │   ├── GameShowcase.tsx        # Portofolio game dengan filter kategori
│   │   ├── GameCard.tsx            # Komponen kartu game dengan status
│   │   ├── GameDetailModal.tsx     # Modal detail spesifikasi & fitur game
│   │   ├── About.tsx               # Profil studio, visi, misi, dan pilar nilai
│   │   ├── Services.tsx            # Layanan game development & deliverables
│   │   ├── Contact.tsx             # Form kerja sama & kanal komunikasi resmi
│   │   ├── Footer.tsx              # Footer studio & tautan komunitas
│   │   └── InteractivePixelTester.tsx # Interaktif retro sprite pipeline viewer
│   ├── data/
│   │   ├── games.ts                # Data portofolio game statis
│   │   └── services.ts             # Data layanan & kapabilitas studio
│   ├── utils/
│   │   └── sound.ts                # Synthesizer SFX 8-bit murni (Web Audio API)
│   ├── App.tsx                     # Komponen halaman utama
│   ├── index.css                   # Tailwind CSS v4 & custom pixel styling
│   └── main.tsx                    # React root render
```

---

## 🚀 Panduan Menjalankan Proyek

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Development Server
```bash
npm run dev
```
Akses di browser pada `http://localhost:3000`.

### 3. Membangun untuk Produksi (Production Build)
```bash
npm run build
```

---

## 🛠️ Cara Memperbarui Konten

### Menambah atau Mengubah Portofolio Game
Buka file `src/data/games.ts` dan perbarui array `gamesData`:
```typescript
{
  id: 'judul-game-baru',
  title: 'Judul Game Baru',
  genre: 'Action RPG',
  shortDescription: 'Deskripsi singkat...',
  fullDescription: 'Deskripsi lengkap...',
  image: '/src/assets/images/nama_gambar.jpg',
  status: 'In Development',
  releaseYear: '2027',
  platforms: ['Steam (PC)', 'Nintendo Switch'],
  features: ['Fitur 1', 'Fitur 2'],
  engine: 'Godot Engine 4',
  trailerAvailable: false
}
```

### Mengubah Layanan Perusahaan
Buka file `src/data/services.ts` dan sesuaikan daftar layanan di array `servicesData`.

### Menyesuaikan Email & Kontak
Buka file `src/components/Contact.tsx` untuk memperbarui alamat email tujuan pada variabel `mailtoUrl`.
