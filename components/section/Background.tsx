'use client';

import { useMediaQuery } from "@/hooks/use-media-query";
import { BREAKPOINTS } from "@/const/breakpoints";
import FloatingLines from "../FloatingLines";
import { cn } from "@/lib/utils";

type BackgroundSectionProps = {
    enableWaves?: Array<'top' | 'middle' | 'bottom'>;
    opacity?: '5' | '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100' ;
}

export default function BackgroundSection({ enableWaves, opacity }: BackgroundSectionProps) {
    const isDesktop = useMediaQuery(BREAKPOINTS.md);

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            {isDesktop ? (
                <div className={cn("pointer-events-auto w-full h-full transition-opacity duration-500", opacity !== undefined ? `opacity-${opacity}` : "")}>
                    <FloatingLines
                        // linesGradient={['#38b6ff', '#8b5cf6', '#38bdf8']}
                        enabledWaves={enableWaves ?? ['top', 'middle', 'bottom']}
                        lineCount={5}
                        lineDistance={5}
                        bendRadius={5}
                        bendStrength={-0.5}
                        interactive={true}
                        parallax={true}
                        // PERBAIKAN: Gunakan normal agar garis transparan dirender apa adanya
                        mixBlendMode="normal"
                    />
                </div>
            ) : null}
        </div>
    );
}