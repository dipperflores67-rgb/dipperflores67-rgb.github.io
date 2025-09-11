// Toggle menú en móviles
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Validación básica del formulario
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && email && mensaje) {
    msg.textContent = "¡Mensaje enviado correctamente!";
    msg.style.color = "green";
    form.reset();
  } else {
    msg.textContent = "Por favor, completa todos los campos.";
    msg.style.color = "red";
  }
});
