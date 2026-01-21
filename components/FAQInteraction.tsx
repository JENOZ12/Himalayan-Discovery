'use client';
import { useState, useMemo } from 'react';
import { FAQItem } from '@/lib/faq-data';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQInteraction({ data }: { data: FAQItem[] }) {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const categories = ['All', ...Array.from(new Set(data.map(item => item.category)))];

    const filteredData = useMemo(() => {
        return data.filter(item => {
            const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase()) ||
                item.answer.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category === 'All' || item.category === category;
            return matchesSearch && matchesCategory;
        });
    }, [search, category, data]);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-12">
            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm sticky top-24 z-20">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search your question..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-[var(--background)] border border-white/20 rounded-full py-3 pl-12 pr-6 text-white text-sm focus:outline-none focus:border-[var(--gold-accent)] transition-colors"
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${category === cat
                                    ? 'bg-[var(--gold-accent)] text-black'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Questions List */}
            <div className="grid gap-4">
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-[var(--background)] border bg-white/5 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[var(--gold-accent)] shadow-[0_0_20px_rgba(255,215,0,0.1)]' : 'border-white/10 hover:border-white/30'
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-serif text-lg md:text-xl text-white font-medium pr-8 relative">
                                    <span className="text-[var(--gold-accent)]/30 absolute -left-4 -top-2 text-4xl font-serif opacity-20 select-none">Q</span>
                                    {item.question}
                                </span>
                                {openIndex === index ? <ChevronUp className="text-[var(--gold-accent)] shrink-0" /> : <ChevronDown className="text-white/50 shrink-0" />}
                            </button>

                            <div
                                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-white/70 leading-relaxed border-t border-white/5">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 text-white/40">
                        <p className="text-xl">No matching questions found.</p>
                        <button onClick={() => { setSearch(''); setCategory('All'); }} className="text-[var(--gold-accent)] mt-2 underline">Clear filters</button>
                    </div>
                )}
            </div>
        </div>
    );
}
