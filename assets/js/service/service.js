// Commentaires pour retirer les erreurs à ignorer dans eslint
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

let multimedias;

// Récupération des données dans fichier JSON
async function getMultiMedias() {
	return fetch('./assets/data/photographers.json')
		.then(response => response.json())
		.then(response2 => {
			return response2;
		});
}

// Fonction asynchrone
const serviceStart = async () => {
	// On attend que la fonction getMultiMedias() soit appelée puis on stock dans la variable multimedias
	multimedias = await getMultiMedias();
	init();
}; 
serviceStart();


