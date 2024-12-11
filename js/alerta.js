document.addEventListener("DOMContentLoaded", () => {
    // Escuchar todos los botones de "Añadir al carro"
    const addToCartButtons = document.querySelectorAll('.carro');
    const carritoCompra = document.getElementById('carrito-compra');
    const cerrarCarrito = document.getElementById('cerrar-carrito');

    // Función para mostrar el carrito
    const mostrarCarrito = () => {
        carritoCompra.style.display = 'block'; // Mostrar el carrito
    };

    // Función para cerrar el carrito
    const ocultarCarrito = () => {
        carritoCompra.style.display = 'none'; // Ocultar el carrito
    };

    // Cerrar el carrito al hacer clic en el botón de cerrar
    cerrarCarrito.addEventListener('click', ocultarCarrito);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            // Obtener los detalles del producto
            const productPreview = button.closest('.preview');
            const productName = productPreview.querySelector('h3').textContent;
            const productPrice = productPreview.querySelector('.precio').textContent;
            const productImage = productPreview.querySelector('img').src;

            // Crear la tarjeta "Added to cart!"
            const cartCard = document.createElement('div');
            cartCard.className = 'card';
            cartCard.innerHTML = `
                <div class="card-wrapper">
                    <div class="card-icon">
                        <div class="icon-cart-box">
                            <svg viewBox="0 0 576 512" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill="#ff0099"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card-title-wrapper">
                            <span class="card-title">Agregado al carrito</span>
                            <span class="card-action">
                                <svg viewBox="0 0 384 512" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                                </svg>
                            </span>
                        </div>
                        <div class="Producto">${productName}</div>
                        <div class="Precio">${productPrice}</div>
                    </div>
                </div>
            `;

            // Añadir la tarjeta al DOM
            document.body.appendChild(cartCard);

            // Mostrar el carrito automáticamente
            mostrarCarrito();

            // Estilizar con animaciones si deseas
            cartCard.style.position = 'fixed';
            cartCard.style.bottom = '20px';
            cartCard.style.right = '20px';
            cartCard.style.zIndex = '1000';

            // Eliminar la tarjeta después de 3 segundos
            setTimeout(() => {
                cartCard.remove();
            }, 3000);
        });
    });
});
