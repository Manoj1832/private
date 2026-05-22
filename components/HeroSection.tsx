"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import Image from "next/image";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const split = new SplitType(titleRef.current, { types: "lines,words,chars" });
        gsap.fromTo(
          split.chars,
          { opacity: 0, y: 60, rotateX: 30 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.02,
            delay: 0.5,
          }
        );
      }
      if (subtitleRef.current) {
        const split = new SplitType(subtitleRef.current, { types: "lines,words" });
        gsap.fromTo(
          split.words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.04,
            delay: 1.2,
          }
        );
      }
      if (taglineRef.current) {
        gsap.fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, delay: 1.8, ease: "power3.out" }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!glowRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,202,0,0.06) 0%, transparent 60%)`;
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden cursor-default"
      style={{ height: "100vh", minHeight: 650 }}
      onMouseMove={handleMouseMove}
    >
      {/* Background Layer */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src="/background-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: "brightness(0.3) saturate(1.2)" }}
        />
        <div className="absolute inset-0 w-full h-full md:hidden">
          <Image
            src="/cm-vijay-and-mla.jpeg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ filter: "brightness(0.3) saturate(1.2)" }}
          />
        </div>
        {/* Deep gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(10,3,4,0.85) 0%, rgba(26,5,6,0.6) 40%, rgba(10,3,4,0.9) 100%)
            `,
          }}
        />
        {/* Mouse-reactive glow */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none transition-all duration-300"
          style={{ transition: "background 0.1s ease" }}
        />
        {/* Gold top beam */}
        <div
          className="absolute top-0 left-0 w-full h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, var(--manjal), transparent)",
            opacity: 0.5,
          }}
        />
        {/* Side light beam */}
        <div
          className="absolute top-0 right-0 w-[30vw] h-full pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(255,202,0,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 pt-20 pb-16"
        style={{ y: textY, opacity }}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="mb-8"
            style={{
              width: 60,
              height: 2,
              background: "var(--manjal)",
              transformOrigin: "center",
            }}
          />

          {/* Outlined title — SplitType */}
          <h1
            ref={titleRef}
            className="font-bold leading-[0.9] text-transparent mb-6"
            style={{
              fontSize: "clamp(3.5rem, 14vw, 12rem)",
              WebkitTextStroke: `1.5px var(--manjal)`,
              fontWeight: 200,
              letterSpacing: "0.02em",
              fontFamily: "var(--font-teko)",
            }}
          >
            {t.hero_place_line1} {t.hero_place_line2}
          </h1>

          {/* Name block */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span style={{ color: "var(--manjal)", fontSize: "clamp(12px, 1.5vw, 16px)", opacity: 0.5 }}>━━━</span>
            <h2
              className="font-bold uppercase tracking-widest"
              style={{
                fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
                color: "#fff",
                fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-teko)",
              }}
            >
              {lang === "ta" ? t.hero_name_tamil : t.hero_name}
            </h2>
            <span style={{ color: "var(--manjal)", fontSize: "clamp(12px, 1.5vw, 16px)", opacity: 0.5 }}>━━━</span>
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-medium tracking-[0.2em] uppercase"
            style={{
              color: "var(--manjal)",
              fontSize: "clamp(12px, 1.8vw, 18px)",
              fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-teko)",
              lineHeight: 1.4,
            }}
          >
            {lang === "ta" ? t.hero_role_tamil : t.hero_role}
          </p>
          <p
            className="tracking-[0.15em] uppercase mt-1"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "clamp(10px, 1.4vw, 13px)",
              fontFamily: "var(--font-teko)",
            }}
          >
            {lang === "ta" ? "தமிழ்நாடு அரசு" : "GOVERNMENT OF TAMIL NADU"}
          </p>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="mt-8 font-light"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(13px, 1.8vw, 17px)",
              fontStyle: "italic",
              letterSpacing: "0.12em",
              fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
            }}
          >
            {lang === "ta" ? "ஈரோடு கிழக்கிற்கு சேவை. தமிழ்நாட்டை வடிவமைத்தல்." : "Serving Erode East. Shaping Tamil Nadu."}
          </p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span
            className="tracking-[0.4em] uppercase text-[9px]"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-teko)" }}
          >
            {t.hero_scroll}
          </span>
          <motion.svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            style={{ color: "var(--manjal)", opacity: 0.4 }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2" fill="currentColor" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
