'use client';

import AnimatedContent from "../AnimatedContent";
import InfiniteMarquee from "../InfiniteTextMarquee";

export default function MarqueeSection() {
    const marqueeWords = [
        "Community",
        "Development",
        "Coding",
        "Websites",
        "Teamwork",
        "Innovation",
    ];
    return (
        <section className="border-y border-neutral-800 opacity-80 lg:-mt-26 z-10">
           <AnimatedContent distance={10} direction="vertical" reverse={false} duration={0.8} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0} key="marquee-section">
                <InfiniteMarquee words={marqueeWords} speed={60} />
            </AnimatedContent>
        </section>
    );
}