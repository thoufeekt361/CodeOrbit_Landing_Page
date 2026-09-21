// Get the mobile menu button and navigation menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Open and close the navigation menu on mobile
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close the mobile menu after clicking a navigation link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});