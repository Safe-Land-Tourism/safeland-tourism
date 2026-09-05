(function () {
  "use strict";

  var WHATSAPP_NUMBER = "971504915900"; // Safe Land Tourism LLC

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- back to top ---------- */
  var toTop = document.getElementById("toTop");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("is-visible", window.scrollY > 600);
    });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- ticket search + filter ---------- */
  var search = document.getElementById("ticketSearch");
  var filters = document.getElementById("ticketFilters");
  var grid = document.getElementById("ticketGrid");
  var emptyState = document.getElementById("ticketEmpty");
  var emptyTerm = document.getElementById("ticketEmptyTerm");
  var tickets = grid ? Array.prototype.slice.call(grid.querySelectorAll(".ticket")) : [];
  var activeFilter = "all";

  function applyTicketView() {
    var term = (search && search.value.trim().toLowerCase()) || "";
    var visibleCount = 0;

    tickets.forEach(function (ticket) {
      var name = ticket.getAttribute("data-name") || "";
      var isAvailable = ticket.getAttribute("data-available") === "true";
      var matchesSearch = name.indexOf(term) !== -1;
      var matchesFilter = activeFilter === "all" || (activeFilter === "available" && isAvailable);
      var show = matchesSearch && matchesFilter;

      ticket.hidden = !show;
      if (show) visibleCount++;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
      if (emptyTerm) emptyTerm.textContent = search ? search.value.trim() : "";
    }
  }

  if (search) search.addEventListener("input", applyTicketView);

  if (filters) {
    filters.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        filters.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        activeFilter = chip.getAttribute("data-filter");
        applyTicketView();
      });
    });
  }

  /* ---------- booking buttons -> WhatsApp ---------- */
  document.querySelectorAll("[data-book]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var attraction = btn.getAttribute("data-book");
      var message = "Hi Safe Land Tourism, I'd like to book: " + attraction + ". Please share availability and price.";
      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank", "noopener");
    });
  });

  /* ---------- contact form -> WhatsApp ---------- */
  var form = document.getElementById("contactForm");
  var note = document.getElementById("contactNote");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var phone = (data.get("phone") || "").toString().trim();
      var interest = (data.get("interest") || "").toString().trim();

      var lines = [
        "Hi Safe Land Tourism, I'd like to plan a trip.",
        "Name: " + name,
        "Phone: " + phone
      ];
      if (interest) lines.push("Interested in: " + interest);

      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener");

      if (note) note.hidden = false;
      form.reset();
    });
  }
})();
