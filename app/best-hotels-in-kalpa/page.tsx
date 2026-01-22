import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';
import { ArrowUpRight, Check, MapPin, Star, Mountain, Coffee, Wifi } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Hotels in Kalpa with Kinner Kailash View | 2025 Guide',
    description: 'Looking for the best hotels in Kalpa? Discover our curated selection of verified stays offering breathtaking 180-degree views of the Kinner Kailash peak, premium amenities, and authentic Kinnauri hospitality.',
    keywords: ['Hotels in Kalpa', 'Kinner Kailash View Hotels', 'Best places to stay in Kinnaur', 'Kalpa Homestays', 'Luxury Hotels Kalpa'],
    alternates: {
        canonical: 'https://himalayandiscovery.com/best-hotels-in-kalpa',
    },
};

export default function KalpaHotelsPage() {
    // Filter only Kalpa hotels
    const kalpaHotels = hotels.filter(h => h.location === 'Kalpa');

    return (
        <main className="min-h-screen bg-[var(--background)] selection:text-black selection:bg-[var(--gold-accent)]">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/kalpa-hero.png" alt="Kalpa Kinnaur" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <span className="block text-[var(--gold-accent)] font-mono text-xs uppercase tracking-[0.2em] mb-4">
                        The Gem of Kinnaur
                    </span>
                    <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
                        Wake Up to the <br />
                        <span className="text-[var(--gold-accent)]">Sacred Kinner Kailash</span>
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                        A curated guide to the finest accommodations in Kalpa, where every morning greets you with the divine glow of the 6,050m Kinner Kailash massif.
                    </p>
                    <Link
                        href="#featured-stays"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[var(--gold-accent)] transition-colors"
                    >
                        Explore Stays <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Introduction SEO Content */}
            <section className="py-20 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6">Why Stay in Kalpa?</h2>
                        <div className="prose prose-invert prose-lg text-white/60">
                            <p>
                                Perched at an altitude of 2,960 meters, Kalpa is more than just a destination; it's a feeling.
                                Known for its lush apple orchards and the majestic <strong>Kinner Kailash</strong> distinct view,
                                finding the right hotel here can elevate your experience from good to magical.
                            </p>
                            <p>
                                Whether you are looking for a luxury resort, a cozy homestay for your workation,
                                or a budget-friendly hotel with a view, our verified list ensures you get the best amenities including:
                            </p>
                            <ul className="grid grid-cols-2 gap-4 not-prose mt-4">
                                {['Direct Peak Views', 'Heated Rooms', 'High-Speed WiFi', 'In-house Dining'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                                        <Check className="w-4 h-4 text-[var(--gold-accent)]" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="/images/apple-orchards.png"
                            alt="Kalpa Village Apple Orchards"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-sm font-mono">The timeless beauty of Kinnaur</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Hotels Listing */}
            <section id="featured-stays" className="py-20 bg-white/5 mx-4 rounded-3xl">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Featured Collection</h2>
                        <p className="text-white/50">Handpicked stays ensuring the best views and comfort.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                        {kalpaHotels.map((hotel) => (
                            <div key={hotel.id} className="group relative bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden md:flex hover:border-[var(--gold-accent)]/50 transition-all duration-300">
                                <div className="md:w-5/12 relative h-[300px] md:h-auto overflow-hidden">
                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-black/70 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                                            {hotel.rating}.0 / 5
                                        </span>
                                    </div>
                                </div>
                                <div className="md:w-7/12 p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[var(--gold-accent)] transition-colors">
                                        {hotel.name}
                                    </h3>
                                    <p className="text-white/60 mb-6 line-clamp-2">
                                        {hotel.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                                        {hotel.features?.slice(0, 4).map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-white/40 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-accent)]" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                                        <div>
                                            <span className="block text-white/30 text-xs uppercase tracking-widest mb-1">Price</span>
                                            <span className="text-xl text-white font-serif">{hotel.price}</span>
                                        </div>
                                        <Link
                                            href={`/hotels/${hotel.id}`}
                                            className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[var(--gold-accent)] transition-colors"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Structured Data for FAQ */}
            <section className="py-24 container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-serif text-white mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">What is the best time to visit Kalpa?</h3>
                        <p className="text-white/60">The best time to visit Kalpa is from April to June for pleasant weather, and September to October for clear views of the Kinner Kailash. Winters (January-February) are perfect for snow lovers.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Do these hotels offer parking?</h3>
                        <p className="text-white/60">Yes, most of our featured properties like Sarahan Inn and White Nest offer secure parking facilities for your vehicle.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Is the Kinner Kailash view visible from all hotels?</h3>
                        <p className="text-white/60">We have specifically selected hotels like Hotel White Nest and Hotel Royal Voyages because they offer unobstructed views of the Kinner Kailash peaks directly from the rooms/balconies.</p>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-[var(--gold-accent)] text-black text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Plan Your Kinnaur Trip Today</h2>
                <p className="max-w-2xl mx-auto text-black/70 mb-10 text-lg">
                    Not sure which hotel to pick? Let our local experts guide you to the perfect stay based on your budget and preferences.
                </p>
                <Link
                    href="/contact"
                    className="inline-block px-10 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
                >
                    Get Free Consultation
                </Link>
            </section>

        </main>
    );
}
