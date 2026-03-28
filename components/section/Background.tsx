'use client';

import { useMediaQuery } from "@/hooks/use-media-query";
import { BREAKPOINTS } from "@/const/breakpoints";
import FloatingLines from "../FloatingLines";
import { cn } from "@/lib/utils";

type BackgroundSectionProps = {
    enableWaves?: Array<'top' | 'middle' | 'bottom'>; // Opsi untuk mengaktifkan gelombang tertentu
    opacity?: '5' | '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100' ; // Opsi untuk mengatur opacity dari garis-garis (default: 0.1)
}
export default function BackgroundSection({ enableWaves, opacity }: BackgroundSectionProps) {
    // Mengecek apakah layar berukuran tablet/desktop (min-width: 768px)
    const isDesktop = useMediaQuery(BREAKPOINTS.md);

    return (
        // Saya menambahkan 'overflow-hidden' agar animasi yang meluber keluar batas tidak menciptakan horizontal scroll
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            {/* Conditional Rendering: Hanya akan dimuat di memori dan di-render jika layar desktop */}
            {isDesktop ? (
                <div className={cn("pointer-events-auto w-full h-full", opacity !== undefined ? `opacity-${opacity}` : "")}>
                    <FloatingLines
                        enabledWaves={enableWaves ?? ['top', 'middle', 'bottom']}
                        lineCount={5}
                        lineDistance={5}
                        bendRadius={5}
                        bendStrength={-0.5}
                        interactive={true}
                        parallax={true}
                        mixBlendMode="plus-darker"
                    />
                </div>
            ) : null}
        </div>
    );
}