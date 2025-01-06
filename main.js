const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");

});

const scrollRevealOPtion = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollReveal().reveal(".container__content h1",{
    ...scrollRevealOPtion,
});
scrollReveal().reveal(".container__content h2",{
    ...scrollRevealOPtion,
    delay: 500,
});
scrollReveal().reveal(".container__content p",{
    ...scrollRevealOPtion,
    delay: 1000,
});
scrollReveal().reveal(".socials",{
    ...scrollRevealOPtion,
    delay: 1500,
});

