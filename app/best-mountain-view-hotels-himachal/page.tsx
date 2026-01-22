import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';
import { Mountain } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Mountain View Hotels in Himachal | Kinnaur & Spiti',
    description: 'Wake up to snow-capped peaks. Explore our selection of hotels with the best mountain views in Kinnaur and Spiti Valley.',
    keywords: ['Mountain View Hotels', 'Hotels with view of Kinner Kailash', 'Scenic Hotels Himachal', 'Sarahan Inn View'],
    alternates: { canonical: 'https://himalayandiscovery.com/best-mountain-view-hotels-himachal' },
};

export default function MountainViewPage() {
    const viewHotels = hotels.filter(h => h.features?.some(f => f.includes('View') || f.includes('Mountain')));

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <section className="py-24 px-6 container mx-auto text-center">
                <Mountain className="w-16 h-16 text-[var(--gold-accent)] mx-auto mb-6" />
                <h1 className="text-4xl md:text-7xl font-serif text-white mb-8">Stays with a View</h1>
                <p className="max-w-2xl mx-auto text-white/50 text-xl">"I would rather wake up in the middle of nowhere than in any city on earth."</p>
            </section>

            <section className="pb-24 px-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {viewHotels.map(hotel => (
                        <Link href={`/hotels/${hotel.id}`} key={hotel.id} className="block group">
                            <div className="relative h-[400px] overflow-hidden rounded-t-full mb-6 border border-white/10 group-hover:border-[var(--gold-accent)] transition-colors">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-serif text-white mb-2">{hotel.name}</h3>
                                <p className="text-[var(--gold-accent)] text-xs font-mono uppercase tracking-widest">{hotel.location}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* The Magic of Views */}
            <section className="py-24 bg-gradient-to-b from-[#0f0f0f] to-black">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Why the View Matters</h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-12">
                        In the Himalayas, the mountains are not just scenery; they are constant companions. Staying at a property with a view changes your entire trip.
                        You watch the peak turn gold at sunrise, silver under the moon, and mystical when shrouded in clouds. It's a spiritual experience without leaving your room.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 border border-white/10 rounded-lg">
                            <span className="block text-[var(--gold-accent)] font-bold text-xl mb-1">Sunrise</span>
                            <span className="text-white/40 text-xs uppercase">05:30 AM - 06:15 AM</span>
                        </div>
                        <div className="p-4 border border-white/10 rounded-lg">
                            <span className="block text-[var(--gold-accent)] font-bold text-xl mb-1">Golden Hour</span>
                            <span className="text-white/40 text-xs uppercase">05:00 PM - 06:00 PM</span>
                        </div>
                        <div className="p-4 border border-white/10 rounded-lg">
                            <span className="block text-[var(--gold-accent)] font-bold text-xl mb-1">Star Gazing</span>
                            <span className="text-white/40 text-xs uppercase">09:00 PM Onwards</span>
                        </div>
                        <div className="p-4 border border-white/10 rounded-lg">
                            <span className="block text-[var(--gold-accent)] font-bold text-xl mb-1">Moonrise</span>
                            <span className="text-white/40 text-xs uppercase">Check Lunar Cycle</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-serif text-white mb-10 text-center">Viewpoint FAQs</h2>
                <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Do all rooms have views?</h3>
                        <p className="text-white/60">While our selected hotels are in prime view locations, usually 'Deluxe' or 'Premium' category rooms face the mountains directly. Standard rooms might have side views. We recommend booking the View Rooms specifically.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Which is better for views: Kalpa or Sarahan?</h3>
                        <p className="text-white/60">Both are unique. Sarahan offers a closer, greener view of the Shrikhand range. Kalpa offers a more dramatic, vertical 6000m+ face of the Kinner Kailash. Both are must-visits.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
