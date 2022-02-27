// page individuelle
function mediaFactory(media, name, medias) {
    const {image, title, likes, photographerId, video, id} = media;

    const pictures = `/assets/images/photos/${name}/${image}`;
    const videos = `/assets/images/photos/${name}/${video}`;
    const likeImg = `/assets/images/like.png`;
    

    function getMediaCardDOM() {
        // création des élements
        const listeMedia = document.getElementById('liste-media');

        listeMedia.innerHTML =
        `${medias.map(function (media){
                return `<section id="${photographerId}" class='media'>
                            <img src="/assets/images/photos/${name}/${media.image}" class='images-media' alt="">
                            <video src="/assets/images/photos/${name}/${media.video}" class="videos-media" controls='controls'></video>
                            <div class='description-photos'>
                                <p>${media.title}</p>
                                <p class='jaime-photo' data-jaime="${media.id}">${media.likes}</p>
                                <img src="${likeImg}" class='likes-img' data-id="${media.id}" alt="">
                            </div>
                        </section>`
            }).join('')}
            `
            
            // function errorMessage() {
            //     const img = document.getElementsByClassName('images-media');
            //     // const vid = document.getElementById('videos-media');
                
            //     console.log(typeof img);
            //     console.log(img);
            //     // errorMessage
                
            //     if(img === undefined){
            //         console.log("null ou undefined");
            //         // img.style.display = "none";
            //         // vid.style.display = "none";
            //     }else{
            //         console.log("ok");
            //     }
            // }
            // errorMessage();
            
            return (listeMedia);
        }
        return {pictures, videos, likeImg, getMediaCardDOM}
    }

    