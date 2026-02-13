let personajes = [
            {id: 1, nombre: "Chihiro Ogino", pelicula: "El viaje de Chihiro", imagen: "imagenes/Chihiro.png" },
            {id: 2, nombre: "Haku", pelicula: "El viaje de Chihiro", imagen: "imagenes/Haku.png" },
            {id: 3, nombre: "Totoro", pelicula: "Mi vecino Totoro", imagen: "imagenes/Totoro.png" },
            {id: 4, nombre: "Satsuki Kusakabe", pelicula: "Mi vecino Totoro", imagen: "imagenes/Satsuki.png" },
            {id: 5, nombre: "Mei Kusakabe", pelicula: "Mi vecino Totoro", imagen:"imagenes/Mei.png" },
            {id: 6, nombre: "Sophie Hatter", pelicula: "El castillo ambulante", imagen: "imagenes/Sophie.png" },
            {id: 7, nombre: "Howl Jenkins Pendragon", pelicula: "El castillo ambulante", imagen: "imagenes/Hawl.png" },
            {id: 8, nombre: "Calcifer", pelicula: "El castillo ambulante", imagen: "imagenes/Calcifer.png" },
            {id: 9, nombre: "Porco Rosso", pelicula: "Porco Rosso", imagen: "imagenes/Porco.png" },
            {id: 10, nombre: "Jiji", pelicula: "Kiki: Entregas a domicilio", imagen: "imagenes/Jiji.png"},
            {id: 11, nombre: "Nausicaä", pelicula: "Nausicaä del Valle del Viento", imagen: "imagenes/Nausica.png" },
            {id: 12, nombre: "San", pelicula: "La princesa Mononoke", imagen: "imagenes/San.png" },
            {id: 13, nombre: "Ashitaka", pelicula: "La princesa Mononoke", imagen: "imagenes/Ashitaka.png" },
            {id: 14, nombre: "Ponyo", pelicula: "Ponyo en el acantilado", imagen: "imagenes/Ponyo.png" },
            {id: 15, nombre: "Sosuke", pelicula: "Ponyo en el acantilado", imagen: "imagenes/Sosuke.png" },
            {id: 16, nombre: "Pazu", pelicula: "El castillo en el cielo", imagen: "imagenes/Pazu.png" }
        ];

let personajeSecreto= document.getElementById('personajeSecreto');

//Función para obtener un personaje random de entre los 16
function conseguirPersonajeSecreto() {
    //Indice aleatorio entre 0 y 15
    let indexRandom= Math.floor(Math.random()*personajes.length);
    let personajeSeleccionado= personajes[indexRandom];

    personajeSecreto.innerHTML = `
        <div class="elementoSecreto">
            <img src="${personajeSeleccionado.imagen}" alt="${personajeSeleccionado.nombre}">
            <br>
            <b>${personajeSeleccionado.nombre}</b>
            <p>${personajeSeleccionado.pelicula}</p>
        </div>
    `;
}

//Cargar función
conseguirPersonajeSecreto();