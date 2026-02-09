<script>
  const slides = [...document.querySelectorAll("section")];
  const progress = document.createElement("div");
  progress.className = "progress";
  document.body.appendChild(progress);

  let currentSlide = 0;

  function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
      slides[index].scrollIntoView({ behavior: "smooth" });
      currentSlide = index;
      updateProgress();
    }
  }

  function updateProgress() {
    const percent = ((currentSlide + 1) / slides.length) * 100;
    progress.style.width = percent + "%";
  }

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" || e.key === " ") {
      e.preventDefault();
      goToSlide(currentSlide + 1);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      goToSlide(currentSlide - 1);
    }
    if (e.key.toLowerCase() === "p") {
      document.body.classList.toggle("presentation");
    }
  });

  window.addEventListener("scroll", () => {
    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        currentSlide = i;
        updateProgress();
      }
    });
  });
</script>
