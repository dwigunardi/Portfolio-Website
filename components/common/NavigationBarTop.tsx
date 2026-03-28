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
} from "@/components/ui/default-navbar"; // Pastikan path ini mengarah ke komponen kloningan baru kita

import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavigationBarTop() {
    // Daftar menu navigasi Anda
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About Me", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShrunk, setIsShrunk] = useState(false);
    const router = useRouter();
    
    // Hooks untuk scroll dan smooth scrolling
    const { scrollY } = useScroll();
    const lenis = useLenis();

    // Memantau posisi scroll layar
    useMotionValueEvent(scrollY, "change", (current) => {
        // Jika layar di-scroll lebih dari 50px ke bawah, trigger animasi menyusut (shrink)
        if (current > 100) {
            setIsShrunk(true);
        } else {
            // Jika kembali ke paling atas, kembalikan ke ukuran penuh (full width)
            setIsShrunk(false);
        }
    });

    // Fungsi klik menu yang sudah diintegrasikan dengan Lenis Smooth Scroll
    const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; link: string }) => {
        if (item.link.startsWith("#")) {
            e.preventDefault(); // Cegah lompatan kasar bawaan browser

            if (item.link === "#home") {
                lenis?.scrollTo(0); // Scroll mulus ke kordinat 0 (paling atas)
            } else {
                lenis?.scrollTo(item.link); // Scroll mulus ke ID tujuan
            }
        } else {
            // Jika link mengarah ke halaman eksternal/lain
            router.push(item.link);
        }
    };

    return (
        // pointer-events-none di luar agar area kosong di kiri/kanan navbar tidak menghalangi klik ke Hero Section
        <div className="pointer-events-none relative z-50">
            
            {/* pointer-events-auto mengembalikan fungsi klik hanya pada area navbar itu sendiri */}
            <div className="pointer-events-auto">
                
                {/* Kita kirimkan status isShrunk ke komponen UI Navbar */}
                <Navbar isShrunk={isShrunk}>
                    
                    {/* --- DESKTOP NAVIGATION --- */}
                    <NavBody isShrunk={isShrunk}>
                        <NavbarLogo />
                        <NavItems items={navItems} onItemClick={handleItemClick} />
                        {/* <div className="flex items-center gap-4">
                            <NavbarButton variant="secondary">Login</NavbarButton>
                            <NavbarButton variant="primary">Book a call</NavbarButton>
                        </div> */}
                    </NavBody>

                    {/* --- MOBILE NAVIGATION --- */}
                    <MobileNav isShrunk={isShrunk}>
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
                                <Link
                                    key={`mobile-link-${idx}`}
                                    href={item.link}
                                    onClick={(e) => {
                                        // Integrasi Lenis untuk menu versi Mobile
                                        e.preventDefault();
                                        setIsMobileMenuOpen(false); // Tutup menu setelah diklik
                                        
                                        if (item.link.startsWith("#")) {
                                            if (item.link === "#home") lenis?.scrollTo(0);
                                            else lenis?.scrollTo(item.link);
                                        } else {
                                            window.location.href = item.link;
                                        }
                                    }}
                                    className="relative text-neutral-600 dark:text-neutral-300 py-2 text-lg font-medium"
                                >
                                    <span className="block">{item.name}</span>
                                </Link>
                            ))}
                            <div className="flex w-full flex-col gap-4 mt-4">
                                <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                                    Login
                                </NavbarButton>
                                <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                                    Book a call
                                </NavbarButton>
                            </div>
                        </MobileNavMenu>
                    </MobileNav>
                    
                </Navbar>
            </div>
        </div>
    );
}