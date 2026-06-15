"use client";

import { ArrowRightCircleIcon, ChevronDown } from "lucide-react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimationControls,
  PanInfo,
} from "motion/react";
import { useRef, useState, useCallback } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface TimelineEntry {
  title: string;
  date: string;
  description: string;
  content: React.ReactNode;
}

const COLLAPSED_HEIGHT = "55dvh";
const EXPANDED_HEIGHT = "75dvh";

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardControls = useAnimationControls();
  const contentControls = useAnimationControls();
  const dragY = useMotionValue(0);

  const handleScroll = useCallback(() => {
    const el = contentRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;

    if (maxScroll <= 0) {
      setScrollProgress(1);
      setIsAtBottom(true);
      return;
    }

    const progress = scrollTop / maxScroll;
    setScrollProgress(progress);
    setIsAtBottom(progress > 0.95);
  }, []);

  const expand = () => {
    setIsExpanded(true);
    cardControls.start({ height: EXPANDED_HEIGHT });
    contentControls.start({ flex: 1 });
  };

  const collapse = () => {
    setIsExpanded(false);
    cardControls.start({ height: COLLAPSED_HEIGHT });
    contentControls.start({ flex: 0.45 });
    if (contentRef.current) contentRef.current.scrollTop = 0;
    setScrollProgress(0);
    setIsAtBottom(false);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y < -40) {
      expand();
    } else if (info.offset.y > 40) {
      collapse();
    }
    dragY.set(0);
  };

  return (
    <motion.div
      initial={{ height: COLLAPSED_HEIGHT }}
      animate={cardControls}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
    >
      <Card className="relative flex flex-col rounded-3xl border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm h-full overflow-hidden shadow-lg">
        {/* Header */}
        <CardHeader className="shrink-0 z-10 w-full backdrop-blur-md bg-neutral-100/80 dark:bg-neutral-900/80 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4 pt-6">
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

        {/* Content Area */}
        <div className="relative flex-1 flex flex-col overflow-hidden">
          {/* Scrollable content */}
          <motion.div
            initial={{ flex: 0.45 }}
            animate={contentControls}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative shrink-0 min-h-0"
          >
            <div
              ref={contentRef}
              onScroll={handleScroll}
              className={`h-full px-5 pt-5 pb-2 ${
                isExpanded
                  ? "overflow-y-auto overscroll-contain"
                  : "overflow-hidden"
              }`}
            >
              {entry.content}
            </div>

            {/* Bottom fade when collapsed */}
            {!isExpanded && (
              <div className="absolute bottom-0 inset-x-0 h-16 bg-linear-to-t from-neutral-100 dark:from-neutral-900 to-transparent pointer-events-none" />
            )}
          </motion.div>

          {/* Scroll progress bar */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-1.5 top-2 bottom-20 w-[3px] rounded-full bg-neutral-300/20 dark:bg-neutral-700/20 z-20"
              >
                <div
                  className="w-full rounded-full bg-blue-500/50 transition-all duration-100"
                  style={{ height: `${scrollProgress * 100}%` }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Draggable handle area — always visible */}
          <div className="shrink-0 flex flex-col items-center justify-center border-t border-neutral-200/40 dark:border-neutral-800/40 min-h-8">
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.3}
              onDragEnd={handleDragEnd}
              style={{ y: dragY }}
              onClick={() => (isExpanded ? collapse() : expand())}
              className="flex flex-col items-center gap-2 py-4 px-8 cursor-grab active:cursor-grabbing touch-none select-none"
            >
              {/* Drag handle bar */}
              <div className="w-12 h-1.5 rounded-full bg-neutral-400/40 dark:bg-neutral-600/40" />

              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1.5 mt-1"
              >
                <ChevronDown
                  size={16}
                  className={
                    isExpanded
                      ? "text-neutral-500 dark:text-neutral-400"
                      : "text-blue-500 dark:text-blue-400"
                  }
                />
                <span
                  className={`text-xs font-medium ${
                    isExpanded
                      ? "text-neutral-500 dark:text-neutral-400"
                      : "text-blue-500 dark:text-blue-400"
                  }`}
                >
                  {isExpanded ? "Drag down to collapse" : "Drag up to explore"}
                </span>
              </motion.div>
            </motion.div>

            {/* End-of-scroll cue */}
            <AnimatePresence>
              {isExpanded && isAtBottom && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400 pb-3"
                >
                  <span>All done — scroll to continue</span>
                  <ArrowRightCircleIcon size={14} className="animate-pulse" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </motion.div>
  );
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

  // Build stepped scroll mapping with dead zones
  // Each screen gets an equal portion of scrollYProgress (0 to 1)
  // Within each portion: first 20% = hold, middle 60% = transition, last 20% = hold
  const inputSteps: number[] = [];
  const outputSteps: number[] = [];

  for (let i = 0; i < totalScreens; i++) {
    const segStart = i / totalScreens;
    const segEnd = (i + 1) / totalScreens;
    const segSize = segEnd - segStart;

    const transStart = segStart + segSize * 0.2;
    const transEnd = segStart + segSize * 0.8;

    const currentPos = -i * 100;
    const nextPos = -(i + 1) * 100;

    // Hold at current position (first 20%)
    inputSteps.push(segStart);
    outputSteps.push(currentPos);

    // Start transition (at 20% mark)
    inputSteps.push(transStart);
    outputSteps.push(currentPos);

    // End transition (at 80% mark) — arrive at next card
    if (i < totalScreens - 1) {
      inputSteps.push(transEnd);
      outputSteps.push(nextPos);

      // Hold at next position (last 20%)
      inputSteps.push(segEnd);
      outputSteps.push(nextPos);
    } else {
      // Last screen — hold at final position
      inputSteps.push(transEnd);
      outputSteps.push(currentPos);

      inputSteps.push(segEnd);
      outputSteps.push(currentPos);
    }
  }

  // Map scrollYProgress → numeric vw value, then convert to string
  const xNumeric = useTransform(scrollYProgress, inputSteps, outputSteps);
  const x = useTransform(xNumeric, (v) => `${v}vw`);

  return (
    <div ref={containerRef} style={{ height: `${totalScreens * 100}vh` }}>
      <div className="sticky top-0 h-dvh overflow-hidden flex items-center bg-white dark:bg-neutral-950 transition-colors duration-300">
        <motion.div style={{ x }} className="flex will-change-transform">
          {/* Title Screen */}
          <div className="w-screen h-dvh shrink-0 flex flex-col justify-start">
            <div className="max-w-sm pl-6 pt-24">
              <div className="mb-6">
                {typeof title === "string" ? (
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    {title}
                  </h2>
                ) : (
                  title
                )}
              </div>
              {typeof subtitle === "string" ? (
                <p className="text-neutral-600 dark:text-neutral-400 text-md font-semibold leading-relaxed">
                  {subtitle}
                </p>
              ) : (
                subtitle
              )}
              <div className="mt-12 mx-auto flex justify-start items-center text-left gap-2 text-blue-500 text-2xl font-medium animate-pulse">
                <span className="text-center">Scroll Down to Start</span>
                <ArrowRightCircleIcon className="text-center" />
              </div>
            </div>
          </div>

          {/* Timeline Cards */}
          {data.map((entry, index) => (
            <div
              key={index}
              className={`w-screen h-dvh shrink-0 flex flex-col justify-center px-6 ${
                index === data.length - 1 ? "pr-12" : ""
              }`}
            >
              <TimelineCard entry={entry} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
