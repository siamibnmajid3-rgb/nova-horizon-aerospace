// Nova Horizon Aerospace
// Premium Level 3

console.log("Nova Horizon Aerospace Initialized");

// Smooth active navigation effect
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// Fade sections on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});
