let url = new URLSearchParams(window.location.search)

let idUrl = url.get("id");
// console.log(idUrl);


async function getMedia() {
    // méthode fecth sans async et await
    return fetch("./assets/data/photographers.json")
    .then(response => response.json())
    .then(response2 => {
        return response2;
        // console.log(response2.media);
        // console.log(response2.media[0].photographerId);
    });
}
async function displayDataMedia(media) {
    const mediaSection = document.querySelector(".media_profil");

    media.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
};

async function initMedia() {
    const { media } = await getMedia();
    // console.log(media);
    console.log('moi id: ', idUrl);
    //tab
    media.forEach(mediaPhotograph => {
        console.log(mediaPhotograph.photographerId);
        if(Number(idUrl) === mediaPhotograph.photographerId){
            //push
        } 
    })
    
    displayDataMedia(mediaPhotograph);
    // mettre le tableau en paramètre




};
initMedia();


// let eleves = [
//     {
//         name: "soso",
//         age: 31
//     },
//     {
//         name: "sarah",
//         age: 26
//     }
// ];
// // console.log(eleves);
// eleves.forEach(eleve => {
//     // console.log(eleve.name);
// })
