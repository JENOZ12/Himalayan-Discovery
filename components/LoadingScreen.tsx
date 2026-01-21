'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Glitch character pool
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function LoadingScreen() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLSpanElement>(null);
    const [complete, setComplete] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => setComplete(true),
        });

        // Initial State
        gsap.set('.shutter', { scaleY: 1 });
        gsap.set('.glitch-container', { opacity: 0 });

        const ctx = gsap.context(() => {

            // 1. Entrance
            tl.to('.glitch-container', { opacity: 1, duration: 0.1 })

                // 2. Glitch/Decode Animation
                .to({}, {
                    duration: 2.5,
                    ease: "none",
                    onUpdate: function () {
                        const progress = this.progress();

                        // Main Title Glitch
                        if (titleRef.current) {
                            const targetText = "HIMALAYAN";
                            const glitches = Math.floor((1 - progress) * 10); // More glitches at start
                            let output = "";

                            for (let i = 0; i < targetText.length; i++) {
                                if (i < progress * targetText.length) {
                                    // Revealed part - occasionally glitch back
                                    output += Math.random() > 0.99 ? chars[Math.floor(Math.random() * chars.length)] : targetText[i];
                                } else {
                                    // Hidden part - complete noise
                                    output += chars[Math.floor(Math.random() * chars.length)];
                                }
                            }
                            titleRef.current.innerText = output;
                        }

                        // Subtitle Glitch
                        if (subRef.current) {
                            const targetText = "DISCOVERY";
                            let output = "";
                            for (let i = 0; i < targetText.length; i++) {
                                // Reveal randomly
                                if (progress > 0.5 && Math.random() > (1 - progress)) {
                                    output += targetText[i];
                                } else {
                                    output += chars[Math.floor(Math.random() * chars.length)];
                                }
                            }
                            subRef.current.innerText = output;
                        }
                    }
                })

                // 3. Stabilization / Flash
                .to('.glitch-text', {
                    color: '#fbbf24',
                    duration: 0.1,
                    yoyo: true,
                    repeat: 3
                })
                .to('.glitch-text', {
                    color: '#ffffff',
                    duration: 0.1
                })

                // 4. Exit
                .to('.loader-content', {
                    scale: 1.5,
                    opacity: 0,
                    filter: 'blur(10px)',
                    duration: 0.5,
                    ease: 'power2.in'
                })

                // 5. Shutter Open
                .to('.shutter-top', {
                    yPercent: -100,
                    duration: 1.2,
                    ease: 'power4.inOut'
                }, 'split')
                .to('.shutter-bottom', {
                    yPercent: 100,
                    duration: 1.2,
                    ease: 'power4.inOut'
                }, 'split');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    if (complete) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-[100] pointer-events-none flex flex-col">

            {/* Top Shutter */}
            <div className="shutter shutter-top absolute top-0 left-0 w-full h-[50vh] bg-[#0a0a0a] z-50 flex items-end justify-center pb-0 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[#0a0a0a]" />
            </div>

            {/* Bottom Shutter */}
            <div className="shutter shutter-bottom absolute bottom-0 left-0 w-full h-[50vh] bg-[#0a0a0a] z-50 flex items-start justify-center pt-0 overflow-hidden border-t border-white/10">
                <div className="absolute inset-0 bg-[#0a0a0a]" />
            </div>

            {/* Centered Content */}
            <div className="loader-content glitch-container absolute inset-0 z-[60] flex flex-col items-center justify-center mix-blend-difference">
                <div className="flex flex-col items-center">
                    <h1 ref={titleRef} className="glitch-text text-5xl md:text-9xl font-mono font-bold text-white tracking-tighter uppercase">
                        {/* HIMALAYAN */}
                    </h1>
                    <span ref={subRef} className="glitch-text text-xl md:text-3xl font-mono text-white/50 tracking-[0.5em] uppercase mt-2 md:mt-4">
                        {/* DISCOVERY */}
                    </span>

                    {/* Scanline */}
                    <div className="w-full h-[1px] bg-[#fbbf24]/50 mt-8 animate-pulse shadow-[0_0_10px_#fbbf24]" />
                </div>
            </div>

        </div>
    );
}
