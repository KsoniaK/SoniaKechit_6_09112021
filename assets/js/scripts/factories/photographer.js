function photographerFactory(data2) {
    const {portrait, name, city, country, tagline, price, id} = data2;

    const picture = `/assets/images/photos/Photographers_ID_Photos/${portrait}`;
    // const test = `${name}`

    function getUserCardDOM() {
        // création des élements
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const nom = document.createElement( 'h2' );
        const ville_pays = document.createElement( 'h3' );
        const pays = document.createElement( 'h4' );
        const dicton = document.createElement( 'p' );
        const prix = document.createElement( 'p' );
        const a = document.createElement( 'a' )
        // ajout d'un attribut
        a.setAttribute("href", `./photographer.html?id=${id}`)
        img.setAttribute("src", picture)
        article.classList.add("photographers_profils")
        article.setAttribute("id", id)
        // leur attribuer du contenu. Ici objets JSON
        nom.textContent = name;
        ville_pays.textContent = city + ", " + country;
        dicton.textContent = tagline;
        prix.textContent = price + "€/jour";
        // les placer dans le DOM
        article.appendChild(a);
        a.appendChild(img);
        article.appendChild(nom);
        article.appendChild(ville_pays, pays);
        article.appendChild(dicton);
        article.appendChild(prix); 
        return (article);
    }

    return {picture,  getUserCardDOM };
}

// const premierTest = document.getElementsByTagName("article");
// console.log(premierTest);

// premierTest.addEventListener('click', check);

// function check(){
//     if(premierTest == ".photographers_profils"){
//         alert("C'est MIMI!")
//     }else{
//         alert("C'est PAS mimi")
//     }
// }



