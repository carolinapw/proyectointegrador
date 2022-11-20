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

let favoritos = []

let recuperoStorage = localStorage.getItem("seriesFavs")

if(recuperoStorage !== null){
    favoritos = JSON.parse(recuperoStorage)
}

let agregarFavs = document.querySelector(".agregarFavs")

if (favoritos.includes(id)) {
    agregarFavs.innerText = "Quitar de favoritos"
}

agregarFavs.addEventListener("click", function() {
    if (favoritos.includes(id)) {
        let indiceDePeli = favoritos.indexOf(id)
        favoritos.splice(indiceDePeli, 1)
        agregarFavs.innerText = "Agregar a Favoritos"
    } else {
        favoritos.push(id)
        agregarFavs.innerText = "Quitar de Favoritos"
    }

    let favsToString = JSON.stringify (favoritos)
    localStorage.setItem("seriesFavs", favsToString)
})

let urlProviders = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US`

fetch(urlProviders)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);

        let infoProviders = data.results.US.flatrate
        let nombresProviders = document.querySelector(".plataformas")
        let todasLasPlataformas = []

        for (let i = 0; i < infoProviders.length; i++) {
            todasLasPlataformas += `<li class="listaPlataformas">
                                        <img class="imgProviders" src="https://image.tmdb.org/t/p/w500${infoProviders[i].logo_path}" alt="">
                                        <h4 class="nameProviders">${infoProviders[i].provider_name}</h4>
                                    </li>`
        }

        nombresProviders.innerHTML = todasLasPlataformas
    })

let urlRecomendaciones = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&page=1`

fetch(urlRecomedaciones)
    .then(function(res){
    return res.json();
    })
    .then(function(data){
        console.log(data);

        let infoRecomendaciones = data.results
        let lista = document.querySelector(".recomendaciones")
        let todasLasRecomendaciones = ""

        for (let i = 0; i< 6; i++) {
            todasLasRecomendaciones += `<li class="peliculasSimilares">
                                            <img class="imgSimilares" src="https://image.tmdb.org/t/p/w500${infoRecomendaciones[i].poster_path}">
                                            <h4 class="info"><a href="./detail-movie.html?id=${infoRecomendaciones[i].id}">${infoRecomendaciones[i].title}</a></h4>
                                        </li>`
           
        }
        lista.innerHTML = todasLasRecomendaciones

        
        let verRecomendaciones = document.querySelector(".button")
        
        verRecomendaciones.addEventListener("click", function () {

            if (verRecomendaciones.innerText == "Ver recomendaciones") {
                lista.style.display = "flex";
                this.innerText = "Ocultar recomendaciones";
            } else {
                lista.style.display = "none"
                this.innerText = "Ver recomendaciones"
            }

        })
        
        verRecomendaciones.addEventListener("mouseover", function () {
            verRecomendaciones.style.backgroundColor = "#6C94FF"
            verRecomendaciones.style.borderColor = "#6C94FF"
        })

        verRecomendaciones.addEventListener("mouseout", function () {
            verRecomendaciones.style.backgroundColor = "#000C54"
            verRecomendaciones.style.borderColor = "white"
        })
    })

    .catch(function (e){
    console.log(e);
    })

    let urlTrailer = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US`

    fetch(urlTrailer)
        .then(function(res){
        return res.json();
        })
        .then(function(data){
            console.log(data);
    
            let trailer = data.results
            let iFrame = document.querySelector(".trailer")
          
            iFrame.innerHTML = `<h3 class="info">Trailer</h3>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailer[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        
        })
    
        .catch(function (e){
        console.log(e);
        })

let urlReview = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&page=1`

fetch(urlReview)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        
        let reviewsUsuarios = data.results
        let nombre = document.querySelector(".opiniones")
        let todaslasReviews = []
        
        for (let i = 0; i< 4; i++) {
            todaslasReviews += `<article class="cajacuatro">
                                    <h2 class="usuario">Usuario:${reviewsUsuarios[i].author}</h2>
                                    <p class="reviewUsuario">${reviewsUsuarios[i].content}</p>
                                </article>`
        
                   
        }
        nombre.innerHTML = todaslasReviews
                
                
    })
        
    .catch(function (e){
        console.log(e);
    })