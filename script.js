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