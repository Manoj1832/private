"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { electionData } from "@/lib/data";
import Image from "next/image";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface CounterProps {
  target: number;
  duration?: number;
  label: string;
  labelTamil: string;
  prefix?: string;
  pulse?: boolean;
}

function AnimatedCounter({ target, duration = 2.2, label, labelTamil, prefix = "", pulse }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration,
        ease: smoothEase,
        onUpdate: (v) => {
          setDisplayValue(Math.round(v).toLocaleString("en-IN"));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration, motionValue]);

  return (
    <div className="flex flex-col items-center text-center justify-center w-full px-2">
      <div className="relative inline-block">
        {pulse && (
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '50%',
              border: '1px solid var(--manjal)',
            }}
          />
        )}
        <span
          ref={ref}
          className="font-bold leading-none font-teko"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            color: "var(--manjal)",
          }}
        >
          {prefix}
          {displayValue}
        </span>
      </div>
      <span
        className="font-semibold tracking-wider uppercase mt-2 text-center"
        style={{
          color: "rgba(255,255,255,0.9)",
          fontFamily: "var(--font-teko)",
          fontSize: "clamp(14px, 2vw, 18px)",
        }}
      >
        {label}
      </span>
      <span
        className="block text-center"
        style={{
          marginTop: "4px",
          fontSize: "clamp(11px, 1.5vw, 14px)",
          opacity: 0.75,
          color: "rgba(255, 255, 255, 0.8)",
          fontFamily: "var(--font-tamil)",
        }}
      >
        {labelTamil}
      </span>
    </div>
  );
}

export default function VictoryCard() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-16 md:py-20 px-4 md:px-6 xl:px-8"
      style={{
        background: `linear-gradient(135deg, var(--marlot) 0%, var(--maroon) 50%, var(--marlot) 100%)`,
      }}
    >
      {/* Decorative top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 10%, var(--manjal) 50%, transparent 90%)",
        }}
      />

      <div className="section-container mx-auto">
        {/* Election badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="text-center mb-10"
        >
          <span
            className="inline-block px-4 py-1 font-semibold tracking-[0.2em] uppercase rounded-sm"
            style={{
              background: "rgba(255, 202, 0, 0.15)",
              color: "var(--manjal)",
              border: "1px solid rgba(255, 202, 0, 0.2)",
              fontFamily: "var(--font-teko)",
              fontSize: "clamp(11px, 1.5vw, 14px)",
            }}
          >
            {t.victory_badge}
          </span>
        </motion.div>

        {/* Content: Stats + Image */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Victory Image — Left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: smoothEase }}
            className="flex-shrink-0 order-1 lg:order-1 w-full max-w-[220px] sm:max-w-[280px] lg:max-w-none"
            style={{ width: 'clamp(200px, 30vw, 320px)' }}
          >
            <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/cm-vijay-and-mla.jpeg"
                alt="Victory"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 320px"
                style={{ objectPosition: "center top", border: "2px solid var(--manjal)" }}
              />
              {/* Gold corners */}
              <div style={{ position: "absolute", top: -2, left: -2, width: 24, height: 24, borderTop: "3px solid var(--manjal)", borderLeft: "3px solid var(--manjal)" }} />
              <div style={{ position: "absolute", top: -2, right: -2, width: 24, height: 24, borderTop: "3px solid var(--manjal)", borderRight: "3px solid var(--manjal)" }} />
              <div style={{ position: "absolute", bottom: -2, left: -2, width: 24, height: 24, borderBottom: "3px solid var(--manjal)", borderLeft: "3px solid var(--manjal)" }} />
              <div style={{ position: "absolute", bottom: -2, right: -2, width: 24, height: 24, borderBottom: "3px solid var(--manjal)", borderRight: "3px solid var(--manjal)" }} />
            </div>
          </motion.div>

          {/* Stats Grid — Right side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 flex-1 w-full order-2"
          >
            <AnimatedCounter
              target={electionData.votes}
              label={t.victory_votes}
              labelTamil={translations.ta.victory_votes}
              duration={2.5}
            />
            <AnimatedCounter
              target={electionData.margin}
              label={t.victory_margin}
              labelTamil={translations.ta.victory_margin}
              prefix="+"
              duration={2.2}
              pulse
            />
            <div className="flex flex-col items-center text-center justify-center w-full px-2">
              <span
                className="font-bold leading-none font-teko"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
                  color: "var(--manjal)",
                }}
              >
                {t.victory_won}
              </span>
              <span
                className="font-semibold tracking-wider uppercase mt-2 text-center"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "var(--font-teko)",
                  fontSize: "clamp(14px, 2vw, 18px)",
                }}
              >
                {t.victory_constituency}
              </span>
              <span
                className="block text-center"
                style={{
                  marginTop: "4px",
                  fontSize: "clamp(11px, 1.5vw, 14px)",
                  opacity: 0.75,
                  color: "rgba(255, 255, 255, 0.8)",
                  fontFamily: "var(--font-tamil)",
                }}
              >
                {translations.ta.victory_constituency}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Opponent Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: smoothEase }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center mt-10"
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '4px',
              padding: '5px 14px',
              fontSize: 'clamp(11px, 1.5vw, 13px)',
              letterSpacing: '0.08em',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>
              {t.victory_defeated}
            </span>
            <span style={{ color: 'white', fontWeight: 600 }}>
              Gopinath Palaniyappan
            </span>
            <span style={{
              background: 'rgba(255,255,255,0.15)',
              padding: '2px 8px',
              borderRadius: '3px',
              fontSize: '11px',
              letterSpacing: '0.1em'
            }}>INC</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 10%, var(--manjal) 50%, transparent 90%)",
        }}
      />
    </section>
  );
}
