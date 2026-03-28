"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import AnimatedContent from "../AnimatedContent";

interface TimelineEntry {
  title: string;
  date: string;
  description: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  title,
  subtitle,
}: {
  data: TimelineEntry[];
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    // Gunakan ResizeObserver untuk memantau perubahan tinggi secara real-time
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    });

    // Mulai observasi pada elemen timeline
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="max-w-7xl mx-auto bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="container w-full mx-auto py-20 flex flex-col items-start justify-start gap-10 text-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start justify-start gap-5 text-start">
            {typeof title === "string" ? (
              <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
                {title}
              </h2>
            ) : (
              title
            )}
            {typeof subtitle === "string" ? (
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
                <p className="text-neutral-300 text-sm md:text-base">
                  {subtitle}
                </p>
              </AnimatedContent>
            ) : (
              subtitle
            )}
          </div>
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        <div
          style={{
            height: height + "px",
          } as React.CSSProperties}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-0"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 z-0 w-0.5 bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
          />
        </div>
        {data.map((item, index) => (
          <div key={index} className="relative z-10">
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
              delay={0.8}
            >
              <div className="flex justify-start pt-10 gap-10">
                <div className="sticky flex flex-col md:flex-row items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute top-1.5 left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center z-40">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </div>
                  <div className="flex flex-col items-end justify-end gap-4 self-start max-w-xs lg:max-w-sm md:w-full">
                    <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-blue-primary dark:text-blue-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-500 max-w-2/3 text-right">
                      {item.description}
                    </p>
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-500">
                      {item.date}
                    </p>
                  </div>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                  {item.content}{" "}
                </div>
              </div>
            </AnimatedContent>
          </div>
        ))}
      </div>
    </div>
  );
};