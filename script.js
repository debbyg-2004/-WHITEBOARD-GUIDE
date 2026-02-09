// Scroll reveal
const slides = document.querySelectorAll(".slide");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

slides.forEach(slide => observer.observe(slide));

// Phone screen rotation
const screens = document.querySelectorAll(".screen");
let current = 0;

setInterval(() => {
  screens.forEach(s => s.classList.remove("active"));
  screens[current].classList.add("active");
  current = (current + 1) % screens.length;
}, 2000);
