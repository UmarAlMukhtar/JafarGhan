"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useApp } from "@/context/AppContext";
import { translations } from "@/data/translations";

type TabType = "cases" | "awards" | "publications";

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<TabType>("cases");
  const { lang } = useApp();
  const t = translations;
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab) return;

    // GSAP Transition: Fade out, swap content, fade in
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setActiveTab(tab);
        gsap.fromTo(contentRef.current, 
          { opacity: 0, y: -10 }, 
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-neutral-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary dark:text-white">
          {t["nav-achievements"][lang]}
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(["cases", "awards", "publications"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-8 py-3 rounded-full font-bold border-2 transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary border-primary text-white shadow-lg"
                  : "border-gray-200 dark:border-neutral-700 text-foreground/60 hover:border-primary/50"
              }`}
            >
              {t[`${tab}-tab` as keyof typeof t][lang]}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div ref={contentRef} className="max-w-4xl mx-auto min-h-[400px]">
          {activeTab === "cases" && (
            <div className="grid gap-6">
              <AchievementCard 
                title="State vs. Reddy (2019)" 
                desc="Successfully defended in a high-profile criminal case resulting in full acquittal for the client." 
              />
              <AchievementCard 
                title="Sharma Property Dispute (2017)" 
                desc="Resolved a complex multi-generational property dispute through strategic litigation and negotiation." 
              />
              <AchievementCard 
                title="XYZ & ABC Ltd. Merger (2015)" 
                desc="Provided lead legal oversight for a corporate merger valued at $50M, ensuring full regulatory compliance." 
              />
            </div>
          )}

          {activeTab === "awards" && (
            <div className="grid gap-6">
              <AchievementCard 
                title="Distinguished Legal Service Award (2020)" 
                desc="Awarded by the Bar Association for excellence in criminal defense and commitment to justice." 
              />
              <AchievementCard 
                title="Top 50 Influential Lawyers (2018)" 
                desc="Featured in the Legal Times annual listing for outstanding contributions to civil law." 
              />
            </div>
          )}

          {activeTab === "publications" && (
            <div className="grid gap-6">
              <AchievementCard 
                title="Modern Approaches to Criminal Defense" 
                desc="Published in the Law Review Journal, exploring digital evidence in modern trials." 
              />
              <AchievementCard 
                title="Understanding Property Rights" 
                desc="A comprehensive textbook co-authored for final-year law students at Government Law College." 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual cards
function AchievementCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-8 bg-gray-50 dark:bg-neutral-800 rounded-xl border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-primary dark:text-accent mb-2">{title}</h3>
      <p className="text-foreground/80 leading-relaxed">{desc}</p>
    </div>
  );
}