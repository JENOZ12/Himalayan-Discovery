import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Hotels on Shimla to Spiti Route | Road Trip Stays',
    description: 'Planning a road trip to Spiti? Here is a guide to the best hotels for your night stops in Sarahan, Kalpa, Nako, and Kaza.',
    keywords: ['Shimla to Spiti Hotels', 'Sarahan to Kalpa Stays', 'Spiti Road Trip Accommodation', 'Circuit Hotels'],
    alternates: { canonical: 'https://himalayandiscovery.com/shimla-to-spiti-road-trip-hotels' },
};

export default function RoadTripPage() {
    // Order by route: Sarahan -> Kalpa -> Nako -> Kaza
    const routeOrder = ['Sarahan', 'Kalpa', 'Rakchham', 'Nako', 'Kaza'];
    const sortedHotels = [...hotels].sort((a, b) => routeOrder.indexOf(a.location) - routeOrder.indexOf(b.location));

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-12">
                <div className="absolute inset-0">
                    <img src="/images/road-trip-hero.png" alt="Spiti Road Trip" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-7xl font-serif text-white">The Spiti Circuit Stays</h1>
                </div>
            </section>

            <section className="py-10 px-6 container mx-auto">

                <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16">
                    {sortedHotels.map((hotel, index) => (
                        <div key={hotel.id} className="relative pl-8 md:pl-16">
                            <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-[var(--gold-accent)]" />
                            <span className="block text-white/30 font-mono text-xs uppercase tracking-widest mb-2">Stop {index + 1}: {hotel.location}</span>

                            <div className="bg-[#0f0f0f] p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors flex flex-col md:flex-row gap-6">
                                <img src={hotel.image} alt={hotel.name} className="w-24 h-24 rounded-lg object-cover" referrerPolicy="no-referrer" />
                                <div>
                                    <h3 className="text-xl font-serif text-white mb-2">{hotel.name}</h3>
                                    <p className="text-white/60 text-sm mb-4 max-w-xl">{hotel.description}</p>
                                    <Link href={`/hotels/${hotel.id}`} className="text-[var(--gold-accent)] text-sm font-bold hover:underline">Check Availability</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Spiti Circuit Info */}
            <section className="py-20 bg-white/5 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif text-white mb-6">Why Break the Journey?</h2>
                            <p className="text-white/60 text-lg mb-6">
                                The road from Shimla to Kaza is over 450km of winding mountain terrain. Attempting to rush it leads to fatigue and improper acclimatization (AMS).
                            </p>
                            <p className="text-white/60 text-lg mb-6">
                                We recommend the <strong>Golden Rule of Ascent:</strong>
                                Sleep at a higher altitude only after spending a day there.
                                Stopping at Sarahan (2300m) and Kalpa (2960m) prepares your body for Kaza (3800m).
                            </p>
                        </div>
                        <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-6">Estimated Drive Times</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/80">Shimla ➔ Sarahan</span>
                                    <span className="text-[var(--gold-accent)] font-mono">6-7 hrs</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/80">Sarahan ➔ Kalpa</span>
                                    <span className="text-[var(--gold-accent)] font-mono">3-4 hrs</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/80">Kalpa ➔ Nako</span>
                                    <span className="text-[var(--gold-accent)] font-mono">4-5 hrs</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/80">Nako ➔ Kaza</span>
                                    <span className="text-[var(--gold-accent)] font-mono">2-3 hrs</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-serif text-white mb-10 text-center">Road Trip FAQs</h2>
                <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Can I drive a hatchback on this route?</h3>
                        <p className="text-white/60">While people have done it, we highly recommend an SUV or a vehicle with high ground clearance (GC &gt; 180mm). The section from Nako to Kaza often has rough patches and stream crossings.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-2">Do these hotels have driver accommodation?</h3>
                        <p className="text-white/60">Yes, most hotels on the circuit (Sarahan Inn, Him Paradise) offer dormitory beds or modest rooms specifically for drivers at a nominal cost.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

