/* =========================================
   DESMONIA INTERACTIVE JAVASCRIPT
   ========================================= */


/* =========================================
   1. MOBILE NAVIGATION
   ========================================= */

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


/* =========================================
   2. SCROLL REVEAL ANIMATION
   ========================================= */

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


/* =========================================
   3. NAVBAR SCROLL EFFECT
   ========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


/* =========================================
   4. QUEEN'S MESSAGE
   ========================================= */

const queenMessages = [

    "The Queen is watching... 👑",

    "Welcome to Desmonia, little creature. 🦇",

    "The night is open. 🌙",

    "Try not to get eaten. ♥",

    "You have entered the Queen's domain.",

    "Your soul has been added to the kingdom. ☠",

    "The Queen approves of your presence. ✦"

];


function summonQueen() {

    const message =
        queenMessages[
            Math.floor(Math.random() * queenMessages.length)
        ];


    const notification = document.createElement("div");

    notification.classList.add("queen-message");

    notification.textContent = message;


    document.body.appendChild(notification);


    setTimeout(() => {

        notification.classList.add("show");

    }, 50);


    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 500);

    }, 3000);

}


/* =========================================
   5. MAKE BUTTONS SUMMON THE QUEEN
   ========================================= */

const buttons = document.querySelectorAll(
    ".primary-button, .secondary-button, .text-button"
);


buttons.forEach(button => {

    button.addEventListener("click", () => {

        summonQueen();

    });

});


/* =========================================
   6. CLICK PARTICLES
   ========================================= */

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


/* =========================================
   7. BACK TO TOP BUTTON
   ========================================= */

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


/* =========================================
   8. DESMONIA WELCOME MESSAGE
   ========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        summonQueen();

    }, 1200);

});