"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { useLenis } from "lenis/react";

export function NavigationBar() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "Pricing",
            link: "#pricing",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    const ref = useRef<HTMLDivElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const lenis = useLenis();

    useMotionValueEvent(scrollY, "change", (current) => {
        const heroHeight = typeof window !== "undefined" ? window.innerHeight : 800;
        const previous = scrollY.getPrevious() ?? 0
        if (current > heroHeight + 10 && current > previous) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; link: string }) => {
        if (item.link.startsWith("#")) {
            e.preventDefault(); // Mencegah browser melompat seketika (mencegah konflik)

            if (item.link === "#home") {
                lenis?.scrollTo(0); // Scroll mulus ke paling atas
            } else {
                lenis?.scrollTo(item.link); // Lenis bisa langsung membaca ID seperti "#pricing"
            }
        } else {
            window.location.href = item.link;
        }
    };

    return (
        <div ref={ref} className={`relative z-50 w-full ${isVisible ? "visible" : "invisible"}`}>
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} onItemClick={handleItemClick} />
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
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
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Book a call
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            {/* Navbar */}
        </div>
    );
}