function photographerFactory(photographers) {
    const {portrait, name, city, country, tagline, price, id} = photographers;
    
    const picture = `/assets/images/photos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        // création des élements
        const article = document.createElement('article');
        const imgElt = document.createElement('img');
        const nom = document.createElement('h2');
        const ville = document.createElement('h3');
        const pays = document.createElement('h4');
        const proverbe = document.createElement('p');
        const prix = document.createElement('p');
        const link = document.createElement('a');

        // ajout d'un attribut
        link.setAttribute("href", `./photographer.html?id=${id}`);
        imgElt.setAttribute("src", picture);
        article.classList.add("photographers_profils");
        article.setAttribute("id", id);

        // leur attribuer du contenu. Ici objets JSON
        nom.textContent = name;
        ville.textContent = city;
        pays.textContent = country;
        proverbe.textContent = tagline;
        prix.textContent = price + "€/jour";

        // les placer dans le DOM
        article.appendChild(link);
        link.appendChild(imgElt);
        article.appendChild(nom);
        article.appendChild(ville);
        article.appendChild(pays);
        article.appendChild(proverbe);
        article.appendChild(prix); 
        return (article);
    }

    return {picture,  getUserCardDOM };
};



