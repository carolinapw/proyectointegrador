let buscador = document.querySelector("#inputBusqueda")
let query = buscador.value

console.log(query);

let urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&query=${query}&page=1&include_adult=false`

let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);

queryStringObj.get("search barra");

fetch (urlMovie)
    .then (function(res){
        return res.json()
    })
    .then (function(data){
        console.log (data)
        let searchMovies = data.results
        let similares = document.querySelector(".titsimilares")
        let todosLosSimilares= []

        for (let i=0; i<searchMovies.length; i++){
            todosLosSimilares += `<ul class="titsimilares" id="inputBusqueda"></ul>
                                        <li class="listaparecidos">
                                            <a href="./detail-serie.html?id=${searchMovies[i].id}"><img class="imgtit" src="https://image.tmdb.org/t/p/w500${searchMovies[i].poster_path}"></a>
                                            <h4 class="subtitulos descripcion"${searchMovies[i].title}></h4>
                                        </li>
                                    </ul>`
        }                           

        similares.innerHTML = todosLosSimilares

    })

    .catch (function(e){
        console.log (e)
    })

// Falta consultar el value y revisar el for//

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

