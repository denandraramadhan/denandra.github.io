// Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 120);
});

// Typed text
const typed = new Typed("#typing", {
    strings: ["Deni Kurnia", "a Fullstack Web Developer", "a Fresh Graduate"],
    typeSpeed: 100,
    loop: true,
    backSpeed: 100,
    backDelay: 1000,
});
