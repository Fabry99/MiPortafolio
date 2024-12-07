var mybutton = document.getElementById("scrollToTopBtn");
var btnbars = document.getElementById("bars");
var navbar = document.getElementById("navbar");


// Cuando el usuario hace scroll, mostrar o ocultar el botón
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block"; // Muestra el botón cuando el usuario hace scroll hacia abajo
  } else {
    mybutton.style.display = "none"; // Oculta el botón cuando el usuario está cerca del inicio
  }
};

// Cuando el usuario hace clic en el botón, hacer scroll al principio de la página
mybutton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Desplazamiento suave
  });
};
btnbars.onclick = function (event) {
  navbar.classList.toggle('show'); // Alternar la visibilidad del navbar
  event.stopPropagation(); // Prevenir que el clic en el icono de barras se propague
};

// Ocultar el navbar si se hace clic fuera de él o del icono de barras
window.onclick = function(event) {
  if (!navbar.contains(event.target) && !btnbars.contains(event.target)) {
    navbar.classList.remove('show'); // Ocultar el navbar si se hace clic fuera
  }
};