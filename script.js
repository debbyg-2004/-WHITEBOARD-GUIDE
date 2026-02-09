const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
  if (e.key === "ArrowLeft" && currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});
