let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(n) {
  const carousel = document.querySelector(".carousel-inner");
  carousel.style.transform = `translateX(-${n * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

showSlide(slideIndex);