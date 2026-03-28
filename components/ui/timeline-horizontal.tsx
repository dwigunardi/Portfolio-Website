"use client";

import { ArrowRightCircleIcon } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

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
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-white dark:bg-neutral-950 transition-colors duration-300">
        <motion.div style={{ x }} className="flex will-change-transform">
          <div className="w-screen h-screen shrink-0 flex flex-col justify-start">
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

          {data.map((entry, index) => (
            <div key={index} className="w-screen h-screen shrink-0 flex flex-col justify-center px-6">

              <div className="relative flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 p-6 md:p-8 backdrop-blur-sm max-h-[80vh] overflow-y-auto scrollbar-hide shadow-lg">
                <div className="mb-6 flex items-center gap-4 sticky top-0 py-2 z-10 w-full backdrop-blur-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{entry.title}</h3>
                </div>
                <p className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">{entry.description}</p>
                <p className="mb-6 text-xs text-neutral-500 dark:text-neutral-400">{entry.date}</p>

                <div className="w-full">
                  {entry.content}
                </div>
              </div>
            </div>
          ))}

        </motion.div>
      </div>
    </div>
  );
}