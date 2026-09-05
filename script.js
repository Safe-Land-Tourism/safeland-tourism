// Safe Land Tourism LLC - Complete Dynamic Script with Tour Details Modal
const businessData = {
    name: "Safe Land Tourism LLC",
    logoText: "Safe Land Tourism LLC ",
    phone: "+971 504915900",
    whatsapp: "971504915900", // Formatting for direct WhatsApp chat
    email: "safelandtourismdubai@yahoo.com",
    address: "37 Ali Bin Abi Taleb Street, Dubai, UAE",
    currency: "AED",
    
    // Detailed Tour Packages Data
    tours: [
        {
            id: 1,
            title: "Evening Desert Safari with BBQ Dinner",
            category: "Desert Adventure",
            price: 155,
            rating: "4.9 ★",
            duration: "6 Hours",
            pickup: "4x4 Shared Pickup from Hotel / Residence",
            image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
            description: "Experience the thrill of dune bashing in the Arabian desert. Includes dune bashing, camel riding, sandboarding, falcon photo ops, belly dance show, Tanoura dance, and a lavish BBQ buffet dinner with veg/non-veg options."
        },
        {
            id: 2,
            title: "Dubai City Tour (Half Day)",
            category: "City Sightseeing",
            price: 150,
            rating: "4.8 ★",
            duration: "4 Hours",
            pickup: "Hotel Pickup & Drop-off Available",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
            description: "Explore the modern and traditional side of Dubai! Visit Burj Al Arab (photo stop), Atlantis The Palm, Dubai Marina, Zabeel Palace, Gold Souk, Spice Souk, and Dubai Frame."
        },
        {
            id: 3,
            title: "Marina Dhow Cruise Dinner",
            category: "Cruises & Boat Rides",
            price: 180,
            rating: "4.7 ★",
            duration: "2 Hours",
            pickup: "Optional Hotel Transfers Available",
            image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80",
            description: "Enjoy a romantic 2-hour cruise along the Dubai Marina. Sail past illuminated skyscrapers while enjoying an international buffet dinner with live music and Tanoura dance performance."
        },
        {
            id: 4,
            title: "Burj Khalifa 124th & 125th Floor Tickets",
            category: "Attractions & Tickets",
            price: 179,
            rating: "4.9 ★",
            duration: "Flexible",
            pickup: "Direct Entry Ticket (Self Arrival at Dubai Mall)",
            image: "https://images.unsplash.com/photo-1549814436-1e65842886f3?auto=format&fit=crop&w=600&q=80",
            description: "Get breathtaking 360-degree views of Dubai from the observation decks of the world's tallest building. Includes high-speed elevator access and telescope views."
        },
        {
            id: 5,
            title: "Abu Dhabi Grand Mosque & City Tour",
            category: "City Sightseeing",
            price: 250,
            rating: "4.9 ★",
            duration: "8 Hours",
            pickup: "Hotel Pickup from Dubai",
            image: "https://images.unsplash.com/photo-1542468301-446a066ff059?auto=format&fit=crop&w=600&q=80",
            description: "Discover the capital of the UAE! Visit the iconic Sheikh Zayed Grand Mosque, Emirates Palace Hotel, Corniche Beach, Heritage Village, and drive by Ferrari World."
        },
        {
            id: 6,
            title: "Helicopter Tour Dubai (12 Mins)",
            category: "Luxury & Flights",
            price: 620,
            rating: "4.9 ★",
            duration: "12 Minutes Flight",
            pickup: "Helidrive Atlantis The Palm",
            image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
            description: "Fly over Dubai's world-famous landmarks! Enjoy bird's-eye views of the Burj Khalifa, Palm Jumeirah, Burj Al Arab, and World Islands on an unforgettable flight."
        }
    ]
};

