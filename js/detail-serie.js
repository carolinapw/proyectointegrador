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
    let titulo = document.querySelector("h1");
    let puntuacion = document.querySelector("h3");
    let estreno = document.querySelector(".estreno");
    let temporadas = document.querySelector(".temporadas");
    let informacion = document.querySelector(".informacion");
    let genero = document.querySelector(".genero");

    imagen.src += data.backdrop_path;
    titulo.innerText = data.original_name;
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