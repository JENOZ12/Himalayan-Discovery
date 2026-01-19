import Navbar from '@/components/Navbar';

export default function HotelsPage() {
    const hotels = [
        { name: "Hotel Sarahan Inn", location: "Sarahan", features: ["Mountain View", "Restaurant"] },
        { name: "The Legendary Rupin River View", location: "Rakchham", features: ["Riverside", "Parking"] },
        { name: "Hotel White Nest", location: "Kalpa", features: ["Kinner Kailash View", "Premium Rooms"] },
        { name: "Hotel Him Paradise", location: "Kalpa", features: ["Family Friendly", "24/7 Assistance"] },
        { name: "Hotel Royal Voyages", location: "Kalpa", features: ["Balcony Rooms", "Travel Desk"] },
        { name: "The Spiti Villa Resort", location: "Tabo", features: ["Luxury Cottages", "Bonfire"] },
        { name: "Hotel Palvey", location: "Kaza", features: ["Central Location", "Clean Rooms"] },
        { name: "Chanshal Camps & Resorts", location: "Rohru", features: ["Luxury Tents", "Adventure Activities"] },
    ];

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />
            <div className="pt-32 pb-20 px-6 container mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-2">Premium Stays</h1>
                <p className="text-xl text-white/60 mb-16 max-w-2xl">Handpicked retreats with breathtaking views.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-sm">
                            <div className="aspect-video bg-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
                                {/* Placeholder for Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 z-0">
                                    {hotel.name} Image
                                </div>
                            </div>

                            <div className="mt-6 flex justify-between items-end">
                                <div>
                                    <p className="text-[var(--gold-accent)] text-sm font-bold uppercase tracking-wider mb-1">{hotel.location}</p>
                                    <h3 className="text-3xl font-serif text-white group-hover:text-[var(--gold-accent)] transition-colors">{hotel.name}</h3>
                                    <div className="flex gap-3 mt-3">
                                        {hotel.features.map(f => (
                                            <span key={f} className="text-xs text-white/50 border border-white/10 px-2 py-1 rounded-full">{f}</span>
                                        ))}
                                    </div>
                                </div>
                                <button className="px-6 py-2 border border-white/20 text-white hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest font-bold">
                                    Book Stay
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
