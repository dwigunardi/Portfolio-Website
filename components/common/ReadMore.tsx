'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface ReadMoreProps {
    text: string;
    maxLines?: number;
    className?: string;
    lineHeight?: number; // in rem, default 1.5
}

export default function ReadMore({
    text,
    maxLines = 2,
    className,
    lineHeight = 1.5,
}: ReadMoreProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [needsTruncation, setNeedsTruncation] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

    const collapsedHeight = maxLines * lineHeight * 16; // convert rem to px (assuming 16px base)
    const expandedHeight = 1000; // large enough for most texts

    useEffect(() => {
        if (textRef.current) {
            const fullHeight = textRef.current.scrollHeight;
            setNeedsTruncation(fullHeight > collapsedHeight);
        }
    }, [text, collapsedHeight]);

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    return (
        <div className={cn('relative', className)}>
            {/* Hidden div to measure full height */}
            <div
                ref={textRef}
                className="absolute opacity-0 pointer-events-none text-sm leading-relaxed"
                style={{
                    lineHeight: `${lineHeight}rem`,
                    width: '100%',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                }}
            >
                {text}
            </div>

            <motion.div
                initial={false}
                animate={{
                    maxHeight: isExpanded ? expandedHeight : collapsedHeight,
                    overflow: 'hidden',
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
                className="text-sm leading-relaxed"
                style={{
                    lineHeight: `${lineHeight}rem`,
                }}
            >
                {text}
            </motion.div>

            {needsTruncation && (
                <Button
                    onClick={toggleExpanded}
                    className="mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-200 font-medium p-0 border-0 bg-transparent hover:bg-transparent hover:underline focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent focus-visible:ring-opacity-0 hover:cursor-pointer"
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
                                key="read-more"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                ...Read more
                            </motion.span>
                        )}
                    </AnimatePresence>
                </Button>
            )}
        </div>
    );
}
