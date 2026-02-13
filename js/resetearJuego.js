let btnReset=document.getElementById('btnReset');

btnReset.addEventListener('click', function() {
    let confirmacion=confirm("¿Estás seguro de querer resetear el juego?");
    
    if (confirmacion) {
        crearTablero();
        conseguirPersonajeSecreto();
    }
});