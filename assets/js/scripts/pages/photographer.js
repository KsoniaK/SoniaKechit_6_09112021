const url = new URLSearchParams(window.location.search);
const idUrl = url.get("id");

async function getMedia() {
    // méthode fecth sans async et await
    return fetch("./assets/data/photographers.json")
    .then(response => response.json())
    .then(response2 => {
        return response2;
    });
};

async function displayDataMedia(medias, photographer) {
    const mediaSection = document.querySelector(".media_profil");
    // fubnction NamedNodeMap(photographer)
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer.name);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });


};

async function initMedia() {
    const { medias, photographers } = await getMedia();

    const allMedias = medias.filter(medi => Number(idUrl) === medi.photographerId);
    const photographer = photographers.filter(photograph => Number(idUrl) === photograph.id);
    displayDataMedia(allMedias, photographer);
};
initMedia();

