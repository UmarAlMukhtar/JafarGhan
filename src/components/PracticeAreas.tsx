"use client";

import { useApp } from "@/context/AppContext";
import { translations } from "@/data/translations";

const services = [
  { icon: "fa-gavel", title: { en: "Criminal Law", ml: "ക്രിമിനൽ നിയമം" } },
  { icon: "fa-balance-scale", title: { en: "Civil Law", ml: "സിവിൽ നിയമം" } },
  { icon: "fa-users", title: { en: "Family Law", ml: "കുടുംബ നിയമം" } },
  { icon: "fa-building", title: { en: "Corporate Law", ml: "കോർപ്പറേറ്റ് നിയമം" } },
  { icon: "fa-handshake", title: { en: "Arbitration", ml: "മധ്യസ്ഥത" } },
  { icon: "fa-file-signature", title: { en: "Documentation", ml: "ഡോക്യുമെന്റേഷൻ" } },
];

export default function PracticeAreas() {
  const { lang } = useApp();
  const t = translations;

  return (
    <section id="practice" className="py-24 bg-gray-50 dark:bg-neutral-950 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary dark:text-white">
          {t["nav-practice"][lang]}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-neutral-800">
              <div className="w-16 h-16 bg-primary/5 dark:bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary dark:group-hover:bg-accent transition-colors duration-300">
                <i className={`fas ${service.icon} text-2xl text-primary dark:text-accent group-hover:text-white dark:group-hover:text-primary`}></i>
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                {service.title[lang]}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Expert legal representation and consultation in {service.title.en.toLowerCase()} matters in Thrissur and surrounding districts.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}