import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';
import { ArrowUpRight, Mountain, Trees } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Homestays in Rakchham | Stays near Chitkul',
    description: 'Experience the serenity of Rakchham village. Located between Sangla and Chitkul, our homestays offer river views and dense pine forest trails.',
    keywords: ['Rakchham Homestay', 'Hotels near Chitkul', 'Sangla Valley Stays', 'River View Hotels Kinnaur', 'Shambhu Lodge Rakchham'],
    alternates: { canonical: 'https://himalayandiscovery.com/homestays-in-rakchham-kinnaur' },
};

export default function RakchhamPage() {
    const rakchhamHotels = hotels.filter(h => h.location === 'Rakchham');

    return (
        <main className="min-h-screen bg-[var(--background)] selection:text-black selection:bg-[var(--gold-accent)]">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/rakchham-hero.png" alt="Rakchham Valley" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Stays in Rakchham</h1>
                    <p className="text-[var(--gold-accent)] uppercase tracking-widest text-sm">The Hidden Jewel of Baspa Valley</p>
                </div>
            </section>

            <section className="py-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="prose prose-invert prose-lg text-center mx-auto mb-12">
                        <p>
                            Rakchham is often missed by travelers rushing to Chitkul. Situated at 3050m, it is a dense forest valley with the Baspa river flowing right through it.
                            Staying here connects you with nature in its purest form.
                        </p>
                    </div>
                    {rakchhamHotels.map(hotel => (
                        <div key={hotel.id} className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row-reverse">
                            <div className="md:w-1/2 h-[300px] md:h-auto">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
                    ))}
                </div>
            </section>

            {/* Rakchham Highlights */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">Why Choose Rakchham?</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Baspa River Walk</h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                Unlike Chitkul which can get crowded, Rakchham offers secluded river banks. You can walk for miles along the turquoise waters of the Baspa through pink buckwheat fields (in season).
                            </p>
                            <Trees className="w-12 h-12 text-[var(--gold-accent)]" />
                        </div>
                        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Forest Trails</h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                Rakchham is the transition zone between lush Kinnaur and barren Spiti. The dense cedar forests here are perfect for short hikes and spotting wildlife like the Himalayan Black Bear.
                            </p>
                            <Mountain className="w-12 h-12 text-[var(--gold-accent)]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Essentials */}
            <section className="py-20 container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-serif text-white mb-8">Rakchham Guide</h2>
                <div className="grid md:grid-cols-2 gap-8 text-white/70">
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <ArrowUpRight className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                            <span><strong>Location:</strong> 13km from Sangla and 10km before Chitkul.</span>
                        </li>
                        <li className="flex gap-3">
                            <ArrowUpRight className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                            <span><strong>Altitude:</strong> 3,050m. Nights are cold even in summer.</span>
                        </li>
                    </ul>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <ArrowUpRight className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                            <span><strong>Connectivity:</strong> Minimal. BSNL works occasionally. Disconnect to connect.</span>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
