"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
export const springEase: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
};

export const fadeRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export function useGSAPScroll(ref: React.RefObject<HTMLElement | null>, vars?: gsap.TweenVars) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          ...vars,
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [ref, vars]);
}

export function useGSAPPin(
  ref: React.RefObject<HTMLElement | null>,
  pinRef: React.RefObject<HTMLElement | null>,
  duration: number = 3
) {
  useEffect(() => {
    if (!ref.current || !pinRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top top",
        end: `+=${duration * 100}%`,
        pin: pinRef.current,
        anticipatePin: 1,
      });
    }, ref);
    return () => ctx.revert();
  }, [ref, pinRef, duration]);
}

export function MagneticButton({ children, className, ...props }: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlowCard({ children, className, ...props }: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(ref.current, {
      rotateX: y * -8,
      rotateY: x * 8,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </div>
  );
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  label,
  title,
  titleTa,
}: {
  label: string;
  title: string;
  titleTa?: string;
}) {
  return (
    <div className="text-center mb-14">
      <span
        className="font-semibold tracking-[0.3em] uppercase text-sm inline-block"
        style={{ color: "var(--gray)", fontFamily: "var(--font-teko)" }}
      >
        {label}
      </span>
      <h2
        className="font-bold uppercase mt-2 font-teko"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          color: "var(--maroon)",
          letterSpacing: "0.03em",
        }}
      >
        {title}
      </h2>
      {titleTa && (
        <p
          className="font-tamil text-lg mt-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {titleTa}
        </p>
      )}
      <div
        className="w-20 h-[2px] mx-auto mt-4"
        style={{
          background: "linear-gradient(90deg, transparent, var(--manjal), transparent)",
        }}
      />
    </div>
  );
}
