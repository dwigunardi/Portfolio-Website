'use client';

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react"; // Sesuaikan dengan import Anda
import Image from "next/image";
import AnimatedContent from "../AnimatedContent";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ZoomOutSection() {
    // 1. Ref untuk mendeteksi kapan seksi ini masuk ke layar
    const containerRef = useRef<HTMLDivElement>(null);

    // 2. Pantau pergerakan scroll pada container ini
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Animasi dimulai saat ujung atas elemen menyentuh bawah layar ("start end")
        // Animasi selesai saat ujung bawah elemen menyentuh atas layar ("end start")
        offset: ["start end", "end start"],
    });

    // 3. RUMUS ZOOM OUT: Saat di-scroll, ubah skala gambar dari 1.3 (membesar) menjadi 1 (normal)
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

    // (Opsional) RUMUS PARALLAX: Agar gambar juga sedikit bergerak ke bawah saat di-scroll
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[90vh] min-h-[600px] overflow-hidden flex items-center justify-center mt-32"
        >
            {/* Latar Belakang Gambar yang akan di-Zoom Out */}
            <motion.div
                style={{ scale, y }}
                className="absolute inset-0 w-full h-full will-change-transform"
            >
                <Image
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                    alt="Background Workspace"
                    fill
                    className="object-cover opacity-50 dark:opacity-30"
                />
            </motion.div>

            {/* Gradient Overlay (Agar transisi dari hitamnya background sebelumnya nge-blend) */}
            <div className="absolute inset-0 dark:bg-gradient-to-t  dark:from-neutral-950 dark:via-neutral-950/40 dark:to-neutral-950" />
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center gap-8">
                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    duration={1}
                    ease="power3.out"
                    threshold={0.2}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold dark:text-white tracking-tight mb-4">
                        Ready to build <span className="text-blue-500">something amazing?</span>
                    </h2>
                    <p className="text-lg md:text-xl dark:text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Whether you need a modern web application, an internal dashboard, or a seamless user experience, let's collaborate and turn your vision into reality.
                    </p>
                    <Button className="px-8 py-6 dark:bg-white dark:text-black font-bold rounded-full dark:hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        <Link href='/contact'>
                            Let's Talk About Your Project
                        </Link>
                    </Button>
                </AnimatedContent>
            </div>
        </section>
    );
}