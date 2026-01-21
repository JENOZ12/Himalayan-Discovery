'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { seoPages } from '@/lib/seo-data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DestinationsIndex() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // Desktop: Vertical Shear
        mm.add("(min-width: 768px)", () => {
            gsap.to('.col-left', {
                yPercent: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.destinations-grid',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            gsap.fromTo('.col-right',
                { y: -200 },
                {
                    y: 200,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.destinations-grid',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                }
            );
        });

        // Mobile: Staggered Fade Up
        mm.add("(max-width: 767px)", () => {
            gsap.from('.group', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.destinations-grid',
                    start: 'top 80%'
                }
            });
        });

    }, { scope: container });

    // Split data into two columns
    const leftCol = seoPages.filter((_, i) => i % 2 === 0);
    const rightCol = seoPages.filter((_, i) => i % 2 !== 0);

    return (
        <main ref={container} className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-[var(--gold-accent)] selection:text-black">

            <div className="pt-32 pb-24 px-6 container mx-auto text-center relative z-10">
                <span className="text-[var(--gold-accent)] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Atlas</span>
                <h1 className="text-5xl md:text-8xl font-serif mb-6 text-white leading-none">
                    Uncharted <span className="italic text-white/40">Territories</span>
                </h1>
            </div>

            <section className="px-6 pb-24 destinations-grid">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative">

                        {/* Left Column (Moves Up) */}
                        <div className="col-left space-y-24">
                            {leftCol.map((page) => (
                                <Link href={`/destinations/${page.slug}`} key={page.slug} className="group block">
                                    <div className="relative overflow-hidden aspect-[3/4] rounded-sm mb-6">
                                        <div className="absolute inset-0 bg-[var(--gold-accent)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <img
                                            src={page.heroImage}
                                            alt={page.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <h3 className="text-4xl font-serif text-white group-hover:text-[var(--gold-accent)] transition-colors">
                                        {page.title.split(' | ')[0]}
                                    </h3>
                                    <p className="text-white/40 mt-2 text-sm uppercase tracking-widest">{page.subtitle}</p>
                                </Link>
                            ))}
                        </div>

                        {/* Right Column (Moves Down - Reverse Shear) */}
                        <div className="col-right space-y-24 pt-24 md:pt-0">
                            {rightCol.map((page) => (
                                <Link href={`/destinations/${page.slug}`} key={page.slug} className="group block">
                                    <div className="relative overflow-hidden aspect-[3/4] rounded-sm mb-6">
                                        <div className="absolute inset-0 bg-[var(--gold-accent)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <img
                                            src={page.heroImage}
                                            alt={page.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <h3 className="text-4xl font-serif text-white group-hover:text-[var(--gold-accent)] transition-colors">
                                        {page.title.split(' | ')[0]}
                                    </h3>
                                    <p className="text-white/40 mt-2 text-sm uppercase tracking-widest">{page.subtitle}</p>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
