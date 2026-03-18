/*------------------BOTÓN DE AÑADIR A FAVORITOS-------------------*/
function agregarFavorito(boton){
    boton.textContent = "Añadido a favoritos✅";
    boton.style.backgroundColor = "lightgreen";
}

/*------------------BOTÓN DE AÑADIR A FAVORITOS-------------------*/
function ocultarVideo(id, boton){
    let video = document.getElementById(id);

    if(video.style.display === "none"){
        video.style.display = "block";
        boton.textContent = "Ocultar video";
    } else {
        video.style.display = "none";
        boton.textContent = "Mostrar video";
    }
}