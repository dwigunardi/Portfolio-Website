import ScrollVelocity from "@/components/ScrollVelocity";
import type { Metadata } from "next";
import HeroBanner from "../components/section/heroBanner";
import Squares from "@/components/Squares";
import { NavigationBar } from "@/components/common/NavigationBar";
import FloatingLines from "@/components/FloatingLines";
import { WorkTimeLine } from "@/components/section/WorkTimeLine";
import AboutMe from "@/components/section/AboutMe";
import Expertise from "@/components/section/Expertise";

export const metadata: Metadata = {
  title: "Home - Dwi Gunardi M Portfolio",
  description: "Welcome to my portfolio website! I'm Dwi Gunardi M, a passionate frontend developer specializing in crafting engaging and user-friendly web experiences. Explore my projects, skills, and contact information to see how I can bring your ideas to life with clean code and innovative design.",
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950" id="home">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
      <HeroBanner />
      <ScrollVelocity
        texts={['See More About Me', 'Scroll Down']}
        velocity={100}
        className="font-bold text-center text-white text-5xl"
      />
      {/* <div className="w-full h-full relative z-10">
      </div> */}
      <div className="container mx-auto relative z-10">
        <NavigationBar />
        <div className="flex flex-col items-center justify-center gap-20 mt-32">
          <AboutMe />
          <WorkTimeLine />
          <Expertise />
        </div>
      </div>
    </div>
  );
}
