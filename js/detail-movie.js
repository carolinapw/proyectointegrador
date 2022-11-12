let queryString = location.search

let qsObject = new URLSearchParams(queryString)

let id = qsObject.get("id")

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US`

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);

    let imagen = document.querySelector(".soul");
    let titulo = document.querySelector("h1");
    let puntuacion = document.querySelector("h3");
    let informacion1 = document.querySelector(".data1");
    let informacion2 = document.querySelector(".data2");
    let informacion3 = document.querySelector(".data3");
    let genero = document.querySelector(".genero");

    imagen.src += data.poster_path;
    titulo.innerText = data.title;
    puntuacion.innerText += data.vote_average;
    informacion1.innerText = data.release_date;
    informacion2.innerText = data.runtime;
    informacion3.innerText = data.overview;
    genero.innerText = data.genres;
    for( let i=0; i < genres.length; i++){
        genero.innerText = data.genres[i]['name'];
    }

})
.catch(function (e){
    console.log(e);
})


// el for nos trae 2 objects