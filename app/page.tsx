import type { Metadata } from "next";
import { WorkTimeLine } from "@/components/section/WorkTimeLine";
import AboutMe from "@/components/section/AboutMe";
import Expertise from "@/components/section/Expertise";
import NewHeroSection from "@/components/section/NewHeroSection";
import NavigationBarTop from "@/components/common/NavigationBarTop";
import MarqueeSection from "@/components/section/MarqueeSection";
import ZoomOutSection from "@/components/section/ZoomOutSection";
import CatchPharaseSetion from "@/components/section/CatchphraseScrollSequence";
import Footer from "@/components/common/FooterSection";

export const metadata: Metadata = {
  title: "Home - Dwi Gunardi M Portfolio",
  description: "Welcome to my portfolio website! I'm Dwi Gunardi M...",
  keywords: ["Dwi Gunardi M", "Frontend Developer", "Next.js", "React", "IBM Indonesia"],
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Dwi Gunardi Meinaki",
      "alternateName": "Dwi",
      "jobTitle": "Frontend Web Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "PT. IBM Indonesia"
      },
      "url": "https://dwigunardimeinaki.vercel.app",
      "sameAs": [
        "https://www.linkedin.com/in/dwi-gunardi/",
        "https://github.com/dwigunardi"
      ]
    }
  };

  return (
    <div className="" id="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationBarTop />

      {/* NEW HERO SECTION */}
      <NewHeroSection />

      {/* PEMBATAS MARQUEE */}
      <MarqueeSection />

      {/* KONTEN BAWAH */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-20 mt-32 px-4 md:px-0">
          <AboutMe />
          <WorkTimeLine />
          <Expertise />
        </div>
      </div>
       <CatchPharaseSetion />
      <ZoomOutSection />
      <Footer />
    </div>
  );
}