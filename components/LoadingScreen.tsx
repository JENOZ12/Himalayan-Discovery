'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setComplete(true),
        });

        const text = textRef.current;
        const container = containerRef.current;

        // Text Reveal
        tl.fromTo(
            text,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.5 }
        )
            .to(text, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.in',
                delay: 0.5,
            })
            // Curtain Reveal
            .to(container, {
                height: 0,
                duration: 1.5,
                ease: 'expo.inOut',
            });

        return () => {
            tl.kill();
        };
    }, []);

    if (complete) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] bg-[var(--background)] flex items-center justify-center overflow-hidden border-b border-[var(--gold-accent)]"
        >
            <div className="overflow-hidden">
                <h1
                    ref={textRef}
                    className="text-4xl md:text-6xl lg:text-8xl font-serif text-[var(--gold-accent)] tracking-widest uppercase"
                >
                    Himalayan Discovery
                </h1>
            </div>
        </div>
    );
}
