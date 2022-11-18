let urlGenerosPeliculas = ``


fetch (urlGenerosPeliculas)
    .then (function(res){
        return res.json()
    })
    .then (function(data){
        console.log (data)

    })

    .catch (function(e){
        console.log (e)
    })
