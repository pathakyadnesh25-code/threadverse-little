
document.addEventListener("DOMContentLoaded", function () {

  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  // Automatically update copyright year
  document.getElementById("year").textContent =
    new Date().getFullYear();

  // Header shadow while scrolling
  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", updateHeader);
  updateHeader();

  // Mobile navigation menu
  menuToggle.addEventListener("click", function () {

    const isOpen = navbar.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu when a navigation link is selected
  document.querySelectorAll(".navbar a").forEach(function (link) {

    link.addEventListener("click", function () {

      navbar.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.textContent = "☰";

    });

  });

  // Highlight navigation section
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".navbar a");

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          navLinks.forEach(function (link) {

            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + entry.target.id
            );

          });

        }

      });

    }, {
      rootMargin: "-25% 0px -65% 0px"
    });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });

  }

  console.log("Welcome to THREADVERSE LITTLE!");

});
