import ScrollVelocity from "@/components/ScrollVelocity";
import type { Metadata } from "next";
import HeroBanner from "./section/heroBanner";
import Squares from "@/components/Squares";
import { NavigationBar } from "@/components/common/NavigationBar";

export const metadata: Metadata = {
  title: "Home - Dwi Gunardi M Portfolio",
  description: "Welcome to my portfolio website! I'm Dwi Gunardi M, a passionate frontend developer specializing in crafting engaging and user-friendly web experiences. Explore my projects, skills, and contact information to see how I can bring your ideas to life with clean code and innovative design.",
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#0a2230'
          hoverFillColor='#38b6ff'
        />
      </div>
      <HeroBanner />
      <ScrollVelocity
        texts={['See More About Me', 'Scroll Down']}
        velocity={100}
        className="font-bold text-center text-white text-5xl"
      />
      <div className="w-full h-full relative z-10">
        <NavigationBar />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
