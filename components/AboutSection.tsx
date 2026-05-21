"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/data";
import { Icons } from "@/components/Icons";
import Image from "next/image";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function AboutSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const bioCardsData = [
    {
      icon: "birthday" as const,
      title: t.about_card_born_title,
      value: t.about_card_born_val,
      detail: t.about_card_born_det,
    },
    {
      icon: "graduation" as const,
      title: t.about_card_edu_title,
      value: t.about_card_edu_val,
      detail: t.about_card_edu_det,
    },
    {
      icon: "building" as const,
      title: t.about_card_role_title,
      value: t.about_card_role_val,
      detail: t.about_card_role_det,
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-20 md:py-28 px-4 md:px-6 xl:px-8"
      style={{ background: "var(--white)" }}
    >
      <div className="section-container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="text-center mb-12"
        >
          <span
            className="font-semibold tracking-[0.25em] uppercase text-sm"
            style={{ color: "var(--gray)", fontFamily: "var(--font-teko)" }}
          >
            {t.about_title}
          </span>
          <h2
            className="font-bold uppercase mt-2 font-teko"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--maroon)",
            }}
          >
            {lang === "ta" ? siteConfig.nameTamil : siteConfig.name}
          </h2>
          <div
            className="w-16 h-[3px] mx-auto mt-3"
            style={{ background: "var(--manjal)" }}
          />
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left Column — Portrait Card (Sticky on desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
            className="w-full lg:w-1/3 flex items-start justify-center lg:sticky lg:top-[100px]"
          >
            <div
              className="relative w-full rounded-sm overflow-hidden"
              style={{
                aspectRatio: "3/4",
                maxWidth: 380,
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Portrait image */}
              <Image
                src="/balaji-and-vijay-bokeh.jpeg"
                alt="M. Vijay Balaji"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover"
                style={{ objectPosition: 'center top' }}
              />
              {/* Bottom text overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(180deg, transparent 0%, rgba(40,10,12,0.95) 100%)",
                }}
              >
                <p
                  className="font-bold uppercase tracking-wider text-2xl font-teko"
                  style={{ color: "#fff" }}
                >
                  {lang === "ta" ? siteConfig.nameTamil : siteConfig.name}
                </p>
                <p
                  className="font-medium tracking-wider uppercase text-base font-teko"
                  style={{ color: "var(--manjal)" }}
                >
                  {t.hero_role}
                </p>
              </div>
              {/* Corner Accents */}
              <div
                className="absolute top-4 left-4 w-8 h-8"
                style={{
                  borderTop: "2px solid var(--manjal)",
                  borderLeft: "2px solid var(--manjal)",
                }}
              />
              <div
                className="absolute top-4 right-4 w-8 h-8"
                style={{
                  borderTop: "2px solid var(--manjal)",
                  borderRight: "2px solid var(--manjal)",
                }}
              />
            </div>
          </motion.div>

          {/* Right Column — Info + Grid */}
          <div className="flex-1 w-full flex flex-col gap-6">
            {/* Biography Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: smoothEase }}
            >
              <p
                className="font-medium"
                style={{
                  fontSize: lang === "ta" ? "15px" : "16px",
                  lineHeight: lang === "ta" ? "1.9" : "1.75",
                  color: "#555559",
                  fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                }}
              >
                {t.about_bio_short}
              </p>
            </motion.div>

            {/* Info Cards Grid: 1fr 1fr with border-left styles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bioCardsData.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.1,
                    ease: smoothEase,
                  }}
                  style={{
                    borderLeft: "3px solid var(--maroon)",
                    padding: "14px 16px",
                    background: "#fff",
                    borderRadius: "0 8px 8px 0",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div className="flex-shrink-0 mt-1" style={{ color: "var(--maroon)" }}>
                    {Icons[card.icon]({ width: 22, height: 22 })}
                  </div>
                  <div className="min-w-0">
                    <h4
                      className="font-bold uppercase tracking-wider text-xs"
                      style={{ color: "var(--gray)", fontFamily: "var(--font-teko)" }}
                    >
                      {card.title}
                    </h4>
                    <p
                      className="font-semibold text-sm mt-0.5 truncate"
                      style={{
                        color: "var(--maroon)",
                        fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                      }}
                    >
                      {card.value}
                    </p>
                    <p
                      className="text-xs mt-1 truncate"
                      style={{
                        color: "var(--black)",
                        fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                      }}
                    >
                      {card.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
