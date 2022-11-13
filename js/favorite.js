//Reuperamos el array de favoritos
let recuperoStorage = localStorage.getItem("peliculasFavs")
let peliculas = JSON.parse(recuperoStorage)
console.log(peliculas);

//Recorremos el array y preguntamos por los datos de cada pelicula/serie
for (let i = 0; i < peliculas.length; i++) {
     //Cada vuelta del for tiene que recuperar y mostrar en pantalla los datos de cada pelicula/serie favorita
    
     function buscarYMostrarFavs() {
        //Buscamos una pelicula/serie
        let url1 = "https://api.themoviedb.org/3/movie/popular?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US&page=1"
    
        fetch(url1)
            .then(function(res){
            return res.json();
        })
            .then(function(data){
            console.log(data);
            let infoPeliculas = data.results
            let favoritos = document.querySelector(".imgfav")
            let todasLasPeliculas = []
    
            for (let i=0; i<peliculas.length; i++) {
                console.log(infoPeliculas[i]);
                todasLasPeliculas += `<article class="imgfav">
                                        <a href="./detail-movie.html"><img src="https://image.tmdb.org/t/p/w500${infoPeliculas[i].poster_path}" alt="${infoPeliculas[i].title}">
                                        <a href="detail-movie.html?id=${infoPeliculas[i].id}"><h4 class="titfav1">${infoPeliculas[i].title}</h4></a>
                                    </article>`
            }
            favoritos.innerHTML = todasLasPeliculas
        })
        
        .catch(function(e){
            console.log(e)
        })
    }
}
   
