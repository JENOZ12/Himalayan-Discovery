import { Metadata } from 'next';
import { tours } from '@/lib/data';
import { notFound } from 'next/navigation';
import TourDetailClient from './TourDetailClient';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const tour = tours.find((t) => t.id === id);

    if (!tour) {
        return {
            title: 'Tour Not Found',
        };
    }

    return {
        title: `${tour.title} | Himalayan Discovery`,
        description: tour.description.substring(0, 160),
        openGraph: {
            title: tour.title,
            description: tour.description.substring(0, 160),
            images: [
                {
                    url: tour.image,
                    width: 1200,
                    height: 630,
                    alt: tour.title,
                }
            ],
            type: 'website',
        },
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const tour = tours.find((t) => t.id === id);

    if (!tour) return notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: tour.title,
        description: tour.description,
        image: tour.image,
        provider: {
            '@type': 'Organization',
            name: 'Himalayan Discovery',
            url: 'https://himalayadiscovery.com'
        },
        itinerary: (tour.itinerary || []).map(item => ({
            '@type': 'TouristAttraction',
            name: item.title,
            description: item.desc
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <TourDetailClient params={params} />
        </>
    );
}
