"use client";
import { ReactLenis } from 'lenis/react';
import React, { PropsWithChildren, useEffect, useRef } from "react";
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'motion/react';

const lenisOptions = {
    autoRaf: false,
    duration: 1.0,
    lerp: 0.09,
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
};

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp;
            lenisRef.current?.lenis?.raf(time);
        }

        frame.update(update, true);

        return () => cancelFrame(update);
    }, []);

    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={lenisOptions}
        >
            {children}
        </ReactLenis>
    );
}