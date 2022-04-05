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

async function displayDataMedia(medias, photographerFiltres) {
    const listeMedia = document.getElementById('liste-media');
    const [photographer] = photographerFiltres;

    headerPhotographer(photographer);
    likesTotal(photographer);

    medias.forEach((media) => {
        listeMedia.innerHTML += mediaFactory(media, photographer.name);

        dateFiltre(media.date);
    });
};

async function initMedia() {
    const { medias, photographers } = await getMedia();
    const allMedias = medias.filter(medi => Number(idUrl) === medi.photographerId);
    const photographerFiltres = photographers.filter(photograph => Number(idUrl) === photograph.id);
    allMedias.sort(function(a, b) {
        var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    });
    // console.log(allMedias);
    displayDataMedia(allMedias, photographerFiltres);
};
initMedia();


    