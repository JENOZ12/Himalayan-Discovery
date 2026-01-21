'use client';


import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

export default function ContactPage() {
    const container = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.glass-card', {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
        })
            .from('.contact-text', {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out'
            }, "-=0.8");
    }, { scope: container });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = '919736282183';
        const text = `*New Inquiry* %0A%0A*Name:* ${formData.name} %0A*Phone:* ${formData.phone} %0A*Message:* ${formData.message}`;
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    return (
        <main ref={container} className="min-h-screen relative font-sans overflow-hidden">


            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/visual-journey/chandratal.png"
                    alt="Starry Night Spiti"
                    className="w-full h-full object-cover brightness-[0.4] scale-105"
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
            </div>

            <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center justify-center pt-24 pb-12">
                {/* Glassmorphic Card */}
                <div className="glass-card w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">

                    {/* Left: Info */}
                    <div className="p-12 md:p-16 flex flex-col justify-between bg-black/20 text-white relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold-accent)]/20 blur-[80px] rounded-full pointer-events-none" />

                        <div>
                            <span className="contact-text text-[var(--gold-accent)] uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Get in Touch</span>
                            <h1 className="contact-text text-5xl md:text-7xl font-serif leading-none mb-8">
                                Let's Plan <br /> <span className="italic text-white/50">Your Escape.</span>
                            </h1>
                            <p className="contact-text text-lg text-white/60 max-w-md font-light leading-relaxed">
                                Whether it's a 4x4 expedition through the snow or a quiet retreat in a monastery, we construct journeys, not just trips.
                            </p>
                        </div>

                        <div className="space-y-8 mt-16">
                            <div className="contact-text flex items-start gap-4 group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[var(--gold-accent)] transition-colors">
                                    <MapPin className="w-5 h-5 text-[var(--gold-accent)]" />
                                </div>
                                <div>
                                    <h4 className="uppercase tracking-widest text-xs font-bold mb-1 text-white/40">Headquarters</h4>
                                    <p className="text-white/90">Kalpa, Kinnaur, HP – 172108</p>
                                </div>
                            </div>

                            <div className="contact-text flex items-start gap-4 group cursor-pointer">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[var(--gold-accent)] transition-colors">
                                    <Phone className="w-5 h-5 text-[var(--gold-accent)]" />
                                </div>
                                <div>
                                    <h4 className="uppercase tracking-widest text-xs font-bold mb-1 text-white/40">Call / WhatsApp</h4>
                                    <p className="text-2xl font-serif text-white">+91 97362 85518</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-text flex gap-4 mt-12">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="p-12 md:p-16 bg-white/[0.02]">
                        <h3 className="contact-text text-2xl font-serif text-white mb-10">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="contact-text group">
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--gold-accent)] transition-colors"
                                    required
                                />
                            </div>
                            <div className="contact-text group">
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--gold-accent)] transition-colors"
                                    required
                                />
                            </div>
                            <div className="contact-text group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    placeholder="Tell us about your dream trip..."
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--gold-accent)] transition-colors resize-none"
                                    required
                                />
                            </div>

                            <button type="submit" className="w-full py-4 mt-4 bg-[#25D366] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 opacity-100 shadow-lg relative z-20">
                                Send Message via WhatsApp <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
