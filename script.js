// Obtener la altura de la primera sección
const topBar = document.getElementById('topBar');
const seccion1 = document.getElementById('section1');

let alturaActual = topBar.offsetHeight;

// Crear un observador de redimensionamiento
const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        alturaActual = entry.contentRect.height;
        seccion1.style.marginTop = alturaActual + 'px';
    }
});

// Observar el tamaño de miElemento
resizeObserver.observe(topBar);
