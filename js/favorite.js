//Reuperamos el array de favoritos
let recuperoStorage = localStorage.getItem("peliculasFavs")
let peliculas = JSON.parse(recuperoStorage)
console.log(peliculas);

let favoritos = document.querySelector(".container")
let todosLosFavoritos = []

//Recorremos el array y preguntamos por los datos de cada pelicula/serie
for (let i = 0; i < peliculas.length; i++) {
     //Cada vuelta del for tiene que recuperar y mostrar en pantalla los datos de cada pelicula/serie favorita
    console.log(peliculas[i]);
    
    let url1 = ""
    
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


   
