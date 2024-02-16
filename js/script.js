const rowBoxElement = document.querySelector('#row-box');
const col9Element = document.createElement('div');
const col3Element = document.createElement('div');

rowBoxElement.classList.add('row', 'img-box', 'rounded-3', 'mt-5');
col9Element.classList.add('col-9', 'overflow-hidden', 'p-0');
col3Element.classList.add('col-3', 'position-relative', 'p-0');

rowBoxElement.append(col9Element,col3Element);

col3Element.innerHTML = 
`
<i class="fa-solid fa-circle-chevron-up position-absolute"></i>
<i class="fa-solid fa-circle-chevron-down position-absolute"></i>
`


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

for (let i = 0; i < images.length; i++) {
    console.log(images[i])
    
    col3Element.innerHTML += 
    `
    <div class="col-12 small-img">
        <img class="img-fluid w-100 h-100  object-fit-cover" src="${images[i].image}" alt="#">
    </div>
    `;
    
    col9Element.innerHTML += 
    
    `    
    <section class="slide">
    
    <img class="img-fluid object-fit-cover w-100 photo" src="${images[i].image}" alt="#">
    
        <div class="details">
    
            <h3 class="title">
                ${images[i].title}
            </h3>
    
            <div class="text">
                ${images[i].text}
            </div>
        
        </div>
        
    </section>
    `;
    
    
}

