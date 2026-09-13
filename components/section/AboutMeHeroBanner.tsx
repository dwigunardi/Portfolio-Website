'use client';

import AnimatedContent from "@/components/AnimatedContent";
import BlurText from "@/components/BlurText";
import CircularText from "@/components/CircularText";
import { motion } from "motion/react";
import Lanyard from "@/components/lanyard";
import RotatingText from "@/components/RotatingText";
import SplitText from "@/components/SplitText";
import { SlideInButton } from "@/components/common/SlideInButton";
import { ArrowUpRight } from "lucide-react";
import InfiniteCard from "@/components/infiniteCard";
import { techStacks } from "@/components/section/Expertise";

export default function HeroBanner() {

    const handleDownloadResume = () => {
        if (typeof document !== "undefined") {
            const link = document.createElement('a');
            link.href = '/assets/CV/CV-Dwi-Gunardi-Meinaki.pdf';
            link.download = 'Dwi_Gunardi_M_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return (
        <section className="w-full min-h-screen" id="hero-section">
            <div className="container mx-auto h-full relative">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 flex justify-center relative">
                        <div className="absolute top-40 left-1/2 translate-x-14 xl:translate-x-16 z-10 pointer-events-none hidden lg:block">
                            <AnimatedContent
                                distance={100}
                                direction="vertical"
                                reverse={false}
                                duration={0.8}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <CircularText
                                    text="FRONT*END*DEVELOPER*"
                                    onHover="speedUp"
                                    spinDuration={20}
                                    className="custom-class cursor-default!"
                                />
                            </AnimatedContent>
                        </div>
                        <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
                    </div>
                    <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 pt-28 md:pt-32 lg:pt-0 px-4 sm:px-6 lg:px-0">
                        <div className="flex flex-col gap-4 items-start justify-center h-full w-full">
                            <AnimatedContent
                                distance={100}
                                direction="horizontal"
                                reverse={false}
                                duration={0.8}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
                                    <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white transition-colors">I`m Ready to Code</h2>
                                    <RotatingText
                                        texts={['Web Development', 'Web Design', 'Web Developer', 'Vibe Coder!']}
                                        mainClassName="px-2 sm:px-2 md:px-3 bg-blue-600 dark:bg-blue-primary text-white dark:text-black overflow-hidden py-1 justify-center rounded-lg text-xl md:text-2xl font-bold inline-flex transition-all"
                                        staggerFrom={"last"}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={2000}
                                    />
                                </div>
                            </AnimatedContent>
                            <div className="flex flex-col items-start gap-2 mt-4 w-full">
                                <SplitText
                                    text="Hi, I'm Dwi Gunardi M"
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-left text-neutral-900 dark:text-white transition-colors"
                                    delay={50}
                                    duration={1.25}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="left"
                                    tag="h1"
                                />
                                <SplitText
                                    text="Frontend Developer"
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-left text-blue-600 dark:text-blue-400 transition-colors"
                                    delay={50}
                                    duration={1.25}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="left"
                                    tag="h2"
                                />
                                <BlurText
                                    text="I'm a passionate frontend developer specializing in crafting engaging and user-friendly web experiences, with 4 years of experience in the field. Explore my projects, skills, and contact information to see how I can bring your ideas to life with clean code and innovative design."
                                    delay={50}
                                    animateBy="words"
                                    direction="top"
                                    className="text-base sm:text-lg md:text-xl mb-6 text-neutral-600 dark:text-neutral-300 max-w-2xl text-left transition-colors leading-relaxed"
                                />
                                <div className="w-full flex justify-center lg:justify-start items-center mt-2">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="mt-2 flex flex-col justify-between gap-6 lg:gap-8 lg:flex-row lg:items-center"
                                    >

                                        <SlideInButton
                                            initialText="My Resume"
                                            hoverText="Download!"
                                            icon={<ArrowUpRight size={18} />}
                                            onClick={() => handleDownloadResume()}
                                            initialFill="bg-neutral-900 dark:bg-neutral-800"
                                            hoverFill="bg-gradient-to-r from-blue-600 to-indigo-600"
                                            initialTextColor="text-white"
                                            hoverTextColor="text-white"
                                            hasBorder={true}
                                            className="flex items-center gap-2 cursor-pointer transition-all duration-300 py-7 lg:py-5 px-10 lg:px-8"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InfiniteCard items={techStacks} direction="left" speed={0.1} />
        </section>
    )
}