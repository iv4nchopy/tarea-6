window.onload = function() {
    let nombre = localStorage.getItem("usuarioTP6");

    if (!nombre) {
        nombre = prompt("Bienvenido/a al Proyecto Multimedia de Ivan Acosta. Ingresa tu nombre y apellido:");
        localStorage.setItem("usuarioTP6", nombre);
    }

    const spanNombre = document.getElementById("nombreUsuario");
    if (spanNombre) {
        spanNombre.innerText = nombre;
    }
};
