let url1 = "https://api.themoviedb.org/3/movie/popular?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&page=1"

fetch(url1)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let infoPeliculas = data.results
        let ofertas = document.querySelector(".populares")
        let todasLasPeliculas = []

        for (let i=0; i<6; i++) {
            console.log(infoPeliculas[i]);
            todasLasPeliculas += `<article class="card">
                                    <img src="https://image.tmdb.org/t/p/w500${infoPeliculas[i].poster_path}" alt="${infoPeliculas[i].title}">
                                    <h4 class="subtitulos descripcion"><a href="detail-movie.html?id=${infoPeliculas[i].id}">${infoPeliculas[i].title}</a></h4>
                                    <p class="fechas descripcion">${infoPeliculas[i].release_date}
                                </article>`
        }
        ofertas.innerHTML = todasLasPeliculas
})
   
.catch(function(e){
    console.log(e)
})

let url2 = "https://api.themoviedb.org/3/movie/top_rated?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&page=1"

fetch(url2)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let infoPeliculas = data.results
        let ofertas = document.querySelector(".topRated")
        let todasLasPeliculas = []
    
        for (let i=0; i<6; i++) {
            console.log(infoPeliculas[i]);
            todasLasPeliculas += `<article class="card">
                                    <img src="https://image.tmdb.org/t/p/w500${infoPeliculas[i].poster_path}" alt="${infoPeliculas[i].title}">
                                    <h4 class="subtitulos descripcion"><a href="detail-movie.html?id=${infoPeliculas[i].id}">${infoPeliculas[i].title}</a></p>
                                    <p class="fechas descripcion">${infoPeliculas[i].release_date}
                                </article>`
        }
        ofertas.innerHTML = todasLasPeliculas
        
    })
    .catch(function(e){
        console.log(e)
    })


let url3 = "https://api.themoviedb.org/3/movie/popular?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&page=2"

fetch(url3)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let infoPeliculas = data.results
        let ofertas = document.querySelector(".seriesRecomendadas")
        let todasLasPeliculas = []
    
        for (let i=0; i<6; i++) {
            console.log(infoPeliculas[i]);
            todasLasPeliculas += `<article class="card">
                                    <img src="https://image.tmdb.org/t/p/w500${infoPeliculas[i].poster_path}" alt="${infoPeliculas[i].title}">
                                    <h4 class="subtitulos descripcion"><a href="detail-movie.html?id=${infoPeliculas[i].id}">${infoPeliculas[i].title}</a></p>
                                    <p class="fechas descripcion">${infoPeliculas[i].release_date}
                                </article>`
        }
        ofertas.innerHTML = todasLasPeliculas
    })
    .catch(function(e){
        console.log(e)
    })

    let url4 = "https://api.themoviedb.org/3/tv/airing_today?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&page=1"

    fetch(url4)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            let infoPeliculas = data.results
            let ofertas = document.querySelector(".ultimosLanzamientos")
            let todasLasPeliculas = []
        
            for (let i=0; i<6; i++) {
                console.log(infoPeliculas[i]);
                todasLasPeliculas += `<article class="card"> 
                                        <img src="https://image.tmdb.org/t/p/w500${infoPeliculas[i].poster_path}" alt="${infoPeliculas[i].name}">
                                        <h4 class="subtitulos descripcion"><a href="detail-movie.html?id=${infoPeliculas[i].id}">${infoPeliculas[i].name}</a></p>
                                        <p class="fechas descripcion">${infoPeliculas[i].first_air_date}</p>
                                    </article>`
            }
            ofertas.innerHTML = todasLasPeliculas
        })
        .catch(function(e){
            console.log(e)
        })

//Buscador 
let form = document.querySelector("form")
let buscador = document.querySelector("#inputBusqueda")
let errorBuscador = document.querySelector(".errorBuscador")

form.addEventListener("submit", function (event) {
    event.preventDefault();
   
    if (buscador.value == "") {
        errorBuscador.innerText = "El campo buscador es obligatorio"
    } else if (buscador.value.length < 3) {
        errorBuscador.innerText = "El campo buscador requiere más de 3 caracteres"
        
    } else {
        this.submit()
    }

})

buscador.addEventListener("focus", function () {
    errorBuscador.innerText = ""
})

