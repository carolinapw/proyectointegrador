let buscador = document.querySelector(".search")
let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let query = queryStringObj.get("buscador");

let urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&query=${query}&page=1&include_adult=false`


fetch (urlMovie)
    .then (function(res){
        return res.json()
    })
    .then (function(data){
        console.log (data)

        if (data.results.length == 0 ) {
            let explorar = document.querySelector(".titulosimilares")
            explorar.innerText = "No hay resultado para su búsqueda"
        } else {
            let searchMovies = data.results
            let similares = document.querySelector(".container")
            let todosLosSimilares= ''
            for (let i=0; i<searchMovies.length; i++){
                todosLosSimilares += `<div class="card">
                                            <a href="./detail-movie.html?id=${searchMovies[i].id}"><img class="imgtit" src="https://image.tmdb.org/t/p/w500${searchMovies[i].poster_path}"></a>
                                            <h4 class="subtitulos descripcion"${searchMovies[i].original_title}></h4>
                                    </div>`
            }
       
            similares.innerHTML = todosLosSimilares
        }                           
    })

    .catch (function(e){
        console.log (e)
    })

let explorar = document.querySelector(".titulosimilares")
let busqueda = buscador.value 
explorar.innerText = "Explora títulos similares a: " + query

//Buscador 
let form = document.querySelector("form")
let buscador1 = document.querySelector("#inputBusqueda")
let errorBuscador = document.querySelector(".errorBuscador")

form.addEventListener("submit", function (event) {
    event.preventDefault();
   
    if (buscador1.value == "") {
        errorBuscador.innerText = "El campo buscador es obligatorio"
    } else if (buscador1.value.length < 3) {
        errorBuscador.innerText = "El campo buscador requiere más de 3 caracteres"
        
    } else {
        this.submit()
    }

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

    
    let favsToString = JSON.stringify (favoritos)
    localStorage.setItem("peliculasFavs", favsToString) 
})

