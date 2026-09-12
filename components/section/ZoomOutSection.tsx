'use client';

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import AnimatedContent from "@/components/AnimatedContent";
import CircuitBeams from "@/components/ui/CircuitBeams";

export default function ZoomOutSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

    // Parallax effect for the background image
    const parallaxEffect = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section
            ref={containerRef}
            className="relative w-full overflow-hidden bg-white dark:bg-neutral-950 transition-colors min-h-[75vh] pt-24 sm:pt-32 md:pt-36 pb-10 md:pb-12 flex flex-col items-center justify-center"
        >
            <motion.div
                style={{ scale, y: parallaxEffect }}
                className="hidden dark:block absolute inset-0 w-full h-full will-change-transform"
            >
                <Image
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                    alt="Background Workspace"
                    fill
                    className="object-cover opacity-30"
                />
            </motion.div>

            {/* 1. Base Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-white dark:from-neutral-950 dark:via-neutral-950/40 dark:to-neutral-950" />

            {/* 2. Grid Blueprint Halus (Hanya di Light Mode agar estetik dan tidak kosong) */}
            <div className="dark:hidden absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size[48px_48px] mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none" />

            {/* 3. Central Content: Compact & beautifully proportioned across mobile, tablet, and desktop */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                <AnimatedContent
                    distance={80}
                    direction="vertical"
                    duration={0.9}
                    ease="power3.out"
                    threshold={0.15}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3 sm:mb-4 leading-tight">
                        Ready to build <span className="text-blue-600 dark:text-blue-400">something amazing?</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-4 sm:mb-2 leading-relaxed font-normal px-2 sm:px-0">
                        Whether you need a modern web application, an internal dashboard, or a seamless user experience, let's collaborate and turn your vision into reality.
                    </p>

                    {/* Self-Contained Microchip CTA (Traces, Pins & Button in one responsive canvas) */}
                    <div className="w-full max-w-xl sm:max-w-2xl mx-auto flex justify-center">
                        <CircuitBeams className="w-full" />
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}