import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function Footer({ className }: Readonly<{ className?: string }> = {}) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={cn("w-full bg-transparent px-6 pb-6 md:pb-8 pt-0 relative z-20", className)}>
            {/* Gradient Fade Divider (Halus & pudar di kiri-kanan) */}
            <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-neutral-300/80 dark:via-neutral-800/90 to-transparent mb-6 md:mb-8" />
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">
                        © {currentYear} Dwi Gunardi M. All rights reserved.
                    </p>
                    <p className="text-neutral-400 dark:text-neutral-600 text-xs">
                        Crafted with Next.js, Tailwind CSS & Framer Motion.
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/dwigunardi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 dark:text-neutral-500 dark:hover:text-white hover:text-black transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <IconBrandGithub stroke={1.5} className="w-6 h-6" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/dwigm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-blue-500 transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <IconBrandLinkedin stroke={1.5} className="w-6 h-6" />
                    </Link>

                    <Link
                        href="mailto:dwigunardi98@gmail.com"
                        className="text-neutral-500 hover:text-red-400 transition-colors duration-300"
                        aria-label="Email"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconMail stroke={1.5} className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}