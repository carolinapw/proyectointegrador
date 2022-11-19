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
        let puntuacion = document.querySelector(".calificaciongossip");
        let informacion = document.querySelector(".informacion");
        let genero = document.querySelector(".generosDiv");
        let estreno = document.querySelector(".estreno");
        let temporadas = document.querySelector(".temporadas")

        imagen.src += data.poster_path;
        titulo.innerText = data.name;
        puntuacion.innerText += data.vote_average;
        estreno.innerText = data.first_air_date;
        temporadas.innerText = data.number_of_seasons;
        for (let i=0; i < data.genres.length; i++){
            genero.innerHTML += `<a href="./detail-genres.html?id=${data.genres[i].id}"><p class="genero">${data.genres[i].name}</p></a>`
        }


    })
    .catch(function(e){
        console.log(e);
    })