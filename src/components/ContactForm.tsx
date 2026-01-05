"use client";

import { useApp } from "@/context/AppContext";
import { translations } from "@/data/translations";

export default function ContactForm() {
  const { lang } = useApp();
  const t = translations;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-primary dark:text-accent mb-4">{t["contact-title"][lang]}</h2>
              <p className="text-foreground/60">Schedule a visit to our Kodungallur office for a direct consultation.</p>
            </div>

            <div className="space-y-8">
              <ContactInfoItem 
                icon="fa-map-marker-alt" 
                title={lang === 'en' ? "Office Address" : "ഓഫീസ് വിലാസം"}
                detail={`${t["office-location"][lang]}. (${t["office-landmark"][lang]})`}
              />
              <ContactInfoItem 
                icon="fa-clock" 
                title={lang === 'en' ? "Office Hours" : "ഓഫീസ് സമയം"}
                detail={t["office-hours-detail"][lang]}
              />
              <ContactInfoItem 
                icon="fa-phone" 
                title={lang === 'en' ? "Phone" : "ഫോൺ"}
                detail="+91 98765 43210"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 dark:bg-neutral-800 p-8 md:p-12 rounded-3xl shadow-inner">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-white dark:bg-neutral-900 border-none ring-1 ring-gray-200 dark:ring-neutral-700 focus:ring-2 focus:ring-accent outline-none transition-all" />
                <input type="tel" placeholder="Phone" className="w-full p-4 rounded-xl bg-white dark:bg-neutral-900 border-none ring-1 ring-gray-200 dark:ring-neutral-700 focus:ring-2 focus:ring-accent outline-none transition-all" />
              </div>
              <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-white dark:bg-neutral-900 border-none ring-1 ring-gray-200 dark:ring-neutral-700 focus:ring-2 focus:ring-accent outline-none transition-all" />
              <textarea placeholder="How can we help?" rows={4} className="w-full p-4 rounded-xl bg-white dark:bg-neutral-900 border-none ring-1 ring-gray-200 dark:ring-neutral-700 focus:ring-2 focus:ring-accent outline-none transition-all"></textarea>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all shadow-lg hover:shadow-primary/30">
                {t["hero-cta"][lang]}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, title, detail }: { icon: string; title: string; detail: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
        <i className={`fas ${icon} text-accent text-xl`}></i>
      </div>
      <div>
        <h4 className="font-bold text-lg text-primary dark:text-white">{title}</h4>
        <p className="text-foreground/70">{detail}</p>
      </div>
    </div>
  );
}