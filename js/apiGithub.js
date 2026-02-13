const miUsuario="aneprz"; 

async function cargarFirmaGithub() {
    const apartadoFirma = document.getElementById('firmaGithub');

    try {
        let api= await fetch(`https://api.github.com/users/${miUsuario}`);
        
        // Comprobamos si mi usuario existe
        if (!api.ok) {
            throw new Error("Usuario no encontrado");
        }

        //Convertimos respuesta a JSON
        let datos=await api.json();
        
        apartadoFirma.innerHTML = `
            <a href="${datos.html_url}">
                <img src="${datos.avatar_url}">
            </a>
            <div>
                <p>@${datos.login}</p>
                <p>Repositorios: <b>${datos.public_repos}</b></p>
            </div>
        `;
    } catch (error) {
        apartadoFirma.innerHTML = `<p>Error al cargar el usuario.</p>`;
        console.error("Error en la API de GitHub:", error);
    }
}

// Llamamos a la función
cargarFirmaGithub();