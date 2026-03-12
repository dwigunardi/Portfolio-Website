'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ShowMoreProps {
    children: React.ReactNode;
    maxHeight?: number; // in px, default 100
    className?: string;
}

export default function ShowMore({
    children,
    maxHeight = 250,
    className,
}: ShowMoreProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [needsTruncation, setNeedsTruncation] = useState(false);
    const [fullHeight, setFullHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const height = contentRef.current.scrollHeight;
            setFullHeight(height);
            setNeedsTruncation(height > maxHeight);
        }
    }, [children, maxHeight]);

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    const expandedHeight = fullHeight || 1000; // fallback

    return (
        <div className={cn('relative', className)}>
            {/* Hidden div to measure full height */}
            <div
                ref={contentRef}
                className="absolute opacity-0 pointer-events-none w-full"
            >
                {children}
            </div>
            <div className="relative">
                <motion.div
                    initial={false}
                    animate={{
                        maxHeight: isExpanded ? expandedHeight : maxHeight,
                        overflow: 'hidden',
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                    }}
                >
                    <div>{children}</div>
                </motion.div>
                <AnimatePresence>
                    {!isExpanded && needsTruncation && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black to-transparent pointer-events-none"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Tombol Show More / Less */}
            {needsTruncation && (
                <button
                    onClick={toggleExpanded}
                    className="mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-200 font-medium flex items-center gap-1 p-0 border-0 bg-transparent hover:bg-transparent hover:underline focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent focus-visible:ring-opacity-0 hover:cursor-pointer"
                >
                    <AnimatePresence mode="wait">
                        {isExpanded ? (
                            <motion.span
                                key="show-less"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                Show less
                            </motion.span>
                        ) : (
                            <motion.span
                                key="show-more"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                Show more
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            )}
        </div>
    );
}