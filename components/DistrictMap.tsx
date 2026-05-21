"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { constituencyAreas, constituencyWorks } from "@/lib/data";
import { Icons } from "@/components/Icons";
import Image from "next/image";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function DistrictMap() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<"progress" | "completed">("progress");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const works =
    activeTab === "progress"
      ? constituencyWorks.inProgress
      : constituencyWorks.completed;

  return (
    <section
      id="constituency"
      ref={ref}
      className="relative w-full py-16 md:py-24 px-4 md:px-6 xl:px-8"
      style={{
        background: "linear-gradient(180deg, var(--white) 0%, #f0f1f5 100%)",
      }}
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
            {t.constituency_title}
          </span>
          <h2
            className="font-bold uppercase mt-2 font-teko"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--maroon)",
            }}
          >
            {lang === "ta" ? t.hero_place_line1 + " " + t.hero_place_line2 : "ERODE EAST"}
          </h2>
          <div
            className="w-16 h-[3px] mx-auto mt-3"
            style={{ background: "var(--manjal)" }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left — Map Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
            className="w-full lg:w-1/2 flex flex-col items-center"
          >
            <div className="relative w-full max-w-md" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/tamilnadu-districts-tvk-style.png"
                alt="Tamil Nadu Districts Map"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "drop-shadow(0 4px 20px rgba(92,26,27,0.15))" }}
              />
              {/* Erode East pulse marker */}
              <motion.div
                className="absolute"
                style={{
                  top: "42%",
                  left: "38%",
                  width: 16,
                  height: 16,
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div style={{
                  width: 16, height: 16,
                  borderRadius: "50%",
                  background: "var(--manjal)",
                  boxShadow: "0 0 0 4px rgba(255,202,0,0.3)",
                }} />
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    style={{
                      position: "absolute",
                      top: "50%", left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 16, height: 16,
                      borderRadius: "50%",
                      border: "1.5px solid var(--manjal)",
                    }}
                    animate={{
                      width: [16, 56],
                      height: [16, 56],
                      opacity: [0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.65,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>
              {/* Erode label */}
              <motion.div
                className="absolute px-2 py-1 rounded-sm"
                style={{
                  top: "35%",
                  left: "42%",
                  background: "var(--maroon)",
                  border: "1px solid var(--manjal)",
                }}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span
                  className="font-teko font-bold tracking-wider"
                  style={{ color: "var(--manjal)", fontSize: 10 }}
                >
                  ERODE EAST
                </span>
              </motion.div>
            </div>

            {/* Area tags */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6">
              {constituencyAreas.map((area) => {
                const isUrban = area.type === "Urban";
                const isSemi = area.type === "Semi-Urban";
                const badgeColor = isUrban ? "var(--maroon)" : isSemi ? "#996600" : "#2d6a2d";
                const badgeLabel = isUrban ? t.constituency_urban : isSemi ? t.constituency_semi_urban : t.constituency_rural;

                return (
                  <div
                    key={area.name}
                    className="flex items-center gap-1.5 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: badgeColor }} />
                    <span className="text-gray-700" style={{ fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)" }}>
                      {lang === "ta" ? area.nameTamil : area.name}
                    </span>
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: badgeColor, fontFamily: "var(--font-teko)" }}
                    >
                      {badgeLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Works */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: smoothEase }}
            className="w-full lg:w-1/2"
          >
            {/* Tabs */}
            <div className="flex gap-0 mb-6" style={{ borderBottom: "2px solid rgba(0,0,0,0.06)" }}>
              <button
                onClick={() => setActiveTab("progress")}
                className={`tab-button ${activeTab === "progress" ? "active" : ""}`}
                style={{ fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-teko)" }}
              >
                {t.constituency_tab_progress}
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`tab-button ${activeTab === "completed" ? "active" : ""}`}
                style={{ fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-teko)" }}
              >
                {t.constituency_tab_completed}
              </button>
            </div>

            {/* Work Items */}
            <div className="flex flex-col gap-3">
              {works.map((work, i) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: smoothEase }}
                  className="card"
                  style={{ borderLeftColor: "var(--maroon)" }}
                >
                  <div className="flex items-center gap-3">
                    <div style={{ color: "var(--maroon)" }}>
                      {Icons[work.icon as keyof typeof Icons]({ width: 22, height: 22 })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "var(--maroon)", fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)" }}
                      >
                        {lang === "ta" ? work.titleTamil : work.title}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--gray)", fontFamily: "var(--font-tamil)" }}
                      >
                        {work.titleTamil}
                      </p>
                    </div>
                    <span
                      className="font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm flex-shrink-0"
                      style={{
                        background: work.status === "Completed" ? "rgba(76, 175, 80, 0.1)" : "rgba(255, 202, 0, 0.15)",
                        color: work.status === "Completed" ? "#4caf50" : "var(--marlot)",
                        fontFamily: "var(--font-teko)",
                        fontSize: "12px",
                      }}
                    >
                      {work.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
