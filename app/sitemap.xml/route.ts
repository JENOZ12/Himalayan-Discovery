import { tours, hotels } from '@/lib/data';
import { seoPages } from '@/lib/seo-data';

export async function GET() {
    const baseUrl = 'https://himalayadiscovery.com';

    // Static Pages
    const staticPages = [
        { url: baseUrl, lastMod: new Date(), changeFreq: 'yearly', priority: 1.0 },
        { url: `${baseUrl}/about`, lastMod: new Date(), changeFreq: 'yearly', priority: 0.8 },
        { url: `${baseUrl}/contact`, lastMod: new Date(), changeFreq: 'yearly', priority: 0.8 },
        { url: `${baseUrl}/tours`, lastMod: new Date(), changeFreq: 'daily', priority: 0.9 },
        { url: `${baseUrl}/hotels`, lastMod: new Date(), changeFreq: 'daily', priority: 0.8 },

        { url: `${baseUrl}/privacy-policy`, lastMod: new Date(), changeFreq: 'yearly', priority: 0.5 },
        { url: `${baseUrl}/destinations`, lastMod: new Date(), changeFreq: 'weekly', priority: 0.9 },
    ];

    // New Landing Pages
    const landingPageUrls = [
        { url: `${baseUrl}/spiti-travel-guide-2026`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/best-hotels-in-kalpa`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/spiti-valley-hotels-homestays`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/hotels-in-sarahan-near-bhimakali-temple`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/homestays-in-rakchham-kinnaur`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/budget-hotels-in-kaza-spiti`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/luxury-hotels-in-kinnaur-valley`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/family-hotels-in-kalpa-kinnaur`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/best-mountain-view-hotels-himachal`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/shimla-to-spiti-road-trip-hotels`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/honeymoon-hotels-in-spiti-kinnaur`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/winter-spiti-valley-hotels`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/hotels-with-kinner-kailash-view`, lastMod: new Date(), changeFreq: 'monthly', priority: 0.7 },
    ];

    // Dynamic Pages
    const tourUrls = tours.map((tour) => ({
        url: `${baseUrl}/tours/${tour.id}`,
        lastMod: new Date(),
        changeFreq: 'weekly',
        priority: 0.8,
    }));

    const destinationUrls = seoPages.map((page) => ({
        url: `${baseUrl}/destinations/${page.slug}`,
        lastMod: new Date(),
        changeFreq: 'weekly',
        priority: 0.9,
    }));

    const hotelUrls = hotels.map((hotel) => ({
        url: `${baseUrl}/hotels/${hotel.id}`,
        lastMod: new Date(),
        changeFreq: 'monthly',
        priority: 0.7,
    }));

    const allUrls = [...staticPages, ...tourUrls, ...destinationUrls, ...hotelUrls];

    // XML Construction
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
            .map((item) => {
                return `
        <url>
            <loc>${item.url}</loc>
            <lastmod>${item.lastMod.toISOString()}</lastmod>
            <changefreq>${item.changeFreq}</changefreq>
            <priority>${item.priority}</priority>
        </url>`;
            })
            .join('')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
