import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Hotels with Best Kinner Kailash View | Kalpa & Reckong Peo',
    description: 'Don\'t miss the sunrise over Kinner Kailash. Stay at these top-rated hotels in Kalpa offering direct views of the holy peaks.',
    keywords: ['Kinner Kailash View Hotels', 'Kalpa Sunrise View', 'Best view hotels Kinnaur'],
    alternates: { canonical: 'https://himalayandiscovery.com/hotels-with-kinner-kailash-view' },
};

export default function PeakViewPage() {
    const peakHotels = hotels.filter(h => h.features?.some(f => f.includes('Kinner Kailash') || f.includes('Mountain')));

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <section className="h-screen relative flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" alt="Kinner Kailash" className="w-full h-full object-cover brightness-50" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl md:text-9xl font-serif text-white mb-8 tracking-tighter">KINNER<br />KAILASH</h1>
                    <p className="text-xl text-white/80 font-light mb-12">Witness the divine from your balcony.</p>

                    <div className="grid gap-4 max-w-lg mx-auto">
                        {peakHotels.map(hotel => (
                            <Link key={hotel.id} href={`/hotels/${hotel.id}`} className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-xl flex items-center justify-between hover:bg-white hover:text-black transition-all group">
                                <span className="font-bold">{hotel.name}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Book Now →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mythology & Facts */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-[var(--gold-accent)] font-bold tracking-widest uppercase text-xs mb-4 block">The Legend</span>
                    <h2 className="text-3xl md:text-5xl font-serif mb-8">The Abode of Lord Shiva</h2>
                    <p className="text-lg text-black/70 leading-relaxed mb-12">
                        The Kinner Kailash (6,050m) is considered the winter abode of Lord Shiva. The prominent 79-foot vertical rock formation on top resembles a 'Shivling'.
                        It is said that the rock changes colors throughout the day—from silver in the morning to gold at sunset.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="font-bold text-xl mb-2">Kinner Kailash</h3>
                            <p className="text-sm text-gray-500">6,050m • The Main Peak</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="font-bold text-xl mb-2">Jorkanden</h3>
                            <p className="text-sm text-gray-500">6,473m • The Higher Peak</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="font-bold text-xl mb-2">Raldang</h3>
                            <p className="text-sm text-gray-500">5,499m • The Sharp Pinnacle</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Viewing Tips */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif mb-12 text-center text-[var(--gold-accent)]">How to get the best view?</h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <span className="text-4xl text-white/20 font-serif">01</span>
                            <div>
                                <h4 className="font-bold text-lg">Stay in Kalpa, not Peo</h4>
                                <p className="text-white/60 text-sm">Reckong Peo is the busy town below. Kalpa is 8km higher and offers significantly better, unobstructed views.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-4xl text-white/20 font-serif">02</span>
                            <div>
                                <h4 className="font-bold text-lg">Wake up at 5 AM</h4>
                                <p className="text-white/60 text-sm">The "Alpenglow"—when the sun hits the snow peaks before the valley—lasts only 15 minutes. Don't miss it.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-4xl text-white/20 font-serif">03</span>
                            <div>
                                <h4 className="font-bold text-lg">Visit the Suicide Point</h4>
                                <p className="text-white/60 text-sm">A short walk from our listed hotels leads to the Suicide Point (Roghi Road), offering a deadly vertical drop view of the valley.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
