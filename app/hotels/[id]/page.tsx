'use client';

import { use, useRef, useState } from 'react';
import { hotels } from '@/lib/data';
import BookingModal from '@/components/BookingModal';
import { MapPin, Wifi, Coffee, Star, ArrowLeft, Check, Shield, Image as ImageIcon, Wind, Mountain, Utensils, Car, Clock, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function HotelDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const container = useRef<HTMLDivElement>(null);
    const hotel = hotels.find((h) => h.id === id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useGSAP(() => {
        // Parallax Hero
        gsap.to('.hero-img', {
            yPercent: 30,
            scale: 1.1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // Content Reveal
        gsap.from('.reveal-text', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.content-start',
                start: 'top 80%',
            }
        });

        // Image Gallery Stagger
        gsap.from('.gallery-img', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.gallery-section',
                start: 'top 70%',
            }
        });

    }, { scope: container });

    if (!hotel) return <div className="text-white text-center pt-40">Hotel not found</div>;

    const galleryImages = hotel.gallery || [hotel.image, hotel.image, hotel.image, hotel.image];

    // Mock amenities icons mapping
    const getIcon = (feature: string) => {
        const lower = feature.toLowerCase();
        if (lower.includes('wifi')) return <Wifi className="w-5 h-5" />;
        if (lower.includes('food') || lower.includes('restaurant') || lower.includes('cafe')) return <Utensils className="w-5 h-5" />;
        if (lower.includes('view') || lower.includes('mountain')) return <Mountain className="w-5 h-5" />;
        if (lower.includes('parking') || lower.includes('car')) return <Car className="w-5 h-5" />;
        if (lower.includes('hot water')) return <Wind className="w-5 h-5" />;
        return <Check className="w-5 h-5" />;
    };

    return (
        <>
            <main ref={container} className="min-h-screen bg-[var(--background)] selection:bg-[var(--gold-accent)] selection:text-black">

                {/* Cinematic Hero */}
                <header className="hero-section relative h-[90vh] w-full overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            referrerPolicy="no-referrer"
                            className="hero-img w-full h-full object-cover brightness-[0.6]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-black/40" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 pb-12 md:pb-24 px-6 md:px-24 z-10">
                        {/* Breadcrumb - Cinematic Style */}
                        <div className="mb-8 flex items-center gap-3 overflow-hidden">
                            <Link href="/hotels" className="flex items-center gap-2 text-white/60 hover:text-[var(--gold-accent)] transition-colors uppercase tracking-[0.2em] text-xs font-medium group">
                                <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                                Collection
                            </Link>
                            <span className="text-white/20">/</span>
                            <span className="text-[var(--gold-accent)] uppercase tracking-[0.2em] text-xs font-medium">{hotel.type}</span>
                        </div>

                        {/* Title Block */}
                        <div className="max-w-7xl">
                            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-6 leading-[0.85] tracking-tight">
                                {hotel.name}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 md:gap-12 border-t border-white/20 pt-8 mt-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 border border-white/20 rounded-full">
                                        <MapPin className="w-5 h-5 text-[var(--gold-accent)]" />
                                    </div>
                                    <div>
                                        <span className="block text-white/40 text-xs uppercase tracking-widest mb-0.5">Location</span>
                                        <span className="text-white font-medium">{hotel.location}, Himalayas</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-2 border border-white/20 rounded-full">
                                        <Star className="w-5 h-5 text-[var(--gold-accent)] fill-[var(--gold-accent)]" />
                                    </div>
                                    <div>
                                        <span className="block text-white/40 text-xs uppercase tracking-widest mb-0.5">Rating</span>
                                        <span className="text-white font-medium">{hotel.rating}.0 / 5.0 STARS</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 ml-auto md:ml-0">
                                    <div className="text-right">
                                        <span className="block text-white/40 text-xs uppercase tracking-widest mb-0.5">Starting From</span>
                                        <span className="text-2xl font-serif text-[var(--gold-accent)]">{hotel.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="content-start container mx-auto px-6 md:px-24 pb-24 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* LEFT COLUMN - Story & Details */}
                        <div className="lg:col-span-8 space-y-24 pt-12">

                            {/* The Story */}
                            <section className="reveal-text">
                                <span className="block text-[var(--gold-accent)] font-mono text-xs tracking-widest uppercase mb-4">The Experience</span>
                                <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                                    A Sanctuary in the <br /><span className="italic text-white/50">Clouds</span>
                                </h2>
                                <div className="prose prose-invert prose-lg max-w-none">
                                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8 first-letter:text-7xl first-letter:font-serif first-letter:text-[var(--gold-accent)] first-letter:float-left first-letter:mr-4 first-letter:mt-[-10px]">
                                        {hotel.description}
                                    </p>
                                    <p className="text-white/50 text-lg leading-relaxed">
                                        Immerse yourself in the raw beauty of the Himalayas. {hotel.name} isn't just a place to stay; it's a gateway to the ancient culture and breathtaking landscapes of {hotel.location}.
                                        Whether you're sipping locally sourced tea by the window or gazing at the starlit sky from your balcony, every moment here is curated to connect you with nature.
                                    </p>
                                </div>
                            </section>

                            {/* Visual Gallery */}
                            <section className="gallery-section">
                                <div className="flex items-center justify-between mb-12">
                                    <h3 className="text-3xl font-serif text-white">Visual <span className="text-[var(--gold-accent)]">Journey</span></h3>
                                    <div className="hidden md:flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest">
                                        <ImageIcon className="w-4 h-4" />
                                        <span>{galleryImages.length} Photos</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px]">
                                    {galleryImages.map((img, i) => (
                                        <div
                                            key={i}
                                            className={`gallery-img relative overflow-hidden rounded-md group ${i % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Gallery ${i}`}
                                                referrerPolicy="no-referrer"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Amenities Grid */}
                            <section className="reveal-text">
                                <h3 className="text-3xl font-serif text-white mb-12">Curated <span className="text-[var(--gold-accent)]">Amenities</span></h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                                    {hotel.features?.map((feature, i) => (
                                        <div key={i} className="group">
                                            <div className="mb-4 inline-flex p-3 rounded-full bg-white/5 text-[var(--gold-accent)] group-hover:bg-[var(--gold-accent)] group-hover:text-black transition-all">
                                                {getIcon(feature)}
                                            </div>
                                            <h4 className="text-white font-medium mb-2">{feature}</h4>
                                            <p className="text-sm text-white/40">Premium quality and 24/7 service included.</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* House Policies */}
                            <section className="reveal-text bg-white/5 border border-white/5 rounded-2xl p-8 md:p-12">
                                <h3 className="text-2xl font-serif text-white mb-8">House <span className="text-white/50 text-base font-sans uppercase tracking-widest ml-4">Rules & Policies</span></h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {hotel.policies?.map((policy, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <Shield className="w-5 h-5 text-white/30 mt-0.5 flex-shrink-0" />
                                            <span className="text-white/70">{policy}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-5 h-5 text-white/30 mt-0.5 flex-shrink-0" />
                                        <span className="text-white/70">Check-in: 12:00 PM / Check-out: 11:00 AM</span>
                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* RIGHT COLUMN - Sticky Booking Card */}
                        <div className="lg:col-span-4 relative">
                            <div className="sticky top-24 space-y-8">

                                {/* Booking Widget */}
                                <div className="bg-[#0f0f0f]/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold-accent)]/10 blur-[50px] rounded-full pointer-events-none" />

                                    <div className="relative z-10">
                                        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Reserve Your Stay</span>

                                        <div className="my-6 pb-6 border-b border-white/10">
                                            <div className="text-4xl font-serif text-white mb-2">{hotel.price}</div>
                                            <div className="text-sm text-white/40">Includes all taxes & fees</div>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                                    <span className="block text-xs text-white/40 mb-1">Check-in</span>
                                                    <span className="block text-white font-medium">Anytime</span>
                                                </div>
                                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                                    <span className="block text-xs text-white/40 mb-1">Guests</span>
                                                    <span className="block text-white font-medium">2 Adults</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="w-full py-4 bg-[var(--gold-accent)] text-black font-bold uppercase tracking-widest hover:bg-white transition-all mb-3 rounded-lg"
                                        >
                                            Request Booking
                                        </button>

                                        <button
                                            onClick={() => {
                                                const message = encodeURIComponent(`Hi, I have a query about ${hotel?.name}`);
                                                window.open(`https://wa.me/919805367616?text=${message}`, '_blank');
                                            }}
                                            className="w-full py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all rounded-lg flex items-center justify-center gap-2"
                                        >
                                            <Phone className="w-4 h-4" /> Contact Host
                                        </button>

                                        <p className="text-center text-xs text-white/30 mt-6">
                                            Free cancellation up to 48 hours before check-in.
                                        </p>
                                    </div>
                                </div>

                                {/* Help Card */}
                                <div className="bg-white/5 p-6 rounded-xl border border-white/5 flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-full">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-medium text-sm">Need help?</h5>
                                        <p className="text-white/50 text-xs mt-1">Chat with our local expert for custom plans.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Navigation CTA */}
                <div className="border-t border-white/10 bg-black/50 backdrop-blur-lg mb-20">
                    <div className="container mx-auto px-6 py-12">
                        <h2 className="text-2xl font-serif text-white mb-8 text-center">Continue Exploring</h2>
                        <div className="flex justify-center gap-4">
                            <Link href="/hotels" className="px-8 py-3 border border-white/20 rounded-full text-white/70 hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest">
                                View All Hotels
                            </Link>
                            <Link href="/contact" className="px-8 py-3 bg-[var(--gold-accent)] rounded-full text-black font-bold hover:bg-white transition-all uppercase text-xs tracking-widest">
                                Customize Trip
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                tourTitle={hotel?.name || 'Hotel Booking'}
            />
        </>
    );
}
