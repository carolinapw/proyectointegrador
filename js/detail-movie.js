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
        for( let i=0; i < data.genres.length; i++){
            genero.innerText += data.genres[i]['name'];
        }

    })
    .catch(function (e){
    console.log(e);
    })

let favoritos = []

//Preguntamos al storage si tiene datos
let recuperoStorage = localStorage.getItem("peliculasFavs")

if (recuperoStorage !== null) {
    //si tiene datos (o sea, no está null) lo guardamos en el array en formato string
    favoritos = JSON.parse(recuperoStorage)
}

//let boton = document.querySelector(".pagFavoritos")
let agregarFavs = document.querySelector(".agregarFavs")

if (favoritos.includes(id)) {
    agregarFavs.innerText = "Quitar de favoritos"
}

agregarFavs.addEventListener("click", function () {

    if (favoritos.includes(id)) {
        //ver donde está 
        let indiceDePeli = favoritos.indexOf(id)
        //sacar la pelicula
        favoritos.splice(indiceDePeli,1)
        agregarFavs.innerText = "Agregar a Favoritos"
    } else {
        favoritos.push(id)
        agregarFavs.innerText = "Quitar de Favoritos"
    }

    

//Guardar los datos en localStorage
    let favsToString = JSON.stringify (favoritos)
    localStorage.setItem("peliculasFavs", favsToString) 
})


// el for nos trae 2 objects

//Watch Providers
let urlProviders = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=d7dce97c9f45ff25eeb66dc3784d0bca`

fetch(urlProviders)
    .then(function(res){
    return res.json();
    })
    .then(function(data){
        console.log(data);

        let infoProviders = data.results
        let nombresProviders = document.querySelector(".plataformas")
        let todaslasPlataformas = []

        for (let i = 0; i <6; i++) {
            todaslasPlataformas += `<li>
                                        <img class="imgProviders" src="https://image.tmdb.org/t/p/w500${infoProviders[i].logo_path}" alt="">
                                        <h2 class="nameProviders">${infoProviders[i].provider_name}</h2>
                                    </li>`
        }

        nombresProviders.innerHTML = todaslasPlataformas

        // let imgProviders = document.querySelector(".imgProviders")
        // let nameProviders = document.querySelector(".nameProviders")

        // imgProviders.src += data.logo_path
        // nameProviders.innerText = data.provider_name

    })
    // .catch(function (e){
    // console.log(e);
    // })

//Botón "Ver recomendaciones"
let urlRecomedaciones = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&page=1`

fetch(urlRecomedaciones)
    .then(function(res){
    return res.json();
    })
    .then(function(data){
        console.log(data);

        let infoRecomendaciones = data.results
        let lista = document.querySelector(".recomendaciones")
        let todasLasRecomendaciones = []

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

