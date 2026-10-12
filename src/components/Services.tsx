import React from 'react';
import { Gamepad2, Code2, Palette, Layout, ArrowRight, Check } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';
import { playRetroClick, playRetroSelect } from '../utils/sound';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const renderIcon = (name: ServiceItem['iconName']) => {
    const iconClass = "w-6 h-6 text-[#FF4D79]";
    switch (name) {
      case 'Gamepad2':
        return <Gamepad2 className={iconClass} />;
      case 'Code2':
        return <Code2 className={iconClass} />;
      case 'Palette':
        return <Palette className={iconClass} />;
      case 'Layout':
        return <Layout className={iconClass} />;
      default:
        return <Gamepad2 className={iconClass} />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    playRetroSelect();
    onSelectServiceForInquiry(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#3A091D] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-pixel text-[#FF4D79] uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            <span>Layanan & Kapabilitas Studio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-pixel text-white">
            Solusi Pengembangan Game Profesional
          </h2>
          <p className="text-sm sm:text-base text-[#C4BCB6]">
            Kami menawarkan kapabilitas teknis dan artistik untuk membantu studio, publisher, 
            dan brand mewujudkan visi game interaktif berkualitas tinggi dari tahap awal hingga rilis.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="pixel-card p-6 sm:p-8 bg-[#120d15] border-2 border-[#3A091D] hover:border-[#800020] transition-all flex flex-col justify-between"
            >
              <div className="pixel-corner-tl" />
              <div className="pixel-corner-tr" />
              <div className="pixel-corner-bl" />
              <div className="pixel-corner-br" />

              <div className="space-y-4">
                {/* Icon & Service Index */}
                <div className="flex items-center justify-between border-b border-[#3A091D] pb-4">
                  <div className="p-3 bg-[#1e1220] border border-[#5B0E2D]">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="font-pixel text-xs text-[#A39B95] tracking-widest">
                    LAYANAN 0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-pixel text-lg sm:text-xl text-white font-bold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#FF4D79] font-medium">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#C4BCB6] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-pixel text-[#A39B95] uppercase tracking-wider block">
                    Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#E2DAD4]">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FF4D79] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Benefit */}
                <div className="p-3.5 bg-[#17101b] border-l-2 border-[#800020] text-xs text-[#A39B95] leading-relaxed">
                  <strong className="text-white block mb-0.5">Nilai untuk Klien:</strong>
                  {service.benefits}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#3A091D]">
                <button
                  onClick={() => handleInquire(service.title)}
                  className="w-full pixel-btn-secondary py-2.5 px-4 text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Konsultasikan Layanan Ini</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
