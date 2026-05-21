"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/data";
import { Icons } from "@/components/Icons";
import Image from "next/image";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--white)" }}>
        {/* Page Hero */}
        <section
          className="relative overflow-hidden flex items-center justify-center text-center px-4"
          style={{
            height: "40vh",
            minHeight: 250,
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
              {t.about_page_subtitle}
            </span>
            <h1
              className="font-bold uppercase font-teko text-transparent"
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                WebkitTextStroke: "1px var(--manjal)",
              }}
            >
              {t.about_page_title}
            </h1>
          </div>
        </section>

        {/* Section 1: Full Biography & Pull Quote */}
        <section className="section-container feeds-padding">
          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p
              className="font-bold italic leading-snug"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "var(--maroon)",
                fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-teko)",
              }}
            >
              {t.about_pull_quote}
            </p>
            <div
              className="w-16 h-[2px] mx-auto mt-6"
              style={{ background: "var(--manjal)" }}
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left — Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: smoothEase }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <div
                className="relative w-full rounded-sm overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  maxWidth: 380,
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <Image
                  src="/balaji-and-vijay-bokeh.jpeg"
                  alt="M. Vijay Balaji"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(40,10,12,0.95) 100%)",
                  }}
                >
                  <p className="font-bold uppercase tracking-wider text-2xl font-teko" style={{ color: "#fff" }}>
                    {lang === "ta" ? siteConfig.nameTamil : siteConfig.name}
                  </p>
                  <p className="font-medium tracking-wider uppercase text-base font-teko" style={{ color: "var(--manjal)" }}>
                    {t.hero_role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — Long Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: smoothEase }}
              className="flex-1 w-full"
            >
              <h3
                className="font-bold uppercase text-2xl mb-4 font-teko"
                style={{ color: "var(--maroon)", borderBottom: "2px solid rgba(0,0,0,0.05)", paddingBottom: 8 }}
              >
                {lang === "ta" ? "வாழ்க்கைப் பின்னணி" : "LIFE JOURNEY"}
              </h3>
              <p
                style={{
                  fontSize: lang === "ta" ? "15px" : "16px",
                  lineHeight: lang === "ta" ? "1.9" : "1.85",
                  color: "#444",
                  fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                  whiteSpace: "pre-line",
                }}
              >
                {t.about_bio_full}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Political Philosophy */}
        <section className="relative" style={{ background: "#f8f9fa" }}>
          <div className="section-container feeds-padding">
            <div className="text-center mb-12">
              <span
                className="font-semibold tracking-[0.25em] uppercase text-sm block mb-2"
                style={{ color: "var(--gray)", fontFamily: "var(--font-teko)" }}
              >
                {t.about_phil_subtitle}
              </span>
              <h2
                className="font-bold uppercase font-teko"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "var(--maroon)",
                }}
              >
                {t.about_phil_title}
              </h2>
              <div className="w-16 h-[3px] mx-auto mt-3" style={{ background: "var(--manjal)" }} />
            </div>

            {/* Principle Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "scale" as const,
                  title: t.about_val1_title,
                  sub: t.about_val1_sub,
                  desc: t.about_val1_desc,
                },
                {
                  icon: "people" as const,
                  title: t.about_val2_title,
                  sub: t.about_val2_sub,
                  desc: t.about_val2_desc,
                },
                {
                  icon: "chart" as const,
                  title: t.about_val3_title,
                  sub: t.about_val3_sub,
                  desc: t.about_val3_desc,
                },
              ].map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: smoothEase }}
                  style={{
                    background: "#fff",
                    borderLeft: "4px solid var(--maroon)",
                    padding: "24px",
                    borderRadius: "0 8px 8px 0",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  }}
                >
                  <div className="mb-4" style={{ color: "var(--maroon)" }}>
                    {Icons[val.icon]({ width: 40, height: 40 })}
                  </div>
                  <h3
                    className="font-bold uppercase tracking-wider text-xl font-teko"
                    style={{ color: "var(--maroon)" }}
                  >
                    {val.title}
                  </h3>
                  <h4
                    className="font-semibold text-xs tracking-wider uppercase mb-3 font-tamil"
                    style={{ color: "var(--manjal)" }}
                  >
                    {val.sub}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#666",
                      fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                    }}
                  >
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Education & Background */}
        <section className="section-container feeds-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: smoothEase }}
            >
              <h2
                className="font-bold uppercase font-teko mb-4"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "var(--maroon)",
                }}
              >
                {t.about_edu_title}
              </h2>
              <div className="w-16 h-[3px] mb-6" style={{ background: "var(--manjal)" }} />
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#555",
                  fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                }}
              >
                {t.about_edu_desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: smoothEase }}
              className="flex justify-center"
            >
              <div
                className="p-8 rounded-sm text-center"
                style={{
                  background: "rgba(92,26,27,0.03)",
                  border: "1px dashed rgba(92,26,27,0.15)",
                  maxWidth: 400,
                  width: "100%",
                }}
              >
                <div className="mb-4" style={{ color: "var(--maroon)" }}>
                  {Icons.graduation({ width: 48, height: 48 })}
                </div>
                <h4 className="font-bold uppercase tracking-wider text-lg font-teko" style={{ color: "var(--maroon)" }}>
                  {t.about_edu_college}
                </h4>
                <p className="font-semibold text-sm mt-1" style={{ color: "var(--manjal)", fontFamily: "var(--font-teko)" }}>
                  {t.about_edu_degree}
                </p>
                <p className="text-xs text-gray mt-2" style={{ fontFamily: "var(--font-ins-sans)" }}>
                  {t.about_edu_college}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Party Role */}
        <section className="relative overflow-hidden" style={{ background: "var(--marlot)" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,202,0,0.04) 0%, transparent 60%)",
            }}
          />
          <div className="section-container feeds-padding relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            {/* TVK Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: smoothEase }}
              className="w-[120px] h-[120px] rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "var(--maroon)",
                border: "3px solid var(--manjal)",
                boxShadow: "0 0 30px rgba(255,202,0,0.2)",
              }}
            >
              <span className="font-bold font-teko text-5xl" style={{ color: "var(--manjal)" }}>
                {t.nav_party}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
              className="flex-1 w-full"
            >
              <h2
                className="font-bold uppercase font-teko mb-2"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "#fff",
                }}
              >
                {t.about_party_role_title}
              </h2>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-6 font-teko" style={{ color: "var(--manjal)" }}>
                {t.hero_badge}
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)",
                }}
              >
                {t.about_party_role_desc}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
