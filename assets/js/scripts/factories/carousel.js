// // Carousel
// function carousel(medias){
//     const divCarousel = document.getElementById('carousel');

//     divCarousel.innerHTML = 
//     `<div id="carousel-container">
//         <img class='carousel-img' src="/assets/images/photos/${name}/${medias.image}"/>
//      </div>
//      <i class="fas fa-chevron-left bouton" id="g"></i>
//      <i class="fas fa-chevron-left bouton" id="d"></i>
//      <img onclick="closeModalPicture()" src="assets/images/close.svg" alt="fermeture modal photo" id="carousel-close">
//     `
//     return(divCarousel);
// };

// fermeture carousel
function closeModalPicture() {
    const divCarousel = document.getElementById("carousel");
    divCarousel.style.display = "none";
}
// apparition carousel au click sur le bouton
const imgCarousel = document.getElementById("carousel-display-block");
const divCarousel = document.getElementById("carousel");
    imgCarousel.addEventListener('click',function(){
        divCarousel.style.display = 'block';
    });


