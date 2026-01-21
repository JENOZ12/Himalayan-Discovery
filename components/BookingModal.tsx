'use client';

import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    tourTitle: string;
}

export default function BookingModal({ isOpen, onClose, tourTitle }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '2'
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*Booking Inquiry: ${tourTitle}*
        
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Travel Date: ${formData.date}
Guests: ${formData.guests}

Please share pricing and availability.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919805367616?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-md bg-[#111] border border-white/20 rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-serif text-white mb-2">Request Spot</h2>
                <p className="text-white/50 text-sm mb-6">Start your journey for <span className="text-[#fbbf24]">{tourTitle}</span></p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fbbf24] transition-colors"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Phone</label>
                            <input
                                type="tel"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fbbf24] transition-colors"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Guests</label>
                            <input
                                type="number"
                                min="1"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fbbf24] transition-colors"
                                value={formData.guests}
                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Email (Optional)</label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fbbf24] transition-colors"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Preferred Date</label>
                        <input
                            type="date"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fbbf24] transition-colors scheme-dark"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 mt-4 bg-[#fbbf24] text-black font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
                    >
                        Send via WhatsApp <ArrowRight size={16} />
                    </button>

                    <p className="text-[10px] text-white/30 text-center">
                        We'll get back to you immediately with availability.
                    </p>
                </form>
            </div>
        </div>
    );
}
