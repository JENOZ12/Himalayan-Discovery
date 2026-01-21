export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-white">
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-serif mb-12 text-[var(--gold-accent)]">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-12 font-light">
                    <section>
                        <h2 className="text-3xl font-serif text-white mb-6">1. Introduction</h2>
                        <p className="text-white/70">
                            Welcome to Himalayan Discovery ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
                            This policy explains how we collect, use, and safeguard your data when you visit our website or book our premium expeditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-serif text-white mb-6">2. Information We Collect</h2>
                        <p className="text-white/70 mb-4">We collect information that you provide directly to us when you request a booking, subscribe to our newsletter, or contact us. This includes:</p>
                        <ul className="list-disc pl-6 space-y-2 text-white/70 marker:text-[var(--gold-accent)]">
                            <li>Personal details (Name, Email, Phone Number)</li>
                            <li>Travel preferences and special requirements</li>
                            <li>Emergency contact information for expeditions</li>
                            <li>Payment information (processed securely via third-party providers)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-serif text-white mb-6">3. How We Use Your Data</h2>
                        <p className="text-white/70">
                            Your data is used solely to craft your travel experience. We do not sell your personal information. We might use your email to send:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-white/70 marker:text-[var(--gold-accent)] mt-4">
                            <li>Itinerary confirmations and updates</li>
                            <li>Essential trip details and safety guides</li>
                            <li>Exclusive offers on upcoming expeditions (opt-out available)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-serif text-white mb-6">4. Security</h2>
                        <p className="text-white/70">
                            We implement top-tier security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                            While we strive to protect your personal information, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-serif text-white mb-6">5. Contact Us</h2>
                        <p className="text-white/70">
                            If you have any questions about this privacy policy, please contact us at: <br />
                            <span className="text-[var(--gold-accent)] text-lg block mt-2">thakur@himalayadiscovery.com</span>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
