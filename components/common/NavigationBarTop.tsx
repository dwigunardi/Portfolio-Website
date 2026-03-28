"use client";

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/default-navbar";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes"; // Import next-themes
import { Sun, Moon } from "lucide-react"; // Import ikon dari lucide-react

export default function NavigationBarTop() {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About Me", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShrunk, setIsShrunk] = useState(false);
    const router = useRouter();
    
    // Hooks untuk Dark Mode
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const { scrollY } = useScroll();
    const lenis = useLenis();

    // Mencegah Hydration Error pada icon tema
    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current > 100) {
            setIsShrunk(true);
        } else {
            setIsShrunk(false);
        }
    });

    const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; link: string }) => {
        if (item.link.startsWith("#")) {
            e.preventDefault(); 
            if (item.link === "#home") {
                lenis?.scrollTo(0); 
            } else {
                lenis?.scrollTo(item.link); 
            }
        } else {
            router.push(item.link);
        }
    };

    // --- KOMPONEN TOMBOL THEME ---
    const ThemeToggleButton = () => {
        if (!mounted) return <div className="w-10 h-10" />;

        return (
            <button
                onClick={() => {
                    console.log("Current theme:", theme);
                    setTheme(theme === "dark" ? "light" : "dark");
                }}
                // PERBAIKAN: Tambahkan relative, z-[60], dan pointer-events-auto
                className="cursor-pointer relative z-[60] pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-300"
                aria-label="Toggle Dark Mode"
            >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        );
    };

    return (
        <div className="pointer-events-none relative z-50">
            <div className="pointer-events-auto">
                <Navbar isShrunk={isShrunk}>
                    
                    {/* --- DESKTOP NAVIGATION --- */}
                    <NavBody isShrunk={isShrunk}>
                        <NavbarLogo theme={theme === "dark" ? "light" : "dark"} />
                        <NavItems items={navItems} onItemClick={handleItemClick} />
                        
                        {/* Tambahkan Theme Toggle di kanan Desktop */}
                        <div className="flex items-center gap-4 relative z-50 pointer-events-auto">
                            <ThemeToggleButton />
                        </div>
                    </NavBody>

                    {/* --- MOBILE NAVIGATION --- */}
                    <MobileNav isShrunk={isShrunk}>
                        <MobileNavHeader>
                            <NavbarLogo theme={theme === "dark" ? "light" : "dark"} />
                            <MobileNavToggle
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </MobileNavHeader>

                        <MobileNavMenu
                            isOpen={isMobileMenuOpen}
                            onClose={() => setIsMobileMenuOpen(false)}
                        >
                            {navItems.map((item, idx) => (
                                <Link
                                    key={`mobile-link-${idx}`}
                                    href={item.link}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsMobileMenuOpen(false);
                                        
                                        if (item.link.startsWith("#")) {
                                            if (item.link === "#home") lenis?.scrollTo(0);
                                            else lenis?.scrollTo(item.link);
                                        } else {
                                            router.push(item.link);
                                        }
                                    }}
                                    className="relative text-neutral-600 dark:text-neutral-300 py-2 text-lg font-medium"
                                >
                                    <span className="block">{item.name}</span>
                                </Link>
                            ))}

                            {/* Tambahkan Theme Toggle di dalam Menu Mobile */}
                            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4">
                                <span className="text-neutral-600 dark:text-neutral-300 font-medium">Theme</span>
                                <ThemeToggleButton />
                            </div>
                        </MobileNavMenu>
                    </MobileNav>
                    
                </Navbar>
            </div>
        </div>
    );
}