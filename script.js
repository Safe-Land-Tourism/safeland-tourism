// =====================================================
// WHATSAPP NUMBER
// =====================================================

const WHATSAPP_NUMBER = "971504915900";


// =====================================================
// DEFAULT ATTRACTIONS
// =====================================================

const defaultAttractions = [

  {
    id: 1,
    name: "Burj Khalifa",
    category: "landmark",
    categoryName: "Landmark",
    location: "Downtown Dubai",
    price: 159,
    childPrice: 129,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
    description: "Enjoy breathtaking views from one of Dubai's most iconic landmarks."
  },

  {
    id: 2,
    name: "Dubai Aquarium & Underwater Zoo",
    category: "aquarium",
    categoryName: "Aquarium",
    location: "Dubai Mall",
    price: 125,
    childPrice: 99,
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1000&q=80",
    description: "Discover amazing marine life at Dubai Aquarium and Underwater Zoo."
  },

  {
    id: 3,
    name: "Museum of the Future",
    category: "museum",
    categoryName: "Museum",
    location: "Sheikh Zayed Road",
    price: 149,
    childPrice: 149,
    image: "https://images.unsplash.com/photo-1640097338020-9d1f1f5e2f44?auto=format&fit=crop&w=1000&q=80",
    description: "Explore the future of technology, innovation and human possibility."
  },

  {
    id: 4,
    name: "Dubai Frame",
    category: "landmark",
    categoryName: "Landmark",
    location: "Zabeel Park",
    price: 55,
    childPrice: 30,
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=1000&q=80",
    description: "Enjoy spectacular views connecting old and modern Dubai."
  },

  {
    id: 5,
    name: "Dubai Parks & Resorts",
    category: "themepark",
    categoryName: "Theme Park",
    location: "Dubai Parks & Resorts",
    price: 295,
    childPrice: 245,
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1000&q=80",
    description: "Enjoy exciting rides and entertainment for the whole family."
  },

  {
    id: 6,
    name: "Dubai Marina Cruise",
    category: "cruise",
    categoryName: "Cruise",
    location: "Dubai Marina",
    price: 89,
    childPrice: 59,
    image: "https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&w=1000&q=80",
    description: "Enjoy Dubai Marina's skyline from a relaxing cruise."
  },

  {
    id: 7,
    name: "Desert Safari",
    category: "adventure",
    categoryName: "Adventure",
    location: "Dubai Desert",
    price: 149,
    childPrice: 99,
    image: "https://images.unsplash.com/photo-1470214304380-aadaedcfff1b?auto=format&fit=crop&w=1000&q=80",
    description: "Experience dune bashing, desert views and Arabian entertainment."
  }

];


// =====================================================
// LOAD DATA
// =====================================================

function getAttractions() {

  const saved =
    localStorage.getItem("dubaiTicketsAttractions");

  if (saved) {
    return JSON.parse(saved);
  }

  localStorage.setItem(
    "dubaiTicketsAttractions",
    JSON.stringify(defaultAttractions)
  );

  return defaultAttractions;
}


let attractions = getAttractions();


// =====================================================
// ELEMENTS
// =====================================================

const attractionGrid =
  document.getElementById("attractionGrid");

const searchInput =
  document.getElementById("searchInput");

const categoryFilter =
  document.getElementById("categoryFilter");

const emptyMessage =
  document.getElementById("emptyMessage");

const bookingModal =
  document.getElementById("bookingModal");

const closeModal =
  document.getElementById("closeModal");

const bookingForm =
  document.getElementById("bookingForm");

const modalTitle =
  document.getElementById("modalTitle");

const modalLocation =
  document.getElementById("modalLocation");

const bookingDate =
  document.getElementById("bookingDate");

const adultQty =
  document.getElementById("adultQty");

const childQty =
  document.getElementById("childQty");

const customerName =
  document.getElementById("customerName");

const customerPhone =
  document.getElementById("customerPhone");

const customerNote =
  document.getElementById("customerNote");

const totalPrice =
  document.getElementById("totalPrice");


let selectedAttraction = null;


// =====================================================
// DISPLAY
// =====================================================

