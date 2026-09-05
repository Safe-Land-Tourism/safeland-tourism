// Safe Land Tourism LLC - Premium Script (Inspired by myrightwaytours.com)
const businessData = {
    name: "SAFE LAND TOURISM LLC",
    logoText: "SAFE",
    managingDirector: "Sheikh Rasel",
    designation: "Managing Director",
    phone: "+971 50 491 5900",
    whatsapp: "971504915900", // Format for WhatsApp link
    email: "info@safelandtourism.com",
    website: "www.safelandtourism.com",
    address: "Hor Al Anz, Deira Dubai, UAE",
    currency: "AED",

    // Social Links from Business Card
    social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        tiktok: "https://tiktok.com"
    },

    // Services listed on Business Card
    cardServices: [
        { name: "All Kinds of Group Tours", icon: "fa-users" },
        { name: "All Kinds of Tickets", icon: "fa-ticket-alt" },
        { name: "Hotel Booking", icon: "fa-hotel" },
        { name: "Travel & Transport", icon: "fa-bus" },
        { name: "Airport Pick & Drop", icon: "fa-plane-arrival" },
        { name: "Yacht Tour", icon: "fa-ship" },
        { name: "Helicopter Tour", icon: "fa-helicopter" },
        { name: "Limousine Ride", icon: "fa-car" },
        { name: "Speed Boat Tour", icon: "fa-anchor" },
        { name: "Sightseeing Tour", icon: "fa-city" },
        { name: "Desert Safari", icon: "fa-sun" },
        { name: "City Tours", icon: "fa-map-marked-alt" },
        { name: "Dhow Cruise Dinner", icon: "fa-water" },
        { name: "Theme Park & Water Park Tickets", icon: "fa-fort-awesome" }
    ],

    // Tour Packages & Attractions (myrightwaytours.com Style)
    tours: [
        {
            id: 1,
            title: "Evening Desert Safari with BBQ Dinner",
            category: "Desert Safari",
            price: 150,
            rating: "4.9 ★",
            duration: "6 Hours",
            pickup: "4x4 Hotel / Residence Pickup",
            image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
            description: "Experience dune bashing, camel riding, sandboarding, live belly dance & Tanoura show, falcon photo, and a lavish BBQ buffet dinner in the Dubai desert."
        },
        {
            id: 2,
            title: "Dubai Modern City Tour",
            category: "City Tours",
            price: 150,
            rating: "4.8 ★",
            duration: "4 Hours",
            pickup: "Hotel Pickup Included",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
            description: "Guided tour to Dubai Marina, Burj Al Arab (photo stop), Atlantis The Palm, Dubai Frame, Gold & Spice Souks, and Zabeel Palace."
        },
        {
            id: 3,
            title: "Dubai Marina Dhow Cruise Dinner",
            category: "Cruises & Water Activities",
            price: 180,
            rating: "4.7 ★",
            duration: "2 Hours",
            pickup: "Optional Transfers Available",
            image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80",
            description: "Sail through illuminated Dubai Marina on a traditional wooden Dhow. Includes international buffet dinner, live music, and Tanoura show."
        },
        {
            id: 4,
            title: "Burj Khalifa 124th & 125th Floor Ticket",
            category: "Attraction Tickets",
            price: 179,
            rating: "4.9 ★",
            duration: "Flexible",
            pickup: "Self Arrival at Dubai Mall",
            image: "https://images.unsplash.com/photo-1549814436-1e65842886f3?auto=format&fit=crop&w=600&q=80",
            description: "Get breathtaking 360-degree views of Dubai skyline from the observation deck of the world's tallest building."
        },
        {
            id: 5,
            title: "Dubai Helicopter Tour (12 Minutes)",
            category: "Luxury Tours",
            price: 620,
            rating: "4.9 ★",
            duration: "12 Minutes Flight",
            pickup: "Atlantis Helipad Departure",
            image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
            description: "Fly high over Dubai's famous landmarks: Burj Khalifa, Palm Jumeirah, Burj Al Arab, and World Islands."
        },
        {
            id: 6,
            title: "Luxury Yacht Cruise Experience",
            category: "Cruises & Water Activities",
            price: 250,
            rating: "4.8 ★",
            duration: "2 Hours",
            pickup: "Dubai Marina Harbour",
            image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80",
            description: "Enjoy a high-end luxury yacht tour along the Dubai shoreline, Bluewaters Island, and JBR with refreshments."
        },
        {
            id: 7,
            title: "VIP Limousine Ride in Dubai",
            category: "Luxury Tours",
            price: 450,
            rating: "4.9 ★",
            duration: "1 Hour",
            pickup: "Doorstep Pickup & Drop",
            image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
            description: "Ride like a celebrity through Dubai in a super-stretch luxury Limousine with private chauffeur and music system."
        },
        {
            id: 8,
            title: "Abu Dhabi Grand Mosque & City Tour",
            category: "City Tours",
            price: 220,
            rating: "4.9 ★",
            duration: "8 Hours",
            pickup: "Dubai Hotel Pickup",
            image: "https://images.unsplash.com/photo-1542468301-446a066ff059?auto=format&fit=crop&w=600&q=80",
            description: "Explore UAE's capital city including Sheikh Zayed Grand Mosque, Emirates Palace, Corniche, and Ferrari World photo stop."
        },
        {
            id: 9,
            title: "Atlantis Aquaventure & Lost Chambers Combo",
            category: "Attraction Tickets",
            price: 340,
            rating: "4.9 ★",
            duration: "Full Day",
            pickup: "Self Arrival at Palm Jumeirah",
            image: "https://images.unsplash.com/photo-1582650625119-3a11fef40899?auto=format&fit=crop&w=600&q=80",
            description: "Access Middle East's largest waterpark with thrilling water slides and explore the Lost Chambers Aquarium."
        }
    ]
};

