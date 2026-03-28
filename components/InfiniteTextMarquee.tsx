"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
    words: string[];
    speed?: number; // Durasi putaran (semakin besar semakin lambat)
    className?: string;
}

export default function InfiniteMarquee({
    words,
    speed = 20,
    className,
}: InfiniteMarqueeProps) {
    return (
        // Overflow-hidden wajib agar teks yang keluar layar tidak membuat horizontal scroll
        <div className={cn("relative flex w-full overflow-hidden bg-neutral-950 py-4", className)}>
            <motion.div
                className="flex whitespace-nowrap"
                // Bergerak dari 0 hingga -50% (karena kita menduplikasi kontennya 2 kali)
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {/* Render konten 2 kali agar saat yang pertama habis, yang kedua menyambung tanpa patah */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex flex-nowrap items-center px-4">
                        {words.map((word, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-8 px-4"
                            >
                                {/* Styling teks besar, tebal, dan agak transparan menyesuaikan tema gelap */}
                                <span className="text-5xl md:text-7xl font-black uppercase tracking-wider text-transparent [-webkit-text-stroke:2px_#3f3f46] hover:[-webkit-text-stroke:2px_#ffffff] transition-all duration-300 cursor-default">
                                    {word}
                                </span>

                                {/* Simbol Pemisah (bisa diganti dengan bintang, titik, dll) */}
                                <span className="text-4xl text-neutral-700">✦</span>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}