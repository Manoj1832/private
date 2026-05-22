import CardNav from "@/components/CardNav";
import IntroLoader from "@/components/IntroLoader";
import HeroSection from "@/components/HeroSection";
import VictoryCard from "@/components/VictoryCard";
import AboutSection from "@/components/AboutSection";
import ScrollStorytelling from "@/components/ScrollStorytelling";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const DistrictMap = dynamic(() => import("@/components/DistrictMap"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});
const AnnouncementsList = dynamic(() => import("@/components/AnnouncementsList"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});
const SocialFeed = dynamic(() => import("@/components/SocialFeed"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});
const JoinSection = dynamic(() => import("@/components/JoinSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

export default function Home() {
  return (
    <>
      <IntroLoader />
      {/* Global grain overlay */}
      <div className="grain-overlay" />
      {/* Global vignette */}
      <div className="vignette-overlay" />

      <main>
        <CardNav />
        <HeroSection />
        <VictoryCard />
        <div className="cinematic-divider" />
        <AboutSection />
        <div className="cinematic-divider" />
        <ScrollStorytelling />
        <div className="cinematic-divider" />
        <DistrictMap />
        <div className="cinematic-divider" />
        <AnnouncementsList />
        <div className="cinematic-divider" />
        <SocialFeed />
        <div className="cinematic-divider" />
        <JoinSection />
        <Footer />
      </main>
    </>
  );
}
