
/* =========================================
   THREADVERSE LITTLE
   WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // 1. HEADER SCROLL EFFECT

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    // 2. SMOOTH NAVIGATION

    const navigationLinks = document.querySelectorAll(
        '.navbar a, .footer-links a, .primary-btn, .text-link'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // 3. SCROLL REVEAL ANIMATIONS

    const revealElements = document.querySelectorAll(
        ".section-heading, .collection-card, .product-card, .brand-message-inner, .newsletter, .contact"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    }


    // 4. PRODUCT CARD INTERACTIONS

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.classList.add("product-hover");

        });

        card.addEventListener("mouseleave", function () {

            card.classList.remove("product-hover");

        });

    });


    // 5. NEWSLETTER BUTTON FEEDBACK

    const newsletterButton = document.querySelector(
        ".newsletter .primary-btn"
    );

    if (newsletterButton) {

        newsletterButton.addEventListener("click", function (event) {

            event.preventDefault();

            alert(
                "Welcome to the THREADVERSE LITTLE family! Our collection is coming soon."
            );

        });

    }


    // 6. HEADER ACTIVE NAVIGATION

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        navigationLinks.forEach(function (link) {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                "#" + entry.target.id
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                rootMargin: "-25% 0px -65% 0px"
            }
        );

        sections.forEach(function (section) {

            sectionObserver.observe(section);

        });

    }


    // 7. WELCOME MESSAGE IN CONSOLE

    console.log(
        "Welcome to THREADVERSE LITTLE - Little Beginnings. Big Love."
    );

});

/* =========================================
   STEP 3 - INTERACTION STYLES
========================================= */

.header.scrolled {
    box-shadow: 0 5px 20px rgba(73, 60, 53, 0.08);
}

.navbar a.active {
    color: var(--mocha);
}

.reveal {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}

.product-hover {
    transform: translateY(-4px);
    transition: transform 0.35s ease;
}
