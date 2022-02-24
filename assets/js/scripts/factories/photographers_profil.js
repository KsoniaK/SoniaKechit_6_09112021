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
                                <img src="${pictures}" id='images-medias' onclick='displayModalPicture()' onerror="this.style.display='none'"></img>
                                <video src="${videos}" controls='controls' onerror="this.style.display='none'"></video>
                                <div class='description-photos'>
                                    <p>${title}</p>
                                    <p class='jaime-photo' data-jaime="${id}">${likes}</p>
                                    <img src="${likeImg}" class='likes-img' data-id="${id}"></img>
                                </div>
                            </section>`


        // ajout d'un attribut
        imgHeader.setAttribute("src", portraitHeader);
        imgHeader.classList.add("photographer-header");

        // leur attribuer du contenu. Ici objets JSON
        h2_modal.textContent = "Contactez-moi " + name;
        h1.textContent = name;
        ville__pays.textContent = city + ", " + country;
        proverbe.textContent = tagline;

        return (medias);
    }
    
    return {pictures, videos, likeImg, portraitHeader, getMediaCardDOM }
}


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
