import Navbar from '@/components/Navbar';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex items-center justify-center relative overflow-hidden">
            <Navbar />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--gold-accent)]/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 pt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Info */}
                <div>
                    <h1 className="text-6xl md:text-8xl font-serif text-white mb-8">Get in <br /><span className="text-[var(--gold-accent)] italic">Touch</span></h1>
                    <p className="text-xl text-white/60 mb-12 max-w-md">Planner your dream Himalayan adventure? We'd love to hear from you.</p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="p-4 glass rounded-full text-[var(--gold-accent)] group-hover:bg-[var(--gold-accent)] group-hover:text-black transition-all duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white text-lg font-serif mb-1">Visit Us</h4>
                                <p className="text-white/60 leading-relaxed">
                                    Kalpa, Rogi Road<br />
                                    Hotel White Nest (Basement Office)<br />
                                    Kinnaur, HP – 172108
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 glass rounded-full text-[var(--gold-accent)] group-hover:bg-[var(--gold-accent)] group-hover:text-black transition-all duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white text-lg font-serif mb-1">Call Us</h4>
                                <p className="text-white/60">+91 97362 85518</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 glass rounded-full text-[var(--gold-accent)] group-hover:bg-[var(--gold-accent)] group-hover:text-black transition-all duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-white text-lg font-serif mb-1">Email Us</h4>
                                <p className="text-white/60">thakur@himalayandiscovery.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="glass p-10 md:p-12 relative">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40">First Name</label>
                                <input type="text" className="w-full bg-white/5 border-b border-white/10 focus:border-[var(--gold-accent)] outline-none text-white py-2 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40">Last Name</label>
                                <input type="text" className="w-full bg-white/5 border-b border-white/10 focus:border-[var(--gold-accent)] outline-none text-white py-2 transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40">Email</label>
                            <input type="email" className="w-full bg-white/5 border-b border-white/10 focus:border-[var(--gold-accent)] outline-none text-white py-2 transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border-b border-white/10 focus:border-[var(--gold-accent)] outline-none text-white py-2 transition-colors resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-[var(--gold-accent)] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 mt-4">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </main>
    );
}
