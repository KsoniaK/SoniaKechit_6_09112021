let sumLikes;


function likesTotal(price, likes){
    const sectionLikesTotal = document.getElementById('compteur-likes_prix');

    sectionLikesTotal.innerHTML = 
        `
        <div class='compteur-likes_prix_bas-de-page'>
            <p id='picture'>${likes}</p>
            <img src='/assets/images/like.png' alt='likes total'>
         </div>
         <div class='prix'>
            <p id='prix-photographe'>${price}$ / jour</p>
         </div>
        `
        return(sectionLikesTotal);
};

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
        
        // map et reduce pour additionner les likes
        sumLikes = pElts
        .map(pElt => Number(pElt.textContent))
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

        //affichage résultat
        pTotal.textContent = sumLikes;
    };
    allLikes();
    console.log(sumLikes);
};

