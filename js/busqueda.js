document.addEventListener('click', function (event) {
    const searchInput = document.getElementById('find'); // El campo de texto de búsqueda
    const searchIcon = document.getElementById('search-icon'); // El ícono de búsqueda
    const searchContainer = document.querySelector('.search'); // El contenedor de búsqueda

    if (!searchContainer.contains(event.target)) {
        searchInput.classList.add('hidden');
        searchInput.value = "";
    }
});


document.getElementById('search-icon').addEventListener('click', function () {
    const searchInput = document.getElementById('find');
    searchInput.classList.remove('hidden'); // Muestra el input
    searchInput.focus(); // Coloca el cursor en el campo
});

/*Ocultar barra de busqueda*/
function toggleSearch() {
    const searchInput = document.getElementById('find');
    const isHidden = searchInput.style.width === '0px' || searchInput.style.width === '';

    if (isHidden) {
        searchInput.style.width = '350px';
        searchInput.style.opacity = '1';
        searchInput.focus();
    } else {
        searchInput.style.width = '0px';
        searchInput.style.opacity = '0';
        searchInput.blur();
    }
}
/*Busqueda de Nombre del producto*/

function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.product');
    let l = document.getElementsByTagName('h3');
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('h3')[0];
        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";
        }
    }
}
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

