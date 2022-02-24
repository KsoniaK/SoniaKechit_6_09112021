// page individuelle
function mediaFactory(media) {

    const {image, title, likes, photographerId, video, id} = media;

    const pictures = `/assets/images/photos/${name}/${image}`;
    const videos = `/assets/images/photos/${name}/${video}`;
    const portraitHeader = `/assets/images/photos/Photographers_ID_Photos/${portrait}`;
    const likeImg = `/assets/images/like.png`;

    function getMediaCardDOM() {
        // création des élements
        const imgHeader = document.getElementById("photographer-header");
        const titreModal = document.getElementById('h2-modal');
        const medias = document.getElementById('liste-medias');
        const titreHeader = document.getElementById("titre-header");
        const villePays = document.getElementById('ville-pays_header');
        const proverbe = document.getElementById('proverbe-header');
        medias.innerHTML =
            `<section id=${photographerId} class='media'>
                <img src="${pictures}" id='images-medias'></img>
                <video src="${videos}" controls='controls'></video>
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
        titreModal.textContent = "Contactez-moi " + name;
        titreHeader.textContent = name;
        villePays.textContent = city + ", " + country;
        proverbe.textContent = tagline;
        return (medias);
    }
    
    return {pictures, videos, likeImg, portraitHeader, getMediaCardDOM }
}

