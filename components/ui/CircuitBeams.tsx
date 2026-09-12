'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CircuitBeamsProps {
  className?: string;
}

export default function CircuitBeams({ className }: Readonly<CircuitBeamsProps>) {
  // Desktop Static Traces (All 4 Sides)
  const desktopStaticTraces = [
    // Left Traces -> Left Pins (x: 242)
    { id: 'dt-l1', d: 'M 60 50 H 160 V 142 H 242', dot: [60, 50] },
    { id: 'dt-l2', d: 'M 40 160 H 242', dot: [40, 160] },
    { id: 'dt-l3', d: 'M 70 270 H 170 V 178 H 242', dot: [70, 270] },

    // Right Traces -> Right Pins (x: 558)
    { id: 'dt-r1', d: 'M 740 50 H 640 V 142 H 558', dot: [740, 50] },
    { id: 'dt-r2', d: 'M 760 160 H 558', dot: [760, 160] },
    { id: 'dt-r3', d: 'M 730 270 H 630 V 178 H 558', dot: [730, 270] },

    // Top Traces -> Top Pins (y: 120)
    { id: 'dt-tc', d: 'M 400 30 V 120', dot: [400, 30] },
    { id: 'dt-tl1', d: 'M 220 30 H 294 V 120', dot: [220, 30] },
    { id: 'dt-tl2', d: 'M 351 55 V 120', dot: [351, 55] },
    { id: 'dt-tr1', d: 'M 580 30 H 506 V 120', dot: [580, 30] },
    { id: 'dt-tr2', d: 'M 449 55 V 120', dot: [449, 55] },

    // Bottom Traces -> Bottom Pins (y: 192)
    { id: 'dt-bc', d: 'M 400 200 V 290', dot: [400, 290] },
    { id: 'dt-bl', d: 'M 294 200 V 260 H 190', dot: [190, 260] },
    { id: 'dt-br', d: 'M 506 200 V 260 H 610', dot: [610, 260] },
  ];

  // Desktop Animated Beams
  const desktopBeams = [
    { id: 'db-tc', d: 'M 400 30 V 120', duration: 1.6, delay: 0.2, gradient: 'beam-cyan', dashArray: '30 90', initialOffset: 90 },
    { id: 'db-l1', d: 'M 60 50 H 160 V 142 H 242', duration: 2.5, delay: 0.5, gradient: 'beam-cyan', dashArray: '50 180', initialOffset: 230 },
    { id: 'db-l2', d: 'M 40 160 H 242', duration: 2.1, delay: 1.2, gradient: 'beam-blue', dashArray: '45 160', initialOffset: 200 },
    { id: 'db-r1', d: 'M 740 50 H 640 V 142 H 558', duration: 2.6, delay: 0.8, gradient: 'beam-blue', dashArray: '50 180', initialOffset: 230 },
    { id: 'db-r2', d: 'M 760 160 H 558', duration: 2.0, delay: 1.6, gradient: 'beam-cyan', dashArray: '45 160', initialOffset: 200 },
    { id: 'db-bc', d: 'M 400 200 V 290', duration: 1.8, delay: 0.4, gradient: 'beam-cyan', dashArray: '30 90', initialOffset: 90 },
    { id: 'db-bl', d: 'M 190 260 H 294 V 200', duration: 2.4, delay: 1.0, gradient: 'beam-blue', dashArray: '40 140', initialOffset: 180 },
    { id: 'db-br', d: 'M 610 260 H 506 V 200', duration: 2.4, delay: 1.8, gradient: 'beam-cyan', dashArray: '40 140', initialOffset: 180 },
  ];

  // Mobile Static Traces (Top & Bottom only - Left/Right side lines removed for maximum button size)
  const mobileStaticTraces = [
    { id: 'mt-tc', d: 'M 400 30 V 120', dot: [400, 30] },
    { id: 'mt-tl', d: 'M 347 55 V 120', dot: [347, 55] },
    { id: 'mt-tr', d: 'M 453 55 V 120', dot: [453, 55] },
    { id: 'mt-bc', d: 'M 400 200 V 285', dot: [400, 285] },
    { id: 'mt-bl', d: 'M 347 200 V 265', dot: [347, 265] },
    { id: 'mt-br', d: 'M 453 200 V 265', dot: [453, 265] },
  ];

  // Mobile Animated Beams (Clean vertical pulses into the chip)
  const mobileBeams = [
    { id: 'mb-tc', d: 'M 400 30 V 120', duration: 1.6, delay: 0.2, gradient: 'beam-cyan', dashArray: '30 90', initialOffset: 90 },
    { id: 'mb-bc', d: 'M 400 200 V 285', duration: 1.8, delay: 0.5, gradient: 'beam-blue', dashArray: '30 90', initialOffset: 90 },
  ];

  return (
    <div className={cn('relative w-full select-none', className)}>
      {/* ============================================================ */}
      {/* 1. MOBILE VERSION (< sm): Compact, no side lines, large button */}
      {/* ============================================================ */}
      <div className="block sm:hidden w-full max-w-85 mx-auto">
        <svg
          className="w-full h-auto overflow-visible"
          viewBox="230 15 340 285"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="m-chipBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#242424" />
              <stop offset="50%" stopColor="#171717" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <linearGradient id="m-pinGradV" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a3a3a3" />
              <stop offset="50%" stopColor="#d4d4d4" />
              <stop offset="100%" stopColor="#737373" />
            </linearGradient>
            <linearGradient id="m-beam-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="40%" stopColor="#00f2fe" stopOpacity="1" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="m-beam-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="40%" stopColor="#6366f1" stopOpacity="1" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
            </linearGradient>
            <filter id="m-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Static Traces */}
          <g className="text-neutral-300 dark:text-neutral-800 transition-colors duration-300">
            {mobileStaticTraces.map((trace) => (
              <path
                key={trace.id}
                d={trace.d}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
            ))}
            {mobileStaticTraces.map((trace) => (
              <circle
                key={`dot-${trace.id}`}
                cx={trace.dot[0]}
                cy={trace.dot[1]}
                r="3.5"
                className="fill-white dark:fill-neutral-950 stroke-neutral-400 dark:stroke-neutral-700"
                strokeWidth="1.5"
              />
            ))}
          </g>

          {/* Animated Beams */}
          <g filter="url(#m-glow)">
            {mobileBeams.map((beam) => (
              <motion.path
                key={beam.id}
                d={beam.d}
                stroke={`url(#m-${beam.gradient})`}
                strokeWidth="2.6"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={beam.dashArray}
                initial={{ strokeDashoffset: beam.initialOffset }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: beam.duration,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: beam.delay,
                }}
              />
            ))}
          </g>

          {/* Microchip Pins (Top & Bottom only on mobile) */}
          <g>
            <rect x="343" y="120" width="8" height="8" rx="1.5" fill="url(#m-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="396" y="120" width="8" height="8" rx="1.5" fill="url(#m-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="449" y="120" width="8" height="8" rx="1.5" fill="url(#m-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />

            <rect x="343" y="192" width="8" height="8" rx="1.5" fill="url(#m-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="396" y="192" width="8" height="8" rx="1.5" fill="url(#m-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="449" y="192" width="8" height="8" rx="1.5" fill="url(#m-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
          </g>

          {/* Chip Body Rect */}
          <rect
            x="250"
            y="128"
            width="300"
            height="64"
            rx="16"
            ry="16"
            fill="url(#m-chipBg)"
            className="stroke-neutral-700/80 dark:stroke-neutral-800"
            strokeWidth="1.5"
            filter="drop-shadow(0 8px 20px rgba(0,0,0,0.35))"
          />

          {/* Interactive Button */}
          <foreignObject x="250" y="128" width="300" height="64" className="overflow-visible">
            <div className="w-full h-full flex items-center justify-center p-0.5">
              <Link
                href="/contact"
                className="group/btn relative w-full h-full flex items-center justify-center gap-2 rounded-2xl bg-neutral-950/90 text-white dark:bg-neutral-900/90 border border-neutral-700/50 dark:border-neutral-800 font-semibold text-xs hover:bg-black dark:hover:bg-neutral-800 transition-all duration-300 shadow-xl cursor-pointer px-3"
              >
                <span className="absolute top-2.5 left-3 w-1.5 h-1.5 rounded-full bg-neutral-500 pointer-events-none" />
                <span className="truncate">Let's Talk About Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover/btn:translate-x-1 transition-transform duration-300 shrink-0" />
              </Link>
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* ============================================================ */}
      {/* 2. DESKTOP VERSION (>= sm): Full 800px PCB with all traces   */}
      {/* ============================================================ */}
      <div className="hidden sm:block w-full max-w-200 mx-auto">
        <svg
          className="w-full h-auto overflow-visible"
          viewBox="0 0 800 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="d-chipBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#242424" />
              <stop offset="50%" stopColor="#171717" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <linearGradient id="d-pinGradH" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a3a3a3" />
              <stop offset="50%" stopColor="#d4d4d4" />
              <stop offset="100%" stopColor="#737373" />
            </linearGradient>
            <linearGradient id="d-pinGradV" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a3a3a3" />
              <stop offset="50%" stopColor="#d4d4d4" />
              <stop offset="100%" stopColor="#737373" />
            </linearGradient>
            <linearGradient id="d-beam-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#00f2fe" stopOpacity="1" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="d-beam-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="40%" stopColor="#6366f1" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
            </linearGradient>
            <filter id="d-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Static Traces */}
          <g className="text-neutral-300 dark:text-neutral-800 transition-colors duration-300">
            {desktopStaticTraces.map((trace) => (
              <path
                key={trace.id}
                d={trace.d}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            ))}
            {desktopStaticTraces.map((trace) => (
              <circle
                key={`dot-${trace.id}`}
                cx={trace.dot[0]}
                cy={trace.dot[1]}
                r="3.5"
                className="fill-white dark:fill-neutral-950 stroke-neutral-400 dark:stroke-neutral-700"
                strokeWidth="1.5"
              />
            ))}
          </g>

          {/* Animated Beams */}
          <g filter="url(#d-glow)">
            {desktopBeams.map((beam) => (
              <motion.path
                key={beam.id}
                d={beam.d}
                stroke={`url(#d-${beam.gradient})`}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                strokeDasharray={beam.dashArray}
                initial={{ strokeDashoffset: beam.initialOffset }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: beam.duration,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: beam.delay,
                }}
              />
            ))}
          </g>

          {/* Microchip Pins */}
          <g>
            {/* Left Pins (3 pins) */}
            <rect x="242" y="138" width="8" height="8" rx="1.5" fill="url(#d-pinGradH)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="242" y="156" width="8" height="8" rx="1.5" fill="url(#d-pinGradH)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="242" y="174" width="8" height="8" rx="1.5" fill="url(#d-pinGradH)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />

            {/* Right Pins (3 pins) */}
            <rect x="550" y="138" width="8" height="8" rx="1.5" fill="url(#d-pinGradH)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="550" y="156" width="8" height="8" rx="1.5" fill="url(#d-pinGradH)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="550" y="174" width="8" height="8" rx="1.5" fill="url(#d-pinGradH)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />

            {/* Top Pins (5 pins) */}
            <rect x="290" y="120" width="8" height="8" rx="1.5" fill="url(#d-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="347" y="120" width="8" height="8" rx="1.5" fill="url(#d-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="396" y="120" width="8" height="8" rx="1.5" fill="url(#d-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="449" y="120" width="8" height="8" rx="1.5" fill="url(#d-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="502" y="120" width="8" height="8" rx="1.5" fill="url(#d-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />

            {/* Bottom Pins (3 pins) */}
            <rect x="290" y="192" width="8" height="8" rx="1.5" fill="url(#d-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="396" y="192" width="8" height="8" rx="1.5" fill="url(#d-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
            <rect x="502" y="192" width="8" height="8" rx="1.5" fill="url(#d-pinGradV)" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="0.5" />
          </g>

          {/* Chip Body Rect */}
          <rect
            x="250"
            y="128"
            width="300"
            height="64"
            rx="16"
            ry="16"
            fill="url(#d-chipBg)"
            className="stroke-neutral-700/80 dark:stroke-neutral-800"
            strokeWidth="1.5"
            filter="drop-shadow(0 10px 25px rgba(0,0,0,0.4))"
          />

          {/* Interactive Button */}
          <foreignObject x="250" y="128" width="300" height="64" className="overflow-visible">
            <div className="w-full h-full flex items-center justify-center">
              <Link
                href="/contact"
                className="group/btn relative w-full h-full flex items-center justify-center gap-2 rounded-2xl bg-neutral-950/90 text-white dark:bg-neutral-900/90 border border-neutral-700/50 dark:border-neutral-800 font-semibold text-sm sm:text-base hover:bg-black dark:hover:bg-neutral-800 hover:scale-[1.02] transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span className="absolute top-2.5 left-3 w-1.5 h-1.5 rounded-full bg-neutral-600 dark:bg-neutral-500 pointer-events-none" />
                <span>Let's Talk About Your Project</span>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover/btn:translate-x-1.5 transition-transform duration-300 shrink-0" />
              </Link>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}
