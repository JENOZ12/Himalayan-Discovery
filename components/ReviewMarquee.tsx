'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { reviews } from '@/lib/data';
import { Star } from 'lucide-react';

export default function ReviewMarquee({ reviews: customReviews }: { reviews?: typeof reviews }) {
    const container = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    const displayReviews = customReviews || reviews;

    useGSAP(() => {
        const marquee = marqueeRef.current;
        if (!marquee || displayReviews.length === 0) return;

        // Clone content for seamless loop
        const content = marquee.innerHTML;
        marquee.innerHTML = content + content; // Duplicate once

        const width = marquee.scrollWidth / 2; // Original width

        gsap.to(marquee, {
            x: -width,
            duration: 100, // Adjust speed (seconds)
            ease: "none",
            repeat: -1
        });

    }, { scope: container, dependencies: [displayReviews] });

    if (displayReviews.length === 0) return null;

    return (
        <section ref={container} className="py-24 bg-[#050505] overflow-hidden border-t border-white/5 relative selection:bg-[#fbbf24] selection:text-black">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

            <div className="container mx-auto px-6 mb-12 text-center">
                <span className="text-[#fbbf24] font-mono text-xs uppercase tracking-[0.3em] block mb-4">Community</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white">What Travelers Say</h2>
            </div>

            <div className="flex w-full overflow-hidden select-none cursor-grab active:cursor-grabbing">
                <div ref={marqueeRef} className="flex gap-8 md:gap-16 items-center whitespace-nowrap pl-6">
                    {displayReviews.map((review) => (
                        <div key={review.id} className="inline-flex flex-col gap-3 md:gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                            <div className="text-lg md:text-2xl font-serif text-white leading-tight max-w-[70vw] md:max-w-xl text-wrap">
                                "{review.text}"
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#fbbf24] fill-[#fbbf24]" />
                                    ))}
                                </div>
                                <span className="text-[10px] md:text-xs font-mono font-bold uppercase text-[#fbbf24] tracking-widest">
                                    // {review.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
