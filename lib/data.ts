export interface Tour {
    id: string;
    title: string;
    price: string;
    days: string;
    route?: string;
    difficulty: string;
    image: string;
    category: string;
    highlights: string[];
    description: string;
    fullDescription?: string;
    idealFor?: string;
    itinerary?: { day: string; title: string; desc: string }[];
    inclusions?: string[];
    exclusions?: string[];
}

export interface Hotel {
    id: string;
    name: string;
    location: string;
    type: string;
    price: string;
    rating: number;
    image: string;
    description: string;
    features?: string[];
    policies?: string[];
    gallery?: string[];
}

// Helper to generate multiple images
const unsplashHotels = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1571896349842-1e5828de31cb?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1568495248636-6432d97bd949?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1590073844006-333d45e16873?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1505691938895-1758d7fab541?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1496545672479-7ac3764ca3c9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200"
];

// Helper to check and get random images - simplistic rotation
const getGallery = (startIndex: number) => {
    const gallery = [];
    for (let i = 0; i < 10; i++) {
        gallery.push(unsplashHotels[(startIndex + i) % unsplashHotels.length]);
    }
    return gallery;
}

export const tours: Tour[] = [
    {
        id: "spiti-4x4-expedition",
        title: "Spiti 4x4 Expedition",
        price: "On Request",
        days: "8 Days",
        route: "Shimla → Kinnaur → Spiti",
        difficulty: "Moderate",
        image: "/images/spiti-suv.png",
        category: "Adventure",
        highlights: ["High-altitude Villages", "Chandratal Lake", "Key Monastery", "Comfy 4x4"],
        description: "A comfortable 4x4 expedition through the middle land. From high-altitude villages to the majestic Chandratal Lake.",
        idealFor: "Families, explorers, photographers",
        itinerary: [
            { day: "Day 1", title: "Shimla to Sarahan", desc: "Drive through apple orchards to the gateway of Kinnaur. Visit the Bhimakali Temple." },
            { day: "Day 2", title: "Sarahan to Kalpa", desc: "Views of Kinner Kailash and old suicide point. Stay in the apple country." },
            { day: "Day 3", title: "Kalpa to Kaza via Nako", desc: "Entering Spiti Valley through the desert terrain. Stop at Nako Lake & Gue Mummy." },
            { day: "Day 4", title: "Kaza Sightseeing", desc: "Key Monastery, Kibber, and high altitude villages like Langza & Hikkim." },
            { day: "Day 5", title: "Kaza to Chandratal", desc: "Crossing Kunzum Pass to the moon lake. Camping under the stars." },
            { day: "Day 6", title: "Chandratal to Manali", desc: "The adventurous drive through Batal and Chatru via Atal Tunnel." },
            { day: "Day 7", title: "Manali Leisure", desc: "Explore Old Manali and cafes. Relax after the journey." },
            { day: "Day 8", title: "Departure", desc: "Transfer to Chandigarh/Delhi." }
        ],
        inclusions: ["Comfortable SUV (Innova/Scorpio)", "Standard Hotels/Homestays", "Breakfast & Dinner", "Oxygen Cylinder", "Tour Guide"],
        exclusions: ["Lunch", "Personal Expenses", "Entry Fees", "Tips"]
    },
    {
        id: "spiti-kinnaur-adventure",
        title: "Spiti & Kinnaur Adventure",
        price: "On Request",
        days: "10 Days",
        route: "Shimla → Kinnaur → Spiti → Manali",
        difficulty: "Moderate",
        image: "/visual-journey/dhankar.png",
        category: "Adventure",
        highlights: ["Sangla Valley", "Chitkul", "Nako Lake", "Kalpa Views"],
        description: "The ultimate road trip combining the lush valleys of Kinnaur with the raw, rugged beauty of Spiti.",
        idealFor: "Long Himalayan journeys",
        itinerary: [
            { day: "Day 1", title: "Shimla to Sarahan", desc: "Start your journey through the lush green hills to the gateway of Kinnaur." },
            { day: "Day 2", title: "Sarahan to Sangla", desc: "Enter the stunning Baspa Valley. Visiting the ancient Kamru Fort." },
            { day: "Day 3", title: "Sangla to Chitkul to Kalpa", desc: "Visit India's last village, Chitkul. Drive to Kalpa for sunset views." },
            { day: "Day 4", title: "Kalpa to Tabo", desc: "Enter Spiti Valley. Visit Nako Lake and the 1000-year-old Tabo Monastery." },
            { day: "Day 5", title: "Tabo to Kaza via Dhankar", desc: "Visit Dhankar Monastery and Pin Valley before reaching Kaza." },
            { day: "Day 6", title: "Kaza Sightseeing", desc: "Langza, Hikkim (highest post office), and Komic (highest village)." },
            { day: "Day 7", title: "Kaza to Chandratal", desc: "Cross Kunzum Pass to the breathtaking Moon Lake." },
            { day: "Day 8", title: "Chandratal to Manali", desc: "Adventurous drive to Manali via Atal Tunnel." },
            { day: "Day 9", title: "Manali Local", desc: "Relaxation and local sightseeing in Manali." },
            { day: "Day 10", title: "Departure", desc: "Drive back to Chandigarh/Delhi." }
        ],
        inclusions: ["All Transfers in SUV", "Accommodation on Twin Share", "Breakfast & Dinner", "Inner Line Permits"],
        exclusions: ["Lunch", "Monastery Entry Fees", "Personal Expenses"]
    },
    {
        id: "shimla-spiti-overland",
        title: "Shimla to Spiti Overland",
        price: "On Request",
        days: "9 Days",
        route: "Shimla → Spiti → Manali",
        difficulty: "Easy-Moderate",
        image: "/visual-journey/nako.png",
        category: "Road Trip",
        highlights: ["Tabo Monastery", "Dhankar Lake", "Gradual Ascent", "Scenic Highways"],
        description: "Perfect for first-timers. A gradual ascent from Shimla to Spiti allowing for better acclimatization and sightseeing.",
        idealFor: "First-time Spiti travelers",
        itinerary: [
            { day: "Day 1", title: "Arrival in Shimla", desc: "Acclimatize in the Queen of Hills." },
            { day: "Day 2", title: "Shimla to Sarahan", desc: "Drive to the home of Bhimakali Temple." },
            { day: "Day 3", title: "Sarahan to Kalpa", desc: "Spectacular views of the Kinner Kailash range." },
            { day: "Day 4", title: "Kalpa to Nako/Tabo", desc: "Crossing into the high desert landscape." },
            { day: "Day 5", title: "Tabo to Kaza", desc: "Via Dhankar Monastery and Pin Valley." },
            { day: "Day 6", title: "Kaza Exploration", desc: "Ki Monastery and Kibber Village." },
            { day: "Day 7", title: "Kaza to Chandratal", desc: "Camping by the pristine lake." },
            { day: "Day 8", title: "Chandratal to Manali", desc: "Crossing Rohtang or Atal Tunnel." },
            { day: "Day 9", title: "Departure", desc: "End of the journey." }
        ],
        inclusions: ["Transport", "Stay", "Meals (MAP Plan)", "Permits", "Driver Allowances"],
        exclusions: ["Lunch", "GST", "Any Airfare"]
    },
    {
        id: "rohru-spiti-roadtrip",
        title: "Rohru to Spiti Road Trip",
        price: "On Request",
        days: "8 Days",
        route: "Rohru → Pabbar Valley → Spiti",
        difficulty: "Challenging",
        image: "/images/chanshal-pass.png",
        category: "Offbeat",
        highlights: ["Chanshal Pass", "Pabbar Valley", "Unseen Routes", "No Crowds"],
        description: "For the true adventurer. Cross the mighty Chanshal Pass and enter Spiti via the less-traveled Pabbar Valley.",
        idealFor: "Offbeat & adventure lovers",
        itinerary: [
            { day: "Day 1", title: "Shimla to Rohru", desc: "Drive along the Pabbar river through apple orchards." },
            { day: "Day 2", title: "Rohru to Larot/Chanshal", desc: "Stay near the mighty Chanshal Pass." },
            { day: "Day 3", title: "Crossing Chanshal to Dodra Kwar", desc: "A thrilling off-road experience to remote villages." },
            { day: "Day 4", title: "Dodra to Jakha (Trek/Drive)", desc: "Explore the beautiful Rupin valley." },
            { day: "Day 5", title: "Return to Rohru", desc: "Drive back via Chanshal Pass." },
            { day: "Day 6", title: "Rohru to Rampur", desc: "Connecting to the Sutlej valley." },
            { day: "Day 7", title: "Rampur to Shimla", desc: "Return journey." },
            { day: "Day 8", title: "Departure", desc: "Leave from Shimla." }
        ],
        inclusions: ["4x4 Vehicle", "Camping Gear", "Experienced Guide", "All Meals"],
        exclusions: ["Personal Gear", "Insurance", "Tips"]
    },
    {
        id: "rohru-kinnaur-expedition",
        title: "Rohru to Kinnaur Expedition",
        price: "On Request",
        days: "7 Days",
        route: "Rohru → Kinnaur",
        difficulty: "Moderate",
        image: "/images/kinnaur-valley.png",
        category: "Cultural",
        highlights: ["Baspa Valley", "Tribal Culture", "Remote Villages", "Apple Orchards"],
        description: "Deep dive into the tribal heart of Himachal. Experience the unique culture and festivals of the Kinnauri people.",
        idealFor: "Cultural explorers",
        itinerary: [
            { day: "Day 1", title: "Shimla to Rohru", desc: "Journey into the apple heartland." },
            { day: "Day 2", title: "Rohru to Sungri to Sarahan", desc: "Crossing the Sungri grandeur." },
            { day: "Day 3", title: "Sarahan to Sangla", desc: "Into the beautiful Baspa Valley." },
            { day: "Day 4", title: "Sangla & Chitkul", desc: "Exploring the last Indian village." },
            { day: "Day 5", title: "Sangla to Kalpa", desc: "Views of the sacred Kinner Kailash." },
            { day: "Day 6", title: "Kalpa to Shimla", desc: "Long drive back via NH-5." },
            { day: "Day 7", title: "Departure", desc: "Tour ends." }
        ],
        inclusions: ["Homestay/Hotel", "Dinner & Breakfast", "Transport", "Local Guide"],
        exclusions: ["Lunch", "Personal expenses"]
    },
    {
        id: "grand-circuit",
        title: "Grand Circuit (Rohru-Kinnaur-Spiti)",
        price: "On Request",
        days: "12 Days",
        route: "Rohru → Kinnaur → Spiti",
        difficulty: "Challenging",
        image: "/images/camping-night.png",
        category: "Expedition",
        highlights: ["Complete Circuit", "Remote Valleys", "Immersive Journey", "Diverse Lscapes"],
        description: "The magnum opus of Himalayan road trips. A complete circuit covering every shade of the mountains.",
        idealFor: "Serious travelers & explorers",
        itinerary: [
            { day: "Day 1-2", title: "Shimla - Rohru Zone", desc: "Explore Pabbar Valley and Chanshal." },
            { day: "Day 3-4", title: "Kinnaur Valley", desc: "Sungri, Sarahan, endless apple orchards." },
            { day: "Day 5-6", title: "Sangla & Kalpa", desc: "The tribal circuit of lower Kinnaur." },
            { day: "Day 7-9", title: "Spiti Valley", desc: "Nako, Tabo, Kaza, Key Monastery." },
            { day: "Day 10", title: "Chandratal", desc: "Night camping at 14,000 feet." },
            { day: "Day 11", title: "Manali", desc: "The return to civilization." },
            { day: "Day 12", title: "Departure", desc: "From Manali to Chandigarh." }
        ],
        inclusions: ["Dedicated SUV", "All Accommodation", "All Meals", "Permits", "Oxygen"],
        exclusions: ["Flights", "Personal Expenses", "Insurance"]
    }
];

