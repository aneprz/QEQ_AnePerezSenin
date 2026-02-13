let tableroPersonaje= document.getElementById('tableroPersonajes');

//Función para mostrar el tablero de personajes
function crearTablero() {
    tableroPersonaje.innerHTML ='';
    let imagenMiyazaki="imagenes/Miyazaki.jpeg"; 

    //Mezclar los personajes y que no estén ordenados
    let personajesMezclados=[...personajes].sort(() => Math.random() - 0.5);

    personajesMezclados.forEach(personaje => {
        let elemento=document.createElement('div');
        elemento.className='elemento';
        
        elemento.innerHTML = `
            <img src="${personaje.imagen}">
            <br>
            <b>${personaje.nombre}</b>
            <p>${personaje.pelicula}</p>
        `;

        elemento.addEventListener('click', function() {
            let imagenClicada = elemento.querySelector('img');
            
            if (imagenClicada.getAttribute('src')==personaje.imagen) {
                imagenClicada.setAttribute('src', imagenMiyazaki);
                elemento.classList.add('descartado'); 
            } else {
                imagenClicada.setAttribute('src', personaje.imagen);
                elemento.classList.remove('descartado');
            }
        });
        tableroPersonaje.appendChild(elemento);
    });
}

//Cargar función
crearTablero();