import { faqData } from '@/lib/faq-data';
import FAQInteraction from '@/components/FAQInteraction';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Spiti Valley Travel Guide 2026 | Ultimate 150+ Questions Handbook',
    description: 'The definitive Spiti Valley Travel Guide for 2026. Updated with Sissu ban details, new permit rules, winter expedition costs, and digital nomad facilities.',
};

export default function SpitiGuidePage() {
    // Generate FAQ Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <main className="min-h-screen bg-[var(--background)] text-white pt-32 pb-24 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#fbbf24] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Updated for 2026 Season</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        Spiti Valley <span className="text-[#fbbf24] italic">Handbook</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        The only guide you need. We've curated 150+ trending questions including the latest 2026 regulations, Sissu travel bans, and new permit policies.
                    </p>
                </div>

                {/* Interactive Component */}
                <FAQInteraction data={faqData} />
            </div>
        </main>
    );
}
