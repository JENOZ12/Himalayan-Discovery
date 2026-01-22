import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Luxury Hotels in Kinnaur Valley | Premium Stays 2025',
    description: 'Discover the finest luxury hotels in Kinnaur. Experience premium comfort, wooden interiors, and stunning mountain views in Kalpa and Sarahan.',
    keywords: ['Luxury Hotels Kinnaur', 'Best Hotels Kalpa', 'Premium Stays Sarahan', '5 Star Experience Kinnaur'],
    alternates: { canonical: 'https://himalayandiscovery.com/luxury-hotels-in-kinnaur-valley' },
};

export default function LuxuryKinnaurPage() {
    const luxuryHotels = hotels.filter(h => h.rating >= 4 && (h.location === 'Kalpa' || h.location === 'Sarahan'));

    return (
        <main className="min-h-screen bg-[var(--background)] selection:text-black selection:bg-[var(--gold-accent)]">
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/luxury-hero.png" alt="Luxury Interior" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">Kinnaur Luxury</h1>
                    <p className="text-white/60 text-xl font-light">Elegance amidst the Himalayas</p>
                </div>
            </section>

            <section className="py-24 px-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {luxuryHotels.map(hotel => (
                        <Link href={`/hotels/${hotel.id}`} key={hotel.id} className="group">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full flex items-center gap-1 text-white">
                                    <Star className="w-3 h-3 fill-[var(--gold-accent)] text-[var(--gold-accent)]" /> {hotel.rating}.0
                                </div>
                            </div>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-[var(--gold-accent)] transition-colors">{hotel.name}</h3>
                            <p className="text-white/40 mb-4">{hotel.location} • {hotel.type}</p>
                            <p className="text-white/70 line-clamp-2">{hotel.description}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* The Luxury Difference */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200" alt="Luxury Amenities" className="rounded-2xl border border-white/10" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Redefining Mountain Luxury</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--gold-accent)] mb-2">Wooden Architecture</h3>
                                    <p className="text-white/60">Our premium properties feature traditional Kinnauri Kath-Kuni style architecture mixed with modern aesthetics, using deodar wood that naturally insulates the rooms.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--gold-accent)] mb-2">Gourmet Dining</h3>
                                    <p className="text-white/60">Forget instant noodles. Enjoy multi-course meals featuring local delicacies like 'Ogla' and 'Phaphra', prepared by expert chefs using organic local produce.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--gold-accent)] mb-2">Uninterrupted Comfort</h3>
                                    <p className="text-white/60">With 24/7 power backup, high-speed WiFi, and electric blankets/heaters, your comfort is guaranteed even in the wildest weather.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-serif text-white mb-12 text-center">Luxury Travel Queries</h2>
                <div className="grid gap-6">
                    <div className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/10 hover:border-[var(--gold-accent)]/30 transition-colors">
                        <h3 className="text-lg font-bold text-white mb-3">Is room service available round the clock?</h3>
                        <p className="text-white/60">Yes, hotels like White Nest and Sarahan Inn offer extended room service hours. While not 24/7 in the strict city sense, staff is always available for emergencies and late-night needs.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/10 hover:border-[var(--gold-accent)]/30 transition-colors">
                        <h3 className="text-lg font-bold text-white mb-3">Do high-end hotels have elevators?</h3>
                        <p className="text-white/60">Most properties in Kinnaur are low-rise (2-3 floors) to respect local building codes and do not have elevators. However, ground floor rooms are available upon request for seniors.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/10 hover:border-[var(--gold-accent)]/30 transition-colors">
                        <h3 className="text-lg font-bold text-white mb-3">Is the parking secure?</h3>
                        <p className="text-white/60">Absolutely. All our listed luxury properties have private, secure parking spaces within the hotel premises, safe for your luxury SUVs or sedans.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

