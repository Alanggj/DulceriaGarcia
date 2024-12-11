document.addEventListener('DOMContentLoaded', () => {
    // Cargar el carrito desde localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    actualizarCarrito(carrito);

    // Agregar evento a los botones de "Añadir al carro"
    document.querySelectorAll('.carro').forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            const preview = button.closest('.preview');
            const nombreProducto = preview.querySelector('h3').innerText;
            const precioProducto = parseFloat(preview.querySelector('.precio').innerText.replace('$', ''));

            // Agregar el producto al carrito
            const nuevoProducto = { nombre: nombreProducto, precio: precioProducto };
            carrito.push(nuevoProducto);

            // Guardar el carrito en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Actualizar el carrito en la interfaz
            actualizarCarrito(carrito);
        });
    });
});

function actualizarCarrito(carrito) {
    const itemsCarrito = document.querySelector('.items-carrito');
    itemsCarrito.innerHTML = ''; // Limpiar el contenido actual

    let subtotal = 0;
    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('item-carrito');
        item.innerHTML = `<p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>`;
        itemsCarrito.appendChild(item);
        subtotal += producto.precio;
    });

    // Actualizar el subtotal
    document.getElementById('total-carrito').innerText = `${subtotal.toFixed(2)}$`;
}
