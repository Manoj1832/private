"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

interface GalleryItem {
  id: string;
  category: "campaigns" | "visits" | "events" | "party";
  title: string;
  titleTamil: string;
  date: string;
  bgGradient: string;
}

export default function GalleryPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<"ALL" | "campaigns" | "visits" | "events" | "party">("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      category: "campaigns",
      title: "Assembly Election Campaign",
      titleTamil: "சட்டமன்றத் தேர்தல் பிரச்சாரம்",
      date: "May 2026",
      bgGradient: "linear-gradient(135deg, #3d1112 0%, #1a0506 100%)",
    },
    {
      id: "2",
      category: "visits",
      title: "Ward 4 Grievance Assessment",
      titleTamil: "வார்டு 4 மக்கள் குறை கேட்டறிதல்",
      date: "May 2026",
      bgGradient: "linear-gradient(135deg, #5c1a1b 0%, #2d0a0b 100%)",
    },
    {
      id: "3",
      category: "events",
      title: "TVK Youth Volunteers Rally",
      titleTamil: "தவிக இளைஞர் அணி பேரணி",
      date: "April 2026",
      bgGradient: "linear-gradient(135deg, #1a0506 0%, #5c1a1b 100%)",
    },
    {
      id: "4",
      category: "party",
      title: "Party Headquarters General Meet",
      titleTamil: "கட்சித் தலைமை பொதுக்குழுக் கூட்டம்",
      date: "March 2026",
      bgGradient: "linear-gradient(135deg, #3d1112 0%, #5c1a1b 100%)",
    },
    {
      id: "5",
      category: "visits",
      title: "Ingur Canal Repair Review",
      titleTamil: "இங்கூர் கால்வாய் தூர்வாருதல் ஆய்வு",
      date: "March 2026",
      bgGradient: "linear-gradient(135deg, #2d0a0b 0%, #1a0506 100%)",
    },
    {
      id: "6",
      category: "events",
      title: "School Library Upgrade Inauguration",
      titleTamil: "அரசு பள்ளி நூலகத் திறப்பு விழா",
      date: "February 2026",
      bgGradient: "linear-gradient(135deg, #5c1a1b 0%, #3d1112 100%)",
    },
    {
      id: "7",
      category: "campaigns",
      title: "Surampatti Public Interaction",
      titleTamil: "சூரம்பட்டி பொதுக்கூட்ட பிரச்சாரம்",
      date: "February 2026",
      bgGradient: "linear-gradient(135deg, #1a0506 0%, #2d0a0b 100%)",
    },
    {
      id: "8",
      category: "party",
      title: "District Office Office Bearers Oath",
      titleTamil: "மாவட்ட கட்சி நிர்வாகிகள் பதவியேற்பு",
      date: "January 2026",
      bgGradient: "linear-gradient(135deg, #3d1112 0%, #1a0506 100%)",
    },
  ];

  const filtered =
    activeTab === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--white)" }}>
        {/* Page Hero */}
        <section
          className="relative overflow-hidden flex items-center justify-center text-center px-4"
          style={{
            height: "35vh",
            minHeight: 220,
            background: "linear-gradient(135deg, var(--marlot) 0%, var(--maroon) 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,202,0,0.06) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <span
              className="font-bold tracking-[0.25em] uppercase text-sm block mb-2"
              style={{ color: "var(--manjal)", fontFamily: "var(--font-teko)" }}
            >
              {t.gallery_page_subtitle}
            </span>
            <h1
              className="font-bold uppercase font-teko text-transparent"
              style={{
                fontSize: "clamp(3rem, 7vw, 5rem)",
                WebkitTextStroke: "1px var(--manjal)",
              }}
            >
              {t.gallery_page_title}
            </h1>
          </div>
        </section>

        {/* Filters and Masonry Grid */}
        <section className="section-container feeds-padding">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8" style={{ borderBottom: "2px solid rgba(0,0,0,0.05)", paddingBottom: 8 }}>
            {[
              { key: "ALL", label: t.gallery_tab_all },
              { key: "campaigns", label: t.gallery_tab_campaigns },
              { key: "visits", label: t.gallery_tab_visits },
              { key: "events", label: t.gallery_tab_events },
              { key: "party", label: t.gallery_tab_party },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
                style={{
                  fontFamily: "var(--font-teko)",
                  fontSize: "14px",
                  letterSpacing: "0.08em",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Masonry Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: smoothEase }}
                onClick={() => setLightboxIndex(index)}
                className="relative rounded-sm overflow-hidden cursor-pointer group"
                style={{
                  aspectRatio: "4/3",
                  background: item.bgGradient,
                  boxShadow: "var(--card-shadow)",
                  border: "1px solid rgba(255,202,0,0.1)",
                }}
              >
                {/* Monogram Watermark watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                  <span
                    className="font-bold font-teko"
                    style={{
                      fontSize: "6rem",
                      color: "rgba(255,202,0,0.08)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    VB
                  </span>
                </div>

                {/* Date Badge */}
                <div
                  className="absolute top-4 left-4 px-2 py-0.5 rounded-sm"
                  style={{ background: "var(--maroon)", border: "1px solid rgba(255,202,0,0.2)" }}
                >
                  <span
                    className="font-semibold text-[10px] tracking-wider uppercase font-teko"
                    style={{ color: "var(--manjal)" }}
                  >
                    {item.date}
                  </span>
                </div>

                {/* Details caption bottom overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 translate-y-2 group-hover:translate-y-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(26,5,6,0.95) 100%)",
                  }}
                >
                  <span
                    className="block font-semibold uppercase tracking-wider text-xs mb-1 font-teko"
                    style={{ color: "var(--manjal)" }}
                  >
                    {item.category}
                  </span>
                  <p
                    className="font-bold text-sm"
                    style={{ color: "#fff", fontFamily: "var(--font-ins-sans)" }}
                  >
                    {lang === "ta" ? item.titleTamil : item.title}
                  </p>
                  <p className="text-xs text-gray font-tamil mt-0.5">{item.titleTamil}</p>
                </div>

                {/* Hover overlay border */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    border: "2px solid var(--manjal)",
                    borderRadius: "2px",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4"
              style={{ background: "rgba(26,5,6,0.95)" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 border-none cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Box Content Card */}
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative rounded-sm overflow-hidden flex flex-col items-center justify-center p-8 text-center"
                style={{
                  width: "100%",
                  maxWidth: 600,
                  aspectRatio: "4/3",
                  background: filtered[lightboxIndex].bgGradient,
                  border: "2px solid var(--manjal)",
                }}
              >
                {/* VB */}
                <span
                  className="font-bold select-none cursor-default"
                  style={{
                    fontFamily: "var(--font-teko)",
                    fontSize: 120,
                    color: "rgba(255,202,0,0.12)",
                  }}
                >
                  VB
                </span>

                <div className="absolute bottom-8 left-8 right-8">
                  <span
                    className="inline-block px-3 py-1 rounded-sm mb-3 font-semibold tracking-wider font-teko text-[10px]"
                    style={{ background: "var(--maroon)", color: "var(--manjal)", border: "1px solid rgba(255,202,0,0.2)" }}
                  >
                    {filtered[lightboxIndex].category.toUpperCase()} — {filtered[lightboxIndex].date}
                  </span>
                  <h3
                    className="font-bold text-2xl uppercase font-teko text-white"
                    style={{ color: "#fff", letterSpacing: "0.05em" }}
                  >
                    {lang === "ta" ? filtered[lightboxIndex].titleTamil : filtered[lightboxIndex].title}
                  </h3>
                  <p className="font-semibold text-sm text-gray font-tamil mt-1">
                    {filtered[lightboxIndex].titleTamil}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filtered.length - 1));
                  }}
                  className="btn-primary"
                  style={{ padding: "6px 16px" }}
                >
                  PREV
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev! < filtered.length - 1 ? prev! + 1 : 0));
                  }}
                  className="btn-gold"
                  style={{ padding: "6px 16px" }}
                >
                  NEXT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
