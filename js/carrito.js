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

    // Evento para cerrar el carrito
    document.getElementById('cerrar-carrito').addEventListener('click', () => {
        document.querySelector('.carrito-compra').classList.remove('mostrar');
    });
});

function actualizarCarrito(carrito) {
    const itemsCarrito = document.querySelector('.items-carrito');
    itemsCarrito.innerHTML = ''; // Limpiar el contenido actual

    let subtotal = 0;
    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.classList.add('item-carrito');
        item.innerHTML = `
            <p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>
            <button class="eliminar-producto" data-index="${index}">X</button>
        `;
        itemsCarrito.appendChild(item);
        subtotal += producto.precio;
    });

    // Actualizar el subtotal
    document.getElementById('total-carrito').innerText = `${subtotal.toFixed(2)}$`;

    // Añadir el evento de eliminar a cada botón "X"
    document.querySelectorAll('.eliminar-producto').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el evento de clic se propague al contenedor
            const index = e.target.getAttribute('data-index');
            eliminarProducto(carrito, index);
        });
    });
}

function eliminarProducto(carrito, index) {
    // Eliminar el producto del carrito
    carrito.splice(index, 1);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la vista del carrito
    actualizarCarrito(carrito);
}
