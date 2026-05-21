"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import Stepper, { Step } from "@/components/Stepper";

export default function Timeline() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [currentStep, setCurrentStep] = useState(1);

  const timelineMilestones = [
    {
      year: 1986,
      title: "Born in Karungalpalayam",
      titleTamil: "கருங்கல்பாளையத்தில் பிறப்பு",
      description: t.timeline_1986_desc,
    },
    {
      year: 2006,
      title: "Commerce Graduate",
      titleTamil: "வணிகப் பட்டதாரி",
      description: t.timeline_2006_desc,
    },
    {
      year: 2020,
      title: "Joined the Movement",
      titleTamil: "இயக்கத்தில் இணைந்தார்",
      description: t.timeline_2020_desc,
    },
    {
      year: 2024,
      title: "District Secretary",
      titleTamil: "மாவட்ட செயலாளர்",
      description: t.timeline_2024_desc,
    },
    {
      year: 2026,
      title: "Elected MLA — Erode East",
      titleTamil: "சட்டமன்ற உறுப்பினர் — ஈரோடு கிழக்கு",
      description: t.timeline_2026_desc,
    },
  ];

  const autoAdvance = useCallback(() => {
    setCurrentStep((prev) => {
      if (prev >= timelineMilestones.length) return 1;
      return prev + 1;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(autoAdvance, 3500);
    return () => clearInterval(interval);
  }, [autoAdvance]);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative w-full py-16 md:py-24 px-4 md:px-6 xl:px-8"
      style={{ background: "var(--white)" }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.02 }}
      >
        <span
          className="font-bold font-teko"
          style={{ fontSize: "clamp(10rem, 30vw, 25rem)", color: "var(--maroon)" }}
        >
          {lang === "ta" ? "தவிக" : "TVK"}
        </span>
      </div>

      <div className="section-container mx-auto relative z-10">
        <div className="text-center mb-10">
          <span
            className="font-semibold tracking-[0.25em] uppercase text-sm"
            style={{ color: "var(--gray)", fontFamily: "var(--font-teko)" }}
          >
            {t.timeline_title}
          </span>
          <h2
            className="font-bold uppercase mt-2 font-teko"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--maroon)",
            }}
          >
            {lang === "ta" ? "பயணம்" : "JOURNEY"}
          </h2>
          <div
            className="w-16 h-[3px] mx-auto mt-3"
            style={{ background: "var(--manjal)" }}
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <Stepper
            initialStep={currentStep}
            onStepChange={handleStepChange}
            backButtonText={lang === "ta" ? "முந்தையது" : "Previous"}
            nextButtonText={lang === "ta" ? "அடுத்து" : "Next"}
            contentClassName="timeline-content"
            disableStepIndicators={false}
          >
            {timelineMilestones.map((item) => (
              <Step key={item.year}>
                <div className="timeline-step-content">
                  <div
                    className="inline-block px-3 py-1 rounded-sm mb-4"
                    style={{ background: "var(--maroon)" }}
                  >
                    <span
                      className="font-bold text-xl tracking-wider font-teko"
                      style={{ color: "var(--manjal)" }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <h3
                    className="font-bold uppercase tracking-wider font-teko"
                    style={{ fontSize: "24px", color: "var(--maroon)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="block font-medium"
                    style={{
                      fontSize: "16px",
                      color: "var(--manjal)",
                      margin: "4px 0 12px",
                      fontFamily: "var(--font-tamil)",
                    }}
                  >
                    {item.titleTamil}
                  </p>

                  <p
                    className="mb-3"
                    style={{
                      fontSize: "15px",
                      color: "#444",
                      lineHeight: "1.7",
                      fontFamily: "var(--font-ins-sans)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>

      <style jsx>{`
        .timeline-content {
          padding: 0;
        }
        .timeline-step-content {
          padding: 1.5rem;
        }
      `}</style>
    </section>
  );
}
