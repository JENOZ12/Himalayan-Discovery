'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Heart, Mountain, Shield, User, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hero Text Parallax & Reveal
        const timeLine = gsap.timeline();
        timeLine.from('.hero-text', {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: 'power4.out',
            delay: 0.2
        });

        // Parallax Background
        gsap.to('.parallax-bg', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // Timeline Items Interaction
        const items = gsap.utils.toArray('.timeline-item');
        items.forEach((item: any, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: "play none none reverse"
                },
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out'
            });
        });

        // Team Cards Stagger
        gsap.from('.team-card', {
            scrollTrigger: {
                trigger: '.team-section',
                start: 'top 70%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });


        // Reverse Scroll for Team Section (Middle Column moves differently)
        gsap.to('.team-col-reverse', {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: {
                trigger: '.team-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        // Parallax for Timeline Images
        gsap.utils.toArray('.timeline-img-container').forEach((container: any) => {
            gsap.to(container.querySelector('img'), {
                yPercent: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });

    }, { scope: container });

    return (
        <main ref={container} className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[var(--gold-accent)] selection:text-black pb-32">

            {/* Cinematic Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

            {/* 1. Cinematic Hero Section */}
            <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/visual-journey/kalpa.png"
                        alt="Kinnaur Landscape"
                        className="parallax-bg w-full h-[120%] object-cover brightness-[0.35]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <div className="overflow-hidden mb-6">
                        <span className="hero-text text-[var(--gold-accent)] uppercase tracking-[0.4em] text-xs md:text-sm font-bold block">
                            Est. 1997 • Kinnaur Valley
                        </span>
                    </div>

                    <h1 className="hero-text text-6xl md:text-9xl font-serif leading-[0.85] mb-8 tracking-tight">
                        Legends of <br />
                        <span className="italic text-white/40">The Himalayas</span>
                    </h1>
                    <div className="h-px w-24 bg-white/20 mx-auto mb-8 hero-text" />
                    <p className="hero-text text-lg md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                        Experiencing Kinnaur & Spiti Valley for over 25 years. <br className="hidden md:block" />
                        We don't just guide; we belong here.
                    </p>
                </div>
            </section>

            {/* 2. The Origin Story (Cinematic Timeline) */}
            <section className="container mx-auto px-6 py-32 max-w-6xl relative z-10">
                <div className="text-center mb-32">
                    <span className="text-[var(--gold-accent)] uppercase tracking-widest text-xs font-bold mb-4 block">Our Heritage</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white">The <span className="italic text-white/50">Odyssey</span></h2>
                </div>

                <div className="space-y-32 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-1/2">

                    {/* 1992 */}
                    <div className="timeline-item flex flex-col md:flex-row gap-12 md:gap-24 items-center relative">
                        <div className="md:w-1/2 md:text-right order-2 md:order-1">
                            <h3 className="text-6xl md:text-8xl font-serif text-white/5 mb-4 absolute -top-12 right-0 md:right-12 -z-10">1992</h3>
                            <h3 className="text-3xl font-bold text-white mb-4">The Awakening</h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                A trek over Bhaba Pass to Spiti Valley with a British group changed everything.
                                Twelve days in the wild silence of the mountains ignited an affair with Kinnaur's pristine beauty
                                that burns to this day.
                            </p>
                        </div>
                        <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[var(--gold-accent)] rounded-full -translate-x-1/2 ring-8 ring-[#050505] shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
                        <div className="md:w-1/2 order-2 pl-12 md:pl-0">
                            <div className="timeline-img-container aspect-video bg-white/5 rounded-sm overflow-hidden border border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                                <img src="/visual-journey/pin-valley.png" alt="Early Days" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-125" />
                            </div>
                        </div>
                    </div>

                    {/* 1997 */}
                    <div className="timeline-item flex flex-col md:flex-row gap-12 md:gap-24 items-center relative">
                        <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-12 md:pl-0">
                            <div className="timeline-img-container aspect-video bg-white/5 rounded-sm overflow-hidden border border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                                <img src="/visual-journey/kaza.png" alt="Establishment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-125" />
                            </div>
                        </div>
                        <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[var(--gold-accent)] rounded-full -translate-x-1/2 ring-8 ring-[#050505] shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
                        <div className="md:w-1/2 order-2">
                            <h3 className="text-6xl md:text-8xl font-serif text-white/5 mb-4 absolute -top-12 left-0 -z-10">1997</h3>
                            <h3 className="text-3xl font-bold text-white mb-4">Himalaya Discovery</h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                With early success and a vision to share the "forbidden" beauty, we officially established
                                the company in Shimla. Registered with Himachal Tourism, we began crafting premium experiences
                                for the discerning traveler.
                            </p>
                        </div>
                    </div>

                    {/* 2009 */}
                    <div className="timeline-item flex flex-col md:flex-row gap-12 md:gap-24 items-center relative">
                        <div className="md:w-1/2 md:text-right order-2 md:order-1">
                            <h3 className="text-6xl md:text-8xl font-serif text-white/5 mb-4 absolute -top-12 right-0 md:right-12 -z-10">2009</h3>
                            <h3 className="text-3xl font-bold text-white mb-4">Rupin River View</h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                We constructed our first sanctuary in Rakchham. A place where the Baspa River's music
                                lulls you to sleep, and the Kinner Kailash stands guard. A true immersion in nature.
                            </p>
                        </div>
                        <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[var(--gold-accent)] rounded-full -translate-x-1/2 ring-8 ring-[#050505] shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
                        <div className="md:w-1/2 order-2 pl-12 md:pl-0">
                            <div className="timeline-img-container aspect-video bg-white/5 rounded-sm overflow-hidden border border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                                <img src="/visual-journey/chitkul.png" alt="Rupin River View" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-125" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Mission (Glassmorphic) */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/visual-journey/chandratal.png" className="w-full h-full object-cover brightness-[0.2] blur-sm" />
                </div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                    <Heart className="w-16 h-16 text-[var(--gold-accent)] mx-auto mb-8 animate-pulse" />
                    <h2 className="text-4xl md:text-7xl font-serif text-white mb-12">The <span className="text-[var(--gold-accent)]">Guardian</span> Vow</h2>
                    <blockquote className="text-xl md:text-3xl text-white/90 font-light leading-relaxed mb-16 italic border-l-4 border-[var(--gold-accent)] pl-8 max-w-3xl mx-auto text-left">
                        "Kinnaur is not just a destination; it is our home. We pledge to preserve its silence,
                        respect its gods, and empower its people."
                    </blockquote>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Eco-Sensitive', bg: 'bg-emerald-900/20' },
                            { title: 'Culturally Rooted', bg: 'bg-amber-900/20' },
                            { title: 'Local Impact', bg: 'bg-blue-900/20' }
                        ].map((card, i) => (
                            <div key={i} className={`p-8 backdrop-blur-md border border-white/10 ${card.bg} rounded-sm hover:-translate-y-2 transition-transform duration-500`}>
                                <h4 className="text-white font-bold uppercase tracking-widest text-sm">{card.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Meet The Team (3-Column Grid) */}
            <section className="team-section py-32 px-6 container mx-auto max-w-7xl">
                <div className="text-center mb-24">
                    <span className="text-[var(--gold-accent)] uppercase tracking-widest text-xs font-bold mb-4 block">Leadership</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white">The <span className="italic text-white/50">Architects</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Naresh Jishtu */}
                    <div className="team-card group relative cursor-none">
                        <div className="aspect-[4/5] overflow-hidden bg-[#111] mb-6 border border-white/10 group-hover:border-[var(--gold-accent)] transition-colors relative">
                            <img src="/team/naresh-jishtu.png" alt="Naresh Jishtu" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <h3 className="text-3xl font-serif text-white mb-2">Naresh Jishtu</h3>
                        <div className="h-px w-12 bg-[var(--gold-accent)] mb-3" />
                        <p className="text-white/50 uppercase tracking-widest text-xs font-bold">Founder & CEO</p>
                    </div>

                    {/* Laiq Ram Thakur (Reverse Scroll Effect) */}
                    <div className="team-card team-col-reverse group relative cursor-none md:translate-y-12">
                        <div className="aspect-[4/5] overflow-hidden bg-[#111] mb-6 border border-white/10 group-hover:border-[var(--gold-accent)] transition-colors relative">
                            <img src="/team/laiq-ram-thakur.png" alt="Laiq Ram Thakur" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <h3 className="text-3xl font-serif text-white mb-2">Laiq Ram Thakur</h3>
                        <div className="h-px w-12 bg-[var(--gold-accent)] mb-3" />
                        <p className="text-white/50 uppercase tracking-widest text-xs font-bold">CEO</p>
                    </div>

                    {/* Kalpana Jishtu */}
                    <div className="team-card group relative cursor-none">
                        <div className="aspect-[4/5] overflow-hidden bg-[#111] mb-6 border border-white/10 group-hover:border-[var(--gold-accent)] transition-colors relative grayscale group-hover:grayscale-0 duration-700">
                            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-white/20">
                                <User size={64} className="stroke-1" />
                                <span className="uppercase tracking-widest text-[10px] opacity-50">Image Coming Soon</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <h3 className="text-3xl font-serif text-white mb-2">Kalpana Jishtu</h3>
                        <div className="h-px w-12 bg-[var(--gold-accent)] mb-3" />
                        <p className="text-white/50 uppercase tracking-widest text-xs font-bold">Director</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
