// Commentaires pour retirer les erreurs à ignorer dans eslint
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Création contenu page d'accueil sans template string
function photographerFactory(photographer) {
	const {portrait, name, city, country, tagline, price, id} = photographer;
	// chemin vers les images
	const picture = `/assets/images/photos/Photographers_ID_Photos/${portrait}`;

	function getUserCardDOM() {
		// création des élements
		const article = document.createElement('article');
		const imgElt = document.createElement('img');
		const nom = document.createElement('h2');
		const villePays = document.createElement('div');
		const ville = document.createElement('h3');
		const pays = document.createElement('h3');
		const proverbe = document.createElement('p');
		const prix = document.createElement('p');
		const link = document.createElement('a');

		// ajout d'un attribut
		link.setAttribute('href', `./photographer.html?id=${id}`);
		imgElt.setAttribute('src', picture);
		imgElt.setAttribute('alt', `${name}`);
		article.classList.add('photographers_profils');
		article.setAttribute('id', id);
		villePays.classList.add('ville-pays');
		prix.classList.add('prix-photographer');

		// leur attribuer du contenu. Ici objets JSON
		nom.textContent = name;
		ville.textContent = city + ',';
		pays.textContent = country;
		proverbe.textContent = tagline;
		prix.textContent = price + '€/jour';

		// les placer dans le DOM
		article.appendChild(link);
		link.appendChild(imgElt);
		link.appendChild(nom);
		article.appendChild(villePays);
		villePays.appendChild(ville);
		villePays.appendChild(pays);
		article.appendChild(proverbe);
		article.appendChild(prix); 

		return (article);
	}
	return {picture,  getUserCardDOM};
}



