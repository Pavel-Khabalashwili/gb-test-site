document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    const header_nav = document.querySelector(".header__nav")

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("closed");
        document.body.classList.toggle("no-scroll");
        nav.classList.toggle("active");
        header_nav.classList.toggle("active");
    });
});
