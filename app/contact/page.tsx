"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardNav from "@/components/CardNav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { socialLinks } from "@/lib/data";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    ward: "Karungalpalayam",
    category: "Road",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Log grievance to localStorage as requested
    const savedLogs = JSON.parse(localStorage.getItem("vijaybalaji_grievances") || "[]");
    savedLogs.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("vijaybalaji_grievances", JSON.stringify(savedLogs));

    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setFormData({
      name: "",
      phone: "",
      ward: "Karungalpalayam",
      category: "Road",
      message: "",
    });
  };

  const wardsList = [
    "Karungalpalayam",
    "Surampatti",
    "Veerappanchatram",
    "Perundurai Road",
    "Moolapalayam",
    "Ingur",
  ];

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
              {t.contact_page_subtitle}
            </span>
            <h1
              className="font-bold uppercase font-teko text-transparent"
              style={{
                fontSize: "clamp(3rem, 7vw, 5rem)",
                WebkitTextStroke: "1px var(--manjal)",
              }}
            >
              {t.contact_page_title}
            </h1>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="section-container feeds-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="flex flex-col h-full justify-between"
            >
              <div
                className="p-8 rounded-sm h-full"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(92,26,27,0.08)",
                  boxShadow: "var(--card-shadow)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "24px",
                }}
              >
                <div>
                  <h2
                    className="font-bold uppercase font-teko text-3xl mb-6"
                    style={{ color: "var(--maroon)" }}
                  >
                    {t.contact_info_title}
                  </h2>

                  {/* Address */}
                  <div className="mb-6">
                    <h4
                      className="font-bold text-xs uppercase tracking-wider text-gray font-teko mb-1"
                      style={{ color: "var(--gray)" }}
                    >
                      {t.contact_address_label}
                    </h4>
                    <p
                      className="font-semibold text-sm whitespace-pre-line leading-relaxed"
                      style={{ color: "var(--black)", fontFamily: "var(--font-ins-sans)" }}
                    >
                      {lang === "ta" ? t.contact_address : t.contact_address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <h4
                      className="font-bold text-xs uppercase tracking-wider text-gray font-teko mb-1"
                      style={{ color: "var(--gray)" }}
                    >
                      {t.contact_phone_label}
                    </h4>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--black)", fontFamily: "var(--font-ins-sans)" }}
                    >
                      +91 424 222 0000
                    </p>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <h4
                      className="font-bold text-xs uppercase tracking-wider text-gray font-teko mb-1"
                      style={{ color: "var(--gray)" }}
                    >
                      {t.contact_email_label}
                    </h4>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--black)", fontFamily: "var(--font-ins-sans)" }}
                    >
                      office@vijaybalajimla.com
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                    <h4
                      className="font-bold text-xs uppercase tracking-wider text-gray font-teko mb-1"
                      style={{ color: "var(--gray)" }}
                    >
                      {t.contact_hours_label}
                    </h4>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--black)", fontFamily: lang === "ta" ? "var(--font-tamil)" : "var(--font-ins-sans)" }}
                    >
                      {lang === "ta" ? t.contact_hours_ta : t.contact_hours}
                    </p>
                  </div>
                </div>

                {/* Direct Action button */}
                <div className="flex flex-col gap-4 mt-auto">
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold justify-center no-underline text-center"
                    style={{ padding: "10px" }}
                  >
                    {lang === "ta" ? "இன்ஸ்டாகிராமில் பின்தொடரவும்" : "FOLLOW ON INSTAGRAM"}
                  </a>

                  {/* Styled Map Placeholder */}
                  <div
                    className="rounded-sm flex flex-col items-center justify-center relative overflow-hidden"
                    style={{
                      height: 140,
                      background: "linear-gradient(135deg, var(--marlot) 0%, var(--maroon) 100%)",
                      border: "1px solid rgba(255,202,0,0.15)",
                    }}
                  >
                    <span
                      className="font-bold font-teko text-5xl"
                      style={{ color: "rgba(255,202,0,0.06)", letterSpacing: "0.1em" }}
                    >
                      MAP
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <span
                        className="font-bold uppercase font-teko text-lg tracking-wider"
                        style={{ color: "var(--manjal)" }}
                      >
                        {t.contact_map_label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
              className="flex flex-col h-full"
            >
              <div
                className="p-8 rounded-sm h-full"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(92,26,27,0.08)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <h2
                  className="font-bold uppercase font-teko text-3xl mb-6"
                  style={{ color: "var(--maroon)" }}
                >
                  {t.join_form_title}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="font-bold text-xs uppercase tracking-wider text-gray font-teko block mb-1.5"
                      style={{ color: "var(--gray)" }}
                    >
                      {t.join_form_name}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm font-ins-sans text-sm outline-none transition-all duration-300"
                      style={{
                        background: "#fdfdfd",
                        border: "1px solid rgba(0,0,0,0.12)",
                        color: "var(--black)",
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="font-bold text-xs uppercase tracking-wider text-gray font-teko block mb-1.5"
                      style={{ color: "var(--gray)" }}
                    >
                      {t.join_form_phone}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm font-ins-sans text-sm outline-none transition-all duration-300"
                      style={{
                        background: "#fdfdfd",
                        border: "1px solid rgba(0,0,0,0.12)",
                        color: "var(--black)",
                      }}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {/* Ward Dropdown */}
                  <div>
                    <label
                      htmlFor="contact-ward"
                      className="font-bold text-xs uppercase tracking-wider text-gray font-teko block mb-1.5"
                      style={{ color: "var(--gray)" }}
                    >
                      {t.join_form_ward}
                    </label>
                    <select
                      id="contact-ward"
                      value={formData.ward}
                      onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm font-ins-sans text-sm outline-none transition-all duration-300"
                      style={{
                        background: "#fdfdfd",
                        border: "1px solid rgba(0,0,0,0.12)",
                        color: "var(--black)",
                      }}
                    >
                      {wardsList.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Category Dropdown */}
                  <div>
                    <label
                      htmlFor="contact-category"
                      className="font-bold text-xs uppercase tracking-wider text-gray font-teko block mb-1.5"
                      style={{ color: "var(--gray)" }}
                    >
                      {t.contact_form_category}
                    </label>
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm font-ins-sans text-sm outline-none transition-all duration-300"
                      style={{
                        background: "#fdfdfd",
                        border: "1px solid rgba(0,0,0,0.12)",
                        color: "var(--black)",
                      }}
                    >
                      <option value="Road">{t.contact_cat_road}</option>
                      <option value="Water">{t.contact_cat_water}</option>
                      <option value="Health">{t.contact_cat_health}</option>
                      <option value="Education">{t.contact_cat_edu}</option>
                      <option value="Welfare">{t.contact_cat_welfare}</option>
                      <option value="Other">{t.contact_cat_other}</option>
                    </select>
                  </div>

                  {/* Message (Limit 200 chars) */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="font-bold text-xs uppercase tracking-wider text-gray font-teko block mb-1.5"
                      style={{ color: "var(--gray)" }}
                    >
                      {t.join_form_msg}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      maxLength={200}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm font-ins-sans text-sm outline-none transition-all duration-300 resize-none"
                      style={{
                        background: "#fdfdfd",
                        border: "1px solid rgba(0,0,0,0.12)",
                        color: "var(--black)",
                      }}
                      placeholder="Grievance text (maximum 200 characters)"
                    />
                    <span className="text-[10px] text-gray mt-1 block text-right font-ins-sans">
                      {formData.message.length}/200
                    </span>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn-gold justify-center w-full mt-2"
                    style={{ padding: "12px", background: "var(--maroon)", color: "#fff" }}
                    aria-live="polite"
                  >
                    {t.contact_submit_btn}
                  </button>
                </form>

                {/* Success State */}
                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-6 p-4 rounded-sm text-center"
                      style={{
                        background: "rgba(76, 175, 80, 0.1)",
                        border: "1px solid rgba(76, 175, 80, 0.2)",
                      }}
                    >
                      <span className="text-2xl block mb-1">✓</span>
                      <h4 className="font-bold font-teko text-lg" style={{ color: "#2e7d32" }}>
                        {t.contact_success_title}
                      </h4>
                      <p className="text-xs font-tamil mt-1" style={{ color: "#2e7d32" }}>
                        {t.contact_success_desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <div className="cinematic-divider" />
      <Footer />
    </>
  );
}
