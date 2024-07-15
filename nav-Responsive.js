//navigation  toggle

const toggleButton = document.getElementById("nav-toggles");
const navLinks = document.getElementById("nav-linked");


toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle("active");
}
)