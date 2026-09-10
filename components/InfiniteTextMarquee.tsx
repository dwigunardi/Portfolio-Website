import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
    words: string[];
    speed?: number; // Durasi putaran dalam detik
    className?: string;
}

export default function InfiniteMarquee({
    words,
    speed = 20,
    className,
}: InfiniteMarqueeProps) {
    return (
        <div className={cn("relative flex w-full overflow-hidden bg-white/70 dark:bg-neutral-950/60 backdrop-blur-md py-3 md:py-3.5", className)}>
            <div
                className="flex whitespace-nowrap animate-marquee-scroll"
                style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
            >
                {/* Render konten 2 kali agar saat yang pertama habis, yang kedua menyambung tanpa patah */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex flex-nowrap items-center px-4">
                        {words.map((word, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-8 px-4"
                            >
                                {/* Styling teks besar, tebal, dan adaptif untuk light dan dark mode */}
                                <span className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-transparent [-webkit-text-stroke:1.5px_#a1a1aa] hover:[-webkit-text-stroke:1.5px_#18181b] dark:[-webkit-text-stroke:2px_#3f3f46] dark:hover:[-webkit-text-stroke:2px_#ffffff] transition-all duration-300 cursor-default">
                                    {word}
                                </span>
                                {/* Simbol Pemisah */}
                                <span className="text-3xl md:text-4xl text-neutral-300 dark:text-neutral-700">✦</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}