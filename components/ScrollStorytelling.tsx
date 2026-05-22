"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { smoothEase } from "@/lib/animation";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    id: 1,
    title: "Born to Serve",
    subtitle: "Karungalpalayam, Erode",
    tamilTitle: "சேவை செய்ய பிறந்தவர்",
    tamilSubtitle: "கருங்கல்பாளையம், ஈரோடு",
    description: "Rooted in the soil of Erode, shaped by the values of hard work and integrity. Every step has been a preparation for public service.",
    color: "var(--marlot)",
  },
  {
    id: 2,
    title: "The Call of Duty",
    subtitle: "Joining the Movement",
    tamilTitle: "கடமையின் அழைப்பு",
    tamilSubtitle: "இயக்கத்தில் இணைதல்",
    description: "When the movement for change called, the answer was clear. Leaving business behind to serve a greater purpose — the people of Tamil Nadu.",
    color: "var(--maroon)",
  },
  {
    id: 3,
    title: "Building the Ground",
    subtitle: "District Secretary",
    tamilTitle: "அடித்தளத்தை கட்டியெழுப்புதல்",
    tamilSubtitle: "மாவட்ட செயலாளர்",
    description: "From ward committees to district strategy — organizing, listening, and leading from the front. Building a political structure that serves, not rules.",
    color: "#996600",
  },
  {
    id: 4,
    title: "The People's Verdict",
    subtitle: "Elected MLA — Erode East",
    tamilTitle: "மக்களின் தீர்ப்பு",
    tamilSubtitle: "சட்டமன்ற உறுப்பினர் — ஈரோடு கிழக்கு",
    description: "A historic mandate. The people of Erode East placed their trust, their hopes, and their future in our hands. The work begins now.",
    color: "var(--manjal)",
  },
];

export default function ScrollStorytelling() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      textRefs.current.forEach((el, i) => {
        if (!el) return;
        const split = new SplitType(el, { types: "lines,words" });

        gsap.fromTo(
          split.words,
          { opacity: 0, y: 30, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.03,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      scenes.forEach((_, i) => {
        const card = sectionRef.current?.querySelector(`[data-scene="${i}"]`);
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 md:py-32 px-4 md:px-6 xl:px-8"
      style={{
        background: "linear-gradient(180deg, #f8f9fc 0%, #f0f1f5 50%, #1a0a0a 100%)",
      }}
    >
      {/* Section Header */}
      <div className="section-container mx-auto mb-16">
        <div className="text-center">
          <span
            className="font-semibold tracking-[0.3em] uppercase text-sm"
            style={{ color: "var(--gray)", fontFamily: "var(--font-teko)" }}
          >
            {t.timeline_title}
          </span>
          <h2
            className="font-bold uppercase mt-2 font-teko"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "var(--maroon)",
              letterSpacing: "0.03em",
            }}
          >
            {lang === "ta" ? "பயணம்" : "THE JOURNEY"}
          </h2>
          <div
            className="w-20 h-[2px] mx-auto mt-4"
            style={{
              background: "linear-gradient(90deg, transparent, var(--manjal), transparent)",
            }}
          />
        </div>
      </div>

      {/* Scenes */}
      <div className="section-container mx-auto flex flex-col gap-32 md:gap-48">
        {scenes.map((scene, i) => (
          <div
            key={scene.id}
            data-scene={i}
            className="relative"
          >
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
              {/* Scene Number */}
              <div
                className="hidden md:flex flex-shrink-0 items-center justify-center w-20 h-20 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${scene.color}22, transparent)`,
                  border: `1px solid ${scene.color}33`,
                }}
              >
                <span
                  className="font-bold font-teko text-3xl"
                  style={{ color: scene.color }}
                >
                  {String(scene.id).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div
                  className="p-8 md:p-10 rounded-sm"
                  style={{
                    background: i === scenes.length - 1
                      ? "linear-gradient(135deg, rgba(26,10,10,0.95) 0%, rgba(92,26,27,0.9) 100%)"
                      : "#fff",
                    boxShadow: i === scenes.length - 1
                      ? "0 20px 60px rgba(0,0,0,0.3)"
                      : "0 10px 40px rgba(92,26,27,0.08)",
                    border: i === scenes.length - 1
                      ? "1px solid rgba(255,202,0,0.15)"
                      : "1px solid rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Gold top line */}
                  <div
                    className="w-16 h-[2px] mb-6"
                    style={{
                      background: `linear-gradient(90deg, var(--manjal), transparent)`,
                    }}
                  />

                  <div ref={(el: HTMLDivElement | null) => { textRefs.current[i] = el; }}>
                    <h3
                      className="font-bold font-teko uppercase leading-none mb-2"
                      style={{
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        color: i === scenes.length - 1 ? "var(--manjal)" : "var(--maroon)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {lang === "ta" ? scene.tamilTitle : scene.title}
                    </h3>

                    <p
                      className="font-semibold tracking-wider uppercase mb-4"
                      style={{
                        fontFamily: "var(--font-teko)",
                        fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                        color: i === scenes.length - 1 ? "rgba(255,202,0,0.6)" : "var(--gray)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {lang === "ta" ? scene.tamilSubtitle : scene.subtitle}
                    </p>

                    <p
                      className="text-base leading-relaxed max-w-2xl"
                      style={{
                        color: i === scenes.length - 1 ? "rgba(255,255,255,0.7)" : "var(--text-secondary)",
                        fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                        lineHeight: 1.8,
                      }}
                    >
                      {scene.description}
                    </p>
                  </div>

                  {/* Scene indicator */}
                  <div className="flex items-center gap-3 mt-8">
                    {scenes.map((_, j) => (
                      <div
                        key={j}
                        className="h-[2px] transition-all duration-500"
                        style={{
                          width: j === i ? 40 : 20,
                          background: j === i
                            ? "var(--manjal)"
                            : j < i
                            ? "var(--maroon)"
                            : "rgba(0,0,0,0.1)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
