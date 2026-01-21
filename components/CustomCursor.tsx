'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const ghostRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        // Show cursor on all devices
        const ghost = ghostRef.current;
        const particleContainer = particlesRef.current;
        if (!ghost || !particleContainer) return;

        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const pos = { x: mouse.x, y: mouse.y };
        let animationId: number;
        let lastTrailTime = 0;
        let isHoveringLocal = false; // Local tracking for performance

        // Show cursor once mouse moves
        const handleFirstMove = () => {
            setIsVisible(true);
            window.removeEventListener('mousemove', handleFirstMove);
        };
        window.addEventListener('mousemove', handleFirstMove);

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Optimized Hover Detection (delegation)
            // Using logic inside mousemove avoids adding 1000s of listeners
            const target = e.target as HTMLElement;
            const isInteractive = !!target.closest('a, button, input, textarea, [role="button"], .cursor-hover');

            if (isInteractive !== isHoveringLocal) {
                isHoveringLocal = isInteractive;
                setIsHovering(isInteractive); // Trigger React render for face change

                // Animate Ghost
                if (isInteractive) {
                    gsap.to(ghost, { scale: 1.2, duration: 0.25, ease: 'back.out(2)' });
                } else {
                    gsap.to(ghost, { scale: 1, duration: 0.25, ease: 'power2.out' });
                }
            }

            createTrail(e.clientX, e.clientY);
        };

        // Touch support for mobile
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
                setIsVisible(true);
                createTrail(mouse.x, mouse.y);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
                setIsVisible(true);
            }
        };

        // Particle System
        const createTrail = (x: number, y: number) => {
            const now = Date.now();
            if (now - lastTrailTime < 50) return; // Limit trail density (50ms)
            lastTrailTime = now;

            const particle = document.createElement('div');
            particle.className = 'fixed pointer-events-none w-2 h-2 bg-white rounded-full z-[9998]';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            // Randomly choose between a dot, a small star, or a heart
            const type = Math.random();
            if (type > 0.8) {
                particle.innerHTML = '✨';
                particle.style.backgroundColor = 'transparent';
                particle.style.fontSize = '10px';
            } else if (type > 0.95) {
                particle.innerHTML = '💖';
                particle.style.backgroundColor = 'transparent';
                particle.style.fontSize = '8px';
            } else {
                particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
                particle.style.boxShadow = '0 0 5px rgba(255,255,255,0.5)';
            }

            particleContainer.appendChild(particle);

            gsap.to(particle, {
                x: (Math.random() - 0.5) * 20,
                y: 20 + Math.random() * 20,
                opacity: 0,
                scale: 0,
                duration: 0.8 + Math.random(),
                onComplete: () => particle.remove()
            });
        };

        const createBurst = (x: number, y: number) => {
            for (let i = 0; i < 8; i++) {
                const particle = document.createElement('div');
                particle.className = 'fixed pointer-events-none z-[9998] text-sm';
                particle.style.left = `${x}px`;
                particle.style.top = `${y}px`;

                const emojis = ['✨', '💖', '🌸', '🪄', '⭐'];
                particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

                particleContainer.appendChild(particle);

                const angle = (Math.PI * 2 * i) / 8;
                const velocity = 30 + Math.random() * 30;

                gsap.to(particle, {
                    x: Math.cos(angle) * velocity,
                    y: Math.sin(angle) * velocity,
                    opacity: 0,
                    scale: 0.5,
                    rotation: Math.random() * 360,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => particle.remove()
                });
            }
        };

        const handleMouseDown = () => {
            setIsClicking(true);
            gsap.to(ghost, { scale: 0.8, duration: 0.1, ease: 'power2.out' });
        };

        const handleMouseUp = () => {
            setIsClicking(false);
            // Use local var or ref if we want to be exact, but 'isHovering' here is from render scope closure
            // However, inside useEffect, 'isHovering' is stale (false). 
            // Better to rely on 'isHoveringLocal' if we could, but that's local to effect.
            // We can just query DOM again or assume bounce back to 1 or 1.2
            // Let's just bounce to 1.1 safely or re-check.
            const target = document.elementFromPoint(mouse.x, mouse.y) as HTMLElement;
            const isInteractive = target && !!target.closest('a, button, input, textarea, [role="button"], .cursor-hover');

            gsap.to(ghost, { scale: isInteractive ? 1.2 : 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
            createBurst(mouse.x, mouse.y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('click', (e) => createBurst(e.clientX, e.clientY));

        // Initial position
        gsap.set(ghost, { xPercent: -50, yPercent: -50, x: pos.x, y: pos.y });

        // Cute floating animation - gentle bobbing
        gsap.to(ghost, {
            y: '+=6',
            duration: 1.8,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
        });

        // Soft glow pulse
        gsap.to(ghost, {
            filter: 'drop-shadow(0 4px 12px rgba(255, 182, 193, 0.6)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))',
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
        });

        // Main animation loop
        const animate = () => {
            const dt = 0.15; // Slightly faster follow for cute bouncy feel

            // Smooth follow
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;

            gsap.set(ghost, { x: pos.x, y: pos.y });

            // Eye tracking - big cute eyes follow more
            const dx = mouse.x - pos.x;
            const dy = mouse.y - pos.y;
            const pupilX = Math.max(-3, Math.min(3, dx * 0.12));
            const pupilY = Math.max(-2, Math.min(2, dy * 0.12));

            document.querySelectorAll('.ghost-pupil').forEach((pupil) => {
                gsap.set(pupil, { x: pupilX, y: pupilY });
            });

            // Gentle tilt
            const rotation = Math.max(-12, Math.min(12, dx * 0.3));
            gsap.set(ghost, { rotation });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            // Click listener removed (mouseup handles burst usually, but keeping click for safety)
        };
    }, []);

    return (
        <>
            <div ref={particlesRef} className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden" />
            <div
                className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
                {/* Cute Ghost Cursor */}
                <div
                    ref={ghostRef}
                    className="fixed top-0 left-0 will-change-transform"
                    style={{
                        filter: 'drop-shadow(0 4px 8px rgba(255, 182, 193, 0.5)) drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))'
                    }}
                >
                    {/* Ghost Body - Cute rounded SVG */}
                    <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            {/* Soft gradient body */}
                            <linearGradient id="cuteGhostBody" x1="22" y1="0" x2="22" y2="52" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="100%" stopColor="#fef3f3" />
                            </linearGradient>
                            {/* Cheek blush gradient */}
                            <radialGradient id="blushGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ffb6c1" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#ffb6c1" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Main body - extra round and cute */}
                        <path
                            d="M22 2C10 2 2 12 2 22V40C2 42 4 44 6 44C8 44 9 42 9 40V42C9 44 11 46 13 46C15 46 16 44 16 42V44C16 46 18 48 20 48C22 48 22 46 22 44C22 46 22 48 24 48C26 48 28 46 28 44V42C28 44 29 46 31 46C33 46 35 44 35 42V40C35 42 36 44 38 44C40 44 42 42 42 40V22C42 12 34 2 22 2Z"
                            fill="url(#cuteGhostBody)"
                            stroke="#f8e8e8"
                            strokeWidth="0.5"
                        />
                    </svg>

                    {/* Cute Face */}
                    <div className="absolute top-[12px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                        {/* Big Sparkly Eyes */}
                        <div className="flex gap-[10px]">
                            {/* Left Eye */}
                            <div className="relative w-[10px] h-[12px] bg-[#2d2d2d] rounded-full">
                                {/* Pupil */}
                                <div
                                    className="ghost-pupil absolute w-[10px] h-[12px] rounded-full top-0 left-0"
                                    style={{ background: '#2d2d2d' }}
                                >
                                    {/* Big shine */}
                                    <div className="absolute w-[4px] h-[4px] bg-white rounded-full top-[2px] left-[1px]" />
                                    {/* Small shine */}
                                    <div className="absolute w-[2px] h-[2px] bg-white rounded-full bottom-[3px] right-[2px] opacity-60" />
                                </div>
                            </div>

                            {/* Right Eye */}
                            <div className="relative w-[10px] h-[12px] bg-[#2d2d2d] rounded-full">
                                {/* Pupil */}
                                <div
                                    className="ghost-pupil absolute w-[10px] h-[12px] rounded-full top-0 left-0"
                                    style={{ background: '#2d2d2d' }}
                                >
                                    {/* Big shine */}
                                    <div className="absolute w-[4px] h-[4px] bg-white rounded-full top-[2px] left-[1px]" />
                                    {/* Small shine */}
                                    <div className="absolute w-[2px] h-[2px] bg-white rounded-full bottom-[3px] right-[2px] opacity-60" />
                                </div>
                            </div>
                        </div>

                        {/* Rosy Cheeks */}
                        <div className="absolute top-[8px] flex justify-between" style={{ width: '36px', marginLeft: '0px' }}>
                            <div
                                className="w-[8px] h-[5px] rounded-full"
                                style={{ background: 'rgba(255, 150, 170, 0.5)', filter: 'blur(1px)' }}
                            />
                            <div
                                className="w-[8px] h-[5px] rounded-full"
                                style={{ background: 'rgba(255, 150, 170, 0.5)', filter: 'blur(1px)' }}
                            />
                        </div>

                        {/* Cute Mouth */}
                        <div
                            className="mt-[6px] transition-all duration-300 ease-out"
                            style={{
                                width: isHovering || isClicking ? '10px' : '6px',
                                height: isHovering || isClicking ? '6px' : '3px',
                                background: isHovering || isClicking ? '#ff9eb5' : '#ffb6c1',
                                borderRadius: isHovering || isClicking ? '0 0 10px 10px' : '50%',
                                transform: isHovering || isClicking ? 'scaleY(1.5)' : 'scaleY(1)',
                            }}
                        />

                        {/* Happy curved smile when hovering or clicking */}
                        {(isHovering || isClicking) && (
                            <div
                                className="absolute top-[22px]"
                                style={{
                                    width: '8px',
                                    height: '4px',
                                    borderBottom: '2px solid #ffb6c1',
                                    borderRadius: '0 0 8px 8px',
                                }}
                            />
                        )}
                    </div>

                    {/* Floating hearts when hovering */}
                    {isHovering && (
                        <>
                            <div
                                className="absolute -top-2 -right-1 text-[8px] animate-bounce"
                                style={{ animationDuration: '0.5s' }}
                            >
                                💕
                            </div>
                            <div
                                className="absolute -top-1 -left-2 text-[6px] animate-bounce"
                                style={{ animationDuration: '0.7s', animationDelay: '0.1s' }}
                            >
                                ✨
                            </div>
                        </>
                    )}

                    {/* Subtle sparkle */}
                    <div
                        className="absolute -top-1 right-0 w-[3px] h-[3px] bg-white rounded-full animate-pulse"
                        style={{ boxShadow: '0 0 4px rgba(255,255,255,0.8)' }}
                    />
                </div>
            </div>
        </>
    );
}
