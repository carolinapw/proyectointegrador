let url1 = "https://api.themoviedb.org/3/movie/popular?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&page=1"

fetch(url1)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
    let infoPeliculas = data.results
    let ofertas = document.querySelector(".container")
    let todasLasPeliculas = []

    for (let i=0; i<6; i++) {
        console.log(infoPeliculas[i]);
        todasLasPeliculas += `<article>
                                <img src="${infoPeliculas[i].poster_path} alt="${infoPeliculas[i].title}">
                                <p><a href="detail-movie.html?id=${infoPeliculas[i].id}">Name: ${infoPeliculas[i].title}</a></p>
                                <p>${infoPeliculas[i].release_date}
                            </article>`
    }
    ofertas.innerHTML = todasLasPeliculas
    personajes.innerHTML = characters
})
   
.catch(function(e){
    console.log(e)
})

// let url2 = "https://api.themoviedb.org/3/movie/latest?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US"

// fetch(url2)
// .then(function(res){
//     return res.json();
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(e){
//     console.log(e)
// })