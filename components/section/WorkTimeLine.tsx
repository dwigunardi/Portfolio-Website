'use client';

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TimelineMobile } from "@/components/ui/timeline-horizontal";
import ShinyText from "@/components/ShinyText";
import AnimatedContent from "@/components/AnimatedContent";
import Image from "next/image";
import ReadMore from "@/components/common/ReadMore";
import ShowMore from "@/components/common/ShowMore";
import { useMediaQuery } from "@/hooks/use-media-query";
import { BREAKPOINTS } from "@/const/breakpoints";
import SplitText from "@/components/SplitText";
import BorderGlow from "@/components/BorderGlow";
import { WORK_EXPERIENCE_DATA } from "@/const/WorkTimelineData";

export function WorkTimeLine() {
    const isDesktop = useMediaQuery(BREAKPOINTS.md);

    const mappedData = WORK_EXPERIENCE_DATA.map((item, index) => ({
        title: item.title,
        date: item.date,
        description: item.description,
        content: (
            <div key={`exp-parent-${index}`}>
                <ReadMore
                    text={item.fullDetail}
                    className="mb-8 text-base font-normal text-neutral-800 dark:text-neutral-200"
                    lineHeight={1.75}
                />
                {item.projectsIntro ? (
                    <p className="mb-8 text-base font-normal text-neutral-800 dark:text-neutral-200">
                        {item.projectsIntro}
                    </p>
                ) : null}
                <ShowMore
                    maxHeight={150}
                    className="flex flex-col gap-4"
                >
                    <div className="grid grid-cols-2 gap-4">
                        {item.projects.map((project, pIndex) => (
                            <div key={`project-${index}-${pIndex}`} className="flex flex-col gap-4">
                                <BorderGlow
                                    edgeSensitivity={30}
                                    glowColor="40 80 80"
                                    backgroundColor="transparent"
                                    borderRadius={28}
                                    glowRadius={40}
                                    glowIntensity={1}
                                    coneSpread={25}
                                    animated={true}
                                    colors={['#c084fc', '#f472b6', '#38bdf8']}
                                    className="rounded-lg! p-0.5 shadow-none!"
                                >
                                    <Image 
                                        src={project.imageSrc}
                                        alt={project.alt}
                                        width={500}
                                        height={500}
                                        className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
                                    />
                                </BorderGlow>
                                {project.title ? (
                                    <p className="mb-8 text-base font-normal text-neutral-800 dark:text-neutral-200">
                                        {project.title}
                                    </p>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </ShowMore>
            </div>
        )
    }));

    const renderTitle = () => {
        return (
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
                className="flex flex-col gap-4"
            >
                <ShinyText
                    text="✨ Experience"
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
                {/* <h2 className="text-lg md:text-3xl text-white max-w-6xl mt-4">
                    Some of the Brief Projects.
                </h2> */}
                <SplitText
                    text="Some of the Brief Projects."
                    className="text-4xl font-bold "
                    delay={50}
                    duration={1.25}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="start"
                />
            </AnimatedContent>
        );
    }

    const subtitle = ``

    return (
        <section className="relative w-full block text-justify mx-auto" id="timeline">
            {isDesktop ? (
                <div className="w-full relative min-h-screen">
                    <Timeline data={mappedData} title={renderTitle()} subtitle={subtitle} />
                </div>
            ) : (
                <TimelineMobile data={mappedData} title={renderTitle()} subtitle={subtitle} />
            )}
        </section>
    );
}
