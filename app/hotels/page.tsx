'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MapPin, Star, ArrowUpRight, Sparkles, Mountain, Filter } from 'lucide-react';
import Link from 'next/link';
import { hotels } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function HotelsPage() {
    const container = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState<string>('ALL');

    const hotelTypes = ['ALL', ...new Set(hotels.map(h => h.type))];

    const filteredHotels = activeFilter === 'ALL'
        ? hotels
        : hotels.filter(h => h.type === activeFilter);

    useGSAP(() => {
        // Hero parallax
        gsap.to('.hero-bg', {
            yPercent: 30,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        });

        // Title reveal
        gsap.from('.hero-title span', {
            y: 120,
            opacity: 0,
            rotateX: 90,
            duration: 1.2,
            stagger: 0.08,
            ease: 'power4.out',
        });

        // Subtitle reveal
        gsap.from('.hero-subtitle', {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out',
        });
    }, { scope: container });

    // Separate hook for grid to handle filter changes
    useGSAP(() => {
        // Kill any existing ScrollTriggers for cards to prevent duplicates
        ScrollTrigger.getAll().forEach(st => {
            if (st.vars.trigger === '.hotels-grid' || (st.vars.trigger as string)?.includes('.hotel-card')) {
                st.kill();
            }
        });

        gsap.fromTo('.hotel-card',
            {
                y: 50,
                opacity: 0,
                scale: 0.95
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: 'all', // Ensure clean state after animation
                scrollTrigger: {
                    trigger: '.hotels-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, { scope: container, dependencies: [activeFilter] });

    return (
        <main ref={container} className="min-h-screen bg-[var(--background)] selection:bg-[var(--gold-accent)] selection:text-black">
            {/* Hero Section */}
            <section className="hero-section relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Parallax Background */}
                <div className="hero-bg absolute inset-0 scale-110">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--background)] z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
                        alt="Luxury Mountain Resort"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 md:left-20 opacity-30">
                    <Mountain className="w-16 h-16 md:w-24 md:h-24 text-[var(--gold-accent)]" />
                </div>
                <div className="absolute bottom-20 right-10 md:right-20 opacity-20">
                    <Sparkles className="w-12 h-12 md:w-20 md:h-20 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-20 text-center px-6">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-8 h-[1px] bg-[var(--gold-accent)]" />
                        <span className="text-[var(--gold-accent)] font-mono text-xs tracking-[0.3em] uppercase">
                            Curated Stays
                        </span>
                        <div className="w-8 h-[1px] bg-[var(--gold-accent)]" />
                    </div>

                    <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter mb-6 overflow-hidden">
                        <span className="inline-block">HIMALAYAN</span>
                        <br />
                        <span className="inline-block text-[var(--gold-accent)]">SANCTUARIES</span>
                    </h1>

                    <p className="hero-subtitle max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-light leading-relaxed">
                        From cozy riverside retreats to luxury mountain lodges.
                        <br className="hidden md:block" />
                        Handpicked accommodations that make your journey unforgettable.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
                    <span className="text-white/40 text-xs font-mono tracking-widest uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-20 z-40 py-4 px-6 bg-[var(--background)]/90 backdrop-blur-xl border-b border-white/5">
                <div className="container mx-auto">
                    <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        <Filter className="w-4 h-4 text-white/40 flex-shrink-0" />
                        {hotelTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveFilter(type)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeFilter === type
                                    ? 'bg-[var(--gold-accent)] text-black'
                                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bento Grid Hotels */}
            <section className="hotels-grid py-16 md:py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredHotels.map((hotel, index) => {
                            // Cinematic irregular grid pattern: 2-1, 1-2, 2-1...
                            const isLarge = index % 4 === 0 || index % 4 === 3;

                            return (
                                <Link
                                    href={`/hotels/${hotel.id}`}
                                    key={hotel.id}
                                    className={`hotel-card group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--gold-accent)]/50 transition-all duration-500 ${isLarge ? 'lg:col-span-2' : 'lg:col-span-1'
                                        }`}
                                >
                                    {/* Image Container with Fixed Cinematic Height */}
                                    <div className="relative h-[400px] lg:h-[550px] w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />

                                        <img
                                            src={hotel.image}
                                            alt={hotel.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Type Badge */}
                                        <div className="absolute top-6 left-6 z-20 transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                                            <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md text-[var(--gold-accent)] text-xs font-bold uppercase tracking-[0.2em] rounded-sm border border-[var(--gold-accent)]/30">
                                                {hotel.type}
                                            </span>
                                        </div>

                                        {/* Rating */}
                                        <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                                            <Star className="w-3.5 h-3.5 fill-[var(--gold-accent)] text-[var(--gold-accent)]" />
                                            <span className="text-white text-xs font-bold tracking-wider">{hotel.rating}.0</span>
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-2 text-white/70 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span className="font-mono tracking-wider uppercase text-xs">{hotel.location}</span>
                                            </div>

                                            <h3 className={`font-serif font-bold text-white mb-3 leading-none transition-all duration-300 group-hover:text-[var(--gold-accent)] ${isLarge ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'
                                                }`}>
                                                {hotel.name}
                                            </h3>

                                            <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <p className="text-white/70 font-light leading-relaxed mb-6 text-sm md:text-base max-w-xl">
                                                    {hotel.description}
                                                </p>

                                                <div className="flex items-center justify-between border-t border-white/20 pt-6">
                                                    <span className="text-white font-mono text-lg">{hotel.price}</span>
                                                    <div className="flex items-center gap-2 text-black bg-[var(--gold-accent)] px-4 py-2 rounded-full font-bold uppercase text-xs tracking-widest">
                                                        View Property <ArrowUpRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/30">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Can't find the perfect stay?
                    </h2>
                    <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                        Let us curate a personalized accommodation experience tailored to your preferences and travel style.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--gold-accent)] text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all group"
                    >
                        <span>Get Custom Recommendations</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
