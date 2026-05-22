"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CardNav from "@/components/CardNav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { Icons } from "@/components/Icons";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

// Full-width Tamil Nadu SVG Map
function TNConstituencyMap() {
  return (
    <div
      className="w-full relative overflow-hidden flex items-center justify-center"
      style={{
        height: "45vh",
        minHeight: 300,
        background: "linear-gradient(135deg, var(--marlot) 0%, var(--maroon) 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,202,0,0.08) 0%, transparent 60%)",
        }}
      />
      <svg
        viewBox="0 0 800 400"
        className="w-full max-w-[800px] h-full opacity-80"
        style={{ filter: "drop-shadow(0 4px 20px rgba(92,26,27,0.3))" }}
      >
        {/* Outlined Tamil Nadu */}
        <path
          d="M150 50 L250 30 L380 50 L520 80 L620 120 L680 180 L730 250 L710 320 L620 370 L520 380 L410 370 L300 340 L210 280 L140 220 L110 150 L120 90 Z"
          fill="none"
          stroke="rgba(255, 202, 0, 0.2)"
          strokeWidth="2.5"
        />

        {/* Erode Highlight Point */}
        <g>
          <circle cx="360" cy="180" r="16" fill="var(--manjal)" opacity="0.3" className="pulse" />
          <circle cx="360" cy="180" r="8" fill="var(--manjal)" />
          <path
            d="M360 180 L360 220 L400 220"
            stroke="var(--manjal)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="400" y="205" width="140" height="30" rx="4" fill="var(--maroon)" stroke="var(--manjal)" strokeWidth="1" />
          <text
            x="470"
            y="224"
            textAnchor="middle"
            fill="var(--manjal)"
            fontSize="12"
            fontFamily="var(--font-teko)"
            fontWeight="bold"
          >
            ERODE EAST / ஈரோடு கிழக்கு
          </text>
        </g>
      </svg>
    </div>
  );
}