// Function to Render Complete Website UI
function renderUI(data) {
    const app = document.getElementById('app');

    const html = `
    <!-- Top Contact Bar -->
    <div class="bg-red-600 text-white text-xs py-2 px-4 shadow">
        <div class="container mx-auto flex flex-wrap justify-between items-center">
            <div class="flex items-center space-x-4">
                <span><i class="fas fa-user text-yellow-300 mr-1"></i> ${data.managingDirector} (${data.designation})</span>
                <span><i class="fas fa-map-marker-alt text-yellow-300 mr-1"></i> ${data.address}</span>
            </div>
            <div class="flex items-center space-x-4">
                <a href="mailto:${data.email}" class="hover:underline"><i class="fas fa-envelope text-yellow-300 mr-1"></i> ${data.email}</a>
                <a href="tel:${data.phone}" class="hover:underline font-bold"><i class="fas fa-phone-alt text-yellow-300 mr-1"></i> ${data.phone}</a>
            </div>
        </div>
    </div>

    <!-- Main Navigation Bar -->
    <header class="bg-white shadow-md sticky top-0 z-40">
        <div class="container mx-auto flex justify-between items-center p-4">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-sm border-2 border-red-700 shadow">
                    ${data.logoText}
                </div>
                <div>
                    <h1 class="text-xl md:text-2xl font-black text-gray-900 tracking-tight">${data.name}</h1>
                    <p class="text-xs text-red-600 font-semibold tracking-wide">YOUR TRUSTED TRAVEL PARTNER IN DUBAI</p>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                <a href="https://wa.me/${data.whatsapp}" target="_blank" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold flex items-center text-sm shadow">
                    <i class="fab fa-whatsapp text-lg mr-2"></i> WhatsApp
                </a>
                <a href="tel:${data.phone}" class="hidden md:flex bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-full font-bold text-sm shadow">
                    <i class="fas fa-phone-alt text-sm mr-2"></i> Call Now
                </a>
            </div>
        </div>
    </header>

    <!-- Hero Banner (myrightwaytours Style) -->
    <section class="relative bg-gradient-to-r from-red-700 via-red-600 to-blue-900 text-white py-20 px-4 text-center">
        <div class="container mx-auto max-w-4xl">
            <span class="bg-yellow-400 text-gray-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Best Price Guarantee</span>
            <h2 class="text-3xl md:text-5xl font-black mb-4 leading-tight">Explore UAE With ${data.name}</h2>
            <p class="text-base md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">Book Desert Safaris, City Tours, Helicopter Rides, Luxury Yachts, Limousines & Attraction Tickets at Unbeatable Rates.</p>
            
            <div class="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/${data.whatsapp}?text=Hello%20Safe%20Land%20Tourism,%20I%20want%20to%20book%20a%20tour." target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg text-lg flex items-center">
                    <i class="fab fa-whatsapp text-xl mr-2"></i> Instant Booking
                </a>
                <a href="tel:${data.phone}" class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-lg shadow-lg text-lg flex items-center">
                    <i class="fas fa-phone-alt text-lg mr-2"></i> ${data.phone}
                </a>
            </div>
        </div>
    </section>

    <!-- Services Overview (From Business Card) -->
    <section class="bg-gray-100 py-12 px-4">
        <div class="container mx-auto">
            <h3 class="text-2xl md:text-3xl font-black text-gray-800 text-center mb-2">Our Services & Solutions</h3>
            <p class="text-gray-600 text-center mb-8">We provide complete travel and tourism services in Dubai & UAE</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                ${data.cardServices.map(service => `
                    <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md text-center border border-gray-200 transition">
                        <i class="fas ${service.icon} text-2xl text-red-600 mb-2"></i>
                        <h4 class="text-xs font-bold text-gray-800">${service.name}</h4>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Main Tours Section -->
    <main class="container mx-auto px-4 py-12">
        <div class="text-center mb-10">
            <h3 class="text-3xl font-black text-gray-900 mb-2">Popular UAE Tour Packages</h3>
            <p class="text-gray-600">Select your favorite tour and book directly via WhatsApp or Phone</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${data.tours.map(tour => `
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="relative">
                            <img src="${tour.image}" alt="${tour.title}" class="w-full h-56 object-cover">
                            <span class="absolute top-3 left-3 bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                                ${tour.category}
                            </span>
                            <span class="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded shadow">
                                ${tour.rating}
                            </span>
                        </div>
                        <div class="p-5">
                            <h4 class="text-xl font-bold text-gray-900 mb-2">${tour.title}</h4>
                            <div class="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                                <span><i class="fas fa-clock text-red-500 mr-1"></i> ${tour.duration}</span>
                                <span><i class="fas fa-car text-red-500 mr-1"></i> Transfer Available</span>
                            </div>
                            <p class="text-gray-600 text-sm line-clamp-2 mb-4">${tour.description}</p>
                        </div>
                    </div>
                    
                    <div class="p-5 pt-0 border-t border-gray-100 flex items-center justify-between mt-2">
                        <div>
                            <span class="text-xs text-gray-400 block font-semibold">Price per person</span>
                            <span class="text-2xl font-black text-red-600">${tour.price} ${data.currency}</span>
                        </div>
                        <button onclick="openModal(${tour.id})" class="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow transition">
                            View Details
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    </main>

    <!-- Modal Popup for Tour Details -->
    <div id="tourModal" class="fixed inset-0 bg-black bg-opacity-70 z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            <button onclick="closeModal()" class="absolute top-3 right-3 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 font-bold hover:bg-red-600 transition">
                &times;
            </button>
            <div id="modalContent" class="overflow-y-auto p-6">
                <!-- Dynamic Content Insertion -->
            </div>
        </div>
    </div>

    <!-- Contact & Footer Section -->
    <footer class="bg-gray-900 text-gray-300 py-12 mt-16">
        <div class="container mx-auto px-4 text-center">
            <h4 class="text-2xl font-black text-white mb-2">${data.name}</h4>
            <p class="text-sm text-yellow-400 font-semibold mb-4">${data.managingDirector} - ${data.designation}</p>
            <p class="text-sm mb-2"><i class="fas fa-map-marker-alt text-red-500 mr-2"></i> ${data.address}</p>
            <p class="text-sm mb-6"><i class="fas fa-envelope text-red-500 mr-2"></i> ${data.email} | <i class="fas fa-phone text-red-500 mr-2"></i> ${data.phone}</p>
            
            <div class="flex justify-center space-x-4 mb-8 text-xl text-gray-400">
                <a href="${data.social.facebook}" class="hover:text-red-500"><i class="fab fa-facebook-f"></i></a>
                <a href="${data.social.instagram}" class="hover:text-red-500"><i class="fab fa-instagram"></i></a>
                <a href="${data.social.youtube}" class="hover:text-red-500"><i class="fab fa-youtube"></i></a>
                <a href="${data.social.tiktok}" class="hover:text-red-500"><i class="fab fa-tiktok"></i></a>
            </div>

            <hr class="border-gray-800 mb-6">
            <p class="text-xs text-gray-500">&copy; ${new Date().getFullYear()} ${data.name}. All Rights Reserved.</p>
        </div>
    </footer>
    `;

    app.innerHTML = html;
}

// Function to Open Detail Modal
function openModal(tourId) {
    const tour = businessData.tours.find(t => t.id === tourId);
    if (!tour) return;

    const modalContent = document.getElementById('modalContent');
    const whatsappMessage = encodeURIComponent(`Hello Safe Land Tourism LLC,\nI want to book: "${tour.title}"\nPrice: ${tour.price} ${businessData.currency}\nPlease give me booking details.`);

    modalContent.innerHTML = `
        <img src="${tour.image}" alt="${tour.title}" class="w-full h-56 object-cover rounded-xl mb-4 shadow">
        <div class="flex justify-between items-center mb-2">
            <span class="bg-red-100 text-red-700 text-xs font-extrabold px-3 py-1 rounded-full">${tour.category}</span>
            <span class="text-yellow-600 font-bold">${tour.rating}</span>
        </div>
        <h3 class="text-2xl font-black text-gray-900 mb-3">${tour.title}</h3>
        
        <div class="bg-gray-50 p-4 rounded-xl mb-4 space-y-2 text-sm text-gray-700 border border-gray-100">
            <p><strong><i class="fas fa-clock text-red-600 mr-2"></i> Duration:</strong> ${tour.duration}</p>
            <p><strong><i class="fas fa-car text-red-600 mr-2"></i> Pickup & Drop:</strong> ${tour.pickup}</p>
            <p><strong><i class="fas fa-tag text-red-600 mr-2"></i> Price:</strong> <span class="text-xl font-black text-red-600">${tour.price} ${businessData.currency}</span> per person</p>
        </div>

        <h4 class="font-bold text-gray-800 mb-1">Package Overview:</h4>
        <p class="text-gray-600 text-sm leading-relaxed mb-6">${tour.description}</p>

        <div class="flex space-x-3">
            <a href="https://wa.me/${businessData.whatsapp}?text=${whatsappMessage}" target="_blank" class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 text-center rounded-xl shadow flex items-center justify-center">
                <i class="fab fa-whatsapp text-xl mr-2"></i> Book via WhatsApp
            </a>
            <a href="tel:${businessData.phone}" class="bg-blue-900 hover:bg-blue-800 text-white font-bold px-5 py-3 rounded-xl shadow flex items-center justify-center">
                <i class="fas fa-phone-alt"></i>
            </a>
        </div>
    `;

    document.getElementById('tourModal').classList.remove('hidden');
}

// Function to Close Modal
function closeModal() {
    document.getElementById('tourModal').classList.add('hidden');
}

// Initialize Render
renderUI(businessData);

