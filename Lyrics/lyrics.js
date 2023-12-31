//https://api.lyrics.ovh/suggest/nirvana
const inputSearch = document.querySelector(".input_search")
const btnSearch = document.querySelector(".btn__search")
const results = document.querySelector(".results")
btnSearch.addEventListener("click", function(){
    //console.log('jj')
    fetchAPI()
    results.innerHTML = ""
})
async function fetchAPI(){
    try{
    const req = await fetch(`https://api.lyrics.ovh/suggest/${inputSearch.value}`)
    const res = await req.json()
    displayResults(res.data)
    }catch(err){
        console.log(error.message)
    }
}
function displayResults(songs){
    //console.log(songs)
    const listResults = document.createElement("ul")
    songs.forEach(song =>{
        const elementLi = document.createElement("li")
        const elementA = document.createElement("a")
        const elementButton = document.createElement("button")
        elementA.innerHTML = `${song.title}`
        elementButton.innerText = 'see Lyrics'
        elementButton.addEventListener("click", function(){
            getLyrics(song.artist.name, song.title)
        })
        
        elementLi.appendChild(elementA)
        elementLi.appendChild(elementButton)
        listResults.appendChild(elementLi)
        
    });
    results.appendChild(listResults)
    

}
async function getLyrics(artist,nameOfTheSong){
    console.log(artist,nameOfTheSong)
    const req = await fetch(`https://api.lyrics.ovh/v1/${artist}/${nameOfTheSong}`)
    const res = await req.json()
    console.log(res)
    results.innerHTML = ""
    //results.innerHTML = res.lyrics.replace(/(\r\n|\r|\n)/g, '<br>') 
    results.innerHTML = res.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
}