//Reuperamos el array de favoritos
let recuperoStorage = localStorage.getItem("peliculasFavs")
let peliculas = JSON.parse(recuperoStorage)
console.log(peliculas);


let favoritos = document.querySelector(".container")
let todosLosFavoritos = ''

//Recorremos el array y preguntamos por los datos de cada pelicula/serie
for (let i = 0; i < peliculas.length; i++) {
     //Cada vuelta del for tiene que recuperar y mostrar en pantalla los datos de cada pelicula/serie favorita
    // console.log(peliculas[i]);
    
    let url1 = `https://api.themoviedb.org/3/movie/${peliculas[i]}?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US`
    
    fetch(url1)
        .then(function (res) {
            return res.json();
        })
        .then(function(data){
            console.log(data);
            let pelicula = data
            todosLosFavoritos += `<article class="imgfav">
                                    <a href="detail-movie.html?id=${pelicula.id}">
                                        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
                                        <h4 class="titfav1">${pelicula.title}</h4>
                                    </a>
                                  </article>`
            favoritos.innerHTML = todosLosFavoritos
        })
    }




   
