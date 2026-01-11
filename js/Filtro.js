/*Filtrado de productos*/
// Seleccionamos todos los botones de filtro y los productos
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');

// Agregamos un evento de clic a cada botón
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Mostramos u ocultamos los productos según la categoría
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            
            if (category === 'all' || category === productCategory) {
                product.style.display = 'block'; // Mostrar el producto
            } else {
                product.style.display = 'none'; // Ocultar el producto
            }
        });
    });
});

