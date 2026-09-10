"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

interface ScrollRevealTextProps {
    text: string;
    className?: string;
}

export default function ScrollRevealText({ text, className }: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Memantau posisi scroll pada wadah teks ini
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // "start 85%" = Animasi mulai saat ujung atas elemen menyentuh 85% layar dari atas
        // "end 45%" = Animasi selesai saat ujung bawah elemen berada di tengah layar
        offset: ["start 85%", "end 45%"],
    });

    // Pecah teks menjadi kata-kata (mengurangi dari ~412 node huruf menjadi ~50 node kata)
    const words = text.split(" ");
    const totalWords = words.length;

    return (
        <div
            ref={containerRef}
            className={cn("flex flex-wrap gap-x-2 gap-y-1.5", className)}
        >
            {words.map((word, wordIndex) => {
                const start = wordIndex / totalWords;
                const end = Math.min(start + 1.5 / totalWords, 1);

                return (
                    <Word
                        key={wordIndex}
                        progress={scrollYProgress}
                        range={[start, end]}
                    >
                        {word}
                    </Word>
                );
            })}
        </div>
    );
}

// Sub-komponen untuk merender masing-masing kata dengan GPU compositor layer
const Word = ({
    children,
    progress,
    range,
}: {
    children: string;
    progress: MotionValue<number>;
    range: [number, number];
}) => {
    // opacity akan bergerak dari 0 ke 1 berdasarkan range scroll masing-masing kata
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="relative inline-block">
            {/* 1. Lapisan Dasar (Warna Redup / Latar Belakang) */}
            <span className="text-neutral-300 dark:text-neutral-800 select-none">
                {children}
            </span>

            {/* 2. Lapisan Sorotan (Warna Terang yang perlahan menyala) */}
            <motion.span
                style={{ opacity }}
                className="absolute inset-0 z-10 text-neutral-900 dark:text-white will-change-[opacity]"
            >
                {children}
            </motion.span>
        </span>
    );
};