'use client';

import { useMediaQuery } from "@/hooks/use-media-query";
import { BREAKPOINTS } from "@/const/breakpoints";
import FloatingLines from "@/components/FloatingLines";
import { cn } from "@/lib/utils";

type BackgroundSectionProps = {
    enableWaves?: Array<'top' | 'middle' | 'bottom'>;
    opacity?: '5' | '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100' ;
}

const opacityMap: Record<string, string> = {
    '5': 'opacity-5',
    '10': 'opacity-10',
    '20': 'opacity-20',
    '30': 'opacity-30',
    '40': 'opacity-40',
    '50': 'opacity-50',
    '60': 'opacity-60',
    '70': 'opacity-70',
    '80': 'opacity-80',
    '90': 'opacity-90',
    '100': 'opacity-100',
};

export default function BackgroundSection({ enableWaves, opacity }: BackgroundSectionProps) {
    const isDesktop = useMediaQuery(BREAKPOINTS.md);

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            {isDesktop ? (
                <div className={cn("pointer-events-auto w-full h-full transition-opacity duration-500", opacity ? opacityMap[opacity] : "")}>
                    <FloatingLines
                        // linesGradient={['#38b6ff', '#8b5cf6', '#38bdf8']}
                        enabledWaves={enableWaves ?? ['top', 'middle', 'bottom']}
                        lineCount={5}
                        lineDistance={5}
                        bendRadius={5}
                        bendStrength={-0.5}
                        interactive={true}
                        parallax={true}
                        mixBlendMode="normal"
                    />
                </div>
            ) : null}
        </div>
    );
}