function displayAttractions() {

  if (!attractionGrid) return;

  const search =
    searchInput.value.toLowerCase().trim();

  const category =
    categoryFilter.value;


  const filtered =
    attractions.filter(function(item) {

      const searchMatch =
        item.name.toLowerCase().includes(search) ||
        item.location.toLowerCase().includes(search) ||
        item.categoryName.toLowerCase().includes(search);

      const categoryMatch =
        category === "all" ||
        item.category === category;

      return searchMatch && categoryMatch;

    });


  attractionGrid.innerHTML = "";


  filtered.forEach(function(item) {

    const card =
      document.createElement("article");

    card.className = "card";

    card.innerHTML = `

      <div
        class="card-image"
        style="background-image:url('${item.image}')"
      ></div>

      <div class="card-body">

        <span class="badge">
          ${item.categoryName}
        </span>

        <h3>
          ${item.name}
        </h3>

        <p class="location">
          📍 ${item.location}
        </p>

        <p class="description">
          ${item.description}
        </p>

        <div class="card-bottom">

          <div class="price">
            <small>From</small>

            <strong>
              AED ${item.price}
            </strong>
          </div>

          <button
            class="book-btn"
            onclick="openBooking(${item.id})"
          >
            Book Now
          </button>

        </div>

      </div>
    `;

    attractionGrid.appendChild(card);

  });


  emptyMessage.style.display =
    filtered.length ? "none" : "block";

}


// =====================================================
// BOOKING
// =====================================================

function openBooking(id) {

  selectedAttraction =
    attractions.find(item => item.id === id);

  if (!selectedAttraction) return;


  modalTitle.textContent =
    selectedAttraction.name;

  modalLocation.textContent =
    "📍 " + selectedAttraction.location;


  adultQty.value = 1;
  childQty.value = 0;

  customerName.value = "";
  customerPhone.value = "";
  customerNote.value = "";


  updateTotal();

  bookingModal.classList.add("show");

  document.body.style.overflow = "hidden";

}


function closeBookingModal() {

  bookingModal.classList.remove("show");

  document.body.style.overflow = "";

}


closeModal.addEventListener(
  "click",
  closeBookingModal
);


bookingModal.addEventListener(
  "click",
  function(event) {

    if (event.target === bookingModal) {
      closeBookingModal();
    }

  }
);


// =====================================================
// QUANTITY
// =====================================================

document.querySelectorAll(".qty-btn").forEach(function(button) {

  button.addEventListener("click", function() {

    const target =
      document.getElementById(button.dataset.target);

    let value =
      Number(target.value) || 0;


    if (button.dataset.action === "plus") {
      value++;
    }

    if (button.dataset.action === "minus") {
      value--;
    }


    if (target.id === "adultQty") {
      value = Math.max(1, value);
    }

    if (target.id === "childQty") {
      value = Math.max(0, value);
    }


    target.value = value;

    updateTotal();

  });

});


// =====================================================
// TOTAL
// =====================================================

function updateTotal() {

  if (!selectedAttraction) return;


  const adults =
    Math.max(1, Number(adultQty.value) || 1);

  const children =
    Math.max(0, Number(childQty.value) || 0);


  const total =
    adults * Number(selectedAttraction.price) +
    children * Number(selectedAttraction.childPrice);


  totalPrice.textContent =
    "AED " + total;

}


adultQty.addEventListener("input", updateTotal);
childQty.addEventListener("input", updateTotal);


// =====================================================
// WHATSAPP BOOKING
// =====================================================

bookingForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();

    if (!selectedAttraction) return;


    const adults =
      Math.max(1, Number(adultQty.value) || 1);

    const children =
      Math.max(0, Number(childQty.value) || 0);


    const total =
      adults * Number(selectedAttraction.price) +
      children * Number(selectedAttraction.childPrice);


    const message =

`Hello DubaiTickets 👋

I would like to book:

🎟️ Attraction:
${selectedAttraction.name}

📍 Location:
${selectedAttraction.location}

📅 Date:
${bookingDate.value}

👨 Adults:
${adults} × AED ${selectedAttraction.price}

👧 Children:
${children} × AED ${selectedAttraction.childPrice}

💰 Estimated Total:
AED ${total}

👤 Customer Name:
${customerName.value}

📱 Customer Phone:
${customerPhone.value}

📝 Special Request:
${customerNote.value || "None"}

Please confirm availability and booking details.

Thank you!`;


    const url =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);


    window.open(url, "_blank");

  }
);


// =====================================================
// SEARCH
// =====================================================

searchInput.addEventListener(
  "input",
  displayAttractions
);

categoryFilter.addEventListener(
  "change",
  displayAttractions
);


// =====================================================
// WHATSAPP LINKS
// =====================================================

function setupWhatsAppLinks() {

  const message =
    encodeURIComponent(
      "Hello DubaiTickets 👋 I would like to know more about attraction tickets."
    );


  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    message;


  document.getElementById(
    "headerWhatsApp"
  ).href = url;


  document.getElementById(
    "contactWhatsApp"
  ).href = url;

}


// =====================================================
// DATE
// =====================================================

const today =
  new Date().toISOString().split("T")[0];

if (bookingDate) {
  bookingDate.min = today;
  bookingDate.value = today;
}


// =====================================================
// START
// =====================================================

displayAttractions();
setupWhatsAppLinks();
