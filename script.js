console.log("Página de Ciberseguridad cargada.");
// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página de Ciberseguridad cargada.");


    document.querySelector('a[href="#introduccion"]').addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#introduccion').scrollIntoView({ behavior: 'smooth' });
    });

   document.querySelector('a[href="#tipos-estafas"]').addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#tipos-estafas').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('a[href="#consecuencias"]').addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#consecuencias').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('a[href="#como-detectar"]').addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#como-detectar').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('a[href="#protegerse"]').addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#protegerse').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('a[href="#recursos"]').addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#recursos').scrollIntoView({ behavior: 'smooth' });
    });
});