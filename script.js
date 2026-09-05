// আপনার প্রতিষ্ঠানের তথ্য এখানে দিন
const businessData = {
    name: "Safe Land Tourism LLC",
    logoText: "SAFE",
    contactPerson: "Sheikh Rasel",
    designation: "Managing Director",
    phone: "+971 50 491 5900",
    email: "info@safelandtourism.com",
    website: "www.safelandtourism.com",
    address: "Hor Al Anz, Deira Dubai, UAE",
    services: [
        { name: "Group Tours", icon: "fa-users" },
        { name: "Tickets", icon: "fa-ticket-alt" },
        { name: "Hotel Booking", icon: "fa-hotel" },
        { name: "Travel & Transport", icon: "fa-bus" },
        { name: "Airport Pick & Drop", icon: "fa-plane-arrival" },
        { name: "Yacht Tour", icon: "fa-ship" },
        { name: "Helicopter Tour", icon: "fa-helicopter" },
        { name: "Limousine Ride", icon: "fa-car" },
        { name: "Speed Boat Tour", icon: "fa-anchor" },
        { name: "Sightseeing Tour", icon: "fa-bus-alt" },
        { name: "Desert Safari", icon: "fa-safari" },
        { name: "City Tours", icon: "fa-map-signs" },
        { name: "Dhow Cruise Dinner", icon: "fa-water" },
        { name: "Theme Park Tickets", icon: "fa-fort-awesome" }
    ],
    social: {
        instagram: "your_insta_link",
        facebook: "your_fb_link",
        youtube: "your_youtube_link",
        linkedin: "your_linkedin_link",
        twitter: "your_twitter_link",
        tiktok: "your_tiktok_link"
    },
    images: [
        "https://images.unsplash.com/photo-1549814436-1e65842886f3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHViaSxhdGxhbnRpc3x8fHx8fDE2ODk2NTU2MTk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
        "https://images.unsplash.com/photo-1579621970795-87f17e793910?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVyaiBrYWhsaWZhfHx8fHx8MTY4OTY1NTY4Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
        "https://images.unsplash.com/photo-1582650625119-3a11fef40899?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHViaSxmZXJyaXN8fHx8fDE2ODk2NTU3MjA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
        "https://images.unsplash.com/photo-1542468301-446a066ff059?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHViaSxncmFuZCBtb3NxdWV8fHx8fDE2ODk2NTU3NTI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
    ]
};

// UI রেন্ডার করার ফাংশন
function renderUI(data) {
    const app = document.getElementById('app');

    const html = `
    <header class="bg-blue-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold flex items-center">
                <span class="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-xs mr-2 font-bold">${data.logoText}</span>
                ${data.name}
            </h1>
            <a href="tel:${data.phone}" class="bg-white text-blue-600 px-4 py-2 rounded-full font-bold flex items-center">
                <i class="fas fa-phone-alt mr-2"></i> Call Now
            </a>
        </div>
    </header>

    <main class="container mx-auto p-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow">
            <div>
                <h2 class="text-3xl font-bold text-gray-800">${data.contactPerson}</h2>
                <p class="text-blue-600 text-lg">${data.designation}</p>
                <div class="mt-4 space-y-2 text-gray-700">
                    <p><i class="fas fa-phone-alt text-gray-500 mr-2"></i> ${data.phone}</p>
                    <p><i class="fas fa-envelope text-gray-500 mr-2"></i> ${data.email}</p>
                    <p><i class="fas fa-globe text-gray-500 mr-2"></i> ${data.website}</p>
                    <p><i class="fas fa-map-marker-alt text-gray-500 mr-2"></i> ${data.address}</p>
                </div>
                <div class="flex space-x-4 mt-6 text-xl text-gray-500">
                    <a href="${data.social.instagram}"><i class="fab fa-instagram hover:text-pink-600"></i></a>
                    <a href="${data.social.facebook}"><i class="fab fa-facebook-f hover:text-blue-600"></i></a>
                    <a href="${data.social.youtube}"><i class="fab fa-youtube hover:text-red-600"></i></a>
                    <a href="${data.social.linkedin}"><i class="fab fa-linkedin-in hover:text-blue-700"></i></a>
                    <a href="${data.social.twitter}"><i class="fab fa-twitter hover:text-blue-400"></i></a>
                    <a href="${data.social.tiktok}"><i class="fab fa-tiktok hover:text-black"></i></a>
                </div>
            </div>
            <div class="flex justify-center">
                 <div class="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center font-bold text-6xl text-green-600 border-4 border-green-500">${data.logoText}</div>
            </div>
        </div>

        <div class="mt-12 bg-white p-8 rounded-lg shadow">
            <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">Our Services</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                ${data.services.map(service => `
                    <div class="bg-gray-50 p-6 rounded-lg text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                        <i class="fas ${service.icon} text-4xl text-green-600 mb-4"></i>
                        <h4 class="font-bold text-gray-800">${service.name}</h4>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="mt-12 bg-white p-8 rounded-lg shadow">
            <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">Gallery</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${data.images.map(image => `
                    <img src="${image}" class="rounded-lg w-full h-48 object-cover shadow" />
                `).join('')}
            </div>
        </div>
    </main>

    <footer class="bg-gray-800 text-white p-8 mt-12">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 ${data.name}. All rights reserved.</p>
        </div>
    </footer>
    `;

    app.innerHTML = html;
}

// পেজ লোড হলে UI রেন্ডার করো
renderUI(businessData);
