// Ouverture Modal
let index, last, mediaEnd;

function openModalCarousel(div) {
    last = allMedias.length - 1;
    const idMediaCarousel = Number(div.getAttribute('data-id'));
    const mediaClick = allMedias.filter(media => media.id === idMediaCarousel)[0];
    index = allMedias.map(media => media.id).indexOf(idMediaCarousel);
    createMultimedia(mediaClick);
}

function createMultimedia(mediaNeed) {
    mediaEnd = mediaNeed.image ?
    `<img src="/assets/images/photos/${photographerFiltres[0].name}/${mediaNeed.image}" alt="${mediaNeed.title}" data-id="${mediaNeed.id}"/>`
    :
    `<video src="/assets/images/photos/${photographerFiltres[0].name}/${mediaNeed.video}" controls="controls" alt="${mediaNeed.title}" data-id="${mediaNeed.id}"></video>`;

    document.querySelector(".divCarousel-multimedias").innerHTML= mediaEnd;
    document.querySelector(".carousel").style.display = "block";
    document.getElementById("bgc-carousel").style.display = "block";
}

// Fermeture Modal
function closeModalCarousel() {
    document.querySelector(".carousel").style.display = "none";
    document.getElementById("bgc-carousel").style.display = "none";
}

// Boutons Next et Prev
function next(){
    if (index === last) {
        index = 0; 
        createMultimedia(allMedias[index]);
        return 
    }
    index += 1;
    createMultimedia(allMedias[index]);
};

function prev() {
    if (index === 0) {
        index = last;    
        createMultimedia(allMedias[index]);
        return 
    }
    index -= 1;
    createMultimedia(allMedias[index]);
};






























// let tab = [ 'sandy', 'sofiane', 'sonia'];
// let result = "";
// tab.map(prenom  =>   result += prenom + " ");
// console.log(result);