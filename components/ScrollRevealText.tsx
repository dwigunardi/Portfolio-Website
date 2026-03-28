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
        // "start 80%" = Animasi mulai saat ujung atas elemen menyentuh 80% layar dari atas
        // "end 50%" = Animasi selesai saat ujung bawah elemen berada di tengah layar
        offset: ["start 80%", "end 50%"],
    });

    // Pecah teks menjadi kata-kata agar word-wrap (turun baris) tetap rapi
    const words = text.split(" ");

    // Hitung total huruf (tanpa spasi) untuk membagi porsi animasi secara adil
    const totalLetters = text.replace(/\s/g, "").length;

    // Variabel untuk melacak urutan huruf ke-berapa yang sedang dirender
    let currentLetterIndex = 0;

    return (
        <div
            ref={containerRef}
            className={cn("flex flex-wrap gap-x-2 gap-y-1", className)}
        >
            {words.map((word, wordIndex) => {
                const letters = word.split("");

                return (
                    // flex digunakan di sini agar huruf dalam 1 kata tidak terpisah ke baris bawah
                    <span key={wordIndex} className="flex">
                        {letters.map((letter, letterIdx) => {
                            // Menghitung kapan huruf ini mulai dan selesai menyala
                            const start = currentLetterIndex / totalLetters;
                            const end = start + 1 / totalLetters;
                            currentLetterIndex++;

                            return (
                                <Letter
                                    key={letterIdx}
                                    progress={scrollYProgress}
                                    range={[start, end]}
                                >
                                    {letter}
                                </Letter>
                            );
                        })}
                    </span>
                );
            })}
        </div>
    );
}

// Sub-komponen untuk merender masing-masing huruf
const Letter = ({
    children,
    progress,
    range,
}: {
    children: string;
    progress: MotionValue<number>;
    range: [number, number];
}) => {
    // opacity akan bergerak dari 0 ke 1 berdasarkan range scroll masing-masing huruf
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="relative inline-block">
            {/* 1. Lapisan Dasar (Warna "Hitam" / Gelap) */}
            <span className="absolute text-neutral-100 dark:text-neutral-800">
                {children}
            </span>

            {/* 2. Lapisan Sorotan (Warna Putih yang perlahan muncul) */}
            <motion.span
                style={{ opacity }}
                className="relative z-10 text-neutral-900 dark:text-white"
            >
                {children}
            </motion.span>
        </span>
    );
};