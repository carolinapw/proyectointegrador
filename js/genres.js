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
                                    <h3 class="subtitulos descripcion"><a href="./detail-genres.html?id=${infoPeliculas[i].id}">${infoPeliculas[i].name}</a></h3>
                                </article>`
        }
        generos.innerHTML = todasLasPeliculas
    })

    .catch (function(e){
        console.log (e)
    })
