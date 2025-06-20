let slideAtual = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove("ativo"));

  slideAtual = (index + slides.length) % slides.length;
  slides[slideAtual].classList.add("ativo");
}

function mudarSlide(direcao) {
  mostrarSlide(slideAtual + direcao);
}

// Mostrar primeiro slide ao carregar
window.addEventListener("load", () => mostrarSlide(slideAtual));


// Mostrar primeiro slide ao carregar LEO 28/05
const acc = document.querySelectorAll(".accordion");
acc.forEach(button => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
