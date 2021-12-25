// page individuelle




function mediaFactory(data) {
    const {image, title, likes, photographerId} = data;
    // console.log(data.photographerId);

    const pictures = `/assets/images/photos/Mimi/${image}`;

    function getMediaCardDOM() {
        // création des élements
        const section = document.createElement( 'section' );
        const img = document.createElement( 'img' );
        const titre = document.createElement( 'p' );
        const jaime= document.createElement( 'p' );
        // ajout d'un attribut
        img.setAttribute("src", pictures);
        section.classList.add("media_profil");
        section.setAttribute("id", photographerId);
        // leur attribuer du contenu. Ici objets JSON
        titre.textContent = title;
        jaime.textContent = likes;
        // les placer dans le DOM
        // document.body.appendChild('section')
        section.appendChild(img);
        section.appendChild(titre);
        section.appendChild(jaime);
        return (section);
    }
    return {pictures, getMediaCardDOM }
}


// incrémentation pour le compteur likes
// exemple 1
// const like = document.getElementById("like");
// const totalLikes = document.getElementById("likes-total")
// const likePhoto = document.getElementById("picture")
// let compteur = 0;
//     like.addEventListener("click", function () {
//         compteur = compteur + 1;
//         likePhoto.textContent = " Nombre likes première photo " + compteur
//         totalLikes.innerHTML = " Likes total " + compteur

// });


// exemple 2
const like = document.getElementsByClassName("like");
const totalLikes = document.getElementById("likes-total")
const likePhoto = document.getElementById("picture")
let compteur = 0;
    for (let i = 0; i < like.length; i++) {
        like[i].addEventListener("click", function(){
            compteur ++ ;
            likePhoto.textContent = compteur
            totalLikes.innerHTML = " Likes total " + compteur
        }) 
    }
    // for (let i = 0; i < like.length; i++) {
    //     if(like == "clicked"){
    //         compteur -- ;
    //         likePhoto.textContent = compteur
    //         totalLikes.innerHTML = " Likes total " + compteur
    //     } 
    // }


// exemple 3
// const like = document.getElementById("like");
// const like2 = document.getElementById("like2");
// const like3 = document.getElementById("like3");
// const totalLikes = document.getElementById("likes-total")
// const likePhoto = document.getElementById("picture")
// const likePhoto2 = document.getElementById("picture2")
// const likePhoto3 = document.getElementById("picture3")
// let compteur = 0;
// let compteur2 = 0;
// let compteur3 = 0;
//     like.addEventListener("click", function () {
//         let compteurTotal = compteur + compteur2 + compteur3 +1;
//         compteur ++;
//         likePhoto.textContent = compteur
//         totalLikes.innerHTML = compteurTotal

// });
//     like2.addEventListener("click", function () {
//         let compteurTotal = compteur + compteur2 + compteur3 +1;
//         compteur2 ++;
//         likePhoto2.textContent = compteur2
//         totalLikes.innerHTML = compteurTotal

// });
//     like3.addEventListener("click", function () {
//         let compteurTotal = compteur + compteur2 + compteur3 +1;
//         compteur3 ++;
//         likePhoto3.textContent = compteur3
//         totalLikes.innerHTML = compteurTotal

// });



// carrousel
// au clique sur la modal ouverture/fermeture
function displayModalPicture() {
    const carrousel = document.getElementById("carrousel");
	carrousel.style.display = "block";
}
function closeModalPicture() {
    const carrouselClose = document.getElementById("carrousel");
    carrouselClose.style.display = "none";
}
// fonctionnement
document.body.onload=function(){
    nbr = 4;
    p = 0;
    // récupération des éléments dans le DOM
    container = document.getElementById("container");
    g = document.getElementById("g");
    d = document.getElementById("d");
    // on multiplie la taille du container par le nombre d'images
    container.style.width = (800*nbr) + "px";
    // boucle for pour afficher les images
    for (let i = 0; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('./assets/images/photos/Mimi/im"+i+".jpg')";
        container.appendChild(div);
    }
}
// au clique sur la flêche droite on décrémente pour faire défiler les images mais avec la conditions : si on arrive à la dernière image on arrête le carrousel
d.onclick = function(){
    if (p > -nbr + 1)
        p-- ;
    // on affiche les images dans la div container pour qu'elles aient les mêmes dimensions (effet défilement)
    container.style.transform = "translate("+ p * 800 + "px)";
    container.style.transition = "all O.5s ease";
}
// au clique sur la flêche gauche on incrémente pour faire défiler les images
g.onclick = function(){
    if (p < 0)
        p++ ;
    
    container.style.transform = "translate("+ p*  800 + "px)";
    container.style.transition = "all O.5s ease";
}

// n'afficher que les photos des photographes sur lesquels on clique 
// au clique sur la photo d'un photographe
// n'afficher que ses médias OU afficher tous les médias et masquer les médias des photographes non concernés







