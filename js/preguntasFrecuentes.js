
const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
const buscador = document.querySelector('#buscador'); // Seleccionamos el elemento de la barra de búsqueda

preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');

        const respuesta = pregunta.querySelector('.respuesta');
        const alturaRealRespuesta = respuesta.scrollHeight;

        if (!respuesta.style.maxHeight) {
            
            respuesta.style.maxHeight = alturaRealRespuesta + 'px';
        } else {
            respuesta.style.maxHeight = null;
        }

        // [Opcional] Reiniciamos las demás preguntas
        preguntas.forEach((elemento) => {
            if (pregunta !== elemento) {
                elemento.classList.remove('activa');
                elemento.querySelector('.respuesta').style.maxHeight = null;
            }
        });
    });
});

buscador.addEventListener('blur', () => {
    buscador.value = ''; 
});



/*Busqueda*/
document.getElementById("buscador").addEventListener("input", buscarPreguntas);
document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("buscador");
    if (buscador) {
        buscador.addEventListener("input", buscarPreguntas);
    }
});

function buscarPreguntas() {
    const termino = document.getElementById("buscador").value.toLowerCase();
    const contenedoresCategorias = document.querySelectorAll(".contenedor-preguntas");

    contenedoresCategorias.forEach((contenedor) => {
        contenedor.classList.add("activo");
    });

    const preguntas = document.querySelectorAll(".contenedor-pregunta");

    preguntas.forEach((pregunta) => {
        const textoPregunta = pregunta.querySelector(".pregunta").textContent.toLowerCase();
        const textoRespuesta = pregunta.querySelector(".respuesta").textContent.toLowerCase();

        if (textoPregunta.includes(termino) || textoRespuesta.includes(termino)) {
            pregunta.style.display = "block";
        } else {
            pregunta.style.display = "none";
        }
    });

    if (termino === "") {
        contenedoresCategorias.forEach((contenedor) => {
            if (!contenedor.classList.contains("")) {
                contenedor.style.display = "none";
            }
        });
    }
}

// Detectar clic fuera de las categorías
document.addEventListener("click", (e) => {
    const contenedoresCategorias = document.querySelectorAll(".contenedor-preguntas");
    
    if (!e.target.closest(".contenedor-preguntas")) {
        contenedoresCategorias.forEach((contenedor) => {
            contenedor.classList.remove("");
        });
    }
});

