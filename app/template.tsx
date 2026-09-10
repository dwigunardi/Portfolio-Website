'use client';

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn, introState } from "@/lib/utils";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === '/';

    const [showDoor, setShowDoor] = useState(() => {
        return isHome && !introState.hasPlayed;
    });
    const [isDoorsOpening, setIsDoorsOpening] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !showDoor) return;

        document.body.style.overflow = "hidden";

        let isPageLoaded = document.readyState === "complete";
        let isMinTimeElapsed = false;
        let isTriggered = false;

        const triggerDoorOpen = () => {
            if (isTriggered) return;
            isTriggered = true;
            setIsDoorsOpening(true);

            // After doors slide open (duration: 1s), remove overlay completely
            setTimeout(() => {
                document.body.style.overflow = "";
                introState.hasPlayed = true;
                setShowDoor(false);
            }, 1000);
        };

        const checkReadiness = () => {
            if (isPageLoaded && isMinTimeElapsed) {
                triggerDoorOpen();
            }
        };

        // 1. Min branding animation timer (1.5s)
        const minTimer = setTimeout(() => {
            isMinTimeElapsed = true;
            checkReadiness();
        }, 1500);

        // 2. Safety max timeout (3.5s) to ensure visitor is never blocked
        const maxSafetyTimer = setTimeout(() => {
            triggerDoorOpen();
        }, 3500);

        // 3. Window load listener
        const handleLoad = () => {
            isPageLoaded = true;
            checkReadiness();
        };

        if (!isPageLoaded) {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            clearTimeout(minTimer);
            clearTimeout(maxSafetyTimer);
            window.removeEventListener("load", handleLoad);
            document.body.style.overflow = "";
        };
    }, [showDoor]);

    return (
        <div key={pathname || "default"} className="w-full h-full">
            {showDoor && (
                <div className="fixed inset-0 z-100 pointer-events-none flex">
                    
                    {/* LOGO DGM */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: isDoorsOpening ? 0 : [0, 1, 1],
                            scale: isDoorsOpening ? 1.2 : [0.8, 1, 1]
                        }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-110 flex items-center justify-center"
                    >
                        <span className="text-4xl md:text-6xl font-black text-white tracking-widest drop-shadow-[0_0_15px_rgba(56,182,255,0.5)]">
                            DGM<span className="text-blue-500">.</span>
                        </span>
                    </motion.div>

                    {/* PINTU KIRI */}
                    <motion.div
                        initial={{ x: "0%" }}
                        animate={{ x: isDoorsOpening ? "-100%" : "0%" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className={cn("w-1/2 h-full bg-neutral-950 border-r border-neutral-800 shadow-[20px_0_50px_rgba(0,0,0,0.5)] relative z-105")}
                    />

                    {/* PINTU KANAN */}
                    <motion.div
                        initial={{ x: "0%" }}
                        animate={{ x: isDoorsOpening ? "100%" : "0%" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className={cn("w-1/2 h-full bg-neutral-950 border-l border-neutral-800 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] relative z-105")}
                    />
                </div>
            )}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    delay: showDoor ? 0.2 : 0, 
                    duration: 0.8, 
                    ease: "easeOut" 
                }}
                className={cn("w-full h-full")}
            >
                {children}
            </motion.div>
        </div>
    );
}