const slides = document.querySelectorAll(".slide");
let current = 0;

// Show initial slide
slides[current].classList.add("active");

// Handle arrow key navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && current < slides.length - 1) {
    slides[current].classList.remove("active");
    current++;
    slides[current].classList.add("active");
  }
  if (e.key === "ArrowLeft" && current > 0) {
    slides[current].classList.remove("active");
    current--;
    slides[current].classList.add("active");
  }
});
