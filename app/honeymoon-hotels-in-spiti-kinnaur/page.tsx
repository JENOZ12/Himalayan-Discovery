import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';
import { Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Honeymoon Hotels in Spiti & Kinnaur | Romantic Getaways',
    description: 'Plan a romantic escape to the Himalayas. luxury suites, mountain view balconies, and secluded stays perfect for honeymooners.',
    keywords: ['Spiti Honeymoon Hotels', 'Romantic Hotels Kalpa', 'Honeymoon Package Kinnaur', 'Couple Friendly Hotels Spiti'],
    alternates: { canonical: 'https://himalayandiscovery.com/honeymoon-hotels-in-spiti-kinnaur' },
};

export default function HoneymoonPage() {
    const romanticHotels = hotels.filter(h => h.policies?.some(p => p.includes('Couples')) || h.type === 'PREMIUM' || h.type === 'COMFORT');

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/honeymoon-hero.png" alt="Romantic Honeymoon" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <Heart className="w-12 h-12 text-red-400 mx-auto mb-6 opacity-80" />
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">Romance in the Hills</h1>
                    <p className="text-white/60 text-xl">Secluded. Serene. Spectacular.</p>
                </div>
            </section>

            <section className="py-20 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {romanticHotels.map(hotel => (
                        <div key={hotel.id} className="relative group overflow-hidden rounded-3xl aspect-[4/5]">
                            <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-serif text-white mb-2">{hotel.name}</h3>
                                <p className="text-white/80 mb-4">{hotel.location}</p>
                                <Link href={`/hotels/${hotel.id}`} className="inline-block bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
                                    View Suite
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Romantic Experiences */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-16">Curated Moments</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <span className="text-4xl mb-4 block">☕</span>
                            <h3 className="text-xl font-bold text-white mb-2">Sunrise Coffee</h3>
                            <p className="text-white/60 text-sm">Watch the peaks catch fire with the first light, wrapped in blankets on your private balcony.</p>
                        </div>
                        <div className="p-6">
                            <span className="text-4xl mb-4 block">🌌</span>
                            <h3 className="text-xl font-bold text-white mb-2">Starlit Walks</h3>
                            <p className="text-white/60 text-sm">Walk hand in hand under the Milky Way. Spiti has some of the darkest skies in the world.</p>
                        </div>
                        <div className="p-6">
                            <span className="text-4xl mb-4 block">🕍</span>
                            <h3 className="text-xl font-bold text-white mb-2">Soulful Blessings</h3>
                            <p className="text-white/60 text-sm">Tie a prayer flag together at Kunzum Pass or seek blessings at the 1000-year-old Tabo monastery.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-serif text-white mb-10 text-center">Honeymoon Essentials</h2>
                <div className="space-y-6">
                    <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Is Spiti too harsh for a honeymoon?</h3>
                        <p className="text-white/60">It's an adventure honeymoon. If you both love nature, road trips, and mountains, it's romantic. If you prefer pool-side luxury and spas, Manali might be better. Spiti is about raw beauty.</p>
                    </div>
                    <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Which month is best for a honeymoon?</h3>
                        <p className="text-white/60">June and September are perfect. The weather is pleasant, roads are open, and it's not too crowded, giving you plenty of privacy.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