export default function ConstituencyPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeWorkTab, setActiveWorkTab] = useState<"ALL" | "IN PROGRESS" | "PLANNING" | "COMPLETED">("ALL");

  const fullWards = [
    {
      name: "Karungalpalayam",
      nameTamil: "கருங்கல்பாளையம்",
      type: "URBAN",
      desc: "Traditional business hub near Erode main market, prioritizing roads & sanitization.",
      descTamil: "பாரம்பரிய வர்த்தக மையம், சாலை மற்றும் சுகாதார மேம்பாட்டிற்கு முன்னுரிமை.",
    },
    {
      name: "Surampatti",
      nameTamil: "சூரம்பட்டி",
      type: "SEMI-URBAN",
      desc: "Residential zone requiring safe drinking water distribution and modern parks.",
      descTamil: "குடியிருப்பு மண்டலம், குடிநீர் விநியோகம் மற்றும் பூங்கா மேம்பாட்டு பணிகள்.",
    },
    {
      name: "Veerappanchatram",
      nameTamil: "வீரப்பன்சத்திரம்",
      type: "URBAN",
      desc: "Densely populated ward with major textile industries, focusing on labor welfare.",
      descTamil: "நெரிசலான மக்கள் பகுதி, நெசவு தொழிலாளர்கள் நலன் சார்ந்த உள்கட்டமைப்பு.",
    },
    {
      name: "Perundurai Road",
      nameTamil: "பெருந்துறை சாலை",
      type: "URBAN",
      desc: "Modern corridor connecting institutes and hospitals, focusing on solar lights.",
      descTamil: "கல்வி & மருத்துவ சாலை மண்டலம், சோலார் தெருவிளக்கு வசதிகள்.",
    },
    {
      name: "Moolapalayam",
      nameTamil: "மூலப்பாளையம்",
      type: "URBAN",
      desc: "Active suburb connecting housing units, focusing on government school upgrades.",
      descTamil: "குடியிருப்பு புறநகர் பகுதி, அரசு பள்ளி வகுப்பறைகள் நவீனமயமாக்கல்.",
    },
    {
      name: "Ingur",
      nameTamil: "இங்கூர்",
      type: "RURAL",
      desc: "Agricultural outskirts prioritizing drinking water pipeline & road paving.",
      descTamil: "விவசாயப் புறநகர் பகுதி, குடிநீர் இணைப்புகள் & தார்ச்சாலை அமைத்தல்.",
    },
  ];

  const fullWorksList = [
    {
      title: "Road Infrastructure Upgrade",
      titleTamil: "சாலை உள்கட்டமைப்பு மேம்பாடு",
      status: "IN PROGRESS",
      icon: "road" as const,
    },
    {
      title: "Public Health Centre Modernization",
      titleTamil: "பொது சுகாதார மைய நவீனமயமாக்கல்",
      status: "IN PROGRESS",
      icon: "hospital" as const,
    },
    {
      title: "Drinking Water Supply Enhancement",
      titleTamil: "குடிநீர் வழங்கல் மேம்பாடு",
      status: "PLANNING",
      icon: "water" as const,
    },
    {
      title: "Smart Classroom Initiative",
      titleTamil: "ஸ்மார்ட் வகுப்புத் திட்டம்",
      status: "IN PROGRESS",
      icon: "school" as const,
    },
    {
      title: "Street Light Electrification",
      titleTamil: "தெரு விளக்கு மின்மயமாக்கல்",
      status: "COMPLETED",
      icon: "lightbulb" as const,
    },
    {
      title: "Park Development",
      titleTamil: "பூங்கா மேம்பாடு",
      status: "COMPLETED",
      icon: "tree" as const,
    },
  ];

  const filteredWorks =
    activeWorkTab === "ALL"
      ? fullWorksList
      : fullWorksList.filter((w) => w.status === activeWorkTab);

  const stats = [
    { label: t.constituency_stats_pop, val: "2,45,000+", icon: "people" as const },
    { label: t.constituency_stats_wards, val: "6 Major Wards", icon: "building" as const },
    { label: t.constituency_stats_projects, val: "24 Active", icon: "construction" as const },
    { label: t.constituency_stats_welfare, val: "48,500+", icon: "heart" as const },
  ];

  return (
    <>
      <div className="grain-overlay" />
      <div className="vignette-overlay" />
      <CardNav />
      <main style={{ background: "var(--white)" }}>
        {/* Parallax SVG Map Hero */}
        <TNConstituencyMap />
        <div className="cinematic-divider" />

        {/* Section 1: Overview & Wards Grid */}
        <section className="section-container feeds-padding">
          <div className="text-center mb-12">
            <span
              className="font-semibold tracking-[0.25em] uppercase text-sm block mb-2"
              style={{ color: "var(--gray)", fontFamily: "var(--font-teko)" }}
            >
              {t.constituency_title}
            </span>
            <h2
              className="font-bold uppercase font-teko"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--maroon)",
              }}
            >
              {t.constituency_overview}
            </h2>
            <div className="w-16 h-[3px] mx-auto mt-3" style={{ background: "var(--manjal)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullWards.map((ward, i) => {
              const isUrban = ward.type === "URBAN";
              const isSemi = ward.type === "SEMI-URBAN";
              const typeColor = isUrban ? "var(--maroon)" : isSemi ? "#996600" : "#2d6a2d";

              return (
                <motion.div
                  key={ward.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: smoothEase }}
                  className="p-6 rounded-sm bg-white"
                  style={{
                    border: "1px solid rgba(92,26,27,0.08)",
                    boxShadow: "var(--card-shadow)",
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3
                        className="font-bold text-xl uppercase font-teko"
                        style={{ color: "var(--maroon)", lineHeight: "none" }}
                      >
                        {ward.name}
                      </h3>
                      <h4 className="font-semibold text-xs text-gray font-tamil mt-0.5">
                        {ward.nameTamil}
                      </h4>
                    </div>
                    <span
                      className="px-2.5 py-0.5 rounded-sm font-semibold tracking-wider font-teko text-[10px]"
                      style={{
                        background: isUrban ? "rgba(92,26,27,0.08)" : isSemi ? "rgba(153,102,0,0.08)" : "rgba(45,106,45,0.08)",
                        color: typeColor,
                      }}
                    >
                      {ward.type}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: "#666",
                      fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                    }}
                  >
                    {lang === "ta" ? ward.descTamil : ward.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
        <div className="cinematic-divider" />

        {/* Section 2: Development Work with Filter Tabs */}
        <section className="relative" style={{ background: "#f8f9fa" }}>
          <div className="section-container feeds-padding">
            <div className="text-center mb-12">
              <span
                className="font-semibold tracking-[0.25em] uppercase text-sm block mb-2"
                style={{ color: "var(--gray)", fontFamily: "var(--font-teko)" }}
              >
                {lang === "ta" ? t.constituency_works_label : "WORKS"}
              </span>
              <h2
                className="font-bold uppercase font-teko"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "var(--maroon)",
                }}
              >
                {lang === "ta" ? t.constituency_dev_title : "DEVELOPMENT PROJECTS"}
              </h2>
              <div className="w-16 h-[3px] mx-auto mt-3" style={{ background: "var(--manjal)" }} />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {(["ALL", "IN PROGRESS", "PLANNING", "COMPLETED"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveWorkTab(tab)}
                  className={`tab-button ${activeWorkTab === tab ? "active" : ""}`}
                  style={{
                    fontFamily: "var(--font-teko)",
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    padding: "8px 16px",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Works List */}
            <div className="max-w-4xl mx-auto flex flex-col gap-4">
              {filteredWorks.map((work, i) => {
                const isInProgress = work.status === "IN PROGRESS";
                const isPlanning = work.status === "PLANNING";

                const badgeBg = isInProgress
                  ? "var(--maroon)"
                  : isPlanning
                  ? "var(--manjal)"
                  : "#2e7d32";

                const badgeText = isInProgress
                  ? "#fff"
                  : isPlanning
                  ? "var(--black)"
                  : "#fff";

                return (
                  <motion.div
                    key={work.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: smoothEase }}
                    className="flex items-center justify-between p-4 bg-white rounded-sm"
                    style={{
                      boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                      border: "1px solid rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Left Icon */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#f0f1f5", color: "var(--maroon)" }}
                    >
                      {Icons[work.icon]({ width: 20, height: 20 })}
                    </div>

                    {/* Center details */}
                    <div className="flex-1 px-4 min-w-0">
                      <p
                        className="font-semibold"
                        style={{
                          fontSize: "15px",
                          color: "var(--black)",
                          fontFamily: "var(--font-ins-sans)",
                        }}
                      >
                        {lang === "ta" ? work.titleTamil : work.title}
                      </p>
                      <p className="text-xs text-gray font-tamil mt-0.5">
                        {work.titleTamil}
                      </p>
                    </div>

                    {/* Right Status Badge */}
                    <span
                      className="px-3 py-1 rounded-sm font-bold tracking-wider font-teko text-xs"
                      style={{
                        background: badgeBg,
                        color: badgeText,
                      }}
                    >
                      {work.status}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="cinematic-divider" />

        {/* Section 3: Key Statistics Grid */}
        <section className="section-container feeds-padding">
          <div className="text-center mb-12">
            <span
              className="font-semibold tracking-[0.25em] uppercase text-sm block mb-2"
              style={{ color: "var(--gray)", fontFamily: "var(--font-teko)" }}
            >
              {lang === "ta" ? t.constituency_metrics_label : "METRICS"}
            </span>
            <h2
              className="font-bold uppercase font-teko"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--maroon)",
              }}
            >
              {t.constituency_stats_title}
            </h2>
            <div className="w-16 h-[3px] mx-auto mt-3" style={{ background: "var(--manjal)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: smoothEase }}
                className="p-6 rounded-sm text-center"
                style={{
                  background: "#fff",
                  borderTop: "3px solid var(--manjal)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <div className="flex items-center justify-center mb-2" style={{ color: "var(--maroon)" }}>
                  {Icons[stat.icon]({ width: 32, height: 32 })}
                </div>
                <p
                  className="font-bold text-3xl font-teko mb-1"
                  style={{ color: "var(--maroon)" }}
                >
                  {stat.val}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--gray)",
                    fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <div className="cinematic-divider" />
      <Footer />
    </>
  );
}
