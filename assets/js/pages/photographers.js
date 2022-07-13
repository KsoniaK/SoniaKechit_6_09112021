const url = new URLSearchParams(window.location.search);
const idUrl = url.get("id");
let allMedias, photographerFiltres;

async function createCardGallery(medias, photographerFiltres) {
    const listeMedia = document.getElementById('liste-media');
    listeMedia.innerHTML = "";
    const [photographer] = photographerFiltres;

    headerPhotographer(photographer);    

    medias.forEach((media) => {
        listeMedia.innerHTML += mediaCardFactory(media, photographer.name);
        createDropDown(media);
        carousel(photographer.name, media);
        likesTotal(photographer.price, media.likes);
    });
    
};

async function init() {
    allMedias = multimedias.medias.filter(medi => Number(idUrl) === medi.photographerId);
    photographerFiltres = multimedias.photographers.filter(photograph => Number(idUrl) === photograph.id);
    trie();
    slide();
    // test();
};


    

