"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{
            background: "radial-gradient(ellipse at center, #1a0a0a 0%, #0d0505 100%)",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Grain texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.03,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Ambient glow */}
          <div
            className="absolute w-[60vw] h-[60vw] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,202,0,0.06) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* Gold flare sweep */}
          <motion.div
            className="absolute w-[40vw] h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent, var(--manjal), transparent)",
              filter: "blur(4px)",
            }}
            initial={{ rotate: -30, x: "-100%", opacity: 0 }}
            animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Logo reveal */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center"
            >
              {/* Monogram */}
              <motion.div
                className="relative"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span
                  className="font-bold tracking-wider"
                  style={{
                    fontFamily: "var(--font-teko)",
                    fontSize: "clamp(4rem, 10vw, 8rem)",
                    color: "var(--manjal)",
                    textShadow: "0 0 40px rgba(255,202,0,0.3), 0 0 80px rgba(255,202,0,0.1)",
                  }}
                >
                  VB
                </span>
              </motion.div>

              {/* Gold underline */}
              <motion.div
                className="h-[2px] mt-4"
                style={{ background: "var(--manjal)" }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              />

              {/* Title */}
              <motion.p
                className="mt-6 tracking-[0.3em] uppercase text-center"
                style={{
                  fontFamily: "var(--font-teko)",
                  fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.3em",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                Minister for Handlooms & Textiles
              </motion.p>

              <motion.p
                className="mt-1 tracking-[0.25em] uppercase text-center"
                style={{
                  fontFamily: "var(--font-teko)",
                  fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.25em",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                Govt of Tamil Nadu
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom loading bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{ background: "var(--manjal)" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
