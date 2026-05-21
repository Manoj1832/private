"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { Icons } from "@/components/Icons";
import Image from "next/image";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function JoinSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    ward: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", ward: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden py-16 md:py-24 px-4 md:px-6 xl:px-8"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/background-get-in-touch.jpeg"
          alt=""
          fill
          className="object-cover"
          style={{ filter: "brightness(0.15) saturate(0.8)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,5,6,0.9) 0%, rgba(92,26,27,0.85) 50%, rgba(26,5,6,0.9) 100%)" }} />
      </div>

      {/* Decorative top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{
          background: "linear-gradient(90deg, transparent 10%, var(--manjal) 50%, transparent 90%)",
        }}
      />

      <div className="section-container feeds-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="font-semibold tracking-[0.25em] uppercase text-sm"
            style={{ color: "var(--manjal)", fontFamily: "var(--font-teko)" }}
          >
            {t.join_subtitle}
          </span>
          <h2
            className="font-bold uppercase mt-2 font-teko"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#fff",
            }}
          >
            {t.join_title}
          </h2>
          <div
            className="w-16 h-[3px] mx-auto mt-3"
            style={{ background: "var(--manjal)" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left — CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
            className="flex-1 min-w-0"
          >
            <p
              className="font-tamil text-lg mb-4"
              style={{ color: "var(--manjal)" }}
            >
              இயக்கத்தில் இணையுங்கள்
            </p>
            <p
              className="font-ins-sans text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {t.join_desc}
            </p>

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="mailto:mla.vijaybalaji@gmail.com"
                className="flex items-center gap-4 p-4 rounded-sm no-underline transition-all duration-300 group"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,202,0,0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,202,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <div style={{ color: "var(--manjal)" }}>
                  {Icons.document({ width: 24, height: 24 })}
                </div>
                <div>
                  <p className="font-teko font-bold uppercase tracking-wider text-lg" style={{ color: "#fff" }}>
                    Email
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    mla.vijaybalaji@gmail.com
                  </p>
                </div>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--manjal)" }}>
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            id="grievance-form"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: smoothEase }}
            className="flex-1 min-w-0 w-full max-w-md"
          >
            <div
              className="rounded-sm p-6 md:p-8"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3
                className="font-teko text-2xl font-bold uppercase tracking-wider mb-1"
                style={{ color: "#fff" }}
              >
                {t.join_form_title}
              </h3>
              <p
                className="font-tamil text-sm mb-6"
                style={{ color: "var(--pale-manjal)" }}
              >
                தொடர்பு கொள்ளுங்கள்
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="join-name"
                    className="font-teko text-xs font-semibold tracking-wider uppercase block mb-2"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {t.join_form_name}
                  </label>
                  <input
                    id="join-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-sm font-ins-sans text-sm outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#fff",
                    }}
                    placeholder="Your name"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--manjal)";
                      e.currentTarget.style.background = "rgba(255,202,0,0.06)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="join-phone"
                      className="font-teko text-xs font-semibold tracking-wider uppercase block mb-2"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {t.join_form_phone}
                    </label>
                    <input
                      id="join-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-sm font-ins-sans text-sm outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#fff",
                      }}
                      placeholder="+91 XXXXX"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--manjal)";
                        e.currentTarget.style.background = "rgba(255,202,0,0.06)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="join-ward"
                      className="font-teko text-xs font-semibold tracking-wider uppercase block mb-2"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {t.join_form_ward}
                    </label>
                    <input
                      id="join-ward"
                      type="text"
                      value={formData.ward}
                      onChange={(e) =>
                        setFormData({ ...formData, ward: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-sm font-ins-sans text-sm outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#fff",
                      }}
                      placeholder="Your area"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--manjal)";
                        e.currentTarget.style.background = "rgba(255,202,0,0.06)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="join-message"
                    className="font-teko text-xs font-semibold tracking-wider uppercase block mb-2"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {t.join_form_msg}
                  </label>
                  <textarea
                    id="join-message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-sm font-ins-sans text-sm outline-none transition-all duration-300 resize-none"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#fff",
                    }}
                    placeholder="Your message or grievance"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--manjal)";
                      e.currentTarget.style.background = "rgba(255,202,0,0.06)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full justify-center mt-2 text-base"
                  style={{ padding: "0.85rem 1.5rem", letterSpacing: "0.08em" }}
                >
                  {submitted ? t.join_form_submitted : t.join_form_submit}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
