'use client';

import { Hand, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SlideInButton } from "@/components/common/SlideInButton";
import BackgroundSection from "@/components/section/Background"; // Sesuaikan path dengan lokasi BackgroundSection Anda
import Link from "next/link";
import { introState } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/const/routes-list";

export default function NewHeroSection() {
    const baseDelay = introState.hasPlayed ? 0.2 : 1.8;
    const handleDownloadResume = () => {
        if(typeof document !== "undefined") {
            const link = document.createElement('a');
            link.href = '/assets/CV/CV-Dwi-Gunardi-Meinaki.pdf';
            link.download = 'Dwi_Gunardi_M_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return (
        <section className="relative w-full min-h-screen overflow-hidden dark:bg-neutral-950 flex items-center">
            <BackgroundSection enableWaves={['top', 'bottom']} />
            {/*  KONTEN HERO: Dibungkus container agar tetap rapi di tengah, dan diberi z-10 agar di atas background */}
            <div className="relative z-10 container mx-auto px-6 md:px-10 pt-40 pb-20 max-w-7xl w-full">
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: baseDelay }}
                    >
                        <p className="dark:text-neutral-300 mb-4 flex items-center gap-3 text-lg">
                            <span className="inline-flex items-center gap-1">
                                <Hand className="animate-wave-animation text-blue-500" size={28} />
                            </span>
                            Hey! It's me Dwi Gunardi M,
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: baseDelay + 0.2 }}
                    >
                        <h1 className="text-5xl leading-[1.1] dark:text-white md:text-6xl lg:w-4/5 lg:text-7xl font-bold">
                            Coding immersive <span className="text-blue-500">web experiences</span> that look great and feel <span className="text-blue-500">even better</span>.
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: baseDelay + 0.4 }}
                        className="mt-8 flex flex-col gap-6 md:flex-row md:items-center"
                    >
                        <div className="bg-neutral-900 dark:bg-neutral-200 h-px w-full md:w-32 hidden md:block"></div>
                        <p className="w-full dark:text-neutral-200 text-lg md:text-xl leading-relaxed lg:w-2/3">
                            I work with professionals who are passionate about building pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: baseDelay + 0.6 }}
                        className="mt-12 flex flex-col justify-between gap-12 lg:gap-8 lg:flex-row lg:items-center"
                    >
                        <ul className="flex flex-wrap gap-6 md:gap-8">
                            {SOCIAL_LINKS.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1 text-sm md:text-base font-medium uppercase text-neutral-500 hover:text-blue-primary dark:text-neutral-400 dark:hover:text-white transition-colors duration-300"
                                        href={link.url}
                                    >
                                        {link.name}
                                        <ArrowUpRight size={18} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <SlideInButton
                            initialText="Know me better"
                            hoverText="Let's Go!"
                            icon={<ArrowUpRight size={18} />}
                            onClick={() => handleDownloadResume()}
                            initialFill="bg-neutral-900"
                            hoverFill="bg-gradient-to-r from-blue-500 to-purple-500"
                            initialTextColor="text-white"
                            hoverTextColor="text-white"
                            hasBorder={false}
                            className="flex items-center gap-2 mt-4 cursor-pointer transition-all duration-300 py-7 lg:py-5 px-10 lg:px-8"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}