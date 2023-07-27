fetch('https://api.themoviedb.org/3/movie/popular?api_key=a335f2dc18b8a1745af3b20cad14a9e7',{
    method: 'GET'
})
.then(response => response.json())
.then(function (json) {
    var container = document.querySelector('.container');
    json.results.map(function(filme){
        container.innerHTML+=`
            <div class="imagem">
                <img style="width: 70px;" src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="${filme.title}"
            </div>
            <div style="cursor: pointer;" class="tituloFilme">
                `+filme.title+`

                <div  style="display: none;" class="description">`+filme.overview+`</div>
                
            </div>
            
            <hr />
        `
    })

    var titulos = document.querySelectorAll('.tituloFilme')
    for(var i = 0; i < titulos.length; i++){
        titulos[i].addEventListener('click', (t)=>{
            if(t.target.querySelector('.description').style.display == "none"){
                t.target.querySelector('.description').style.display = "block"
            }else{
                t.target.querySelector('.description').style.display = "none"
            }
        })
    }
})