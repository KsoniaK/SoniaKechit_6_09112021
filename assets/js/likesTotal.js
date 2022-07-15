function total(){
    const pElts = Array.from(document.querySelectorAll(`p[data-id]`));
    const likeTotalElmt = document.getElementById('like-total');
    const prix = document.getElementById('prix-photographe');
    let result = 0 ;

    prix.textContent = photographerFiltres[0].price;

    pElts.map(pElt => {
        const pEltsContent = Number(pElt.textContent);
        result += pEltsContent;
    });
    likeTotalElmt.textContent = result;
}

function likes(imgLike){
        const idMedia = imgLike.getAttribute('data-id');
        const pUser = document.querySelector(`p[data-id = '${idMedia}' ]`);

        let nbrLike = Number(pUser.textContent) + 1;
        pUser.textContent = nbrLike;
        total();
};
