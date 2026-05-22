"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardNav from "@/components/CardNav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

interface UpdateItem {
  id: string;
  date: string;
  type: "announcement" | "event";
  title: string;
  titleTamil: string;
  desc: string;
  descTamil: string;
}

export default function UpdatesPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<"ALL" | "announcement" | "event">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [shareText, setShareText] = useState<{ [id: string]: boolean }>({});
  const [visibleCount, setVisibleCount] = useState(6);

  const updatesData: UpdateItem[] = [
    {
      id: "1",
      date: "2026-05-20",
      type: "announcement",
      title: "MLA Constituency Office Hours Announced",
      titleTamil: "சட்டமன்ற உறுப்பினர் தொகுதி அலுவலக நேரம் அறிவிப்பு",
      desc: "Starting this week, our office will be open from 10:00 AM to 5:00 PM, Monday through Saturday. All residents are welcome to meet the MLA to submit petitions and discuss local challenges.",
      descTamil: "இந்த வாரம் முதல், திங்கள் முதல் சனிக்கிழமை வரை காலை 10:00 மணி முதல் மாலை 5:00 மணி வரை எமது அலுவலகம் திறந்திருக்கும். பொதுமக்கள் தங்களின் மனுக்களை சமர்ப்பிக்கலாம்.",
    },
    {
      id: "2",
      date: "2026-05-18",
      type: "event",
      title: "Grievance Redressal Camp — Karungalpalayam",
      titleTamil: "குறைதீர்ப்பு முகாம் — கருங்கல்பாளையம்",
      desc: "Special grievance redressal camp organized at Karungalpalayam Community Hall. Submit your petitions regarding electricity, road conditions, sewage and drinking water supply.",
      descTamil: "கருங்கல்பாளையம் மண்டபத்தில் சிறப்பு குறைதீர்ப்பு முகாம். மின்சாரம், சாலை, குடிநீர் கோரிக்கைகள் குறித்து மனுக்களை அளிக்கலாம்.",
    },
    {
      id: "3",
      date: "2026-05-15",
      type: "event",
      title: "Free Medical Camp — Surampatti",
      titleTamil: "இலவச மருத்துவ முகாம் — சூரம்பட்டி",
      desc: "In association with leading city hospitals, we are hosting a comprehensive free medical screening camp in Surampatti. Free consultation, general checkup and medicines will be distributed.",
      descTamil: "முன்னணி மருத்துவமனைகளுடன் இணைந்து சூரம்பட்டியில் இலவச மருத்துவ முகாம். பரிசோதனைகள், ஆலோசனைகள் மற்றும் மருந்துகள் வழங்கப்படும்.",
    },
    {
      id: "4",
      date: "2026-05-12",
      type: "announcement",
      title: "District Development Review Meeting",
      titleTamil: "மாவட்ட வளர்ச்சி ஆய்வுக் கூட்டம்",
      desc: "Attended Erode City Municipal Corporation review session along with planning officials to fast track underway road construction schemes and evaluate street lighting upgrades.",
      descTamil: "ஈரோடு மாநகராட்சி அதிகாரிகளுடன் ஆய்வுக் கூட்டம். சாலைப்பணிகள் மற்றும் தெருவிளக்கு உள்கட்டமைப்பு பணிகளை விரைவுபடுத்த உத்தரவு.",
    },
    {
      id: "5",
      date: "2026-05-09",
      type: "event",
      title: "Tree Plantation Drive — Erode East",
      titleTamil: "மரக்கன்று நடும் விழா — ஈரோடு கிழக்கு",
      desc: "Under the theme of Green Erode, our youth volunteers initiated a tree plantation drive planting over 500 saplings near national highway borders.",
      descTamil: "பசுமை ஈரோடு திட்டத்தின் கீழ் தேசிய நெடுஞ்சாலை ஓரங்களில் 500க்கும் மேற்பட்ட மரக்கன்றுகள் நடும் விழா.",
    },
    {
      id: "6",
      date: "2026-05-05",
      type: "event",
      title: "School Supply Distribution — Ingur",
      titleTamil: "பள்ளி உபகரணங்கள் விநியோகம் — இங்கூர்",
      desc: "Distributed educational kits containing bags, notebooks and geometry tools to more than 200 primary and high school students at Ingur Government School.",
      descTamil: "இங்கூர் அரசுப் பள்ளி மாணவர்கள் 200 பேருக்கு விலையில்லா கல்வி உபகரணங்கள் மற்றும் புத்தகப் பைகள் விநியோகம்.",
    },
    {
      id: "7",
      date: "2026-05-01",
      type: "announcement",
      title: "Road Repair Work Completion — Moolapalayam",
      titleTamil: "சாலை செப்பனிடும் பணி நிறைவு — மூலப்பாளையம்",
      desc: "The arterial linkage road in Moolapalayam suburban sector has been completely paved and fully restored ahead of the scheduled completion date.",
      descTamil: "மூலப்பாளையம் பகுதியில் பழுதடைந்த முக்கிய இணைப்பு தார்ச்சாலை அமைக்கும் பணிகள் வெற்றிகரமாக நிறைவு பெற்றன.",
    },
    {
      id: "8",
      date: "2026-04-27",
      type: "event",
      title: "Public Meeting — Veerappanchatram",
      titleTamil: "பொதுமக்கள் சந்திப்பு கூட்டம் — வீரப்பன்சத்திரம்",
      desc: "Direct interactive public session organized at Veerappanchatram to understand and resolve clean water distribution timings and sewer outlet blockage reports.",
      descTamil: "வீரப்பன்சத்திரத்தில் நேரடி மக்கள் சந்திப்பு கூட்டம். தூய குடிநீர் விநியோகம் மற்றும் வடிகால் அடைப்புகளை சீரமைக்க நடவடிக்கை.",
    },
    {
      id: "9",
      date: "2026-04-22",
      type: "announcement",
      title: "Welfare Scheme Registration Drive",
      titleTamil: "அரசு நலத்திட்டங்கள் பதிவு முகாம்",
      desc: "Assisting eligible citizens in enrolling for various central and state social security, maternity and pension welfare programs at our Erode office.",
      descTamil: "தகுதியுள்ள பயனாளிகள் தங்களின் ஓய்வூதியம், மகப்பேறு உதவித்தொகை உள்ளிட்ட நலத்திட்டங்களுக்குப் பதிவு செய்யும் முகாம்.",
    },
    {
      id: "10",
      date: "2026-04-18",
      type: "event",
      title: "Youth Sports Meet — Erode East",
      titleTamil: "இளைஞர் விளையாட்டுப் போட்டிகள் — ஈரோடு கிழக்கு",
      desc: "Organized a district-level volleyball and kabaddi tournament to foster sports development among the constituency's youth. Trophies distributed by the MLA.",
      descTamil: "ஈரோடு கிழக்கு தொகுதி இளைஞர்களுக்கான மாவட்ட அளவிலான கபடி மற்றும் கைப்பந்து போட்டிகள். வெற்றிபெற்றோருக்கு பரிசுகள் வழங்கப்பட்டன.",
    },
  ];

  const filtered = updatesData
    .filter((item) => {
      if (activeTab === "ALL") return true;
      return item.type === activeTab;
    })
    .filter((item) => {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.titleTamil.includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.descTamil.includes(q)
      );
    });

  const displayedItems = filtered.slice(0, visibleCount);

  const handleShare = (id: string) => {
    const shareUrl = `${window.location.origin}/updates?id=${id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setShareText((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setShareText((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    });
  };

  return (
    <>
      <div className="grain-overlay" />
      <div className="vignette-overlay" />
      <CardNav />
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
              {t.updates_page_subtitle}
            </span>
            <h1
              className="font-bold uppercase font-teko text-transparent"
              style={{
                fontSize: "clamp(3rem, 7vw, 5rem)",
                WebkitTextStroke: "1px var(--manjal)",
              }}
            >
              {t.updates_page_title}
            </h1>
          </div>
        </section>

        {/* Filters, Search and List */}
        <section className="section-container feeds-padding px-4 md:px-6 xl:px-8">
          {/* Top Control Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Filter Tabs */}
            <div className="flex gap-0" style={{ borderBottom: "2px solid rgba(0,0,0,0.05)" }}>
              {[
                { key: "ALL", label: t.announcements_tab_all },
                { key: "announcement", label: t.announcements_tab_announcements },
                { key: "event", label: t.announcements_tab_events },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
                  style={{
                    fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-teko)",
                    fontSize: "14px",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <input
                type="text"
                placeholder={t.updates_search_placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-sm border border-solid font-ins-sans text-sm focus:outline-none transition-all duration-300"
                style={{
                  background: "#fff",
                  borderColor: "rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </div>

          {/* Results count */}
          <p style={{ fontSize: 13, color: "var(--gray)", marginBottom: 16, fontFamily: "var(--font-ins-sans)" }}>
            {filtered.length} {filtered.length === 1 ? "result" : "results"} found
          </p>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item, i) => {
                const isExpanded = expandedId === item.id;
                const dateObj = new Date(item.date);
                const formattedDate = dateObj.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                    className="rounded-sm bg-white overflow-hidden"
                    style={{
                      border: "1px solid rgba(92,26,27,0.08)",
                      boxShadow: isExpanded ? "var(--card-shadow-hover)" : "var(--card-shadow)",
                    }}
                  >
                    {/* Item Header */}
                    <div
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="flex justify-between items-center p-5 cursor-pointer select-none group"
                      style={{ background: isExpanded ? "rgba(92,26,27,0.02)" : "#fff" }}
                    >
                      <div className="flex-1 min-w-0 pr-4">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span
                            className="font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm font-teko text-[10px]"
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
                          <span
                            className="text-xs"
                            style={{ color: "var(--gray)", fontFamily: "var(--font-ins-sans)" }}
                          >
                            {formattedDate}
                          </span>
                        </div>
                        <h3
                          className="font-semibold text-base transition-colors duration-300 group-hover:text-[var(--maroon)] truncate"
                          style={{
                            color: "var(--black)",
                            fontFamily: "var(--font-ins-sans)",
                          }}
                        >
                          {lang === "ta" ? item.titleTamil : item.title}
                        </h3>
                        <h4 className="font-semibold text-xs text-gray font-tamil mt-1 truncate">
                          {item.titleTamil}
                        </h4>
                      </div>

                      <div style={{ color: "var(--maroon)" }} className="flex-shrink-0 ml-4">
                        <motion.svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </motion.svg>
                      </div>
                    </div>

                    {/* Expanded Body */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: smoothEase }}
                          style={{ overflow: "hidden" }}
                        >
                          <div
                            className="p-5 border-t border-solid"
                            style={{
                              borderColor: "rgba(0,0,0,0.06)",
                              background: "rgba(0,0,0,0.01)",
                            }}
                          >
                            <p
                              className="mb-4"
                              style={{
                                fontSize: "15px",
                                lineHeight: "1.7",
                                color: "#444",
                                fontFamily: "var(--font-ins-sans)",
                              }}
                            >
                              {item.desc}
                            </p>
                            <p
                              className="mb-6"
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.9",
                                color: "#666",
                                fontFamily: "var(--font-tamil)",
                              }}
                            >
                              {item.descTamil}
                            </p>

                            {/* Share Row */}
                            <div className="flex justify-end">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleShare(item.id);
                                }}
                                className="btn-gold"
                                style={{
                                  fontSize: "11px",
                                  padding: "4px 12px",
                                  fontFamily: "var(--font-teko)",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                {shareText[item.id] ? t.updates_share_copied : t.updates_share}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {visibleCount < filtered.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="btn-gold mx-auto"
                style={{ fontFamily: "var(--font-teko)" }}
              >
                {t.updates_load_more}
              </button>
            </div>
          )}

          {/* No results */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p style={{ fontSize: 18, color: "var(--gray)", fontFamily: "var(--font-ins-sans)" }}>
                {lang === "ta" ? "முடிவுகள் இல்லை" : "No results found"}
              </p>
            </div>
          )}
        </section>
      </main>
      <div className="cinematic-divider" />
      <Footer />
    </>
  );
}
