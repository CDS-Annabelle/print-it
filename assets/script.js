const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Récupération des balises
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const imageElement = document.getElementById("ban-img");
const textElement = document.getElementById("text");
const dots = document.querySelector(".dots");
const totalSlides = slides.length;
let currentSlide = 0;

prev.style.background = "rgba(0,0,0,0.6)";
next.style.background = "rgba(0,0,0,0.6)";


addListenersToArrows();
generateDots(dots, slides.length);
addListenersToDots();
updateSlides();

function addListenersToArrows(){
/* arrow next */
next.addEventListener("click", function () {
    if(currentSlide < totalSlides - 1){
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    console.log("tu cliques sur suivant");
    updateSlides();
});

next.onmouseover = function(){this.style.backgroundColor ='orange'};
next.onmouseout = function(){this.style.backgroundColor='rgba(0,0,0,0.6)'};


/* arrow prev */
prev.addEventListener("click", function () {
    if (currentSlide == 0) {
        currentSlide = totalSlides - 1;
    }
    else {
        currentSlide--;
    }
    console.log("tu cliques sur précédent");
    updateSlides();
});
}
prev.onclick = function(){alert('Flèche gauche cliquée')};
prev.onmouseover = function(){this.style.backgroundColor ='orange'};
prev.onmouseout = function(){this.style.backgroundColor='rgba(0,0,0,0.6)'};


function updateSlides(){
    imageElement.src =`./assets/images/slideshow/${slides[currentSlide].image}`;
    textElement.innerHTML = slides[currentSlide].tagLine;
    const dotArray = Array.from(document.querySelectorAll('.dot'));
    document.querySelector(".dot_selected")?.classList.remove("dot_selected");
    dotArray[currentSlide].classList.add("dot_selected");
    dotArray[currentSlide].checked = true;
}

function generateDots(container, numberSlides){
    for(let index = 0; index < numberSlides ; index++){
        container.innerHTML += `<div class="dot"></div>`
    }
}

function addListenersToDots(){
    const dotArray = Array.from(document.querySelectorAll('.dot'));
    dotArray.forEach((dot, index) => {
        dot.addEventListener('click', (e)=>{
            currentSlide = index
            updateSlides();
        })
    })
}

setInterval(()=>{
    currentSlide = currentSlide < totalSlides -1? currentSlide +1 : 0
    updateSlides()
}, 4000)




