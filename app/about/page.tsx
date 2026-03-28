'use client';

import AnimatedContent from "@/components/AnimatedContent";
import Footer from "@/components/common/FooterSection";
import NavigationBarTop from "@/components/common/NavigationBarTop";
import BackgroundSection from "@/components/section/Background";
import HeroBanner from "@/components/section/AboutMeHeroBanner";
import ShinyText from "@/components/ShinyText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"; // Pastikan import framer-motion yang benar
import Image from "next/image";
import { useState } from "react";
import ZoomOutSection from "@/components/section/ZoomOutSection";

export default function AboutPage() {
    // Data Work History disesuaikan dengan struktur layout yang baru
    const cardItems = [
        {
            value: "ibm",
            trigger: (
                <div className="flex flex-1 w-full items-center justify-between pr-2 md:pr-6">
                    {/* Bagian Kiri: Logo + Detail */}
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 p-2 shadow-inner">
                            <Image src={'/assets/company-logo/ibm-logo.webp'} width={32} height={32} alt="IBM Logo" className="object-contain" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <span className="text-base md:text-lg font-bold text-white leading-tight">PT. IBM Delivery Indonesia</span>
                            <span className="text-sm font-medium text-blue-400 mt-1">Application Developer</span>
                        </div>
                    </div>
                    {/* Bagian Kanan: Tahun Aktif */}
                    <div className="text-xs md:text-sm font-medium text-neutral-500 text-right">
                        04/2024 — Present
                    </div>
                </div>
            ),
            content: (
                <div className="flex flex-col gap-4">
                    <ul className="list-disc list-inside text-base text-neutral-400 leading-relaxed">
                        <li>Currently assigned as a consultant for PT. Bank Raya Tbk. I specialize in building responsive and performant web applications using modern frameworks like React and Next.js, ensuring scalable and maintainable codebases for enterprise-level systems.</li>
                        <li>Collaborated with cross-functional teams to design and implement front-office web applications, ensuring seamless integration with backend services and APIs.</li>
                        <li>Optimized application performance and implemented best practices for code quality, resulting in improved user experience and maintainability.</li>
                        <li>Utilized Git for version control, ensuring smooth collaboration and code management in fast-paced team environments.</li>
                        <li>Ticketed and prioritized tasks, ensuring efficient project delivery and meeting deadlines.</li>
                        <li>Brainstormed and implemented innovative solutions to address complex business requirements, resulting in enhanced functionality and user satisfaction.</li>
                        <li>Conducted regular code reviews and provided constructive feedback to fellow developers, fostering a culture of continuous improvement.</li>
                    </ul>
                </div>
            ),
        },
        {
            value: "Pt. ACSA",
            trigger: (
                <div className="flex flex-1 w-full items-center justify-between pr-2 md:pr-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 p-2 shadow-inner">
                            <Image src={'/assets/company-logo/ACSA.webp'} width={32} height={32} alt="Bank Raya Logo" className="object-contain" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <span className="text-base md:text-lg font-bold text-white leading-tight">PT. ACSA</span>
                            <span className="text-sm font-medium text-blue-400 mt-1">Frontend Developer</span>
                        </div>
                    </div>
                    <div className="text-xs md:text-sm font-medium text-neutral-500 text-right">
                        05/2022 — 04/2024
                    </div>
                </div>
            ),
            content: (
                <div className="flex flex-col gap-4">
                    <ul className="list-disc list-inside text-base text-neutral-400 leading-relaxed">
                        <li>Developed and maintained internal dashboard applications for Various Client Projects, utilizing React.js and Next.js, React Native, Code Igniter, and Bootstrap to create responsive and user-friendly interfaces.</li>
                        <li>Collaborated with cross-functional teams to design and implement front-office web applications, ensuring seamless integration with backend services and APIs.</li>
                        <li>Optimized application performance and implemented best practices for code quality, resulting in improved user experience and maintainability.</li>
                        <li>Utilized Git for version control, ensuring smooth collaboration and code management in fast-paced team environments.</li>
                        <li>Integrated APIs and third-party services, enhancing the functionality and functionality of the application.</li>
                    </ul>
                    </div>
            ),
        },
        {
            value: "side-project",
            trigger: (
                <div className="flex flex-1 w-full items-center justify-between pr-2 md:pr-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 p-2 shadow-inner">
                            <Image src={'/assets/company-logo/The-Dev-Logo.webp'} width={32} height={32} alt="Xsis Logo" className="object-contain" />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <span className="text-base md:text-lg font-bold text-white leading-tight">Freelance Projects</span>
                            <span className="text-sm font-medium text-blue-400 mt-1">Frontend Developer</span>
                        </div>
                    </div>
                    <div className="text-xs md:text-sm font-medium text-neutral-500 text-right">
                        2020 — Present
                    </div>
                </div>
            ),
            content: (
                <div className="flex flex-col gap-4">
                    <ul className="list-disc list-inside text-base text-neutral-400 leading-relaxed">
                        <li>Developed and maintained personal and open-source projects, showcasing skills in frontend development and problem-solving.</li>
                        <li>Explored various frameworks and technologies to create responsive and user-friendly interfaces.</li>
                        <li>Collaborated With Teams to design and implement front-office web applications, ensuring seamless integration with backend services and APIs.</li>
                        <li>Brainstormed and implemented innovative solutions to address complex business requirements, resulting in enhanced functionality and user satisfaction.</li>
                    </ul>
                </div>
            ),
        },
    ];

    const [activeItem, setActiveItem] = useState<string>(cardItems[0].value);

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col selection:bg-blue-500/30">
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
                                <h1 className="text-4xl font-bold text-white">Team Contribution</h1>
                                <p className="text-white/70 text-lg leading-relaxed">
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
                                                {/* hover:no-underline agar desain kartu tetap bersih saat di-hover */}
                                                <AccordionTrigger className="hover:no-underline py-6">
                                                    {item.trigger}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-base text-neutral-400 leading-relaxed pb-6 pt-2 pl-4 md:pl-20 pr-4">
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