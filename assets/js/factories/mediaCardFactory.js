// page individuelle
function mediaCardFactory(media, name) {
        const photosMedia = `<a href="javascript:openModalCarousel()"><img src="/assets/images/photos/${name}/${media.image}" class="images-media" alt="${media.title}" data-id='${media.id}'/></a>`
        const videosMedia = `<a href="javascript:openModalCarousel()"><video src="/assets/images/photos/${name}/${media.video}" class="videos-media" controls="controls" alt="${media.title}" data-id='${media.id}'></video></a>`
        
        return `<article class="media">
                        ${media.image ? photosMedia : videosMedia}
                            <div class='description-photos'>
                                <p class='titre-photo'>${media.title}</p>
                                <div class='div-jaime'>
                                    <p class='jaime-photo' data-jaime="${media.id}">${media.likes}</p>
                                    <img onclick="likes(this)" src="/assets/images/like.png" class='likes-img' data-jaime="${media.id}" alt="likes"/>
                                </div>
                            </div>
                    </article>`
};
