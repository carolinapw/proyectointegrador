let queryString = location.search

let qsObject = new URLSearchParams(queryString)

let id = qsObject.get("id")

let nameGenre = qsObject.get("name")

let names = document.querySelector (".ofertas")

names.innerText = nameGenre


let urlGenerosPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`


fetch (urlGenerosPeliculas)
    .then (function(res){
        return res.json()
    })
    .then (function(data){
        console.log (data)
        let generosPeliculas = data.results
        let generos = document.querySelector(".container")
        let todasLasPeliculas = ""

        for (let i=0; i<generosPeliculas.length; i++) {
            console.log(generosPeliculas[i]);
            todasLasPeliculas += `<article class="card">
                                   
                                    <img src="https://image.tmdb.org/t/p/w500${generosPeliculas[i].poster_path}">
                                        <h4 class="subtitulos" ${generosPeliculas[i].title}><a href= "detail-movie.html?id=${generosPeliculas[i].id}"></a></h4>
                                </article>`
        }
        generos.innerHTML = todasLasPeliculas
    })

    .catch (function(e){
        console.log (e)
    })


                        