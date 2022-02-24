// page individuelle
function mediaFactory(media, photographer) {

    const {image, title, likes, photographerId, video, id} = media;
    const [{name, portrait, city, country, tagline}] = photographer;

    const pictures = `/assets/images/photos/${name}/${image}`;
    const videos = `/assets/images/photos/${name}/${video}`;
    const portraitHeader = `/assets/images/photos/Photographers_ID_Photos/${portrait}`;
    const likeImg = `/assets/images/like.png`;

    function getMediaCardDOM() {
        // création des élements
        const imgHeader = document.getElementById("photographer-header");
        const h2_modal = document.getElementById( 'h2-modal' );
        // ----------------
        const medias = document.getElementById('liste-medias');
        const h1 = document.getElementById( "titre-header" );
        const ville__pays = document.getElementById( 'ville-pays_header' );
        const proverbe = document.getElementById( 'proverbe-header' );
        // const headerPhtotograph = `<div>
        //                                 <h1 id="titre-header">${name}</h1>
        //                                 <h2 id="ville-pays_header">${city + ", " + country}</h2>
        //                                 <p id="proverbe-header">${tagline}</p>
        //                            </div>`
        // const section = `<section id=${photographerId} class='media'>
        //                     <img src="${pictures}"" id='images-medias' onclick='displayModalPicture()' onerror="this.style.display='none'"></img>
        //                     <video src="${videos}" controls='controls' onerror="this.style.display='none'"></video>
        //                     <div class='description-photos'>
        //                         <p>${title}</p>
        //                         <p class='jaime-photo' data-jaime="${id}">${likes}</p>
        //                         <img src="${likeImg}" class='likes-img' data-id="${id}"></img>
        //                     </div>
        //                 </section>`
        medias.innerHTML = `<section id=${photographerId} class='media'>
                                ${photographer.map((photographer, index) =>
                                    )}
                                <img src="${pictures}" id='images-medias' onclick='displayModalPicture()' onerror="this.style.display='none'"></img>
                                <video src="${videos}" controls='controls' onerror="this.style.display='none'"></video>
                                <div class='description-photos'>
                                    <p>${title}</p>
                                    <p class='jaime-photo' data-jaime="${id}">${likes}</p>
                                    <img src="${likeImg}" class='likes-img' data-id="${id}"></img>
                                </div>
                            </section>`
        // const section = document.createElement( 'section' );
        // const img = document.createElement( 'img' );
        // const vid = document.createElement( 'video');
        // const div = document.createElement( 'div' );
        // const titre = document.createElement( 'p' );
        // const jaime= document.createElement( 'p' );
        // const test = document.createElement( 'img' );
        // const prix_photographe = document.getElementById("prix-photographe");

        // ajout d'un attribut
        imgHeader.setAttribute("src", portraitHeader);
        imgHeader.classList.add("photographer-header");
        // img.setAttribute("id", "images-medias");
        // section.setAttribute("id", photographerId);
        // img.setAttribute("src", pictures);
        // test.setAttribute("src", likeImg);
        // vid.setAttribute("src", videos);
        // img.setAttribute("onclick", "displayModalPicture()");
        // vid.setAttribute("controls", "controls");
        // Fonction : Si une balise image ou une balise vidéo est vide, Alors: cacher la balise // Si une balise immage ou une balise vidéo renvoie un message d'erreur, Alors: la cacher
        // img.setAttribute("onerror", "this.style.display='none'");
        // vid.setAttribute("onerror", "this.style.display='none'");
        // test.setAttribute("data-id", id);
        // jaime.setAttribute("data-jaime", id);
        // div.classList.add("description-photos");
        // jaime.classList.add("jaime-photo");
        // section.classList.add("media");
        // test.classList.add("likes-img");

        // leur attribuer du contenu. Ici objets JSON
        h2_modal.textContent = "Contactez-moi " + name;
        h1.textContent = name;
        ville__pays.textContent = city + ", " + country;
        proverbe.textContent = tagline;
        // prix_photographe.textContent = price;
        // titre.textContent = title;
        // jaime.textContent = likes;

        // les placer dans le DOM
        // section.appendChild(img);
        // section.appendChild(vid);
        // section.appendChild(div);
        // div.appendChild(titre);
        // div.appendChild(jaime);
        // div.appendChild(test);

        // -----------------------

        // Likes
        // Quand l'image sur laquelle je click a un ID égal à l'ID du paragraphe de la même div, alors j'incrémente de 1 et j'affiche le résultat dans le paragraphe
        // const pData = document.getElementsByClassName("jaime-photo")
        // // console.log(pData);
        // const imgData = document.getElementsByClassName("likes-img")
        // const likeImgg = data.id;
    
        // let compteur = 0;
        // let array = [];
 
        // -----------------------

        return (medias);
    }
    
    return {pictures, videos, likeImg, portraitHeader, getMediaCardDOM }
}

// async function Test() {
//     const likeImgg = document.querySelector("data-likes");
//     likeImgg.addEventListener("click", function() {
//         console.log("c'est cliqué !");
//     })
// }
// Test();


// // Likes :
// const likes = document.getElementsByClassName("likes-img");
// const likePhoto = document.getElementById("picture");

// let compteur = 0;
// let array = Array.from(likes);
//     for (let i = 0; i < likes.length; i++) {
//         likes[i].addEventListener("click", function(){
//             compteur ++ ;
//             likePhoto.textContent = compteur
//             array.push(likes[i]);
//         }) 
//     }


// Carousel
// au clique sur la modal ouverture/fermeture
function displayModalPicture() {
    const carrousel = document.getElementById("carrousel");
	carrousel.style.display = "block";
    const mediaHide = document.getElementById("liste-medias");
    mediaHide.style.display = "none";
    const hide = document.getElementById("carousel-div");
    hide.style.display = "block";
    const headerHide = document.getElementById("header-photographer");
    headerHide.style.display = "none";
    
}
function closeModalPicture() {
    const carrouselClose = document.getElementById("carrousel");
    carrouselClose.style.display = "none";
    const mediaHide = document.getElementById("liste-medias");
    mediaHide.style.display = "flex";
    const hide = document.getElementById("carousel-div");
    hide.style.display = "none";
    const headerHide = document.getElementById("header-photographer");
    headerHide.style.display = "flex";
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
        div.style.backgroundImage = "url('./assets/images/photos/Mimi Keel/im"+i+".jpg')";
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
    
    container.style.transform = "translate("+ p *  800 + "px)";
    container.style.transition = "all O.5s ease";
}
// n'afficher que les photos des photographes sur lesquels on clique 
// au clique sur la photo d'un photographe
// n'afficher que ses médias OU afficher tous les médias et masquer les médias des photographes non concernés
