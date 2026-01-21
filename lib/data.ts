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
        type: "VIEW",
        price: "On Request",
        rating: 4,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
        description: "Breathtaking mountain views, in-house restaurant, and cozy rooms. Wake up to the majestic Shrikhand Mahadev peak directly from your window.",
        features: ["Mountain Views", "Free WiFi", "Restaurant", "Hot Water", "Parking"],
        policies: ["Check-in: 12 PM", "Check-out: 11 AM", "No Pets"],
        gallery: getGallery(0)
    },
    {
        id: "rupin-river-view",
        name: "THE LEGENDARY RUPIN RIVER VIEW",
        location: "Rakchham",
        type: "RIVERSIDE",
        price: "On Request",
        rating: 5,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        description: "Ideally located by the river with scenic views and ample parking. Listen to the soothing sound of the Baspa river while you sip your morning tea.",
        features: ["Riverside Access", "Bonfire Area", "Scenic Views", "Garden", "Multi-cuisine Food"],
        policies: ["Check-in: 1 PM", "Check-out: 11 AM"],
        gallery: getGallery(2)
    },
    {
        id: "white-nest",
        name: "HOTEL WHITE NEST",
        location: "Kalpa",
        type: "PREMIUM",
        price: "On Request",
        rating: 5,
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200",
        description: "Central location with stunning views of the holy Kinner Kailash peak. Experience luxury in the lap of the Himalayas with wooden interiors.",
        features: ["Kinner Kailash View", "Premium Rooms", "Central Location", "Led TV", "Room Service"],
        policies: ["Couples Friendly", "No Smoking in Rooms"],
        gallery: getGallery(4)
    },
    {
        id: "him-paradise",
        name: "HOTEL HIM PARADISE",
        location: "Kalpa",
        type: "FAMILY",
        price: "On Request",
        rating: 4,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",
        description: "Perfect for families, featuring a restaurant and 24/7 assistance. Enjoy the warm hospitality and delicious local cuisine.",
        features: ["Family Friendly", "Restaurant", "24/7 Assistance", "Power Backup"],
        policies: ["Children Welcome", "Extra Bed Available"],
        gallery: getGallery(6)
    },
    {
        id: "royal-voyages",
        name: "HOTEL ROYAL VOYAGES",
        location: "Kalpa",
        type: "COMFORT",
        price: "On Request",
        rating: 4,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
        description: "Comfortable balcony rooms with hot water and a dedicated travel desk. Arranging your local sightseeing tours right from the reception.",
        features: ["Balcony Rooms", "Hot Water", "Travel Desk", "Car Rental"],
        policies: ["Check-in: 12 PM", "Check-out: 12 PM"],
        gallery: getGallery(8)
    },
    {
        id: "spiti-villa-resort",
        name: "THE SPITI VILLA RESORT",
        location: "Tabo",
        type: "LUXURY",
        price: "On Request",
        rating: 5,
        image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=1200",
        description: "Luxury cottages with a cafe, bonfire area, and peaceful environment. Experience the magic of Spiti nights under a blanket of stars.",
        features: ["Luxury Cottages", "Cafe & Bonfire", "Peaceful Environment", "Star Gazing"],
        policies: ["Silence after 10 PM", "Eco-friendly Zone"],
        gallery: getGallery(10)
    },
    {
        id: "palvey",
        name: "HOTEL PALVEY",
        location: "Kaza",
        type: "BUDGET",
        price: "On Request",
        rating: 3,
        image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?auto=format&fit=crop&q=80",
        description: "Central Kaza location with clean rooms and full travel support. Walking distance from the main market and monastery.",
        features: ["Central Location", "Clean Rooms", "Travel Support", "Budget Friendly"],
        policies: ["Cash Payment Preferred"],
        gallery: getGallery(12)
    },
    {
        id: "chanshal-camps",
        name: "CHANSHAL CAMPS & RESORTS",
        location: "Rohru",
        type: "ADVENTURE",
        price: "On Request",
        rating: 4,
        image: "https://images.unsplash.com/photo-1496545672479-7ac3764ca3c9?auto=format&fit=crop&q=80&w=1200",
        description: "Luxury tents and adventure activities amidst the mountains. The perfect spot for adrenaline junkies and nature lovers alike.",
        features: ["Luxury Tents", "Adventure Activities", "Mountain Views", "Trekking"],
        policies: ["Adventure Gear Rental"],
        gallery: getGallery(14)
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
