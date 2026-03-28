'use client';

import { MARQUEE_WORDS } from "@/const/marquee-word";
import AnimatedContent from "@/components/AnimatedContent";
import InfiniteMarquee from "@/components/InfiniteTextMarquee";

export default function MarqueeSection() {
    return (
        <section className="border-y dark:border-neutral-800 opacity-80 lg:-mt-26 z-10">
           <AnimatedContent distance={10} direction="vertical" reverse={false} duration={0.8} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0} key="marquee-section">
                <InfiniteMarquee words={MARQUEE_WORDS} speed={60} />
            </AnimatedContent>
        </section>
    );
}