const rowBoxElement = document.querySelector('#row-box');
const col9Element = document.createElement('div');
const col3Element = document.createElement('div');

rowBoxElement.classList.add('row', 'img-box', 'rounded-3', 'mt-5');
col9Element.classList.add('col-9', 'overflow-hidden', 'p-0');
col3Element.classList.add('col-3', 'position-relative', 'p-0');

rowBoxElement.append(col9Element,col3Element);



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

col3Element.innerHTML = 
`
    <i class="fa-solid fa-circle-chevron-down position-absolute" id="down-arrow"></i>
    <i class=" fa-solid fa-circle-chevron-up position-absolute" id="up-arrow"></i>

`





images.forEach(function(currentImage, index) {
    
    col3Element.innerHTML += 
    `
    <div class="col-12 small-img">
        <img class="img-fluid w-100 h-100  object-fit-cover" src="${currentImage.image}" alt="${index + 1}">
    </div>
    `;
    
    col9Element.innerHTML += 
    
    `
    <div class="slider">

        <section class="slide ">

            <img class="img-fluid object-fit-cover w-100 photo" src="${currentImage.image}" alt="${index + 1}">
    
            <div class="details">

                <h3 class="title">
                    ${currentImage.title}
                </h3>

                <div class="text">
                    ${currentImage.text}
                </div>

            </div>

        </section>

    </div>
    `;
    
    
})

let formaggi = document.getElementsByClassName('slide');

formaggi[0].className += ' active'

let slideNumber = 0;

showSlide(slideNumber)

document.querySelector("#up-arrow").addEventListener("click", function() {
    
    slideNumber--;
    
    if (slideNumber < 0) {

        slideNumber = images.length - 1;
        
        
        
    } showSlide(slideNumber % images.length);
    
    

})

document.querySelector("#down-arrow").addEventListener("click", function() {


    slideNumber++;

    showSlide(slideNumber % images.length);
});


const thumbnailsElements = document.querySelectorAll(".small-img");

thumbnailsElements.forEach(((currentThumbnail, index) => {

    currentThumbnail.addEventListener("click", () => {

        slideNumber = index;
        
        showSlide(slideNumber);

    })

}));

function showSlide(number) {
    console.log(number)

    const slides = formaggi;

    if (number >= images.length){

        number = 0

    } else if (number < 0) {

        number = images.length - 1

    }
 
    for (let index = 0; index < slides.length; index++) {

        if (index == number) {

            formaggi[index].classList.add('active')

        } else {

            formaggi[index].classList.remove('active')

        }
    } 

    slides[number].classList.add('active')

}

console.log(formaggi)

const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const reverseButton = document.querySelector("#reverse-button");




let timer;

playButton.addEventListener("click", () => {

    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
    reverseButton.style.display = "none";


    timer = setInterval(function() {
    
        if(slideNumber > images.length -1) {
            slideNumber = 1;
            showSlide(slideNumber);
    
        } else {
    
            slideNumber++;
            showSlide(slideNumber);
        }
    
    }, 3000);
});


pauseButton.addEventListener("click", () => {
    playButton.style.display = "inline-block";
    reverseButton.style.display = "inline-block"
    pauseButton.style.display = "none";

    clearInterval(timer);
});


reverseButton.addEventListener("click", () => {
    reverseButton.style.display = "none"
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";



    timer = setInterval(function() {
    
        if(slideNumber <= 1) {
            slideNumber = images.length;
            showSlide(slideNumber);
    
        } else {
    
            slideNumber--;
            showSlide(slideNumber);
        }
    
    }, 3000);

}); 

