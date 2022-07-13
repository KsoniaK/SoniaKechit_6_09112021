//Carousel
function carousel(name, media){
    const contenuCarousel = document.getElementById('carousel-container');
    const photosCarousel = `<img class='carousel-img' src="/assets/images/photos/${name}/${media.image}" alt='${media.title}' data-id='${media.id}'/>`
    const videosCarousel = `<video class='carousel-img' src="/assets/images/photos/${name}/${media.video}" alt='${media.title}' data-id='${media.id}'/></video>`

    contenuCarousel.innerHTML +=  
        `
        <div id="carousel" class="carousel mySlides">
            <div class="carousel-img">
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

// Slide des images
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


//   // Ouverture Modal avec image qui correspond
//   function openModalCarousel() {
//     // récupération des links
//     const links = document.querySelectorAll(".media a");

//     // pour chaque lien:
//     for(let link of links){
//         // écouteurs click sur les liens
//         link.addEventListener("click", function(e){
//             e.preventDefault();
//             // récupération des images
//             const imag = document.querySelectorAll(".carousel-img img");
//             // on cible l'image du lien cliqué
//             imag.src = this.href;

//         // affiche modal et background
//         document.getElementById("carousel").style.display = "block";
//         document.getElementById("bgc-carousel").style.display = "block";

//         })
//     }
//   }








  
//   const slideIndex = 1;
//   showSlides(slideIndex);
  
//   // Boutons Next/Prev
//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
// //   // Thumbnail image controls
// //   function currentSlide(n) {
// //     showSlides(slideIndex = n);
// //   }
  
//   function showSlides(n) {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
//   }










// function test(){
//     const divsImages = document.querySelectorAll(".carousel-container");
//     console.log(divsImages);
// }







































// let tab = [ 'sandy', 'sofiane', 'sonia'];
// let result = "";
// tab.map(prenom  =>   result += prenom + " ");
// console.log(result);