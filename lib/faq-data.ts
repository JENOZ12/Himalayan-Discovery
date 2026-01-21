export interface FAQItem {
    category: string;
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    // --- TRENDING 2026 (SISSU BAN & UPDATES) ---
    { category: "Sissu Ban", question: "Is Sissu completely closed to tourists from Jan 20 to Feb 28, 2026?", answer: "Yes, tourism is suspended for 40 days due to local deity rituals. Hotels and homestays are closed." },
    { category: "Sissu Ban", question: "Can I still drive through Sissu via Atal Tunnel to reach Keylong?", answer: "Yes, the highway (NH-3) remains open for transit to Keylong/Jispa. You cannot stop for sightseeing in Sissu." },
    { category: "Sissu Ban", question: "Which adventure activities are banned in Sissu?", answer: "All activities including Zipline, ATV rides, and boating in Sissu Lake are suspended." },
    { category: "Sissu Ban", question: "Are hotels in Sissu taking bookings for Feb 2026?", answer: "No. Bookings are paused. Look for stays in Keylong or Manali instead." },
    { category: "Sissu Ban", question: "Why did Sissu Gram Panchayat suspend tourism?", answer: "To honor the 'Dev Khel' (Deity Dance) and silence required for local rituals." },
    { category: "Sissu Ban", question: "Can I visit Sissu Lake or Waterfall during ritual?", answer: "No, access to these spots is restricted to locals only." },
    { category: "Sissu Ban", question: "Are day trips from Manali to Sissu allowed?", answer: "You can drive through, but stopping for leisure/picnics is discouraged." },
    { category: "Sissu Ban", question: "Is Sissu helipad operational for tourists?", answer: "Only for medical emergencies or VIP movement, not for joyrides." },
    { category: "Sissu Ban", question: "Which villages are open nearby?", answer: "Koksar (North Portal) and Keylong (District HQ) remains fully open." },

    // --- UNESCO & ECO-CONSCIOUS TRAVEL ---
    { category: "Eco-Travel", question: "What are Spiti Biosphere Reserve rules?", answer: "Strict 'Leave No Trace' policy. No camping near water bodies. No loud music." },
    { category: "Eco-Travel", question: "Green Fee for entering Spiti 2026?", answer: "Proposal for ₹200-500 environmental cess per vehicle at Sumdo/Losar checkpost." },
    { category: "Eco-Travel", question: "Where are Water Refill Stations in Kaza?", answer: "Available at Spiti Ecosphere office, Taste of Spiti, and Sol Cafe." },
    { category: "Eco-Travel", question: "Zero-Waste homestays in Pin Valley?", answer: "Look for homestays in Mud Village that use solar cookers and traditional insulation." },
    { category: "Eco-Travel", question: "Is single-use plastic banned?", answer: "Yes, strictly enforced. Plastic bottles/bags are confiscated at checkposts." },
    { category: "Eco-Travel", question: "Waste cleanup in Langza?", answer: "Join 'Healing Himalayas' or Ecosphere volunteers on weekends." },
    { category: "Eco-Travel", question: "EV charging in Spiti?", answer: "Kaza has a tentative charger at Kaza Ice Rink. Recharge at Reckong Peo is reliable." },
    { category: "Eco-Travel", question: "Can I take Tesla/EV to Spiti?", answer: "Risky in winter due to battery drain. Summer is possible with planning." },
    { category: "Eco-Travel", question: "What is High-Altitude Conscious Travel?", answer: "Using dry toilets, saving water, and respecting local silence." },

    // --- WINTER SPITI (SNOW LEOPARD) ---
    { category: "Winter", question: "Cost of Snow Leopard expedition 2026?", answer: "₹80,000 to ₹1,20,000 per person for a 7-day guided tour." },
    { category: "Winter", question: "Is Chicham Bridge accessible in Jan?", answer: "Yes, unless there is fresh heavy snowfall blocking the Kaza-Kibber road." },
    { category: "Winter", question: "Chances of spotting Snow Leopard in Feb?", answer: "High (60-70%). It is mating season, so they move frequently." },
    { category: "Winter", question: "Winter-Ready 4x4 rentals in Shimla?", answer: "We provide modified 4x4 Scorpios/Thars with snow chains." },
    { category: "Winter", question: "How to book Heated Homestay?", answer: "Contact us. We partner with homestays using traditional 'Bukhari' heating." },
    { category: "Winter", question: "Is Spiti River trek open?", answer: "Yes, walking on frozen river is possible with guides in Jan/Feb." },
    { category: "Winter", question: "Current temp in Kaza?", answer: "Expect -15°C day to -30°C night." },
    { category: "Winter", question: "Cham Dance dates Feb 2026?", answer: "Check Kibber and Komic monastery schedules. Usually around Losar." },
    { category: "Winter", question: "Shimla-Kinnaur road status?", answer: "Open. This is the only all-weather access to Spiti." },
    { category: "Winter", question: "Mandatory thermal gear?", answer: "Merino wool baselayers, -30°C rated down jacket, and insulated boots." },

    // --- PERMITS & DIGITAL NOMAD ---
    { category: "Digital Nomad", question: "Do Indians need permits 2026?", answer: "No. Just valid ID." },
    { category: "Digital Nomad", question: "Foreigner e-ILP process?", answer: "Apply on Himachal e-district portal. Physical verification at Peo is smoother." },
    { category: "Digital Nomad", question: "Peo SDM office open Saturdays?", answer: "Usually closed or half-day. Plan for weekdays." },
    { category: "Digital Nomad", question: "Kaza 5G / Starlink?", answer: "Jio 5G is live in Kaza market! Starlink is not legal yet." },
    { category: "Digital Nomad", question: "Best Wi-Fi cafes in Kaza?", answer: "The Himalayan Cafe and Sol Cafe have reliable fiber connections." },
    { category: "Digital Nomad", question: "Drone ban border villages?", answer: "Strictly banned in Chitkul, Gue, and Sumdo." },
    { category: "Digital Nomad", question: "Photography in Key Monastery?", answer: "DSLR fee ₹50. No photos inside prayer hall." },
    { category: "Digital Nomad", question: "Monastery volunteering?", answer: "Jibhi and Spiti Ecosphere offer volunteer programs." },
    { category: "Digital Nomad", question: "Nomad Pass?", answer: "Some hostels offer monthly stay packages (~₹15k/month)." },

    // --- FOOD & CULTURE ---
    { category: "Food Culture", question: "Seabuckthorn harvest time?", answer: "September. You can join locals in harvesting 'Drilbu' berries." },
    { category: "Food Culture", question: "Halda Festival 2026?", answer: "Lahaul valley festival, usually mid-January." },
    { category: "Food Culture", question: "Losar with locals?", answer: "Stay in a homestay during Feb to witness festivities." },
    { category: "Food Culture", question: "Best Mokthuk in Kaza?", answer: "Taste of Spiti serves authentic mutton mokthuk." },
    { category: "Food Culture", question: "Buy Yak Cheese?", answer: "Available at Komic monastery and Langza homestays." },
    { category: "Food Culture", question: "Barley Beer (Chhaang)?", answer: "Homemade brew. Ask your host politely." },
    { category: "Food Culture", question: "Gue Mummy ethics?", answer: "Do not make loud noise. Circumambulate clockwise." },
    { category: "Food Culture", question: "Weaving workshop?", answer: "Women in Kibber weaving cooperative offer demos." },
    { category: "Food Culture", question: "Farm-to-table in Tabo?", answer: "Tabo has vast apple and apricot orchards offering fresh meals." },

    // --- LOGISTICS 2026 ---
    { category: "Logistics", question: "Kunzum Pass opening 2026?", answer: "Expected early June due to low snow this year." },
    { category: "Logistics", question: "Petrol price Kaza?", answer: "Approx ₹102/L (higher than plains due to transport)." },
    { category: "Logistics", question: "Shared taxi Peo to Kaza?", answer: "Sumo service runs daily 7 AM from Peo bus stand." },
    { category: "Logistics", question: "Buffer days needed?", answer: "Keep 2 extra days for landslides/snow blocks." },
    { category: "Logistics", question: "Bike rentals in winter?", answer: "Closed. Roads are icy. Only locals ride." },
    { category: "Logistics", question: "Chandratal status early 2026?", answer: "Closed till June. Road blocked by snow at Batal." },
    { category: "Logistics", question: "Malling Nala status?", answer: "New tunnel/bridge work in progress. Expect 30 min delays." },
    { category: "Logistics", question: "Luxury Glamping 2026?", answer: "The Grand Dewachen and Spiti Village Resort are operational." },
    { category: "Logistics", question: "Leh to Spiti direct?", answer: "Nimu-Padum-Darcha road connects Zanskar to Lahaul, not Spiti directly." },

    // --- HEALTH & EMERGENCY ---
    { category: "Health", question: "Buy oxygen in Kaza?", answer: "Chemist shop near Kaza bus stand sells portable cans." },
    { category: "Health", question: "Kaza CHC emergency?", answer: "Yes, 24/7 doctors available." },
    { category: "Health", question: "Best AMS medicine?", answer: "Diamox (Acetazolamide) - consult doctor. Garlic soup helps too." },
    { category: "Health", question: "Solo women safety?", answer: "Safest region in India. Homestays are family-run." },
    { category: "Health", question: "Vehicle freeze solution?", answer: "Park facing sunrise. Use anti-freeze coolant. Pour hot water on filter." },
    { category: "Health", question: "Snow blindness?", answer: "Wear UV400 sunglasses even on cloudy days." },
    { category: "Health", question: "Helicopter evacuation?", answer: "Govt heli-taxi operates from Stingri/Kaza occasionally." },
    { category: "Health", question: "Kids under 5?", answer: "Doctors advise against it due to lower oxygen saturation." },

    // --- GENERAL PLANNING (Original Best) ---
    { category: "Planning", question: "What is the best time to visit Spiti Valley?", answer: "June to September for full circuit. Jan-Mar for winter." },
    { category: "Planning", question: "How many days are required?", answer: "9-10 days minimum for a comfortable trip." },
    { category: "Planning", question: "Is Spiti open in December?", answer: "Yes, via Shimla-Kinnaur route only." },
    { category: "Planning", question: "Budget for Spiti trip?", answer: "₹25k-30k (Budget) to ₹60k+ (Luxury)." },
    { category: "Planning", question: "Is 4x4 mandatory?", answer: "Highly recommended for comfort and safety." },
    { category: "Planning", question: "Can I drive my own car?", answer: "Yes, if you are skilled in mountain driving." },
    { category: "Planning", question: "Direct bus from Delhi?", answer: "HRTC to Reckong Peo, then connection to Kaza." },
    { category: "Permits", question: "Inner Line Permit cost?", answer: "Approx ₹500 via agents." },
    { category: "Essentials", question: "Mobile network?", answer: "Jio/Airtel in Kaza. BSNL elsewhere. No net in Chandratal." },
    { category: "Essentials", question: "ATM availability?", answer: "Kaza has the only reliable ATM." },
    { category: "Stay", question: "Homestay cost?", answer: "₹1200-1500 per person with meals." },
    { category: "Food", question: "Is vegetarian food available?", answer: "Yes, widely available." },
    { category: "Activities", question: "Highest Post Office?", answer: "Hikkim." },
    { category: "Activities", question: "Highest Village?", answer: "Komic." },
    { category: "Activities", question: "River Rafting?", answer: "In Spiti river near Kaza (seasonal)." },
    { category: "Biking", question: "Best bike?", answer: "Himalayan 450 or XPulse 200." },
    { category: "Biking", question: "Rental cost?", answer: "₹1500/day approx." },
    { category: "Winter", question: "Winter toilet?", answer: "Dry pit toilet." },
    { category: "Photography", question: "Drone rules?", answer: "No drones in military areas." },
    { category: "Destinations", question: "Chandratal camping?", answer: "Designated campsites only. 2km from lake." }
];
