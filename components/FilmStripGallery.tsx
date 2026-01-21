'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FILM_IMAGES = [
    // New Cinematic Generations
    "/visual-journey/langza.png",
    "/visual-journey/dhankar.png",
    "/visual-journey/nako.png",
    "/visual-journey/kunzum.png",
    // Classics
    "/visual-journey/key.png",
    "/visual-journey/chandratal.png",
    "/visual-journey/kaza.png",
    "/visual-journey/pin-valley.png",
    "/visual-journey/kalpa.png",
    "/visual-journey/chitkul.png",
    // Hero Collection
    "/hero/spiti.png",
    "/hero/kinnaur.png",
    "/hero/pabbar.png",
    "/hero/shimla.png",
    "/hero/grand.png",
    // Repeats for Length
    "/visual-journey/langza.png",
    "/visual-journey/dhankar.png",
    "/visual-journey/nako.png",
    "/visual-journey/kunzum.png",
    "/visual-journey/key.png"
];

export default function FilmStripGallery() {
    const container = useRef<HTMLDivElement>(null);
    const stripRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const strip = stripRef.current;
        if (!strip) return;

        // Calculate total width to scroll
        const scrollWidth = strip.scrollWidth - window.innerWidth;

        gsap.to(strip, {
            x: -scrollWidth, // Move Left
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // Smooth scrub
            }
        });

    }, { scope: container });

    return (
        <div ref={container} className="relative py-24 bg-[#050505] overflow-hidden">

            {/* Cinematic Label */}
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <h3 className="text-white/50 text-xs uppercase tracking-[0.3em]">Visual Archives</h3>
                <div className="h-px w-32 bg-white/20" />
            </div>

            {/* The Film Strip */}
            <div ref={stripRef} className="flex gap-8 px-6 w-max">
                {FILM_IMAGES.map((src, i) => (
                    <div key={i} className="relative w-[30vh] md:w-[60vh] aspect-video flex-shrink-0 group overflow-hidden border border-white/10 rounded-sm">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                        <img
                            src={src}
                            alt={`Gallery ${i}`}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        {/* Film Perforations Effect (Visual Flair) */}
                        <div className="absolute top-0 w-full h-4 bg-black/80 flex justify-between px-2 items-center opacity-50">
                            {[...Array(8)].map((_, j) => <div key={j} className="w-1 h-2 bg-white/20 rounded-full" />)}
                        </div>
                        <div className="absolute bottom-0 w-full h-4 bg-black/80 flex justify-between px-2 items-center opacity-50">
                            {[...Array(8)].map((_, j) => <div key={j} className="w-1 h-2 bg-white/20 rounded-full" />)}
                        </div>
                    </div>
                ))}
                {/* Duplicate for length if needed */}
                {FILM_IMAGES.map((src, i) => (
                    <div key={`dup-${i}`} className="relative w-[30vh] md:w-[60vh] aspect-video flex-shrink-0 group overflow-hidden border border-white/10 rounded-sm">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                        <img
                            src={src}
                            alt={`Gallery ${i}`}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute top-0 w-full h-4 bg-black/80 flex justify-between px-2 items-center opacity-50">
                            {[...Array(8)].map((_, j) => <div key={j} className="w-1 h-2 bg-white/20 rounded-full" />)}
                        </div>
                        <div className="absolute bottom-0 w-full h-4 bg-black/80 flex justify-between px-2 items-center opacity-50">
                            {[...Array(8)].map((_, j) => <div key={j} className="w-1 h-2 bg-white/20 rounded-full" />)}
                        </div>
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-6 mt-4 flex justify-start">
                <p className="text-white/20 text-[10px] uppercase font-mono">Roll_01_EXP_SPITI</p>
            </div>
        </div>
    );
}
