import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Family Friendly Hotels in Kalpa | Safe & Comfortable Stays',
    description: 'Planning a family trip to Kinnaur? Check out our list of family-friendly hotels in Kalpa offering large rooms, hot water, and home-like food.',
    keywords: ['Family Hotels Kalpa', 'Hotels for kids Kinnaur', 'Safe hotels in Kalpa', 'Him Paradise Kalpa'],
    alternates: { canonical: 'https://himalayandiscovery.com/family-hotels-in-kalpa-kinnaur' },
};

export default function FamilyKalpaPage() {
    const familyHotels = hotels.filter(h => h.features?.includes('Family Friendly') || h.type === 'FAMILY');

    return (
        <main className="min-h-screen bg-[var(--background)] selection:text-black selection:bg-[var(--gold-accent)]">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0">
                    <img src="/images/family-hero.png" alt="Family Vacation" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Family Stays in Kalpa</h1>
                    <p className="text-white/80 text-xl">Safe, warm, and memorable for all ages.</p>
                </div>
            </section>

            <section className="py-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto grid gap-8">
                    {familyHotels.map(hotel => (
                        <div key={hotel.id} className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-2xl font-serif text-white mb-2">{hotel.name}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {hotel.features?.map((f, i) => (
                                            <span key={i} className="text-xs bg-black/30 text-white/70 px-2 py-1 rounded">{f}</span>
                                        ))}
                                    </div>
                                    <Link href={`/hotels/${hotel.id}`} className="text-[var(--gold-accent)] font-bold uppercase text-xs tracking-widest hover:underline">View Family Room Options</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Parent's Checklist */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">The Parent's Checklist</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-[#0f0f0f] p-6 rounded-xl border border-white/10 text-center">
                            <span className="text-3xl mb-4 block">💊</span>
                            <h3 className="text-white font-bold mb-2">Medical Aid</h3>
                            <p className="text-white/50 text-xs">Doctor on call and first-aid kits available at verified family stays.</p>
                        </div>
                        <div className="bg-[#0f0f0f] p-6 rounded-xl border border-white/10 text-center">
                            <span className="text-3xl mb-4 block">🍲</span>
                            <h3 className="text-white font-bold mb-2">Kid's Menu</h3>
                            <p className="text-white/50 text-xs">Customizable food options: less spice, boiled veggies, plain rice.</p>
                        </div>
                        <div className="bg-[#0f0f0f] p-6 rounded-xl border border-white/10 text-center">
                            <span className="text-3xl mb-4 block">🛏️</span>
                            <h3 className="text-white font-bold mb-2">Extra Beds</h3>
                            <p className="text-white/50 text-xs">Spacious rooms that can easily accommodate an extra mattress/cot.</p>
                        </div>
                        <div className="bg-[#0f0f0f] p-6 rounded-xl border border-white/10 text-center">
                            <span className="text-3xl mb-4 block">🔥</span>
                            <h3 className="text-white font-bold mb-2">Heating</h3>
                            <p className="text-white/50 text-xs">Active heating during cold nights to keep the little ones warm.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Family FAQs */}
            <section className="py-20 container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-serif text-white mb-10 text-center">Common Concerns</h2>
                <div className="space-y-6">
                    <div className="border-l-2 border-[var(--gold-accent)] pl-6 py-2">
                        <h3 className="text-lg font-bold text-white mb-2">Is Kalpa safe for children?</h3>
                        <p className="text-white/60">Yes, Kalpa is at 2960m/9700ft. While high, it is generally safe. However, ensure children run less and drink more water to avoid Altitude Mountain Sickness (AMS). Travel slowly from Shimla.</p>
                    </div>
                    <div className="border-l-2 border-[var(--gold-accent)] pl-6 py-2">
                        <h3 className="text-lg font-bold text-white mb-2">Are there hospitals nearby?</h3>
                        <p className="text-white/60">Reckong Peo (the district HQ) is just 20 minutes (8 km) down from Kalpa and has a fully equipped District Hospital in case of any medical needs.</p>
                    </div>
                    <div className="border-l-2 border-[var(--gold-accent)] pl-6 py-2">
                        <h3 className="text-lg font-bold text-white mb-2">What clothes should we pack for kids?</h3>
                        <p className="text-white/60">Even in summer, nights can be chilly. Pack layers: thermals, fleece jackets, and a windcheater. Woolen caps and socks are a must.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

