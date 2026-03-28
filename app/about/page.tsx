'use client';

import AnimatedContent from "@/components/AnimatedContent";
import Footer from "@/components/common/FooterSection";
import NavigationBarTop from "@/components/common/NavigationBarTop";
import BackgroundSection from "@/components/section/Background";
import HeroBanner from "@/components/section/AboutMeHeroBanner";
import ShinyText from "@/components/ShinyText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import ZoomOutSection from "@/components/section/ZoomOutSection";
import { EXPERIENCE_DATA } from "@/const/WorkTimelineData";

export default function AboutPage() {
    const cardItems = EXPERIENCE_DATA.map((item, index) => ({
        value: item.value,
        trigger: (
            <div className="flex flex-1 w-full items-center justify-between pr-2 md:pr-6">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-2 shadow-inner transition-colors">
                        <Image 
                            src={item.logo} 
                            width={32} 
                            height={32} 
                            alt={`${item.company} Logo`} 
                            className="object-contain" 
                        />
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <span className="text-base md:text-lg font-bold text-neutral-900 dark:text-white leading-tight transition-colors">
                            {item.company}
                        </span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 transition-colors">
                            {item.role}
                        </span>
                    </div>
                </div>
                {/* Bagian Kanan: Tahun Aktif */}
                <div className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 text-right transition-colors">
                    {item.period}
                </div>
            </div>
        ),
        content: (
            <div className="flex flex-col gap-4">
                <ul className="list-disc list-inside text-base text-neutral-700 dark:text-neutral-400 leading-relaxed transition-colors">
                    {item.descriptions.map((desc, descIdx) => (
                        <li key={`desc-${index}-${descIdx}`} className="mb-2 last:mb-0">
                            {desc}
                        </li>
                    ))}
                </ul>
            </div>
        ),
    }));

    const [activeItem, setActiveItem] = useState<string>(cardItems[0].value);

    return (
        <div className="min-h-screen dark:bg-neutral-950 flex flex-col selection:bg-blue-500/30">
            <NavigationBarTop />
            <div className="fixed inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950 pointer-events-none z-0" />
            <BackgroundSection enableWaves={['middle', 'bottom']} />
            <HeroBanner />
            
            <main className="container mx-auto relative z-10 pb-20">
                <div className="flex flex-col gap-20 mt-28 px-4 md:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <AnimatedContent
                            distance={40}
                            direction="vertical"
                            duration={0.8}
                            className="max-w-lg text-justify col-span-1"
                        >
                            <div className="flex flex-col items-start justify-start gap-6 text-start">
                                <ShinyText
                                    text="✨ Work History"
                                    speed={2}
                                    delay={2}
                                    color="#38b6ff"
                                    shineColor="#ffffff"
                                    spread={120}
                                    direction="left"
                                    className="text-2xl"
                                />
                                <h1 className="text-4xl font-bold dark:text-white">Team Contribution</h1>
                                <p className="dark:text-white/70 text-lg leading-relaxed">
                                    My professional journey involves collaborating with cross-functional teams to create responsive, scalable, and user-friendly enterprise applications.
                                </p>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={50}
                            direction="vertical"
                            duration={0.8}
                            delay={0.2}
                            className="col-span-1 lg:col-span-2"
                        >
                            <Card className="bg-transparent border-none backdrop-blur-md rounded-2xl">
                                <CardContent className="p-2 md:p-6">
                                    <Accordion
                                        type="single"
                                        defaultValue={cardItems[0]?.value}
                                        className="w-full"
                                        onValueChange={(value) => value && setActiveItem(value)} // Mencegah tertutup semua (opsional)
                                        value={activeItem}
                                    >
                                        {cardItems.map((item) => (
                                            <AccordionItem 
                                                key={item.value} 
                                                value={item.value}
                                                className="border-neutral-800 px-2 md:px-4"
                                            >
                                                <AccordionTrigger className="hover:no-underline py-6 text-neutral-800 dark:text-white">
                                                    {item.trigger}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-base dark:text-neutral-400 leading-relaxed pb-6 pt-2 pl-4 md:pl-20 pr-4">
                                                    {item.content}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardContent>
                            </Card>
                        </AnimatedContent>

                    </div>
                </div>
            </main>
            <ZoomOutSection />
            <Footer />
        </div>
    );
}