const swith = document.querySelector(".switch");
swith.addEventListener("click", e => {
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
    document.querySelectorAll(".categorias, .producto, .perfil, .nosotros, .titulo_produc, .container").forEach(el => el.classList.toggle("active"));
    document.querySelectorAll("input, textarea, select, span, main").forEach(input => {
        input.classList.toggle("active");
    });
})

let menu = document.querySelector('#menu-icon');
let navar = document.querySelector('.items');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navar.classList.toggle('open');
}


// visibilidad de la contraseña
function togglePasswordVisibility(inputId, toggleElement) {
    const passwordField = document.getElementById(inputId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    toggleElement.textContent = type === 'password' ? '👁️' : '🙈';
}