import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';
import { ThermometerSnowflake } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Winter Stays in Spiti Valley | Heated Rooms & Warm Hospitality',
    description: 'Surviving the Spiti winter requires the right stay. Discover hotels and homestays that remain open in winter with heating facilities.',
    keywords: ['Winter Spiti Hotels', 'Kaza Hotels in January', 'Heated Rooms Spiti', 'Winter Homestays'],
    alternates: { canonical: 'https://himalayandiscovery.com/winter-spiti-valley-hotels' },
};

export default function WinterPage() {
    // In reality, only Kaza/Tabo are accessible in deep winter for tourism generally. 
    // Filtering Kaza/Kalpa as they are main winter hubs.
    const winterHotels = hotels.filter(h => ['Kaza', 'Kalpa', 'Tabo'].includes(h.location));

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/winter-spiti-hero.png" alt="Winter in Spiti" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 flex items-center gap-4 mb-4 text-center flex-col">
                    <ThermometerSnowflake className="w-16 h-16 text-cyan-300" />
                    <h1 className="text-4xl md:text-7xl font-serif text-white">Winter in Spiti</h1>
                </div>
            </section>

            <section className="py-24 px-6 container mx-auto">

                <p className="text-white/60 text-lg max-w-2xl mb-16">
                    When the valley turns white, only the toughest remain. These hotels offer the warmth and comfort you need for a winter expedition.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {winterHotels.map(hotel => (
                        <div key={hotel.id} className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
                            <div className="h-48 rounded-lg overflow-hidden mb-6">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                            </div>
                            <h3 className="text-xl font-serif text-white mb-2">{hotel.name}</h3>
                            <p className="text-white/40 text-sm mb-6">Location: {hotel.location}</p>
                            <Link href={`/hotels/${hotel.id}`} className="block text-center w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">
                                Check Winter Availability
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Winter Reality Check */}
            <section className="py-24 bg-white/5 border-t border-white/10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif text-white mb-6">The Winter Reality</h2>
                            <p className="text-white/60 mb-6 leading-relaxed">
                                Winter in Spiti (Jan-Feb) sees temperatures drop to -25°C. Water freezes in pipes, and heavy snow can block roads for days.
                            </p>
                            <p className="text-white/60 mb-6 leading-relaxed">
                                Staying at the right place is not a luxury, it's a necessity. Our listed winter hotels are equipped with:
                            </p>
                            <ul className="text-white/70 space-y-2">
                                <li className="flex items-center gap-2"><ThermometerSnowflake className="w-4 h-4 text-cyan-400" /> Traditional Tandoor (Wood heaters)</li>
                                <li className="flex items-center gap-2"><ThermometerSnowflake className="w-4 h-4 text-cyan-400" /> Dry Pit Toilets (When water freezes)</li>
                                <li className="flex items-center gap-2"><ThermometerSnowflake className="w-4 h-4 text-cyan-400" /> Heavy insulation blankets</li>
                            </ul>
                        </div>
                        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Essential Packing List</h3>
                            <ul className="grid grid-cols-2 gap-4 text-sm text-white/60">
                                <li>• -20°C Down Jacket</li>
                                <li>• Waterproof Boots</li>
                                <li>• Thermal Layers (x3)</li>
                                <li>• Woolen Socks (x5)</li>
                                <li>• UV Sunglasses</li>
                                <li>• Cold Cream/Lip balm</li>
                                <li>• Powerbank (Batteries die fast)</li>
                                <li>• Hot Water Bottle</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-serif text-white mb-10 text-center">Winter FAQs</h2>
                <div className="space-y-6">
                    <div className="bg-[#0f0f0f] border-l-4 border-cyan-500 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Will there be running water?</h3>
                        <p className="text-white/60">Mostly no. At -20°C, pipes burst. Hotels provide water in buckets for washing. For toilets, be mentally prepared to use dry compost toilets in many homestays.</p>
                    </div>
                    <div className="bg-[#0f0f0f] border-l-4 border-cyan-500 p-6 rounded-r-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Can we drive our own car?</h3>
                        <p className="text-white/60">Unless you are a 4x4 expert on black ice, NO. We strongly recommend hiring local 4x4 taxis with experienced winter drivers who know the terrain.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
