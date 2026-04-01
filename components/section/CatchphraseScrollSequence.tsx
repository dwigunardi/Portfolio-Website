'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query"; 
import { BREAKPOINTS } from "@/const/breakpoints"; 
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HIGHLIGHT_CARDS } from "@/const/tech-stack";
import { ArrowRightCircle } from "lucide-react";

export default function CatchphraseScrollSequence() {
    const isDesktop = useMediaQuery(BREAKPOINTS.md);

    return (
        <div className="w-full bg-white dark:bg-neutral-950 transition-colors duration-300" id="catchphrase-section">
            {isDesktop ? <CatchphraseDesktop /> : <CatchphraseMobile />}
        </div>
    );
}

function CatchphraseDesktop() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.25, 0.35], ["0%", "0%", "-30%"]);
    const textScale = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 1.15]);
    const textBlur = useTransform(scrollYProgress, [0.25, 0.35], ["blur(0px)", "blur(12px)"]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 1, 0]);
    const cardsOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
    const cardsY = useTransform(scrollYProgress, [0.35, 0.5], ["15vh", "0vh"]);
    const cardsScale = useTransform(scrollYProgress, [0.35, 0.5], [0.9, 1]);

    return (
        <section ref={containerRef} className="relative w-full h-[250vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
                {/* Radial background mengikuti tema */}
                <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50 dark:from-blue-900/20 via-white dark:via-neutral-950 to-white dark:to-neutral-950 pointer-events-none transition-colors duration-300" />
                
                <motion.div style={{ opacity: textOpacity, y: textY, scale: textScale, filter: textBlur }} className="absolute z-10 flex flex-col items-center text-center px-4 md:px-0 w-full">
                    <div className="mb-6 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-md text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase transition-colors">
                        Bridging Ideas to Reality
                    </div>
                    <h1 className="text-6xl md:text-[7rem] font-black leading-[1.1] tracking-tighter mb-6 drop-shadow-[0_0_30px_rgba(56,182,255,0.2)]">
                        <span className="text-neutral-900 dark:text-white transition-colors">CRAFTING</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500">DIGITAL MAGIC</span>
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed transition-colors">
                        I specialize in developing scalable solutions, seamlessly integrating APIs, and deploying high-performance applications.
                    </p>
                </motion.div>
                <motion.div style={{ opacity: cardsOpacity, y: cardsY, scale: cardsScale }} className="absolute z-20 w-full max-w-5xl mx-auto px-6 grid grid-cols-2 gap-8 pointer-events-none">
                    {HIGHLIGHT_CARDS.map((card, idx) => (
                        <Card key={idx} className={`relative overflow-hidden bg-white/80 dark:bg-neutral-900/80 border-neutral-200 dark:border-neutral-800 shadow-2xl h-80 flex flex-col justify-end pointer-events-none p-0 transition-colors ${idx % 2 === 0 ? "md:-translate-y-8" : "md:translate-y-8"}`}>
                            <Image src={card.gif} alt={card.title} fill className="object-cover opacity-90 dark:opacity-30 dark:mix-blend-screen transition-opacity" unoptimized />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-[#0a0a0a] dark:via-black/60 to-transparent" />
                            
                            <CardHeader className="relative z-10 pb-6 pt-0">
                                <CardTitle className="text-3xl font-bold text-neutral-900 dark:text-white tracking-wide transition-colors">{card.title}</CardTitle>
                                <CardDescription className="text-base text-neutral-600 dark:text-neutral-400 font-medium mt-1 transition-colors">{card.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function CatchphraseMobile() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const totalScreens = HIGHLIGHT_CARDS.length + 1; 
    const endX = `-${(totalScreens - 1) * 100}vw`; 
    const x = useTransform(scrollYProgress, [0, 1], ["0vw", endX]);

    return (
        <div ref={containerRef} style={{ height: `${totalScreens * 100}vh` }} className="relative w-full">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-white dark:bg-neutral-950 transition-colors duration-300">
                {/* Background Ambience */}
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50 dark:from-blue-900/20 via-white dark:via-neutral-950 to-white dark:to-neutral-950 pointer-events-none transition-colors duration-300" />

                <motion.div style={{ x }} className="flex will-change-transform h-full items-center">
                    <div className="w-screen h-screen shrink-0 flex flex-col justify-center items-center px-6 relative z-10">
                        <div className="mb-4 px-4 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-md text-xs font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase transition-colors">
                            Bridging Ideas to Reality
                        </div>
                        <h1 className="text-5xl font-black leading-[1.1] text-center tracking-tighter mb-4 drop-shadow-[0_0_20px_rgba(56,182,255,0.2)]">
                            <span className="text-neutral-900 dark:text-white transition-colors">CRAFTING</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500">DIGITAL MAGIC</span>
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm text-center max-w-sm font-medium leading-relaxed transition-colors">
                            I specialize in architecting scalable solutions, seamlessly integrating APIs, and deploying high-performance applications.
                        </p>
                        <div className="mt-12 flex flex-col items-center gap-2 text-blue-600 dark:text-blue-500 text-sm font-medium animate-pulse transition-colors">
                            <span>Scroll to Explore</span>
                            <ArrowRightCircle size={26} className="animate-pulse" />
                        </div>
                    </div>

                    {HIGHLIGHT_CARDS.map((card, idx) => (
                        <div key={idx} className="w-screen h-screen shrink-0 flex flex-col justify-center items-center px-6 relative z-10">
                            <Card className="w-full max-w-sm relative overflow-hidden bg-white/80 dark:bg-neutral-900/80 border-neutral-200 dark:border-neutral-800 shadow-2xl h-[60vh] flex flex-col justify-end pointer-events-none p-0 transition-colors">
                                <Image 
                                    src={card.gif} 
                                    alt={card.title}
                                    fill
                                    className="object-cover opacity-90 dark:opacity-30 dark:mix-blend-screen transition-opacity"
                                    unoptimized 
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-white via-white/15 dark:from-[#0a0a0a] dark:via-black/60 to-transparent transition-colors" />
                                <CardHeader className="relative z-10 pb-6 pt-0">
                                    <div className="w-10 h-10 mb-4 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/50 flex items-center justify-center transition-colors">
                                        <span className="text-blue-600 dark:text-blue-400 text-lg font-bold transition-colors">{idx + 1}</span>
                                    </div>
                                    <CardTitle className="text-3xl font-bold text-neutral-900 dark:text-white tracking-wide transition-colors">
                                        {card.title}
                                    </CardTitle>
                                    <CardDescription className="text-base text-neutral-600 dark:text-neutral-400 font-medium mt-2 transition-colors">
                                        {card.desc}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    ))}

                </motion.div>
            </div>
        </div>
    );
}