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

        // filtres(medias);
    });
};

async function initMedia() {
    const { medias, photographers } = await getMedia();

    const allMedias = medias.filter(medi => Number(idUrl) === medi.photographerId);
    const photographerFiltres = photographers.filter(photograph => Number(idUrl) === photograph.id);
    displayDataMedia(allMedias, photographerFiltres);
};
initMedia();


// Likes
function likes(imgLike){
    const idMedia = imgLike.getAttribute('data-jaime');
    const pElt = document.querySelector(`p[data-jaime = '${idMedia}' ]`);

        let nbrLike = Number(pElt.textContent) + 1;
        pElt.textContent = nbrLike;

        // Likes total
        function allLikes(){
            const pElts = Array.from(document.querySelectorAll(`p[data-jaime]`));
            const pTotal = document.getElementById('picture');
            
            // 
            const sumLikes = pElts
            .map(pElt => Number(pElt.textContent))
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

            //affichage résultat
            pTotal.textContent = sumLikes;

            // Version moins simplifiée
            // const addition = pElts.map(pElt => {
            //     return Number(pElt.textContent)
            // })
            // const sumLikes = addition.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
            // pTotal.textContent = sumLikes;
        }
        allLikes();
    }


