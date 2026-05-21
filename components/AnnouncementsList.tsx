"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { announcements } from "@/lib/data";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: d.toLocaleString("en", { month: "short" }).toUpperCase(),
    year: d.getFullYear(),
  };
}

export default function AnnouncementsList() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<"all" | "announcement" | "event">("all");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    activeTab === "all"
      ? announcements
      : announcements.filter((a) => a.type === activeTab);

  return (
    <section
      id="updates"
      ref={ref}
      className="relative w-full py-16 md:py-24 px-4 md:px-6 xl:px-8"
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
            {t.announcements_title}
          </span>
          <h2
            className="font-bold uppercase mt-2 font-teko"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--maroon)",
            }}
          >
            {lang === "ta" ? "செய்திகள்" : "UPDATES"}
          </h2>
          <div
            className="w-16 h-[3px] mx-auto mt-3"
            style={{ background: "var(--manjal)" }}
          />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
          className="flex justify-center gap-0 mb-8"
          style={{ borderBottom: "2px solid rgba(0,0,0,0.06)" }}
        >
          {[
            { key: "all", label: t.announcements_tab_all },
            { key: "announcement", label: t.announcements_tab_announcements },
            { key: "event", label: t.announcements_tab_events },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "all" | "announcement" | "event")}
              className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
              style={{ fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-teko)" }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {filtered.map((item, i) => {
            const date = formatDate(item.date);
            return (
              <motion.a
                key={item.title}
                href="/updates"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.08,
                  ease: smoothEase,
                }}
                className="flex items-center gap-4 p-4 rounded-sm transition-all duration-300 cursor-pointer group no-underline"
                style={{
                  background: "#fff",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                {/* Date badge */}
                <div
                  style={{
                    minWidth: "52px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--maroon)",
                    padding: "8px",
                    borderRadius: "4px",
                  }}
                >
                  <span
                    className="font-bold leading-none font-teko text-2xl"
                    style={{ color: "var(--manjal)" }}
                  >
                    {date.day}
                  </span>
                  <span
                    className="font-semibold tracking-wider uppercase font-teko text-[10px]"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {date.month}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-semibold tracking-wider uppercase px-2 py-0.5 rounded-sm font-teko text-[10px]"
                      style={{
                        background:
                          item.type === "event"
                            ? "rgba(30, 144, 255, 0.1)"
                            : "rgba(255, 202, 0, 0.15)",
                        color:
                          item.type === "event"
                            ? "var(--dodgerblue)"
                            : "var(--marlot)",
                      }}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p
                    className="group-hover:text-[var(--maroon)] transition-colors duration-300 truncate"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      marginBottom: "4px",
                      color: "var(--black)",
                      fontFamily: "var(--font-ins-sans)",
                    }}
                  >
                    {lang === "ta" ? item.titleTamil : item.title}
                  </p>
                  <p
                    className="truncate"
                    style={{
                      fontSize: "13px",
                      color: "#888",
                      fontFamily: "var(--font-tamil)",
                    }}
                  >
                    {item.titleTamil}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center"
                  style={{ color: "var(--maroon)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <a href="/updates" className="btn-gold no-underline" style={{ fontFamily: "var(--font-teko)" }}>
            {t.announcements_view_more}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
