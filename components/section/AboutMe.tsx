'use client';

import AnimatedContent from "@/components/AnimatedContent";
import ShinyText from "@/components/ShinyText";
import ScrollRevealText from "@/components/ScrollRevealText";

export default function AboutMe() {
    return (
        <section id="about-me" className="text-center mx-auto flex flex-col gap-10">
            <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
                key="shiny-text"
            >
                <ShinyText
                    text="✨ About Me"
                    speed={2}
                    delay={2}
                    color="#38b6ff"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    className="text-2xl"

                />
            </AnimatedContent>
            <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
                key="scroll-reveal-text"
            >
                <ScrollRevealText
                    text="A Front-End Developer with 4 years of professional experience in building responsive, efficient, and user-friendly web interfaces. Highly skilled in modern frameworks such as React.js, Vue.js, and Next.js, with strong proficiency in HTML5, CSS3, JavaScript, and TypeScript. Experienced in contributing to large-scale enterprise projects, including internal dashboards and front-office web applications for banking institutions."
                    className="text-2xl  mx-auto text-center max-w-6xl"
                />
            </AnimatedContent>
        </section>
    )
}