"use client";

import { ArrowRightCircleIcon } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface TimelineEntry {
  title: string;
  date: string;
  description: string;
  content: React.ReactNode;
}

export function TimelineMobile({
  data,
  title,
  subtitle,
}: {
  data: TimelineEntry[];
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalScreens = data.length + 1;
  const endX = `-${(totalScreens - 1) * 100}vw`;
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", endX]);

  return (
    <div ref={containerRef} style={{ height: `${totalScreens * 100}vh` }}>
      {/* Menggunakan h-[100dvh] lebih disarankan di mobile agar tidak tertutup address bar */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex items-center bg-white dark:bg-neutral-950 transition-colors duration-300">
        <motion.div style={{ x }} className="flex will-change-transform">

          {/* Halaman Judul Awal */}
          <div className="w-screen h-[100dvh] shrink-0 flex flex-col justify-start">
            <div className="max-w-sm pl-6 pt-24">
              <div className="mb-6">
                {typeof title === "string" ? (
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">{title}</h2>
                ) : (
                  title
                )}
              </div>
              {typeof subtitle === "string" ? (
                <p className="text-neutral-600 dark:text-neutral-400 text-md font-semibold leading-relaxed">{subtitle}</p>
              ) : (
                subtitle
              )}
              <div className="mt-12 mx-auto flex justify-start items-center text-left gap-2 text-blue-500 text-2xl font-medium animate-pulse">
                <span className="text-center">Scroll Down to Start</span>
                <ArrowRightCircleIcon className="text-center" />
              </div>
            </div>
          </div>

          {/* Render Data Timeline */}
          {data.map((entry, index) => (
            <div key={index} className="w-screen h-[100dvh] shrink-0 flex flex-col justify-center px-6">

              {/* PERBAIKAN CARD: h-fit, overflow-hidden */}
              <Card className="relative flex flex-col rounded-3xl border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm h-fit max-h-[85vh] overflow-hidden shadow-lg">

                {/* PERBAIKAN HEADER: shrink-0 (agar tidak menyusut saat konten di bawahnya memanjang) */}
                {/* Catatan: 'sticky' sudah tidak diperlukan karena CardContent di bawahnya yang akan di-scroll */}
                <CardHeader className="shrink-0 z-10 w-full backdrop-blur-md bg-neutral-100/80 dark:bg-neutral-900/80 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4 pt-6 md:pt-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {entry.title}
                    </CardTitle>
                  </div>

                  <div className="mt-4 flex flex-col gap-1">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {entry.description}
                    </p>
                    <CardDescription className="text-xs text-neutral-500 dark:text-neutral-400">
                      {entry.date}
                    </CardDescription>
                  </div>
                </CardHeader>

                {/* PERBAIKAN CONTENT: overflow-y-auto, overscroll-none, flex-1 */}
                <CardContent className="w-full flex-1 overflow-y-auto overflow-x-hidden overscroll-none scrollbar-hide pt-6 pb-6 md:pb-8">
                  {entry.content}
                </CardContent>

              </Card>

            </div>
          ))}

        </motion.div>
      </div>
    </div>
  );
}