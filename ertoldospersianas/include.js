document.addEventListener("DOMContentLoaded", function () {
  // 1. Cargar el header dinámicamente
  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => {
        headerContainer.innerHTML = data;
      })
      .catch((error) => console.error("Error al cargar el header:", error));
  }

  // 2. Control de animaciones al hacer scroll para TODAS las tarjetas y elementos con la clase
  setTimeout(() => {
    const elementosAnimados = document.querySelectorAll(".card-animada-scroll");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("en-vista");
            observerInstance.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      elementosAnimados.forEach(elemento => {
        observer.observe(elemento);
      });
    } else {
      elementosAnimados.forEach(elemento => {
        elemento.classList.add("en-vista");
      });
    }
  }, 100);
});