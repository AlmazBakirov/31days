// Titles: https://omdbapi.com/?s=thor&page=1&apikey=fc1fef96
// details: http://www.omdbapi.com/?i=tt3896198&apikey=fc1fef96

const moviesSearchInput = document.querySelector(".form-control")
const placeForMovies = document.querySelector(".search-list")
const movieDescription = document.querySelector(".result-grid")



// here im calling my server with a movie param that gives me an array of movies
async function callAPI(movie){
    try{

    const req = await fetch(`https://omdbapi.com/?s=${movie}&page=1&apikey=25c603db`)
    const res = await req.json()
    showAllMovies(res.Search)
    console.log(req)
    }catch(err){
        
    }
    
}

// this part is added and event everytime that i press a key on the input
//is calling the function callAPI

moviesSearchInput.addEventListener("keyup",function(){
    callAPI(moviesSearchInput.value)
    
})
// this function will show me the movies under the input button
function showAllMovies(movies){
    console.log(movies , "this is my query of movies")
    const allMyMovies = movies.map((el)=>{
        return(`<div class = "search-list-item" data-id=${el.imdbID} >
        <div class = "search-item-thumbnail">
            <img src =${el.Poster}>
        </div>
        <div class = "search-item-info">
            <h3>${el.Title}</h3>
            <p>${el.Year}</p>
        </div>
    </div>`)
    })

    placeForMovies.innerHTML = allMyMovies.join("")
    
    const myArray = document.getElementsByClassName("search-list-item")
     // is not an arrya is HTMLcollection
    // that collection doesnt have the forEch method.-
    const listsOfMovies = Array.from(myArray)
    listsOfMovies.forEach(el=>{
        document.querySelector(`[data-id=${el.dataset.id}]`).addEventListener("click",function(){
            getOneMovie(el.dataset.id)
        })
        })
    
}

async function getOneMovie(movieId){
    const req = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=fc1fef96`)
    const res = await req.json()
    console.log(res)
    const movieToshow = `
    <div class = "movie-poster">
        <img src = ${res.Poster} alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${res.Title}</h3>
        <h5 class = "movie-rating"> imdb: ${res.imdbRating} from ${res.imdbVotes} votes</h5>
        <ul class = "movie-misc-info">
            <li class = "year">${res.Year}</li>
            <li class = "rated">Ratings: ${res.Rated}</li>
            <li class = "released">Released: ${res.Released}</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${res.Genre}</p>
        <p class = "writer"><b>Writer:</b> ${res.Writer}</p>
        <p class = "director"><b>Director:</b> ${res.Director}</p>
        <p class = "actors"><b>Actors: </b>${res.Actors}</p>
        <p class = "plot"><b>Plot:</b> ${res.Plot}</p>
        <p class = "language"><b>Language:</b> ${res.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${res.Awards}</p>
    </div>
    `
    placeForMovies.innerHTML = ""
    movieDescription.innerHTML = movieToshow
    moviesSearchInput.value = ""
}


