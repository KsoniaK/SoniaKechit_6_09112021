// Commentaires pour retirer les erreurs à ignorer dans eslint
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Ouverture Carousel
let index, last, mediaEnd;
function openModalCarousel(div) {	
	last = allMedias.length - 1;
	const idMediaCarousel = Number(div.getAttribute('data-id'));
	
	// Au clic sur le media , vérification correspondance id
	const mediaClick = allMedias.filter(media => media.id === idMediaCarousel)[0];
	
	// Recherche de l'index du média cliqué
	index = allMedias.map(media => media.id).indexOf(idMediaCarousel);
	createMultimedia(mediaClick);
}

// Création Carousel
function createMultimedia(mediaNeed) {
	
	// Vérification si image ou vidéo, créer la balise en conséquence
	mediaEnd = mediaNeed.image ?
		`<img src="./assets/images/photos/${photographerFiltres[0].name}/${mediaNeed.image}" alt="${mediaNeed.title}" data-id="${mediaNeed.id}"/>`
		:
		`<video src="./assets/images/photos/${photographerFiltres[0].name}/${mediaNeed.video}" controls="controls" alt="${mediaNeed.title}" data-id="${mediaNeed.id}"></video>`;

	document.querySelector('.divCarousel-multimedias').innerHTML= mediaEnd;
	document.querySelector('.carouselPhotosNames').innerHTML= `${mediaNeed.title}`;
	document.querySelector('.modalCarousel').style.display = 'block';
	document.getElementById('bgc-carousel').style.display = 'block';
}

// Fermeture Carousel
function closeModalCarousel() {
	document.querySelector('.modalCarousel').style.display = 'none';
	document.getElementById('bgc-carousel').style.display = 'none';
}

// Boutons Next et Prev
function next(){
	// Si on arrive sur la dernière image, revenir à la première
	if (index === last) {
		index = 0; 
		createMultimedia(allMedias[index]);
		return; 
	}
	// Si non, incrémentation
	index += 1;
	createMultimedia(allMedias[index]);
}

function prev() {
	// Si on est sur la première image, afficher la dernière image
	if (index === 0) {
		index = last;    
		createMultimedia(allMedias[index]);
		return; 
	}
	// Si non, décrémentation
	index -= 1;
	createMultimedia(allMedias[index]);
}