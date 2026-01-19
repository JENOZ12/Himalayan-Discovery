'use client';

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const horizontalSection = useRef<HTMLDivElement>(null);
  const heroText = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    // 1. Hero Text Parallax
    gsap.to(heroText.current, {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // 2. Horizontal Scroll Section
    const races = horizontalSection.current;
    const racesWidth = (races as HTMLDivElement).scrollWidth;

    gsap.to(races, {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: '#horizontal-wrapper',
        start: 'top top',
        end: () => `+=${racesWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    // 3. Stats Reveal
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '#stats-section',
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power4.out',
    });

  }, { scope: container });

  const journeys = [
    { title: "Spiti 4x4", img: "https://images.unsplash.com/photo-1626621341120-d0403dc0e182?auto=format&fit=crop&q=80", desc: "The Middle Land" },
    { title: "Kinnaur Valley", img: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cbd5?auto=format&fit=crop&q=80", desc: "Land of Gods" },
    { title: "Manali Overland", img: "https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?auto=format&fit=crop&q=80", desc: "Gateway to Adventure" },
    { title: "Chandratal", img: "https://images.unsplash.com/photo-1605649487215-47678681491a?auto=format&fit=crop&q=80", desc: "The Moon Lake" },
  ];

  return (
    <main ref={container} className="bg-[var(--background)] overflow-x-hidden">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Fallback Image if video fails/loads late */}
          <img
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=3364&auto=format&fit=crop"
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Hero Background"
          />
          {/* Use a placeholder video if available, or keep image for stability. Using Image for now as requested "Free/Fast" */}
        </div>

        <div ref={heroText} className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-4 tracking-tighter mix-blend-overlay">
            HIMALAYAN
          </h1>
          <p className="text-xl md:text-3xl text-[var(--gold-accent)] font-light tracking-[0.5em] uppercase">
            Discovery
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm uppercase tracking-widest animate-bounce">
          Scroll to Explore
        </div>
      </section>

      {/* 2. Intro / About Section */}
      <section id="stats-section" className="py-24 px-6 container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-16">
          Uncharted <span className="text-[var(--gold-accent)] italic">Territories</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="stat-item">
            <h3 className="text-6xl font-bold text-white mb-2">25<span className="text-[var(--gold-accent)]">+</span></h3>
            <p className="text-white/60 uppercase tracking-widest text-sm">Years of Experience</p>
          </div>
          <div className="stat-item">
            <h3 className="text-6xl font-bold text-white mb-2">10k<span className="text-[var(--gold-accent)]">+</span></h3>
            <p className="text-white/60 uppercase tracking-widest text-sm">Happy Travelers</p>
          </div>
          <div className="stat-item">
            <h3 className="text-6xl font-bold text-white mb-2">100<span className="text-[var(--gold-accent)]">%</span></h3>
            <p className="text-white/60 uppercase tracking-widest text-sm">Local Immersion</p>
          </div>
        </div>
      </section>

      {/* 3. Horizontal Scroll (Scrollytelling) */}
      <section id="horizontal-wrapper" className="relative h-screen bg-[var(--background)] overflow-hidden flex flex-col justify-center">
        <div className="absolute top-10 left-10 z-10">
          <h3 className="text-white/50 uppercase tracking-widest text-sm">Curated Experiences</h3>
        </div>

        <div ref={horizontalSection} className="flex flex-nowrap h-[60vh] gap-12 px-10 w-fit">
          {journeys.map((item, i) => (
            <div key={i} className="relative w-[30vw] md:w-[25vw] h-full flex-shrink-0 group overflow-hidden border border-white/10 rounded-sm">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.7] group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-3xl font-serif text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h4>
                <p className="text-[var(--gold-accent)] text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
              </div>
            </div>
          ))}
          {/* "View All" Card */}
          <div className="w-[30vw] md:w-[25vw] h-full flex-shrink-0 flex items-center justify-center border border-[var(--gold-accent)]/30 hover:bg-[var(--gold-accent)]/10 transition-colors cursor-pointer group">
            <Link href="/tours" className="flex items-center gap-4 text-white group-hover:text-[var(--gold-accent)] transition-colors">
              <span className="text-2xl font-serif">View All Tours</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Footer CTA */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[#1a1a1a]" />
        <div className="relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-serif text-white mb-8">Ready to <span className="text-[var(--gold-accent)]">Go?</span></h2>
          <Link href="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-[var(--gold-accent)] transition-colors duration-300">
            Start Your Journey
          </Link>
        </div>

        {/* Decorative Text */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none opacity-5 pointer-events-none">
          <h1 className="text-[15vw] font-bold text-white whitespace-nowrap">HIMALAYAN DISCOVERY</h1>
        </div>
      </section>

    </main>
  );
}
