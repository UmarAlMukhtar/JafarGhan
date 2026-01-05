"use client";

import { useApp } from "@/context/AppContext";
import { translations } from "@/data/translations";

export default function Footer() {
  const { lang } = useApp();
  const t = translations;

  return (
    <footer className="bg-primary text-white pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-accent">Adv. Jafar Ghan</h2>
            <p className="text-white/70 leading-relaxed text-sm">
              Providing expert legal counsel in Thrissur District since 2004. 
              Specializing in Criminal, Civil, and Family law with a commitment to justice.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">
              {lang === 'en' ? 'Quick Links' : 'ക്വിക്ക് ലിങ്കുകൾ'}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#home" className="hover:text-accent transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-all">About Me</a></li>
              <li><a href="#practice" className="hover:text-accent transition-all">Practice Areas</a></li>
              <li><a href="#contact" className="hover:text-accent transition-all">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Specific Kodungallur Address */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">
              {lang === 'en' ? 'Office Location' : 'ഓഫീസ് വിലാസം'}
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <i className="fas fa-map-marker-alt text-accent mt-1"></i>
                <span>
                  <strong>Kodungallur Office:</strong><br />
                  {t["office-location"][lang]}<br />
                  <span className="text-accent/80 text-xs italic">
                    ({t["office-landmark"][lang]})
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-phone text-accent"></i>
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Specific Office Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">
              {lang === 'en' ? 'Working Hours' : 'പ്രവൃത്തി സമയം'}
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex justify-between items-center">
                <span>Mon - Sat:</span>
                <span className="text-accent font-semibold">{t["office-hours-detail"][lang]}</span>
              </div>
              <p className="text-xs opacity-60 italic">
                {lang === 'en' 
                  ? "*Appointments recommended for Sunday" 
                  : "*ഞായറാഴ്ചകളിൽ മുൻകൂട്ടി ബുക്ക് ചെയ്യുക"}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>{t["copyright"][lang]}</p>
         
        </div>
      </div>
    </footer>
  );
}