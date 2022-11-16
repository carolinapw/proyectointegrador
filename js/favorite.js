//Reuperamos el array de favoritos
let recuperoStorage = localStorage.getItem("peliculasFavs")
let peliculas = JSON.parse(recuperoStorage)
console.log(peliculas);



let id = recuperoStorage.get("id")

let favoritos = document.querySelector(".container")
let todosLosFavoritos = []

//Recorremos el array y preguntamos por los datos de cada pelicula/serie
for (let i = 0; i < peliculas.length; i++) {
     //Cada vuelta del for tiene que recuperar y mostrar en pantalla los datos de cada pelicula/serie favorita
    console.log(peliculas[i]);
    
    let url1 = `https://api.themoviedb.org/3/movie/${id}?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US`
    
    fetch(url1)
        .then(function (res) {
            return res.json();
        })
        .then(function(data){
            console.log(data);
            let infoPeliculas = data.results
            todosLosFavoritos += `<article class="imgfav">
                                     <a href="./detail-movie.html"><img src="https://image.tmdb.org/t/p/w500${infoPeliculas[i].poster_path}" alt="${infoPeliculas[i].title}">
                                    <a href="detail-movie.html?id=${infoPeliculas[i].id}"><h4 class="titfav1">${infoPeliculas[i].title}</h4></a>
                                  </article>`
        })
    }

favoritos.innerHTML = todosLosFavoritos


   
