import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, MessageSquare, Clock, CheckCircle2, Copy, Check } from 'lucide-react';
import { playRetroClick, playRetroSelect } from '../utils/sound';

interface ContactProps {
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefilledService || 'Game Development Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry: ${prefilledService}`
      }));
    }
  }, [prefilledService]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Format email tidak valid.';
    }
    if (!formData.message.trim()) errs.message = 'Pesan atau deskripsi proyek wajib diisi.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    playRetroSelect();
    setSubmitted(true);
  };

  const mailtoUrl = `mailto:contact@indokreasi.id?subject=${encodeURIComponent(
    `[Inquiry PT Indo Kreasi] ${formData.subject}`
  )}&body=${encodeURIComponent(
    `Nama: ${formData.name}\nEmail: ${formData.email}\nLayanan: ${formData.subject}\n\nPesan:\n${formData.message}`
  )}`;

  const handleCopy = () => {
    playRetroClick();
    const textToCopy = `Nama: ${formData.name}\nEmail: ${formData.email}\nPerihal: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#3A091D] bg-[#0a080d] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-pixel text-[#FF4D79] uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Kontak & Kerja Sama</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-pixel text-white">
            Mulai Percakapan Bersama Kami
          </h2>
          <p className="text-sm sm:text-base text-[#C4BCB6]">
            Apakah Anda seorang publisher, rekan pengembang game, atau memiliki proyek kreatif 
            yang ingin diwujudkan dalam balutan pixel art? Tim kami siap mendiskusikan peluang kolaborasi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="pixel-card p-6 bg-[#120d15] border-2 border-[#5B0E2D] space-y-6">
              <div className="pixel-corner-tl" />
              <div className="pixel-corner-tr" />
              <div className="pixel-corner-bl" />
              <div className="pixel-corner-br" />

              <div>
                <h3 className="font-pixel text-base sm:text-lg text-white font-bold mb-2">
                  Alamat Resmi Studio
                </h3>
                <p className="text-xs text-[#A39B95] leading-relaxed">
                  Kami beroperasi secara hybrid dengan basis studio utama di Jakarta, Indonesia.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#1b101c] border border-[#5B0E2D] text-[#FF4D79] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#A39B95] block text-[11px] font-pixel">Email Bisnis & Publisher</span>
                    <a
                      href="mailto:contact@indokreasi.id"
                      className="text-[#F2E9E4] hover:text-[#FF4D79] font-mono text-sm underline underline-offset-4"
                    >
                      contact@indokreasi.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#1b101c] border border-[#5B0E2D] text-[#FF4D79] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#A39B95] block text-[11px] font-pixel">Lokasi Studio</span>
                    <span className="text-[#D0C7C1]">
                      Jakarta Selatan, DKI Jakarta 12430, Indonesia
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#1b101c] border border-[#5B0E2D] text-[#FF4D79] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#A39B95] block text-[11px] font-pixel">Waktu Operasional & Respon</span>
                    <span className="text-[#D0C7C1]">
                      Senin – Jumat (09:00 – 18:00 WIB) · Respon dalam 1×24 jam kerja
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Notice according to PRD */}
              <div className="p-3 bg-[#17101b] border border-[#3A091D] text-[11px] text-[#A39B95] font-mono">
                🛡️ Jalur komunikasi resmi dikelola langsung oleh tim manajemen PT Indo Kreasi.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="pixel-card p-6 sm:p-8 bg-[#120d15] border-2 border-[#5B0E2D]">
              <div className="pixel-corner-tl" />
              <div className="pixel-corner-tr" />
              <div className="pixel-corner-bl" />
              <div className="pixel-corner-br" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#3A091D] pb-3 mb-4">
                    <h3 className="font-pixel text-base sm:text-lg text-white font-bold">
                      Formulir Pertanyaan & Penawaran Proyek
                    </h3>
                    <p className="text-xs text-[#A39B95] mt-1">
                      Silakan isi detail kebutuhan Anda untuk menerima respon langsung melalui email.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-pixel text-[#E2DAD4] mb-1.5">
                      Nama Lengkap / Organisasi *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Budi Santoso (Indie Games Studio)"
                      className="w-full bg-[#18111e] border-2 border-[#3A091D] focus:border-[#800020] text-sm text-white px-3.5 py-2.5 outline-none font-sans"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-pixel text-[#E2DAD4] mb-1.5">
                      Alamat Email Aktif *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@perusahaan.com"
                      className="w-full bg-[#18111e] border-2 border-[#3A091D] focus:border-[#800020] text-sm text-white px-3.5 py-2.5 outline-none font-sans"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject / Service Selection */}
                  <div>
                    <label className="block text-xs font-pixel text-[#E2DAD4] mb-1.5">
                      Topik Kerja Sama / Layanan
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#18111e] border-2 border-[#3A091D] focus:border-[#800020] text-sm text-white px-3.5 py-2.5 outline-none font-sans"
                    >
                      <option value="Game Development Inquiry">Game Development Inquiry (Umum)</option>
                      <option value="Inquiry: Game Design & Prototyping">Inquiry: Game Design & Prototyping</option>
                      <option value="Inquiry: Full-Cycle Game Development">Inquiry: Full-Cycle Game Development</option>
                      <option value="Inquiry: Pixel Art & 2D Asset Production">Inquiry: Pixel Art & 2D Asset Production</option>
                      <option value="Inquiry: Game UI/UX Design & Retro Styling">Inquiry: Game UI/UX Design & Retro Styling</option>
                      <option value="Publisher & Publishing Partnership">Publisher & Publishing Partnership</option>
                      <option value="Media & Press Inquiry">Media & Press Inquiry</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-pixel text-[#E2DAD4] mb-1.5">
                      Detail Pesan / Deskripsi Proyek *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan game Anda, estimasi timeline, atau pertanyaan spesifik yang ingin didiskusikan..."
                      className="w-full bg-[#18111e] border-2 border-[#3A091D] focus:border-[#800020] text-sm text-white px-3.5 py-2.5 outline-none font-sans"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full pixel-btn-primary py-3 text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan Kerja Sama</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Submission Confirmation State (Clean, Transparent, no fake database claims) */
                <div className="py-8 text-center space-y-6">
                  <div className="w-14 h-14 mx-auto bg-[#3A091D] border-2 border-[#800020] flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-pixel text-lg sm:text-xl text-white font-bold">
                      Pesan Anda Siap Dikirim!
                    </h3>
                    <p className="text-sm text-[#C4BCB6] max-w-md mx-auto">
                      Terima kasih, <strong className="text-white">{formData.name}</strong>. Sesuai spesifikasi privasi & keamanan, Anda dapat langsung mengirim draft ini via aplikasi email Anda atau menyalinnya.
                    </p>
                  </div>

                  <div className="p-4 bg-[#18111e] border border-[#3A091D] text-left text-xs text-[#E2DAD4] space-y-2 max-w-md mx-auto font-mono">
                    <p><strong>Kepada:</strong> contact@indokreasi.id</p>
                    <p><strong>Perihal:</strong> {formData.subject}</p>
                    <p className="text-[#A39B95] line-clamp-3">"{formData.message}"</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      onClick={() => playRetroClick()}
                      className="pixel-btn-primary px-5 py-2.5 text-xs inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Buka Aplikasi Email</span>
                    </a>

                    <button
                      onClick={handleCopy}
                      className="pixel-btn-secondary px-5 py-2.5 text-xs inline-flex items-center gap-2 cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Teks Pesan'}</span>
                    </button>

                    <button
                      onClick={() => {
                        playRetroClick();
                        setSubmitted(false);
                      }}
                      className="text-xs text-[#A39B95] hover:text-white underline py-2 block w-full cursor-pointer"
                    >
                      Tulis Pesan Baru
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
