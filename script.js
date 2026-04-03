window.addEventListener('load', () => {
  // CONTADOR ANIMADO
  const numeros = document.querySelectorAll('.numero');

  numeros.forEach((numero) => {
    const objetivo = parseInt(numero.getAttribute('data-target'));
    let actual = 0;

    const intervalo = setInterval(() => {
      actual++;
      numero.textContent = actual;
      if (actual === objetivo) {
        clearInterval(intervalo);
      }
    }, 300);
  });

  // TEXTO QUE ESCRIBE SOLO
  const textoHero = "Bienvenido a mi página";
  const elementoHero = document.getElementById("texto-hero");
  let i = 0;

  function escribir() {
    if (i < textoHero.length) {
      elementoHero.textContent += textoHero.charAt(i);
      i++;
      setTimeout(escribir, 100);
    }
  }

  escribir();
});
