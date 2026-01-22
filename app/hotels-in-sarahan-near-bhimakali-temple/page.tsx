import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';
import { ArrowUpRight, Check, MapPin, Landmark } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Hotels in Sarahan near Bhimakali Temple | 2025 Guide',
    description: 'Find the best hotels in Sarahan, Himachal Pradesh. Stay near the famous Bhimakali Temple with majestic views of Shrikhand Mahadev peak.',
    keywords: ['Hotels in Sarahan', 'Sarahan Inn', 'Bhimakali Temple Stay', 'Hotels near Jeori', 'View of Shrikhand Mahadev'],
    alternates: { canonical: 'https://himalayandiscovery.com/hotels-in-sarahan-near-bhimakali-temple' },
};

export default function SarahanPage() {
    const sarahanHotels = hotels.filter(h => h.location === 'Sarahan');

    return (
        <main className="min-h-screen bg-[var(--background)] selection:text-black selection:bg-[var(--gold-accent)]">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/sarahan-hero.png" alt="Sarahan Bhimakali Temple" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Hotels in Sarahan</h1>
                    <p className="text-[var(--gold-accent)] uppercase tracking-widest text-sm">Gateway to Kinnaur</p>
                </div>
            </section>

            <section className="py-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="prose prose-invert prose-lg">
                        <p>Sarahan is the beautiful gateway to Kinnaur, famous for the 800-year-old <strong>Bhimakali Temple</strong> and views of the <strong>Shrikhand Mahadev</strong> peak.</p>
                    </div>
                    {sarahanHotels.map(hotel => (
                        <div key={hotel.id} className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/2 h-[300px] md:h-auto">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-serif text-white mb-2">{hotel.name}</h3>
                                <p className="text-white/60 mb-6">{hotel.description}</p>
                                <Link href={`/hotels/${hotel.id}`} className="inline-block px-6 py-3 bg-[var(--gold-accent)] text-black font-bold uppercase text-xs tracking-widest rounded-lg">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Local Attractions */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">Exploring Sarahan</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10">
                            <Landmark className="w-8 h-8 text-[var(--gold-accent)] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Bhimakali Temple</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                One of the 51 Shakti Peethas, this 800-year-old wooden architectural marvel is the heart of Sarahan. The towering slate roof and intricate carvings are a photographer's delight.
                            </p>
                        </div>
                        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10">
                            <MapPin className="w-8 h-8 text-[var(--gold-accent)] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Bird Park</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Located near the temple, this pheasantry is home to the Monal, the state bird of Himachal Pradesh. A quiet walk here offers chances to spot rare Himalayan avian species.
                            </p>
                        </div>
                        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10">
                            <ArrowUpRight className="w-8 h-8 text-[var(--gold-accent)] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Hawa Ghar</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                A viewpoint that offers panoramic views of the Sutlej river valley below and the Shrikhand peaks above. Perfect for a sunset walk.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Essentials */}
            <section className="py-20 container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-serif text-white mb-8">Traveler Essentials</h2>
                <div className="grid md:grid-cols-2 gap-8 text-white/70">
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <Check className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                            <span><strong>Best Time:</strong> April to June for pleasant weather; September to November for clear mountain views.</span>
                        </li>
                        <li className="flex gap-3">
                            <Check className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                            <span><strong>Altitude:</strong> 2,300 meters (7,500 ft). Mild acclimatization stop before heading higher to Spiti.</span>
                        </li>
                    </ul>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <Check className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                            <span><strong>Distance:</strong> 160 km from Shimla (6-7 hours drive via Rampur).</span>
                        </li>
                        <li className="flex gap-3">
                            <Check className="w-5 h-5 text-[var(--gold-accent)] shrink-0" />
                            <span><strong>ATM:</strong> Available in Rampur and Jeori. It's advisable to carry cash for small shops.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-[#0f0f0f] border-t border-white/10">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">How far is Sarahan from Shimla?</h3>
                            <p className="text-white/60">Sarahan is approximately 165 km from Shimla. It takes about 6-7 hours by car due to winding mountain roads. It's a popular first stop on the Spiti Circuit.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">Can we see snow in Sarahan?</h3>
                            <p className="text-white/60">Yes, Sarahan receives snowfall from late December to February. Hotels like Sarahan Inn remain open and offer heating, making it a beautiful winter destination.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">Is the Shrikhand Mahadev view visible from the hotels?</h3>
                            <p className="text-white/60">Absolutely. The main highlight of staying at Sarahan Inn is the direct, unobstructed view of the majestic Shrikhand Mahadev peak right from your window.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

