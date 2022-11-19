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

let urlGenerosPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US`


fetch (urlGenerosPeliculas)
    .then (function(res){
        return res.json()
    })
    .then (function(data){
        console.log (data)
        let infoPeliculas = data.genres
        let generos = document.querySelector(".container")
        let todasLasPeliculas = ""

        for (let i=0; i<infoPeliculas.length; i++) {
            console.log(infoPeliculas[i]);
            todasLasPeliculas += `<article class="card">
                                    <h3 class="subtitulos descripcion"><a href="./detail-genres.html?id=${infoPeliculas[i].id}&name=${infoPeliculas[i].name}">${infoPeliculas[i].name}</a></h3>
                                </article>`
        }
        generos.innerHTML = todasLasPeliculas

    })

    .catch (function(e){
        console.log (e)
    })
