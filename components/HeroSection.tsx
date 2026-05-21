"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import Image from "next/image";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: 600 }}
    >
      {/* Background Layer */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {/* Desktop: video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src="/background-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: "brightness(0.35) saturate(1.1)" }}
        />
        {/* Mobile: image background */}
        <div className="absolute inset-0 w-full h-full md:hidden">
          <Image
            src="/cm-vijay-and-mla.jpeg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw"
            style={{ filter: "brightness(0.35) saturate(1.1)" }}
          />
        </div>
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(26,5,6,0.7) 0%, rgba(44,10,10,0.5) 40%, rgba(26,5,6,0.85) 100%)`,
          }}
        />
        {/* Gold top line */}
        <div
          className="absolute top-0 left-0 w-full h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, var(--manjal), transparent)",
            opacity: 0.4,
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 pt-20 pb-16"
        style={{ y: textY, opacity }}
      >
        <div className="section-container flex flex-col items-center justify-center w-full h-full max-h-[80vh]">
          {/* Centered Text Block */}
          <div className="flex flex-col items-center text-center max-w-3xl">
            {/* Gold horizontal rule above title */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
              className="mb-6"
              style={{
                width: 40,
                height: 2,
                background: "var(--manjal)",
                transformOrigin: "center",
              }}
            />

            {/* Large outlined "ERODE EAST" */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                className="font-bold leading-[0.9] text-transparent"
                style={{
                  fontSize: "clamp(3rem, 12vw, 10rem)",
                  WebkitTextStroke: lang === "ta" ? "1px var(--manjal)" : "1px var(--manjal)",
                  fontWeight: 300,
                  letterSpacing: lang === "ta" ? "0.02em" : "0.02em",
                  fontFamily: "var(--font-teko)",
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                  className="block"
                >
                  {t.hero_place_line1}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45, ease: smoothEase }}
                  className="block"
                >
                  {t.hero_place_line2}
                </motion.span>
              </motion.h1>
            </div>

            {/* Name block with gold dashes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: smoothEase }}
              className="mb-5"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <span style={{ color: "var(--manjal)", fontSize: "clamp(10px, 1.5vw, 14px)", opacity: 0.6 }}>──</span>
                <h2
                  className="font-bold uppercase tracking-wider"
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 2rem)",
                    color: "#fff",
                    fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-teko)",
                  }}
                >
                  {lang === "ta" ? t.hero_name_tamil : t.hero_name}
                </h2>
                <span style={{ color: "var(--manjal)", fontSize: "clamp(10px, 1.5vw, 14px)", opacity: 0.6 }}>──</span>
              </div>

              {/* Minister title */}
              <p
                className="font-medium tracking-[0.15em] uppercase"
                style={{
                  color: "var(--manjal)",
                  fontSize: "clamp(11px, 1.8vw, 16px)",
                  fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-teko)",
                  lineHeight: 1.4,
                }}
              >
                {lang === "ta" ? t.hero_role_tamil : t.hero_role}
              </p>
              <p
                className="tracking-[0.12em] uppercase mt-0.5"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "clamp(10px, 1.4vw, 13px)",
                  fontFamily: "var(--font-teko)",
                }}
              >
                {lang === "ta" ? "தமிழ்நாடு அரசு" : "Tamil Nadu"}
              </p>
            </motion.div>

            {/* Tagline - italic, light, spaced */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: smoothEase }}
              className="mb-10"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(13px, 1.8vw, 17px)",
                fontStyle: "italic",
                fontWeight: 300,
                letterSpacing: "0.15em",
                fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
              }}
            >
              {lang === "ta" ? "ஈரோடு கிழக்கிற்கு சேவை. தமிழ்நாட்டை வடிவமைத்தல்." : "Serving Erode East. Shaping Tamil Nadu."}
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="tracking-[0.35em] uppercase"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-teko)",
              fontSize: "9px",
            }}
          >
            {t.hero_scroll}
          </span>
          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            style={{ color: "var(--manjal)", opacity: 0.5 }}
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M10 3L10 17M10 17L4 11M10 17L16 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
