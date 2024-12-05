var mybutton = document.getElementById("scrollToTopBtn");

      // Cuando el usuario hace scroll, mostrar o ocultar el botón
      window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          mybutton.style.display = "block"; // Muestra el botón cuando el usuario hace scroll hacia abajo
        } else {
          mybutton.style.display = "none"; // Oculta el botón cuando el usuario está cerca del inicio
        }
      };

      // Cuando el usuario hace clic en el botón, hacer scroll al principio de la página
      mybutton.onclick = function() {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Desplazamiento suave
        });
      };