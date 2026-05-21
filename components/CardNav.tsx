"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/data";
import Image from "next/image";
import "./CardNav.css";

export default function CardNav() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navItems = [
    {
      label: t.nav_about,
      bg: "rgba(92, 26, 27, 0.06)",
      color: "var(--maroon)",
      links: [{ label: t.nav_about, href: "/about" }],
    },
    {
      label: t.nav_constituency,
      bg: "rgba(153, 102, 0, 0.06)",
      color: "#996600",
      links: [{ label: t.nav_constituency, href: "/constituency" }],
    },
    {
      label: t.nav_updates,
      bg: "rgba(30, 144, 255, 0.06)",
      color: "var(--dodgerblue)",
      links: [
        { label: t.nav_updates, href: "/updates" },
        { label: t.nav_gallery, href: "/gallery" },
      ],
    },
    {
      label: t.nav_contact,
      bg: "rgba(46, 125, 50, 0.06)",
      color: "#2e7d32",
      links: [{ label: t.nav_contact, href: "/contact" }],
    },
  ];

  return (
    <>
      <div className="card-nav-container">
        <div className="card-nav">
          {/* Top Bar */}
          <div className="card-nav-top">
            <button
              className={`hamburger-menu ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>

            <Link href="/" className="logo-container" onClick={closeMenu}>
              <div className="logo-img-wrap">
                <Image src="/logo.png" alt="TVK" fill className="object-contain" sizes="32px" />
              </div>
              <div className="logo-text">
                <span className="logo-name">
                  {lang === "ta" ? siteConfig.nameTamil : siteConfig.name.toUpperCase()}
                </span>
                <span className="logo-sub">{t.nav_title}</span>
              </div>
            </Link>

            <Link href="/contact" className="card-nav-cta-button" onClick={closeMenu}>
              {t.nav_connect}
            </Link>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={contentRef}
                className="card-nav-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-nav-cards">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="nav-card"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.08 + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      <div className="nav-card-label">{item.label}</div>
                      <div className="nav-card-links">
                        {item.links.map((lnk) => (
                          <Link
                            key={lnk.href}
                            className="nav-card-link"
                            href={lnk.href}
                            onClick={closeMenu}
                          >
                            <svg className="nav-card-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {lnk.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  {/* Language Toggle */}
                  <motion.div
                    className="nav-card nav-card-lang"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="nav-card-label" style={{ fontSize: 16 }}>
                      {lang === "ta" ? "LANGUAGE" : "மொழி"}
                    </div>
                    <div className="nav-card-links">
                      <button
                        className="lang-toggle-btn"
                        onClick={() => { toggleLang(); closeMenu(); }}
                      >
                        {lang === "ta" ? "Switch to English" : "தமிழில் காண்க"}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: "96px" }} />
    </>
  );
}
