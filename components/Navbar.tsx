'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Home, Compass, BedDouble, Phone, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 1. Initial Entrance Animation (Runs once)
    useGSAP(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power4.out'
            }
        );
    }, []); // Empty dependency array = runs only on mount

    // 2. Scroll Interaction (Runs on scroll state change)
    useGSAP(() => {
        if (scrolled) {
            gsap.to(navRef.current, {
                width: '85%',
                top: '20px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(5, 5, 5, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '0.75rem 2rem',
                duration: 0.6,
                ease: 'power3.inOut'
            });
        } else {
            gsap.to(navRef.current, {
                width: '100%',
                top: '0px',
                borderRadius: '0px',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(0px)',
                border: '1px solid transparent',
                padding: '2rem 1.5rem',
                duration: 0.6,
                ease: 'power3.inOut'
            });
        }
    }, [scrolled]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Tours', href: '/tours' },
        { name: 'Destinations', href: '/destinations' },
        { name: 'Hotels', href: '/hotels' },
        { name: 'Guide \'26', href: '/spiti-travel-guide-2026' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            {/* MOBILE TOP BRANDING */}
            <Link href="/" className="md:hidden fixed top-6 left-6 z-[50] flex items-center gap-3 mix-blend-difference">
                <div className="relative w-8 h-8 overflow-hidden rounded-full border border-white/40">
                    <img
                        src="/logo.jpg"
                        alt="HD"
                        className="object-cover w-full h-full"
                    />
                </div>
                <span className="font-serif font-bold text-white text-xs tracking-widest uppercase text-shadow-sm">
                    Himalayan Discovery
                </span>
            </Link>

            {/* DESKTOP NAVBAR (Hidden on Mobile) */}
            <div className="hidden md:flex fixed top-0 left-0 w-full justify-center z-[100] pointer-events-none">
                <nav
                    ref={navRef}
                    className="pointer-events-auto flex justify-between items-center w-full max-w-7xl transition-all origin-top"
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/20 group-hover:border-[var(--gold-accent)] transition-colors">
                            <img
                                src="/logo.jpg"
                                alt="Himalayan Discovery Logo"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <span className={`font-serif font-bold tracking-widest uppercase text-sm text-white group-hover:text-[var(--gold-accent)] transition-colors ${scrolled ? 'hidden xl:block' : 'block'}`}>
                            HIMALAYAN DISCOVERY
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-[#fbbf24] hover:tracking-[0.25em] ${pathname === link.href ? 'text-[#fbbf24]' : 'text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Action */}
                    <Link
                        href="/tours"
                        className="flex items-center gap-2 px-6 py-2.5 bg-white text-black hover:bg-[var(--gold-accent)] text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Book Trip <ArrowRight className="w-3 h-3" />
                    </Link>
                </nav>
            </div>

            {/* MOBILE BOTTOM NAVBAR (Cinematic Dock) */}
            <div className={`md:hidden fixed z-[100] bottom-6 inset-x-4 transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-32 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto'}`}>
                <nav className="w-full bg-[#111]/90 backdrop-blur-2xl border border-white/10 rounded-2xl h-16 px-6 flex items-center justify-between shadow-2xl shadow-black/80 ring-1 ring-white/5">

                    <Link href="/" className={`flex flex-col items-center gap-1 text-white/50 hover:text-[var(--gold-accent)] transition-colors ${pathname === '/' ? 'text-[var(--gold-accent)]' : ''}`}>
                        <Home size={20} className="stroke-[1.5]" />
                        <span className="text-[9px] font-medium uppercase tracking-wider">Home</span>
                    </Link>

                    <Link href="/tours" className={`flex flex-col items-center gap-1 text-white/50 hover:text-[var(--gold-accent)] transition-colors ${pathname === '/tours' ? 'text-[var(--gold-accent)]' : ''}`}>
                        <Compass size={20} className="stroke-[1.5]" />
                        <span className="text-[9px] font-medium uppercase tracking-wider">Tours</span>
                    </Link>

                    {/* Central Menu Trigger */}
                    <div className="relative -top-5">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="w-14 h-14 rounded-full bg-[var(--gold-accent)] text-black flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:scale-105 transition-transform border-4 border-[#0a0a0a]"
                        >
                            <Menu size={24} className="stroke-[2.5]" />
                        </button>
                    </div>

                    <Link href="/hotels" className={`flex flex-col items-center gap-1 text-white/50 hover:text-[var(--gold-accent)] transition-colors ${pathname === '/hotels' ? 'text-[var(--gold-accent)]' : ''}`}>
                        <BedDouble size={20} className="stroke-[1.5]" />
                        <span className="text-[9px] font-medium uppercase tracking-wider">Stays</span>
                    </Link>

                    <Link href="/contact" className={`flex flex-col items-center gap-1 text-white/50 hover:text-[var(--gold-accent)] transition-colors ${pathname === '/contact' ? 'text-[var(--gold-accent)]' : ''}`}>
                        <Phone size={20} className="stroke-[1.5]" />
                        <span className="text-[9px] font-medium uppercase tracking-wider">Call</span>
                    </Link>

                </nav>
            </div>

            {/* Cinematic Mobile Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-zinc-950 flex flex-col justify-center px-8 transition-all duration-700 cubic-bezier(0.87, 0, 0.13, 1) ${isOpen ? 'clip-path-open opacity-100 pointer-events-auto' : 'clip-path-closed opacity-0 pointer-events-none'}`}
                style={{ clipPath: isOpen ? 'circle(150% at 50% 100%)' : 'circle(0% at 50% 100%)' }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20 pointer-events-none" />

                <div className="absolute top-6 right-6 z-10">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                <div className="flex flex-col gap-6 relative z-10">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="mobile-nav-link text-5xl font-serif font-light text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-4 group"
                            style={{
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateY(0)' : 'translateY(50px)',
                                transition: `all 0.5s cubic-bezier(0.21, 1.02, 0.73, 1) ${0.1 + i * 0.1}s`
                            }}
                        >
                            <span className="text-xs font-sans text-[var(--gold-accent)] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                0{i + 1}
                            </span>
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile CTA */}
                    <div
                        className="mt-8 pt-8 border-t border-white/10"
                        style={{
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                            transition: `all 0.5s cubic-bezier(0.21, 1.02, 0.73, 1) 0.6s`
                        }}
                    >
                        <Link
                            href="/tours"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold-accent)] text-black font-bold uppercase tracking-widest rounded-full"
                        >
                            Book Your Journey <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div
                        className="flex gap-8 mt-4"
                        style={{
                            opacity: isOpen ? 1 : 0,
                            transition: `opacity 0.5s ease 0.8s`
                        }}
                    >
                        <a href="#" className="text-white/40 text-xs uppercase tracking-widest hover:text-[var(--gold-accent)]">Insta</a>
                        <a href="#" className="text-white/40 text-xs uppercase tracking-widest hover:text-[var(--gold-accent)]">Fb</a>
                        <a href="#" className="text-white/40 text-xs uppercase tracking-widest hover:text-[var(--gold-accent)]">X</a>
                    </div>
                </div>
            </div>
        </>
    );
}
