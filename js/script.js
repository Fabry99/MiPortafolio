var mybutton = document.getElementById("scrollToTopBtn");
var btnbars = document.getElementById("bars");
var navbar = document.getElementById("navbar");
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const indicators = document.querySelector('.carousel-indicators');


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

var navItems = document.querySelectorAll('#navbar li');

navItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado
    var targetId = this.querySelector('a').getAttribute('href'); 
    var targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Desplazar con un offset para evitar que quede oculto
      window.scrollTo({
        top: targetElement.offsetTop - 120, 
        behavior: 'smooth'
      });
    }
  });
});



let currentIndex = 0;
let interval;

// Crear indicadores dinámicos
items.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.dataset.index = index;
  if (index === 0) dot.classList.add('active');
  indicators.appendChild(dot);
});

// Actualizar la posición del carrusel
function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  document.querySelector('.carousel-indicators .active').classList.remove('active');
  indicators.children[currentIndex].classList.add('active');
}

// Pasar al siguiente slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

// Pasar al slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

// Iniciar el desplazamiento automático
function startAutoSlide() {
  interval = setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
}

// Detener el desplazamiento automático
function stopAutoSlide() {
  clearInterval(interval);
}

// Manejar botones
nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

// Manejar indicadores
indicators.addEventListener('click', (e) => {
  if (e.target.dataset.index) {
    stopAutoSlide();
    currentIndex = parseInt(e.target.dataset.index);
    updateCarousel();
    startAutoSlide();
  }
});
// startAutoSlide();