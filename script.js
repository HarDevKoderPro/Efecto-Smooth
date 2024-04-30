// Función JQUERY para realizar el desplazamiento suave (smooth) de las secciones de la página
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Hide menu when option is selected
        mostrar();
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  // Función que agrega y quita (toggle) la clase mostrar para el menu movil
const mostrar=()=>{
  var menu = document.getElementById("menu");
  menu.classList.toggle("mostrar");
}

// Funcion que indica si el móvil está en portait o landscape
// Se puede utilizar para evitar el uso en cualquiera de los dos modos
const orientacion= ()=>{
  if (window.matchMedia("(orientation: portrait)").matches) {
      alert("you're in PORTRAIT mode");
  }
  
  if (window.matchMedia("(orientation: landscape)").matches) {
      alert("you're in LANDSCAPE mode") 
  }
}
