import movie from "./data.json" assert {type:"json"};


const container = document.querySelector(".container");

function readMovies(){
    movie.entries.forEach((movie) => {
       container.innerHTML += 
       
       ` <div class="movie">
       <img src="${movie.images.posterArt.url}" alt="">
       <h4>${movie.title}</h4>
        
      <p>
        ${movie.description}
      </p>
   </div>`
        
    });
}

readMovies();