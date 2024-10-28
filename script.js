document.addEventListener('DOMContentLoaded', function() {
    
    const opcionesLink = Array.from(document.querySelectorAll('#navbarNav .nav-item a')).find(link => link.textContent.includes("Opciones")); // Selecciona todos los enlaces dentro de .nav-item y busca el primer enlace cuyo texto contenga "Opciones"
    
    if (opcionesLink) {  // Verifica si se encontró el enlace "Opciones"
        opcionesLink.addEventListener('click', function() { // Agrega un evento de clic al enlace "Opciones"
            const optionsRow = document.getElementById('optionsRow'); // Selecciona el elemento que contiene los botones para MD y SM
            optionsRow.classList.toggle('d-none'); // Alterna la clase 'd-none' en optionsRow, mostrando u ocultando los botones
            

            const originalButtons = document.getElementById('originalButtons'); // Selecciona el elemento que contiene los botones originales en LG
            originalButtons.classList.add('d-none');  // Agrega la clase 'd-none' a originalButtons, ocultando los botones originales
        });
    }
});