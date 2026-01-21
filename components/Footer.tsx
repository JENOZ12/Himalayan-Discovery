'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-24">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 mb-6">
                            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-sans font-bold mb-8 tracking-tighter mix-blend-difference">
                            HIMALAYAN<br />
                            <span className="text-[var(--gold-accent)] stroke-text">DISCOVERY</span>
                        </h2>
                        <p className="max-w-md text-white/50 text-lg font-light leading-relaxed mb-8">
                            Crafting premium expeditions across the roof of the world.
                            We believe in the luxury of silence, the thrill of the unknown, and the comfort of the finest hospitality.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--gold-accent)] hover:border-[var(--gold-accent)] hover:text-black transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[var(--gold-accent)] font-mono text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Expeditions', href: '/tours' },
                                { name: 'Premium Stays', href: '/hotels' },
                                { name: 'Travel Guide 2026', href: '/spiti-travel-guide-2026' },
                                { name: 'Our Story', href: '/about' },
                                { name: 'Journal', href: '/blog' },
                                { name: 'Contact', href: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xl font-serif text-white/70 hover:text-white hover:translate-x-2 transition-all block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trending Destinations (SEO Links) */}
                    <div>
                        <h4 className="text-[var(--gold-accent)] font-mono text-xs uppercase tracking-[0.2em] mb-8">Trending</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Spiti Bike Trip', href: '/destinations/spiti-valley-bike-trip' },
                                { name: 'Spiti Honeymoon', href: '/destinations/spiti-valley-honeymoon-package' },
                                { name: 'Winter Spiti 4x4', href: '/destinations/winter-spiti-expedition-4x4' },
                                { name: 'Chandratal Camping', href: '/destinations/chandratal-lake-camping-guide' },
                                { name: 'Kinnaur Road Trip', href: '/destinations/kinnaur-spiti-road-trip' },
                                { name: 'Kaza Travel Guide', href: '/destinations/kaza-travel-guide' },
                                { name: 'Manali to Spiti', href: '/destinations/manali-to-spiti-road-trip' },
                                { name: 'Pin Valley Park', href: '/destinations/pin-valley-national-park' },
                                { name: 'View All Destinations', href: '/destinations' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xl font-serif text-white/70 hover:text-white hover:translate-x-2 transition-all block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[var(--gold-accent)] font-mono text-xs uppercase tracking-[0.2em] mb-8">Contact // HQ</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start group cursor-pointer">
                                <MapPin className="w-6 h-6 text-white/50 group-hover:text-[var(--gold-accent)] transition-colors" />
                                <span className="text-white/70 group-hover:text-white transition-colors">
                                    Hotel White Nest (Basement)<br />
                                    Kalpa, Rogi Road<br />
                                    Kinnaur, HP – 172108
                                </span>
                            </li>
                            <li className="flex gap-4 items-center group cursor-pointer">
                                <Phone className="w-6 h-6 text-white/50 group-hover:text-[var(--gold-accent)] transition-colors" />
                                <span className="text-white/70 group-hover:text-white transition-colors">
                                    +91 97362 85518
                                </span>
                            </li>
                            <li className="flex gap-4 items-center group cursor-pointer">
                                <Mail className="w-6 h-6 text-white/50 group-hover:text-[var(--gold-accent)] transition-colors" />
                                <span className="text-white/70 group-hover:text-white transition-colors">
                                    thakur@himalayadiscovery.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-sm font-mono">
                        © 2026 HIMALAYAN DISCOVERY. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="text-white/30 text-sm font-mono hover:text-white transition-colors">PRIVACY POLICY</Link>
                        <a href="#" className="text-white/30 text-sm font-mono hover:text-white transition-colors">TERMS OF SERVICE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
