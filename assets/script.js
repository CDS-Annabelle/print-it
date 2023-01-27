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
prev.style.background = "rgba(0,0,0,0.6)";

const next = document.getElementById("next");
next.style.background = "rgba(0,0,0,0.6)";

const imageElement = document.getElementById("ban-img");
const textElement = document.getElementById("text");

const dots = document.getElementsByClassName("dot");

const imgSlide = slides.length;
// renvoie le tableau de slides
console.log(slides);

let i = 0;


/* arrow next 
 J'incrémente tant que i est inférieur à mon nombre de slide */
next.addEventListener("click", function () {
    if(i < imgSlide - 1){
        i++;
    } else {
        i = 0;
    }
    console.log("tu cliques sur suivant");

    imageElement.src = `./assets/images/slideshow/${slides[i].image}`;
    textElement.innerHTML = slides[i].tagLine;

    dots[i].classList.add("selected-dot");
    dots[i].checked = true;
});

/* arrow prev */
prev.addEventListener("click", function () {
    if (i == 0) {
        i = imgSlide - 1;
    }
    else {
        i--;
    }
    alert("tu cliques sur précédent");

    imageElement.src = `./assets/images/slideshow/${slides[i].image}`;
    textElement.innerHTML = slides[i].tagLine;

    dots[i].classList.add("selected-dot");
    dots[i].checked = true;
});
