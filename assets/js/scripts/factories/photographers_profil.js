// page individuelle
function mediaFactory(media, name) {

    const {image, title, likes, photographerId, video, id} = media;

    const pictures = `/assets/images/photos/${name}/${image}`;
    const videos = `/assets/images/photos/${name}/${video}`;
    const likeImg = `/assets/images/like.png`;

    function getMediaCardDOM() {
        // création des élements
        const titreModal = document.getElementById('h2-modal');
        const listeMedia = document.getElementById('liste-media');
        listeMedia.innerHTML =
            `<section id=${photographerId} class='media'>
                <img src="${pictures}" id='images-medias' alt="">
                <video src="${videos}" controls='controls'></video>
                <div class='description-photos'>
                    <p>${title}</p>
                    <p class='jaime-photo' data-jaime="${id}">${likes}</p>
                    <img src="${likeImg}" class='likes-img' data-id="${id}" alt="">
                </div>
            </section>`

        // leur attribuer du contenu. Ici objets JSON
        titreModal.textContent = "Contactez-moi " + name;
        return (listeMedia);
    }
    
    return {pictures, videos, likeImg, getMediaCardDOM }
}