export const hotels: Hotel[] = [
    {
        id: "sarahan-inn",
        name: "SARAHAN INN",
        location: "Sarahan",
        type: "PREMIUM",
        price: "On Request",
        rating: 4,
        image: "https://lh3.googleusercontent.com/pw/AP1GczMuwlga2kaM42hj9Fftjav8_eFHoSu94YIS8aZxnYEnLXrogQLSAaKfSkBQtirjBb4keLiNhi7qu7qvCgoGyVA11a0vs93MFuKc7sjaYBZH_0LMnyQ=w477-h358-no",
        description: "Breathtaking mountain views, in-house restaurant, and cozy rooms. Wake up to the majestic Shrikhand Mahadev peak directly from your window.",
        features: ["Mountain View", "Family Friendly", "Free WiFi", "Restaurant", "Hot Water", "Parking"],
        policies: ["Check-in: 12 PM", "Check-out: 11 AM", "No Pets"],
        gallery: [
            "https://lh3.googleusercontent.com/pw/AP1GczMuwlga2kaM42hj9Fftjav8_eFHoSu94YIS8aZxnYEnLXrogQLSAaKfSkBQtirjBb4keLiNhi7qu7qvCgoGyVA11a0vs93MFuKc7sjaYBZH_0LMnyQ=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOWbTcqtyJR-_lTqKXZiGgVWqIOdSLNuZwlw-kY2sk5Ix4o3hdDvJBugCfuF4KZvEWumv6t1_vGL1geUYR_s9QBiB6vKQQNJAvoCzCdJorLeyiCRNA=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczONUI1F_9EoZXM8mfKN-mlwLzWcHq5_SLkQYaxmPoZLR1WstpWQ0bm-8UPw5MXrabb_Nvguw9Hu9YO5a3pNwMrhGzfhEuPZU7XFB_fOwUzvVaQzpwU=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOjaADlOrZrH0uPm-Jcka9avKvlqaQ16CTip3wVOpxNu5b84fczEOTueyHmxPC48NSAuPknt_-rEZqJpNKJGl0T1A0p_XtpETak8mxtKWS3b9kyL5U=w429-h322-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPO_W2knpqyQYNSRnRQny362gvYEHz4fSrnDyZ_mdFUXqCW6PFk3USpYVX_8PCtPKTOv49AYKjYrzOavA-YiFD62_RVG3i4-8QKCrX8RKYvhnZA1IE=w429-h322-no",
            "https://lh3.googleusercontent.com/pw/AP1GczO_iZZZV8v4BGxfPFTKmEX-oml6hg55fX0sxC9DbRT4aCwYAMuJYweSM3snv4Xf_klsYKawdrgPMVp2e4HbIZZ7P-dVo-9ve46wfB-lLVn0akJk7Gg=w572-h322-k-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMy5CbXcY8G8J24QSYtI5vnwpdFyGB6D9MEyztMXUHAZpGAk0cjQNKtF5IyiRKULSn2rQcgOfEahaCnhWSFzOER88m7hCE2FfzndQgYDLYlBDAD4hA=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPtgVxwSKJLc_6Qo-0posXHjFrOVqKEGgA1bWNhvC_NRO5Bs9JaJWT45y0HB0buHjsceq69PZ8VGyCm5J_uhSlmEbzT56iXXhCfkBYFRD5A2LgNb8M=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMf44WO3F0XUBdLlHJH1294uImmRk4D3zkal22BQ7Zy2RsF00e7ucOEfoBytsDIZv6kn90v3z57vL3t-5fEUR_0KgPXW5GdiG_Bx7QC8_544UXZc0w=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczN1WA7prKclCBaHcQzkIDKT09XXekE0jSViCDBwWRYkVZsBy8Uug2ZzNipE8dntE8JtmdOaNe-fDHiUnmJqz-67CP9zuBFR9_BEaFUhmU6Jhu3-Li0=w493-h370-no"
        ]
    },

    {
        id: "white-nest",
        name: "HOTEL WHITE NEST",
        location: "Kalpa",
        type: "PREMIUM",
        price: "On Request",
        rating: 5,
        image: "https://lh3.googleusercontent.com/pw/AP1GczNVL0AFerFlrke3LciFqnvfp54kudgEclrZigG6JP7wpflSuSrh4RZmhx62U1wGuaCVc1YU1HECIVlh0M8ciLwJHuvdPdZxdSv1wJulBQbLG7LFTw4=w236-h315-no",
        description: "Central location with stunning views of the holy Kinner Kailash peak. Experience luxury in the lap of the Himalayas with wooden interiors.",
        features: ["Mountain View", "Family Friendly", "Kinner Kailash View", "Premium Rooms", "Central Location", "Led TV", "Room Service"],
        policies: ["Couples Friendly", "No Smoking in Rooms"],
        gallery: [
            "https://lh3.googleusercontent.com/pw/AP1GczNVL0AFerFlrke3LciFqnvfp54kudgEclrZigG6JP7wpflSuSrh4RZmhx62U1wGuaCVc1YU1HECIVlh0M8ciLwJHuvdPdZxdSv1wJulBQbLG7LFTw4=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczNocx4P641JpWaTHFqkEvYEumzh6oGscgoyd_gQKlcTNzxsN_ooyOwkftO_pbiEIVRznMY2DPTLi_ZZLAupF1jNDpxq1TDzaDYdKlhBREX3EiKF3JI=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOqVFRG3Vh_KzL9eDjbzThhA8SaGs7CT0oWwaBYqJdVbQU4kMgwgsCx6eC0zH6S7DjS_HNjBnAQSkz5q3vhVlTXDZasgfSW4Lg5nrtLMx0E_RAjn6I=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMJRV7HvVjRKDl2ynQvPf63nSX_1Z8ZmHUjEw9u8Cbk6XhIhuiSWEbf5y_aB_v7TnuPzEtJmLtjrUyUIdm1UQXr48izEm-U4sPRqKOKm0gUgYkHuCE=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczN4pYCIr_tju1VxgUqn1AaV9k-oB-47OH7BSh7SsofUwZCT-zjA4VWzVuDZzpeb3qTVVttJ5YfOMaeqlbMNBuvyBAiIvWI9yPMLSlA665TcFgQFPkE=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPFHO8LLhnGPPH_LGaE3wfXqUEMCMSzbbHenbeeYZigyC-sfRmb5zXb9pK1S0lb7PrCIvGLtcf37pHE0eY51BI6vpT-Uf--v1HV29LAAxfQ8ZGrsZQ=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMsbhoHOGIhgCrlgbkuUz8qDFAyuJER0nDU8MWkFr84GrMvbf9Ti3kHtVa0_B6ivlmE2TqkkiG86_Hjx_vNWrXczC6rQeU8_IlDRz82UPnS7tLiXNc=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOHC6X48nokbWjEG4FGhcagzspkVTvqwDXRDDES988Q0oxHoiNt8UjAzqZPxrXeRVpLPfV9AaR0G1UcuOJbsPkYMHPNuHlWOC93KPVedajz4m87mTs=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPijJYHrObdmF9MzUcSrQ6ElWbVXBUqWkhaEiH4Aa1zxrIWMoLKD3lyWPixln2Ll3LhLel_0oGaInv4cL_clY-WZBeAAbE8rrQSweNIzChZiI8Y4cc=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMCg9JapFM_aLfV_hjjFu37-pQa-jDahicmNyfZ6ydT-iF4tUHm48s_vsLh7Mwf4CrEagF_nV2UohrHXv6VXn2kDe_UlN0_NaCaBD8dpDCdY6NBAn0=w236-h315-no"
        ]
    },
    {
        id: "him-paradise",
        name: "HOTEL HIM PARADISE",
        location: "Kalpa",
        type: "BUDGET",
        price: "On Request",
        rating: 4,
        image: "https://lh3.googleusercontent.com/pw/AP1GczPCRLs8YowDdKfXzAYcbmrSGzGFbUU07XZ01tnYJCIHdPheRHgYvAHhgRKxdF4xS9VGPCmqsTsfXJ-HxphEdXaezbdpeddxamBw8-DGqOg-GOBCxtQ=w477-h358-no",
        description: "Perfect for families, featuring a restaurant and 24/7 assistance. Enjoy the warm hospitality and delicious local cuisine.",
        features: ["Budget Friendly", "Family Friendly", "Restaurant", "24/7 Assistance", "Power Backup"],
        policies: ["Children Welcome", "Extra Bed Available"],
        gallery: [
            "https://lh3.googleusercontent.com/pw/AP1GczPCRLs8YowDdKfXzAYcbmrSGzGFbUU07XZ01tnYJCIHdPheRHgYvAHhgRKxdF4xS9VGPCmqsTsfXJ-HxphEdXaezbdpeddxamBw8-DGqOg-GOBCxtQ=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPsu-fdoYSKtirQ9u4KZ7-UNYG-sMjifa5Y174H_DLwdhP-rrNmqjRE22nKxafmATMc-6y2pgjSUqKbtbZQo_9JxnWwDZLJPRdI7vnqM8sc5yWORFk=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPow9WVXRlHDlamGjyp-_lP4L-TF9wdKr0lSnz_vNfMn8Z8an4oo7bpevmz8OQrAfMXjLrOrLZReIQYH_bIy7zkrOLQjPuPUPeUatCV-4VpN3s3YsU=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMFu_L-0jySI8_xuTShPVFsIjnrMOU7qAujn2MJIAEyknd2acpLT22vLVQGlsOVB4LUZvN2iA4GqjTvuK4X_8xZH78leiQ_KpHa5yfiVVVODPz6u2c=w478-h363-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMtdIL1HRkKRPG9HLsuRkF8HPYR6BIAEugcAoKFYNaXOSnge7TbB25p-pXZcF5tALkKdg21he0Yo2K5VXnbWOodS3KEBNUl0GWkoQzgmGDVS4RF0zI=w478-h363-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPVhVzZ2s1pYA9eH8-U2b-CygbBhMOclmwoTh9kZNHYrEEfF8pUfsZzYT80BRpdANYg3E6WbmWECC9DAdjTjmBq1N2gcfRF-YzxhcrhT1l4iGLzG-A=w201-h363-k-no",
            "https://lh3.googleusercontent.com/pw/AP1GczN1ha26smMA-uZzoF9DA8I7iCt85zgXwlay4qlVi8-h-PJnf2dsYp_17jRGdYA6p-8DTYIliYuF7QR6tvp7ruPAwW8AfX3NXs6_QG4gqLqyN5qJijE=w269-h363-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPPtVP2Vqai8wSa_S7r4DyYL_QmKwKyOBcq0N19hlETg1gh2WIxRDNcnSYdBMDs1ZxeQNdF7udNztKl-TEP9xF-0cONoP-Ty6V5Vlw67WgrWWj5G5k=w438-h328-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOeLiR4wrBWyZV0k6tFFVlAlA0daSGoxG5brxd_jz5mp6td34TE5oUwrSn0rKCcLEd6w28caD3rANqiv67nJJ3ihj01iMBM1omEqWyZuwEpjdfpRDE=w246-h328-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOyBTcYbhAG1blkb_hy4C_o6dcAEWPOpaWcn4_pE6IspsUTZx012qMY4DLWjk8x6Qe9RZzddVAnqwn183pXGEdZK6sEhZTW97Qh90r-hsNfMfESFdQ=w246-h328-no"
        ]
    },
    {
        id: "royal-voyages",
        name: "HOTEL ROYAL VOYAGES",
        location: "Kalpa",
        type: "BUDGET",
        price: "On Request",
        rating: 4,
        image: "https://lh3.googleusercontent.com/pw/AP1GczPOMNvvlCQuENYtfNz3Ta8mCHrOsaifg2TbuU3h6pYZpp4oNedVB9rl8-WRC445tz7nHgSzsVius2eWUZqZ5JHb6Y9gJ6qW8Do3CwbVVFOxQ8uh_7s=w225-h300-no",
        description: "Comfortable balcony rooms with hot water and a dedicated travel desk. Arranging your local sightseeing tours right from the reception.",
        features: ["Budget Friendly", "Balcony Rooms", "Hot Water", "Travel Desk", "Car Rental"],
        policies: ["Check-in: 12 PM", "Check-out: 12 PM"],
        gallery: [
            "https://lh3.googleusercontent.com/pw/AP1GczPOMNvvlCQuENYtfNz3Ta8mCHrOsaifg2TbuU3h6pYZpp4oNedVB9rl8-WRC445tz7nHgSzsVius2eWUZqZ5JHb6Y9gJ6qW8Do3CwbVVFOxQ8uh_7s=w225-h300-no",
            "https://lh3.googleusercontent.com/pw/AP1GczNGo_wKV7p81oYTSeLeeYPY2kOypN5rJr_kkck9_DTMKneOBr_T72_0CvVHBZ3_U4eTlj07XT4IoYaydbXV6lKBLRwk5KFLVt-pkL_eZXt0kGrZnlM=w400-h300-no",
            "https://lh3.googleusercontent.com/pw/AP1GczNMnrEXFiiiihKoWs4e91Df-8WwD7pAP7Bb4wuY-YIWoVUCkxr4g3_HmaQrWYaMRkF45isoi8aT74LTX0dUIVjfzMD9j34sTaxRngJJNYiL0rSCuMo=w400-h300-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOeqTlaYnq_vp5R7myocfFkuAXm5I9jAS_JTpei8QUY55nM27Hl4xG2yZLP6jofPXccV0vMebYJ7OwJGwoXFB6l0w42URE650nQkQcdJOx_H2M-IPs=w400-h300-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOT7DkWmwGksHTmia0MLcZuFO-Ii5544I0D_9XTgKXN3zPbWmhjmz6VOfkr303yJGcX3EeXI8jXIN6WkDeRVtRzyevZkG8IEwc5ZJ_B9xg86VYS_HM=w572-h303-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOFgEwzeQzvRF9nQ3fWi6b9DlpHZNPeIjzy05-9F1h4oSxwlpsdqHRWAZ4-nzgqgSH3ns2PObpyqQmzkTw_PgUHVbPrAEj_HUn5SAZl3Pxbxkhai0g=w226-h303-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMHjXKWWmtColNCIZ6N3z7aQUBu0dhd2zJUfsj-ziTM4tm2kl8CTnGOOY6gvuHkI58ioc-jb0bRIXOFscoyz6gNi0gd93PUQkrVcDi-dDvpkiz_rRc=w226-h303-no",
            "https://lh3.googleusercontent.com/pw/AP1GczNguRZ4VsxtwPnP-sxsYWYLWSqHu6xVaQn7h2mTXzoOQv_cCqCdRlETMuL0Y5DNQI-A2aM2q27cq3DiYI3Waat28eRFnSHpBw4vySaXmOnVFIBLlMM=w402-h303-no",
            "https://lh3.googleusercontent.com/pw/AP1GczM48A-68fz3hnHlmdWmItzoxbPnIqjmI6JZZByldEtpRxbnoXes3CgTpuQ5Up2wbJzZuY4vBlGHMnGLoW8PbvPuVGGDClqFv9qrgYFuau3BzFWXbNY=w225-h300-no",
            "https://lh3.googleusercontent.com/pw/AP1GczM3nuh_2yyWkOPDc1UGYgH6mxCLY4qo-iTN0Erpb6ZpGU-nnEzdgdgOPqA1DldnFwCAO4Q8Wgb45O5o5VTG-NNFrxdDZyoOEuBF5YsnmV4Czo5g2QQ=w400-h300-no"
        ]
    },
    {
        id: "shambhu-lodge",
        name: "SHAMBHU LODGE",
        location: "Rakchham",
        type: "PREMIUM",
        price: "On Request",
        rating: 4,
        image: "https://lh3.googleusercontent.com/pw/AP1GczN7qq716YLTvhZ0KesCI-uokAqPnkOXjpr6GI6l1Hs1TQ09vD9H3D-NCmE2VAkF3Iit8VfptMGlFFVErh7-D42WLxXAD2vAKDQspejR_vLOSweVGow=w481-h314-no",
        description: "A warm and welcoming lodge in the beautiful village of Rakchham. Experience the local culture and hospitality.",
        features: ["Mountain View", "Family Friendly", "Valley View", "Home Cooked Food", "Cozy Rooms", "Parking"],
        policies: ["Cash Only"],
        gallery: [
            "https://lh3.googleusercontent.com/pw/AP1GczN7qq716YLTvhZ0KesCI-uokAqPnkOXjpr6GI6l1Hs1TQ09vD9H3D-NCmE2VAkF3Iit8VfptMGlFFVErh7-D42WLxXAD2vAKDQspejR_vLOSweVGow=w481-h314-no",
            "https://lh3.googleusercontent.com/pw/AP1GczP6yif9c3mIe2TPVGWHRnLtzJTnSGp2NTcbNXsd0i3UN8H2cey0iBdd-9B7V94sYxwPqJYj7x-3TVTpL42IvjIhvtC8fqI_1Ny4fPeLRBC8Fp3noe4=w235-h314-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPGuU-GiHvy5UXSvAs7JGc8xcndtxWqbjAPyzM0YpobqHA2K3cI6M5DkVNZ2jL4fBYlKgPSYIYS5Rk_fU3pHvwDdeoM3VX4CFX0_KXuKcFLunH8y4A=w235-h314-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPy-MPrvjLGgJLFwYrtNs81PBOn1f-mJIGd6lVUmYMcNdrKY7jsca1gJB4tN_tW13xEdQ9rD19oOgiL15P5SKnlgGY1NOd_XWbBnmwt90XQlIgf8Zk=w235-h314-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOd3-eIaQEyzmHTFjhEvypZyEITPyyigJ6yaDkhJRwwhTmI68N6O7-jtBEW5_9ySanLA1ZAkmeR0uRiHxF_UDYstAxaSxLFSzygyJqPTVoiWfLIV14=w235-h314-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMkfT8CFj1CZdvCF7pYsgHdRsR0jIO2uMg6wEImvkLF6Nf3OFNIrdfrxOIuyHgST07sDpNaX4AxPs2E42o8dKq9BsqWBDflOCO81i49zZxDSk7XeZo=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMVz6otJ_P3NLdwZdbEx-hMyueVziuhZ7u6XFf392weaDQ5Bv9qjDpIuJZybWxy3cz2v43NwDN8ZYNVz4Qw6XLhDxzLN-gnNoaQR04WbIpVOhRPdfQ=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPchurgQE7mxgs28QGKlG1RRQCqD88f19jNCrFaEIlWtC15BcqA_QPYvepsBtBr9QpmfoY1UCfr8lcQlS4QnKhuyvtfvdc2-7AKaPsmrzEVB73iYVk=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOL_dkOECQspcAUnjUtL_swwthfOz9SJgoamasuorGiN1UB6obcu1PH4oU6GihtFKH6O48I2owTm1GsQwZqt3BlOgFDHvyk6Ws11EBUNJaF-K06ejs=w236-h315-no",
            "https://lh3.googleusercontent.com/pw/AP1GczNPJmn-2DgdfE9xWjtU4cyJOt780hroPfwk9dB_-WmS7gJ5YtrjKBMPDimUj7XTuP58OOe1KOtzCqvNMASWlbRiGYqAapxmKElNPxeg-agT2hJXDtg=w236-h315-no"
        ]
    },
    {
        id: "palvey",
        name: "HOTEL PALVEY",
        location: "Kaza",
        type: "PREMIUM",
        price: "On Request",
        rating: 3,
        image: "https://lh3.googleusercontent.com/pw/AP1GczOgkNZjYRXHfSjB9C9TDF7sYRed64e1OhsReJnRKI7RcAslZdxGq-gHXU9REVy6fki6tB1xsWdxEGLu5JuwayShou91InwhkKvCAUfHnBmZqnOJTpE=w400-h300-no",
        description: "Central Kaza location with clean rooms and full travel support. Walking distance from the main market and monastery.",
        features: ["Mountain View", "Family Friendly", "Central Location", "Clean Rooms", "Travel Support"],
        policies: ["Cash Payment Preferred"],
        gallery: [
            "https://lh3.googleusercontent.com/pw/AP1GczOgkNZjYRXHfSjB9C9TDF7sYRed64e1OhsReJnRKI7RcAslZdxGq-gHXU9REVy6fki6tB1xsWdxEGLu5JuwayShou91InwhkKvCAUfHnBmZqnOJTpE=w400-h300-no",
            "https://lh3.googleusercontent.com/pw/AP1GczP_p4UOuYmno5QD2dQv6AF6ftsnwdtmOQ2TrlN5txLF_q1cfdH94uP1_ncIg_X6kEwP7pFM4u3R-xdyjGMtdjbB7XzJkvsrWFcp3IBWdVrcB-Yxj1Y=w400-h300-no",
            "https://lh3.googleusercontent.com/pw/AP1GczM5VFlAbiluZnpBwNru1jIHgtH9L3h3iCww3eUssGNWMp_nrMVCSuBGQWX3sFkMH6D70-Hph0Y99Fm_rQwj_qn_Yndl8GrGr7Gz0-OWhZv_tESFJZc=w400-h300-no",
            "https://lh3.googleusercontent.com/pw/AP1GczNpat2WC6mYWZuHkR896UtfUPki6habI-JbrhdN8tOH9tZLAdF3SdHrAHISO3DK6Zgvhj4kZY5JKmV_UFCn6rcTZUoQIvNXJFjv2tOKFTfrCCymPKA=w225-h300-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMC3rehYGY9uLeiLTnzShdAcVoT1wTMcxUVVLnocI2-8F7G-eEks0wlQif7a0g52r-hZk_W8dees_RIX3W-4-64mB5orO2pejzdo7-dJWc9G10exEs=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczPmYTVdr9DEQ7Z_6C47UT0i0vSyAssDYBYqFv8hxIolOyHtzy0LYClKIBIDhEi_0Od02Lhu2d-HfU9VN0AnK8TPhvT6bTXkLvyplaL1H_YRbkM7LPk=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczNmumW7YVvdEpdvN_8HsHEs3PBGmZgyomaPN1odqoH6dIRmyZyD8ljFXlmx9n745JBMxMvFcIrsnhCjYnvcM3DXNcBROhkUZRam5mv3b7z5vfjt7Gw=w477-h358-no",
            "https://lh3.googleusercontent.com/pw/AP1GczOkPCu3kixvGdKuTRKvLzehG0-4xTO55gZKuAnEacwUnS7CMZ9tA593rhILknwOQC1-7B7I-RVNgTufrPEHRnKpmRNFo6ALVP4R5oAIl2g5jiG0S5Y=w438-h328-no",
            "https://lh3.googleusercontent.com/pw/AP1GczM_gOKspuk4qOUhUhbwTLOonJypjibZQQlTehSRBNRsGpJbMhvtO8DqA942FI3kcGOXCFCMQ0w1bb79BLdgJUHKiJHFkhlnd6T9xoL0Oq-Cumrn88k=w246-h328-no",
            "https://lh3.googleusercontent.com/pw/AP1GczMD09iJBl7uChxHuHR5KIqXu3sHF6aUa4IOXBpbjS5WzqbQFv71TFWg69lonbodizL7PjAwNBWbZTH_tqjAoWsNuxJgzEuLMx2QprDwdxRjC0jYxhk=w246-h328-no"
        ]
    }
];

