//Carousel
function carousel(name, media){
    const contenuCarousel = document.getElementById('carousel-container');
    const photosCarousel = `<img class="carousel-img" src="/assets/images/photos/${name}/${media.image}" alt="${media.title}"  data-id="${media.id}"/>`
    const videosCarousel = `<video class="carousel-img" src="/assets/images/photos/${name}/${media.video}" alt="${media.title}" data-id="${media.id}"/></video>`

    contenuCarousel.innerHTML +=  
        `
        <div id="carousel" class="carousel">
            <div class="divCarousel-img">
                ${media.image ? photosCarousel : videosCarousel}
            </div>
            <p>${media.title}</p>
        </div>
        `
        return(contenuCarousel);
};

// Ouverture Modal
function openModalCarousel() {
    document.getElementById("carousel").style.display = "block";
    document.getElementById("bgc-carousel").style.display = "block";
}
  
// Fermeture Modal
function closeModalCarousel() {
    document.getElementById("carousel").style.display = "none";
    document.getElementById("bgc-carousel").style.display = "none";
}

// Boutons Next et Prev
function slide(){
    const next = document.getElementById("d");
    const prev = document.getElementById("g");

    next.addEventListener('click', function(){
        console.log('next');
    });
    prev.addEventListener('click', function(){
        console.log('prev');
    });
};



function carouselLightbox(){
    const images = Array.from(document.querySelectorAll(".images-media"));
    // console.log(images);
    images.map((image) =>{
        const dataId = Number(image.getAttribute("data-id"));
        // console.log(dataId);
    })
}

function mediasId(media){
    // console.log(media.id);
}










// function test(){
//     const divsImages = document.querySelectorAll(".carousel-container");
//     console.log(divsImages);
// }







































// let tab = [ 'sandy', 'sofiane', 'sonia'];
// let result = "";
// tab.map(prenom  =>   result += prenom + " ");
// console.log(result);