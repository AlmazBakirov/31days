const carousel = document.querySelector('.carousel');

let sliders = [];
let slideIndex = 0;

const createSlide = () => {
    if(slideIndex === movies.length){
        
        slideIndex = 0;
        
    }
    
    //creating DOM elements

    let slide = document.createElement('div');
    let content = document.createElement('div');
    let imgElement = document.createElement('img');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''))
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up img
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide)
    console.log(sliders)

    //adding slider effect
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100*(sliders.length-2)}% - ${30*(sliders.length-2)}px )`
    }
}
for(let i=0; i<3; i++){
    createSlide()
}
/* setInterval(()=>{
    createSlide()
},3000) */

const videoCards = document.querySelectorAll('.video-card')

videoCards.forEach((item)=>{
    item.addEventListener('mouseover', () => {
        let video = item.children[1]
        video.play()
    })
    item.addEventListener('mouseleave', () => {
        let item = item.children[1]
        video.pause()
    })
})

let cardContainer = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn')
let nxtBtns = document.querySelectorAll('.nxt-btn')

cardContainer.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200
    })
    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200
    }) 
})