import Link from 'next/link';
import { notFound } from 'next/navigation';
import { seoPages } from '@/lib/seo-data';
import { tours } from '@/lib/data';
import { ArrowRight, Check, MapPin, Calendar, Star } from 'lucide-react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const page = seoPages.find((p) => p.slug === slug);
    if (!page) return {};

    return {
        title: page.metaTitle,
        description: page.metaDescription,
    };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = seoPages.find((p) => p.slug === slug);

    if (!page) {
        notFound();
    }

    const relatedTour = tours.find((t) => t.id === page.relatedTourId) || tours[0];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": page.title,
        "description": page.metaDescription,
        "image": [page.heroImage],
        "touristType": ["Adventure", "Nature"],
        "includesAttraction": page.features.map(f => ({
            "@type": "TouristAttraction",
            "name": f
        }))
    };

    return (
        <main className="min-h-screen bg-[var(--background)] text-white selection:bg-[var(--gold-accent)] selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={page.heroImage}
                        alt={page.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h2 className="text-[var(--gold-accent)] font-mono text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
                        {page.subtitle}
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight max-w-5xl mx-auto leading-[1.1]">
                        {page.title}
                    </h1>
                </div>
            </section>

            {/* Intro & Features */}
            <section className="py-24 px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <Breadcrumbs className="mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-serif text-white">
                                {page.introTitle}
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                {page.introText}
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {page.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                        <span className="text-[var(--gold-accent)]">✦</span>
                                        <span className="text-sm font-medium tracking-wide">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Long Form Article Content */}
                            <article className="mt-16 prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-a:text-[var(--gold-accent)] prose-strong:text-white/90 text-white/70">
                                <div dangerouslySetInnerHTML={{ __html: page.longContent }} />
                            </article>
                        </div>

                        {/* Related Tour Card */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl sticky top-24 backdrop-blur-sm">
                            <span className="bg-[var(--gold-accent)] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 inline-block">
                                Recommended Tour
                            </span>
                            <h3 className="text-3xl font-serif mb-4">{relatedTour.title}</h3>
                            <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/60">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {relatedTour.days}</span>
                                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {relatedTour.route || "Himachal"}</span>
                                <span className="flex items-center gap-2"><Star className="w-4 h-4 text-[var(--gold-accent)]" /> 5.0</span>
                            </div>
                            <p className="text-white/60 text-sm mb-8 line-clamp-3">
                                {relatedTour.description}
                            </p>

                            <div className="space-y-3">
                                {relatedTour.highlights?.slice(0, 3).map((h, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-green-400" />
                                        <span className="text-sm text-white/80">{h}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <Link href={`/tours/${relatedTour.id}`} className="block w-full bg-white text-black text-center py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[var(--gold-accent)] transition-all">
                                    View Itinerary
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Essential Travel Guide */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-serif text-white mb-16 text-center">Essential <span className="text-[var(--gold-accent)] italic">Guide</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Getting There */}
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[var(--gold-accent)] transition-colors">
                            <h3 className="text-xl font-bold uppercase tracking-widest text-[var(--gold-accent)] mb-6 flex items-center gap-3">
                                <MapPin className="w-5 h-5" /> Getting There
                            </h3>
                            <p className="text-white/70 leading-relaxed text-sm">
                                {page.gettingThere}
                            </p>
                        </div>

                        {/* Weather & Best Time */}
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[var(--gold-accent)] transition-colors">
                            <h3 className="text-xl font-bold uppercase tracking-widest text-[var(--gold-accent)] mb-6 flex items-center gap-3">
                                <Calendar className="w-5 h-5" /> Best Time & Weather
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <span className="block text-xs uppercase text-white/40 mb-1">Best Months</span>
                                    <p className="text-white text-sm font-medium">{page.bestTime}</p>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase text-white/40 mb-1">Expectations</span>
                                    <p className="text-white/70 text-sm leading-relaxed">{page.weatherInfo}</p>
                                </div>
                            </div>
                        </div>

                        {/* Things To Do */}
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[var(--gold-accent)] transition-colors">
                            <h3 className="text-xl font-bold uppercase tracking-widest text-[var(--gold-accent)] mb-6 flex items-center gap-3">
                                <Check className="w-5 h-5" /> Things to Do
                            </h3>
                            <ul className="space-y-4">
                                {page.thingsToDo.map((thing, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                                        <span className="text-[var(--gold-accent)] mt-1">✦</span>
                                        {thing}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-white/5">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-serif text-center mb-16">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {page.faq.map((item, i) => (
                            <div key={i} className="bg-[var(--background)] border border-white/10 p-8 rounded-2xl hover:border-[var(--gold-accent)]/50 transition-colors">
                                <h3 className="text-xl font-medium text-white mb-4 flex items-start gap-4">
                                    <span className="text-[var(--gold-accent)] font-mono">0{i + 1}.</span>
                                    {item.question}
                                </h3>
                                <p className="text-white/60 pl-10 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white/20">
                    Ready to Explore?
                </h2>
                <Link href="/contact" className="inline-flex items-center gap-3 text-2xl border-b border-[var(--gold-accent)] pb-2 hover:text-[var(--gold-accent)] transition-colors">
                    Start Planning Your Journey <ArrowRight className="w-6 h-6" />
                </Link>
            </section>

        </main>
    );
}
