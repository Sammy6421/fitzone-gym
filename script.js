// FitZone Gym JavaScript

console.log("FitZone Gym Loaded Successfully");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
    });
});

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to FitZone Gym!");
});