// Function to render main website UI
function renderUI(data) {
    const app = document.getElementById('app');

    const html = `
    <!-- Header Navbar -->
    <header class="bg-blue-900 text-white sticky top-0 z-40 shadow-lg">
        <div class="container mx-auto flex justify-between items-center p-4">
            <h1 class="text-2xl font-bold flex items-center">
                <span class="bg-yellow-500 text-gray-900 rounded-lg px-2 py-1 text-sm font-black mr-2">${data.logoText}</span>
                ${data.name}
            </h1>
            <a href="https://wa.me/${data.whatsapp}" target="_blank" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold flex items-center text-sm shadow transition">
                <i class="fab fa-whatsapp text-lg mr-2"></i> WhatsApp Us
            </a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 text-center px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Explore Dubai With Rightway Tourism</h2>
        <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">Best Deals on Desert Safaris, City Tours, Attraction Tickets, Yacht Cruises & Luxury Flights.</p>
        <div class="flex justify-center space-x-4">
            <a href="tel:${data.phone}" class="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg shadow">
                <i class="fas fa-phone-alt mr-2"></i> Call ${data.phone}
            </a>
        </div>
    </section>

    <!-- Tour Spots Section -->
    <main class="container mx-auto px-4 py-12">
        <h3 class="text-3xl font-bold text-gray-800 text-center mb-2">Popular UAE Tour Packages</h3>
        <p class="text-gray-600 text-center mb-10">Click on any tour package to see full details and pricing.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${data.tours.map(tour => `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="relative">
                            <img src="${tour.image}" alt="${tour.title}" class="w-full h-52 object-cover">
                            <span class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                                ${tour.category}
                            </span>
                            <span class="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded shadow">
                                ${tour.rating}
                            </span>
                        </div>
                        <div class="p-5">
                            <h4 class="text-xl font-bold text-gray-800 mb-2">${tour.title}</h4>
                            <div class="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                <span><i class="fas fa-clock text-blue-500 mr-1"></i> ${tour.duration}</span>
                            </div>
                            <p class="text-gray-600 text-sm line-clamp-2 mb-4">${tour.description}</p>
                        </div>
                    </div>
                    
                    <div class="p-5 pt-0 border-t border-gray-100 flex items-center justify-between mt-2">
                        <div>
                            <span class="text-xs text-gray-400 block">Starting From</span>
                            <span class="text-2xl font-black text-blue-900">${tour.price} ${data.currency}</span>
                        </div>
                        <button onclick="openModal(${tour.id})" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow">
                            View Details
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    </main>

    <!-- Modal Popup for Tour Details -->
    <div id="tourModal" class="fixed inset-0 bg-black bg-opacity-60 z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            <button onclick="closeModal()" class="absolute top-3 right-3 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 font-bold hover:bg-gray-700">
                &times;
            </button>
            <div id="modalContent" class="overflow-y-auto p-6">
                <!-- Dynamic Content Will Be Inserted Here -->
            </div>
        </div>
    </div>

    <!-- Contact & Footer Section -->
    <footer class="bg-gray-900 text-gray-300 py-10 mt-16">
        <div class="container mx-auto px-4 text-center">
            <h4 class="text-2xl font-bold text-white mb-2">${data.name}</h4>
            <p class="mb-4"><i class="fas fa-map-marker-alt text-yellow-500 mr-2"></i> ${data.address}</p>
            <p class="mb-6"><i class="fas fa-envelope text-yellow-500 mr-2"></i> ${data.email} | <i class="fas fa-phone text-yellow-500 mr-2"></i> ${data.phone}</p>
            <hr class="border-gray-800 mb-6">
            <p class="text-sm">&copy; ${new Date().getFullYear()} ${data.name}. All Rights Reserved.</p>
        </div>
    </footer>
    `;

    app.innerHTML = html;
}

// Function to Open Tour Detail Modal
function openModal(tourId) {
    const tour = businessData.tours.find(t => t.id === tourId);
    if (!tour) return;

    const modalContent = document.getElementById('modalContent');
    const whatsappMessage = encodeURIComponent(`Hello Rightway Tourism, I would like to book the tour: "${tour.title}" for ${tour.price} ${businessData.currency}. Please share details.`);

    modalContent.innerHTML = `
        <img src="${tour.image}" alt="${tour.title}" class="w-full h-64 object-cover rounded-xl mb-4 shadow">
        <div class="flex justify-between items-center mb-2">
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">${tour.category}</span>
            <span class="text-yellow-600 font-bold">${tour.rating}</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-800 mb-3">${tour.title}</h3>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4 space-y-2 text-sm text-gray-700 border border-gray-100">
            <p><strong><i class="fas fa-clock text-blue-600 mr-2"></i> Duration:</strong> ${tour.duration}</p>
            <p><strong><i class="fas fa-car text-blue-600 mr-2"></i> Pickup & Drop:</strong> ${tour.pickup}</p>
            <p><strong><i class="fas fa-tag text-blue-600 mr-2"></i> Price:</strong> <span class="text-xl font-bold text-green-600">${tour.price} ${businessData.currency}</span> per person</p>
        </div>

        <h4 class="font-bold text-gray-800 mb-1">Tour Description:</h4>
        <p class="text-gray-600 text-sm leading-relaxed mb-6">${tour.description}</p>

        <div class="flex space-x-3">
            <a href="https://wa.me/${businessData.whatsapp}?text=${whatsappMessage}" target="_blank" class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 text-center rounded-xl shadow flex items-center justify-center">
                <i class="fab fa-whatsapp text-lg mr-2"></i> Book via WhatsApp
            </a>
            <a href="tel:${businessData.phone}" class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-xl shadow flex items-center justify-center">
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

// Initialize Page Render
renderUI(businessData);

