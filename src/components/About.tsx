"use client";

import { useApp } from "@/context/AppContext";
import { translations } from "@/data/translations";

export default function About() {
  const { lang } = useApp();
  const t = translations;

  const education = [
    { en: "BSc LLB, Government Law College, Thrissur", ml: "ബിഎസ്‌സി എൽഎൽബി, ഗവൺമെന്റ് ലോ കോളേജ്, തൃശ്ശൂർ" },
    { en: "Enrollment: 2004", ml: "എൻറോൾമെന്റ്: 2004" },
    { en: "Panel Lawyer", ml: "പാനൽ അഭിഭാഷകൻ" },
  ];

  const expertise = [
    { en: "Criminal Law", ml: "ക്രിമിനൽ നിയമം" },
    { en: "Civil Litigation", ml: "സിവിൽ വ്യവഹാരങ്ങൾ" },
    { en: "Family Court Matters", ml: "കുടുംബകോടതി കാര്യങ്ങൾ" },
    { en: "Other Legal Consultations", ml: "മറ്റ് നിയമ കൺസൾട്ടേഷനുകൾ" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 relative pb-4 text-primary dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-accent">
          {t["about-title"][lang]}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Column */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-all duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800">
              <img 
                src="/images/lawyer-profile.jpg" 
                alt="Advocate Jafar Ghan Profile" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary dark:text-accent mb-4 flex items-center gap-3">
                <i className="fas fa-briefcase text-xl"></i>
                {t["professional-exp"][lang]}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {t["about-desc"][lang]}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              {/* Education Block */}
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4 border-b border-gray-100 dark:border-neutral-800 pb-2">
                  {t["education-title"][lang]}
                </h3>
                <ul className="space-y-3">
                  {education.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70">
                      <i className="fas fa-check-circle text-accent mt-1"></i>
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expertise Block */}
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4 border-b border-gray-100 dark:border-neutral-800 pb-2">
                  {t["expertise-title"][lang]}
                </h3>
                <ul className="space-y-3">
                  {expertise.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70">
                      <i className="fas fa-balance-scale text-accent mt-1"></i>
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}