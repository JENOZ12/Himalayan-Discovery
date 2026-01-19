import Navbar from '@/components/Navbar';

export default function ToursPage() {
    const tours = [
        { title: "Spiti 4x4 Expedition", days: "8 Days", route: "Shimla → Kinnaur → Spiti", price: "On Request" },
        { title: "Spiti & Kinnaur Adventure", days: "10 Days", route: "Shimla → Kinnaur → Spiti → Manali", price: "On Request" },
        { title: "Shimla to Spiti Overland", days: "9 Days", route: "Shimla → Spiti → Manali", price: "On Request" },
        { title: "Rohru to Spiti Road Trip", days: "8 Days", route: "Rohru → Pabbar Valley → Spiti", price: "On Request" },
        { title: "Rohru to Kinnaur Expedition", days: "7 Days", route: "Rohru → Kinnaur", price: "On Request" },
        { title: "Rohru – Kinnaur – Spiti Grand Tour", days: "12 Days", route: "Rohru → Kinnaur → Spiti", price: "On Request" },
    ];

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />
            <div className="pt-32 pb-20 px-6 container mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-2">Adventure Tours</h1>
                <p className="text-xl text-white/60 mb-16 max-w-2xl">Curated expeditions for the true explorer.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour, index) => (
                        <div key={index} className="glass p-8 group hover:bg-white/5 transition-all duration-500 cursor-pointer border-t border-white/10 hover:border-[var(--gold-accent)]/50">
                            <div className="h-64 bg-gray-900/50 mb-6 flex items-center justify-center text-white/20">
                                Image Placeholder
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[var(--gold-accent)] text-sm font-bold uppercase tracking-wider">{tour.days}</span>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[var(--gold-accent)] transition-colors">{tour.title}</h3>
                            <p className="text-white/60 text-sm mb-6">{tour.route}</p>
                            <button className="text-white text-sm uppercase tracking-widest border-b border-[var(--gold-accent)] pb-1 hover:text-[var(--gold-accent)] transition-colors">
                                View Itinerary
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
