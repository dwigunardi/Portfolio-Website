'use client';

import { IconApiApp, IconBrandCss3, IconBrandCypress, IconBrandDocker, IconBrandFigma, IconBrandFirebase, IconBrandFramerMotion, IconBrandGithub, IconBrandGitlab, IconBrandHtml5, IconBrandJavascript, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandNuxt, IconBrandReact, IconBrandTypescript, IconBrandVue, IconCode } from "@tabler/icons-react";
import AnimatedContent from "../AnimatedContent";
import InfiniteCard, { TechItem } from "../infiniteCard";
import ShinyText from "../ShinyText";
import SplitText from "../SplitText";
import { Card, CardContent, } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

export const techStacks: TechItem[] = [
    { id: "html", name: "HTML5", icon: <IconBrandHtml5 className="text-red-500" /> },
    { id: "css", name: "CSS3", icon: <IconBrandCss3 className="text-blue-500" /> },
    { id: "js", name: "JavaScript", icon: <IconBrandJavascript className="text-yellow-400" /> },
    { id: "ts", name: "TypeScript", icon: <IconBrandTypescript className="text-blue-500" /> },
    { id: "react", name: "React.js", icon: <IconBrandReact className="text-cyan-400" /> },
    { id: "next", name: "Next.js", icon: <IconBrandNextjs className="text-white" /> },
    { id: "vue", name: "Vue.js", icon: <IconBrandVue className="text-green-500" /> },
    { id: "nuxt", name: "Nuxt.js", icon: <IconBrandNuxt className="text-green-500" /> },
    { id: "node", name: "Node.js", icon: <IconBrandNodejs className="text-green-600" /> },
    { id: "github", name: "GitHub", icon: <IconBrandGithub className="text-gray-300" /> },
    { id: "docker", name: "Docker", icon: <IconBrandDocker className="text-blue-600" /> },
    { id: "cypress", name: "Cypress", icon: <IconBrandCypress className="text-purple-500" /> },
    { id: "mysql", name: "MySQL", icon: <IconBrandMysql className="text-blue-300" /> },
    { id: "figma", name: "Figma", icon: <IconBrandFigma className="text-pink-500" /> },
    { id: "firebase", name: "Firebase", icon: <IconBrandFirebase className="text-yellow-400" /> },
    { id: "gitlab", name: "GitLab", icon: <IconBrandGitlab className="text-orange-500" /> },
    { id: "framer-motion", name: "Framer Motion", icon: <IconBrandFramerMotion className="text-yellow-400" /> },
];

export default function Expertise() {


    const cardItems = [
        {
            value: "development",
            trigger: <div className="flex items-center gap-2"><IconCode /> <span>Development</span></div>,
            content: "I specialize in building responsive and performant web applications using modern frameworks like React, Next.js, Vue, and Nuxt. My expertise in JavaScript and TypeScript allows me to create scalable and maintainable codebases. With Responsive Design principles, I ensure that applications look great and function well on all devices.",
            image: "/assets/expertise/development.webp",
        },
        {
            value: "API Integration",
            trigger: <div className="flex items-center gap-2"><IconApiApp /> <span>API Integration</span></div>,
            content: "I have experience integrating with various APIs to fetch and manipulate data, ensuring seamless communication between different services and applications.",
            image: "/assets/expertise/API.webp",
        },
        {
            value: "version-control",
            trigger: <div className="flex items-center gap-2"><IconBrandGithub /> <span>Version Control</span></div>,
            content: "I am proficient in using Git for version control, ensuring smooth collaboration and code management in team environments.",
            image: "/assets/expertise/Version-Control-Systems.webp",
        },
    ];

    const [activeItem, setActiveItem] = useState<string>(cardItems[0].value);
    const activeData = cardItems.find((item) => item.value === activeItem) || cardItems[0];
    return (
        <section id="expertise" className="relative w-full text-justify mx-auto flex flex-col gap-10 max-w-7xl text-neutral-800 dark:text-white">
            <div className="container w-full mx-auto py-20 flex flex-col items-start justify-start gap-10 text-start">
                <div className="flex flex-col items-start justify-start gap-5 text-start">
                    <AnimatedContent
                        distance={100}
                        direction="horizontal"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}
                    >
                        <ShinyText
                            text="✨ Specialties"
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
                    <SplitText
                        text="Areas of Expertise"
                        className="text-4xl font-bold"
                        delay={50}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />

                </div>
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Card className="min-w-full bg-[##111116] backdrop-blur-sm border-neutral-700 text-neutral-800 dark:text-white">
                            <CardContent>
                                <Accordion
                                    type="single"
                                    defaultValue={cardItems[0]?.value}
                                    className="w-full"
                                    onValueChange={(value) => setActiveItem(value)}
                                    value={activeItem}
                                >
                                    {cardItems.map((item) => (
                                        <AccordionItem key={item.value} value={item.value}>
                                            <AccordionTrigger className="text-xl">{item.trigger}</AccordionTrigger>
                                            <AccordionContent className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pb-4 pt-1">{item.content}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>

                        <div className="relative w-full h-[300px] md:h-full min-h-[400px] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeItem}
                                    initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={activeData.image}
                                        alt={activeData.value}
                                        fill
                                        className="object-cover object-right rounded-2xl"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />

                                    {/* 1. LAYER VIGNETTE: Radial gradient gelap di pinggiran, transparan di tengah */}
                                    {/* Pointer-events-none penting agar gradient ini tidak menutupi klik jika ada interaksi */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />

                                    {/* 2. LAYER GRADIENT BAWAH (Opsional, dari kode Anda sebelumnya) */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-t from-[#111116]/90 via-transparent to-transparent" />

                                    {/* 3. EFEK HOVER (Bonus): Gambar sedikit membesar saat mouse diarahkan ke area gambar */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-white/10 group-hover:bg-black/10 transition-colors duration-500" />

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </AnimatedContent>
                <InfiniteCard items={techStacks} direction="left" speed={0.2} />
            </div>
        </section>
    );
}