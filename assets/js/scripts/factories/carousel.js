//Carousel
//Apparition carousel au click sur une image
function openCarousel(){
    const imgCarousel = Array.from(document.querySelectorAll(".images-media"));
    const divCarousel = document.getElementById("carousel");
    const bgcCarousel = document.getElementById("bgc-carousel");

        imgCarousel.map((elt) => {
            elt.addEventListener('click', function(){
                divCarousel.style.display = "block";
                bgcCarousel.style.display = "block";
            });
        });
};

//Fermeture carousel
function closeCarousel() {
    const divCarousel = document.getElementById("carousel");
    const bgcCarousel = document.getElementById("bgc-carousel");

    divCarousel.style.display = "none";
    bgcCarousel.style.display = "none";
};



















// imgCarousel.map(img => {
//     img.addEventListener('click', function(){
//         console.log("cliqué");
//         divCarousel.style.display = 'block';
//     })
// })
    // imgCarousel.addEventListener('click',function(){
    //     divCarousel.style.display = 'block';
    // });


