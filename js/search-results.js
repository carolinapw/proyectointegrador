let buscador = document.querySelector("#inputBusqueda")
let query = buscador

let urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&query=${query}C&page=1&include_adult=false`


fetch (urlMovie)
    .then (function(res){
        return res.json()
    })
    .then (function(data){
        console.log (data)
        let searchMovies = data.results
        let similares = document.querySelector("#inputBusqueda")
        let todosLosSimilares= []

        for (let i=0; i<searchMovies.length; i++){
            todosLosSimilares += `<li class="listaparecidos">
                                            <a href="./detail-serie.html?id=${searchMovies[i].id}"><img class="imgtit" src="https://image.tmdb.org/t/p/w500${searchMovies[i].poster_path}"></a>
                                            <h4 class="subtitulos descripcion"${searchMovies[i].title}></h4>
                                    </li>`
        }                           

        similares.innerHTML = todosLosSimilares

    })

    .catch (function(e){
        console.log (e)
    })

// Falta consultar el value y revisar el for//