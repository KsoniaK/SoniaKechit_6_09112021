// Likes total page photographer
function likesTotal(photographer){
    const sectionLikesTotal = document.getElementById('compteur-likes_prix');

    sectionLikesTotal.innerHTML = 
        `<div class='compteur-likes_prix_bas-de-page'>
            <p id='picture'></p>
            <img src='/assets/images/like.png' alt=''>
         </div>
         <div class='prix'>
            <p id='prix-photographe'>${photographer.price}$ / jour</p>
         </div>
        `
        return(sectionLikesTotal);
};
