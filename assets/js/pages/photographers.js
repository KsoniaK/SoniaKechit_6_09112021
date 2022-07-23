const url = new URLSearchParams(window.location.search);
const idUrl = url.get("id");
let allMedias, photographerFiltres;

async function createCardGallery() {
    const listeMedia = document.getElementById('liste-media');
    listeMedia.innerHTML = "";
    headerPhotographer();

    allMedias.forEach(media => listeMedia.innerHTML += mediaCardFactory(media));
};

async function init() {
    allMedias = multimedias.medias.filter(medi => Number(idUrl) === medi.photographerId);
    photographerFiltres = multimedias.photographers.filter(photograph => Number(idUrl) === photograph.id);
    createDropDown();
    createCardGallery();
    total();
};


    

