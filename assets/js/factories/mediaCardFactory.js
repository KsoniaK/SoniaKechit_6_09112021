/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// page individuelle
function mediaCardFactory(media) {
	const photosMedia = `<img src="/assets/images/photos/${photographerFiltres[0].name}/${media.image}" class="images-media" alt="${media.title}"/>`;
	const videosMedia = `<video src="/assets/images/photos/${photographerFiltres[0].name}/${media.video}" class="videos-media" controls="controls" alt="${media.title}"></video>`;

	return `
        <article class="media">
            <div data-id="${media.id}" onclick="openModalCarousel(this)">
                ${media.image ? photosMedia : videosMedia}
            </div>
            <div class="description-photos">
                <p class="titre-photo">${media.title}</p>
                <div class="div-jaime">
                    <p class="jaime-photo" data-id="${media.id}">${media.likes}</p>
                    <img onclick="likes(this)" src="/assets/images/like.png" class="likes-img" data-id="${media.id}" alt="likes"/>
                </div>
            </div>
        </article>`;
}
