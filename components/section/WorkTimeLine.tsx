import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ShinyText from "../ShinyText";
import AnimatedContent from "../AnimatedContent";
import Image from "next/image";
import ReadMore from "../common/ReadMore";
import ShowMore from "../common/ShowMore";

export function WorkTimeLine() {
    const data = [
        {
            title: "2020",
            date: "May 2020 - October 2020",
            description: "Internship at CV. Java Top Motors",
            content: (
                <div key={'parent-1'}>
                    <ReadMore
                        text="Internship as Frontend Developer at CV. Java Top Motors, a leading automotive company specializing in vehicle sales and services. During my internship, I contributed to the development of the company's website and internal tools, gaining hands-on experience with CodeIgniter using PHP. I collaborated with the design team to implement responsive and user-friendly interfaces, enhancing the overall user experience for customers and staff. This internship provided me with valuable insights into the automotive industry and strengthened my frontend development skills."
                        className="mb-8 text-base font-normal text-neutral-200"
                        lineHeight={1.75}
                    />
                    <ShowMore
                        maxHeight={150}
                        className="flex flex-col gap-4"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <Image src={'/assets/javaTopMotor/home1.jpg'}
                                alt="home Java Top Motors"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <Image src={'/assets/javaTopMotor/home2.jpg'}
                                alt="home Java Top Motors"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <Image src={'/assets/javaTopMotor/detail_mobil1.png'}
                                alt="home Java Top Motors"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <Image src={'/assets/javaTopMotor/data_mobil.jpg'}
                                alt="home Java Top Motors"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                        </div>
                    </ShowMore>

                </div>
            ),
        },
        {
            title: "2022 - 2024",
            date: "May 2022 - April 2024",
            description: "Frontend Developer at PT. ACSA.",
            content: (
                <div key={'parent-2'}>
                    <ReadMore
                        text="As a Frontend Developer at PT. ACSA, I designed and implemented responsive user interfaces for various web applications using React.js and Vue.js. I collaborated closely with cross-functional teams to deliver high-quality, engaging digital products, ensuring a seamless user experience across multiple successful projects."
                        className="mb-8 text-base font-normal text-neutral-200"
                        lineHeight={1.75}
                    />
                    <p className="mb-8 text-base font-normal text-neutral-200">
                        Here are some of the projects I worked on during my time at PT. ACSA:
                    </p>
                    <ShowMore
                        maxHeight={150}
                        className="flex flex-col gap-4"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-4">
                                <Image src={'/assets/fallback/images_fallback.png'}
                                    alt="home Java Top Motors"
                                    width={500}
                                    height={500}
                                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                                />
                                <p className="mb-8 text-base font-normal text-neutral-200">
                                    SIPD (Sistem Informasi Pengelolaan Dana)
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Image src={'/assets/fallback/images_fallback.png'}
                                    alt="home Java Top Motors"
                                    width={500}
                                    height={500}
                                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                                />
                                <p className="mb-8 text-base font-normal text-neutral-200">
                                    BRI WorkBench (Internal Dashboard for Sales Division Bank Rakyat Indonesia)
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Image src={'/assets/trustlink/trustlink.png'}
                                    alt="home Java Top Motors"
                                    width={500}
                                    height={500}
                                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                                />
                                <p className="mb-8 text-base font-normal text-neutral-200">
                                    Trustlink V2 (Company Profile Website for PT. Cakrawala Data Integrasi)
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Image src={'/assets/fallback/images_fallback.png'}
                                    alt="home Java Top Motors"
                                    width={500}
                                    height={500}
                                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                                />
                                <p className="mb-8 text-base font-normal text-neutral-200">
                                    Telkom Data Warehouse (Internal Dashboard for Telkom Infra)
                                </p>
                            </div>
                        </div>
                    </ShowMore>
                </div>
            ),
        },
        {
            title: "2024 - Present",
            date: "April 2024 - Present",
            description: "Application Developer at PT. Xsis Mitra Utama (now as Part of PT. IBM Delivery Indonesia).",
            content: (
                <div key={'parent-3'}>
                    <ReadMore
                        text="As an Application Developer at PT. Xsis Mitra Utama (part of PT. IBM Delivery Indonesia), I am currently deployed to Bank Raya Indonesia within the Support System squad under the Digital and Operations division. In this role, I specialize as a Front-End Developer, focusing on designing and implementing robust, user-centric interfaces using React.js and Next.js. My work involves collaborating closely with cross-functional teams to build and maintain scalable applications that ensure seamless internal operations and support the bank’s digital infrastructure. By bridging the gap between complex backend systems and intuitive front-end experiences, I contribute to driving digital transformation and operational excellence within the banking industry."
                        className="mb-8 text-base font-normal text-neutral-200"
                        lineHeight={1.75}
                    />
                    <p className="mb-8 text-base font-normal text-neutral-200">
                        Here are some of the projects I am currently working on at PT. Xsis Mitra Utama:
                    </p>
                    <ShowMore
                        maxHeight={150}
                        className="flex flex-col gap-4"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://assets.aceternity.com/pro/hero-sections.png"
                                alt="hero template"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <img
                                src="https://assets.aceternity.com/features-section.png"
                                alt="feature template"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <img
                                src="https://assets.aceternity.com/pro/bento-grids.png"
                                alt="bento template"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <img
                                src="https://assets.aceternity.com/cards.png"
                                alt="cards template"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                        </div>
                    </ShowMore>
                </div>
            ),
        },
    ];

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
                <h2 className="text-lg md:text-3xl text-white max-w-xl mt-4">
                    Some of the Brief Projects.
                </h2>
            </AnimatedContent>
        );
    }

    const subtitle = `Here are some of the projects I have worked on during my career as a Frontend Developer.`

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} title={renderTitle()} subtitle={subtitle} />
        </div>
    );
}
