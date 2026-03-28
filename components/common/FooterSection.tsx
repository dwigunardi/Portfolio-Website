import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-neutral-800/50 bg-neutral-950 px-6 py-8 relative z-20">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Bagian Kiri: Nama & Copyright */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="text-neutral-400 text-sm font-medium">
                        © {currentYear} Dwi Gunardi M. All rights reserved.
                    </p>
                    <p className="text-neutral-600 text-xs">
                        Crafted with Next.js, Tailwind CSS & Framer Motion.
                    </p>
                </div>

                {/* Bagian Kanan: Social Links */}
                <div className="flex items-center gap-6">
                    <Link 
                        href="https://github.com/dwigunardi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors duration-300"
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
                    >
                        <IconMail stroke={1.5} className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}