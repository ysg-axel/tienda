document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregarCarrito = document.querySelectorAll('.boton-item');
    const mensajeCarrito = document.getElementById('mensaje-carrito');

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            const item = boton.parentElement;
            const titulo = item.querySelector('.titulo-item').textContent;
            const precio = item.querySelector('.precio-item').textContent;

            mostrarMensaje(`Has agregado el ${titulo} al carrito con un precio de ${precio}.`);
        });
    });

    function mostrarMensaje(mensaje) {
        mensajeCarrito.textContent = mensaje;
        mensajeCarrito.style.display = 'block';

        setTimeout(() => {
            mensajeCarrito.style.display = 'none';
        }, 3000);
    }
});
