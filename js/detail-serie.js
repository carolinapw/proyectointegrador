let queryString = location.search

let qsObject = new URLSearchParams(queryString)

let id = qsObject.get("id")

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US`

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);

    let imagen = document.querySelector(".fotogossip");
    let titulo = document.querySelector(".titulogossip");
    let puntuacion = document.querySelector(".calificaciongossip");
    let estreno = document.querySelector(".estreno");
    let temporadas = document.querySelector(".temporadas");
    let genero = document.querySelector(".genero");
    let informacion = document.querySelector(".informacion");
    

    imagen.src += data.poster_path;
    titulo.innerText = data.name;
    puntuacion.innerText = data.vote_average;
    estreno.innerText = data.first_air_date;
    temporadas.innerText = data.seasons;
    for (let i=0; i< seasons.length; i++){
        temporadas.innerText = data.seasons[i]['season_number'];
    }
    informacion.innerText = data.overview;
    genero.innerText = data.genres;
    for( let i=0; i < genres.length; i++){
        genero.innerText = data.genres[i]['name'];
    }
})
    .catch(function (e){
        console.log(e);
})

// creo que esta mal linkeado, la foto no carga, algunas series tiran undefined//