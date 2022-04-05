// page individuelle
function mediaFactory(media, name) {
        const photosMedia = `<img onclick="openCarousel()" src="/assets/images/photos/${name}/${media.image}" class="images-media" alt=""/>`
        const videosMedia = `<video onclick="openCarousel()" src="/assets/images/photos/${name}/${media.video}" class="videos-media" controls="controls"></video>`
        
        return `<article class="media">
                        ${media.image ? photosMedia : videosMedia}
                            <div class='description-photos'>
                                <p class='titre-photo'>${media.title}</p>
                                <div class='div-jaime'>
                                    <p class='jaime-photo' data-jaime="${media.id}">${media.likes}</p>
                                    <img onclick="likes(this)" src="/assets/images/like.png" class='likes-img' data-jaime="${media.id}" alt="bouton-likes"/>
                                </div>
                            </div>
                    </article>`
};
