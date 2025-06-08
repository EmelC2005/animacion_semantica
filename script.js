const form = document.getElementById("register-form");
const emailInput = form.querySelector('input[placeholder="Correo"]');
const successMessage = document.getElementById("successMessage");

// Agregamos evento input para validación en tiempo real
emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(co|com)$/;

    if (!emailPattern.test(email)) {
        this.setCustomValidity("Por favor completa correctamente el correo");
    } else {
        this.setCustomValidity("");
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();


    // Si es válido, limpiamos el mensaje de error
    emailInput.setCustomValidity("");

    // Mostramos mensaje de éxito
    document.querySelector(".form-section").classList.add("success");
    successMessage.classList.add("show");

    // Ocultamos mensaje y reseteamos el formulario
    setTimeout(() => {
        successMessage.classList.remove("show");
        form.reset();
    }, 5000);
});
