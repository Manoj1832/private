"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { siteConfig, footerLinks, socialLinks } from "@/lib/data";
import Image from "next/image";

function SocialIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    facebook: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    youtube: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };
  return icons[type] || null;
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4
        className="font-teko font-bold text-base tracking-[0.25em] uppercase"
        style={{ color: "var(--manjal)" }}
      >
        {children}
      </h4>
      <div
        className="w-8 h-[2px] mt-2"
        style={{ background: "var(--manjal)" }}
      />
    </div>
  );
}

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full overflow-hidden shrink-0"
      style={{
        background: "#1a0a0a",
        borderTop: "3px solid var(--manjal)",
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(255,202,0,0.04) 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 20%, rgba(92,26,27,0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Top decorative band */}
      <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-16 md:pt-20 pb-10">
        {/* Brand row — full width */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-14 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Left — Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="relative overflow-hidden rounded-sm shrink-0"
                style={{ width: 56, height: 56 }}
              >
                <Image
                  src="/logo.png"
                  alt="TVK"
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="font-teko font-bold text-3xl tracking-wide leading-none"
                  style={{ color: "#fff" }}
                >
                  {lang === "ta" ? siteConfig.nameTamil : siteConfig.name.toUpperCase()}
                </span>
                <span
                  className="font-teko text-sm tracking-[0.2em] uppercase mt-1"
                  style={{ color: "var(--manjal)" }}
                >
                  {lang === "ta" ? "கைத்தறி மற்றும் ஜவுளித்துறை அமைச்சர்" : "Minister for Handlooms & Textiles"}
                </span>
              </div>
            </div>
            <p
              className="text-base leading-relaxed max-w-md"
              style={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic", letterSpacing: "0.05em" }}
            >
              {lang === "ta" ? "மக்களின் குரல் — சட்டமன்றத்தில். ஈரோடு கிழக்கு தொகுதியின் முன்னேற்றத்திற்காக அர்ப்பணிக்கப்பட்டவர்." : "The People's Voice in the Assembly. Dedicated to the progress of Erode East constituency."}
            </p>
          </div>

          {/* Right — Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span
              className="font-teko text-xs tracking-[0.2em] uppercase"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {lang === "ta" ? "எங்களை பின்தொடரவும்" : "FOLLOW US"}
            </span>
            <ul className="flex items-center gap-3">
              {[
                { type: "instagram", url: socialLinks.instagram },
                { type: "facebook", url: socialLinks.facebook },
                { type: "linkedin", url: socialLinks.linkedin },
                { type: "youtube", url: socialLinks.youtube },
              ].map((social) => (
                <li key={social.type}>
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      width: 48,
                      height: 48,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--manjal)";
                      e.currentTarget.style.borderColor = "rgba(255,202,0,0.4)";
                      e.currentTarget.style.background = "rgba(255,202,0,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <SocialIcon type={social.type} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Col 1 — Quick Links */}
          <div>
            <FooterHeading>{t.footer_col1_title}</FooterHeading>
            <ul className="flex flex-col gap-3" style={{ listStyle: "none" }}>
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base no-underline transition-all duration-300 block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--manjal)";
                      e.currentTarget.style.paddingLeft = "6px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    {lang === "ta" ? t[link.label as keyof typeof t] : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — Resources */}
          <div>
            <FooterHeading>{t.footer_col2_title}</FooterHeading>
            <ul className="flex flex-col gap-3" style={{ listStyle: "none" }}>
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-base no-underline transition-all duration-300 block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--manjal)";
                      e.currentTarget.style.paddingLeft = "6px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    {lang === "ta" ? t[link.label as keyof typeof t] : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div>
            <FooterHeading>{t.footer_col3_title}</FooterHeading>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:mla.vijaybalaji@gmail.com"
                className="text-base no-underline transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--manjal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                <span
                  className="block text-xs uppercase tracking-wider mb-1"
                  style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-teko)" }}
                >
                  Email
                </span>
                mla.vijaybalaji@gmail.com
              </a>

              {/* Office Location */}
              <div
                className="rounded-sm p-4"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  className="block text-xs uppercase tracking-wider mb-2"
                  style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-teko)" }}
                >
                  Office
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Erode East Constituency Office<br />
                  Erode, Tamil Nadu — 638001
                </p>
              </div>
            </div>
          </div>

          {/* Col 4 — Office Hours */}
          <div>
            <FooterHeading>{lang === "ta" ? "அலுவலக நேரம்" : "OFFICE HOURS"}</FooterHeading>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span>Mon — Fri</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-teko)", fontSize: "15px" }}>10:00 — 17:00</span>
              </div>
              <div className="flex justify-between items-center text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span>Saturday</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-teko)", fontSize: "15px" }}>10:00 — 13:00</span>
              </div>
              <div className="flex justify-between items-center text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span>Sunday</span>
                <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-teko)", fontSize: "15px" }}>Closed</span>
              </div>
              <div
                className="mt-3 p-3 rounded-sm text-center"
                style={{
                  background: "rgba(255,202,0,0.08)",
                  border: "1px solid rgba(255,202,0,0.15)",
                }}
              >
                <p className="text-xs" style={{ color: "var(--manjal)", fontFamily: "var(--font-teko)", letterSpacing: "0.1em" }}>
                  {lang === "ta" ? "அவசர தொடர்புக்கு Instagram மூலம் அணுகவும்" : "For urgent matters, reach via Instagram"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div
          className="w-full h-[1px] mb-8"
          style={{
            background: "linear-gradient(90deg, transparent 0%, var(--manjal) 50%, transparent 100%)",
            opacity: 0.3,
          }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-10 md:pb-12">
          <p
            className="text-sm text-center md:text-left"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            © {currentYear} {lang === "ta" ? siteConfig.nameTamil : siteConfig.name} — {lang === "ta" ? translations.ta.victory_constituency : siteConfig.constituency}, {siteConfig.state}.
          </p>
          <p
            className="text-sm text-center md:text-right"
            style={{ color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}
          >
            {lang === "ta" ? "மக்களுக்காக பெருமையுடன் உருவாக்கப்பட்டது." : "Built with pride for the people."}
          </p>
        </div>
      </div>
    </footer>
  );
}
