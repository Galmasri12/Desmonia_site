

const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".navbar nav");


// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.classList.add("mobile-menu-button");
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Open navigation menu");

navbar.appendChild(menuButton);


// Open / close menu
menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-nav-open");

    if (nav.classList.contains("mobile-nav-open")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }

});


// Close menu when clicking a link
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-nav-open");

        menuButton.innerHTML = "☰";

    });

});


const animatedElements = document.querySelectorAll(
    ".section-title, .about-container, .schedule-card, .shop-card, .social-section"
);


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});

//Click particle effect

document.addEventListener("click", (event) => {

    const particle = document.createElement("span");

    particle.classList.add("click-particle");

    particle.textContent = "✦";

    particle.style.left = `${event.clientX}px`;

    particle.style.top = `${event.clientY}px`;


    document.body.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 1000);

});



const backToTop = document.createElement("button");

backToTop.classList.add("back-to-top");

backToTop.innerHTML = "↑";

backToTop.setAttribute(
    "aria-label",
    "Return to top"
);

document.body.appendChild(backToTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