export const reviews = [
    { id: 1, name: "Aarav Patel", tourId: "spiti-4x4-expedition", text: "The Spiti expedition was life-changing. Every turn was a postcard." },
    { id: 2, name: "Sneha Reddy", tourId: "rohru-kinnaur-expedition", text: "Impeccable planning. The homestays in Kinnaur felt like family." },
    { id: 3, name: "Vikram Singh", tourId: "spiti-4x4-expedition", text: "Professional drivers and guides. Felt safe even on the toughest roads." },
    { id: 4, name: "Meera Kapoor", tourId: "shimla-spiti-overland", text: "Chandratal lake at sunrise is a memory I will cherish forever." },
    { id: 5, name: "Rohan Das", tourId: "grand-circuit", text: "The food instructions and acclimatization tips were spot on." },
    { id: 6, name: "Priya Malhotra", tourId: "spiti-kinnaur-adventure", text: "A true Himalayan experience. Not just a tour, but a journey." },
    { id: 7, name: "Amitabh Joshi", tourId: "shimla-spiti-overland", text: "Kaza was vibrant and beautiful. The monastery visits were spiritual." },
    { id: 8, name: "Nisha Gupta", tourId: "rohru-spiti-roadtrip", text: "Highly recommend the offbeat Rohru circuit. Zero crowds, pure nature." },
    { id: 9, name: "Karan Mehta", tourId: "spiti-4x4-expedition", text: "Everything from the SUV to the tents was premium quality." },
    { id: 10, name: "Sanya Iyer", tourId: "spiti-kinnaur-adventure", text: "Best decision to book with them. They know the mountains inside out." },
    { id: 11, name: "Rahul Khanna", tourId: "shimla-spiti-overland", text: "The night sky in Tabo left me speechless. Seamless logistics." },
    { id: 12, name: "Anjali Nair", tourId: "spiti-kinnaur-adventure", text: "Friendly team, great vibes, and unforgettable landscapes." },
    { id: 13, name: "Arjun Rao", tourId: "grand-circuit", text: "The drive through Kunzum Pass was thrilling yet safe. Kudos to the driver." },
    { id: 14, name: "Kavita Sharma", tourId: "spiti-4x4-expedition", text: "Just go for it. value for money and an experience of a lifetime." },
    { id: 15, name: "Vivek Chatterjee", tourId: "rohru-spiti-roadtrip", text: "Authentic local food and warm hospitality everywhere we stayed." },
    { id: 16, name: "Divya Agarwal", tourId: "rohru-spiti-roadtrip", text: "They took us to places that weren't even on Google Maps." },
    { id: 17, name: "Siddharth Jain", tourId: "spiti-kinnaur-adventure", text: "The itinerary was well-paced. Didn't feel rushed at all." },
    { id: 18, name: "Pooja Saxena", tourId: "shimla-spiti-overland", text: "My kids loved the snow and the yaks. Very family-friendly team." },
    { id: 19, name: "Manish Tiwari", tourId: "rohru-spiti-roadtrip", text: "A photographer's paradise. Thank you for stopping at every view point!" },
    { id: 20, name: "Riya Sen", tourId: "rohru-kinnaur-expedition", text: "Chitkul is truly the last village. So peaceful and pristine." },
    { id: 21, name: "Aditya Roy", tourId: "grand-circuit", text: "Grand Circuit is a must for serious travelers. Epic 12 days." },
    { id: 22, name: "Neha Bhatia", tourId: "spiti-4x4-expedition", text: "Safety was their priority. I traveled solo and felt completely secure." },
    { id: 23, name: "Varun Chopra", tourId: "rohru-kinnaur-expedition", text: "The glamping setup in Sangla was luxurious and cozy." },
    { id: 24, name: "Esha Deol", tourId: "grand-circuit", text: "Magical winters in Spiti. The White Spiti tour is a different world." },
    { id: 25, name: "Harsh Vardhan", tourId: "spiti-kinnaur-adventure", text: "Local expertise matters. These guys are the real deal." },
    { id: 26, name: "Zoya Khan", tourId: "grand-circuit", text: "Can't wait to come back for the Ladakh trip next year!" }
];
