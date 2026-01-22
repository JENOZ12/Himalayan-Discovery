import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';
import { ArrowUpRight, Mountain, Coffee } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Homestays in Nako Lake | Authentic Clay Houses',
    description: 'Experience living in a 1000-year-old village. Stay in traditional mud houses near the sacred Nako Lake. Best homestays in Nako Kinnaur.',
    keywords: ['Nako Lake Homestay', 'Hotels in Nako', 'Nako Monastery stay', 'Mud houses Spiti'],
    alternates: { canonical: 'https://himalayandiscovery.com/homestays-in-nako-lake-kinnaur' },
};

export default function NakoPage() {
    // Filter hotels for Nako or generic if none specific (Nako is often grouped with Spiti)
    const nakoHotels = hotels.filter(h => h.location === 'Nako' || h.description.includes('Nako'));

    return (
        <main className="min-h-screen bg-[var(--background)] selection:text-black selection:bg-[var(--gold-accent)]">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/spiti-hotel-hero.png" alt="Nako Lake Village" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Stays in Nako</h1>
                    <p className="text-[var(--gold-accent)] uppercase tracking-widest text-sm">The Mirror Lake of Kinnaur</p>
                </div>
            </section>

            <section className="py-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="prose prose-invert prose-lg text-center mx-auto mb-12">
                        <p>
                            Nako is a fairytale village built around a sacred lake. The houses here are made of stone and mud, preserving warmth in the harsh winters.
                            Staying here offers a unique glimpse into the trans-Himalayan culture.
                        </p>
                    </div>
                    {nakoHotels.length > 0 ? nakoHotels.map(hotel => (
                        <div key={hotel.id} className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row-reverse">
                            <div className="md:w-1/2 h-[300px] md:h-auto">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-center text-right">
                                <h3 className="text-2xl font-serif text-white mb-2">{hotel.name}</h3>
                                <p className="text-white/60 mb-6">{hotel.description}</p>
                                <div className="flex flex-wrap gap-2 justify-end mb-6">
                                    {hotel.features?.map(f => (
                                        <span key={f} className="text-xs bg-white/10 px-2 py-1 rounded text-white/70">{f}</span>
                                    ))}
                                </div>
                                <Link href={`/hotels/${hotel.id}`} className="inline-block px-6 py-3 bg-[var(--gold-accent)] text-black font-bold uppercase text-xs tracking-widest rounded-lg ml-auto">View Property</Link>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center p-12 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl text-white mb-2">No Verified Listings Yet</h3>
                            <p className="text-white/60">We are currently verifying homestays in Nako to ensure quality. Please check back soon or contact us for offline bookings.</p>
                            <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-white text-black font-bold uppercase text-xs rounded-full">Contact for Nako Booking</Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Travel Essentials */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif text-white mb-8 text-center">Nako Essentials</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-white/70">
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <ArrowUpRight className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                                <span><strong>Altitude:</strong> 3,662m. Acclimatization is necessary.</span>
                            </li>
                            <li className="flex gap-3">
                                <ArrowUpRight className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                                <span><strong>Connectivity:</strong> Jio and BSNL work intermittently.</span>
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <ArrowUpRight className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                                <span><strong>Food:</strong> Try the local Thukpa and Momos at small cafes.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
