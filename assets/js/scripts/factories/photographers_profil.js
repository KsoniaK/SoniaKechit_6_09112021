// page individuelle
function mediaFactory(media, name) {
        const photosMedia = `<img src="/assets/images/photos/${name}/${media.image}" class="images-media" alt=""/>`
        const videosMedia = `<video src="/assets/images/photos/${name}/${media.video}" class="videos-media" controls="controls"></video>`
        
        return `<article id="${media.photographerId}" class='media'>
                        ${media.image ? photosMedia : videosMedia}
                            <div class='description-photos'>
                                <p>${media.title}</p>
                                <p class='jaime-photo' data-jaime="${media.id}">${media.likes}</p>
                                <img onclick="likes(this)" src="/assets/images/like.png" class='likes-img' data-jaime="${media.id}" alt="bouton-likes"/>
                            </div>
                    </article>`
};


        // divCarousel.innerHTML = 
        // `<div id="carousel-container">
        //     <img class='carousel-img' src="/assets/images/photos/${name}/${medias.image}"/>
        //  </div>
        //  <i class="fas fa-chevron-left bouton" id="g"></i>
        //  <i class="fas fa-chevron-left bouton" id="d"></i>
        //  <img onclick="closeModalPicture()" src="assets/images/close.svg" alt="fermeture modal photo" id="carousel-close">
        // `
