# Dulcería García

## Descripción
**Dulcería García** es un sitio web estático diseñado como catálogo digital y plataforma de venta para una tienda especializada en dulces, botanas y productos para fiestas. Su objetivo es ofrecer una experiencia de usuario atractiva y colorida, facilitando la exploración de productos y la gestión de compras a través de un carrito simple.

## Arquitectura
La aplicación sigue una arquitectura **JAMstack (JavaScript, APIs, Markup)** simplificada:
```
DulceriaGarcia/
├── CSS/             # Hojas de estilo
├── js/              # Scripts de Frontend
├── img/             # Activos multimedia (productos)
├── index.html       # Página Principal
├── dulces.html      # Catálogo por categorías
└── comprar.html     # Carrito de compras
```
*   **Presentación (Markup)**: Archivos HTML5 estáticos.
*   **Estilos**: Hojas de estilo CSS organizadas.
*   **Comportamiento**: JavaScript del lado del cliente.

## Tecnologías Utilizadas
*   **HTML5**: Estructura semántica.
*   **CSS3**: Diseño responsivo y estilización personalizada.
*   **JavaScript (ES6+)**: Lógica de frontend.
*   **FontAwesome**: Iconografía.
*   **Google Fonts**: Tipografía personalizada.

## Características
*   **Catálogo Digital**: Páginas dedicadas por categoría (`dulces.html`, `botana.html`, `fiesta.html`, `desechable.html`).
*   **Carrito de Compras**: Funcionalidad para agregar productos y visualizar el resumen del pedido (`comprar.html`).
*   **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio.
*   **Secciones Informativas**: Páginas institucionales como "Acerca de" y "Preguntas Frecuentes".
*   **Interfaz Temática**: Diseño visual acorde al giro de confitería y fiestas.

## Instalación y Configuración
Al ser un sitio estático, no requiere un servidor de aplicaciones complejo:
1.  **Clonar/Descargar**: Obtener el código fuente.
2.  **Ejecución Local**:
    *   Simplemente abrir el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox).
    *   Para una mejor experiencia, se recomienda usar una extensión como **Live Server** en VS Code.
3.  **Despliegue**: Compatible con hostings estáticos como GitHub Pages, Vercel o Netlify.

## Modelo de Datos
El "modelo de datos" es implícito y reside en la estructura del DOM o en objetos JSON dentro de los archivos JavaScript (para el carrito de compras):
*   **Productos**: Representados visualmente en HTML con atributos como nombre, precio e imagen.
*   **Carrito**: Probablemente gestionado en `localStorage` o memoria del navegador, almacenando IDs de productos y cantidades.

## Autor
**Alan Gael Gallardo Jimenez**
