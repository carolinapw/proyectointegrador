let urlGenerosPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US`


fetch (urlGenerosPeliculas)
    .then (function(res){
        return res.json()
    })
    .then (function(data){
        console.log (data)
        let infoPeliculas = data.results
        let ofertas = document.querySelector(".populares")
        let todasLasPeliculas = []

        for (let i=0; i<; i++) {
            console.log(infoPeliculas[i]);
            todasLasPeliculas += ``
        }
        ofertas.innerHTML = todasLasPeliculas
    })

    .catch (function(e){
        console.log (e)
    })

    <article class="card">
    <img src="https://image.tmdb.org/t/p/w500${infoPeliculas[i].poster_path}" alt="${infoPeliculas[i].title}">
    <h4 class="subtitulos descripcion"><a href="detail-movie.html?id=${infoPeliculas[i].id}">${infoPeliculas[i].title}</a></h4>
    <p class="fechas descripcion">${infoPeliculas[i].release_date}</p>
</article>
