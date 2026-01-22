import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';
import { ArrowUpRight, Check, MapPin, Star, Mountain, Coffee, Wifi, Thermometer } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Spiti Valley Hotels & Homestays | Best Stays in Kaza, Tabo, Nako',
    description: 'Find the best hotels and authentic homestays in Spiti Valley. From luxury tents in lovely Kaza to cozy mud houses in Nako and Tabo. Experience the warmth of Spitian hospitality.',
    keywords: ['Spiti Valley Hotels', 'Kaza Homestays', 'Hotels in Nako', 'Tabo Monastery Stay', 'Best Hotels in Spiti', 'Luxury Camps Spiti'],
    alternates: {
        canonical: 'https://himalayandiscovery.com/spiti-valley-hotels-homestays',
    },
};

export default function SpitiHotelsPage() {
    // Filter Spiti region hotels (Kaza, Tabo, Nako, Rakchham)
    const spitiHotels = hotels.filter(h => ['Kaza', 'Tabo', 'Nako', 'Rakchham'].includes(h.location));

    return (
        <main className="min-h-screen bg-[var(--background)] selection:text-black selection:bg-[var(--gold-accent)]">

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/spiti-night-sky.png"
                        alt="Spiti Valley Night Sky"
                        className="w-full h-full object-cover brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <span className="block text-[var(--gold-accent)] font-mono text-xs uppercase tracking-[0.2em] mb-4">
                        The Middle Land
                    </span>
                    <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
                        Authentic Stays in <br />
                        <span className="text-[var(--gold-accent)]">Spiti Valley</span>
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                        Experience life at 12,000 ft. From traditional mud homestays to modern luxury camps, discover the best places to stay in the Cold Desert.
                    </p>
                    <Link
                        href="#spiti-stays"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[var(--gold-accent)] transition-colors"
                    >
                        Find Your Stay <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Introduction SEO Content */}
            <section className="py-20 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6">Where to stay in Spiti?</h2>
                        <div className="prose prose-invert prose-lg text-white/60">
                            <p>
                                Accommodation in Spiti Valley has evolved beautifully. While <strong>Kaza</strong>—the headquarters—offers modern hotels with WiFi and heating, villages like <strong>Nako</strong> and <strong>Tabo</strong> offer a more immersive experience in traditional local homes.
                            </p>
                            <p>
                                At Himalayan Discovery, we prioritize properties that offer decent thermal insulation (crucial for Spiti's cold nights), clean washrooms, and warm hospitality. Our selection includes:
                            </p>
                            <ul className="grid grid-cols-2 gap-4 not-prose mt-4">
                                {[
                                    { icon: Wifi, text: 'Functional WiFi' },
                                    { icon: Thermometer, text: 'Heated Rooms / Bedding' },
                                    { icon: Coffee, text: 'Authnetic Local Food' },
                                    { icon: MapPin, text: 'Prime Locations' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                                        <item.icon className="w-4 h-4 text-[var(--gold-accent)]" /> {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="/images/kaza-monastery.png"
                            alt="Kaza Monastery View"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-sm font-mono">Monasteries and Mud Houses</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Hotels Listing */}
            <section id="spiti-stays" className="py-20 bg-white/5 mx-4 rounded-3xl">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Curated Spiti Collection</h2>
                        <p className="text-white/50">Top rated stays in Kaza, Tabo, and Nako.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {spitiHotels.map((hotel) => (
                            <Link href={`/hotels/${hotel.id}`} key={hotel.id} className="group block h-full">
                                <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden h-full hover:border-[var(--gold-accent)]/50 transition-all duration-300 flex flex-col">
                                    <div className="relative h-[250px] overflow-hidden">
                                        <img
                                            src={hotel.image}
                                            alt={hotel.name}
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="flex items-center gap-1 text-[var(--gold-accent)] text-xs font-bold uppercase tracking-wider">
                                                <MapPin className="w-3 h-3" /> {hotel.location}
                                            </span>
                                            <h3 className="text-xl font-serif text-white mt-1 group-hover:text-[var(--gold-accent)] transition-colors">
                                                {hotel.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-white/60 text-sm mb-6 line-clamp-3">
                                            {hotel.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {hotel.features?.slice(0, 3).map((feature, i) => (
                                                <span key={i} className="text-[10px] uppercase tracking-wider bg-white/5 text-white/50 px-2 py-1 rounded">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between mt-auto border-t border-white/10 pt-4">
                                            <span className="text-[var(--gold-accent)] text-sm font-medium">View Property</span>
                                            <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-[var(--gold-accent)] text-black text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready for the Adventure?</h2>
                <p className="max-w-2xl mx-auto text-black/70 mb-10 text-lg">
                    Spiti Valley is remote and booking good stays can be tricky. Let us handle the logistics while you enjoy the journey.
                </p>
                <Link
                    href="/contact"
                    className="inline-block px-10 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
                >
                    Plan My Spiti Trip
                </Link>
            </section>

        </main>
    );
}
