import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VictoryCard from "@/components/VictoryCard";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("@/components/Timeline"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});
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

function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "1px" }}>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(92,26,27,0.12) 20%, var(--manjal) 50%, rgba(92,26,27,0.12) 80%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <VictoryCard />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <DistrictMap />
      <SectionDivider />
      <AnnouncementsList />
      <SectionDivider />
      <SocialFeed />
      <SectionDivider />
      <JoinSection />
      <Footer />
    </main>
  );
}
