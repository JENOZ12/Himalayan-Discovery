'use client';
import Link from 'next/link';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img src="/hero/spiti.png" alt="Lost" className="w-full h-full object-cover filter grayscale brightness-50" />
            </div>

            <div className="relative z-10 text-center px-6">
                <h1 className="text-[12vw] md:text-[15vw] font-bold leading-none text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    404
                </h1>

                <h2 className="text-4xl md:text-6xl font-serif mb-6 relative">
                    Lost in the <span className="text-[var(--gold-accent)] italic">Wilderness?</span>
                </h2>

                <p className="text-lg md:text-xl text-white/70 mb-12 max-w-lg mx-auto relative font-light">
                    The trail you are following seems to observe disappeared. But every wrong turn is part of the adventure.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center relative">
                    <Link href="/" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[var(--gold-accent)] transition-all duration-300 flex items-center justify-center gap-2 rounded-sm group">
                        <Home size={18} className="group-hover:-translate-y-1 transition-transform" /> Return Home
                    </Link>
                    <Link href="/destinations" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-[var(--gold-accent)] hover:text-[var(--gold-accent)] transition-all duration-300 flex items-center justify-center gap-2 rounded-sm group">
                        <Compass size={18} className="group-hover:rotate-45 transition-transform" /> Explore Trails
                    </Link>
                </div>
            </div>
        </main>
    );
}
