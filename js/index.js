let url1 = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US"

fetch(url1)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
    let infoPersonajes = data.results
    let ofertas = document.querySelector(".container")
    let personajes = ""

    for (let i = 0, i < infoPersonajes.length, i++ ) {
        console.log(infoPersonajes[i]);
    }
})
.catch(function(e){
    console.log(e)
})

let url2 = "https://api.themoviedb.org/3/tv/{tv_id}?api_key=d7dce97c9f45ff25eeb66dc3784d0bca&language=en-US"

fetch(url2)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(e){
    console.log(e)
})