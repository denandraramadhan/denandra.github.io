// Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow-lg", window.scrollY > 120);
    header.classList.toggle("!bg-[#22282f]", window.scrollY > 120);
});

// Hamburger Menu / Sidebar
// const hamburger = document.querySelector("#menu-icon");
// const navList = document.querySelector("#navList");
// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("bx-x");
//     navList.classList.toggle("active");
// });

// Typed text
const typed = new Typed("#typing", {
    strings: ["Deni Kurnia", "a Fullstack Developer", "a Fresh Graduate"],
    typeSpeed: 100,
    loop: true,
    backSpeed: 100,
    backDelay: 1000,
});
