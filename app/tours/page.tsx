'use client';

import { useRef, useState, useEffect } from 'react';

import ReviewMarquee from '@/components/ReviewMarquee';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Star, ArrowDown, MapPin, Calendar, Compass, Clock } from 'lucide-react';
import Link from 'next/link';
import { tours } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

import FilmStripGallery from '@/components/FilmStripGallery';

const categories = ["All", "Adventure", "Road Trip", "Cultural", "Expedition"];

export default function ToursPage() {
    const container = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredTours, setFilteredTours] = useState(tours);

    useEffect(() => {
        if (activeCategory === "All") {
            setFilteredTours(tours);
        } else {
            setFilteredTours(tours.filter(t => t.category === activeCategory));
        }
    }, [activeCategory]);

    useGSAP(() => {
        // Hero Parallax
        gsap.to('.hero-bg', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        });

        // "Vertical Cinema" Card Animations
        const cards = gsap.utils.toArray('.cinema-card');
        cards.forEach((card: any) => {
            // Image Parallax inside card
            const img = card.querySelector('img');
            gsap.fromTo(img,
                { yPercent: -15, scale: 1.1 },
                {
                    yPercent: 15,
                    scale: 1.1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

            // Text Reveal
            const text = card.querySelector('.card-content');
            gsap.from(text, {
                y: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: 1
                }
            });
        });

    }, { scope: container, dependencies: [filteredTours] });

    return (
        <main ref={container} className="bg-[#050505] text-white selection:bg-[#fbbf24] selection:text-black">


            {/* Hero Section */}
            <section className="hero-section relative h-[60vh] overflow-hidden flex items-end pb-12 md:pb-24">
                <div className="hero-bg absolute inset-0 z-0">
                    <img
                        src="/images/spiti-suv.png"
                        className="w-full h-[140%] object-cover opacity-50 brightness-[0.6]"
                        alt="Expedition Journal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="block text-[#fbbf24] font-mono text-xs tracking-[0.4em] mb-4 uppercase animate-pulse">The Collection</span>
                    <h1 className="text-6xl md:text-9xl font-bold font-serif tracking-tighter leading-none mb-6">
                        EXPEDITIONS
                    </h1>

                    {/* Minimal Centered Filters */}
                    <div className="flex flex-wrapjustify-center gap-4 md:gap-8 mt-12 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${activeCategory === cat
                                    ? 'border-[#fbbf24] text-[#fbbf24] bg-[#fbbf24]/10'
                                    : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Film Strip Gallery (Reverse Parallax) */}
            <FilmStripGallery />

            {/* Vertical Cinema List */}
            <section className="py-24 px-4 md:px-0">
                <div className="flex flex-col gap-32 md:gap-48 max-w-[1600px] mx-auto">

                    {filteredTours.map((tour, index) => (
                        <div key={tour.id} className="cinema-card group relative grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center w-full">

                            {/* Visual Side (Image) */}
                            <div className={`md:col-span-8 relative h-[60vh] md:h-[85vh] overflow-hidden rounded-sm w-full ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <div className="absolute inset-0 bg-[#fbbf24] w-full h-full z-0 group-hover:opacity-10 transition-opacity duration-700" />
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-[140%] object-cover object-center brightness-[0.8] group-hover:brightness-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6 z-20 flex gap-4">
                                    <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                                        <Clock className="w-3 h-3 text-[#fbbf24]" />
                                        <span className="text-xs font-bold uppercase tracking-wider">{tour.days}</span>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                                        <Compass className="w-3 h-3 text-[#fbbf24]" />
                                        <span className="text-xs font-bold uppercase tracking-wider">{tour.difficulty}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Narrative Side (Content) */}
                            <div className={`card-content md:col-span-4 p-8 relative z-20 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1 md:text-right'}`}>
                                {/* Huge Number Background */}
                                <div className={`hidden md:block absolute -top-20 text-[12rem] font-serif font-bold text-[#fbbf24]/5 leading-none select-none pointer-events-none ${index % 2 === 0 ? '-left-20' : '-right-20'}`}>
                                    0{index + 1}
                                </div>

                                <span className="text-[#fbbf24] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
                                    {tour.category}
                                </span>

                                <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
                                    {tour.title}
                                </h2>

                                <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
                                    {tour.description}
                                </p>

                                <div className={`flex flex-wrap gap-2 mb-10 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                    {tour.highlights.slice(0, 3).map((h, i) => (
                                        <span key={i} className="px-3 py-1 border border-white/10 rounded-sm text-[10px] uppercase tracking-widest text-white/50">
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                <div className={`flex items-center gap-6 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                    <div>
                                        <span className="block text-[10px] uppercase text-white/30 tracking-widest mb-1">Starting From</span>
                                        <span className="text-2xl font-bold font-mono">{tour.price}</span>
                                    </div>
                                    <Link href={`/tours/${tour.id}`} className="w-16 h-16 bg-[#fbbf24] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300">
                                        <ArrowRight className="w-6 h-6 -rotate-45" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}

                    {/* Reviews */}
                    <ReviewMarquee />

                    {/* Footer CTA */}
                    <div className="text-center py-24 border-t border-white/10">
                        <Star className="w-12 h-12 text-[#fbbf24] mx-auto mb-6 animate-spin-slow" />
                        <h3 className="text-4xl font-serif mb-6">Your Journey Awaits</h3>
                        <Link href="/contact" className="inline-block px-12 py-4 border border-[#fbbf24] text-[#fbbf24] font-bold uppercase tracking-widest hover:bg-[#fbbf24] hover:text-black transition-all">
                            Start Planning
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}
