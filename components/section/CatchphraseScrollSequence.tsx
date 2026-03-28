'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // Pastikan import framer-motion
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query"; 
import { BREAKPOINTS } from "@/const/breakpoints"; 
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Sesuaikan path Shadcn Anda

const highlightCards = [
    { title: "Development", desc: "React, Next.js, Vue", gif: "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" },
    { title: "API Integration", desc: "REST, GraphQL", gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cDd5M2F4Yzk3azlhbm11MmkwZGNiNXVrZnNsZ2draGt6eTByZzJkaCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/gXr3j6YAClXFfZABn5/giphy.gif" },
    { title: "Version Control", desc: "Git, GitHub Actions", gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bGJicDEzcml4bzZkZTh2MXhrM3F2ZGloczY1ZmJjejdoNDAweWhvNSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/PI3QGKFN6XZUCMMqJm/giphy.gif" },
    { title: "CI/CD", desc: "Docker, Deployment", gif: "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif" },
];

export default function CatchphraseScrollSequence() {
    const isDesktop = useMediaQuery(BREAKPOINTS.md);

    return (
        <div className="w-full bg-neutral-950" id="catchphrase-section">
            {isDesktop ? <CatchphraseDesktop /> : <CatchphraseMobile />}
        </div>
    );
}

// ============================================================================
// 1. VERSI DESKTOP (Cinematic Blur & Grid Bawah)
// ============================================================================
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
                <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950 pointer-events-none" />

                <motion.div style={{ opacity: textOpacity, y: textY, scale: textScale, filter: textBlur }} className="absolute z-10 flex flex-col items-center text-center px-4 md:px-0 w-full">
                    <div className="mb-6 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md text-sm font-medium text-blue-400 tracking-wide uppercase">
                        Bridging Ideas to Reality
                    </div>
                    <h1 className="text-6xl md:text-[7rem] font-black leading-[1.1] tracking-tighter mix-blend-plus-lighter mb-6 drop-shadow-[0_0_30px_rgba(56,182,255,0.2)]">
                        <span className="text-white">CRAFTING</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">DIGITAL MAGIC</span>
                    </h1>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                        I specialize in developing scalable solutions, seamlessly integrating APIs, and deploying high-performance applications.
                    </p>
                </motion.div>

                <motion.div style={{ opacity: cardsOpacity, y: cardsY, scale: cardsScale }} className="absolute z-20 w-full max-w-5xl mx-auto px-6 grid grid-cols-2 gap-8 pointer-events-none">
                    {highlightCards.map((card, idx) => (
                        <Card key={idx} className={`relative overflow-hidden bg-neutral-900/80 border-neutral-800 shadow-2xl h-80 flex flex-col justify-end pointer-events-none p-0 ${idx % 2 === 0 ? "md:-translate-y-8" : "md:translate-y-8"}`}>
                            <Image src={card.gif} alt={card.title} fill className="object-cover opacity-30 mix-blend-screen" unoptimized />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-transparent" />
                            <CardHeader className="relative z-10 pb-6 pt-0">
                                <CardTitle className="text-3xl font-bold text-white tracking-wide">{card.title}</CardTitle>
                                <CardDescription className="text-base text-neutral-400 font-medium mt-1">{card.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ============================================================================
// 2. VERSI MOBILE (Horizontal Scroll seperti Timeline)
// ============================================================================
function CatchphraseMobile() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // RUMUS DINAMIS HORIZONTAL SCROLL
    const totalScreens = highlightCards.length + 1; // 1 Layar Teks + 4 Layar Kartu = 5
    const endX = `-${(totalScreens - 1) * 100}vw`; // Bergeser sampai -400vw
    const x = useTransform(scrollYProgress, [0, 1], ["0vw", endX]);

    return (
        <div ref={containerRef} style={{ height: `${totalScreens * 100}vh` }} className="relative w-full">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-neutral-950">
                
                {/* Background Ambience (Statis) */}
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950 pointer-events-none" />

                <motion.div style={{ x }} className="flex will-change-transform h-full items-center">
                    
                    {/* LAYAR 1: CATCHPHRASE */}
                    <div className="w-screen h-screen shrink-0 flex flex-col justify-center items-center px-6 relative z-10">
                        <div className="mb-4 px-4 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md text-xs font-medium text-blue-400 tracking-wide uppercase">
                            Bridging Ideas to Reality
                        </div>
                        <h1 className="text-5xl font-black leading-[1.1] text-center tracking-tighter mix-blend-plus-lighter mb-4 drop-shadow-[0_0_20px_rgba(56,182,255,0.2)]">
                            <span className="text-white">CRAFTING</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">DIGITAL MAGIC</span>
                        </h1>
                        <p className="text-neutral-400 text-sm text-center max-w-sm font-medium leading-relaxed">
                            I specialize in architecting scalable solutions, seamlessly integrating APIs, and deploying high-performance applications.
                        </p>
                        
                        {/* Indikator Geser */}
                        <div className="mt-12 flex flex-col items-center gap-2 text-blue-500 text-sm font-medium animate-pulse">
                            <span>Scroll to Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                    </div>

                    {/* LAYAR 2-5: KARTU SHADCN (Masing-masing 1 layar penuh) */}
                    {highlightCards.map((card, idx) => (
                        <div key={idx} className="w-screen h-screen shrink-0 flex flex-col justify-center items-center px-6 relative z-10">
                            
                            {/* Kartu Shadcn dioptimalkan untuk Mobile */}
                            <Card className="w-full max-w-sm relative overflow-hidden bg-neutral-900/80 border-neutral-800 shadow-2xl h-[60vh] flex flex-col justify-end pointer-events-none p-0">
                                <Image 
                                    src={card.gif} 
                                    alt={card.title}
                                    fill
                                    className="object-cover opacity-30 mix-blend-screen"
                                    unoptimized 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-transparent" />
                                
                                <CardHeader className="relative z-10 pb-6 pt-0">
                                    <div className="w-10 h-10 mb-4 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                                        <span className="text-blue-400 text-lg font-bold">{idx + 1}</span>
                                    </div>
                                    <CardTitle className="text-3xl font-bold text-white tracking-wide">
                                        {card.title}
                                    </CardTitle>
                                    <CardDescription className="text-base text-neutral-400 font-medium mt-2">
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