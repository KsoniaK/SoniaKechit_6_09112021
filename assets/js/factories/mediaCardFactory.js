// page individuelle
function mediaCardFactory(media) {
        const photosMedia = `<a href="javascript:openModalCarousel()"><img src="/assets/images/photos/${photographerFiltres[0].name}/${media.image}" class="images-media" alt="${media.title}" data-id='${media.id}'/></a>`
        const videosMedia = `<a href="javascript:openModalCarousel()"><video src="/assets/images/photos/${photographerFiltres[0].name}/${media.video}" class="videos-media" controls="controls" alt="${media.title}" data-id='${media.id}'></video></a>`
        
        return `<article class="media">
                        ${media.image ? photosMedia : videosMedia}
                            <div class='description-photos'>
                                <p class='titre-photo'>${media.title}</p>
                                <div class='div-jaime'>
                                    <p class='jaime-photo' data-id="${media.id}">${media.likes}</p>
                                    <img onclick="likes(this)" src="/assets/images/like.png" class='likes-img' data-id="${media.id}" alt="likes"/>
                                </div>
                            </div>
                    </article>`
};
