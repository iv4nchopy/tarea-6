window.onload = function () {
    let nombre = localStorage.getItem("usuarioTP6");

    if (!nombre) {
        nombre = prompt("Bienvenido/a. Ingresa tu nombre y apellido:");
        localStorage.setItem("usuarioTP6", nombre);
    }

    document.getElementById("nombreUsuario").innerText = nombre;
    alert("Hola " + nombre + ", disfruta el proyecto.");
};
