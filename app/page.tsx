'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import ReviewMarquee from '@/components/ReviewMarquee';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { ArrowRight, Mountain, Users, Shield, Compass, Star, MapPin, Mail, Clock, Calendar } from 'lucide-react';
import { tours, hotels } from '@/lib/data'; // Import Data
import { faqData } from '@/lib/faq-data';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// 6 Featured Slides with Locally Generated Realistic Images
const INITIAL_SLIDES = [
  {
    id: "spiti-4x4-expedition",
    title: "SPITI VALLEY",
    subtitle: "The Middle Land",
    desc: "In the depths of the Himalayas most remote mountains lies a cold desert guarded by the Golden Buddha of Langza.",
    img: "/visual-journey/langza.png",
    color: "#2DD4BF"
  },
  {
    id: "spiti-kinnaur-adventure",
    title: "KINNAUR",
    subtitle: "Land of Gods",
    desc: "A lush gateway to Spiti featuring the serene Nako Lake, ancient forts, and the last village of India.",
    img: "/visual-journey/nako.png",
    color: "#FBBF24"
  },
  {
    id: "chandratal-camp",
    title: "CHANDRATAL",
    subtitle: "Moon Lake",
    desc: "Camping by the pristine crescent-shaped lake situated at 4,300 meters. A night sky you will never forget.",
    img: "/hero/chandratal.png",
    color: "#60A5FA"
  },
  {
    id: "rohru-spiti-roadtrip",
    title: "PABBAR VALLEY",
    subtitle: "The Unexpected Route",
    desc: "Cross the mighty Chanshal Pass and explore the untouched beauty of Rohru and the Pabbar river.",
    img: "/hero/pabbar.png",
    color: "#F472B6"
  },
  {
    id: "shimla-spiti-overland",
    title: "SHIMLA ROUTE",
    subtitle: "The Classic Ascent",
    desc: "The gradual ascent from the Queen of Hills into the rugged terrain of Spiti. Perfect for acclimatization.",
    img: "/hero/shimla.png",
    color: "#34D399"
  },
  {
    id: "grand-circuit",
    title: "GRAND CIRCUIT",
    subtitle: "The Ultimate Road Trip",
    desc: "The magnum opus of Himalayan road trips. A complete circuit covering Shimla, Sarahan, Kalpa, Kaza, and Manali.",
    img: "/hero/grand.png",
    color: "#A78BFA"
  }
];

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  // State for Hero Interaction
  const [activeSlide, setActiveSlide] = useState(INITIAL_SLIDES[0]);
  const [nextSlides, setNextSlides] = useState(INITIAL_SLIDES.slice(1));
  const [isAnimating, setIsAnimating] = useState(false);

  // GSAP Animations
  useGSAP(() => {
    // 1. Hero Text Parallax
    gsap.to('.hero-bg-text', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // 2. Stats Reveal
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

    // 3. Section Headers Reveal
    gsap.utils.toArray('.section-header').forEach((header: any) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

  }, { scope: container });

  // Horizontal Scroll Animation
  useGSAP(() => {
    const sections = gsap.utils.toArray('.gallery-item');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#gallery-section',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (document.querySelector('#gallery-section') as HTMLElement)?.offsetWidth
      }
    });
  }, { scope: container });

  // Function to move to next slide (Auto or Manual)
  const moveToNextSlide = useCallback(() => {
    if (isAnimating) return;
    const nextSlide = nextSlides[0];
    if (!nextSlide) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        const newPool = [...nextSlides.slice(1), activeSlide];
        setActiveSlide(nextSlide);
        setNextSlides(newPool);
        setTimeout(() => setIsAnimating(false), 1200);
      }
    });

    tl.to('.hero-title', { y: -50, opacity: 0, duration: 0.4, ease: 'power2.in' })
      .to('.hero-desc', { y: -20, opacity: 0, duration: 0.3 }, "<")
      .to('.hero-bg-img', { opacity: 0, duration: 0.6 }, "<");

  }, [activeSlide, nextSlides, isAnimating]);

  const handleCardHover = (hoveredSlide: typeof INITIAL_SLIDES[0]) => {
    if (isAnimating || hoveredSlide.id === activeSlide.id) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        const remaining = nextSlides.filter(s => s.id !== hoveredSlide.id);
        const newPool = [...remaining, activeSlide];
        setActiveSlide(hoveredSlide);
        setNextSlides(newPool);
        setTimeout(() => setIsAnimating(false), 800);
      }
    });

    tl.to('.hero-title', { y: -50, opacity: 0, duration: 0.4, ease: 'power2.in' })
      .to('.hero-desc', { y: -20, opacity: 0, duration: 0.3 }, "<")
      .to('.hero-bg-img', { opacity: 0, duration: 0.6 }, "<");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating && document.hasFocus()) {
        moveToNextSlide();
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [moveToNextSlide, isAnimating]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set('.hero-title', { y: 50, opacity: 0 })
      .set('.hero-desc', { y: 20, opacity: 0 });

    tl.fromTo('.hero-bg-img',
      { scale: 1.3, opacity: 0 },
      { scale: 1.0, opacity: 1, duration: 1.8, ease: 'power2.out' }
    )
      .to('.hero-bg-img', { scale: 1.05, duration: 8, ease: 'none' }, "-=0.5")
      .to('.hero-title', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=8.0")
      .to('.hero-desc', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=7.8");

  }, [activeSlide]);

  const testimonials = [
    { name: "Priya Sharma", location: "Mumbai", text: "The most transformative journey of my life. The team's knowledge of hidden spots made all the difference.", rating: 5, avatar: "PS" },
    { name: "Rajesh Verma", location: "Delhi", text: "Absolutely seamless experience from booking to return. Spiti was magical!", rating: 5, avatar: "RV" },
    { name: "Anita Desai", location: "Bangalore", text: "Small group, big adventure. Met amazing people and saw breathtaking views.", rating: 5, avatar: "AD" },
  ];

  return (
    <main ref={container} className="bg-[var(--background)] overflow-x-hidden font-sans">

      {/* 1. INTERACTIVE HERO SECTION */}
      <section id="hero-section" className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img
            key={activeSlide.img}
            src={activeSlide.img}
            alt={activeSlide.title}
            className="hero-bg-img w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="hero-bg-text absolute bottom-0 left-0 w-full pointer-events-none select-none z-0">
          <span className="text-[15vw] font-bold text-white/[0.03] leading-none uppercase tracking-widest pl-10">
            Himalayas
          </span>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-20">
          <div className="text-white space-y-8 max-w-2xl">
            <h1 className="hero-title text-6xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tight uppercase">
              {activeSlide.title}
            </h1>
            <p className="hero-desc text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-md">
              {activeSlide.desc}
            </p>
            <div className="hero-desc">
              <Link
                href={`/tours/${activeSlide.id}`}
                style={{ backgroundColor: activeSlide.color }}
                className="inline-flex items-center gap-3 px-8 py-4 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Explore Details
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex gap-6 overflow-x-auto pb-10 scrollbar-hide snap-x pt-20 pl-10 items-center">
            {nextSlides.map((slide) => (
              <Link
                href={`/tours/${slide.id}`}
                key={slide.id}
                onMouseEnter={() => handleCardHover(slide)}
                className="
                            relative flex-shrink-0 w-[240px] h-[350px] rounded-[2rem] overflow-hidden cursor-pointer group 
                            transition-all duration-500 hover:w-[260px] hover:h-[370px] hover:shadow-2xl border-2 border-white/5 bg-black/50
                        "
                style={{ borderColor: slide.color }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-1 leading-tight">{slide.title}</h3>
                  <p className="text-white/60 text-[10px] uppercase tracking-wider">{slide.subtitle}</p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--gold-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                    View <ArrowRight size={10} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="lg:hidden absolute bottom-10 left-6 flex flex-col gap-4">
            <p className="text-xs text-white/40 uppercase tracking-widest">More Destinations</p>
            <div className="flex gap-4 overflow-x-auto w-full pb-4">
              {nextSlides.map((slide) => (
                <Link
                  href={`/tours/${slide.id}`}
                  key={slide.id}
                  className="w-16 h-16 rounded-lg overflow-hidden border border-white/20 flex-shrink-0 relative"
                >
                  <img src={slide.img} className="w-full h-full object-cover" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
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
        <p className="max-w-2xl mx-auto mt-12 text-white/50 text-lg leading-relaxed">
          Mission: To deliver unforgettable Himalayan travel experiences while preserving nature, respecting local culture, and empowering local communities.
        </p>
      </section>

      {/* 3. Featured Expeditions (Dynamic from Data) */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16 section-header">
            <div>
              <span className="text-[var(--gold-accent)] uppercase tracking-widest text-sm">Adventure Awaits</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mt-4">Featured <span className="italic text-white/50">Expeditions</span></h2>
            </div>
            <Link href="/tours" className="hidden md:flex items-center gap-2 text-white hover:text-[var(--gold-accent)] transition-colors uppercase tracking-widest text-sm font-bold">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.slice(0, 3).map((tour) => (
              <Link key={tour.id} href={`/tours/${tour.id}`} className="group relative block overflow-hidden rounded-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="mb-4 flex gap-4 text-xs font-bold uppercase tracking-widest text-[var(--gold-accent)]">
                    <span className="flex items-center gap-1"><Clock size={12} /> {tour.days}</span>
                    <span className="flex items-center gap-1"><Mountain size={12} /> {tour.difficulty}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">{tour.title}</h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-6 group-hover:text-white/80 transition-colors">{tour.description}</p>

                  <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                    View Itinerary <ArrowRight size={14} className="text-[var(--gold-accent)]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/tours" className="inline-block px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-[var(--gold-accent)] hover:text-black transition-colors">
              View All Expeditions
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Premium Stays (Dynamic from Data) */}
      <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16 section-header">
            <div>
              <span className="text-[var(--gold-accent)] uppercase tracking-widest text-sm">Luxury in Wilderness</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mt-4">Premium <span className="italic text-white/50">Stays</span></h2>
            </div>
            <Link href="/hotels" className="hidden md:flex items-center gap-2 text-white hover:text-[var(--gold-accent)] transition-colors uppercase tracking-widest text-sm font-bold">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.slice(0, 3).map((hotel) => (
              <Link key={hotel.id} href={`/hotels/${hotel.id}`} className="group bg-[#111] border border-white/10 overflow-hidden hover:border-[var(--gold-accent)] transition-colors duration-300 block">
                <div className="aspect-video overflow-hidden relative">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-[var(--gold-accent)] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                    {hotel.type}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest mb-3">
                    <MapPin size={12} className="text-[var(--gold-accent)]" /> {hotel.location}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[var(--gold-accent)] transition-colors">{hotel.name}</h3>
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: hotel.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-[var(--gold-accent)] text-[var(--gold-accent)]" />
                    ))}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors flex items-center gap-2">
                    Check Availability <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/hotels" className="inline-block px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-[var(--gold-accent)] hover:text-black transition-colors">
              View All Stays
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Horizontal Scroll Gallery Section */}
      <section id="gallery-section" className="h-screen bg-black overflow-hidden flex items-center relative">
        <div className="absolute top-12 left-12 z-20 mix-blend-difference">
          <span className="text-[var(--gold-accent)] uppercase tracking-widest text-sm block mb-2">Visual Journey</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">The <span className="italic text-white/50">Experience</span></h2>
        </div>

        <div className="flex flex-nowrap w-[600vw] h-full">
          {[
            { id: 1, title: 'Barren Beauty', img: '/visual-journey/kaza.png', loc: 'Kaza' },
            { id: 2, title: 'Starry Nights', img: '/visual-journey/chandratal.png', loc: 'Chandratal' },
            { id: 3, title: 'River Crossings', img: '/visual-journey/pin-valley.png', loc: 'Pin Valley' },
            { id: 4, title: 'Monastic Life', img: '/visual-journey/key.png', loc: 'Key Monastery' },
            { id: 5, title: 'Sacred Peaks', img: '/visual-journey/kalpa.png', loc: 'Kalpa' },
            { id: 6, title: 'Last Village', img: '/visual-journey/chitkul.png', loc: 'Chitkul' }
          ].map((item, i) => (
            <div key={i} className="gallery-item w-screen h-full relative flex-shrink-0 border-r border-white/10">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-24 left-12 z-10">
                <span className="text-9xl font-serif text-transparent stroke-text opacity-50 block mb-4">0{i + 1}</span>
                <h3 className="text-6xl font-bold text-white uppercase tracking-tighter mb-2">{item.title}</h3>
                <p className="text-[var(--gold-accent)] text-lg tracking-widest uppercase flex items-center gap-2">
                  <MapPin size={18} /> {item.loc}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* 6. Home Page FAQ Section */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[var(--gold-accent)] uppercase tracking-widest text-sm">Common Queries</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Traveler <span className="italic text-white/50">Essentials</span></h2>
          </div>

          <div className="space-y-4">
            {faqData.filter(q => q.category === 'Planning').slice(0, 7).map((item, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[var(--gold-accent)] transition-colors">
                <details className="w-full">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-serif text-lg text-white group-hover:text-[var(--gold-accent)] transition-colors">{item.question}</span>
                    <span className="text-white/50 group-open:hidden"><Plus size={20} /></span>
                    <span className="text-[var(--gold-accent)] hidden group-open:block"><Minus size={20} /></span>
                  </summary>
                  <div className="px-6 pb-6 text-white/70 leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/spiti-travel-guide-2026" className="text-white border-b border-[var(--gold-accent)] pb-1 hover:text-[var(--gold-accent)] transition-colors text-sm font-bold uppercase tracking-widest">
              View All 150+ Questions (2026 Edition)
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Review Marquee Section */}
      <ReviewMarquee />

      {/* 6. Newsletter Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-[0.2]"
            alt="Newsletter Background"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-0" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-[var(--gold-accent)] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Stay <span className="text-[var(--gold-accent)]">Connected</span>
            </h2>
            <p className="text-white/60 mb-8">
              Subscribe to receive exclusive offers, travel tips, and early access to new expeditions.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--gold-accent)] transition-colors"
                title="Enter your email"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[var(--gold-accent)] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Footer CTA */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[#1a1a1a]" />
        <div className="relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-serif text-white mb-8">Ready to <span className="text-[var(--gold-accent)]">Go?</span></h2>
          <Link href="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-[var(--gold-accent)] transition-colors duration-300">
            Start Your Journey
          </Link>
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-none opacity-5 pointer-events-none">
          <h1 className="text-[15vw] font-bold text-white whitespace-nowrap">HIMALAYAN DISCOVERY</h1>
        </div>
      </section>

    </main>
  );
}
