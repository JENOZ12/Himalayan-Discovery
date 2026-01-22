import { Metadata } from 'next';
import Link from 'next/link';
import { hotels } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Budget Hotels in Kaza | Affordable Stays in Spiti',
    description: 'Find clean, comfortable and affordable hotels in Kaza. Perfect for backpackers and road trippers looking for value in Spiti Valley.',
    keywords: ['Budget Hotels Kaza', 'Cheap stays Spiti', 'Hostels in Kaza', 'Hotel Palvey'],
    alternates: { canonical: 'https://himalayandiscovery.com/budget-hotels-in-kaza-spiti' },
};

export default function KazaBudgetPage() {
    const kazaHotels = hotels.filter(h => h.location === 'Kaza' || h.type === 'BUDGET');

    return (
        <main className="min-h-screen bg-[var(--background)] selection:text-black selection:bg-[var(--gold-accent)]">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://lh3.googleusercontent.com/pw/AP1GczOgkNZjYRXHfSjB9C9TDF7sYRed64e1OhsReJnRKI7RcAslZdxGq-gHXU9REVy6fki6tB1xsWdxEGLu5JuwayShou91InwhkKvCAUfHnBmZqnOJTpE=w400-h300-no" alt="Kaza Market" className="w-full h-full object-cover brightness-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Budget Stays in Kaza</h1>
                    <p className="text-[var(--gold-accent)] uppercase tracking-widest text-sm">Value for Money in the Cold Desert</p>
                </div>
            </section>

            <section className="py-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto space-y-12">
                    {kazaHotels.map(hotel => (
                        <div key={hotel.id} className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/2 h-[300px] md:h-auto">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-serif text-white mb-2">{hotel.name}</h3>
                                <p className="text-white/60 mb-6">{hotel.description}</p>
                                <div className="flex gap-4">
                                    <Link href={`/hotels/${hotel.id}`} className="px-6 py-3 border border-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-white hover:text-black transition-colors">Details</Link>
                                    <Link href="/contact" className="px-6 py-3 bg-[var(--gold-accent)] text-black font-bold uppercase text-xs tracking-widest rounded-lg">Check Rates</Link>
                                </div>
                            </div>
                        </div>
                </div>
            </section>

            {/* Kaza Highlights */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">Top Things to Do Near Kaza</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform">
                            <span className="text-[var(--gold-accent)] text-4xl font-serif block mb-4">01</span>
                            <h3 className="text-xl font-bold text-white mb-3">Key Monastery</h3>
                            <p className="text-white/60 text-sm">
                                Just 14 km from Kaza, this 1000-year-old monastery is the largest in Spiti. The view of the Spiti river from the roof is iconic.
                            </p>
                        </div>
                        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform">
                            <span className="text-[var(--gold-accent)] text-4xl font-serif block mb-4">02</span>
                            <h3 className="text-xl font-bold text-white mb-3">Hikkim & Komic</h3>
                            <p className="text-white/60 text-sm">
                                Visit the world's highest post office in Hikkim (send a postcard!) and the world's highest village connected by road, Komic.
                            </p>
                        </div>
                        <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform">
                            <span className="text-[var(--gold-accent)] text-4xl font-serif block mb-4">03</span>
                            <h3 className="text-xl font-bold text-white mb-3">Langza Buddha</h3>
                            <p className="text-white/60 text-sm">
                                The Fossil Village of Langza is famous for the giant golden Buddha statue watching over the valley and prehistoric marine fossils.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Travel Tips */}
            <section className="py-20 container mx-auto px-6 max-w-3xl text-center">
                <h2 className="text-3xl font-serif text-white mb-8">Tips for Budget Travelers</h2>
                <div className="prose prose-invert prose-lg mx-auto text-white/70">
                    <p>
                        Spiti can be expensive if not planned well. Staying in Kaza at a budget hotel like <strong>Hotel Palvey</strong> makes sense because it acts as a central hub.
                        You can hire a bike or share a taxi to visit nearby villages during the day and return to your affordable base at night.
                        Eating at local dhabas in the Kaza market is also much cheaper (and often tastier) than fancy cafes.
                    </p>
                    <p className="mt-6 font-bold text-white">
                        <span className="text-[var(--gold-accent)]">Important:</span> Only BSNL post-paid SIMs work reliably in Kaza. Jio/Airtel 4G is available in Kaza town but may be weak in surrounding villages.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-[#0f0f0f] border-t border-white/10">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">Common Questions</h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">Is there a petrol pump in Kaza?</h3>
                            <p className="text-white/60">Yes, Kaza has the world's highest petrol pump. However, stock can run out, so it's always recommended to top up at Powari/Reckong Peo before entering Spiti.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">Do budget hotels have hot water?</h3>
                            <p className="text-white/60">Yes, verified budget stays like Hotel Palvey provide hot water, usually via geysers or solar heating. In extreme winter, it might be bucket service.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-2">Is there an ATM in Kaza?</h3>
                            <p className="text-white/60">There is an SBI ATM in Kaza, but it is frequently out of cash or technical order. Carry sufficient cash from Shimla or Rampur.</p>
                        </div>
                    </div>
                </div>
            </section>

