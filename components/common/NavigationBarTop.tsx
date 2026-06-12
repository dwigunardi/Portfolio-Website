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

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, HomeIcon, UserRound, Mail, type LucideIcon } from "lucide-react";
import { NAV_ITEMS } from "@/const/routes-list";

const iconMap: Record<string, LucideIcon> = {
    Home: HomeIcon,
    UserRound: UserRound,
    Mail: Mail,
};

export default function NavigationBarTop() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShrunk, setIsShrunk] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
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

    const isActiveRoute = (link: string) => {
        if (link === "/") return pathname === "/";
        return pathname.startsWith(link);
    };

    const ThemeToggleButton = () => {
        if (!mounted) return <div className="w-10 h-10" />;

        return (
            <button
                onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                }}
                className="cursor-pointer relative z-60 pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-300"
                aria-label="Toggle Dark Mode"
            >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
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
                        <NavItems items={NAV_ITEMS} onItemClick={handleItemClick} />
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
                            className="items-stretch! gap-0! py-6! px-5!"
                        >
                            {/* Nav Items — full width, left-aligned, staggered */}
                            <nav className="flex flex-col w-full gap-1">
                                {NAV_ITEMS.map((item, idx) => {
                                    const Icon = iconMap[item.iconName];
                                    const isActive = isActiveRoute(item.link);

                                    return (
                                        <motion.div
                                            key={`mobile-link-${idx}`}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: idx * 0.07,
                                                duration: 0.3,
                                                ease: "easeOut",
                                            }}
                                        >
                                            <Link
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
                                                className={`
                                                    group relative flex items-center gap-4 w-full px-4 py-3.5 rounded-xl
                                                    transition-all duration-200 ease-out
                                                    ${isActive
                                                        ? "bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400"
                                                        : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                                                    }
                                                `}
                                            >
                                                {/* Active indicator bar */}
                                                <span
                                                    className={`
                                                        absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-200
                                                        ${isActive ? "h-6 bg-blue-500 dark:bg-blue-400" : "h-0 bg-transparent"}
                                                    `}
                                                />

                                                {/* Icon */}
                                                <span className={`
                                                    flex items-center justify-center w-10 h-10 rounded-lg
                                                    transition-colors duration-200
                                                    ${isActive
                                                        ? "bg-blue-500/15 dark:bg-blue-400/15"
                                                        : "bg-neutral-200/70 dark:bg-neutral-800 group-hover:bg-neutral-300/70 dark:group-hover:bg-neutral-700"
                                                    }
                                                `}>
                                                    {Icon && <Icon size={20} />}
                                                </span>

                                                {/* Label */}
                                                <span className="text-[15px] font-medium">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Footer — theme toggle */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.25, duration: 0.3 }}
                                className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between w-full px-4"
                            >
                                <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                                    Theme
                                </span>
                                <ThemeToggleButton />
                            </motion.div>
                        </MobileNavMenu>
                    </MobileNav>

                </Navbar>
            </div>
        </div>
    );
}