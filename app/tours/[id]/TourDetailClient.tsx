'use client';

import { use, useRef, useEffect, useState } from 'react';
import Link from 'next/link';

import BookingModal from '@/components/BookingModal';
import { tours, reviews } from '@/lib/data';
import ReviewMarquee from '@/components/ReviewMarquee';
import { Calendar, MapPin, Gauge, Shield, ArrowLeft, Check, X, Mountain, Clock, Info, Star, Plus, Minus } from 'lucide-react';
import { faqData } from '@/lib/faq-data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TourDetailClient({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const tour = tours.find((t) => t.id === id);
    const container = useRef<HTMLDivElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // GSAP Animations
    useGSAP(() => {
        // Hero Text Parallax
        // Hero Text Parallax (Floating Typography - Sinks down)
        gsap.to('.hero-text', {
            yPercent: 50, // Moves DOWN as you scroll down (Reverse to standard parallax which usually moves up or stays pinned)
            opacity: 0,
            scale: 0.95,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // Hero Image Parallax (Moves slightly UP for separation)
        gsap.to('.hero-bg', {
            yPercent: -15,
            scale: 1.1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // Day Items Reveal
        const days = gsap.utils.toArray('.day-item');
        days.forEach((day: any) => {
            gsap.from(day, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: day,
                    start: 'top 85%',
                }
            });
        });

    }, { scope: container });

    if (!tour) return <div className="text-white text-center pt-40">Tour not found</div>;

    const itinerary = tour.itinerary || [];

    return (
        <main ref={container} className="min-h-screen bg-[#050505] selection:bg-[#fbbf24] selection:text-black">

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} tourTitle={tour.title} />

            {/* 1. Cinematic Hero Section */}
            <section className="hero-section relative h-[90vh] w-full overflow-hidden flex flex-col justify-end pb-24 px-6 md:px-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src={tour.image}
                        alt={tour.title}
                        className="hero-bg w-full h-[120%] object-cover brightness-[0.4] scale-105 origin-bottom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                <div className="hero-text relative z-10 max-w-7xl mx-auto w-full border-l-2 border-[#fbbf24] pl-8 md:pl-12">
                    <Link href="/tours" className="inline-flex items-center gap-2 text-white/50 hover:text-[#fbbf24] transition-colors mb-8 uppercase tracking-[0.2em] text-xs font-bold group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Expeditions
                    </Link>

                    <h1 className="text-5xl md:text-[7rem] font-serif font-bold text-white leading-[0.9] tracking-tighter mb-8 shadow-black drop-shadow-2xl">
                        {tour.title}
                    </h1>

                    <div className="flex flex-wrap gap-12 pt-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#fbbf24]">Duration</span>
                            <span className="text-2xl font-mono text-white">{tour.days}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#fbbf24]">Grade</span>
                            <span className="text-xl font-mono text-white">{tour.difficulty}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#fbbf24]">Type</span>
                            <span className="text-xl font-mono text-white">{tour.category}</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Narrative & Itinerary (8 cols) */}
                    <div className="lg:col-span-8 space-y-32">

                        {/* Overview */}
                        <section>
                            <span className="block text-[#fbbf24] font-mono text-xs uppercase tracking-[0.2em] mb-6">01 // The Vision</span>
                            <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed font-serif">
                                "{tour.description}"
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                {tour.highlights.slice(0, 4).map((h, i) => (
                                    <span key={i} className="px-5 py-2 border border-white/10 bg-white/5 rounded-full text-xs text-white/70 uppercase tracking-wider hover:border-[#fbbf24] hover:text-white transition-colors">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Itinerary - The Core Redesign */}
                        <section className="relative">
                            <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10 hidden md:block" />

                            <span className="block text-[#fbbf24] font-mono text-xs uppercase tracking-[0.2em] mb-16 pl-0 md:pl-24">02 // Daily Breakdown</span>

                            <div className="space-y-12">
                                {itinerary.map((item, index) => (
                                    <div key={index} className="day-item relative pl-0 md:pl-24 group">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-[11.5px] top-8 w-2 h-2 bg-[#fbbf24] rounded-full hidden md:block ring-4 ring-[#050505] transition-transform group-hover:scale-150" />

                                        <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8">
                                            {/* Day Number Marker */}
                                            <div className="hidden md:block pt-2">
                                                <span className="text-xl font-bold font-mono text-white/30 group-hover:text-[#fbbf24] transition-colors">
                                                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="bg-[#111] p-8 md:p-10 rounded-2xl border border-white/5 group-hover:border-[#fbbf24]/30 transition-all duration-300">
                                                <div className="flex items-center gap-4 mb-4 md:hidden">
                                                    <span className="text-sm font-bold font-mono text-[#fbbf24] px-3 py-1 bg-[#fbbf24]/10 rounded-full">
                                                        Day {index + 1}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                                                    {item.title}
                                                </h3>
                                                <p className="text-base text-white/50 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions Grid */}
                        <section>
                            <span className="block text-[#fbbf24] font-mono text-xs uppercase tracking-[0.2em] mb-12">03 // The Package</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden">
                                <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
                                    <h4 className="text-lg font-bold uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> Included
                                    </h4>
                                    <ul className="space-y-4">
                                        {tour.inclusions?.map((inc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                                                {inc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-10 bg-white/[0.02]">
                                    <h4 className="text-lg font-bold uppercase tracking-widest text-white/50 mb-8 flex items-center gap-3">
                                        <X className="w-5 h-5 text-red-500/50" /> Excluded
                                    </h4>
                                    <ul className="space-y-4">
                                        {tour.exclusions?.map((exc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-white/40">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/10 mt-1.5 shrink-0" />
                                                {exc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sticky Booking (4 cols) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-24 space-y-6">
                            {/* Price Card */}
                            <div className="p-8 bg-white text-black rounded-3xl relative overflow-hidden group hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-shadow duration-500">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#fbbf24]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Investment</span>
                                <div className="text-4xl font-bold font-sans my-4 tracking-tight">{tour.price}</div>
                                <p className="text-[10px] opacity-60 mb-8 uppercase tracking-wider">*Per person on twin sharing</p>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-[#fbbf24] hover:text-black transition-all rounded-xl flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                                >
                                    Request Spot <ArrowLeft className="w-4 h-4 rotate-135" />
                                </button>

                                <div className="mt-4 text-center">
                                    <button className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity underline decoration-dotted">
                                        Download PDF Brochure
                                    </button>
                                </div>
                            </div>

                            {/* Info Card */}
                            <div className="p-8 bg-[#111] border border-white/10 rounded-3xl backdrop-blur-sm">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <span className="text-white/40 text-xs uppercase tracking-wider">Start / End</span>
                                        <span className="text-white text-xs font-mono font-bold">Shimla / Chandigarh</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <span className="text-white/40 text-xs uppercase tracking-wider">Group Size</span>
                                        <span className="text-white text-xs font-mono font-bold">Max 12 People</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2">
                                        <span className="text-white/40 text-xs uppercase tracking-wider">Next Date</span>
                                        <span className="text-[#fbbf24] text-xs font-mono font-bold">April 15, 2026</span>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="flex items-center gap-4 p-4 border border-white/5 rounded-2xl bg-white/5">
                                <div className="w-12 h-12 rounded-full bg-[#fbbf24] flex items-center justify-center shrink-0">
                                    <Shield className="w-6 h-6 text-black fill-black/20" />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-white leading-tight">Secure Booking</h5>
                                    <p className="text-xs text-white/40 mt-1">Verified local guides & safe payment.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Tour Specific FAQs */}
            <section className="py-24 px-6 md:px-12 bg-[#050505] border-t border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center">
                        Tour <span className="text-[#fbbf24] italic">Essentials</span>
                    </h2>
                    <div className="space-y-4">
                        {faqData.filter(q => {
                            const title = tour.title.toLowerCase();
                            // Context aware filtering
                            if (title.includes('bike') && q.category === 'Biking') return true;
                            if (title.includes('winter') && q.category === 'Winter') return true;
                            if (['Health', 'Permits', 'Essentials'].includes(q.category)) return true;
                            return false;
                        }).slice(0, 8).map((item, i) => (
                            <div key={i} className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#fbbf24] transition-colors">
                                <details className="w-full">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <span className="font-serif text-lg text-white group-hover:text-[#fbbf24] transition-colors">{item.question}</span>
                                        <span className="text-white/50 group-open:hidden"><Plus size={20} /></span>
                                        <span className="text-[#fbbf24] hidden group-open:block"><Minus size={20} /></span>
                                    </summary>
                                    <div className="px-6 pb-6 text-white/70 leading-relaxed border-t border-white/5 pt-4">
                                        {item.answer}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <ReviewMarquee reviews={reviews.filter(r => r.tourId === tour.id)} />
        </main >
    );
}
